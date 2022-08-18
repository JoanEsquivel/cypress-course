import { Main } from "../../cypress/pages/Main";

class Login extends Main {
  private username: string = "#userName";
  private password: string = "#password";
  private login: string = "#login";
  private invalidLoginMessage: string = "#name";

  get usernameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.username);
  }

  get passwordElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.password);
  }

  get loginElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.login);
  }

  get invalidLoginMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.invalidLoginMessage);
  }

  submitLogin(username: string, password: string): void {
    cy.get(this.username).type(username);
    cy.get(this.password).type(password);
    cy.get(this.login).click();
  }

  visit(): void {
    cy.visit(`${Cypress.env("demoQA")}/login`);
  }
}

export const LoginPage = new Login();
