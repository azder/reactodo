import {connect} from 'react-redux';

import SK from '../../../constant/status-key';
import tap from '../../../util/fn/tap';
import log from '../../../util/log.$';

import List from './list';
import todosXvisible from './visible.reducer';
import toggle2action from './toggle.action';


export default connect(
    //
    state => tap(
        log('todo/list/list.container()->state2props()', state)
    )({
        todos: todosXvisible(state[SK.todos], state[SK.visible]),
    }),
    //
    dispatch => tap(
        log('todo/list/list.container()->dispatch2props()', dispatch)
    )(  {
        onTodoClick: id => dispatch(toggle2action(id)),
    })
    //
)(List);

