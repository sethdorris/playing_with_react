import React from "react";
import ReactDOM from "react-dom"

class HelloWorld extends React.Component {
	render() {
		return (
			<div> Hello ES2015 React App </div>
		)
	}
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));