pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute.")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select Browsers")
    }
}