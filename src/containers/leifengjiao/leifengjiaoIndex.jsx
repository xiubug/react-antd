import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class Adver extends Component {
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
				<Col span={20}>
                    <Card title="民北社区雷锋角" className="mg-top20">
						<img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E6%B0%91%E5%8C%97%E7%A4%BE%E5%8C%BA%E9%9B%B7%E9%94%8B%E8%A7%92%E7%A4%BE%E4%BC%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4.jpg" />
						<h2>组织简介：</h2>
						<br></br>
                        <p>2017年9月登记注册，服务内容：敬老慰问活动；助残慰问活动；帮扶活动；新居民家庭教育；社工项目服务。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>农民工子女服务项目，和《“花young年华”新居民子女周末欢乐营》</p>
						
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default Adver;
