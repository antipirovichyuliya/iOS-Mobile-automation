import {lu} from "../../elementsUtils/locators.util.js";

class NavigationBar {

    get root () { return $(lu.byTypeAndName({type: "XCUIElementTypeNavigationBar"})); };
    get addBtn () { return $("~Add"); };

    
    getNavigationBarText () {

        return this.root.getAttribute("name");

    };  
    
    clickOnAddButton () {

        return this.addBtn.click();

    }

};

export default NavigationBar;
