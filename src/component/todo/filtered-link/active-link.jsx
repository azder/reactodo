import React from 'react';
import PropTypes from 'prop-types';

import component$ from '../../../util/react/component.$';


export default component$(
    'ActiveLink',

    ({children}) => (<span className="todo-link active">{children}</span>),

    {
        children: PropTypes.node.isRequired,
    }
);


