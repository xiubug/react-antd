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

// 民北社区雷锋角
const leifengjiao = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/leifengjiao/leifengjiaoIndex').default)
    }, 'leifengjiao');
}

// 绿菱烟雨人社会服务工作室
const lvlingyanyuren = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/lvlingyanyuren/lvlingyanyurenIndex').default)
    }, 'lvlingyanyuren');
}

// 南湖社工服务社
const shegongfuwushe = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/shegongfuwushe/shegongfuwusheIndex').default)
    }, 'shegongfuwushe');
}

// 乐心社会组织服务中心
const lexinshehuizuzhi= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/lexinshehuizuzhi/lexinshehuizuzhiIndex').default)
    }, 'lexinshehuizuzhi');
}

// “南湖家苑”失独家庭互助中心
const shidujiating= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/shidujiating/shidujiatingIndex').default)
    }, 'shidujiating');
}

// 文星社区星连心
const xinlianxin= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/xinlianxin/xinlianxinIndex').default)
    }, 'xinlianxin');
}

// 成长驿站社会组织服务中心
const chengzhangyizhan= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/chengzhangyizhan/chengzhangyizhanIndex').default)
    }, 'chengzhangyizhan');
}

//南湖街道老娘舅团队
const laoniangjiu= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/laoniangjiu/laoniangjiuIndex').default)
    }, 'laoniangjiu');
}

//南湖区温馨家园社工站
const wenxinjiayuan= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/wenxinjiayuan/wenxinjiayuanIndex').default)
    }, 'wenxinjiayuan');
}

//社会组织入驻南湖街道矛调中心轮值计划表			
const zhibanbiao= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/zhibanbiao/zhibanbiaoIndex').default)
    }, 'zhibanbiao');
}

//南湖区近邻社会工作服务发展中心			
const jinlin= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/jinlin/jinlinIndex').default)
    }, 'jinlin');
}

//青鸟社工			
const qingniao= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/qingniao/qingniaoIndex').default)
    }, 'qingniao');
}

//南湖街道桂苑社区社会组织联合会		
const guiyuan= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/guiyuan/guiyuanIndex').default)
    }, 'guiyuan');
}

//南湖街道南湖社区自治管理服务中心		
const nanhu= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/nanhu/nanhuIndex').default)
    }, 'guiyuan');
}

//南湖街道益行社会组织服务中心	
const yixing= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/yixing/yixingIndex').default)
    }, 'yixing');
}

//椿熙堂
const chunxitang= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/chunxitang/chunxitangIndex').default)
    }, 'chunxitang');
}

//椿熙堂
const pinganjianshe= (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/pinganjianshe/pinganjiansheIndex').default)
    }, 'pinganjianshe');
}


const RouteConfig = (
	<Router history={browserHistory}>
		<Route path="/zhibanbiao" component={layout} onEnter={requireAuth}>
			<IndexRoute getComponent={zhibanbiao} onEnter={requireAuth} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
            <Route path="/zhibanbiao" getComponent={zhibanbiao} onEnter={requireAuth} />
            <Route path="/leifengjiao" getComponent={leifengjiao} onEnter={requireAuth} />
            <Route path="/laoniangjiu" getComponent={laoniangjiu} onEnter={requireAuth} />
            <Route path="/lvlingyanyuren" getComponent={lvlingyanyuren} onEnter={requireAuth} />
            <Route path="/shegongfuwushe" getComponent={shegongfuwushe} onEnter={requireAuth} />
            <Route path="/lexinshehuizuzhi" getComponent={lexinshehuizuzhi} onEnter={requireAuth} />
            <Route path="/shidujiating" getComponent={shidujiating} onEnter={requireAuth} />
            <Route path="/xinlianxin" getComponent={xinlianxin} onEnter={requireAuth} />
            <Route path="/chengzhangyizhan" getComponent={chengzhangyizhan} onEnter={requireAuth} />
            <Route path="/wenxinjiayuan" getComponent={wenxinjiayuan} onEnter={requireAuth} />
            <Route path="/jinlin" getComponent={jinlin} onEnter={requireAuth} />   
            <Route path="/qingniao" getComponent={qingniao} onEnter={requireAuth} /> 
            <Route path="/guiyuan" getComponent={guiyuan} onEnter={requireAuth} /> 
            <Route path="/nanhu" getComponent={nanhu} onEnter={requireAuth} />    
            <Route path="/yixing" getComponent={yixing} onEnter={requireAuth} /> 
            <Route path="/chunxitang" getComponent={chunxitang} onEnter={requireAuth} /> 
            <Route path="/pinganjianshe" getComponent={pinganjianshe} onEnter={requireAuth} />      
		</Route>
		<Route path="/login" component={Roots}> // 所有的访问，都跳转到Roots
			<IndexRoute component={login} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
		</Route>
		<Redirect from="*" to="/zhibanbiao" />
	</Router>
);

export default RouteConfig;
