import * as cdk from "aws-cdk-lib";
import { PlaceholderConstruct } from "@cdk-toolbox/cdk-constructs";
import { Construct } from "constructs";

export type EphemeralStackProps = cdk.StackProps & {
  readonly appStage: string;
};

export class EphemeralStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: EphemeralStackProps) {
    super(scope, id, props);

    new PlaceholderConstruct(this, "EphemeralPlaceholder");

    new cdk.CfnOutput(this, "EphemeralStage", {
      value: props.appStage,
      description: "Resolved ephemeral stage name.",
    });
  }
}
