/// <reference types="Cypress" />
import UserRegistrationPage from "../page_objects/UserRegistrationPage"

class UserRegistrationInteraction{
    

    fillAndSubmitRegistrationForm(data){
        const userRegistrationPage = new UserRegistrationPage()
        userRegistrationPage.getUserId().clear().type(Math.floor(Math.random() * Date.now()).toString(8))   
        userRegistrationPage.getPasswordInput().clear().type(data.password)
        userRegistrationPage.getPasswordRepeatInput().clear().type(data.password) 
        userRegistrationPage.getFirstNameInput().clear().type(data.first_name)
        userRegistrationPage.getLastNameInput().clear().type(data.last_name)
        userRegistrationPage.getPhoneInput().clear().type(data.phone)
        userRegistrationPage.getAddress1Input().clear().type(data.address1)
        userRegistrationPage.getCityInput().clear().type(data.city)
        userRegistrationPage.getStateInput().clear().type(data.state)
        userRegistrationPage.getZipInput().clear().type(data.zip)
        userRegistrationPage.getCountryInput().clear().type(data.country)
        userRegistrationPage.getEmailInput().clear().type(data.email)
        userRegistrationPage.getEnableMyBannerInput().check()
        userRegistrationPage.getEnableMyListInput().check()
        userRegistrationPage.getLanguageInput().select(data.prefered_language)  
        userRegistrationPage.getCategoryInput().select(data.favourite_category)
        userRegistrationPage.getSaveButton().click()          
    }

}

export default UserRegistrationInteraction