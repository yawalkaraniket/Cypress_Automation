const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "77rs1y",
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on) 
      require('@cypress/grep/src/plugin')(config)
      require("cypress-localstorage-commands/plugin")(on, config);
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
        queryDb: (query) => {
          return queryTestDb(query, config);
        }
      });    
    },
    retries: {
      "runMode": 1,
      "openMode": 3
    }
  },
  trashAssetsBeforeRuns: true,
  videoUploadOnPasses: false,
  videoCompression: 32,
  pageLoadTimeout:100000,
  // hideXHRInCommandLog: true,
  env: {
    db: {
      host: "arc.csxyl6xdbg1p.us-east-1.rds.amazonaws.com",
      user: "admin",
      password: "0whpkZFH0pqcvVJ",
      database: "etl-system"
    }
  }
});

function queryTestDb(query, config) {

  const connection = mysql.createConnection(config.env.db);
  connection.connect();

  return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
          if (error) reject(error);
          else {
              connection.end();
              return resolve(results)
          }
      })
  });
}
