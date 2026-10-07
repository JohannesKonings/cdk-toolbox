# cdk-account-setup

Account-wide bootstrap CDK app (placeholder).

Deploys a single permanent stack `AccountSetupStack` with account-wide tags. Real GitHub OIDC and deploy-role setup will be added later.

```bash
vp -C apps/cdk-account-setup exec cdk synth
vp -C apps/cdk-account-setup exec cdk deploy --all
```
