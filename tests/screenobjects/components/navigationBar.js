import {lu} from '../../elementsUtils/locators.util.js';

class NavigationBar {

    get root () { return $(lu.predicateStrings({type: 'XCUIElementTypeNavigationBar'})); };
    get addBtn () { return $("~Add"); };

    
    getNavigationBarText () {

        return this.root.getAttribute("name");

    };  
    
    clickOnAddButton () {

        return this.addBtn.click();

    }

};

export default NavigationBar;
