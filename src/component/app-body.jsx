import React from 'react';


import Add from './todo/add/add.container';
import Filter from './todo/filter';
import List from './todo/list/list.container';


const AppBody = (
    () => (
        <main>
            <p className="app-intro">
                Howdy People
            </p>
            <Add/>
            <List/>
            <Filter/>
        </main>
    )
);

export default AppBody;
