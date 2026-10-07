import { describe, expect, it } from "vite-plus/test";

import { EphemeralStack } from "./ephemeral-stack.ts";

describe("EphemeralStack", () => {
  it("exports a stack class", () => {
    expect(EphemeralStack).toBeTypeOf("function");
  });
});
