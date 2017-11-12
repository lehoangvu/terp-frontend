import React from 'react';
import { Route } from 'react-router';

import ProductList from './containers/ProductList';

export default (
	<Route>
		<Route path="products" component={ProductList} />
	</Route>
);