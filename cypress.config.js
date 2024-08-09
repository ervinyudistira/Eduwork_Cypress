const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // 120 detik
    defaultCommandTimeout: 10000, // 10 detik
  },
});

