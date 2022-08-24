//https://kevintuck.co.uk/using-faker-to-generate-data-for-your-cypress-tests/#:~:text=You%20can%20install%20FakerJS%20by,extend%20the%20capabilities%20of%20Cypress.
//npm install @faker-js/faker --save-dev
//const { faker } = require('@faker-js/faker');

describe("Docket Post Test", () => {
  it("Random Data", () => {
    cy.task("freshUser").then((object) => {
      cy.log("Data: ", object);
    });
  });
  it("Random Data", () => {
    cy.task("freshUser").then((object) => {
      cy.log("Data: ", object);
    });
  });
  it("Random Data", () => {
    cy.task("freshUser").then((object) => {
      cy.log("Data: ", object);
    });
  });
  it("Random Data", () => {
    cy.task("freshUser").then((object) => {
      cy.log("Data: ", object);
    });
  });
});
