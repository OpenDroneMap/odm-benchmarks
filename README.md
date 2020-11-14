# ODM Benchmarks

## About
This repository is a part of the [ODM](https://github.com/OpenDroneMap) project and is dedicated to benchmark sample Datasets found in the [ODMData](https://github.com/OpenDroneMap/ODMdata) Repository and a few other thrid party sources, to better understand the behavioural characterists of ODM. 

## Datasets or benchmarking

| Dataset       | No of Photos | Date      |                                             Source |                                                                                    URL |                                                                     Contributor |
| :------------ | ------------ | --------- | ------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Aukerman      | 77           | June 2016 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                            [GitHub](https://github.com/OpenDroneMap/odm_data_aukerman) |                            [Dakota Benjamin](https://github.com/dakotabenjamin) |
| Banana        | 16           | July 2019 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                                  [GitHub](https://github.com/pierotofy/dataset_banana) |                                  [Piero Toffanin](https://github.com/pierotofy) |
| Bellus        | 122          | July 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                              [GitHub](https://github.com/OpenDroneMap/odm_data_bellus) |                              [Stephen Mather](https://github.com/smathermather) |
| Garfield      | 28           | Nov. 2016 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                        [GitHub](https://github.com/OpenDroneMap/odm_data_garfield_msp) |                            [Dakota Benjamin](https://github.com/dakotabenjamin) |
| Lewis         | 145          | June 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                               [GitHub](https://github.com/OpenDroneMap/odm_data_lewis) |                              [Stephen Mather](https://github.com/smathermather) |
| Rising Valley | 566          | Sep. 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                              [GitHub](https://github.com/OpenDroneMap/odm_data_rv_nir) |                            [Dakota Benjamin](https://github.com/dakotabenjamin) |
| Sance         | 156          | Apr. 2017 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                                         [GitHub](https://github.com/merkato/odm_sance) |                                       [Tomasz Nycz](https://github.com/merkato) |
| Seneca        | 167          | June 2013 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                              [GitHub](https://github.com/OpenDroneMap/odm_data_seneca) |                              [Stephen Mather](https://github.com/smathermather) |
| Shitan        | 493          | Dec. 2018 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [Google Drive](https://drive.google.com/file/d/1Spu1F713Tw-z1XMdnrlD6NT4EhhFy2Lj/view) |             [Yu-Huang Wang](https://community.opendronemap.org/u/Yu-Huang_Wang) |
| Toledo        | 87           | Oct. 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                              [GitHub](https://github.com/OpenDroneMap/odm_data_toledo) |             [Yu-Huang Wang](https://community.opendronemap.org/u/Yu-Huang_Wang) |
| Tuniu 1       | 271          | Apr. 2019 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [Google Drive](https://drive.google.com/file/d/1faBtGK7Jm5lTo_UWLz6onDGYGqlykHPa/view) |                              [Stephen Mather](https://github.com/smathermather) |
| Waterbury     | 248          | July 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                           [GitHub](https://github.com/OpenDroneMap/odm_data_waterbury) |                              [Stephen Mather](https://github.com/smathermather) |
| Wietrznia     | 225          | May 2017  | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                                     [GitHub](https://github.com/merkato/odm_wietrznia) |                                       [Tomasz Nycz](https://github.com/merkato) |
| Zoo           | 524          | Oct. 2016 | [ODMData](https://github.com/OpenDroneMap/ODMdata) |                                 [GitHub](https://github.com/OpenDroneMap/odm_data_zoo) |                              [Stephen Mather](https://github.com/smathermather) |
| Quarry        | 127          | May 2012  |              [Sensefly](https://www.sensefly.com/) |              [Sensefly.com](https://www.sensefly.com/education/datasets/?dataset=1418) | [Sensefly sample data collection](https://www.sensefly.com/education/datasets/) |
| 4th Ave       | 82           | Nov. 2017 |            [DroneMapper](https://dronemapper.com/) |                                [Dronemapper.com](https://dronemapper.com/sample_data/) |      [DroneMapper sample data collection](https://dronemapper.com/sample_data/) |
| Red Rocks     | 45           | Jan. 2013 |            [DroneMapper](https://dronemapper.com/) |                                [Dronemapper.com](https://dronemapper.com/sample_data/) |      [DroneMapper sample data collection](https://dronemapper.com/sample_data/) |

## Data Visualization

This feature is **coming soon**, for now you can look at the `benchmarks.csv` file in the `data` directory for more information.

## How to Benchmark

This section provides instructions for contributing to the ODM Benchmarks project.

* **Review Previous Benchmarks** - You can have a look at previous benchmarks which is found in the `benchmarks.csv` file, located in the `data` directory to understand various things such as for example, figuring out which dataset has been benchmarked lesser than in comparision to other datasets.

* **Select a desired Dataset** - Choose one of the datasets of your choice which is listed in the table seen above. Links to download the dataset is provided in the same. 

* **Run the Dataset** - Create a new task in ODM and process the images.

* **Verify the results** - Ensure that the task completed successfully by viewing the maps and models generated

* **Submit Your Results** - Open the `benchmarks.csv` file and look at the header for each of the column and note the desired information required before submitting and edit the csv file. Submissions are accepted Via a Pull Request or you can choose to post your results on the [ODM community forum](https://community.opendronemap.org/t/odm-benchmark-data/3877). A table is given below to explain the structure of the CSV.

| Attribute          | Explanation                                                          | Example                                         |
| ------------------ | -------------------------------------------------------------------- | ----------------------------------------------- |
| ID                 | Benchmark Number                                                     | 1                                               |
| DATASET            | Dataset Name                                                         | Toledo                                          |
| PROCESSING_TIME    | Time taken to Process The dataset                                    | 1h 9m                                           |
| PROCESSING_SUCCESS | Confirm If process was successful                                    | Y                                               |
| ERROR_TYPE         | Mention error if any occured                                         | -                                               |
| RAM_SIZE           | Size of RAM allocated                                                | 16 GB                                           |
| RAM_CLOCK_SPEED    | RAM Frequency of the Machine                                         | 2133 MT/s                                       |
| CPU_TYPE           | Make and model of the CPU                                            | Intel i5                                        |
| CPU_CLOCK_SPEED    | Clock Speed of the CPU                                               | 2.3 Ghz                                         |
| CPU_NUM_CORES      | Number of Cores of the CPU                                           | 4                                               |
| STORAGE_TYPE       | Storage Type of the system. HDD/SSD/NVME                             | SSD                                             |
| OS                 | Operating System of the Machine                                      | Ubuntu 18.04                                    |
| VM_TYPE            | Virtual Machine on which ODM is running on                           | Docker                                          |
| ODM_VERSION        | Version of ODM Used to Benchmark                                     | 1.3.1                                           |
| ODM_CLUSTER        | Delcaration of usage of Cluster ODM                                  | N                                               |
| CONFIG_NAME        | Mention of the Configuration in which the dataset is being processed | Default                                         |
| CONFIG_RESIZE      | mention of image size if images are being resized                    | 2048 px                                         |
| CONFIG_OTHER       | Other Configurations made that are worth mentioning                  | -                                               |
| TEST_DATE          | Date of Test                                                         | 2020-03-07                                      |
| TEST_BY            | Information of the individual who tests the data                     | [Corey Snipes](https://github.com/coreysnipes/) |
| INCLUDE_IN_SUMMARY | Check if Data has been included in summary                           | Y                                               |
| NOTES              | Additional Notes                                                     | -                                               |

## Questions and Doubts

Any queries you may have can be posted in the [ODM community forum](https://community.opendronemap.org/t/odm-benchmark-data/3877).

## Contributing new Benchmark Data 

If you have benchmark data to share, See [this page](https://github.com/OpenDroneMap/odm-benchmarks/blob/master/CONTRIBUTING.md) for details on contributing.

## License

[MIT License](LICENSE)