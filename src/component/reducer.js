import {combineReducers} from 'redux';


import SK from '../constant/status-key';


import todosXstate from './todos.reducer';
import visiblesXstate from './todo-filter.reducer';


export default combineReducers({
    [SK.todos]:   todosXstate,
    [SK.visible]: visiblesXstate,
});
