import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import {tap} from '../../../util/functions';
import {log} from '../../../util/console';


export const List = ({todos, onTodoClick}) => (

    tap(log('todo.list.list()', todos, onTodoClick))(<ul>
        {
            todos.map((todo, index) => (
                <Item key={index} {...todo} onClick={() => onTodoClick(index)}/>
            ))
        }
    </ul>)
);

List.propTypes = {

    todos: PropTypes.arrayOf(
        PropTypes.shape({

            id:        PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text:      PropTypes.string.isRequired,

        }).isRequired
    ).isRequired,

    onTodoClick: PropTypes.func.isRequired,

};

export default List;
