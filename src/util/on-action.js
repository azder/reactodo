import nil from './fn/nil';
import data from './data';

export default (

    (type, dfault, handler) => (

        (state, action) => {

            const s = nil(state) ? dfault : state;
            const a = nil(action) ? {} : action;

            if (type === action.type) {
                return handler(s, data(a));
            }

            return s;

        }

    )

);
