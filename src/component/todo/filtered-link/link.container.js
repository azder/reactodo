import {connect} from 'react-redux';
import Link from './link';
import filter2action from './filter.action';


export default connect(
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

