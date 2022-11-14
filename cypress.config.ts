import { defineConfig } from 'cypress'
const { lighthouse, pa11y, prepareAudit } = require("cypress-audit");

export default defineConfig({
  e2e: {
    projectId: '6bu4w2',
    viewportWidth: 1081,
    viewportHeight: 860,
    video: false,
    baseUrl: 'https://www.salsitasoft.com/',
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {
        name: '',
        family: 'chromium',
        channel: '',
        displayName: '',
        version: '',
        majorVersion: '',
        path: '',
        isHeaded: false,
        isHeadless: false
      }, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(),
      });
    },
  },
});
