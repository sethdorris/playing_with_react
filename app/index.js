import React from "react";
import ReactDOM from "react-dom";

let User_Data = {
	name: "Seth Dorris",
	username: "sethdorris",
	image: "https://avatars1.githubusercontent.com/u/12013667?v=3&s=460"
}

class ProfilePic extends React.Component {
	render() {
		return (
			<img src={this.props.imageUrl} style={{height: 100, width: 100}} />
		)
	}
}

class ProfileLink extends React.Component  {
	render() {
		return (
			<div>
				<a href={'https://www.github.com' + this.props.username}>{this.props.username}</a>
			</div>
		)
	}
}

class Avatar extends React.Component {
	render() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image}/>
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
}

class HelloWorld extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div> Hello {this.props.name}, Welcome to ES2015 React App </div>
		)
	}
}

ReactDOM.render(<Avatar user={User_Data}/>, document.getElementById("app"));