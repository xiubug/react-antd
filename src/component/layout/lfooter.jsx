import React, { Component, PropTypes } from 'react';

import { config } from '../../config/config';

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
	render() {
		return (
			<Footer className="layout-footer">
	            { config.footerText }
	        </Footer>
		)
	}
}