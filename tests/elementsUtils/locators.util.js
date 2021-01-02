/**
 * WebriverIO iOS locator info: https://webdriver.io/docs/selectors.html#ios-uiautomation 
 * 
 * XCUITest - predicate strings: https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
 * XCUITest - class chains: https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
 */

class LocatorsUtils {

    byType (type) {

        return `-ios predicate string: type == "${type}"`;

    };

    byTypeAndName ({type, name}) {

        let selector = `type == "${type}"`;

        if (name) {

            selector = `${selector} && name CONTAINS "${name}"`;

        }

        return `-ios predicate string:${selector}`;

    }

}

export const lu = new LocatorsUtils();