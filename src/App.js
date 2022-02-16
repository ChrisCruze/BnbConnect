import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

class App extends React.Component {
	render() {
		return (
			<div id="wrapper" style={{ backgroundColor: "#fffff" }}>
				<HashRouter>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/Dashboard" component={Dashboard} />
						<Route exact path="/Login" component={Login} />
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default App;
