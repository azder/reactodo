import {tap} from '../../../util/functions';
import {log} from '../../../util/console';
import {ACTKEY} from '../../../constants';


export default (

    filter => tap(log('todo/filtered-link/filter.action()', filter))({
        type: ACTKEY.SET_VISIBILITY_FILTER,
        filter,
    })

);



