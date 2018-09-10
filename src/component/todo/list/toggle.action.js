import {tap} from '../../../util/functions';
import {log} from '../../../util/console';
import {ACTKEY} from '../../../constants';

export default (

    id => tap(
        log('todo/list/toggle.action()', id)
    )({
        type: ACTKEY.TOGGLE_TODO,
        id,
    })

);
