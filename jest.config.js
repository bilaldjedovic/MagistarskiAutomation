/** @type {import('ts-jest').JestConfigWithTsJest} */
const { webdriverVersion } = require("./webdriver.config");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  runner: "jest-serial-runner",
  globals: {
    webdriverVersion: webdriverVersion,
  },
};
