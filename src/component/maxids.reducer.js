import on from '../util/on-action';
import AT from '../constant/action-type';
import df from '../util/fn/df';


const MIN = 0;
const z = df(MIN);


export default on(
    //
    AT.addTodo,

    {todo: MIN},

    (state, data) => ({
        todo: Math.max(z(state.todo), z(data.id)),
    })
    //
);
