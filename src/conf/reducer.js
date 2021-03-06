import {combineReducers} from 'redux';


import SK from '../constant/status-key';


import todosXstate from '../component/todo/todos.reducer';
import visiblesXstate from '../component/todo/visibles.reducer';
import maxidsXstate from '../component/maxids.reducer';


export default combineReducers({
    [SK.todos]:   todosXstate,
    [SK.visible]: visiblesXstate,
    [SK.maxids]:  maxidsXstate,
});
