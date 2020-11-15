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
				<Col span={20}>
                    <Card title="南湖街道桂苑社区社会组织联合会" className="mg-top20">
						<h2>组织简介：</h2>
                        <p>嘉兴市南湖区南湖街道桂苑社区社会组织联合会成立于2017年9月。本团体的业务范围：为老年人群提供专业社工服务；承接政府相关部门、企事业单位、社会组织委托进行相关项目开发和服务；培育、孵化辖区内各类社会组织，给他们提供场地支持、团队建设、项目辅导、资源整合等服务；培养壮大社会工作人才队伍。</p>
						<br></br>
						<h2>组织活动：</h2>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A1%82%E8%8B%91%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E8%81%94%E5%90%88%E4%BC%9A-1.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A1%82%E8%8B%91%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E8%81%94%E5%90%88%E4%BC%9A-2.jpg" />
						<br></br>
						<br></br>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A1%82%E8%8B%91%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E8%81%94%E5%90%88%E4%BC%9A-3.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A1%82%E8%8B%91%E7%A4%BE%E5%8C%BA%E7%A4%BE%E4%BC%9A%E7%BB%84%E7%BB%87%E8%81%94%E5%90%88%E4%BC%9A-4.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default guiyuan;
