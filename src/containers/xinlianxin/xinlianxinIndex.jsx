import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class xinlianxin extends Component {
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
					<img height="4578" width="1622" src="http://pontt9qvy.bkt.clouddn.com/1%E6%96%87%E6%98%9F%E7%A4%BE%E5%8C%BA%E8%BF%9E%E5%BF%83.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default xinlianxin;
