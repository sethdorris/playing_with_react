import React from 'react';
import * as ReactRouter from 'react-router';
const Link = ReactRouter.Link;
import MainContainer from '../containers/MainContainer';

class Home extends React.Component {
    render() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead">Some Fancy Motto</p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
             </MainContainer>
            )
    }
};

export default Home;