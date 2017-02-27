import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../component/index'; // 首页

class Roots extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
	<Router history={history}>
		<Route path="/" component={Roots}>
			<IndexRoute component={index} /> //首页
			<Redirect from="*" to="/" />
		</Route>
	</Router>
);

export default RouteConfig;