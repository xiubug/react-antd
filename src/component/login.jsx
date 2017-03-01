import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Tool } from '../config/tool';
import { template } from './common/mixin';
import { config } from '../config/config';

import styles from '../style/login.less';

import { Spin, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

/* 以类的方式创建一个组件 */
class Login extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		passwordDirty: false,
    		loginBtnLoading: false,
    		loginBtnText: '登录',
    		loginSpinning: true
    	};
    }
  	handleSubmit = (e) => {
    	e.preventDefault();
	    this.props.form.validateFieldsAndScroll((err, values) => {
		    if (!err) {
		    	this.setState({ loginBtnLoading: true, loginBtnText: '登录中...' });
		    	console.log('Received values of form: ', values);
		    }
	    });
	}
	checkConfirm = (rule, value, callback) => {
		const form = this.props.form;
	    if (value && this.state.passwordDirty) {
	    	console.log('1');
	    	form.validateFields(['confirm'], { force: true });
	    }
	    callback();
	}
	/**
     * 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
     * 在生命周期中的这个时间点，组件拥有一个 DOM 展现，
     * 你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
     */
    componentDidMount() {
        this.setState({ loginSpinning: false });
    }
	render() {
		const { getFieldDecorator } = this.props.form;
		return (	
		<div className="login-form">
			<Spin tip="Loading..." spinning={this.state.loginSpinning}>
				<div className="login-logo">
			        <img src={config.logoSrc} />
			        <span>Ant Design</span>
			    </div>
				<Form onSubmit={this.handleSubmit}>
			        <FormItem hasFeedback>
			          {getFieldDecorator('username', {
			            rules: [{ required: true, message: '请填写用户名' }],
			          })(
			            <Input size="large" placeholder="用户名" />
			          )}
			        </FormItem>
			        <FormItem hasFeedback>
			          {getFieldDecorator('password', {
			            rules: [{
			              required: true, message: '请填写密码',
			            }, {
			              validator: this.checkConfirm
			            }],
			          })(
			            <Input size="large" type="password" placeholder="密码" />
			          )}
			        </FormItem>
			        <FormItem>
			          <Button type="primary" htmlType="submit" size="large" loading={this.state.loginBtnLoading}>{this.state.loginBtnText}</Button>
			        </FormItem>
			        <div className="login-account">
			          <span>账号：sosout</span>
			          <span>密码：sosout</span>
			        </div>
		        </Form>
	        </Spin>
		</div>
		 
		);
	}
}

const Main = Form.create()(Login);

export default template({
	id: 'login', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});