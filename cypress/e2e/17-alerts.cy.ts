describe("Alerts", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
  });
  it("JS Alert", () => {
    cy.contains("Click for JS Alert").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a JS Alert");
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("JS Confirm(accept)", () => {
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal(`I am a JS Confirm`);
    });
    cy.on("window:confirm", () => true);
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("JS Confirm(cancel)", () => {
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal(`I am a JS Confirm`);
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("JS Prompt", () => {
    cy.window().then(($win) => {
      //Control prompt behavior
      cy.stub($win, "prompt").returns("This is a test text");
      cy.contains("Click for JS Prompt").click();
    });
    cy.get("#result").should("have.text", "You entered: This is a test text");
  });
});
