import React from 'react';
import {prevented} from '../../util/events';
import Logo from './logo';


const hi$ = (

    // eslint-disable-next-line no-console
    (...args) => console.log('hi', ...args)

);


const AppHeader = (
    () => (
        <header className="app-header">
            <Logo src="logo.svg" onClick={prevented(hi$)}/>
            <h1 className="app-title">Welcome</h1>
        </header>
    )
);


export default AppHeader;
