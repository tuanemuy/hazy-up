import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, "src/index.ts"),
        document: resolve(__dirname, "src/document/index.ts"),
        editor: resolve(__dirname, "src/editor/index.ts"),
        theme: resolve(__dirname, "src/theme/index.ts"),
      },
      name: "HazyUpCore",
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      outputDir: "dist/types/es",
    }),
  ],
});
