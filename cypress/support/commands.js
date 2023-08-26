// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import SignInPage from "../integration_tests/page_objects/SignInPage"

Cypress.Commands.add('submitLoginForm', (username, password) => { 
    const signInPage = new SignInPage()
    signInPage.getUserNameField().clear().type(username)
    signInPage.getPasswordField().clear().type(password)
    signInPage.getSubmitButton().click()
})

Cypress.Commands.add('validateMessage', (expectedMessage, obj) => { 
    obj.then(function(data){
        expect(data.text().trim()).to.equal(expectedMessage)
      }) 
})

Cypress.Commands.add('login', (username, password) => {
    const signInPage = new SignInPage()
    signInPage.go()
    cy.submitLoginForm(username, password)
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })