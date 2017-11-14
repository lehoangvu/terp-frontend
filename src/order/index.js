import React from 'react';
import { Route } from 'react-router';

import OrderList from './containers/OrderList';
import OrderCreate from './containers/OrderCreate';

export default (
	<Route>
		<Route path="/orders" component={OrderList} />
		<Route path="/orders/create" component={OrderCreate} />
	</Route>
);