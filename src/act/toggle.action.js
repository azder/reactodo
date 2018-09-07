import {tap} from '../util/functions';
import {log} from '../util/console';
import {ACTKEY} from '../constants';

export const toggle2action = (

    id => tap(
        log('toggle2action()', id))({
        type: ACTKEY.TOGGLE_TODO,
        id,
    })

);
