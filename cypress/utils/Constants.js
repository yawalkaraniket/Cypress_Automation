export default class Constants {

    // File Paths
    static ENV_FILE = "/cypress/environmentData/data.json"

    // Test Context
    static TEST_LOGIN_SUCCESS_CONTEXT_VALUE = "Steps: \n 1. Verify user is able to input email.\n 2. Verify user is able to input password.\n 3. Verify user is able to tap on confirm button and able to view dashboard."
    static API_TEST_LOGIN_SUCCESS_CONTEXT_VALUE = "Steps: \n Verify user is able retrieve the client keys. \n Verify user is able to retrieve the token.\n Verify user is able retrieve the user details with the given token."

}