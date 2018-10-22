import log from './log/nlog.$';
import identity from './fn/identity';
import nil from './fn/nil';


// noinspection ES6UnusedImports
import tap from './fn/tap'; // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-unused-vars
const log$ = log('util/action()', 3); // eslint-disable-line no-magic-numbers


export default (

    (type, data) => (
        // tap(log$(type, ':', data))({
        identity({
            type,
            data: nil(data) ? {} : data,
        })

    )

);
