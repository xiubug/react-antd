import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../config/tool';
import { Header, template } from './common/mixin'; 

class Main extends Component {
	render() {
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