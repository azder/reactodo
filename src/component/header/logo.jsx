import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import rehandle from '../../util/event/rehandle';
import update$ from '../../util/react/update-state.$';


export default class Logo extends React.Component {

    state = {spin: true};

    render() {

        const {src, onClick} = this.props;
        const {spin} = this.state;

        return (

            <img

                alt="logo"
                src={src}

                className={
                    classNames({'app-logo': true, spin})
                }

                onClick={
                    rehandle(onClick, update$(this, {spin: !spin}))
                }
            />

        );
    }


    static propTypes = {
        src:     PropTypes.string.isRequired,
        onClick: PropTypes.func,
    };


}

