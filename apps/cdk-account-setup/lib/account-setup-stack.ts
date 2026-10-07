import * as cdk from "aws-cdk-lib";
import { PlaceholderConstruct } from "@cdk-toolbox/cdk-constructs";
import { Construct } from "constructs";

export class AccountSetupStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new PlaceholderConstruct(this, "AccountSetupPlaceholder");

    new cdk.CfnOutput(this, "AccountSetupStatus", {
      value: "placeholder",
      description: "Account setup placeholder stack. Real OIDC bootstrap is not implemented yet.",
    });
  }
}
