///<reference types="cypress"/>
describe('Functional tests', () => {

  beforeEach('Open app url', () => {
    cy.fixture('test.texts.json').as('testTexts');
    cy.launchApp('/demo');
  });

  it('should analyze positive sentiment in texts', function () {
    cy.analysisSentiment(this.testTexts.positiveSentiment.text);
    cy.verifySentimentOutput(
      this.testTexts.positiveSentiment.sentimentScore,
      this.testTexts.positiveSentiment.magnitude
    );
  });

  it('should analyze negative sentiment in texts', function () {
    cy.analysisSentiment(this.testTexts.negativeSentiment.text);
    cy.verifySentimentOutput(
      this.testTexts.negativeSentiment.sentimentScore,
      this.testTexts.negativeSentiment.magnitude
    );
  });

  it('should analyze neutral sentiment in texts', function () {
    cy.analysisSentiment(this.testTexts.neutralSentiment.text);
    cy.verifySentimentOutput(
      this.testTexts.neutralSentiment.sentimentScore,
      this.testTexts.neutralSentiment.magnitude
    );
  });

  it('should handle mixed sentiment in texts', function () {
    cy.analysisSentiment(this.testTexts.mixedSentiment.text);
    cy.verifySentimentOutput(
      this.testTexts.mixedSentiment.sentimentScore,
      this.testTexts.mixedSentiment.magnitude
    );
  });

  it('should detect and ignore emojis or special characters', function () {
    cy.analysisSentiment(this.testTexts.textWithSpecial.text);
    cy.verifySentimentOutput(
      this.testTexts.textWithSpecial.sentimentScore,
      this.testTexts.textWithSpecial.magnitude
    );
  });

  it('should handle multilingual sentiment detection', function () {
    cy.analysisSentiment(this.testTexts.multilingualSentiment.text);
    cy.verifySentimentOutput(
      this.testTexts.multilingualSentiment.sentimentScore,
      this.testTexts.multilingualSentiment.magnitude
    );
  });

  it('should handle multilingual sentiment detection', function () {
    cy.analysisSentiment(this.testTexts.multilingualSentiment.text);
    cy.verifySentimentOutput(
      this.testTexts.multilingualSentiment.sentimentScore,
      this.testTexts.multilingualSentiment.magnitude
    );
  });

  it('should analyze text with sarcasm', function () {
    cy.analysisSentiment(this.testTexts.textWithSarcasm.text);
    cy.verifySentimentOutput(
      this.testTexts.textWithSarcasm.sentimentScore,
      this.testTexts.textWithSarcasm.magnitude
    );
  });

});