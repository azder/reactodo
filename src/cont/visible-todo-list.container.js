import {connect} from 'react-redux';
import {toggle2action} from '../act/toggle.action';
import {TodoList} from '../comp/todo/todo-list';
import {tap} from '../util/functions';
import {log} from '../util/console';
import {VISIBILITY} from '../constants';


const MAP = {
    [VISIBILITY.ALL]:       todos => tap(log('all!'))(todos),
    [VISIBILITY.COMPLETED]: todos => tap(log('comp'))(todos.filter(t => t.completed)),
    [VISIBILITY.ACTIVE]:    todos => tap(log('acti'))(todos.filter(t => !t.completed)),
};

const todosXvisible = (
    (todos = [], filter) => tap(
        log('VisibleTodoContainer.todosXvisible()', todos, filter, MAP)
    )(
        MAP[filter](todos)
    )
);

export const VisibleTodoContainer = connect(
    //
    state => tap(
        log('VisibleTodoContainer.state2props()', state)
    )({
        todos: todosXvisible(state.todos, state.visibilityFilter),
    }),
    //
    dispatch => tap(
        log('VisibleTodoContainer.dispatch2props()', dispatch)
    )({
        onTodoClick: id => dispatch(toggle2action(id)),
    })
    //
)(TodoList);

