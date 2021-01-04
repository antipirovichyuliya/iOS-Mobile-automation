import {lu} from "../../utils/locators.util.js";
import {utils} from "../../utils/elements.util";

class AddModal {

    componentName;

    constructor (name) {

        this.componentName = name;

    };
    
    get root () { return $(lu.byType("XCUIElementTypeAlert")); };
    get itemNameInput () { return this.root.$(lu.byType("XCUIElementTypeCollectionView")); };
    get cancelBtn () {

        return this.root.$(lu.byTypeAndName({
            type: "XCUIElementTypeButton",
            name: "Cancel"
        }));

    };
    get addBtn () {

        return this.root.$(lu.byTypeAndName({
            type: "XCUIElementTypeButton",
            name: "Add"
        }));

    };


    isOpened () {

        return this.root.isDisplayed();

    }; 

    fillInName (name) {

        return this.itemNameInput.setValue(name);

    };
    
    cancel () {
        
        return utils.clickOn(this.componentName, this.cancelBtn);

    };

    submit () {

        this.addBtn.waitForDisplayed(5000);
        return utils.clickOn(this.componentName, this.addBtn);

    };

};

export default AddModal;
