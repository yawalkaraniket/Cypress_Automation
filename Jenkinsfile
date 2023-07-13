pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute.")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Select Browsers")
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
               sh "npm run ui-test-en" 
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
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles:'index.html', reportName: 'HTML Report', reportTitles: '']) 
        }
    }
}