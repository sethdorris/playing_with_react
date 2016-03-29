import React from 'react';
import Styles from '../styles';
import * as ReactRouter from 'react-router';
const Link = ReactRouter.Link;

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg} >
                <h1>Github Battle</h1>
                <p className="lead">Some Fancy Motto</p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
             </div>
            )
    }
};

export default Home;