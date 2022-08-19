declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Add a measurement marker. Used with cy.performanceMeasure() command
         * @example cy.performanceMark('modalWindow')
         */
        performanceMark(markName: string)
    }

}declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Add a measurement marker. Used with cy.performanceMeasure() command
         * @example cy.performanceMeasure('modalWindow')
         */
        performanceMeasure(markName: string)
    }
}

Cypress.Commands.add('performanceMark', (markName: string): Cypress.Chainable<any> => {
    const logFalse = { log: false }

    Cypress.log({
        name: 'performance mark',
        message: markName,
        consoleProps() {
            return {
                command: 'performanceMark',
                'mark name': markName
            }
        }
    })

    return cy.window(logFalse)
        .its('performance', logFalse)
        .invoke(logFalse, 'mark', markName)
})

Cypress.Commands.add('performanceMeasure', (markName: string): Cypress.Chainable<number> => {
    const logFalse = { log: false }

    let measuredDuration: number
    let log = Cypress.log({
        name: 'performance measure',
        message: markName,
        autoEnd: false,
        consoleProps() {
            return {
                command: 'performanceMeasure',
                'mark name': markName,
                yielded: measuredDuration
            }
        }
    })

    return cy.window(logFalse)
        .its('performance', logFalse)
        .invoke(logFalse, 'measure', markName)
        .then( ({ duration }) => {
            measuredDuration = duration
            log.end()
            return duration
        })
})
