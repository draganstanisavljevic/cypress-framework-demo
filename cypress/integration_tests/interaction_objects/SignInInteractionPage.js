import SignInPage from "../page_objects/SignInPage"

class SignInInteractionPage{

    logInWithCredentials(username, password){
        const signInPage = new SignInPage()
        signInPage.getPasswordField()
    }

}

export default SignInInteractionPage