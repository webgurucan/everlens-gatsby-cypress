const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify multiple delivery option', () => {
  specify('shipment step displays delivery options', () => {
    // go to shipment step with multiple delivery access code
    cy.goToShipment('multiple-delivery-access-code');

    // delivery options exist
    cy.get('input[name=delivery]').should('exist');
    cy.get('input[name=delivery]').should('not.be.checked');

    // inputs
    cy.get('input[name=address1]').type(cyConst.userInfo.street);
    cy.get('input[name=address2]').type(cyConst.userInfo.street);
    cy.get('input[name=city]').type(cyConst.userInfo.city);
    cy.get('select[name=state]').select('TX');
    cy.get('input[name=zipcode]').type(cyConst.userInfo.zipcode);
    cy.get('input[name=phone]').type(cyConst.userInfo.phone);

    // button is disabled
    cy.get('button:contains("Continue")').should('be.disabled');

    // select delivery options
    cy.get('input[name=delivery]').click({ multiple: true });

    // button is enabled
    cy.get('button:contains("Continue")').should('not.be.disabled');
  });

  specify('review step displays delivery options', () => {
    // go to shipment step with multiple delivery access code
    cy.goToReview('multiple-delivery-access-code');

    // delivery options exist
    cy.get('div').contains('Delivery').should('exist');
  });
});
