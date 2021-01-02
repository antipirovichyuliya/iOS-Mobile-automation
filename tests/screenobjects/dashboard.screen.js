import NavigationBar from "./components/navigationBar.js";
import Collection from "./components/collection.js";

class DashboardScreen {

    navigationBar = new NavigationBar();
    collection = new Collection();
    
    constructor (selector) {
        this.selector = selector;
    };
    
}

export default new DashboardScreen();
