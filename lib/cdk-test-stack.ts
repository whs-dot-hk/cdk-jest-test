import * as cdk from '@aws-cdk/core';

export class CdkTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
  }

  hello() {
    return "Hello world"
  }
}
