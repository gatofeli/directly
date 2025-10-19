import { configDefaults } from "vitest/config";

import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    rollupOptions: {
      input: {
        background: resolve(__dirname, "src/background/background.ts"),
        searcher: resolve(__dirname, "src/searcher/searcher.html"),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "background") {
            return "background.js";
          }
          return "assets/[name]-[hash].js";
        },
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    sourcemap: true,
    outDir: "dist",
  },
});
