import {connect} from 'react-redux';

import SK from '../../../constant/status-key';

import List from './list';
import visibles from './visible.reducer';
import toggle2act from './toggle.action';

import prop from 'ramda/es/prop';


const visibleOf = prop(SK.visible);
const todosOf = prop(SK.todos);

export default connect(
    state => ({
        todos: visibles(visibleOf(state), todosOf(state)),
    }),
    dispatch => ({
        onTodoClick: id => dispatch(toggle2act(id)),
    })
)(List);

