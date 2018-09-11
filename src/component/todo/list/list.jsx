import React from 'react';
import PropTypes from 'prop-types';


import Item from './item';


const List = (

    ({todos, onTodoClick}) => (
        <ul>
            {
                todos.map(todo => (
                    <Item key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
                ))
            }
        </ul>
    )
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
