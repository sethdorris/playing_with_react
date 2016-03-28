import React from 'react';
import ReactRouter from 'react-router';
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
import Main from '../components/Main';
import Home from '../components/Home';

const routes = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="/home" component={Home} />
        </Route>
    </Router>
);

//module.exports = routes;
export default routes;