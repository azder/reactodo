import {tap} from '../util/functions';
import {log} from '../util/console';
import {ACTKEY} from '../constants';


export const filter2action = (

    filter => tap(log('filter2action()', filter))({
        type: ACTKEY.SET_VISIBILITY_FILTER,
        filter,
    })

);
