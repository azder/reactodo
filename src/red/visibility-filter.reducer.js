import {ACTKEY, VISIBILITY} from '../constants';
import {tap} from '../util/functions';
import {log} from '../util/console';

export const filterXvisible = (


    (state = VISIBILITY.ALL, action) => (

        tap(
            log('filterXvisible', {state, action})
        )(
            ACTKEY.SET_VISIBILITY_FILTER === action.type
                ? action.filter
                : state
        )

    )

);
