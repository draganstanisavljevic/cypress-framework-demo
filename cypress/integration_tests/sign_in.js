/// <reference types="Cypress" />
import SignInPage from "./page_objects/SignInPage"
import CatalogPage from "./page_objects/CatalogPage"

describe('Log in feature', function() {

    let INVALID_CREDENTIALS_ERROR_MSG = 'Invalid username or password.  Signon failed.'
    const signInPage = new SignInPage()

    beforeEach(() => {
        cy.fixture("users").then(function(data){
            this.data = data
        })
        signInPage.go()
      })

    it('Log in with invalid credentials', () => {
        cy.submitLoginForm('invalidUsername', 'invalidPassord')
        cy.validateMessage(INVALID_CREDENTIALS_ERROR_MSG, signInPage.getErrorMessage())                    
    })

    it('Log in with valid credentials', function() {
        cy.submitLoginForm(this.data.username, this.data.password)
        const catalogPage = new CatalogPage()
        const expectedMessage = 'Welcome '.concat(this.data.name, '!')
        cy.validateMessage(expectedMessage, catalogPage.getWelcomeMessage())
    })

  })

  


