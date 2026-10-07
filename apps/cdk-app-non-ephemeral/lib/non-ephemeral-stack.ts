import * as cdk from "aws-cdk-lib";
import { PlaceholderConstruct } from "@cdk-toolbox/cdk-constructs";
import { Construct } from "constructs";

export type NonEphemeralStackProps = cdk.StackProps & {
  readonly appStage: string;
};

export class NonEphemeralStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: NonEphemeralStackProps) {
    super(scope, id, props);

    new PlaceholderConstruct(this, "NonEphemeralPlaceholder");

    new cdk.CfnOutput(this, "NonEphemeralStage", {
      value: props.appStage,
      description: "Resolved permanent stage name.",
    });
  }
}
