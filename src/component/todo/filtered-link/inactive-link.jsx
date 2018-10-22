import React from 'react';
import PropTypes from 'prop-types';
import prevented from '../../../util/event/prevented';

import component from '../../../util/react/component';


export default component(
    'InactiveLink',

    ({onClick, children}) => (
        <a className="todo-link inactive" href="#" onClick={prevented(onClick)}>{children}</a>
    ),

    {
        onClick:  PropTypes.func.isRequired,
        children: PropTypes.node.isRequired,
    }
);


