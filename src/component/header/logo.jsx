import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import rehandle from '../../util/event/rehandle';
import update$ from '../../util/update-state.$';


// export const Logo = (
//     ({src, onClick}) => <a href="#" onClick={onClick}>
//         <img
//             className="app-logo"
//             alt="logo"
//             src={src}
//         />
//     </a>
// );

class Logo extends Component {

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
                    rehandle(onClick, update$(this, {spin: !spin}))
                }
            />

        );
    }

}


export default Logo;
