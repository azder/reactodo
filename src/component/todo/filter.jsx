import React from 'react';
import {VISIBILITY} from '../../constants';

import Link from './filtered-link/link.container';

const Filter = (

    () => (
        <p>
            Show:
            <Link filter={VISIBILITY.ALL}>All</Link>
            ,
            <Link filter={VISIBILITY.ACTIVE}>Active</Link>
            ,
            <Link filter={VISIBILITY.COMPLETED}>Completed</Link>
        </p>
    )

);


export default Filter;
