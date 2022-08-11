describe("Demo QA", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/checkbox`);
  });
  it("Checkbox scenario", () => {
    cy.get('input[type="checkbox"]').click({ force: true });
    cy.get("#result").should(
      "have.text",
      "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile"
    );
  });
});

describe.only("The internet app", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("theInternet")}/checkboxes`);
  });
  it("Checkbox scenario", () => {
    cy.get("form#checkboxes input").eq(0).click().should("be.checked");
  });
});
