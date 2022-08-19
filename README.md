# cypress-performance-example
Example of frontend performance tests and performance audit using Cypress framework and browser's performance API

## Frontend performance test
Uses browser's performance API exposed on `window` object that can be acccessed by Cypress

- Use Case 1 - measure and assert performace of initial page load

- Use Case 2 - measure and assert perfomace between two perfomance marks (with some user action inbetween)

🧪 [cypress/e2e/web-performance.cy.ts](https://github.com/pmicko/cypress-performance-example/blob/master/cypress/e2e/web-performance.cy.ts)


## Frontend performance audit
Uses `cypress-audit` plugin which integrates the google's `lighthouse` under the hood

- Use Case - run performance audit and assert against custom threshold values for measured metrics

🧪 [cypress/e2e/web-performance-audit.cy.ts](https://github.com/pmicko/cypress-performance-example/blob/master/cypress/e2e/web-performance-audit.cy.ts)
