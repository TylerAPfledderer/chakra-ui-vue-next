---
to: packages/<%=h.changeCase.paramCase(name)%>/tsup.config.ts
---

import { defineConfig } from "tsup"
import EsbuildPluginJSX from "unplugin-vue-jsx/esbuild"

export default defineConfig({
  clean: true,
  target: "es2019",
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  esbuildPlugins: [
    // @ts-expect-error `EsbuildPluginJSX` does not extend `tsup.Plugin` type.
    EsbuildPluginJSX({
      include: [/.[jt]sx?$/],
    }),
  ],
  format: ["esm", "cjs"],
  entry: {
    "<%=h.changeCase.paramCase(name)%>": "src/index.tsx",
  },
  keepNames: true,
})
