import { configDefaults } from "vitest/config";

import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, "src/background/background.ts"),
        searcher: resolve(__dirname, "src/searcher/searcher.html"),
        config_provider: resolve(__dirname, "src/config/provider/configProvider.html"),
        config_theme: resolve(__dirname, "src/config/theme/configTheme.html"),
        config_bug: resolve(__dirname, "src/config/reportBug/configBug.html"),
        config_info: resolve(__dirname, "src/config/info/configInfo.html"),
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
    minify: false,
    sourcemap: true,
    outDir: "dist",
  },
});
