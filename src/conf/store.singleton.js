/** Created by azder on 2018-10-22. */

import {applyMiddleware, createStore} from 'redux';

import success from '../util/log/dispatch.$';
import fail from '../util/log/no-dispatch.$';

// noinspection ES6UnusedImports
import log from '../util/log/log.$';

import reducer from './reducer';


const store = createStore(
    reducer,
    {},
    applyMiddleware(
        success,
        fail
    )
);


// const log$ = log('store.singleton/subscribe()');
// store.subscribe(() => log$(store.getState()));


export default store;
