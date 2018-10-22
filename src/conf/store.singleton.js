/** Created by azder on 2018-10-22. */

import {applyMiddleware, createStore} from 'redux';
import dispatch from '../util/log/dispatch.$';
import logger from '../util/log/log.$';
import reducer from './reducer';


const log$ = logger('store.singleton/subscribe()');

const store = createStore(
    reducer,
    {},
    applyMiddleware(dispatch)
);

store.subscribe(() => log$(store.getState()));


export default store;
