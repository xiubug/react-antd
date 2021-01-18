import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class chunxitang extends Component {
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
					<img height="5128" width="1621" src="http://pontt9qvy.bkt.clouddn.com/%E6%A4%BF%E7%86%99%E5%A0%82.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default chunxitang;
