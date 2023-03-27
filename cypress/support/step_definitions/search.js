const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('Guest go to zero Online Banking dashboard', () => {
    cy.visit('http://zero.webappsecurity.com/index.html');
})

When('Guest fill in "zero" keyword in search bar on the web', () => {
    cy.get('#searchTerm').type('zero');
    cy.get('.search-query').click();
    cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=zero');
})

Then('Guest see all menu with the keyword "zero" on Zero bank search results', () => {
    cy.get('h2').should('contain.text', 'Search Results:');
})