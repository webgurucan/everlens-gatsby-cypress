const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify kiewit access code functions properly', () => {
  before(() => {
    cy.goToAccessCodeForm();
  });

  specify('button is disabled', () => {
    cy.get('button:contains(Order your test)').should('be.disabled');
  });

  specify('input accept text and capitalizes it', () => {
    cy.get('input[name=accessCode]').type('test').should('have.value', 'TEST');
    cy.get('input[name=accessCode]').clear();
    cy.get('div[id=accessCode-error]').should('contain', '');
  });

  specify('kiewit access code works', () => {
    cy.get('input[name=accessCode]').type(Cypress.env('kiewit-access-code'));
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

  context('verify personal info page does not have unique id', () => {
    specify('has first name input', () => {
      cy.get('input[name=firstName]')
        .should('be.visible')
        .and('have.value', '');
    });

    specify('has last name input', () => {
      cy.get('input[name=lastName]').should('be.visible').and('have.value', '');
    });

    specify('has date of birth input', () => {
      cy.get('input[name=birthday]').should('be.visible').and('have.value', '');
    });

    specify('has email input', () => {
      cy.get('input[name=email]').should('be.visible').and('have.value', '');
    });

    specify('does not have unique id', () => {
      cy.get('input[name=userId]').should('not.exist');
    });
  });
});
