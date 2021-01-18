import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class leifengjiao extends Component {
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
					<img height="5832" width="1621" src="http://pontt9qvy.bkt.clouddn.com/1%E9%9B%B7%E9%94%8B%E8%A7%92%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default leifengjiao;
