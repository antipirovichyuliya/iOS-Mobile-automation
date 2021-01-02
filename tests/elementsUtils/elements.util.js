// WebdriverIO mobile actions: http://v4.webdriver.io/api/mobile/background.html 

import { isArray } from "util";
const { configUtils } = require("./config.util");
import Gestures from "./gestures.js";

class ElementsUtils {

    getElementsText (componentName, elements) {

        try {

            const text = isArray(elements) 
            ? elements.map((element) => element.getText()) 
            : elements.getText();

            configUtils.logger.info(`Get text from ${componentName}: result ${text}`);

            return text;

        } catch (error) {            

            configUtils.logger.error(`Error during getting text from ${componentName}: ${error.message}`);

        }         

    };

    swipeLeft () {

        configUtils.logger.info("Swipe left");

        return Gestures.swipeLeft();

    }
     

};

export const utils = new ElementsUtils();