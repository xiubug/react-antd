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
				<Col span={20}>
                    <Card title="成长驿站社会组织服务中心" className="mg-top20">
						<h2>组织简介：</h2>
                        <p>2019年12月登记，服务内容：运用社会工作专业理念和方法为社区青少年成长指导、预防解决青少年问题，促进其全面健康发展。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>垃圾分类新时尚•燃爆绿色“家”油站</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BB1.jpg"/>
						<br></br>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E5%9E%83%E5%9C%BE%E5%88%86%E7%B1%BB2.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default chengzhangyizhan;
