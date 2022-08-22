import { defineConfig } from "cypress";
//Verify download import
const { isFileExist, findFiles } = require("cy-verify-downloads");
//Excel requirements
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path"); // for file path

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      //Verify download import
      on("task", { isFileExist, findFiles });
      //--------------------
      //Excel implementation
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      //------------------
      //For the mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
      //---------------------
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com",

      //Mobile Validation
      mobileViewportWidthBreakpoint: 400,
    },
    experimentalSessionAndOrigin: true,
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1200,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Udemy Course Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 2,
    openMode: 1,
  },
  video: true,
  screenshotOnRunFailure: true,
});
