import React from 'react';

function puke (object) {
	console.log(object);
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
	return props.isLoading === true
	? <p> Loading! </p>
	: <div> CONFIRM BATTLE!: {puke(props)} </div>
}

export default ConfirmBattle;