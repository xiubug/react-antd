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
	        <Menu theme="dark" mode={this.props.mode}>
		        <Menu.Item key="1">
		            <Link to="/user">
		              <span>
		                <Icon type="user" />
		                <span className="nav-text">用户管理</span>
		              </span>
		            </Link>
		        </Menu.Item>
	            <SubMenu
	              key="sub2" title={<span><Icon type="team" /><span className="nav-text">UI组件</span></span>}
	            >
	              <Menu.Item key="2">组件一</Menu.Item>
	              <Menu.Item key="3">组件二</Menu.Item>
	            </SubMenu>
	            <Menu.Item key="4">
	              <span>
	                <Icon type="file" />
	                <span className="nav-text">File</span>
	              </span>
	            </Menu.Item>
	        </Menu>
		)
	}
}