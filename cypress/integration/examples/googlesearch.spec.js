
describe('Google Search', function() {
    it('Open Google Search Page', function() {
        cy.visit("https://app.labs.projecttickle.com.au/app/")
        cy.contains('Log in')
        cy.get('#Username').type('AutoTestVendorPublic')
        cy.get('#Password').type('Tickl3m3')
        cy.get('.login__form__btn-primary').click()
        cy.contains('Dashboard').should('be.visible')
        

    })
  })