import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../../config/tool';
import { template } from '../common/mixin'; 
// 公共头部
import { Lheader } from './lheader';
// 公共菜单
import { Lmenu } from './lmenu';
// 公共底部
import { Lfooter } from './lfooter';

// 底部样式
import '../../style/layout.less';

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
	      mode: collapsed ? 'vertical' : 'inline'
	    });
	}
	toggle = (collapsed) => {
	    this.setState({
	      collapsed: collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
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
	        <div className="layout-logo">
	        	<Link to="/">
		        	<img className="logo-img" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
		        	<span className="logo-text">Antd Admin</span>
	        	</Link>
	        </div>
	        <Lmenu mode={ this.state.mode } />
	        </Sider>
	        <Layout>
	          <Lheader collapsed={this.state.collapsed} toggle={ collapsed => this.toggle(collapsed) } />
	          <Content className="layout-content">
	           	{this.props.children}
	          </Content>
	          <Lfooter />
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