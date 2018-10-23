import React from 'react';
import * as PropTypes from 'prop-types';

import component$ from '../../../util/react/component.$';


const style = (

    completed => ({
        textDecoration: completed ? 'line-through' : 'none',
    })

);


export default component$(
    'Item',

    ({onClick, completed, text}) => (

        <li onClick={onClick} style={style(completed)}>{text}</li>

    ),
    {

        onClick:   PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text:      PropTypes.string.isRequired,

    }
);
