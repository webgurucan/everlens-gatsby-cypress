// Custom Cypress Commands
const cyConst = require('../../src/utils/cypress-constants');

Cypress.Commands.add('goToAccessCodeForm', () => {
  cy.visit('/');
  cy.get('input[name=accessCode]', { timeout: cyConst.customTimeout }).should(
    'be.visible',
  );
});

Cypress.Commands.add('goToPersonalInfo', (code = 'everlywell-access-code') => {
  cy.goToAccessCodeForm();
  cy.get('input[name=accessCode]').type(Cypress.env(code));
  cy.get('button:contains(Order your test)').click();
  cy.get(cyConst.progressBar.class, { timeout: cyConst.customTimeout }).should(
    'be.visible',
  );
  cy.get('input', { timeout: cyConst.customTimeout }).should(
    'have.length.of.at.most',
    cyConst.personalInfo.inputs,
  );
  cy.get('main')
    .find('button', { timeout: cyConst.customTimeout })
    .should('have.length', cyConst.personalInfo.buttons);
});

Cypress.Commands.add('goToTests', (code = 'everlywell-access-code') => {
  cy.goToPersonalInfo(code);
  cy.get('input[name=firstName]')
    .type(cyConst.userInfo.firstName)
    .should('have.value', cyConst.userInfo.firstName);
  cy.get('input[name=lastName]')
    .type(cyConst.userInfo.lastName)
    .should('have.value', cyConst.userInfo.lastName);
  cy.get('input[name=birthday]')
    .type(cyConst.userInfo.dob)
    .should('have.value', cyConst.userInfo.dob);
  cy.get('input[name=email]')
    .type(cyConst.userInfo.email)
    .should('have.value', cyConst.userInfo.email);
  cy.get('body').then(body => {
    // userId input element may not exist by unique_id_required flag
    if (body.find('input[name=userId]').length > 0) {
      cy.get('input[name=userId]')
        .type(cyConst.userInfo.id)
        .should('have.value', cyConst.userInfo.id);
      cy.get('input[name=userConfirmId]')
        .type(cyConst.userInfo.id)
        .should('have.value', cyConst.userInfo.id);
    }
  });
  cy.get('button:contains("Continue")').click();
  cy.get(cyConst.progressBar.class, {
    timeout: cyConst.customTimeout,
  }).should('be.visible');
  cy.get('button:contains("Who Should Get Tested")').should('be.visible');
  cy.get('button:contains("What\'s Measured")').should('be.visible');
});

Cypress.Commands.add('goToShipment', (code = 'everlywell-access-code') => {
  cy.goToTests(code);
  cy.get('button:contains("Continue")').click();
  cy.get(cyConst.progressBar.class, {
    timeout: cyConst.customTimeout,
  }).should('be.visible');
  cy.get('main')
    .find('button', { timeout: cyConst.customTimeout })
    .should('have.length', cyConst.shipment.buttons);
  let inputCount = cyConst.shipment.inputs;
  if (code === 'multiple-delivery-access-code') {
    inputCount += 2;
  }
  cy.get('input', { timeout: cyConst.customTimeout }).should(
    'have.length',
    inputCount,
  );
  cy.get('select', { timeout: cyConst.customTimeout }).should(
    'have.length',
    cyConst.shipment.selects,
  );
});

Cypress.Commands.add('goToReview', (code = 'everlywell-access-code') => {
  cy.goToShipment(code);
  cy.get('input[name=address1]')
    .type(cyConst.userInfo.street)
    .should('have.value', cyConst.userInfo.street);
  cy.get('input[name=address2]')
    .type(cyConst.userInfo.street)
    .should('have.value', cyConst.userInfo.street);
  cy.get('input[name=city]')
    .type(cyConst.userInfo.city)
    .should('have.value', cyConst.userInfo.city);
  cy.get('select[name=state]').select('TX');
  cy.get('input[name=zipcode]')
    .type(cyConst.userInfo.zipcode)
    .should('have.value', cyConst.userInfo.zipcode);
  if (code === 'multiple-delivery-access-code') {
    cy.get('input[name=delivery]').click({ multiple: true });
  }
  cy.get('input[name=email]').should('have.value', cyConst.userInfo.email);
  cy.get('input[name=phone]')
    .type(cyConst.userInfo.phone)
    .should('have.value', cyConst.userInfo.phone);
  cy.get('button:contains("Continue")').click();
  cy.get(cyConst.progressBar.class, {
    timeout: cyConst.customTimeout,
  }).should('be.visible');
  cy.get('main').find('button').should('have.length', cyConst.review.buttons);
});
