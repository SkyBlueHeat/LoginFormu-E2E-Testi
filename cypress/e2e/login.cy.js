
describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); 
  });
 
  it('should render all input fields', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible'); 
    cy.get('input[name="password"]').should('be.visible');
  });

  it('should allow typing into inputs', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
  });

  it('should submit form successfully', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('form').submit(); 
  });
});
