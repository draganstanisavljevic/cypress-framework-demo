class SignInPage {

    go(){
        cy.visit(Cypress.env("url") + 'actions/Account.action?signonForm=')
    }

    getUserNameField(){
        return cy.get('input[name=username]')
    }

    getPasswordField(){
        return cy.get('input[name=password]')
    }

    getSubmitButton(){
        return cy.get('input[name=signon]')
    }

    getErrorMessage(){
        return cy.get('.messages')
    }

}

export default SignInPage