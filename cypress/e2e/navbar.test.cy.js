/// <reference types="cypress" />

describe('Searchbox Test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display banking content', () => {
       cy.contains('Online Banking').click()
       cy.url().should('include', 'online-banking.html')
       cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
       cy.contains('Feedback').click()
       cy.url('h1').should('include', 'feedback.html')
    });

    it('Should display homepage content', () => {
       cy.contains('Zero Bank').click()
       cy.url().should('include', 'index.html')
    });

    it.only('Should display time to use', () => {
        cy.contains('Checking Account Activity').click()
        cy.url().should('include', 'login.html')
     });

})