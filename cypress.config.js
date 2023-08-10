const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "w5ge4m",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
