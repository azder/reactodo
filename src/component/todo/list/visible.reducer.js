// eslint-disable-next-line no-unused-vars
import tap from '../../../util/fn/tap';
// eslint-disable-next-line no-unused-vars
import log$ from '../../../util/log/log.$';

import VIS from '../../../constant/visibility';
import on from '../../../util/on-reducer';
import identity from '../../../util/fn/identity';
import df from '../../../util/fn/df';
import curry from 'ramda/es/curry';
import flow from '../../../util/fn/flow';


// eslint-disable-next-line no-unused-vars
const prefix = 'todo/list/visible.reducer()->';

export default curry(
    (visibility, todos) => flow(
        // tap(log$(`before ${prefix}on(`, visibility, ')')),

        df([]),

        on(
            VIS.all,
            visibility,
            identity
        ),

        on(
            VIS.completed,
            visibility,
            ts => ts.filter(t => t.completed)
        ),

        on(
            VIS.active,
            visibility,
            ts => ts.filter(t => !t.completed)
        ),

        // tap(log$(`after ${prefix}on(`, visibility, ')'))

    )(todos)
);
