const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify Tests step functions correctly', () => {
  before(() => {
    cy.goToTests();
  });

  specify('progress bar is correct', () => {
    cy.get(cyConst.progressBar.class)
      .find('.accomplished')
      .as('accomplishedSections');
    cy.get('@accomplishedSections').should(
      'have.length',
      cyConst.tests.progressBarCount,
    );
    cy.get('@accomplishedSections').should(
      'contain',
      cyConst.tests.progressBarNum,
    );
  });

  specify('welcome user is diplayed', () => {
    cy.get('div')
      .should('contain', `Welcome, ${cyConst.userInfo.firstName}`)
      .and('is.visible');
  });

  specify('available tests is displayed', () => {
    cy.get('div').should('contain', cyConst.tests.title).and('is.visible');
  });

  specify('at least one tests buttons are displayed', () => {
    cy.get('button:contains("Who Should Get Tested")').should('be.visible');
    cy.get('button:contains("What\'s Measured")').should('be.visible');
  });

  specify('user can navigate to shipment step', () => {
    cy.get('button:contains("Continue")').click();
    cy.get(cyConst.progressBar.class, {
      timeout: cyConst.customTimeout,
    }).should('be.visible');
    cy.get('main')
      .find('button', { timeout: cyConst.customTimeout })
      .should('have.length', cyConst.shipment.buttons);
    cy.get('input', { timeout: cyConst.customTimeout }).should(
      'have.length',
      cyConst.shipment.inputs,
    );
    cy.get('select', { timeout: cyConst.customTimeout }).should(
      'have.length',
      cyConst.shipment.selects,
    );
  });
});
