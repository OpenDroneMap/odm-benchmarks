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
//const results = [];
//const columnRecords = [];
const datasetRecords = [];
const benchmarkRecords = [];
const datasets = [];

//let inFileColumns = '../data/columns.csv';
let inFileDatasets = '../data/datasets.csv';
let inFileBenchmarks = '../data/benchmarks.csv';

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
fs.createReadStream(inFileDatasets)
  .pipe(csv())
  .on('data', (data) => datasetRecords.push(data))
  .on('end', () => {
    console.log('*** read datasets ***');
    //console.log(datasetRecords);
  });

// read benchmarks
fs.createReadStream(inFileBenchmarks)
  .pipe(csv())
  .on('data', (data) => benchmarkRecords.push(data))
  .on('end', () => {
    console.log('*** read benchmarks ***');
    //console.log(benchmarkRecords);
  });

// read unique datasets
for(let i=0; i<benchmarkRecords.length; i++) {
  
  record = {};
  request = requestList[i];
  record.requestName = request.name;
  console.log('  Request ' + i + ': ' + record.requestName);

}

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