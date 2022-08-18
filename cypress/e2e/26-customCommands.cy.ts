//https://docs.cypress.io/guides/references/experiments#Configuration

describe("Basics", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });

  it("Sucess Login Scenario", () => {
    // cy.get("#userName").type("test");
    // cy.get("#password").type("Test1234*");
    // cy.get("#login").click();
    cy.login("test", "Test1234*");
    cy.url().should("contain", "profile");
  });

  it("Wrong User Login Scenario", () => {
    // cy.get("#userName").type("test");
    // cy.get("#password").type("Test1234*");
    // cy.get("#login").click();
    cy.login("wrongUser", "wrongPassword");
    cy.url().should("contain", "login");
  });
});
