/** Created by azder on 2018-10-22. */

import warn from './warn.$';

const warn$ = warn('util/log/no-dispatch$()');


export default (

    store => next => action => {

        try {

            return next(action);

        } catch (err) {

            warn$(action, '--X', store.getState(), '-->', err);

            throw err;

        }

    }

);
