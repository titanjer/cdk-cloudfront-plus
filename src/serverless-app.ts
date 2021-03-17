import * as cdk from '@aws-cdk/core';

export interface ServerlessAppProps {
  readonly applicationId: string;
  readonly semanticVersion: string;
}

export class ServerlessApp extends cdk.Construct {
  readonly resource: cdk.CfnResource;
  // readonly functionVersionArn: lambda.Version;
  constructor(scope: cdk.Construct, id: string, props: ServerlessAppProps) {
    super(scope, id);
    this.resource = new cdk.CfnResource(this, id, {
      type: 'AWS::Serverless::Application',
      properties: {
        Location: {
          ApplicationId: props.applicationId,
          SemanticVersion: props.semanticVersion,
        },
      },
    });
  }
}
