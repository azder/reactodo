import React from 'react';
import ReactDOM from 'react-dom';
import {App} from '../src/App';

describe('App', () => {

    let el;

    beforeEach(() => {

        el = document.createElement('div');

    });

    it('renders without crashing', () => {

        ReactDOM.render(<App/>, el);
        ReactDOM.unmountComponentAtNode(el);

    });

    it('whatever', () => {
        // empty
    });

});
