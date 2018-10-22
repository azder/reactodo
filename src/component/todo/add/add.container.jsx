import React from 'react';
import {connect} from 'react-redux';

import curry from 'ramda/es/curry';

import logger from '../../../util/log/log.$';
import value from '../../../util/dom/value';
import reset$ from '../../../util/dom/reset.$';
import prevented from '../../../util/event/prevented';
import target from '../../../util/event/target';

import value2action from './add.action';


const log$ = logger('todo/add/add.container()');

const onChange$ = curry(
    (data, ev) => data.text = value(target(ev))
);


export default connect()(
    // eslint-disable-next-line react/prop-types
    props => {

        log$(props);

        const data = {};

        const onSubmit$ = prevented(
            ev => {

                if (!data.text.trim()) {
                    return;
                }

                props.dispatch(value2action(data.text));

                reset$(target(ev));

            }
        );

        return (
            <div>
                <form onSubmit={onSubmit$}>
                    <input value={data.text} onChange={onChange$(data)}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }
);

