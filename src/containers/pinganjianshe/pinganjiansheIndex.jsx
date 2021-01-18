import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class pinganjianshe extends Component {
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
                    <img height="5470" width="1667" src="http://pontt9qvy.bkt.clouddn.com/%E5%B9%B3%E5%AE%89%E5%BB%BA%E8%AE%BE-new.jpg"></img>
                    <video width="1667" preload="auto" controls playsinline autoplay muted loop src="http://pontt9qvy.bkt.clouddn.com/%E4%BD%A0%E7%9A%84%E6%A8%A1%E6%A0%B720200115.mp4"></video>
                </Col>
            </Row>
		</div>
		);
	}
}

export default pinganjianshe;
