import {constant} from '../util/functions';
import {alternator} from '../util/controls';
import {ACTKEY} from '../constants';


const reducers = alternator({

    [ACTKEY.ADD_TODO]: (state, action) => ([
        ...state,
        {
            id:        action.id,
            text:      action.text,
            completed: false,
        },
    ]),

    [ACTKEY.TOGGLE_TODO]: (state, action) => state.map(
        todo => (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
    ),

});


export default (

    (state = [], action) => reducers(constant(state), state, action)


);
