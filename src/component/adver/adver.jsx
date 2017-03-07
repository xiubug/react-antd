import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { template } from '../common/mixin';

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
			广告管理
		</div>
		);
	}
}

Main.contextTypes = {
};

export default template({
	id: 'adver', // 应用关联使用的redex
	component: Main, // 接收数据的组件入口
	url: ''
});