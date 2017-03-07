/**
* 疑惑一：
* React createClass 和 extends React.Component 有什么区别?
* 之前写法：
* let app = React.createClass({
*  	getInitialState: function(){
*    	// some thing
*  	}
*  })
* ES6写法(通过es6类的继承实现时state的初始化要在constructor中声明)：
* class exampleComponent extends React.Component {
*    constructor(props) {
*        super(props);
*        this.state = {example: 'example'}
*    }
* }
*/
import React, {Component, PropTypes} from 'react'; // react核心
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'; // 创建route所需
import { auth } from '../component/common/mixin'; // 登录逻辑处理
import layout from '../component/layout'; // 布局界面
import home from '../component/home'; // 主页
import user from '../component/user'; // 用户管理
import login from '../component/login'; // 登录界面

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
	render() {
		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
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
		<Route path="/" component={Roots}> // 所有的访问，都跳转到Roots
			<Route component={layout} onEnter={requireAuth}>
				<IndexRoute component={home} onEnter={requireAuth} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
				<Route path="user" component={user}></Route>
			</Route>
			<Route path="login" component={login} /> // 一个路由地址，比如访问www.test.com/home,就会跳转到此
			<Redirect from="*" to="/" /> // 所有的其他未定义的访问路径，都跳转到根路径，比如访问www.test.com/abc, 但是/abc我们没有定义，就会自动跳转到www.test.com, 而www.test.com又会自动跳转到www.test.com/home
		</Route>
	</Router>
);

export default RouteConfig;