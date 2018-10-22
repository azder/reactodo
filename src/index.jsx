/* eslint-env node */

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import store from './conf/store.singleton';

import register from './service-worker';
import els from './util/dom/elements-by-class';


import App from './component/app.jsx';


const render$ = (

    el => void ReactDOM.render(<App store={store}/>, el)

);

els('app').forEach(render$);


register();


if (module.hot) {
    module.hot.accept();
}
