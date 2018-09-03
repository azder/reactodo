import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import {register} from './service-worker';

ReactDOM.render(<App/>, document.getElementById('root'));
register();
