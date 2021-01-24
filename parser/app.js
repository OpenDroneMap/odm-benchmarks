/** ----------------------------------------------------------------------------
 * app.js
 * 
 * For reading the raw benchmarks and configuration data, and writing 
 * the summary data into the human-readable README.md
 * 
 * USAGE: node app.js
 * 
 * -----------------------------------------------------------------------------
 */

"use strict";

const csv = require('csv-parser')
const fs = require('fs');
const async = require("async");
const outputSeparator = "]------------------------------------------[";
const config = {};

require ('./configuration')(config);

// ----------------------------- START -----------------------------------------

console.log(outputSeparator);
console.log('Starting benchmarks data parsing');
console.log('  Datasets: ' + config.inFileDatasets);
console.log('  Benchmarks: ' + config.inFileBenchmarks);
console.log(outputSeparator);

async.waterfall([
  readDatasets,
  readBenchmarks,
  parseUniqueDatasets,
  parseUniqueVersions,
  clearOutputFiles,
  parseByDataset,
  writeByDataset,
  parseByVersion,
  writeByVersion,
  displayResults
], function(err, result) {
  if(err) console.log('ERROR: ' + err);
  console.log('all done');
});

// -----------------------------  END  -----------------------------------------


function readDatasets(callback) {

  let processingData = {
    datasetRecords: [], 
    benchmarkRecords: [],
    datasets: [],
    versions: []
  };

  console.log('Reading dataset definitions')
  fs.createReadStream(config.inFileDatasets)
    .pipe(csv())
    .on('data', (data) => processingData.datasetRecords.push(data))
    .on('end', () => {
      console.log('Num defined datasets: ' + processingData.datasetRecords.length);
      callback(null, processingData);
    });

}

function readBenchmarks(processingData, callback) {
  console.log('Reading raw benchmarks data');
  fs.createReadStream(config.inFileBenchmarks)
    .pipe(csv())
    .on('data', (data) => processingData.benchmarkRecords.push(data))
    .on('end', () => {
      console.log('Num benchmark records: ' + processingData.benchmarkRecords.length);
      callback(null, processingData);
    });
}

function parseUniqueDatasets(processingData, callback) {
  console.log('Parsing unique datasets');
  for(let i=0; i<processingData.benchmarkRecords.length; i++) {
    let benchmarkRecord = processingData.benchmarkRecords[i];
    let datasetName = benchmarkRecord.DATASET;
    if(!processingData.datasets.includes(datasetName)) processingData.datasets.push(datasetName);
  }
  processingData.datasets.sort();
  callback(null, processingData);
}

function parseUniqueVersions(processingData, callback) {
  console.log('Parsing unique ODM versions');
  for(let i=0; i<processingData.benchmarkRecords.length; i++) {
    let benchmarkRecord = processingData.benchmarkRecords[i];
    let odmVersion = benchmarkRecord.ODM_VERSION;
    if(!processingData.versions.includes(odmVersion)) processingData.versions.push(odmVersion);
  }
  processingData.versions.sort();
  processingData.versions.reverse();
  callback(null, processingData);
}

function clearOutputFiles(processingData, callback) {
  async.series([
    function(callback) {
      fs.unlink(config.outFileByDataset, function(err) {
        if(err) callback(null, 'ERR');
        else callback(null, 'OK');
      });
    }, 
    function(callback) {
      fs.unlink(config.outFileByVersion, function(err) {
        if(err) callback(null, 'ERR');
        else callback(null, 'OK');
      });
    }
  ],
    function(err, results) {
      console.log('File clear results: ' + results);
      callback(null, processingData);
    }
  );
}

function parseByDataset(processingData, callback) {
  console.log('Parsing by dataset');
  processingData.byDatasetString = '';
  processingData.byDatasetString += getFileWarning();
  for(let i=0; i<processingData.datasets.length; i++) {
    let datasetName = processingData.datasets[i];
    console.log('  Parse ' + datasetName);
    processingData.byDatasetString += readBenchmarksByDataset(
      datasetName, 
      processingData.datasetRecords, 
      processingData.benchmarkRecords
    );
  }
  processingData.byDatasetString += getFileWarning();
  callback(null, processingData);
}

