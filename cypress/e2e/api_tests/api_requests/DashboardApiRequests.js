import ApiUtils from "../../../utils/ApiUtils"

let ApiUtil
let environmentValues
const avj = new (require('ajv'))
let usersResSchema = require('../../../fixtures/schemas/usersResSchema.json')

class DashboardApis {

    constructor(environmentValue) {
        environmentValues = environmentValue
        ApiUtil = new ApiUtils(environmentValue)
    }
    
    fetchUsers(token) {
        cy.log("Verify user is able retrieve the user details with the given token.")
        cy.request({
            method: 'GET',
            url: ApiUtil.FETCH_USERS,
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)

            const validate = avj.compile(usersResSchema)
            const isValid = validate(response.body)
            expect(isValid).to.be.true;

            return response
        })
    }
}


export default DashboardApis