import "allure-cypress";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});