import {VISIBILITY} from '../../../constants';
import {tap} from '../../../util/functions';
import {log} from '../../../util/console';

const MAP = {
    [VISIBILITY.ALL]:       todos => tap(log('MAP.all'))(todos),
    [VISIBILITY.COMPLETED]: todos => tap(log('MAP.comp'))(todos.filter(t => t.completed)),
    [VISIBILITY.ACTIVE]:    todos => tap(log('MAP.acti'))(todos.filter(t => !t.completed)),
};

export default (
    (todos = [], visibility) => tap(
        log('todo/list/visible.reducer()', todos, visibility, MAP)
    )(
        MAP[visibility](todos)
    )
);
