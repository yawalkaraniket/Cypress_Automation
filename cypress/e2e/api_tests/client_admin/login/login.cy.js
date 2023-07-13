import ApiUtils from "../../../../utils/ApiUtils"
import Constants from "../../../../utils/Constants"
import Utils from "../../../../utils/Utils"
import LoginApi from "../../api_requests/LoginApiRequests"
import DashboardApi from "../../api_requests/DashboardApiRequests"

describe('Verify user login', () => {

    let environmentValues = Utils.getEnvironmentValues(Cypress.env("ENV")).clientAdmin
    let loginApis = new LoginApi(environmentValues)
    let dashboardApis = new DashboardApi(environmentValues)
    let token

    before(() => {
        loginApis.fetchToken().then((res) => { token = res })
    })

    /**
     * Scenario: User should be able to login.
     * Test Group: Sanity, ClientAdmin, Regression
     * Steps: 
     * 1. Verify user is able retrieve the client keys. 
     * 2. Verify user is able to retrieve the token.
     * 3. Verify user is able retrieve the user details with the given token.
     * 4. Addition test context to define the steps and purpuse of this test.
     */
    it('Verify user is able to login successfully.', { tags: ['@sanity', '@ClientAdmin', '@Regression'] }, () => {

        dashboardApis.fetchUsers(token)

        // Addition test context to define the steps and purpuse of this test.
        cy.addTestContext(Constants.API_TEST_LOGIN_SUCCESS_CONTEXT_VALUE)
    })

})
