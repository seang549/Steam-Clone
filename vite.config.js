/// <reference types="vitest" />
/// <reference types='vite/client' />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["./test/Dropdown-test.jsx"],
    // exclude: [
    //   "**/node_modules/**",
    //   "**/dist/**",
    //   "**/cypress/**",
    //   "**/.{idea,git,cache,output,temp}/**",
    //   "**/{karma,rollup,webpack,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
    // ],
    globals: true,
    environment: "jsdom",
    //setupFiles: "./test/Dropdown-test.jsx",
  },
});
