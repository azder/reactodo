import tap from './fn/tap';
import log$ from './log.$';
import compose from './fn/compose';
import identity from './fn/identity';
import nil from './fn/nil';


export default (

    (type, data) => compose(
        tap(log$('util/action(', type, data, ')')),
        identity
    )({
        type,
        data: nil(data) ? {} : data,
    })

);
