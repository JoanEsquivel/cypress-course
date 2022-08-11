describe("Environment Variable Demo", () => {
  it("Demo", () => {
    cy.log(`Printing Environment Variable Value: ${Cypress.env("demoVar")}`);
  });
});
