const logger = require("logger");

const log = logger.createLogger();
    log.format = ((level, date, message) => `CUSTOM LOGGER :: ${message}`);
    log.setLevel("debug");

 const udids = {
    "iPhone Plus 7": "46C0EBC2-B4A0-40E9-885D-2D33E0B2E520",
    "iPhone 7": "D5EE24AA-640B-4002-8D0C-EA52EEF29163",
    "iPhone XR": "52351143-481D-4D1D-891A-393B2148D9B2"
 },

 getDeviceName = (name) => {

    if (name) {
        return name.replace("_", " ");
    }

    return "iPhone 7";

 },

 getArgsValues = () => {

    const args = {};

    process.argv.forEach((arg) => {

        if (arg.includes("=")) {

            const [key, value] = arg.split("=");
            args[key] = value;

        }

    });

    return args;

 },

 args = getArgsValues();

exports.configUtils = {

    args,

    logger: log,

    device: getDeviceName(args.device),

    udid: udids[getDeviceName(args.device)]

};