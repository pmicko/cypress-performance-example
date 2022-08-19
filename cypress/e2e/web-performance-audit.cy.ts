describe('Performance Audit', () => {

    it('should run performance audit with custom thresholds', () => {

        const customThresholds = {
            performance: 50,
            accessibility: 50,
            seo: 70,
            'first-contentful-paint': 3000,
        }

        const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: { disabled: true }
        }
        cy.visit('https://google.com/')
        // @ts-ignore
        cy.lighthouse(customThresholds, desktopConfig)
    });
});
