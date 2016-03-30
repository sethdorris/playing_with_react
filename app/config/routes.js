import React from 'react';
import * as ReactRouter from 'react-router';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header="Player One" component={PromptContainer} />
            <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
			<Route path="battle" component={ConfirmBattleContainer} />
        </Route>
    </Router>
);

//module.exports = routes;
export default routes;