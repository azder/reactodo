import {ACTKEY, VISIBILITY} from '../constants';
import {tap} from '../util/functions';
import {log} from '../util/console';

export default (


    (state = VISIBILITY.ALL, action) => (

        tap(
            log('todo-filter.reducer()', {state, action})
        )(
            ACTKEY.SET_VISIBILITY_FILTER === action.type
                ? action.filter
                : state
        )

    )

);
