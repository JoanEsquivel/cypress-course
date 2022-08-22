import "cypress-file-upload";
import "@testing-library/cypress/add-commands";
import "@4tw/cypress-drag-drop";
require("cy-verify-downloads").addCustomCommand();
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      parseXlsx(inputFile: any): any;
    }
  }
}

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get("#userName").type(username);
  cy.get("#password").type(password);
  cy.get("#login").click();
});

Cypress.Commands.add("parseXlsx", (inputFile) => {
  return cy.task("parseXlsx", { filePath: inputFile });
});
