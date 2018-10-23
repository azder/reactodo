import {connect} from 'react-redux';
import compose from 'ramda/es/compose';

import SK from '../../../constant/status-key';

import AddTodo from './add-todo';
import add2act from './add.action';


export default connect(
    state => ({
        maxid: state[SK.maxids].todo,
    }),
    dispatch$ => ({
        add$: compose(dispatch$, add2act),
    })
)(AddTodo);

