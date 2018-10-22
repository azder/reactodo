import {combineReducers} from 'redux';


import SK from '../constant/status-key';


import todosXstate from '../component/todos.reducer';
import visiblesXstate from '../component/todo-filter.reducer';


export default combineReducers({
    [SK.todos]:   todosXstate,
    [SK.visible]: visiblesXstate,
});
