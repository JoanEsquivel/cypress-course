# cypress-course
I created this framework for my [Cypress Udemy Course](https://www.udemy.com/course/the-complete-cypress-10-e2e-course/) where I try to resolve with practical examples E2E testing scenarios using Javascript & Typescript.

Topics reviewed:

* How to install Cypress?
* Hello world in Cypress
* Mocha Structure
* Visit a website with Base Url
* Environment Variables
* Locators: CSS & XPath
* Subject management, and retriability
* Viewport configurations: Basic & Advanced
* Handle Checkboxes, Links, Broken Images, Upload a File, Download a File, Upload a File, Iframes, Alerts, Accordion, Autocomplete, Tooltips, Menus, Drag and Drop
* Preserve Session(cy.session)
* Page Object Model or Actions?
* UI Custom Commands
* Global Hooks
* Fixtures
* Share context and data with variables
* Excel integration
* MySql database testing
* Debugging
* Mocking & Spying APIs with Cy.Intercept
* cy.clock() & cy.tick()
* Faker integration
* API Testing overview using a Bearer Token! Constructing the request with custom options.
* Cypress Dashboard Integration
* Parallel Execution using GitHub Actions

Dependencies:
- Typescript - https://docs.cypress.io/guides/tooling/typescript-support: npm install --save-dev typescript
- XPath Topic - https://www.npmjs.com/package/cypress-xpath
- Hover Topic - https://github.com/dmtrKovalenko/cypress-real-events
- Upload a file - https://www.npmjs.com/package/cypress-file-upload
- Download validation - https://www.npmjs.com/package/cy-verify-downloads
- Iframe: https://www.npmjs.com/package/cypress-iframe
- Date picker: https://github.com/testing-library/cypress-testing-library
- Drag and Drop https://www.npmjs.com/package/@4tw/cypress-drag-drop
- Mochawesome reporter https://www.npmjs.com/package/cypress-mochawesome-reporter


References & examples
- Typescript Recipes: https://github.com/hunghau/cypress-example-recipes/tree/master/examples/preprocessors__typescript-webpack/cypress/support
- Configuration Options: https://docs.cypress.io/guides/references/configuration#Options
- Excel and CSV documentation: https://blog.knoldus.com/reading-data-from-excel-file-cypress/

How to run the project?
- Install Node JS
- Run the command "npm i"
- Run a script in the package.json

How to update the Cypress dependecy?
npm install -D cypress@x.x.x
