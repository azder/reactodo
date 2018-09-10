import {connect} from 'react-redux';

import {tap} from '../../../util/functions';
import {log} from '../../../util/console';

import List from './list';
import todosXvisible from './visible.reducer';
import toggle2action from './toggle.action';


export default connect(
    //
    state => tap(
        log('todo/list/list.container.state2props()', state)
    )({
        todos: todosXvisible(state.todos, state.visibilityFilter),
    }),
    //
    dispatch => tap(
        log('todo/list/list.container.dispatch2props()', dispatch)
    )({
        onTodoClick: id => dispatch(toggle2action(id)),
    })
    //
)(List);

