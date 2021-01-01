
/**
 * more information: https://webdriver.io/docs/configurationfile.html
 *                   https://webdriver.io/docs/options.html
 */

exports.config = {

    runner: 'local',

    // Patterns to exclude.    
    exclude: [
        // 'path/to/excluded/files'
    ], 

    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        helpers: [require.resolve('@babel/register')],
    },

    sync: true,
    logLevel: 'silent',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 2,

    // more info: https://webdriver.io/docs/allure-reporter.html#configuration
    reporters: [ 
        [
            'allure',
            {
                outputDir: './temp/allure-results',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    services: ['appium'],
    path: '/wd/hub',
    port: 4723,

    afterStep: function (test, context, { error, result, duration, passed, retries }) {
        
        browser.takeScreenshot();

      }

};
