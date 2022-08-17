import { defineConfig } from "cypress";
//Verify download import
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      //Verify download import
      on("task", { isFileExist, findFiles });
      //--------------------
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
});
