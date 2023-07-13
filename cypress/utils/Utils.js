
export default class Utils {

    /**
     * Reads the data from environment file according to the environment variable.
     * @param environent environment variable to check. 
     * @returns 
     */
    static getEnvironmentValues(environent) {
        const environmentData = require("/cypress/fixtures/envData.json")
        switch (environent) {
            case "dev":
                return environmentData.dev
            case "test":
                return environmentValues = environmentData.test
            case "stage":
                return environmentValues = environmentData.stage
            default: return environmentData.dev
        }
    }

    /**
     * Reads the data from constat file according to the language variable
     * @param language language variable to check. 
     * @returns 
     */
    static getConstantValues(language) {
        const langData = require("/cypress/fixtures/langConstants.json")
        switch (language) {
            case "en":
                return langData.en
            case "es":
                return langData.es
            default: return langData.en
        }
    }
}