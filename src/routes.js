import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import Product from './product';
import Order from './order';
import Customer from './customer';

const Routes = 
    <Route path="/" component={App}>
        <IndexRoute component={Product} ></IndexRoute>
        {Product}
        {Order}
        {Customer}
    </Route>;

export default Routes;
