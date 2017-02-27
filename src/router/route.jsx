import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import auth from './auth';
import index from '../component/index'; // 首页
import login from '../component/login'; // 登录界面

class Roots extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const requireAuth = (nextState, replace) => {
	if(!auth.loggedIn()) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}

const RouteConfig = (
	<Router history={history}>
		<Route path="/" component={Roots}>
			<IndexRoute component={index} onEnter={requireAuth} /> //首页
			<Route path="login" component={login} />
			<Redirect from="*" to="/" />
		</Route>
	</Router>
);

export default RouteConfig;