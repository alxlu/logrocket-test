import React, { Component } from "react";
import LogRocket from "logrocket";
import logo from "./logo.svg";
import "./App.css";
import SubApp1 from "./SubApp1";
import SubApp2 from "./SubApp2";

class App extends Component {
	getLogs() {
		LogRocket.getSessionURL(function(sessionURL) {
			console.log(sessionURL);
		});
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<SubApp1 />
				<SubApp2 />
				<button onClick={this.getLogs}>Get logs url</button>
			</div>
		);
	}
}

export default App;
