import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as cdk from '@aws-cdk/core';
import { Distribution } from './';
import * as extensions from './extensions';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const stack = new cdk.Stack(app, 'demo-stack2');

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
    this.stack = [stack];
  }
}


new IntegTesting();
