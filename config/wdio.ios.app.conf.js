const { join } = require("path");
const { config } = require("./wdio.shared.conf");
const { configUtils } = require("./../tests/elementsUtils/config.util");

config.specs = [
    "./tests/specs/**/app*.spec.js",
];


// Capabilities - http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
    appiumVersion: "1.18.3",
    platformName: "iOS",
    "appium:deviceName": configUtils.deviceName,
    "appium:platformVersion": "12.1",
    "appium:automationName": "XCUITest",
    "appium:udid": configUtils.udid,
    "appium:app": join(process.cwd(), "./apps/DragAndDrop.app"),
    "appium:noReset": true,
    "appium:newCommandTimeout": 240,
    "appium:wdaConnectionTimeout": 480000,
    "appium:startIWDP": true
 }];

exports.config = config;
