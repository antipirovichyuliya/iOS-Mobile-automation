import {lu} from "../../utils/locators.util.js";
import {utils} from "../../utils/elements.util";

class TaskList {

    componentName;
    root;

    constructor (name, root) {

        this.componentName = `Task list "${name}"`;
        this.root = root;

    };


    get addBtn () { return this.root.$(lu.byType("XCUIElementTypeButton")); };
    get tasks () { return this.root.$$("//XCUIElementTypeCell//XCUIElementTypeStaticText"); };


    waitForLoading () {

        return this.root.waitForExist(5000);

    }; 
    
    isAddBtnDisplayed () {

        return this.addBtn.isDisplayed();

    };  
    
    clickAddBtn () {

        return utils.clickOn(this.componentName, this.addBtn);

    };

    getTasksNames () {

        return utils.getElementsText(this.componentName, this.tasks);

    }; 

};

export default TaskList;
