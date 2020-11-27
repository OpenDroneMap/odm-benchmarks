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
  config.outFileByDataset = '../data-parsed/by-dataset.txt';  
  config.outFileByVersion = '../data-parsed/by-version.txt';  
  // config.outFileByDataset = 'out/by-dataset.txt';  
  // config.outFileByVersion = 'out/by-version.txt';  
}
