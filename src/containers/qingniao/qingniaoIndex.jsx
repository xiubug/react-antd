import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class qingniao extends Component {
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
					<img height="7291" width="1621" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F%E7%A4%BE%E5%B7%A5-01.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default qingniao;
