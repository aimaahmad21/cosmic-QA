/// <reference types="cypress"/>
describe('cosmic',function() {
    beforeEach('login', function(){
        cy.visit('https://app.marketverse.ai/')
        cy.get('#identifier-field')
        .should('be.visible')
        .type('aima.ahmad@datics.ai{enter}');
        cy.get('#password-field',{timeout:10000}) // Adjust the timeout as needed
        //.should('be.visible')
        .type('1234567890');
      cy.get('.cl-formButtonPrimary')
        .should('be.visible')
        .and('be.enabled')
        .click();
    })
    it('crypto', function(){
        cy.contains('Crypto', { timeout: 10000 })
        .should('be.visible')
        .and('be.enabled')
        .click();

        //search for company
        cy.contains('DOT-USD', { timeout: 10000 })
        .should('be.visible')
        .click();
        
        // SCROLLING FOR VERIFICATION
        cy.scrollTo('top');
        cy.scrollTo('bottom');
        cy.get('#chatTabs-mobile > .MuiTabs-scroller > .MuiTabs-flexContainer').scrollIntoView();
        cy.get('[href="/login"] > img')
        //.should('be.visible')
        .click();
    })

    it('Other companies',function(){
        // ACCESSING HOME PAGE 
       cy.visit('https://app.marketverse.ai/dashboard',{
        failOnStatusCode: false
      });

        // ACCESSING MICROSOFT
        cy.contains('GOOGL', { timeout: 10000 })
        .should('be.visible')
        .click();

        // VERIFICATION OF KEY INSIGHTS 
        cy.get('.css-1uv3nni', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'GOOGLE');
         // ANALYTICAL RATING
         cy.get('.css-5f3jbq')
         .should('be.visible')
 
         // TRADING STRATEGY
         cy.get('.underline-hover').click()
 
         // CLOSE TRADING STRATEGY DIALOG
         cy.get('#form-dialog-title button').click({force:true})
   })
   it('Chatbot Interaction and API Response Handling',function(){
        // CHATBOT VERIFY INPUT FIELD 
        cy.get('.MuiInputBase-root > #chatInput')
        .should('have.prop', 'tagName', 'INPUT') 
        .type('what is bit coin? {enter}')

        cy.intercept('GET', '*/api.thecosmicai.com/user/chatassistant*').as('getData');
        cy.wait('@getData').then((interception)=> {
            cy.get('#chatTabs-mobile > .MuiTabs-scroller > .MuiTabs-flexContainer').scrollIntoView()
        })
        cy.get('.css-5ofxka > :nth-child(3) > .MuiBox-root').click()
        cy.wait('@getData')
       
   })
   it('Handle Notifications',function(){
    // NOTIFICATIONS 
    cy.get(':nth-child(5) > img', { timeout: 10000 })
      .should('be.visible')
      .click();

    // CLOSE NOTIFICATIONS DIALOG
    cy.get('#form-dialog-title button', { timeout: 10000 })
      .click({ force: true });
  })
  it('Verify Disclaimers Page',function(){
    // NAVIGATE TO DISCLAIMER
    cy.get('[href="/disclaimer"]', { timeout: 10000 })
      .click({ force: true })

    // VERIFY DISCLAIMER CONTENT
    cy.get('.css-1sowyjy > .MuiTypography-root', { timeout: 10000 })
      .should('have.text', 'DISCLAIMERS')
  })
  it('User Logout',function() {
    // OPEN PROFILE MENU
    cy.get('.MuiAvatar-img', { timeout: 10000 })
      .click()

    // CLICK LOGOUT
    cy.contains('Sign Out', { timeout: 10000 }) 
      .click()

    // VERIFY SUCCESSFUL LOGOUT
    cy.get('#identifier-field', { timeout: 10000 })
      .should('be.visible')
  })

})