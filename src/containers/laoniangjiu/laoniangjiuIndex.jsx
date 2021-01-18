import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class laoniangjiu extends Component {
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
					<img height="6947" width="1622" src="http://pontt9qvy.bkt.clouddn.com/%E8%80%81%E5%A8%98%E8%88%85-new.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default laoniangjiu;
