describe('E2E Tests for Owners Page', () => {
    beforeEach(() => {
      cy.visit('http://host.docker.internal:8080');
    });
  
    it('Should find owners by last name', () => {
      cy.get('#main-navbar > ul > li:nth-child(2) > a').click();
  
      cy.contains('Owners').should('be.visible');
  
      cy.get('#lastName').type('Davis');
      cy.get('#search-owner-form button[type="submit"]').click();
  
      cy.get('#owners tbody tr').each(($row) => {
        cy.wrap($row).should('contain.text', 'Davis');
      });
    });
  
    it('Should add a new owner', () => {
      cy.get('#main-navbar > ul > li:nth-child(2) > a').click();
  
      cy.contains('Owners').should('be.visible');
  
      cy.get('#search-owner-form a').click();
  
      cy.get('#firstName').type('prueba');
      cy.get('#lastName').type('automatizada');
      cy.get('#address').type('test');
      cy.get('#city').type('michigan');
      cy.get('#telephone').type('1234567899');
  
      cy.get('#add-owner-form button[type="submit"]').click();
  
      cy.contains('Owner Information').should('be.visible');
      cy.get('#success-message').should('be.visible');
    });
  });
  