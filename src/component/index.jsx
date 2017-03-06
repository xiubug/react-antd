import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../config/tool';
import { template } from './common/mixin'; 
import { Lheader } from './layout/lheader';
import { Lmenu } from './layout/lmenu';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/* 以类的方式创建一个组件 */
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
    		mode: 'inline'
		};
	}

	onCollapse = (collapsed) => {
	    this.setState({
	      collapsed,
	      mode: collapsed ? 'vertical' : 'inline',
	    });
	}
	toggle = (collapsed) => {
	    this.setState({
	      collapsed: collapsed,
	      mode: collapsed ? 'vertical' : 'inline',
	    });
  	}
	/* 渲染组件 */
	render() {
		return (
		<Layout className="layout">
	        <Sider
	          collapsible
	          collapsed={this.state.collapsed}
	          onCollapse={this.onCollapse}
	        >
	        <div className="logo" />
	        <Lmenu mode={ this.state.mode } />
	        </Sider>
	        <Layout>
	          <Lheader collapsed={this.state.collapsed} toggle={ collapsed => this.toggle(collapsed) } />
	          <Content style={{ margin: '0 16px' }}>
	            <Breadcrumb style={{ margin: '12px 0' }}>
	              <Breadcrumb.Item>User</Breadcrumb.Item>
	              <Breadcrumb.Item>Bill</Breadcrumb.Item>
	            </Breadcrumb>
	            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
	              Bill is a cat.
	            </div>
	          </Content>
	          <Footer style={{ textAlign: 'center' }}>
	            Ant Design ©2016 Created by Ant UED
	          </Footer>
	        </Layout>
	    </Layout>
		);
	}
}

export default template({
	id: 'index', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});