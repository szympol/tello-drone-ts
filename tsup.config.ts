import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "build",
  format: ["esm"],
  sourcemap: true,
  bundle: true,
  splitting: false,
  dts: true,
  clean: true,
});
