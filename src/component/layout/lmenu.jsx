import React, { Component, PropTypes } from 'react';
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
	}
	render() {
		return (
			<Menu theme="dark" mode={this.props.mode} defaultSelectedKeys={[location.pathname.split('/')[location.pathname.split('/').length - 1] || 'home']}>
		        <Menu.Item key="home">
		        <Link to="/">
	              <Icon type="laptop" />
	              {!this.props.collapsed && <span className="nav-text">欢迎页</span>}
	            </Link>
	            </Menu.Item>
	            <Menu.Item key="user">
	            <Link to="/user">
	              <Icon type="user" />
	              {!this.props.collapsed && <span className="nav-text">用户管理</span>}
	            </Link>
	            </Menu.Item>
	            <Menu.Item key="setting">
	            <Link to="/setting">
	              <Icon type="setting" />
	              {!this.props.collapsed && <span className="nav-text">系统设置</span>}
	            </Link>
	            </Menu.Item>
	            <Menu.Item key="adver">
	            <Link to="/adver">
	              <Icon type="notification" />
	              {!this.props.collapsed && <span className="nav-text">广告管理</span>}
	            </Link>
	            </Menu.Item>
	            <SubMenu
	              key="sub2" title={<span><Icon type="team" /><span className="nav-text">UI组件</span></span>}
	            >
	              <Menu.Item key="oneui"><Link to="/ui/oneui">组件一</Link></Menu.Item>
	              <Menu.Item key="twoui"><Link to="/ui/twoui">组件二</Link></Menu.Item>
	            </SubMenu>
	        </Menu>
		)
	}
}