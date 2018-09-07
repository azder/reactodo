import {combineReducers} from 'redux';
import {todosXstate} from './todos.reducer';
import {filterXvisible} from './visibility-filter.reducer';

export const rootReducer = combineReducers({
    todos:            todosXstate,
    visibilityFilter: filterXvisible,
});
