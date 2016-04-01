import React, {propTypes} from 'react';

const styles = {
	container: {
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontSize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: '30px'
	}
}

class Loading extends React.Component {
	constructor() {
		super();
		this.state = {
			originalText: this.props.text,
			text: this.originalText
		}
	}
	
	componentDidMount() {
		let stopper = this.state.originalText + '...';
		this.interval = setInterval(()=> {
			if (this.state.text === stopper) {
				this.setState({
					text: this.state.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}, this.props.speed)
	}
	
	getDefaultProps() {
		return {
			text: 'Loading',
			speed: 300
		}
	}
	
	componentWillMount() {
		clearInterval(this.interval);
	}
	
	render() {
		return (
		<div style={styles.container}>
			<p style={styles.content}>{this.state.text}</p>
		</div>
		)
	}
}

Loading.propTypes = {
	speed: propTypes.number,
	text: propTypes.string
}

export default Loading;