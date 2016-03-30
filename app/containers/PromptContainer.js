import React from 'react';
import Styles from '../styles';

class PromptContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
		console.log(this);
    }

    onUpdateUser(e) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmitUser(e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });

        if (this.props.routeParams.playerOne) {
            console.log(this.context)
        } else {
            console.log(this.context)
        }
    }

    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={Styles.transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.onSubmitUser}>
                        <div className="form-group">
                            <input 
                                className="form-control"
                                placeholder="Github Username"
                                onChange={this.onUpdateUser}
                                value={this.state.username}
                                type="text" />
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                        <button 
                            className="btn btn-block btn-success"
                            type="submit">Continue
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        )
   }
}

PromptContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default PromptContainer;