pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute.")
        // choice(name: 'AUTOMATION TYpe', choices: ['en', 'es'], description: "Select a language.")
        choice(name: 'LANGUAGE', choices: ['en', 'es'], description: "Select a language.")
        choice(name: 'TESTINIG_TYPE', choices: ['@Regression', '@smoke', '@sanity'], description: "Select a group of testing.")
        choice(name: 'ENVIRONMENT', choices: ['chrome', 'edge', 'firefox'], description: "Select a environment.")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select a browser.")
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
               sh "npx cypress run --spec 'cypress/e2e/ui_tests/' --env ENV=${ENVIRONMENT},LANG=${LANGUAGE},grepTags=${TESTINIG_TYPE} --headed --browser ${BROWSER}" 
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploy the application"
            }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}