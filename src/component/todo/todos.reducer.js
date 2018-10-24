import AT from '../../constant/action-type';
import constant from '../../util/fn/constant';
import alternator from '../../util/alternator';

import data from '../../util/data';


const reducers = alternator({

    [AT.addTodo]: (state, action) => ([
        ...state,
        {
            id:        data(action).id,
            text:      data(action).text,
            completed: false,
        },
    ]),

    [AT.toggleTodo]: (state, action) => (
        state.map(
            todo => (
                todo.id === data(action).id
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        )
    ),

});


export default (

    (state = [], action) => reducers(constant(state), state, action)

);
