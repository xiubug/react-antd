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
import Config from '../config/index';
import layout from '../component/layout/layout'; // 布局界面

import login from '../containers/login/login'; // 登录界面

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

// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

// 快速入门
const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/home/homeIndex').default)
    }, 'home');
}

// 百度图表-折线图
const chartLine = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/charts/lines').default)
    }, 'chartLine');
}

// 基础组件-按钮
const button = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/general/buttonIndex').default)
    }, 'button');
}

// 基础组件-图标
const icon = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/general/iconIndex').default)
    }, 'icon');
}

// 用户管理
const user = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/user/userIndex').default)
    }, 'user');
}

// 系统设置
const setting = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/setting/settingIndex').default)
    }, 'setting');
}

// 广告管理
const adver = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/adver/adverIndex').default)
    }, 'adver');
}

// 组件一
const oneui = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/ui/oneIndex').default)
    }, 'oneui');
}

// 组件二
const twoui = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/ui/twoIndex').default)
    }, 'twoui');
}

// 登录验证
const requireAuth = (nextState, replace) => {
	let token = (new Date()).getTime() - Config.localItem('USER_AUTHORIZATION');
	if(token > 7200000) { // 模拟Token保存2个小时
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}

const RouteConfig = (
	<Router history={browserHistory}>
		<Route path="/home" component={layout} onEnter={requireAuth}>
			<IndexRoute getComponent={home} onEnter={requireAuth} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
			<Route path="/home" getComponent={home} onEnter={requireAuth} />
            <Route path="/chart/line" getComponent={chartLine} onEnter={requireAuth} />
			<Route path="/general/button" getComponent={button} onEnter={requireAuth} />
			<Route path="/general/icon" getComponent={icon} onEnter={requireAuth} />
            <Route path="/user" getComponent={user} onEnter={requireAuth} />
			<Route path="/setting" getComponent={setting} onEnter={requireAuth} />
			<Route path="/adver" getComponent={adver} onEnter={requireAuth} />
			<Route path="/ui/oneui" getComponent={oneui} onEnter={requireAuth} />
			<Route path="/ui/twoui" getComponent={twoui} onEnter={requireAuth} />
		</Route>
		<Route path="/login" component={Roots}> // 所有的访问，都跳转到Roots
			<IndexRoute component={login} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
		</Route>
		<Redirect from="*" to="/home" />
	</Router>
);

export default RouteConfig;
