
let constants
const dashboardPageElement = require('../page_elements/DashboardPageElements.json')

class DashboardPage {

    constructor(constant) {

        constants = constant

        cy.get(dashboardPageElement.DashboardPageLocators.login_success, {timeout: 10000}).then((data) => {
            let actualTitle = data.text()
            
            cy.log("Verify user is able to login successfully and able to view dashboard screen.")
            expect(actualTitle).to.equal(constants.login_success)
        })
    }
}

export default DashboardPage