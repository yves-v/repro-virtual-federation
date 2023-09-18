import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:4500",
    port: 4500,
  },
  plugins: [
    react(),
    federation({
      remotes: {
        plugin1: "http://localhost:4501/assets/remoteEntry.js",
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
});
