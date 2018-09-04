import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {rehandle} from '../util/events';
import {updateState$} from '../util/components';

// export const Logo = (
//     ({src, onClick}) => <a href="#" onClick={onClick}>
//         <img
//             className="app-logo"
//             alt="logo"
//             src={src}
//         />
//     </a>
// );

export class Logo extends Component {

    state = {spin: true};

    static propTypes = {
        src:     PropTypes.string.isRequired,
        onClick: PropTypes.func,
    };

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
                    rehandle(onClick, updateState$(this, {spin: !spin}))
                }
            />

        );
    }

}
