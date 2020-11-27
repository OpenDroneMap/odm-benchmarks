/** ----------------------------------------------------------------------------
 * configuration.js
 * 
 * For specifying certain operating parameters of the benchmark data processor.
 * -----------------------------------------------------------------------------
 */

"use strict";

module.exports = (config) => {
  config.inFileDatasets = '../data/datasets.csv';
  config.inFileBenchmarks = '../data/benchmarks.csv';  
}

//COLUMN: INCLUDE_IN_SUMMARY
const columns = {
  "ID": false,
  "DATASET": true,
  "PROCESSING_TIME": true,
  "PROCESSING_SUCCESS": true,
  "ERROR_TYPE": true,
  "RAM_SIZE": true,
  "RAM_CLOCK_SPEED": false,
  "CPU_TYPE": true,
  "CPU_CLOCK_SPEED": false,
  "CPU_NUM_CORES": false,
  "STORAGE_TYPE": false,
  "OS": true,
  "VM_TYPE": true,
  "ODM_VERSION": true,
  "ODM_CLUSTER": false,
  "CONFIG_NAME": true,
  "CONFIG_RESIZE": true,
  "CONFIG_OTHER": true,
  "TEST_DATE": true,
  "TEST_BY": true,
  "INCLUDE_IN_SUMMARY": false,
  "NOTES": false
};

// -----------------------------------------------------------------------------