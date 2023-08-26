class UserRegistrationPage{

    go(){
        cy.visit(Cypress.env("url") + 'actions/Account.action?newAccountForm=')   
    }

    getUserId(){
        return cy.get("[name=username]")
    }

    getPasswordInput(){
        return cy.get("[name=password]")
    }

    getPasswordRepeatInput(){
        return cy.get("[name=repeatedPassword]")
    }

    getFirstNameInput(){
        return cy.get("[name='account.firstName']")
    }

    getLastNameInput(){
        return cy.get("[name='account.lastName']")
    }

    getPhoneInput(){
        return cy.get("[name='account.phone']")
    }

    getAddress1Input(){
        return cy.get("[name='account.address1']")
    }

    getCityInput(){
        return cy.get("[name='account.city']")
    }

    getStateInput(){
        return cy.get("[name='account.state']")
    }

    getZipInput(){
        return cy.get("[name='account.zip']")
    }

    getCountryInput(){
        return cy.get("[name='account.country']")
    }

    getEmailInput(){
        return cy.get("[name='account.email']")
    }

    getLanguageInput(){
        return cy.get("[name='account.languagePreference']")
    }

    getCategoryInput(){
        return cy.get("[name='account.favouriteCategoryId']")
    }

    getEnableMyListInput(){
        return cy.get("[name='account.listOption']")
    }

    getEnableMyBannerInput(){
        return cy.get("[name='account.bannerOption']")
    }

    getSaveButton(){
        return cy.get('[name=newAccount]')
    }

}

export default UserRegistrationPage