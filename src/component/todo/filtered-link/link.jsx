import React from 'react';
import PropTypes from 'prop-types';

import component$ from '../../../util/react/component.$';

import ActiveLink from './active-link';
import InactiveLink from './inactive-link';


export default component$(
    'Link',

    ({active, children, onClick}) => (

        active
            ? (<ActiveLink>{children}</ActiveLink>)
            : (<InactiveLink onClick={onClick}>{children}</InactiveLink>)
    ),

    {
        active:   PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick:  PropTypes.func.isRequired,
    }
);
