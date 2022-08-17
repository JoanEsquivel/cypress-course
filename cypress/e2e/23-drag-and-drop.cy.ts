describe("Drag and Drop describe", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/droppable`);
  });
  it("Drag and Drop Demo", () => {
    cy.get("#draggable").drag("#droppable", { force: true });
  });
});
