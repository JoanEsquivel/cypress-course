//https://docs.cypress.io/guides/references/experiments#Configuration
Cypress.session.clearAllSavedSessions();

describe("Basics", () => {
  beforeEach(() => {
    cy.session("mySession", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      cy.get("#userName").type("test");
      cy.get("#password").type("Test1234*");
      cy.get("#login").click();
      cy.url().should("contain", "profile");
    });
  });

  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it("Check if session was saved", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
});
