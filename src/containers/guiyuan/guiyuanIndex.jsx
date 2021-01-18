import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class guiyuan extends Component {
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
					<img height="5258" width="1622" src="http://pontt9qvy.bkt.clouddn.com/%E5%98%89%E5%85%B4%E5%B8%82%E5%8D%97%E6%B9%96%E5%8C%BA%E5%8D%97%E6%B9%96%E8%A1%97%E9%81%93%E6%A1%82%E8%8B%91%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E8%81%94%E5%90%88%E4%BC%9A%E5%9B%BE%E7%89%87.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default guiyuan;
