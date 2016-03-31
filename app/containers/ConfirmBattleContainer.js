import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			playerInfo: []
		}
	}
	
	render() {
		return (
			<ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playerInfo}/>
		)
	}

	componentDidMount() {
		let query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		.then( (players) => {
			this.setState({
				isLoading: false,
				playersInfo: [players[0], players[1]]
			})
		})
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;