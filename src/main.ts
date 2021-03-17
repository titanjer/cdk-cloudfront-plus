import * as cf from '@aws-cdk/aws-cloudfront';
import * as cdk from '@aws-cdk/core';
import { IExtensions } from './extensions';

export interface DistributionProps extends cf.DistributionProps {}

export class Distribution extends cdk.Construct {
  readonly extensions: IExtensions[] = [];
  constructor(scope: cdk.Construct, id: string, props: DistributionProps) {
    super(scope, id);

    cdk.Stack.of(this).templateOptions.transforms = ['AWS::Serverless-2016-10-31'];

    new cf.Distribution(this, `${id}Dist`, props);
  }
}
