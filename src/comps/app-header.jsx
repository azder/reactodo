import {Logo} from './logo';
import React from 'react';
import {prevented} from '../util/events';


const hi = (

    // eslint-disable-next-line no-console
    (...args) => console.log('hi', ...args)

);


export const AppHeader = (
    () => (
        <header className="app-header">
            <Logo src="logo.svg" onClick={prevented(hi)}/>
            <h1 className="app-title">Welcome to React</h1>
        </header>
    )
);
