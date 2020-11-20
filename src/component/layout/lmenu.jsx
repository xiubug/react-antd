import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
/**
 * 公共菜单
 *
 * @export
 * @class Lmenu
 * @extends {Component}
 */
export class Lmenu extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
		const openKeys = Config.localItem('OPENKEY') ? [Config.localItem('OPENKEY')] : [];
		this.state = {
			openKeys: openKeys
		};
	}
    onOpenChange = (openKeys) => {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    Config.localItem('OPENKEY', nextOpenKeys);
	    this.setState({ openKeys: nextOpenKeys });
	}
  	getAncestorKeys = (key) => {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	}
	render() {
		const defaultSelectedKey = process.env.NODE_ENV !== 'production' ? [location.pathname.split('/')[location.pathname.split('/').length - 1] || 'zhibanbiao'] : [location.hash.split('/')[location.hash.split('/').length - 1].split('?')[0] || 'zhibanbiao'];
		return (
			<Menu openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark" mode={this.props.mode} defaultSelectedKeys={defaultSelectedKey}>
				<Menu.Item key="zhibanbiao">
				<Link to="/zhibanbiao">
					{!this.props.collapsed && <span className="nav-text">社会组织矛调中心轮值表</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="laoniangjiu">
				<Link to="/laoniangjiu">
					{!this.props.collapsed && <span className="nav-text">南湖街道老娘舅团队</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="wenxinjiayuan">
				<Link to="/wenxinjiayuan">
					{!this.props.collapsed && <span className="nav-text">南湖区温馨家园社工站</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="pinganjianshe">
				<Link to="/pinganjianshe">
					{!this.props.collapsed && <span className="nav-text">巾帼行动</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="leifengjiao">
				<Link to="/leifengjiao">
					{!this.props.collapsed && <span className="nav-text">民北社区雷锋角</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="lvlingyanyuren">
				<Link to="/lvlingyanyuren">
					{!this.props.collapsed && <span className="nav-text">绿菱烟雨人社会服务工作室</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="shegongfuwushe">
				<Link to="/shegongfuwushe">
					{!this.props.collapsed && <span className="nav-text">南湖社工服务社</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="lexinshehuizuzhi">
				<Link to="/lexinshehuizuzhi">
					{!this.props.collapsed && <span className="nav-text">乐心社会组织服务中心</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="shidujiating">
				<Link to="/shidujiating">
					{!this.props.collapsed && <span className="nav-text">“南湖家苑”失独家庭互助中心</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="xinlianxin">
				<Link to="/xinlianxin">
					{!this.props.collapsed && <span className="nav-text">文星社区星连心</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="chengzhangyizhan">
				<Link to="/chengzhangyizhan">
					{!this.props.collapsed && <span className="nav-text">成长驿站社会组织服务中心</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="jinlin">
				<Link to="/jinlin">
					{!this.props.collapsed && <span className="nav-text">南湖区近邻社会工作服务发展中心</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="qingniao">
				<Link to="/qingniao">
					{!this.props.collapsed && <span className="nav-text">青鸟社工</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="chunxitang">
				<Link to="/chunxitang">
					{!this.props.collapsed && <span className="nav-text">椿熙堂</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="guiyuan">
				<Link to="/guiyuan">
					{!this.props.collapsed && <span className="nav-text">南湖街道桂苑社区社会组织联合会</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="nanhu">
				<Link to="/nanhu">
					{!this.props.collapsed && <span className="nav-text">南湖街道南湖社区自治管理服务中心</span>}	
				</Link>
				</Menu.Item>
				<Menu.Item key="yixing">
				<Link to="/yixing">
					{!this.props.collapsed && <span className="nav-text">南湖街道益行社会组织服务中心</span>}	
				</Link>
				</Menu.Item>
	        </Menu>
		)
	}
}