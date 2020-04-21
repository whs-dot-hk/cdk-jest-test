import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';

import CdkTest = require('../lib/cdk-test-stack');

const CdkTestStack = {
  constructor: function CdkTestStack() {
  },
  hello: jest.fn(() => "hello cdk")
}

jest.mock('../lib/cdk-test-stack', () => {
  return {
    CdkTestStack: jest.fn().mockImplementation(() => CdkTestStack)
  }
})

test('Empty Stack', () => {
  const app = new cdk.App();

  const stack = new CdkTest.CdkTestStack(app, 'MyTestStack');

  expect(stack.hello()).toBe("hello cdk")
});
