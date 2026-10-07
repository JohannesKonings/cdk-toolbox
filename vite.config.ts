import { defineWorkspaceConfig } from "@jaykingson/vite-plus-base";

export default defineWorkspaceConfig({
  bingo: {
    blockPackageJson: {
      name: "cdk-toolbox",
    },
    blockAgentSkills: {
      glossaryMap: {
        root: {
          glossary: "GLOSSARY.md",
          adr: "docs/adr",
        },
        "cdk-account-setup": {
          glossary: "apps/cdk-account-setup/GLOSSARY.md",
          adr: "docs/adr",
        },
        "cdk-app-ephemeral": {
          glossary: "apps/cdk-app-ephemeral/GLOSSARY.md",
          adr: "docs/adr",
        },
        "cdk-app-non-ephemeral": {
          glossary: "apps/cdk-app-non-ephemeral/GLOSSARY.md",
          adr: "docs/adr",
        },
        "cdk-constructs": {
          glossary: "packages/cdk-constructs/GLOSSARY.md",
          adr: "docs/adr",
        },
      },
    },
  },
  lint: {
    ignorePatterns: ["dist/**", "cdk.out/**"],
  },
});
