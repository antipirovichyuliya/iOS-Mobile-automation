import dashboard from "../screenobjects/dashboard.screen.js";
import Task from "../models/task.js";
import {listsTasks} from "../appData/listsTasks";
import {taskStatuses} from "../enums/taskStatuses";
import AddModal from "../screenobjects/components/addModal";

describe("Adding new task", () => {
  
    const task = new Task({
        name: "Check Todo list",
        listName: taskStatuses.toDo
     });
    const addModal = new AddModal("Add task modal");
    let taskList;

    beforeEach(() => {

        taskList = dashboard.collection.findTaskList(task.getListName());

    });

    it("Click on Add link within random task list, check modal appeared", () => {
        
        taskList.waitForLoading();
        taskList.clickAddBtn();

        expect(addModal.isOpened()).toEqual(true);
       
    });

    it("Fill new task details, submit creation, check modal disappeared after submit", () => {

        addModal.fillInName(task.getName());
        addModal.submit();

        expect(addModal.isOpened()).toEqual(false);
       
    });

    it("Corresponding tasks' list contains newly created task", () => {

        expect(taskList.getTasksNames()).toEqual([
            ...listsTasks[task.getListName()],
            task.getName()
        ]);
       
    });

});
