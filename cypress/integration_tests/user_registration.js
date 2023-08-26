/// <reference types="Cypress" />
import UserRegistrationPage from "./page_objects/UserRegistrationPage"
import UserRegistrationInteraction from "./interaction_objects/UserRegistrationInteraction"

describe('Log in feature', function() {

    const userRegistrationPage = new UserRegistrationPage()
    const userRegistrationInteraction = new UserRegistrationInteraction()

    beforeEach(() => {
        cy.fixture("user-registration").as("valid_user")
        userRegistrationPage.go()
      })

    it('User registration - happy flow', { browser: '!chrome' }, function() { 
        userRegistrationInteraction.fillAndSubmitRegistrationForm(this.valid_user)
        cy.url().should('include', 'actions/Catalog.action')   
                               
    })

  })

  


