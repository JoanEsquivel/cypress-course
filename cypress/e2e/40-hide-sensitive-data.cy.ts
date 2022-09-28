describe("Hidding username and password to avoid data leaks", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  });
  it("Valid Login", () => {
    //1- Get the sensitive data from environment variables
    const username = Cypress.env("user");
    //To set the password use:
    //BASH: export CYPRESS_password=test1234*
    //You can use the package "as a" https://github.com/bahmutov/as-a from Glen Bahmutov to create a safer way to declare environment variables
    const password = Cypress.env("password");

    //2- Make sure the data was set with pre-assertions
    expect(username, "username was set").to.be.a("string").and.not.be.empty;
    //expect(password, 'password was set').to.be.a('string').and.not.be.empty - Avoid this line, you will see the password in videos/ss
    if (typeof password !== "string" || !password) {
      throw new Error("Missing password value, set using CYPRESS_password=...");
    }

    cy.safeLogin(username, password);
    cy.url().should("contain", "profile");
  });
});

//More information at: https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
