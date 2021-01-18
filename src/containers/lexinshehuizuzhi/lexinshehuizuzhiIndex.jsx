import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class lexinshehuizuzhi extends Component {
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
					<img height="5409" width="1621" src="http://pontt9qvy.bkt.clouddn.com/1%E4%B9%90%E5%BF%83%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E7%AE%80%E4%BB%8B.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default lexinshehuizuzhi;
