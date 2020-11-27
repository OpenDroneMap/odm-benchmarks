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
  writeByDataset,
  //writeByVersion,
  displayResults
], function(err, result) {
  if(err) console.log('ERROR: ' + err);
  console.log('all done');
});

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
  //console.log(JSON.stringify(processingData.datasets));
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
  //console.log(JSON.stringify(processingData.versions));
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

function writeByDataset(processingData, callback) {
  console.log('Writing by dataset');
  processingData.byDataset = '';
  for(let i=0; i<processingData.datasets.length; i++) {
    let datasetName = processingData.datasets[i];
    console.log('  write ' + datasetName);
    writeDataset(
      config.outFileByDataset, 
      datasetName, 
      processingData.datasetRecords, 
      processingData.benchmarkRecords, 
      function(err) {
        if(err) {
          console.log('Write error: ' + err);
        }
      }
    );
    //appendRecords(datasetName, processingData.byDataset);
    //let odmVersion = benchmarkRecord.ODM_VERSION;
    //if(!processingData.versions.includes(odmVersion)) processingData.versions.push(odmVersion);
  }

  //...
  callback(null, processingData);
}

function writeDataset(fileName, datasetName, datasetRecords, benchmarkRecords) {

  //  var fs = require('fs')
  var writer = fs.createWriteStream(fileName, {flags: 'a'});

  writer.write(datasetName + '\n') // append string to your file
  writer.write('more data\n') // again
  writer.write('and more\n') // again

  writer.end() // close string

  //...

}

function displayResults(processingData, callback) {
  console.log(outputSeparator);
  console.log('Benchmark data processing complete')
  console.log('  Benchmark records: ' + processingData.benchmarkRecords.length);
  console.log('  Unique datasets: ' + processingData.datasets.length);
  console.log('  Unique ODM versions: ' + processingData.versions.length);
  console.log(outputSeparator);
}


// write
// fs.writeFile("out/test.out", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// }); 

// read columns
// fs.createReadStream(inFileColumns)
//   .pipe(csv())
//   .on('data', (data) => columnRecords.push(data))
//   .on('end', () => {
//     console.log('*** columns ***');
//     console.log(columnRecords);
//   });

// read datasets
// fs.createReadStream(inFileDatasets)
//   .pipe(csv())
//   .on('data', (data) => datasetRecords.push(data))
//   .on('end', () => {
//     console.log('*** read datasets ***');
//     //console.log(datasetRecords);
//   });

// // read benchmarks
// fs.createReadStream(inFileBenchmarks)
//   .pipe(csv())
//   .on('data', (data) => benchmarkRecords.push(data))
//   .on('end', () => {
//     console.log('*** read benchmarks ***');
//     //console.log(benchmarkRecords);
//   });

// read unique datasets
// console.log('read datasets');
// for(let i=0; i<benchmarkRecords.length; i++) {
  
//   //record = {};
//   benchmarkRecord = benchmarkRecords[i];
//   //record.requestName = request.name;
//   //benchmarkRecord
//   console.log('  Record ' + i + ': ' + benchmarkRecord.DATASET);

// }

// read unique ODM versions

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// let inputFile = 'NOT_SET';
// let outputFile = 'out/test.csv';
// let csvWriter;
// let resultData, requestList, request, iterations;
// let requestTimeList, requestTime;
// let testPassFailCounts, testPassFailItems, testPassFail;
// let record;
// let recordList = [];


// // ------------------------------------- PARSE ARGUMENTS -----------------------

// var args = process.argv.slice(2);

// if(args.length === 1) {
//   inputFile = args[0];
// }
// else showUsage();


// // ------------------------------------- MAIN ----------------------------------

// console.log('--------------------------------------------------');
// console.log('  inputFile: ' + inputFile);
// console.log('  outputFile: ' + outputFile);
// console.log('--------------------------------------------------');

// // set up output file
// try {
//   csvWriter = createCsvWriter({
//       path: outputFile,
//       header: [
//           {id: 'requestName', title: 'TEST'},
//           {id: 'iterations', title: 'ITERATIONS'},
//           {id: 'requestTimeAvg', title: 'REQ_TIME_AVG'},
//           {id: 'requestTimeLow', title: 'REQ_TIME_LOW'},
//           {id: 'requestTimeHigh', title: 'REQ_TIME_HIGH'},
//           {id: 'passTotal', title: 'PASS_TOTAL'},
//           {id: 'failTotal', title: 'FAIL_TOTAL'}
//       ]
//   });  
// } catch(err) {
//   console.log('Failed to establish output file: ' + err);
//   process.exit(1);
// }

// // load and parse datafile
// try  {
//   resultData = require('./' + inputFile);
// } catch(err) {
//   console.log('Failed to load datafile: ' + err);
//   process.exit(1);
// }

// // parse results
// try  {
//   requestList = resultData.results;
//   console.log('Requests: ' + requestList.length);
//   for(let i=0; i<requestList.length; i++) {
    
//     record = {};
//     request = requestList[i];
//     record.requestName = request.name;
//     console.log('  Request ' + i + ': ' + record.requestName);
    
//     // request times
//     record.requestTimeLow = null;
//     record.requestTimeHigh = 0.0;
//     record.requestTimeAvg = 0.0;
//     record.requestTimeTotal = 0.0;
//     requestTimeList = request.times;
//     record.iterations = requestTimeList.length;
//     for(let j=0; j<requestTimeList.length; j++) {
//       requestTime = parseFloat(requestTimeList[j]);
//       //console.log('    * Time: ' + requestTime);
//       record.requestTimeTotal += requestTime;
//       if(requestTime > record.requestTimeHigh) record.requestTimeHigh = requestTime;
//       if(!record.requestTimeLow || requestTime < record.requestTimeLow) record.requestTimeLow = requestTime;
//     }
//     record.requestTimeAvg = (record.requestTimeTotal / requestTimeList.length).toFixed(2);
//     console.log('    Iterations: ' + record.iterations);
//     console.log('    Time AVG: ' + record.requestTimeAvg);
//     console.log('    Time LOW: ' + record.requestTimeLow);
//     console.log('    Time HIGH: ' + record.requestTimeHigh);
    
//     // pass/fail counts
//     record.passTotal = 0;
//     record.failTotal = 0;
//     testPassFailCounts = request.testPassFailCounts;
//     testPassFailItems = Object.keys(testPassFailCounts);
//     for(let j=0; j<testPassFailItems.length; j++) {
//       testPassFail = testPassFailCounts[testPassFailItems[j]];
//       record.passTotal += parseInt(testPassFail.pass);
//       record.failTotal += parseInt(testPassFail.fail);
//     }
//     console.log('    Pass: ' + record.passTotal);
//     console.log('    Fail: ' + record.failTotal);
    
//     // add record to list
//     recordList.push(record);
    
//   }
// } catch(err) {
//   console.log('Failed to parse results: ' + err);
//   process.exit(1);
// }

// // write results to CSV
// try  {
//   csvWriter.writeRecords(recordList)       // returns a promise
//       .then(() => {
//           console.log('Wrote CSV data to ' + outputFile);
//       });
// } catch(err) {
//   console.log('Failed to load datafile: ' + err);
//   process.exit(1);
// }

// // -----------------------------------------------------------------------------

// function showUsage() {
//   console.log('usage: node app.js [INPUT_FILE]');
//   process.exit();
// }

// -----------------------------------------------------------------------------