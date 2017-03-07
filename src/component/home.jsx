import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import pureRender from 'pure-render-decorator';
import { Router, Route, IndexRoute, browserHistory, History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../config/tool';
import { template, auth } from './common/mixin';
import { config } from '../config/config';

import styles from '../style/login.less';

import { Spin, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
    }
    componentDidMount() {
    }
	render() {
		return (	
		<div>
			主页
		</div>
		);
	}
}

Main.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default template({
	id: 'home', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});