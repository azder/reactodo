import React from 'react';
import PropTypes from 'prop-types';
import {prevented} from '../../util/events';

const ActiveLink = (

    ({children}) => <span className="todo-link active">{children}</span>

);

ActiveLink.propTypes = {
    children: PropTypes.node.isRequired,
};


const InactiveLink = (

    ({onClick, children}) => <a className="todo-link inactive" href="#" onClick={prevented(onClick)}>{children}</a>

);


InactiveLink.propTypes = {
    onClick:  PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};


export const Link = ({active, children, onClick}) => (

    active
        ? (
            <ActiveLink>{children}</ActiveLink>
        )
        : (
            <InactiveLink onClick={onClick}>{children}</InactiveLink>
        )
);

Link.propTypes = {
    active:   PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick:  PropTypes.func.isRequired,
};

