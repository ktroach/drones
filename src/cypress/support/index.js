import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
    console.error(err); 
    // back out of test runner on this type of error
    return false;
});