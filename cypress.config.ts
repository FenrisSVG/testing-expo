import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 720,
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
