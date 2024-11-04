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
'use strict'

const csv = require('csv-parser')
const fs = require('fs')
const fsPromises = require('fs').promises
const async = require('async')

const config = require('./configuration')()

const outputSeparator = '='.repeat(80)

console.log(outputSeparator)
console.log('Starting benchmarks data parsing')
console.log(`  Datasets: ${config.inFileDatasets}`)
console.log(`  Benchmarks: ${config.inFileBenchmarks}`)
console.log(outputSeparator)

async function main() {
  try {
    const processingData = {
      datasetRecords: [],
      benchmarkRecords: [],
      datasets: [],
      versions: []
    }

    processingData.datasetRecords = await readCsvFile(config.inFileDatasets)
    console.log(`Num defined datasets: ${processingData.datasetRecords.length}`)

    processingData.benchmarkRecords = await readCsvFile(config.inFileBenchmarks)
    console.log(`Num benchmark records: ${processingData.benchmarkRecords.length}`)

  
    await parseUniqueDatasets(processingData)
    await parseUniqueVersions(processingData)
    
  
    await clearOutputFiles(config)
    
    // data parse and file write
    await processDatasets(processingData)
    await processVersions(processingData)
    
    
    displayResults(processingData)

    console.log('All done')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

async function readCsvFile(filePath) {
  const results = []
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', data => results.push(data))
      .on('end', () => resolve(results))
      .on('error', error => reject(error))
  })
}

async function parseUniqueDatasets(processingData) {
  console.log('Parsing unique datasets')
  processingData.datasets = [
    ...new Set(processingData.benchmarkRecords.map(record => record.DATASET))
  ].sort()
  console.log(`Found ${processingData.datasets.length} unique datasets`)
}

function parseUniqueVersions (processingData) {
  console.log('Parsing unique ODM versions')
  processingData.versions = [
    ...new Set(
      processingData.benchmarkRecords.map(record => record.ODM_VERSION)
    )
  ]
    .sort()
    .reverse()
}

async function clearOutputFiles (config) {
  const filesToClear = [config.outFileByDataset, config.outFileByVersion]

  for (const file of filesToClear) {
    try {
      await fs.unlink(file)
      console.log(`Cleared: ${file}`)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(`Error clearing ${file}:`, error)
      }
    }
  }
}

async function processDatasets (processingData) {
  console.log('Processing datasets')
  const content =
    getFileWarning() +
    processingData.datasets
      .map(datasetName =>
        generateDatasetMarkdown(
          datasetName,
          processingData.datasetRecords,
          processingData.benchmarkRecords
        )
      )
      .join('\n') +
    getFileWarning()

  await writeFile(config.outFileByDataset, content)
}

async function processVersions (processingData) {
  console.log('Processing versions')
  const content =
    getFileWarning() +
    processingData.versions
      .map(versionName =>
        generateVersionMarkdown(versionName, processingData.benchmarkRecords)
      )
      .join('\n') +
    getFileWarning()

  await writeFile(config.outFileByVersion, content)
}

function generateDatasetMarkdown (
  datasetName,
  datasetRecords,
  benchmarkRecords
) {
  const datasetRecord = datasetRecords.find(
    record => record.DATASET === datasetName
  )
  let markdown = `## ${datasetName}\n\n`

  if (datasetRecord) {
    markdown += `${datasetRecord.DESCRIPTION}\n\n`
    markdown += '| Property | Value |\n|----------|-------|\n'
    markdown += `| Photos | ${datasetRecord.PHOTO_COUNT} |\n`
    markdown += `| Collected | ${datasetRecord.COLLECTED_MONTH} |\n`
    markdown += `| URL | ${datasetRecord.DATASET_URL} |\n\n`
    
  }

  markdown += generateBenchmarkTable(
    benchmarkRecords.filter(
      record =>
        record.DATASET === datasetName && record.PROCESSING_SUCCESS === 'Y'
    )
  )

  return markdown
}

function generateVersionMarkdown (versionName, benchmarkRecords) {
  let markdown = `## OpenDroneMap Version ${versionName}\n\n`
  markdown += generateBenchmarkTable(
    benchmarkRecords.filter(
      record =>
        record.ODM_VERSION === versionName && record.PROCESSING_SUCCESS === 'Y'
    )
  )
  return markdown
}

function generateBenchmarkTable (benchmarks) {
  if (benchmarks.length === 0) return 'No benchmark data available.\n\n'

  let table =
    '| DATASET | TIME | TEST DATE | RAM | CPU TYPE | CORES | ODM | PRESET | RESIZE | ADDL CONFIG |\n'
  table +=
    '|---------|------|-----------|-----|----------|-------|-----|--------|--------|-------------|\n'
  table += benchmarks.map(getBenchmarkRecordString).join('\n')
  return table + '\n\n'
}

function getBenchmarkRecordString (benchmarkRecord) {
  return `| ${[
    benchmarkRecord.DATASET,
    benchmarkRecord.PROCESSING_TIME,
    benchmarkRecord.TEST_DATE,
    benchmarkRecord.RAM_SIZE,
    benchmarkRecord.CPU_TYPE,
    benchmarkRecord.CPU_NUM_CORES,
    benchmarkRecord.ODM_VERSION,
    benchmarkRecord.CONFIG_NAME,
    benchmarkRecord.CONFIG_RESIZE,
    benchmarkRecord.CONFIG_OTHER
  ].join(' | ')} |`
}

function getFileWarning () {
  return '> This file is automatically generated from the benchmarks CSV data. Do not edit.\n\n'
}

function displayResults (processingData) {
  console.log(outputSeparator)
  console.log('Benchmark data processing complete')
  console.log(`  Benchmark records: ${processingData.benchmarkRecords.length}`)
  console.log(`  Unique datasets: ${processingData.datasets.length}`)
  console.log(`  Unique ODM versions: ${processingData.versions.length}`)
  console.log(outputSeparator)
}

async function writeFile (filePath, content) {
  try {
    await fsPromises.writeFile(filePath, content)
    console.log(`File written: ${filePath}`)
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error)
  }
}

main()
