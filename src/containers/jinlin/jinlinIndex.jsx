import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class jinlin extends Component {
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
					<img height="3900" width="1622" src="http://pontt9qvy.bkt.clouddn.com/%E5%98%89%E5%85%B4%E5%B8%82%E5%8D%97%E6%B9%96%E5%8C%BA%E8%BF%91%E9%82%BB%E7%A4%BE%E4%BC%9A%E5%B7%A5%E4%BD%9C%E6%9C%8D%E5%8A%A1%E5%8F%91%E5%B1%95%E4%B8%AD%E5%BF%83.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default jinlin;
