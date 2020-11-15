import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class jinlin extends Component {
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
                    <Card title="南湖区近邻社会工作服务发展中心" className="mg-top20">
						<img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BBlogo.png" />
						<h2>组织简介：</h2>
                        <p>嘉兴市南湖区近邻社会工作服务发展中心是2016年注册于嘉兴市南湖区民政局的一家民办非企业机构。坚持以人为本，扎根基层，服务社群为的宗旨，依托专业的社会工作者开展服务工作、助力社区发展，营造熟人社区，提供项目化、专业化的综合服务。目前机构有工作人员7名，财会独立，专职社工5人，取得国家级社会工作师资格、国家级心理咨询师资格。</p>
						<br></br>
						<h2>组织活动：</h2>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BB1.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BB2.jpg" />
						<br></br>
						<br></br>
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BB3.jpg" />						
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BB4.jpg" />
						<br></br>
						<br></br>
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BB5.jpg" />
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%BF%91%E9%82%BB6.jpg" />
                    </Card>
                </Col>
            </Row>
		</div>
		);
	}
}

export default jinlin;
