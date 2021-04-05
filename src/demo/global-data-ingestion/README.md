# How to Test

```sh
$ yarn watch
12:20:39 AM - File change detected. Starting incremental compilation...
12:20:41 AM - Found 0 errors. Watching for file changes.
...
```

Open a seperate terminal and run:

```sh
$ AWS_REGION=us-east-1 cdk --app lib/demo/global-data-ingestion/index.js diff
$ AWS_REGION=us-east-1 cdk --app lib/demo/global-data-ingestion/index.js deploy
```

On deploy completed, open the cloudfront URL with

```sh
$ curl d21oww9vlwyre5.cloudfront.net --request POST --data "GG-1"
$ curl d21oww9vlwyre5.cloudfront.net --request POST --data "GG-2"
$ curl d21oww9vlwyre5.cloudfront.net --request POST --data "GG-3"
$ curl d21oww9vlwyre5.cloudfront.net --request POST --data "GG-4"
$ curl d21oww9vlwyre5.cloudfront.net --request POST --data "GG-5"
```