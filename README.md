# cdk-toolbox

vite-plus monorepo for shared CDK constructs and deployment apps.

## Layout

| Path                         | Purpose                                              |
| ---------------------------- | ---------------------------------------------------- |
| `packages/cdk-constructs`    | Shared CDK constructs (placeholder)                  |
| `apps/cdk-account-setup`     | Account-wide bootstrap (permanent)                   |
| `apps/cdk-app-ephemeral`     | Ephemeral PR stacks (deploy on PR, destroy on merge) |
| `apps/cdk-app-non-ephemeral` | Permanent main stack (deploy on main only)           |

## Quick start

```bash
vp install
vp check
vp run -r test
vp run -r build
```

## CDK commands

```bash
vp -C apps/cdk-account-setup exec cdk synth
vp -C apps/cdk-app-ephemeral exec cdk synth
vp -C apps/cdk-app-non-ephemeral exec cdk synth
```

## GitHub Actions prerequisites

- `AWS_ROLE_TO_ASSUME` secret (created later by real account-setup OIDC stack)
- `CDK_DEFAULT_ACCOUNT` is set from OIDC credentials in deploy workflows
