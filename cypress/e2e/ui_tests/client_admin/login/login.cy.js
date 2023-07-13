import Login from "../../../../page_objects/page_actions/LoginPageActions"
import Constants from "../../../../utils/Constants"
import Utils from "../../../../utils/Utils"

describe('Verify user login', () => {

    let environmentValues = Utils.getEnvironmentValues(Cypress.env("ENV"))
    let constants = Utils.getConstantValues(Cypress.env("LANG"))

    beforeEach(() => {
        cy.visit(environmentValues.clientAdmin.url)
    })

    /**
     * Scenario: User should be able to login.
     * Test Group: Sanity, ClientAdmin, Regression
     * Steps: 
     * 1. Verify user is able to input email. 
     * 2. Verify user is able to input password.
     * 3. Verify user is able to tap on confirm button and able to view dashboard.
     * 4. Addition test context to define the steps and purpuse of this test.
     */
    it('Verify user is able to login successfully.', { tags: ['@sanity', '@ClientAdmin', '@Regression'] }, () => {


        cy.fixture('login').then((data) => {

            new Login(constants).validateLogin(environmentValues.clientAdmin)

            // Addition test context to define the steps and purpuse of this test.
            cy.addTestContext(Constants.TEST_LOGIN_SUCCESS_CONTEXT_VALUE)

        })
    })

})
