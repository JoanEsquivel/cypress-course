describe("API Testing Demo", () => {
  it("Creating a user(emulation)", function () {
    const userId: string = "7d01de84-9527-4855-a10c-043a637178b3";
    cy.wrap(userId).as("userId");
  });

  it("Get an authorizaztion token from the API account", function () {
    cy.request("POST", `${Cypress.env("demoQA")}/Account/v1/GenerateToken`, {
      userName: "test",
      password: "Test1234*",
    }).then((response) => {
      const token: string = response.body.token;
      cy.wrap(token).as("token");
    });
  });

  it("Get the user information", function () {
    const userId: string = this.userId;
    const token: string = this.token;
    const authorization: string = `Bearer ${token}`;
    const options = {
      method: "GET",
      url: `${Cypress.env("demoQA")}/account/v1/User/${userId}`,
      headers: {
        authorization,
      },
    };
    cy.request(options).should((response) => {
      cy.log("Status code validation").then(() => {
        expect(response.status).to.be.equal(200);
        expect(response.statusText).to.be.equal("OK");
      });
      cy.log("Username assertion").then(() => {
        expect(response.body.username).to.be.equal("test");
      });
      cy.log("Book title").then(() => {
        expect(response.body.books[0].title).to.be.equal("Git Pocket Guide");
      });
      cy.log("Schema").then(() => {
        expect(response.body.username).to.be.a("string");
      });
    });
  });
});
