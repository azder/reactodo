/** Created by azder on 2018-10-23. */
import React from 'react';
import PropTypes from 'prop-types';

import curry from 'ramda/es/curry';

import component$ from '../../../util/react/component.$';
import prevented from '../../../util/event/prevented';
import reset$ from '../../../util/dom/reset.$';
import value from '../../../util/dom/value';
import target from '../../../util/event/target';
import log from '../../../util/log/log.$';


const log$ = log('todo/add/add-todo()');

const onChange$ = curry((data, ev) => data.text = value(target(ev)));


export default component$(
    'AddTodo',

    props => {

        log$(props);

        const {maxid, add$} = props;
        const data = {};

        const onSubmit$ = prevented(
            ev => {

                if (!data.text.trim()) {
                    return;
                }

                add$(1 + maxid, data.text);

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
    },
    {
        maxid: PropTypes.number.isRequired,
        add$:  PropTypes.func.isRequired,
    }
);
