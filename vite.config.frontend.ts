import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.tsx"],
    globals: true,
    setupFiles: "./mocks/setup.ts",
    // coverage: {
    //   provider: "v8",
    //   reporter: ['text', 'json', 'html'],
    //   exclude: ['node_modules/', 'coverage/', 'mocks/', 'dist/', 'public/', 'package.json', 'package-lock.json', 'vite.config.ts', 'vite.config.backend.ts', 'vite.config.frontend.ts', 'tsconfig.json', 'eslint.config.js']
    // }
  },
});
