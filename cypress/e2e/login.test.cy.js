/// <reference types="cypress" />

describe('Login/ Logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    // it('Should try to login with invalid data', () => {
    //     cy.get('#login_form').should('be.visible')
    //     cy.get('#user_login').type('invalid username')
    //     cy.get('#user_password').type('invalid password')
    //     cy.contains('Sign in').click()
    //     cy.get('input[name="submit"]').click()
    // });

    // it('Should display error message', () => {
    //     cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    // });

    it('Should login to application with valid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.get('ul.nav-tabs').should('be.visible')
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    });
    
    it('Should display logout from the application', () => {
            cy.get('.icon-signin').should('be.visible')
        });
})