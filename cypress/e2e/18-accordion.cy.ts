describe("Accordian", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/accordian`);
  });
  it("Default Accordion validation example", () => {
    cy.get("#section2Heading").click();
    //Checking if the first description was hidden correctly.
    cy.get("#section1Heading").next().should("have.css", "display", "none");
    //Checking if the second description is displayed
    cy.get("#section2Heading")
      .next()
      .should("have.css", "display", "block")
      .and("have.class", "show");
  });
});
