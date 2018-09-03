import {Logo} from './logo';
import React from 'react';

export const AppHeader = (
    () => (
        <header className="app-header">
            <Logo src="logo.svg"/>
            <h1 className="app-title">Welcome to React</h1>
        </header>
    )
);
