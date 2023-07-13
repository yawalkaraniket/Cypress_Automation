import DashboardPage from "./DashboardPageActions";

let constants
const loginPageElement = require('../page_elements/LoginPageElements.json')

class Login {
    constructor(constant) {
        constants = constant

        console.log(constant)
        
        if (constants.lang == "es") {
            cy.log("Update the language selection.")
            this.openLanguageSelectionDropdown()
            this.selectSpanishLanguage()
        }

        cy.get(loginPageElement.LoginPageLocators.title_text).contains(constants.login)

    }

    validateLogin(loginData) {

        return this.setEmail(loginData.email)
            .setPassword(loginData.password)
            .confirmLogin()

    }

    setEmail(email) {
        cy.log("Verify user is able to input email.")
        cy.get(loginPageElement.LoginPageLocators.user_email_input)
            .type(email)

        return this
    }

    setPassword(password) {
        cy.log("Verify user is able to input password.")
        cy.get(loginPageElement.LoginPageLocators.user_password_input)
            .type(password)

        return this
    }

    openLanguageSelectionDropdown() {
        cy.get(loginPageElement.LoginPageLocators.language_selection_drop_down)
          .click()
    }

    selectSpanishLanguage() {
        cy.get(loginPageElement.LoginPageLocators.language_selection_list)
            .eq(0)
            .click()
    }

    confirmLogin() {
        cy.log("Verify user is able to tap on confirm button and able to view dashboard.")
        cy.get(loginPageElement.LoginPageLocators.submit_button)
            .click()
        return new DashboardPage(constants)
    }
}

export default Login