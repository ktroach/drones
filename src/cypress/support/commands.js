
Cypress.Commands.add('login', (username, [assword]) => {
    cy.visit('http://localhost:3000/');
});