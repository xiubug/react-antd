import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class shidujiating extends Component {
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
					<img height="4580" width="1621" src="http://pontt9qvy.bkt.clouddn.com/%E2%80%9C%E5%8D%97%E6%B9%96%E5%AE%B6%E8%8B%91%E2%80%9D%E5%A4%B1%E7%8B%AC%E4%BA%92%E5%8A%A9%E4%B8%AD%E5%BF%83.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default shidujiating;
