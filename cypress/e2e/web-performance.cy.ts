describe('Performance', () => {

  it('should check initial page load time', () => {
    cy.visit('/', {
      onBeforeLoad: window => window.performance.mark('loadingStart'),
      onLoad: window => window.performance.mark('loadingFinished'),
    }).its('performance')
      .then(performance => {
        performance.measure('pageLoad', 'loadingStart', 'loadingFinished')
        const duration = performance.getEntriesByName('pageLoad')[0].duration
        expect(duration).to.be.at.most(2000)
    })
  });

  it('should check contact form load time', () => {
    cy.visit('/')

    // mark the start and label it
    cy.window()
      .its('performance')
      .invoke('mark', 'bookConsultation')
    cy.contains('Book a free consultation')
      .click()

    // wait til contact form is there
    cy.url()
      .should('contain', '/contact');
    cy.contains('button', 'Send message')
      .should('be.visible')

    // make a measurement
    cy.window()
      .its('performance')
      .invoke('measure', 'bookConsultation')
      .its('duration', { timeout: 0 })
      .should('be.at.most', 2000)
  })

  it('should check contact form load time - w/ custom commands', () => {
    cy.visit('/')

    cy.performanceMark('bookConsultation')
    cy.contains('Book a free consultation')
      .click()

    cy.url()
      .should('contain', '/contact');
    cy.contains('button', 'Send message')
      .should('be.visible')

    cy.performanceMeasure('bookConsultation')
      .should('be.at.most', 2000)
  })
})
