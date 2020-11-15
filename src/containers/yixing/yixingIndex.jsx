import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class yixing extends Component {
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
                    <Card title="南湖街道益行社会组织服务中心" className="mg-top20">
						<h2>组织简介：</h2>
                        <p>南湖街道益行社会组织服务中心成立于2019年12月，是社区社会组织。业务范围包括：培育公益民间团体组织；培养壮大社会工作队伍；为困难人群提供专业的社工服务；承接政府、企事业单位、社会组织委托，进行相关项目的开发。目前承接的项目是南湖街道“益心益智”残疾人精神慰藉公益项目，通过组织残疾人志愿者队伍，发扬残疾人“自治”主人翁意识，参与社区事务，建立残疾人“自强、自立”心理康复。</p>
						<br></br>
						<h2>组织活动：</h2>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%9B%8A%E8%A1%8C%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87-1.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%9B%8A%E8%A1%8C%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87-2.jpg" />
						<br></br>
						<br></br>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%9B%8A%E8%A1%8C%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87-3.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%9B%8A%E8%A1%8C%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87-4.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default yixing;
