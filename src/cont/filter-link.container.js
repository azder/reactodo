import {connect} from 'react-redux';
import {Link} from '../comp/todo/todo-link';
import {filter2action} from '../act/filter.action';


export const FilterLinkContainer = connect(
    //
    (state, props) => ({
        active: state.visibilityFilter === props.filter,
    }),
    //
    (dispatch, props) => ({
        onClick: () => dispatch(filter2action(props.filter)),
    })
    //
)(Link);

