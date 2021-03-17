import * as cf from '@aws-cdk/aws-cloudfront';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import { ServerlessApp } from './';

export interface IExtensions {
  readonly functionArn: string;
  readonly functionVersion: lambda.Version;
};

export class ModifyResponseHeader extends ServerlessApp implements IExtensions {
  readonly functionArn: string;
  readonly functionVersion: lambda.Version;
  readonly eventType: cf.LambdaEdgeEventType;
  constructor(scope: cdk.Construct, id: string) {
    super(scope, id, {
      applicationId: 'arn:aws:serverlessrepo:us-east-1:418289889111:applications/modify-response-header',
      semanticVersion: '1.0.0',
    });
    const stack = cdk.Stack.of(scope);
    this.functionArn = this.resource.getAtt('Outputs.ModifyResponseHeaderFunctionARN').toString();
    this.functionVersion = new lambda.Version(stack, 'LambdaVersion', {
      lambda: lambda.Function.fromFunctionArn(stack, 'FuncArn', this.functionArn),
    });
    this.eventType = cf.LambdaEdgeEventType.ORIGIN_RESPONSE;
  }
}
