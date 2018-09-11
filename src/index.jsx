/* eslint-env node,browser */

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';

import register from './service-worker';
import AT from './constant/action-type';
import log from './util/log.$';
import action from './util/action';
import App from './component/app.jsx';
import reducer from './component/reducer';


const store = createStore(reducer);
store.subscribe(() => log('index.store.subscribe()')(store.getState()));
store.dispatch(action(AT.init));

Array.from(
    document.getElementsByClassName('app')
).forEach(element => {
    ReactDOM.render(<App store={store}/>, element);
});


register();


if (module.hot) {
    module.hot.accept();
}
