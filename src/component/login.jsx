import React, { Component, PropTypes } from 'react';
import { Button, Row, Form, Input } from 'antd';
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../config/tool';
import { template } from './common/mixin';
import { config } from '../config/config';

import styles from './../style/login.less';

class Main extends Component {
	render() {
		return (
			<div>登录界面</div>
		);
	}
}

export default template({
	id: 'login', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});