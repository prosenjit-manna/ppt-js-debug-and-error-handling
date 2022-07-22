/// <reference types="cypress" />

export default class Button {
  selector = {
    button: () => cy.get('[data-test-id="login"]'),
  }
}