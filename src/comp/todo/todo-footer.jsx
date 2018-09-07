import React from 'react';
import {FilterLinkContainer} from '../../cont/filter-link.container';
import {VISIBILITY} from '../../constants';

export const TodoFooter = (

    () => (
        <p>
            Show:
            <FilterLinkContainer filter={VISIBILITY.ALL}>All</FilterLinkContainer>
            ,
            <FilterLinkContainer filter={VISIBILITY.ACTIVE}>Active</FilterLinkContainer>
            ,
            <FilterLinkContainer filter={VISIBILITY.COMPLETED}>Completed</FilterLinkContainer>
        </p>
    )

);

