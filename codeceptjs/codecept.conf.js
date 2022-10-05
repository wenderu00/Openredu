const dotenv = require('dotenv');

let env = dotenv.config();

exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: process.env.BASE_URL,
      show: process.env.SHOW_BROWSER,
      windowSize: process.env.WINDOW_SIZE
    }
  },
  include: {
    I: './steps_file.js',
    LoginPage: './pages/login_page.js',
    HomePage: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*/*.feature',
    steps: ['./step_definitions/login_steps.js','./step_definitions/create_account_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'codeceptjs'
}