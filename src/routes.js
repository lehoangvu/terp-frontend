import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app';
import Product from './product';

const Routes = 
    <Route path="/" component={App}>
        <IndexRoute component={Product} ></IndexRoute>
        {Product}
    </Route>;

export default Routes;
