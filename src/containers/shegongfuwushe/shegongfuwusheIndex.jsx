import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class shegongfuwushe extends Component {
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
					<img height="3486" width="1622" src="http://pontt9qvy.bkt.clouddn.com/1%E5%8D%97%E6%B9%96%E7%A4%BE%E5%B7%A5%E6%9C%8D%E5%8A%A1%E7%A4%BE.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default shegongfuwushe;
