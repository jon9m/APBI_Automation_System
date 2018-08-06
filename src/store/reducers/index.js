import { combineReducers } from 'redux';
import contactReducer from './contacts';
import taskReducer from './tasks';
import memberReducer from './members';
import projectReducer from './projects';
import navigationsReducer from './navigations';

export default combineReducers({
    contactState: contactReducer,
    taskState: taskReducer,
    memberState: memberReducer,
    projectState: projectReducer,
    navigationState: navigationsReducer
});
