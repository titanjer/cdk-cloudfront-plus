import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as cdk from '@aws-cdk/core';
import { Distribution } from './';
import * as extensions from './extensions';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const stack = new cdk.Stack(app, 'demo-stack');

    // prepare the extension
    const myExtension = new extensions.ModifyResponseHeader(stack, 'myext');

    // create the cloudfront distribution with extension(s)
    new Distribution(stack, 'dist', {
      defaultBehavior: {
        origin: new origins.HttpOrigin('aws.amazon.com'),
        edgeLambdas: [
          myExtension,
        ],
      },
    });
    this.stack = [stack];
  }
}


