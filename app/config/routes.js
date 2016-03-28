import React from 'react';
import * as ReactRouter from 'react-router';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/home" component={Home} />
        </Route>
    </Router>
);

//module.exports = routes;
export default routes;