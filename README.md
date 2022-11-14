[![cypress-performance-example](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/6bu4w2/master&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/6bu4w2/runs)
# cypress-performance-example

## 👋 Introduction
This repo is an example of frontend performance tests and performance audit using Cypress framework and browser's performance API

## ⚡️ Frontend performance test
Uses browser's performance API exposed on `window` object that can be accessed by Cypress

- Use Case 1 - measure and assert performance of initial page load
- Use Case 2 - measure and assert performance between two performance marks (with some user action between)

🧪 [cypress/e2e/web-performance.cy.ts](https://github.com/pmicko/cypress-performance-example/blob/master/cypress/e2e/web-performance.cy.ts)


## ⚡️ Frontend performance audit
Uses `cypress-audit` plugin which integrates the Google's `lighthouse` under the hood

- Use Case - run performance audit and assert against custom threshold values for measured metrics

🧪 [cypress/e2e/web-performance-audit.cy.ts](https://github.com/pmicko/cypress-performance-example/blob/master/cypress/e2e/web-performance-audit.cy.ts)
