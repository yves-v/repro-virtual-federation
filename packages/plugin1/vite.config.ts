import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: "http://localhost:4501",
    port: 4501,
  },
  plugins: [
    react(),
    federation({
      exposes: {
        "./Plugin1App": "./src/Plugin1App",
      },
      // remotes: {
      //   plugin2: "http://localhost:4502/assets/remoteEntry.js",
      // },
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
    target: "esnext",
    minify: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
