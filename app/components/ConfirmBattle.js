import React, {PropTypes} from 'react';
import Styles from '../styles';
import {Link} from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';


function puke (object) {
	console.log(object);
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
	return props.isLoading === true
	? <p> Loading! </p>
	: <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
		<h1>Confirm Players</h1>
		<div className="col-sm-8 col-sm-offset-2">
			<UserDetailsWrapper header="Player One">
				<UserDetails info={props.playersInfo[0]} />
			</UserDetailsWrapper>
			<UserDetailsWrapper header="Player 2">
				<UserDetails info={props.playersInfo[1]} />
			</UserDetailsWrapper>
		</div>
		<div className="col-sm-8 col-sm-offset-2">
			<div className="col-sm-12" style={Styles.space}>
				<button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
					Initiate Battle!
				</button>
			</div>
			<div className="col-sm-12" style={Styles.space} >
				<Link to="/playerOne">
					<button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
				</Link>	
			</div>
		</div>
	</div>
}

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;