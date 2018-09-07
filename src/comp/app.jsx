import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './app.css';

import {AppHeader} from './app-header';
import {AppBody} from './app-body';

import {rootReducer} from '../red/index.reducer';
import {AddTodoContainer} from '../cont/add-todo.container';
import {VisibleTodoContainer} from '../cont/visible-todo-list.container';
import {TodoFooter} from './todo/todo-footer';


const store = createStore(rootReducer);

// noinspection JSUnusedGlobalSymbols
export const App = (

    () => (
        <Provider store={store}>
            <div className="app">
                <AppHeader/>
                <AppBody/>

                <AddTodoContainer/>
                <VisibleTodoContainer/>
                <TodoFooter/>

            </div>
        </Provider>

    )

);

