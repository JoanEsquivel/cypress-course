import { Main } from "../pages-js/Main";

class Login extends Main {
  #username = "#userName";
  #password = "#password";
  #login = "#login";
  #invalidLoginMessage = "#name";

  get usernameElement() {
    return cy.get(this.#username);
  }

  get passwordElement() {
    return cy.get(this.#password);
  }

  get loginElement() {
    return cy.get(this.#login);
  }

  get invalidLoginMessageElement() {
    return cy.get(this.#invalidLoginMessage);
  }

  submitLogin(username, password) {
    cy.get(this.#username).type(username);
    cy.get(this.#password).type(password);
    cy.get(this.#login).click();
  }

  visit() {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  }
}

export const LoginPage = new Login();
