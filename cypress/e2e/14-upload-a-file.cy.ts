describe("Upload a file in the QA Demo site", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });
  it("Upload the file", () => {
    cy.get("input#uploadFile").attachFile("example.json");
    cy.get("p#uploadedFilePath").should("contain", "example.json");
  });
});
