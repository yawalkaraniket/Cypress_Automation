let FETCH_CLIENT_KEY_API
let FETCH_TOKEN_API
let FETCH_USERS

class ApiUtils {
    constructor(env) {
        this.FETCH_CLIENT_KEY_API = env.base_auth_url + "/oauth/client-keys"
        this.FETCH_TOKEN_API = env.base_auth_url + "/oauth/token"
        this.FETCH_USERS = env.base_url + "/api/users"
    }
}

export default ApiUtils