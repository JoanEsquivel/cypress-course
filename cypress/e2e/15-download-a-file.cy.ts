describe("Download a file in the QA Demo site", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/upload-download`);
  });
  it("Download the file", () => {
    cy.get("a#downloadButton").click();
    cy.verifyDownload("sampleFile.jpeg");
  });
});
