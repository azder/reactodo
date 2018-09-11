import AT from '../../../constant/action-type';
import action from '../../../util/action';


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

    text => (
        action(AT.addTodo, {
            id: todoId$.next().value,
            text,
        })
    )
);

