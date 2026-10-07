#!/usr/bin/env node
import { Aspects, Tags } from "aws-cdk-lib";
import { AwsSolutionsChecks, ServerlessChecks } from "cdk-nag";
import {
  APPLICATION_RESOURCE_SCOPE_TAG_VALUE,
  RESOURCE_SCOPE_TAG_KEY,
} from "../../../lib/resource-tags.ts";
import { resolveStageName } from "../../../lib/stage-name.ts";
import { WORKLOAD_REGION } from "../../../lib/workload-region.ts";
import { createCdkApp } from "../lib/cdk-app.ts";
import { NonEphemeralStack } from "../lib/non-ephemeral-stack.ts";

const workloadAccount = process.env.CDK_DEFAULT_ACCOUNT;

const app = createCdkApp();
Tags.of(app).add(RESOURCE_SCOPE_TAG_KEY, APPLICATION_RESOURCE_SCOPE_TAG_VALUE);

const appStage = resolveStageName("main", {
  fallbackStage: "main",
  lifecycle: "permanent",
});

// oxlint-disable-next-line no-console
console.log(`Deploying non-ephemeral stack to stage: ${appStage} in region: ${WORKLOAD_REGION}`);

new NonEphemeralStack(app, `CdkToolboxNonEphemeralStack-${appStage}`, {
  appStage,
  env: { account: workloadAccount, region: WORKLOAD_REGION },
});

Aspects.of(app).add(new AwsSolutionsChecks({ verbose: true }));
Aspects.of(app).add(new ServerlessChecks({ verbose: true }));
