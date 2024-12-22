// ***********************************************

Cypress.Commands.add('launchApp', (url) => {
  cy.visit(url);
  cy.log(`The app is launched with the url: ${url}`)
});

//This is a command to perform a sentiment analysis
Cypress.Commands.add('analysisSentiment', (text) => {
    cy.get('#textArea').as('textField').clear();
    cy.get('@textField').type(text);
    cy.get('#btnRunAnalysis').click();
    cy.get('#divResults').as('results');
});

//The command to verify the output for the analysed sentiment
Cypress.Commands.add('verifySentimentOutput', (score, magnitude) => {
    cy.get('@results').contains('This document is:')
      .children().first()
      .should('contain.text', score);
    cy.get('@results').contains('This document is:')
      .contains('Magnitude:')
      .should('contain.text', magnitude);
});

//The command to verify the error output for the analysed sentiment
Cypress.Commands.add('verifyErrorOutput', (error) => {
  cy.get('div.alert-danger')
  .should('contain.text', error);
});