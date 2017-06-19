import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';

import Config from '../../config/index';

import { Layout } from 'antd';
const { Footer } = Layout;

/**
 * 公共底部
 *
 * @export
 * @class Lfooter
 * @extends {Component}
 */
export class Lfooter extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
	}
	shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (
			<Footer className="layout-footer">
	            { Config.footerText }
	        </Footer>
		)
	}
}