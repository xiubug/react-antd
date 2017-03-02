import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes。PropTypes是用于检查props参数类型，可有可无，最好是有
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../config/tool';
import { template } from './common/mixin'; 

/* 以类的方式创建一个组件 */
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	/* 组件初始化完毕时触发 */
	componentDidMount() {
		
	}

	/* 渲染组件 */
	render() {
		var {User, params} = this.props;
		return (
			<div>
				基于react + redux + immutable + less + ES6/7 + webpack + fetch + react-router + antd(1.x)实现的SPA后台管理系统模板
			</div>
		);
	}
}

export default template({
	id: 'index', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});