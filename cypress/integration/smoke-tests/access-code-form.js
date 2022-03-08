const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify access code form functions correctly', () => {
  before(() => {
    cy.goToAccessCodeForm();
  });

  beforeEach(() => {
    cy.get('input[name=accessCode]').clear();
    cy.get('div[id=accessCode-error]').should('contain', '');
  });

  specify('button is disabled', () => {
    cy.get('button:contains(Order your test)').should('be.disabled');
  });

  specify('input accept text and capitalizes it', () => {
    cy.get('input[name=accessCode]').type('test').should('have.value', 'TEST');
  });

  specify('button is enable after text is entered', () => {
    cy.get('input[name=accessCode]').type('test');
    cy.get('button:contains(Order your test)').should('be.enabled');
    cy.get('input[name=accessCode]').clear();
    cy.get('button:contains(Order your test)').should('be.disabled');
  });

  specify('entering invalid code results in error message', () => {
    cy.get('input[name=accessCode]').type('text');
    cy.get('button:contains("Order your test")').click();
    cy.get('div[id=accessCode-error]', {
      timeout: cyConst.customTimeout,
    }).should('contain', 'Please enter valid access code');
  });

  specify('entering unavailable code results in error message', () => {
    cy.get('input[name=accessCode]').type(Cypress.env('closed-access-code'));
    cy.get('button:contains("Order your test")').click();
    cy.get('div[id=accessCode-error]', {
      timeout: cyConst.customTimeout,
    }).should('contain', 'This code is no longer valid');
  });

  specify('a valid access code takes user to wizard', () => {
    cy.get('input[name=accessCode]').type(
      Cypress.env('everlywell-access-code'),
    );
    cy.get('button:contains("Order your test")').click();
    cy.get(cyConst.progressBar.class, {
      timeout: cyConst.customTimeout,
    }).should('be.visible');
    cy.get('input', { timeout: cyConst.customTimeout }).should(
      'have.length.of.at.most',
      cyConst.personalInfo.inputs,
    );
    cy.get('main')
      .find('button', { timeout: cyConst.customTimeout })
      .should('have.length', cyConst.personalInfo.buttons);
  });
});
