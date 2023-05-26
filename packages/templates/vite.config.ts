import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.SIMPLE_MAIN_VISUAL_URL": JSON.stringify(
      resolve(__dirname, "src/SimpleMainVisual.tsx")
    ),
    "process.env.SIMPLE_SECTION_TITLE_URL": JSON.stringify(
      resolve(__dirname, "src/SimpleSectionTitle.tsx")
    ),
    "process.env.SIMPLE_PANEL_URL": JSON.stringify(
      resolve(__dirname, "src/SimplePanel.tsx")
    ),
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "simple-main-visual": resolve(
          __dirname,
          "src/SimpleMainVisual/index.ts"
        ),
        "simple-section-title": resolve(
          __dirname,
          "src/SimpleSectionTitle/index.ts"
        ),
        "simple-panel": resolve(__dirname, "src/SimplePanel/index.ts"),
      },
      name: "HazyUpTemplates",
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "@hazy-up/core": "HazyUpCore",
        },
      },
    },
  },
  plugins: [
    react({
      // jsxRuntime: "classic",
    }),
    tsConfigPaths(),
    dts(),
  ],
});
