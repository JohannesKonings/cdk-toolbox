import { describe, expect, it } from "vite-plus/test";

import { NonEphemeralStack } from "./non-ephemeral-stack.ts";

describe("NonEphemeralStack", () => {
  it("exports a stack class", () => {
    expect(NonEphemeralStack).toBeTypeOf("function");
  });
});
