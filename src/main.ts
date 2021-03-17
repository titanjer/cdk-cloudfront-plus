import * as cf from '@aws-cdk/aws-cloudfront';
// import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as cdk from '@aws-cdk/core';
import { IExtensions } from './';
// import * as extensions from './extensions';


export interface DistributionProps extends cf.DistributionProps {}
//   readonly distributionOptions: cf.DistributionProps;
// }

export class Distribution extends cdk.Construct {
  readonly extensions: IExtensions[] = [];
  constructor(scope: cdk.Construct, id: string, props: DistributionProps) {
    super(scope, id);

    cdk.Stack.of(this).templateOptions.transforms = ['AWS::Serverless-2016-10-31'];

    const options = Object.assign({}, props);

    new cf.Distribution(this, `${id}Dist`, options);
  }

  public addExtension(extension: IExtensions) {
    this.extensions.push(extension);
  }
}


// const app = new cdk.App();

// const stack = new cdk.Stack(app, 'demo-stack');

// // prepare the extension
// const myExtension = new extensions.ModifyResponseHeader(stack, 'myext');

// // create the cloudfront distribution with extension(s)
// new Distribution(stack, 'cfplus-distribution', {
//   distributionOptions: {
//     defaultBehavior: {
//       origin: new origins.HttpOrigin('aws.amazon.com'),
//       edgeLambdas: [
//         myExtension,
//       ]
//     }
//   },
// })

