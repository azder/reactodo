import React from 'react';
import PropTypes from 'prop-types';

export const Logo = (
    ({src}) => <img src={src} className="app-logo" alt="logo"/>
);


Logo.propTypes = {
    src: PropTypes.string.isRequired,
};
