import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:4502",
    port: 4502,
  },
  plugins: [
    react(),
    federation({
      exposes: {
        "./Plugin2App": "./src/Plugin2App",
      },
      shared: ["react", "react-dom"],
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
