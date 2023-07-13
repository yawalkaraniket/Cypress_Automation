import Login from "../../../../page_objects/page_actions/LoginPageActions"
import Utils from "../../../../utils/Utils"
import Constants from "../../../../utils/Constants"

describe('Verify user login', () => {

    let environmentValues = Utils.getEnvironmentValues(Cypress.env("ENV")).user
    let constants = Utils.getConstantValues(Cypress.env("LANG"))

    /**
     * Scenario: User should be able to login.
     * Test Group: Sanity, ClientAdmin, Regression
     * Steps: 
     * 1. Verify user is able retrieve the client keys. 
     * 2. Verify user is able to retrieve the token.
     * 3. Verify user is able retrieve the user details with the given token.
     * 4. Addition test context to define the steps and purpuse of this test.
     */
    it('Verify user is able to login successfully.', { tags: ['@sanity', '@User', '@Regression'] }, () => {

    })

})
