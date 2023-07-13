import ApiUtils from "../../../utils/ApiUtils"

let ApiUtil
let environmentValues
const avj = new (require('ajv'))
let clientKeyResSchema = require('../../../fixtures/schemas/clientKeyReqSchema.json')
let tokenResSchema = require('../../../fixtures/schemas/tokenResSchema.json')
let loginHeader = require('../headers/fetchTokenHeader.json')

class LoginApi {

    constructor(environmentValue) {
        environmentValues = environmentValue
        ApiUtil = new ApiUtils(environmentValue)
    }
    
    fetchToken() {
        cy.log("Verify user is able to fetch client key details.")
        cy.request({
            method:'GET',
            url: ApiUtil.FETCH_CLIENT_KEY_API,
            qs: {email: environmentValues.email}
        }).then((response) => {
            expect(response.status).to.eq(200)
            
            const validate = avj.compile(clientKeyResSchema)
            const isValid = validate(response.body)
            expect(isValid).to.be.true;

            return response
        }).then((response) => {
            cy.log("Verify user is able to login and retrieve the token details.")
            cy.request({
                method: 'POST',
                url: ApiUtil.FETCH_TOKEN_API,
                headers: loginHeader,
                auth: {
                    username: response.body.oauthClientId,
                    password: response.body.clientSecret
                },
                body: {
                    grant_type: 'password',
                    username: environmentValues.email,
                    password: environmentValues.password
                }
            }).then((res) => {
                expect(res.status).to.eq(200)

                const validate = avj.compile(tokenResSchema)
                const isValid = validate(res.body)
                expect(isValid).to.be.true;

                cy.log("Token ", res.body.access_token)
                cy.wrap(res.body.access_token).as("token")
            })
        })
        return cy.get("@token")
    }
}


export default LoginApi