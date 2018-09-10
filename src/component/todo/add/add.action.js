import {tap} from '../../../util/functions';
import {log} from '../../../util/console';
import {ACTKEY} from '../../../constants';


const idgen = (

    function* idgen(init = 0) {
        while (true) {
            yield init;
            init += 1;
        }
    }

);


// TODO: @azder: don't keep state in module, even if id
const todoId$ = idgen(0); // eslint-disable-line no-magic-numbers


export default (

    text => tap(log('todo/add/add.action()', {text}))({
        type: ACTKEY.ADD_TODO,
        id:   todoId$.next().value,
        text,
    })
);

