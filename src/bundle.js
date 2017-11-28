import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './stores';
import Routes from './routes';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { LocaleProvider } from 'antd';
import viVN from 'antd/lib/locale-provider/vi_VN';

const store = initStore(window.__INITIAL_STATE__ || {});

const history = syncHistoryWithStore(browserHistory, store);

render(<LocaleProvider locale={viVN}>
	    <Provider store={store}>
	        <Router history={history}>
	            {Routes}
	        </Router>
	    </Provider>
    </LocaleProvider>,
    document.getElementById('app')
);

