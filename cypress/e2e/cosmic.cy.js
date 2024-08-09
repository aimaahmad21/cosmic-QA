/// <reference types="cypress"/>
describe('template spec', () => {
  it('passes', () => {
    //GETTING ACCESS OF WEBSITE
    cy.visit('https://app.marketverse.ai/')
    //ENTERING EMAIL
    cy.get('#identifier-field')
    .should('be.visible')
    .type('aima.ahmad@datics.ai{enter}')
    //ENTRING PASSWORD
    cy.get('#password-field')
    .should('be.visible')
    .type('1234567890')
    //LOGING IN
    cy.get('.cl-formButtonPrimary')
    .should('be.visible')
    .should('be.enabled')
    .click()
    cy.wait(8000)
    //SELECTING CRYPTO COMPANIES 
    cy.contains('Crypto')
    .should('be.visible')
    .should('be.enabled')
    .click()
    cy.contains('DOT-USD')
    .should('be.visible')
    .click()
    //SCROLLING FOR VERIFICATION
    cy.scrollTo('top',{timeout:30000})
    cy.scrollTo('bottom',{timeout:30000})
    cy.get('.css-158s385').scrollIntoView({top:500, left:0})
    //verification of components 
    cy.get('.css-1b7yq8j').should('be.visible')
    //acessing home page 
    cy.get('[href="/login"] > img',{timeout:40000})
    .should('be.visible')
    .click()
    //accessing microsoft
    cy.contains('MSFT')
    .should('be.visible')
    .click()
    // verification of key insights 
    cy.get('.css-1uv3nni')
    .should('be.visible')
    .and('contain.text','MICROSOFT')
    //chatbot verify input field 
    cy.get('.MuiInputBase-root > #chatInput')
    .should('have.prop', 'tagName', 'INPUT') 
    .type('what is bit coin? {enter}')
    //using api response time 
    cy.intercept('GET', '*/api.thecosmicai.com/user/chatassistant*').as('getData');
    cy.wait('@getData').then((interception)=> {
      cy.get('.css-8b2zvr > .MuiBox-root > .MuiTypography-root').scrollIntoView()
    })
})
})