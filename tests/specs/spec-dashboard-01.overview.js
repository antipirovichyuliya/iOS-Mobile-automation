import dashboard from "../screenobjects/dashboard.screen.js";
import {listsTasks} from "../appData/listsTasks";
import {taskStatuses} from "../enums/taskStatuses";

describe("Application is opened, dashboard screen overview", () => {
  
    beforeEach(() => {});

    it("Navigation bar text is Kanban Drag & Drop", () => {

        expect(dashboard.navigationBar.getNavigationBarText()).toEqual("Kanban Drag & Drop");
       
    });

    it("Collection: 2 tasks lists are visible", () => {

        expect(dashboard.collection.getTasksListsNames()).toEqual([
            taskStatuses.toDo, 
            taskStatuses.inProgress 
        ]);
       
    });

    it("Collection: Tasks List Todo - tasks names", () => {

        const toDoList = dashboard.collection.findTaskList(taskStatuses.toDo);

        expect(toDoList.getTasksNames()).toEqual(listsTasks[taskStatuses.toDo]);
       
    });

    it("Collection: Tasks List In progress - tasks names", () => {

        const inProgressList = dashboard.collection.findTaskList(taskStatuses.inProgress);

        expect(inProgressList.getTasksNames()).toEqual(listsTasks[taskStatuses.inProgress]);
       
    });

    it("Collection: Swipe to Done list, check its tasks names", () => {

        dashboard.collection.swipeLeft();

        const doneList = dashboard.collection.findTaskList(taskStatuses.done);

        expect(doneList.getTasksNames()).toEqual(listsTasks[taskStatuses.done]);
       
    });

    it("Collection: Done tasks list is visible", () => {

        expect(dashboard.collection.getTasksListsNames()).toEqual([
            taskStatuses.toDo, 
            taskStatuses.inProgress,
            taskStatuses.done
        ]);
       
    });

});
