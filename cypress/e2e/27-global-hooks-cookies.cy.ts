Cypress.session.clearAllSavedSessions();
describe("Global Hooks & Cookies", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Success login preserved", () => {
    cy.contains("#userName-value", "test");
  });
  it("Success login preserved", () => {
    cy.contains("#userName-value", "test");
  });
  it("Counting the cookies", () => {
    cy.getCookies().then((cookies) => {
      cy.log("Cookies: ", cookies);
      expect(cookies).to.have.length(9);
    });
  });
});
