import {combineReducers} from 'redux';
import todosXstate from './todos.reducer';
import filterXvisible from './todo-filter.reducer';

export default combineReducers({
    todos:            todosXstate,
    visibilityFilter: filterXvisible,
});
