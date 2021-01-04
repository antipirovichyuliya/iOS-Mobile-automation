import {listsTasks} from "../appData/listsTasks";

module.exports = class TaskList {

    name;
    tasks;

    constructor ({name}) {

        this.name = name || faker.lorem.word();
        this.tasks = listsTasks[name];

    };

    getName () {

        return this.name;

    };

    getTasks () {

        return this.tasks;

    };

    addTasks (tasksToAdd) {

        this.tasks = this.tasks.concat(tasksToAdd);

    };
    
}
