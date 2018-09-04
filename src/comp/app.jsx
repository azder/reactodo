import React from 'react';
import './app.css';

import {AppHeader} from './app-header';
import {AppBody} from './app-body';

// noinspection JSUnusedGlobalSymbols
export const App = (

    () => (
        <div className="app">
            <AppHeader/>
            <AppBody/>
        </div>
    )

);

