import React from 'react';
import * as PropTypes from 'prop-types';


const style = (

    completed => ({
        textDecoration: completed ? 'line-through' : 'none',
    })

);


export const TodoItem = (

    ({onClick, completed, text}) => (

        <li onClick={onClick} style={style(completed)}>{text}</li>

    )

);


TodoItem.propTypes = {

    onClick:   PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text:      PropTypes.string.isRequired,

};
