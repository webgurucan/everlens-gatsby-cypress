describe('Verify standard delivery option', () => {
  specify('shipment step does not display delivery options', () => {
    // go to shipment step with standard delivery access code
    cy.goToShipment('standard-delivery-access-code');

    // delivery options don't exist
    cy.get('input[name=delivery]').should('not.exist');
  });

  specify('review step displays delivery options', () => {
    // go to review step with standard delivery access code
    cy.goToReview('standard-delivery-access-code');

    // delivery options don't exist
    cy.get('div').contains('Delivery').should('exist');
  });
});
