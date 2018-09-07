import React from 'react';
import {connect} from 'react-redux';
import {add2action} from '../act/add.action';
import {prevented} from '../util/events';
import {log} from '../util/console';


export const AddTodoContainer = connect()(
    // eslint-disable-next-line react/prop-types
    props => {

        const {dispatch} = props;
        log('AddTodoContainer()')(props);
        let input = null; // eslint-disable-line init-declarations

        const onSubmit = prevented(
            () => {

                if (!input.value.trim()) {
                    return;
                }

                dispatch(add2action(input.value));
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

