const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify review step functions correctly', () => {
  before(() => {
    cy.goToReview();
  });

  beforeEach(() => {
    cy.get('div')
      .should('contain', cyConst.review.title)
      .parent()
      .as('PersonalInfo');
  });

  specify('progress bar is correct', () => {
    cy.get(cyConst.progressBar.class)
      .find('.accomplished')
      .as('accomplishedSections');

    cy.get('@accomplishedSections').should(
      'have.length',
      cyConst.review.progressBarCount,
    );
    cy.get('@accomplishedSections').should(
      'contain',
      cyConst.review.progressBarNum,
    );
  });

  specify('name is correct', () => {
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.name);
  });

  specify('email is correct', () => {
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.email);
  });

  specify('phone is correct', () => {
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.phone);
  });

  specify('test is visible', () => {
    cy.get('@PersonalInfo').should('contain', cyConst.review.testTitle);
    cy.get('@PersonalInfo')
      .contains(cyConst.review.testTitle)
      .next()
      .as('TestsList');
    cy.get('@TestsList').should('be.visible');
  });

  specify('address is correct', () => {
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.street);
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.city);
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.zipcode);
    cy.get('@PersonalInfo').should('contain', cyConst.userInfo.state);
  });

  specify('place order submits order', () => {
    cy.get('button:contains(Place Order)').click();
  });
});
