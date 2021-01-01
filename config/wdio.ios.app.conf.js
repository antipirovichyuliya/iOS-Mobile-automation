const { join } = require('path');
const { config } = require('./wdio.shared.conf');


config.specs = [
    './tests/specs/**/app*.spec.js',
];


// Capabilities - http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
    appiumVersion: '1.18.3',
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 7',
    'appium:platformVersion': '12.1',
    'appium:automationName': 'XCUITest',
    'appium:udid': 'D5EE24AA-640B-4002-8D0C-EA52EEF29163',
    'appium:app': join(process.cwd(), './apps/DragAndDrop.app'),
    'appium:noReset': true,
    'appium:newCommandTimeout': 240,
    'appium:wdaConnectionTimeout': 360000,
    'appium:startIWDP': true
 }];

exports.config = config;
