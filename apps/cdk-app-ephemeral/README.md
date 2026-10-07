# cdk-app-ephemeral

Ephemeral CDK app (placeholder).

Creates a per-branch stack `CdkToolboxEphemeralStack-<stage>` on pull requests and destroys it when the PR merges.

```bash
APP_STAGE=feature-my-branch vp -C apps/cdk-app-ephemeral exec cdk synth
```
