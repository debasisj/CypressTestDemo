/// <reference types="Cypress" />
context('Symplitest', () => {
    beforeEach(
        () => {
            cy.visit('https://app.labs.projecttickle.com.au/app/')
        }
    )
})

describe('Valid Login',()=>{
    it('.should() - make an valid login assertion', ()=>{
        
        cy.contains('Log in')
        cy.get('#Username').type('AutoTestVendorPublic')
        cy.get('#Password').type('Tickl3m3')
        cy.get('.login__form__btn-primary').click()
        cy.contains('Dashboard').should('be.visible')
    })
})
