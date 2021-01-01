import {lu} from '../../elementsUtils/locators.util.js';
import {utils} from '../../elementsUtils/elements.util';
import TaskList from './taskList.js';

class Collection {

    componentName = 'Tasks lists collection';
    tasksTitle = '//XCUIElementTypeOther//XCUIElementTypeStaticText';

    get root () { return $(lu.predicateStrings({type: 'XCUIElementTypeCollectionView'})); };
    get tasksList () { return this.root.$$(`//XCUIElementTypeTable${this.tasksTitle}`); };


    getTasksListsNames () {

        return utils.getElementsText(this.componentName, this.tasksList);

    };

    findTaskList (listName) {

        const [foundList] = this.root.$$('//XCUIElementTypeTable')
            .filter((taskElement) => utils.getElementsText(this.componentName, taskElement.$$(this.tasksTitle))[0] === listName);

        return new TaskList(listName, foundList);

    }; 
    
    swipeLeft () {

        return utils.swipeLeft();

    }

};

export default Collection;
