describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://app.marketverse.ai/')
    cy.get('#identifier-field').type('aima.ahmad@datics.ai{enter}')
    cy.get('#password-field').type('1234567890')
    cy.get('.cl-formButtonPrimary').click()
  })
})