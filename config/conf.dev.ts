import { Config } from 'protractor';
import { generate } from 'cucumber-html-reporter'
import { readdirSync } from 'fs'

export let config: Config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    format: 'json:./reports/cucumber_report.json',
    require: [
      'src/support/hooks.js',
      'test/steps/**/*.steps.js'
    ],
    tags: "@wip"
  },
  multiCapabilities: [
    {
      browserName: 'chrome',
      name: 'Maximized',
      shardTestFiles: true,
      maxInstances: 1,
      'chromeOptions': {
        args: [
          '--start-maximized',
          '--disable-infobars',
          '--disable-web-security'
          // '--headless'
        ]
      },
    }],
  directConnect: true,
  chromeDriver: "C:/chromedriver/chromedriver.exe",
  getPageTimeout: 20000,
  allScriptsTimeout: 600000,
  suites: {
    tests: [
      'test/features/**/*.feature'
    ]
  },
  params: {
    home: 'https://material.angular.io/components/categories'
  },
  ignoreUncaughtExceptions: true,
  afterLaunch: () => {
    readdirSync('reports').forEach(function (file, index) {
      var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/' + file,
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: false,
        name: 'Protractor Automation'
      };
      generate(options);
    });
  },
  noGlobals: true
};