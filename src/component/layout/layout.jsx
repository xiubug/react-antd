import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';

// 公共头部
import { Lheader } from './lheader';
// 公共菜单
import { Lmenu } from './lmenu';
// 公共底部
import { Lfooter } from './lfooter';

// 布局样式
import './style/layout.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
	constructor(props) {
		super(props);
		const collapsed = Config.localItem('COLLAPSED') == 'YES' ? true : false;
		this.state = {
			collapsed: collapsed,
    		mode: collapsed ? 'vertical' : 'inline', 
		};
	}
	onCollapse = (collapsed) => {
		if(collapsed) Config.localItem('COLLAPSED', 'YES'); else Config.localItem('COLLAPSED', 'NO');
	    this.setState({
	      collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
	}
	toggle = (collapsed) => {
		if(collapsed) Config.localItem('COLLAPSED', 'YES'); else Config.localItem('COLLAPSED', 'NO');
	    this.setState({
	      collapsed: collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
  	}
  	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
		return (
		<Layout className="layout">
	        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
		        <div className="layout-logo">
		        	<Link to="/home">
			        	<img className="logo-img" src={Config.logoSrc} />
			        	<span className="logo-text">{Config.logoText}</span>
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

export default Main;