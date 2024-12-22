///<reference types="cypress"/>
describe('performance benchmark tests', () => {

  beforeEach('Open app url', () => {
    cy.fixture('test.texts.json').as('testTexts');
    cy.launchApp('/demo');
  });


  it('should handle requests within 1500 ms for simple texts', function () {
    cy.get('#textArea').as('textField').clear();
    cy.get('@textField').type("This is a benchmark test");
    cy.window().its('performance')
      .invoke('mark', 'benchmark');
    cy.get('#btnRunAnalysis').click();
    cy.get('#divResults').as('results');
    cy.window().its('performance')
      .invoke('measure', 'benchmark')
      .its('duration', { timeout: 0 })
      .should('be.lessThan', 1500);
  });

  it('should handle requests within 2000 ms for large texts', function () {
    cy.get('#textArea').as('textField').clear();
    cy.get('@textField').type("Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, `Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT- POCKET, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge. In another moment down went Alice after it, never once considering how in the world she was to get out again. The rabbit-hole went straight on like a tunnel for some way, and then dipped suddenly down, so suddenly that Alice had not a moment to think about stopping herself before she found herself falling down a very deep well. Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed");
    cy.window().its('performance')
      .invoke('mark', 'benchmark');
    cy.get('#btnRunAnalysis').click();
    cy.get('#divResults').as('results');
    cy.window().its('performance')
      .invoke('measure', 'benchmark')
      .its('duration', { timeout: 0 })
      .should('be.lessThan', 2000);
  });

});