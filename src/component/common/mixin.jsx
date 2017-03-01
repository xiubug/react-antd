import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import pureRender from 'pure-render-decorator';
import { is, fromJS } from 'immutable';
import { Tool } from '../../config/tool';
import template from './template';

import { Spin } from 'antd'; // 用于页面和区块的加载中状态。

export {template};

/**
 * (加载动画)
 *
 * @class SpinLoad
 * @extends {Component}
 */
export class SpinLoad extends Component {
	render() {
		let { spinTip, spinSize } = this.props;
		return (
			<div className="example">
				<Spin size={spinSize} tip={spinTip} />
			</div>
		);
	}
}

SpinLoad.defaultProps = {
	spinTip: '',
	spinSize: 'large'
};