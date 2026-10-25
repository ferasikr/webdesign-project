import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { jobs } from "./data/jobs.js";
import { focusAreas } from "./data/focus.js";

export default defineConfig({
  base: "./",
  plugins: [ViteEjsPlugin({ jobs, focusAreas })],
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  root: ".",
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        index: "index.html",
        jobs: "jobs.html",
        "job-details": "job-details.html",
        apply: "apply.html"
      }
    }
  }
});