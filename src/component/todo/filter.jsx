import React from 'react';
import VIS from '../../constant/visibility';

import Link from './filtered-link/link.container';

const Filter = (

    () => (
        <p>
            Show:
            <Link filter={VIS.all}>All</Link>
            ,
            <Link filter={VIS.active}>Active</Link>
            ,
            <Link filter={VIS.completed}>Completed</Link>
        </p>
    )

);


export default Filter;
