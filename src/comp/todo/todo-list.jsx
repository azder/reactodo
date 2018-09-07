import React from 'react';
import PropTypes from 'prop-types';
import {TodoItem} from './todo-item';
import {tap} from '../../util/functions';
import {log} from '../../util/console';


export const TodoList = ({todos, onTodoClick}) => (

    tap(log('TodoList()', todos, onTodoClick))(<ul>
        {
            todos.map((todo, index) => (
                <TodoItem key={index} {...todo} onClick={() => onTodoClick(index)}/>
            ))
        }
    </ul>)
);

TodoList.propTypes = {

    todos: PropTypes.arrayOf(
        PropTypes.shape({

            id:        PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text:      PropTypes.string.isRequired,

        }).isRequired
    ).isRequired,

    onTodoClick: PropTypes.func.isRequired,

};
