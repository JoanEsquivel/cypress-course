describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/classattr");
  });
  it("how to find an element by its text", () => {
    cy.xpath(`//*[text()='Correct variant is']`).should(
      "contain.text",
      "Correct"
    );
  });
  it("find an element by its attribute using xpath", () => {
    cy.xpath(`//pre[@class=' language-html']`).should("contain.text", "button");
  });

  it("Find by class (middle and spaces)", () => {
    //normalize-space function to clean up stray whitespace characters around the class name
    cy.xpath(
      `//button[contains(concat(' ', @class, ' '), ' btn-warning ')]`
    ).should("have.css", "background-color", "rgb(255, 193, 7)");
  });
});
