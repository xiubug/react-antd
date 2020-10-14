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
				<Col span={20}>
                    <Card title="文星社区星连心" className="mg-top20">
						<img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E6%96%87%E6%98%9F%E7%A4%BE%E5%8C%BA%E6%98%9F%E8%BF%9E%E5%BF%83.jpg" />
						<h2>组织简介：</h2>
                        <p>2017年9月登记注册，服务内容：以服务对象的需要为出发和落脚点，挖掘服务对象潜能，调动社会资源，营造和谐生活氛围，促进服务对象和社会的融合。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>开展享受生活 品尝美食</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E5%93%81%E5%B0%9D%E7%BE%8E%E9%A3%9F.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default xinlianxin;
