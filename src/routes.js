import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import Product from './product';
import Order from './order';

const Routes = 
    <Route path="/" component={App}>
        <IndexRoute component={Product} ></IndexRoute>
        {Product}
        {Order}
    </Route>;

export default Routes;
