import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class lexinshehuizuzhi extends Component {
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
                    <Card title="万洲社区乐心社会组织服务中心" className="mg-top20">
						<h2>组织简介：</h2>
                        <p>完善残疾人社会组织内部治理结构的需要，有效树立残疾人社会组织形象地位的窗口，更规范地承接政府转移职能和购买服务，贯彻落实残疾人社会组织党建工作的要求。为更多的残疾人开展社会服务工作。让残疾朋友们建立起自信，融入社会。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>情系孤老 童心送暖</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%83%85%E7%B3%BB%E5%AD%A4%E8%80%81.png"/>
						<br></br>
						<p>为残障家庭拍摄全家福</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E5%85%A8%E5%AE%B6%E7%A6%8F.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default lexinshehuizuzhi;
