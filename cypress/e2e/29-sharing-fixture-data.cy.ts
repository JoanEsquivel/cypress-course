import { testData } from "./model";
describe("Sharing my fixture", () => {
  beforeEach(function () {
    cy.fixture("jsonExample").as("testData");
  });
  it("Accesing the shared fixture", function () {
    cy.get<testData>("@testData").then((testData) => {
      cy.log("This is the property value: ", testData.property1);
    });
  });
  it("Accesing the shared fixture", function () {
    cy.get<testData>("@testData").then((testData) => {
      cy.log("This is the property value: ", testData.property1);
    });
  });
  it("Accesing the shared fixture", function () {
    cy.get<testData>("@testData").then((testData) => {
      cy.log("This is the property value: ", testData.property1);
    });
  });
});
