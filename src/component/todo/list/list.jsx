import React from 'react';
import P from 'prop-types';

import './list.css';
import Item from './item';

import component$ from '../../../util/react/component.$';


export default component$(
    'List',
    ({todos, onTodoClick}) => (
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <Item
                        key={todo.id}
                        onClick={() => onTodoClick(todo.id)}
                        {...todo}
                    />
                ))
            }
        </ul>
    ),
    {
        todos: P.arrayOf(
            P.shape({

                id:        P.number.isRequired,
                completed: P.bool.isRequired,
                text:      P.string.isRequired,

            }).isRequired
        ).isRequired,

        onTodoClick: P.func.isRequired,

    }
);
