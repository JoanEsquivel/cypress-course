describe("Menu describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/menu`);
  });
  it("Menu Demo", () => {
    cy.get("a").contains("Main Item 2").realHover();
    cy.contains("a", "SUB SUB LIST »").realHover();
  });
});
