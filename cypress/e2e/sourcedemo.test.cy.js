/// <reference types="cypress" />

describe('Sauce Demo Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.login('standard_user', 'secret_sauce');
    });

    it('should successfully login with valid credentials', () => {
        // Masukkan username dan password
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        // Verifikasi bahwa pengguna berhasil login
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('contain.text', 'Products');
    });

    it('should display results when searching for a product', () => {
        // Melakukan Search nama produk
        cy.get('[data-test="product_sort_container"]').select('Name (A to Z)');
        cy.get('.product_list').should('be.visible');
        cy.get('.product_label').contains('Sauce Labs Backpack');
    });

    it('should add a product to the cart', () => {
        // Menambah Produk
        cy.get('.inventory_item').first().find('.btn_inventory').click();

        // Memeriksa Item Produk
        cy.get('.shopping_cart_badge').should('contain.text', '1');
    });

    it('should log out and redirect to login page', () => {
        // Klik logout
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

        // Verifikasi bahwa pengguna dialihkan ke halaman login
        cy.url().should('include', '/index.html');
        cy.get('#login_button_container').should('be.visible');
    });
});