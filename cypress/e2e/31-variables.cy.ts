describe("Basics", () => {
  beforeEach(() => {
    cy.visit(`dynamicid`);
  });
  it("Find by text", function () {
    let text: string;

    cy.contains("Button with Dynamic ID")
      .invoke("text")
      .then((elementText: string) => {
        cy.log(elementText);
        let text = elementText;
        cy.wrap(text).as("textAsAnAlias");
        cy.log("Text from variable: " + text);
      });
    cy.get("@textAsAnAlias").then((text) => {
      cy.log("Text from variable outside then : " + text);
    });
    cy.log("Text from variable outside then : " + text);
  });
  it("Sharing context by Alias", function () {
    let text: string = this.textAsAnAlias;
    cy.log(text);
  });
});