function readBenchmarksByDataset(datasetName, datasetRecords, benchmarkRecords) {

  let appendString = '';
  let datasetRecord = null;
  let benchmarkRecord = null;

  appendString += datasetName + '\n';
  for(let i=0; i<datasetRecords.length; i++) {
    datasetRecord = datasetRecords[i];
    if(datasetRecord.DATASET != datasetName) continue;
    appendString += 'Photos: ' + datasetRecord.PHOTO_COUNT + '\n';
    appendString += 'Collected: ' + datasetRecord.COLLECTED_MONTH + '\n';
    appendString += 'URL: ' + datasetRecord.DATASET_URL + '\n';
    appendString += datasetRecord.DESCRIPTION + '\n';
  }

  appendString += getFieldHeaderString();

  for(let i=0; i<benchmarkRecords.length; i++) {
    benchmarkRecord = benchmarkRecords[i];
    if(benchmarkRecord.DATASET != datasetName) continue;
    if(benchmarkRecord.PROCESSING_SUCCESS != 'Y') continue;
    appendString += getBenchmarkRecordString(benchmarkRecord);
  }

  appendString += '\n\n';

  return appendString;

}

function writeByDataset(processingData, callback) {
  console.log('Writing benchmarks by dataset: ' + config.outFileByDataset);
  fs.writeFile(
    config.outFileByDataset, 
    processingData.byDatasetString, 
    function(err) {
      if(err) console.log('File write error: ' + err);
      callback(null, processingData);
    }
  ); 
}

function parseByVersion(processingData, callback) {
  console.log('Parsing by version');
  processingData.byVersionString = '';
  processingData.byVersionString += getFileWarning();
  for(let i=0; i<processingData.versions.length; i++) {
    let versionName = processingData.versions[i];
    console.log('  Parse ' + versionName);
    processingData.byVersionString += readBenchmarksByVersion(
      versionName, 
      processingData.benchmarkRecords
    );
  }
  processingData.byVersionString += getFileWarning();
  callback(null, processingData);
}

function readBenchmarksByVersion(versionName, benchmarkRecords) {

  let appendString = '';
  let benchmarkRecord = null;

  appendString += 'OpenDroneMap Version ' + versionName + '\n';

  appendString += getFieldHeaderString();

  for(let i=0; i<benchmarkRecords.length; i++) {
    benchmarkRecord = benchmarkRecords[i];
    if(benchmarkRecord.ODM_VERSION != versionName) continue;
    if(benchmarkRecord.PROCESSING_SUCCESS != 'Y') continue;
    appendString += getBenchmarkRecordString(benchmarkRecord);
  }
  appendString += '\n\n';

  return appendString;

}

function writeByVersion(processingData, callback) {
  console.log('Writing benchmarks by version: ' + config.outFileByVersion);
  fs.writeFile(
    config.outFileByVersion, 
    processingData.byVersionString, 
    function(err) {
      if(err) console.log('File write error: ' + err);
      callback(null, processingData);
    }
  ); 
}

function getFieldHeaderString() {
  let appendString = '';
  appendString += '----------------------------------------------------------------------------------------------------------------------\n';
  appendString += '   DATASET |    TIME |  TEST DATE |    RAM |     CPU TYPE | CORES |    ODM |     PRESET |  RESIZE |      ADDL CONFIG |\n';
  appendString += '----------------------------------------------------------------------------------------------------------------------\n';
  return appendString;
}

function getBenchmarkRecordString(benchmarkRecord) {

  let benchmarkRecordString = '';
  try {
    benchmarkRecordString += benchmarkRecord.DATASET.substring(0, 10).padStart(10, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.PROCESSING_TIME.padStart(7, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.TEST_DATE.padStart(10, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.RAM_SIZE.padStart(6, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.CPU_TYPE.substring(0, 12).padStart(12, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.CPU_NUM_CORES.substring(0, 5).padStart(5, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.ODM_VERSION.padStart(6, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.CONFIG_NAME.substring(0, 10).padStart(10, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.CONFIG_RESIZE.padStart(7, ' ') + ' | ';
    benchmarkRecordString += benchmarkRecord.CONFIG_OTHER.substring(0, 16).padStart(16, ' ') + ' | ';
    benchmarkRecordString += '\n';
  } catch(err) {
    if(err) console.log('Parse error: ' + err);
  }
  return benchmarkRecordString;
}

function getFileWarning() {
  let appendString = '';
  appendString += '=============================================================================================\n';
  appendString += '    This file is automatically generated from the benchmarks CSV data.  Do not edit.\n';
  appendString += '=============================================================================================\n';
  appendString += '\n\n';
  return appendString;
}

function displayResults(processingData, callback) {
  console.log(outputSeparator);
  console.log('Benchmark data processing complete')
  console.log('  Benchmark records: ' + processingData.benchmarkRecords.length);
  console.log('  Unique datasets: ' + processingData.datasets.length);
  console.log('  Unique ODM versions: ' + processingData.versions.length);
  console.log(outputSeparator);
}
