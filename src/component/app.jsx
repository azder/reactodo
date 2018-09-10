import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './app.css';

import AppHeader from './header/header';
import AppBody from './app-body';

import TodoFooter from './todo/filter';
import AddTodo from './todo/add/add.container';
import TodoList from './todo/list/list.container';

import reducer from './app.reducer';


const store = createStore(reducer);


export const App = (

    () => (
        <Provider store={store}>
            <div className="app">

                <AppHeader/>
                <AppBody/>

                <AddTodo/>
                <TodoList/>
                <TodoFooter/>

            </div>
        </Provider>

    )

);

