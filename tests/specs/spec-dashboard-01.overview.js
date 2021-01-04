import dashboard from "../screenobjects/dashboard.screen.js";

describe("Application is opened, dashboard screen overview", () => {
  
    beforeEach(() => {});

    it("Navigation bar text is Kanban Drag & Drop", () => {

        expect(dashboard.navigationBar.getNavigationBarText()).toEqual("Kanban Drag & Drop");
       
    });

    it("Collection: 2 tasks lists are visible", () => {

        expect(dashboard.collection.getTasksListsNames()).toEqual(["Todo", "In Progress"]);
       
    });

    it("Collection: Tasks List Todo - tasks names", () => {

        const toDoList = dashboard.collection.findTaskList("Todo");

        expect(toDoList.getTasksNames()).toEqual([
              "Database Migration",
              "Schema Design", 
              "Storage Management", 
              "Model Abstraction"
            ]);
       
    });

    it("Collection: Tasks List In progress - tasks names", () => {

        const inProgressList = dashboard.collection.findTaskList("In Progress");

        expect(inProgressList.getTasksNames()).toEqual([
            "Push Notification",
            "Analytics",
            "Machine Learning"
            ]);
       
    });

    it("Collection: Swipe to Done list, check its tasks names", () => {

        dashboard.collection.swipeLeft();

        const doneList = dashboard.collection.findTaskList("Done");

        expect(doneList.getTasksNames()).toEqual([
            "System Architecture", 
            "Alert & Debugging"
        ]);
       
    });

    it("Collection: Done tasks list is visible", () => {

        expect(dashboard.collection.getTasksListsNames()).toEqual([
            "Todo",
             "In Progress", 
             "Done"
            ]);
       
    });

});
