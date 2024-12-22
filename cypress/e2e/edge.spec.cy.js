///<reference types="cypress"/>
describe('boundary and edge tests', () => {

  beforeEach('Open app url', () => {
    cy.fixture('edge.test.texts.json').as('edgeTestTexts');
    cy.launchApp('/demo');
  });

  it('should handle text with only special characters', function () {
    cy.analysisSentiment(this.edgeTestTexts.onlySpecialCharacters.text);
    cy.verifyErrorOutput(this.edgeTestTexts.onlySpecialCharacters.error);
  });

  it('should display error for empty input', function () {
    cy.get('#textArea').as('textField').clear();
    cy.get('@textField').focus().blur();
    cy.get('#btnRunAnalysis').click();
    cy.get('#divResults').as('results');
    cy.verifyErrorOutput(this.edgeTestTexts.emptyText.error);
  });

  it('should analyze text with minimum length', function () {
    cy.analysisSentiment(this.edgeTestTexts.textWithMinimumLength.text);
    cy.verifyErrorOutput(this.edgeTestTexts.textWithMinimumLength.error);
  });

  it('should handle single-word ambiguous input', function () {
    cy.analysisSentiment(this.edgeTestTexts.textWithSingleWord.text);
    cy.verifySentimentOutput(
      this.edgeTestTexts.textWithSingleWord.sentimentScore,
      this.edgeTestTexts.textWithSingleWord.magnitude
    );
  });

  it('should handle text more than maximum length', function () {
    cy.analysisSentiment(this.edgeTestTexts.textWithMaximumLength.text);
    cy.verifyErrorOutput(this.edgeTestTexts.textWithMaximumLength.error);
  });

});