import { describe, expect, it } from "vite-plus/test";

import { PlaceholderConstruct } from "./index.ts";

describe("PlaceholderConstruct", () => {
  it("exports a construct class", () => {
    expect(PlaceholderConstruct).toBeTypeOf("function");
  });
});
