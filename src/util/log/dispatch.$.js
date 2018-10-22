/** Created by azder on 2018-10-22. */

import logger from './nlog.$';

const log$ = logger('util/log/dispatch$()', 3); // eslint-disable-line no-magic-numbers


export default (

    store => next => action => {

        const result = next(action);

        // eslint-disable-next-line no-console
        log$(action, '->', store.getState());

        return result;

    }

);

