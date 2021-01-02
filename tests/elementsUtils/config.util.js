const logger = require("logger");

const log = logger.createLogger();
    log.format = ((level, date, message) => `CUSTOM LOGGER :: ${message}`);
    log.setLevel("debug");

class ConfigUtils {

    logger = log; 
         
};

export const configUtils = new ConfigUtils();