import React from 'react';
import {Provider} from 'react-redux';

import component from '../util/react/component';

import './app.css';

import Header from './header/header';
import Body from './app-body';

import PropTypes from 'prop-types';


export default component(
    'App',
    ({store}) => (
        <div className="app">
            <Provider store={store}>
                <div>
                    <Header/>
                    <Body/>
                </div>
            </Provider>
        </div>
    ),
    {
        store: PropTypes.any.isRequired,
    }
);
