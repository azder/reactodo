/* eslint-env node,browser */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './component/app.jsx';
import {register} from './service-worker';

ReactDOM.render(<App/>, document.getElementById('root'));
register();

if (module.hot) {
    module.hot.accept();
}
