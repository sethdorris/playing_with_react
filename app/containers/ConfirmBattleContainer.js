import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			playersInfo: []
		}
	}
	
	componentDidMount() {
		let query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		.then( (players) => {
			console.log(players);
			this.setState({
				isLoading: false,
				playersInfo: [players[0], players[1]]
			})
			console.log(this.state);
		})
	}
	
	render() {
		return (
			<ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo}/>
		)
	}


}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;