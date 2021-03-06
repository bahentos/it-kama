import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';





let redusers = combineReducers({
    mypostPage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(redusers);
window.state = store;
export default store;