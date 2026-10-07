import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export type PlaceholderConstructProps = {
  readonly outputId?: string;
};

export class PlaceholderConstruct extends Construct {
  constructor(scope: Construct, id: string, props: PlaceholderConstructProps = {}) {
    super(scope, id);

    new cdk.CfnOutput(this, props.outputId ?? "PlaceholderOutput", {
      value: "placeholder",
      description: "Placeholder output from @cdk-toolbox/cdk-constructs",
    });
  }
}
