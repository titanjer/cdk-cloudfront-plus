[![NPM version](https://badge.fury.io/js/cdk-cloudfront-plus.svg)](https://badge.fury.io/js/cdk-cloudfront-plus)
[![PyPI version](https://badge.fury.io/py/cdk-cloudfront-plus.svg)](https://badge.fury.io/py/cdk-cloudfront-plus)
![Release](https://github.com/pahud/cdk-cloudfront-plus/workflows/Release/badge.svg?branch=main)

# cdk-cloudfront-plus

CDK constructs library that allows you to build [AWS CloudFront Extensions](https://github.com/awslabs/aws-cloudfront-extensions) in **JavaScript**, **TypeScript** or **Python**.


# Sample


```ts
import * as cfplus from 'cdk-cloudfront-plus';

const app = new cdk.App();

const stack = new cdk.Stack(app, 'demo-stack');

// prepare the `modify resonse header` extension
const modifyRespHeader = new extensions.ModifyResponseHeader(stack, 'ModifyResp');

// prepare the `anti-hotlinking` extension
const antiHotlinking = new extensions.AntiHotlinking(stack, 'AntiHotlink', {
  referer: [
    'example.com',
    'exa?ple.*',
  ],
});

// create the cloudfront distribution with extension(s)
new Distribution(stack, 'dist', {
  defaultBehavior: {
    origin: new origins.HttpOrigin('aws.amazon.com'),
    edgeLambdas: [
      modifyRespHeader,
      antiHotlinking,
    ],
  },
});

```


