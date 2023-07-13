import Login from "../../../../page_objects/page_actions/LoginPageActions"
import Utils from "../../../../utils/Utils"
import Constants from "../../../../utils/Constants"

describe('Verify user login', () => {

    let environmentValues = Utils.getEnvironmentValues(Cypress.env("ENV"))
    let constants = Utils.getConstantValues(Cypress.env("LANG"))

    beforeEach(() => {
        cy.visit(environmentValues.user.url)
    })

    /**
     * Scenario: User should be able to login.
     * Test Group: Sanity, User, Regression
     * Steps: 
     * 1. Verify user is able to input email. 
     * 2. Verify user is able to input password.
     * 3. Verify user is able to tap on confirm button and able to view dashboard.
     * 4. Addition test context to define the steps and purpuse of this test.
     */
    it('Verify user is able to login successfully.', { tags: ['@sanity', '@User', '@Regression'] }, () => {


    })

})
