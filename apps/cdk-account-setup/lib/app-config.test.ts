import { describe, expect, it } from "vite-plus/test";

import { resolveAccountSetupEnv } from "./app-config.ts";

describe("resolveAccountSetupEnv", () => {
  it("resolves AWS_ACCOUNT_ID from CDK_DEFAULT_ACCOUNT fallback", () => {
    const env = resolveAccountSetupEnv({
      CDK_DEFAULT_ACCOUNT: "123456789012",
    });

    expect(env.AWS_ACCOUNT_ID).toBe("123456789012");
  });
});
