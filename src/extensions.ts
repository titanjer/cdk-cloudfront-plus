import * as cf from '@aws-cdk/aws-cloudfront';
import * as lambda from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';
import { ServerlessApp } from './';

export interface IExtensions {
  readonly functionArn: string;
  readonly functionVersion: lambda.Version;
};

/**
 * The modify response header extension
 * @see https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/modify-response-header
 * @see https://console.aws.amazon.com/lambda/home#/create/app?applicationId=arn:aws:serverlessrepo:us-east-1:418289889111:applications/modify-response-header
 */
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
    this.functionVersion = bumpFunctionVersion(stack, id, this.functionArn);
    this.eventType = cf.LambdaEdgeEventType.ORIGIN_RESPONSE;
  }
}

/**
 * Construct properties for AntiHotlinking
 */
export interface AntiHotlinkingProps {
  /**
   * Referer allow list with wildcard(* and ?) support i.e. `example.com` or `exa?ple.*`
   */
  readonly referer: string[];
}

/**
 * The Anti-Hotlinking extension
 * @see https://github.com/awslabs/aws-cloudfront-extensions/tree/main/edge/nodejs/anti-hotlinking
 * @see https://console.aws.amazon.com/lambda/home#/create/app?applicationId=arn:aws:serverlessrepo:us-east-1:418289889111:applications/anti-hotlinking
 */
export class AntiHotlinking extends ServerlessApp implements IExtensions {
  readonly functionArn: string;
  readonly functionVersion: lambda.Version;
  readonly eventType: cf.LambdaEdgeEventType;
  constructor(scope: cdk.Construct, id: string, props: AntiHotlinkingProps) {
    super(scope, id, {
      applicationId: 'arn:aws:serverlessrepo:us-east-1:418289889111:applications/anti-hotlinking',
      semanticVersion: '1.2.5',
      parameters: {
        RefererList: props.referer.join(','),
      },
    });
    const stack = cdk.Stack.of(scope);
    this.functionArn = this.resource.getAtt('Outputs.AntiHotlinking').toString();
    this.functionVersion = bumpFunctionVersion(stack, id, this.functionArn);
    this.eventType = cf.LambdaEdgeEventType.VIEWER_REQUEST;
  }
}

/**
 * Generate a lambda function version from the given function ARN
 * @param scope
 * @param id
 * @param functionArn The lambda function ARN
 * @returns lambda.Version
 */
function bumpFunctionVersion(scope: cdk.Construct, id: string, functionArn: string): lambda.Version {
  return new lambda.Version(scope, `LambdaVersion${id}`, {
    lambda: lambda.Function.fromFunctionArn(scope, `FuncArn${id}`, functionArn),
  });
}
