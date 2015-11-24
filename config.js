// An example configuration file.
exports.config = {
  directConnect: true,
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  baseUrl: 'http://localhost:8080/',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['spec/e2e/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
