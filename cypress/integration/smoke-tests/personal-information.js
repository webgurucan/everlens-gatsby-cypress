const cyConst = require('../../../src/utils/cypress-constants');

describe('Verify Personal Information step functions correctly', () => {
  before(() => {
    cy.goToPersonalInfo();
  });

  specify('progress bar is correct', () => {
    cy.get(cyConst.progressBar.class)
      .find('.accomplished')
      .as('accomplishedSections');
    cy.get('@accomplishedSections').should(
      'have.length',
      cyConst.personalInfo.progressBarCount,
    );
    cy.get('@accomplishedSections').should(
      'contain',
      cyConst.personalInfo.progressBarNum,
    );
  });

  specify('first name input accepts text', () => {
    cy.get('input[name=firstName]')
      .type(cyConst.userInfo.firstName)
      .should('have.value', cyConst.userInfo.firstName);
  });

  specify('last name input accepts text', () => {
    cy.get('input[name=lastName]')
      .type(cyConst.userInfo.lastName)
      .should('have.value', cyConst.userInfo.lastName);
  });

  specify('date of birth input accepts text', () => {
    cy.get('input[name=birthday]')
      .type(cyConst.userInfo.dob)
      .should('have.value', cyConst.userInfo.dob);
  });

  specify('email input accepts text', () => {
    cy.get('input[name=email]')
      .type(cyConst.userInfo.email)
      .should('have.value', cyConst.userInfo.email);
  });

  specify('unique id verifies input correctly', () => {
    cy.get('body').then(body => {
      if (body.find('input[name=userId]').length > 0) {
        cy.get('input[name=userConfirmId]').type(
          'random text should not be accepted',
        );
        cy.get('input[name=userId]').type('random text should not be accepted');
        cy.get('button:contains("Continue")').click();
        cy.get('div[id=undefined-error]')
          .find('span')
          .should('contain', 'Please enter a valid  Unique ID');
        cy.get('input[name=userId]').clear();
        cy.get('div[id=undefined-error]').find('span').should('contain', '');

        cy.get('input[name=userId]').type('everlywell');
        cy.get('button:contains("Continue")').click();
        cy.get('div[id=undefined-error]')
          .find('span')
          .should('contain', 'Please enter a valid  Unique ID');
        cy.get('input[name=userId]').clear();
        cy.get('div[id=undefined-error]').find('span').should('contain', '');

        cy.get('input[name=userId]').type('1234567*');
        cy.get('button:contains("Continue")').click();
        cy.get('div[id=undefined-error]')
          .find('span')
          .should('contain', 'Please enter a valid  Unique ID');
        cy.get('input[name=userId]').clear();
        cy.get('input[name=userConfirmId]').clear();
        cy.get('div[id=undefined-error]').find('span').should('contain', '');
      }
    });
  });

  specify('unique id input accepts numbers', () => {
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
  });

  specify('invalid@test.com email results in no tests', () => {
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]')
      .type('invalid@test.com')
      .should('have.value', 'invalid@test.com');
    cy.get('button:contains(Continue)').click();
    cy.get('main').should(
      'contain',
      'Sorry, there are no tests available for you to claim.',
    );
    cy.get(cyConst.progressBar.class)
      .find('.accomplished')
      .contains('info')
      .click();
  });

  specify('that clicking continue takes user to tests step', () => {
    cy.get('input[name=email]').clear();
    cy.get('input[name=email]')
      .type(cyConst.userInfo.email)
      .should('have.value', cyConst.userInfo.email);
    cy.get('button:contains("Continue")').click();
    cy.wait(3000);
    cy.get(cyConst.progressBar.class, {
      timeout: cyConst.customTimeout,
    }).should('be.visible');
    cy.get('main')
      .find('button', { timeout: cyConst.customTimeout })
      .should('have.length', cyConst.tests.buttons);
  });
});
