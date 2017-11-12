import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './stores';
import Routes from './routes';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

const store = initStore(window.__INITIAL_STATE__ || {});

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            {Routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);

