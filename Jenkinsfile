pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute.")
        choice(name: 'AUTOMATION_TYPE', choices: ['cypress/e2e/api_tests/', 'cypress/e2e/ui_tests/'], description: "Select a autoamtion type to run.")
        choice(name: 'LANGUAGE', choices: ['en', 'es'], description: "Select a language.")
        choice(name: 'TESTINIG_TYPE', choices: ['@Regression', '@smoke', '@sanity'], description: "Select a group of testing.")
        choice(name: 'ENVIRONMENT', choices: ['dev', 'test', 'stage'], description: "Select a environment.")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox', 'electron', 'chromium', 'chrome:canary'], description: "Select a browser.")
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Building') {
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
               sh "npm i"
               sh "npx cypress run --spec ${AUTOMATION_TYPE} --env ENV=${ENVIRONMENT},LANG=${LANGUAGE},grepTags=${TESTINIG_TYPE} --headed --browser ${BROWSER}" 
            }
        }
        stage('Deploying') {
            steps {
                sh "tree"

            }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}