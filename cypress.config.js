const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nszv36',
  env: {
    url : 'https://petstore.octoperf.com/'
  },
  e2e: {
    specPattern: 'cypress/integration_tests/shopping.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
