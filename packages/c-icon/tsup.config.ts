import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  target: "es2019",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  format: ["esm", "cjs"],
  entry: {
    "chakra-ui-c-icon": "src/index.tsx",
  },
  keepNames: true,
})
