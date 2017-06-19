import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import styles from './style/bcrumb.less';

/**
 * 公共面包屑
 *
 * @export
 * @class Bcrumb
 * @extends {Component}
 */
export class Bcrumb extends Component {
	constructor(props) {
		super(props); //后才能用this获取实例化对象
	}
	render() {
		return (
			<Breadcrumb className="bread-crumb">
                <Breadcrumb.Item>
                    <Link to="/home"><Icon type="home" /><span>主页</span></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Icon type={this.props.icon ? this.props.icon : 'laptop'} /><span>{ this.props.title }</span>
                </Breadcrumb.Item>
            </Breadcrumb> 
		)
	}
}