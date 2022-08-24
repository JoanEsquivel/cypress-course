const nowTimeStamp: number = new Date(Date.UTC(2017, 2, 14)).getTime();

describe("Clock example", () => {
  beforeEach(function () {
    cy.log("date timestamp: ", nowTimeStamp);
    // cy.log("Check the timestamp at: http://www.timestamp-converter.com/");
    cy.clock(nowTimeStamp);
    cy.visit("https://example.cypress.io/commands/spies-stubs-clocks");
  });

  it("Clock demo", () => {
    cy.get("#clock-div").click().should("have.text", "1489449600");
  });
  it("Tick demo", () => {
    cy.get("#tick-div").click().should("have.text", "1489449600");
    cy.log("Doing the cy.tick() to add 10 seconds: ").then(() => {
      cy.tick(10000); // 10 seconds passed
      cy.get("#tick-div").click().should("have.text", "1489449610");
    });
  });
});
