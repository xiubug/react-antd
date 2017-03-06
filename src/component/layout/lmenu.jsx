import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Sider } = Layout;
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
		this.state = {
			collapsed: false,
			mode: 'inline'
		};
	}
	render() {
		return (
	        <Menu theme="dark" mode={this.props.mode} defaultSelectedKeys={['6']}>
	            <SubMenu
	              key="sub1"
	              title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
	            >
	              <Menu.Item key="1">Tom</Menu.Item>
	              <Menu.Item key="2">Bill</Menu.Item>
	              <Menu.Item key="3">Alex</Menu.Item>
	            </SubMenu>
	            <SubMenu
	              key="sub2"
	              title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
	            >
	              <Menu.Item key="4">Team 1</Menu.Item>
	              <Menu.Item key="5">Team 2</Menu.Item>
	            </SubMenu>
	            <Menu.Item key="6">
	              <span>
	                <Icon type="file" />
	                <span className="nav-text">File</span>
	              </span>
	            </Menu.Item>
	        </Menu>
		)
	}
}