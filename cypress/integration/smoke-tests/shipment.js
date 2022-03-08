const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify shipment step functions correctly', () => {
  before(() => {
    cy.goToShipment();
  });

  specify('progress bar is correct', () => {
    cy.get(cyConst.progressBar.class)
      .find('.accomplished')
      .as('accomplishedSections');
    cy.get('@accomplishedSections').should(
      'have.length',
      cyConst.shipment.progressBarCount,
    );
    cy.get('@accomplishedSections').should(
      'contain',
      cyConst.shipment.progressBarNum,
    );
  });

  specify('name input accepts text', () => {
    cy.get('input[name=name]').should('have.value', cyConst.userInfo.name);
  });

  specify('first address input accepts text', () => {
    cy.get('input[name=address1]')
      .type(cyConst.userInfo.street)
      .should('have.value', cyConst.userInfo.street);
  });

  specify('second address input accepts text', () => {
    cy.get('input[name=address2]')
      .type(cyConst.userInfo.street)
      .should('have.value', cyConst.userInfo.street);
  });

  specify('city input accepts text', () => {
    cy.get('input[name=city]')
      .type(cyConst.userInfo.city)
      .should('have.value', cyConst.userInfo.city);
  });

  specify('select offers state selection', () => {
    cy.get('select[name=state]')
      .select(cyConst.userInfo.state)
      .should('have.value', cyConst.userInfo.state);
  });

  specify('zipcode input accepts text', () => {
    cy.get('input[name=zipcode]')
      .type(cyConst.userInfo.zipcode)
      .should('have.value', cyConst.userInfo.zipcode);
  });

  specify('email input accepts text', () => {
    cy.get('input[name=email]').should('have.value', cyConst.userInfo.email);
  });

  specify('phone number input accepts text', () => {
    cy.get('input[name=phone]')
      .type(cyConst.userInfo.phone)
      .should('have.value', cyConst.userInfo.phone);
  });

  specify('clicking continue takes user to next step', () => {
    cy.get('button:contains("Continue")').click();
    cy.get(cyConst.progressBar.class, {
      timeout: cyConst.customTimeout,
    }).should('be.visible');
    cy.get(cyConst.progressBar.class, {
      timeout: cyConst.cusomtTimeout,
    }).should('be.visible');
    cy.get('input', { timeout: cyConst.cusomtTimeout }).should(
      'have.length',
      cyConst.review.inputs,
    );
    cy.get('main')
      .find('button', { timeout: cyConst.cusomtTimeout })
      .should('have.length', cyConst.review.buttons);
  });
});
