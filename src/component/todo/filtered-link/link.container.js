import {connect} from 'react-redux';


import SK from '../../../constant/status-key';


import Link from './link';
import filter2act from './filter.action';


export default connect(
    //
    (state, props) => ({
        active: state[SK.visible] === props.filter,
    }),
    //
    (dispatch, props) => ({
        onClick: () => dispatch(filter2act(props.filter)),
    })
    //
)(Link);

