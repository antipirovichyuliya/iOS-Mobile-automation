const logger = require("logger");

const log = logger.createLogger();
    log.format = ((level, date, message) => `CUSTOM LOGGER :: ${message}`);
    log.setLevel("debug");

 const udids = {
    "iPhone Plus 7": "46C0EBC2-B4A0-40E9-885D-2D33E0B2E520",
    "iPhone 7": "D5EE24AA-640B-4002-8D0C-EA52EEF29163"
 };   

 const getDeviceName = (name) => {

    if (name) {
        return name.replace("_", " ");
    }

    return "iPhone Plus 7";

 }

exports.configUtils = {

    logger: log,

    deviceName: getDeviceName(process.env.npm_config_deviceName),

    udid: udids[getDeviceName(process.env.npm_config_deviceName)]

};