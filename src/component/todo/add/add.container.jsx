import React from 'react';
import {connect} from 'react-redux';

import prevented from '../../../util/event/prevented';
import log from '../../../util/log.$';

import value2action from './add.action';


export default connect()(
    // eslint-disable-next-line react/prop-types
    props => {

        const {dispatch} = props;
        log('todo/add/add.container()')(props);
        let input = null; // eslint-disable-line init-declarations

        const onSubmit = prevented(
            () => {

                if (!input.value.trim()) {
                    return;
                }

                dispatch(value2action(input.value));
                input.value = '';

            }
        );

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input ref={node => input = node}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
);

