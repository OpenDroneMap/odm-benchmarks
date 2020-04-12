# ODM Processing Benchmarks

This repo contains the latest benchmark data for OpenDroneMap and WebODM, as contributed by the ODM community.  

Do you have benchmark data to share?  See [this page](CONTRIBUTING.md) for details on contributing.

## Using The Benchmark Data

ODM benchmark data is organized by dataset.  The first table provides a summary of the datasets used for benchmarking.  Further down the page, you'll find the details and results for each dataset.  Other datasets are available for your testing, and new ones may be added to this list from time to time.  For a comprehenvisve list of available datasets, refer to the [ODMdata project](https://github.com/OpenDroneMap/ODMdata).

## All Datasets

|         Dataset | Photos | Date | Source |  URL | 
| :-------------- | -------------: | -------------: | -----------------: | ---------: | 
| Aukerman | 77 |  June 2016 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_aukerman) |
| Banana | 16 | July 2019 |  [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/pierotofy/dataset_banana) |
| Bellus | 122 |  July 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_bellus) |
| Garfield | 28 | Nov. 2016 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_garfield_msp) |
| Lewis | 145 | June 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_lewis) |
| Sance | 156 | Apr. 2017 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/merkato/odm_sance) |
| Seneca | 167 | June 2013 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_seneca) |
| Shitan | 493 | Dec. 2018 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | <-- See ODMdata link |
| Toledo | 87 | Oct. 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_toledo) |
| Tuniu 1 | 271 | Apr. 2019 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | <-- See ODMdata link | 
| Waterbury | 248 | July 2015 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_waterbury) |
| Wietrznia | 225 | May 2017 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/merkato/odm_wietrznia) |
| Zoo | 524 | Oct. 2016 | [ODMData](https://github.com/OpenDroneMap/ODMdata) | [GitHub](https://github.com/OpenDroneMap/odm_data_zoo) |
| Quarry | 127 | May 2012 | [Sensefly](https://www.sensefly.com/) | [Sensefly.com](https://www.sensefly.com/education/datasets/?dataset=1418) |
| 4th Ave | 82 | Nov. 2017 | [DroneMapper](https://dronemapper.com/) | [Dronemapper.com](https://dronemapper.com/sample_data/) | 
| Red Rocks | 45 | Jan. 2013 | [DroneMapper](https://dronemapper.com/) | [Dronemapper.com](https://dronemapper.com/sample_data/) | 


## Aukerman Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Dakota Benjamin](https://github.com/dakotabenjamin).  
Photos collected in June 2016.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 1h 1m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-10 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Banana Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Piero Toffanin](https://github.com/pierotofy).  
Small photo set of a banana bunch.  Photos taken in July 2019.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 0h 12m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-28 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 
| 0h 13m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-28 | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, Resize 2048px| - | 
| 0h 20m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-28 | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, No Resize | - | 

## Bellus Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Stephen Mather](https://github.com/smathermather).  
Photos collected in July 2015.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 1h 27m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-13 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Garfield Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Dakota Benjamin](https://github.com/dakotabenjamin).  
Photos collected in November 2016.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 0h 11m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-13 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Lewis Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Stephen Mather](https://github.com/smathermather).  
Photos collected in June 2015.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 2h 0m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-14 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Sance Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Tomasz Nycz](https://github.com/merkato).
Photos collected in April 2017.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 2h 4m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-20 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Seneca Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Stephen Mather](https://github.com/smathermather).  
Photos collected in June 2013.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 2h 4m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-14 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Shitan Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Yu-Huang Wang](https://community.opendronemap.org/u/Yu-Huang_Wang).
Photos of a forested valley in Taiwan, with nice 3D features.  Collected December 2018.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 7h 50m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-23 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Tuniu 1 Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Yu-Huang Wang](https://community.opendronemap.org/u/Yu-Huang_Wang).
RTK photos collected April 2019 at the Tuniu River, Taiwan. See [forum post](https://community.opendronemap.org/t/2019-04-11-tuniu-river-toufeng-miaoli-county-taiwan/3292) for details.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 3h 34m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-31 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 
| 3h 37m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-31 | [Corey Snipes](https://github.com/coreysnipes/) | DSM/DTM, Resize 2048px | - | 
| 3h 29m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-04-01 | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, Resize 2048px | - | 

## Toledo Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Stephen Mather](https://github.com/smathermather).  
Photos collected in October 2015.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 1h 9m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-07 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Waterbury Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Stephen Mather](https://github.com/smathermather).  
Photos collected in July 2015.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 2h 50m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-15 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Wietrznia Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Tomasz Nycz](https://github.com/merkato).
Photos collected in May 2017.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 3h 22m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-21 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 
| 3h 51m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - | 2020-03-29 | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, Resize 2048px | - | 
| 9h 9m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-29 | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, No Resize | - | 

## Zoo Dataset

This dataset is from the [ODMData](https://github.com/OpenDroneMap/ODMdata) collection, contributed by [Stephen Mather](https://github.com/smathermather).  
Photos collected in October 2016.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 7h 2m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-21 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - |
| 5h 4m | 32 GB |  Intel Xeon Platinum 8175M | Ubuntu 18.04 | 1.3.3 | Y | - | 2020-04-11 | [Fran Polignano](https://github.com/fpolignano/) | Defaults, Resize 2048px | AWS r5.xlarge|
| 2h 28m | 64 GB | Intel Xeon 5650 | Ubuntu 18.04 | 1.3.3 | Y | - | 2020-04-11 | [Fran Polignano](https://github.com/fpolignano/) | Defaults, Resize 2048px | Dell R710 | 
| 7h 49m | 64 GB | Intel Xeon 5650 | Ubuntu 18.04 | 1.3.3 | Y | - | 2020-04-11 | [Fran Polignano](https://github.com/fpolignano/) | High Resolution, No Resize | Dell R710 |
| Crashed at 8h 6m | 32 GB |  Intel Xeon Platinum 8175M | Ubuntu 18.04 | 1.3.3 | Y | - | 2020-04-11 | [Fran Polignano](https://github.com/fpolignano/) | High Resolution, No Resize | AWS r5.xlarge, Out of Memory Crash|


## Quarry Dataset

This dataset is from the [Sensefly sample data collection](https://www.sensefly.com/education/datasets/).

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 1h 38m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - | 2020-03-11 | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## 4th Ave Dataset

This dataset is from [DroneMapper sample data collection](https://dronemapper.com/sample_data/).  Flown in November 2017 with a Phantom 3 Advanced.

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 1h 0m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.1 | Y | - |  | [Corey Snipes](https://github.com/coreysnipes/) | Defaults, Resize 2048px | - | 

## Red Rocks Dataset

This dataset is from [DroneMapper sample data collection](https://dronemapper.com/sample_data/).  From the DroneMapper site: _"An aerial survey performed with a Falcon UAV fixed-wing drone over Red Rocks, Colorado. The sensor is a Canon Powershot SX260HS with GPS enabled. This example data set contains 45 high resolution oblique images for 3D model and point cloud creation."_

The following table lists processing results for this dataset, reported by ODM community members.

| Processing Time | RAM | CPU | OS | ODM Version | Docker | Cluster | Test Date | Test By | Config | Additional Info | 
| :-------------- | --: | -------------: | -----------------: | --------- | -- | -- | -- | -- | -- | -- |
| 0h 45m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - |  | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, Resize 2048px | - | 
| 1h 40m | 16 GB | Intel i5 | Ubuntu 18.04 | 1.3.4 | Y | - |  | [Corey Snipes](https://github.com/coreysnipes/) | 3D Model, No Resize | - | 

## License

[MIT License](LICENSE)
