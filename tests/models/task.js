const faker = require("faker");
import {serviceUtil} from "../utils/service.util";
import {taskStatuses} from "./../enums/taskStatuses";

module.exports = class Task {

    name;
    listName;
    
    constructor ({name, listName}) {

        this.name = name || faker.lorem.word();
        this.listName = listName || serviceUtil.getRandomArrayValue([
            taskStatuses.toDo,
            taskStatuses.inProgress,
            taskStatuses.done
        ]);

    };

    getName () {

        return this.name;

    };

    getListName () {

        return this.listName;

    };
    
}
