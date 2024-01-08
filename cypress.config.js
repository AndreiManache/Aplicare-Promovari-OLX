const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Common Cypress configuration options here

  // Environment-specific configuration
  env: {
    // Define any environment variables here if needed
  },

  // Plugins and other Cypress options
  plugins: [],

  // Your custom configuration for e2e tests
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        // Define your custom tasks here
        readXlsxFile() {
          return getDataFromHtmlWatchlistIntoJson();
        },
      });
    },
    // Other e2e specific options
    // ...
  },

  // Disable cross-origin security checks
  chromeWebSecurity: false,
"numTestsKeptInMemory": 0
  // Other top-level configuration options
  // ...
});
