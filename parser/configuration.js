/** ----------------------------------------------------------------------------
 * configuration.js
 *
 * For specifying certain operating parameters of the benchmark data processor.
 * -----------------------------------------------------------------------------
 */

'use strict'

module.exports = function () {
  return {
    inFileDatasets: '../data/datasets.csv',
    inFileBenchmarks: '../data/benchmarks.csv',
    outFileByDataset: '../data-parsed/by-dataset.md',
    outFileByVersion: '../data-parsed/by-version.md'
  }
}
