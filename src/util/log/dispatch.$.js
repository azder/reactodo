/** Created by azder on 2018-10-22. */

import log from './nlog.$';

const log$ = log('util/log/dispatch$()', 3); // eslint-disable-line no-magic-numbers


export default (

    store => next => action => {

        const result = next(action);

        log$(action, '-->', store.getState());

        return result;

    }

);

