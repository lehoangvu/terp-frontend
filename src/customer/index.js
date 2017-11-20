import React from 'react';
import { Route } from 'react-router';

import CustomerList from './containers/CustomerList';

export default (
	<Route>
		<Route path="customers" component={CustomerList} />
	</Route>
);