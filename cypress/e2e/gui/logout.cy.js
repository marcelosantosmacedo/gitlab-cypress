describe('Spec - Logout', () => {
    
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('Logout with success', () => {
    cy.logout()
    cy.url().should('be.equal', `${Cypress.config().baseUrl}/users/sign_in`)
  })
})