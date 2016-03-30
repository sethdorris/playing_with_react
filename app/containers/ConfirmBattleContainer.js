import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

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
	}
}

ConfirmBattleContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;