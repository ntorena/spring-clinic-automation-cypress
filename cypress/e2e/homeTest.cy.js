describe('E2E Test for Veterinarians Page', () => {
  beforeEach(() => {
    cy.visit('http://host.docker.internal:8080');
  });

  it('Should navigate to the Veterinarians page and verify content', () => {
    cy.get('#main-navbar > ul > li:nth-child(3) > a').click();

    cy.contains('Veterinarians').should('be.visible');
  });

  it('Should navigate to the Owners page and verify content', () => {
    cy.get('#main-navbar > ul > li:nth-child(2) > a').click();

    cy.contains('Owners').should('be.visible');
  });
});