import { defineLibraryConfig } from "@jaykingson/vite-plus-base";

export default defineLibraryConfig({
  pack: {
    entry: {
      index: "src/index.ts",
    },
    deps: {
      onlyBundle: false,
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
