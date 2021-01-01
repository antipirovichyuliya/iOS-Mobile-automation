import {lu} from '../../elementsUtils/locators.util.js';
import {utils} from '../../elementsUtils/elements.util';

class TaskList {

    componentName;
    root;

    constructor (name, root) {

        this.componentName = `Task list '${name}'`;
        this.root = root;

    };


    get addBtn () { return this.root.$(lu.byType('XCUIElementTypeButton')); };
    get tasks () { return this.root.$$('//XCUIElementTypeCell//XCUIElementTypeStaticText'); };

    
    isAddBtnDisplayed () {

        return this.addBtn.isDisplayed();

    };   

    getTasksNames () {

        return utils.getElementsText(this.componentName, this.tasks);

    }; 

};

export default TaskList;
