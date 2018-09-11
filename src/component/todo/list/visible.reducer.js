import VIS from '../../../constant/visibility';
import tap from '../../../util/fn/tap';
import log from '../../../util/log.$';


const MAP = {
    [VIS.all]:       todos => tap(log('MAP.all'))(todos),
    [VIS.completed]: todos => tap(log('MAP.completed'))(todos.filter(t => t.completed)),
    [VIS.active]:    todos => tap(log('MAP.acti'))(todos.filter(t => !t.completed)),
};


export default (
    (todos = [], visibility) => tap(
        log('todo/list/visible.reducer()', todos, visibility, MAP)
    )(
        MAP[visibility](todos)
    )
);
