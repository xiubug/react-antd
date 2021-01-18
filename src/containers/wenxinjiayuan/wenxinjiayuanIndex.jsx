import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class wenxinjiayuan extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (	
		<div>
			<Row>
				<Col span={20} className="mg-top20">
                    <img height="4645" width="1668" src="http://pontt9qvy.bkt.clouddn.com/%E6%B8%A9%E9%A6%A8%E5%AE%B6%E5%9B%AD-new.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default wenxinjiayuan;
