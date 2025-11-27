import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  build: {
    rollupOptions: {
      input: {
        script: resolve(__dirname, "src/background/script/script.ts"),
      },
      output: {
        entryFileNames: "script.js",
        format: "iife",
      },
    },
    minify: false,
    sourcemap: true,
    outDir: "dist",
    emptyOutDir: false,
  },
});
