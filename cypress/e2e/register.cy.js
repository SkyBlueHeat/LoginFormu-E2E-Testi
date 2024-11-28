
describe('Register Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register'); 
  });

  it('should render all inputs and options', () => {
    cy.get('input[name="name"]').should('be.visible'); 
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible'); 
  });

  it('should allow filling form and submitting', () => {
    cy.get('input[name="name"]').type('New User');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('newpassword123');

    cy.get('form').submit(); 

  });

  it('should validate required fields', () => {
    cy.get('form').submit(); 
  

  });
});
  