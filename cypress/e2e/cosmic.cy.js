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
    cy.get('.css-5ofxka > :nth-child(3) > .MuiBox-root').click()
    cy.wait('@getData')
    //analytical rating
    cy.get('.css-5f3jbq')
    .should('be.visible')
    //trading stragy
    cy.get('.underline-hover').click()
    cy.get('#form-dialog-title button').click({force:true})
    cy.get(':nth-child(5) > img')
    .should('be.visible')
    .click()
    cy.get('#form-dialog-title button')
    .click({force:true})
    cy.get('.MuiAvatar-img').click()
    cy.get('[href="/disclaimer"]').click({force:true})
    cy.get('.css-1sowyjy > .MuiTypography-root')
    .should('have.text','DISCLAIMERS')
    cy.get('.MuiPaper-root > :nth-child(2) > .MuiTypography-root')
    .should('have.text','General Disclaimer. The information provided on this site or any MarketVerse platform is for general informational purposes only. All information on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the service or reliance on any information provided on the service. Your use of the service and your reliance on any information on the service is solely at your own risk."')
    cy.get(':nth-child(3) > .MuiTypography-root')
    .should('have.text','Omissions, Errors, or Mistakes Disclaimer. All information on this website is accurate and true to the best of the Company’s knowledge, but that there may be omissions, errors or mistakes. The Company is not liable for any damages due to any errors or omissions on the website, delay or denial of any products, failure of performance of any kind, interruption in the operation and your use of the website, website attacks including computer virus, hacking of information, and any other system failures or misuse of information or products.')
    cy.get(':nth-child(4) > .MuiTypography-root')
    .should('have.text','No Professional-Client Relationship. Your use of the content on this site or content from our email list is at your own risk. The Company does not guarantee any results from using this content and is for educational purposes only. It is your responsibility to do your own research, consult, and obtain a professional that you may need for your situation.')
    
  })
})