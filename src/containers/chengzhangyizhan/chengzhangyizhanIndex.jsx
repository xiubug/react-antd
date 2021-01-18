import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class chengzhangyizhan extends Component {
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
					<img height="5257" width="1622" src="http://pontt9qvy.bkt.clouddn.com/%E4%BA%91%E9%83%BD%E7%A4%BE%E5%8C%BA%E6%88%90%E9%95%BF%E9%A9%BF%E7%AB%99%E5%B7%A5%E4%BD%9C%E5%AE%A4.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default chengzhangyizhan;
