import React from 'react';
import {Provider} from 'react-redux';

import './app.css';

import Header from './header/header';
import Body from './app-body';

import PropTypes from 'prop-types';


const App = (

    ({store}) => (
        <div className="app">
            <Provider store={store}>
                <div>
                    <Header/>
                    <Body/>
                </div>
            </Provider>
        </div>

    )

);

App.propTypes = {
    store: PropTypes.any.isRequired,
};

export default App;
