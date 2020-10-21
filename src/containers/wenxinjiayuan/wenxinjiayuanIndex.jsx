import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class wenxinjiayuan extends Component {
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
                    <Card title="南湖区温馨家园社工站" className="mg-top20">
						<img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E6%96%87%E6%98%9F%E7%A4%BE%E5%8C%BA%E6%98%9F%E8%BF%9E%E5%BF%83.jpg" />
						<h2>组织简介：</h2>
                        <p>嘉兴市南湖区温馨家园社工站成立于2013年8月，是由南湖区妇联、嘉兴市阳光家庭社工事务所联合创建的专业社工服务站，社工站分别在南湖区矛盾纠纷联调中心和嘉兴市阳光家庭社工事务所两处挂牌设点，也是首批进入南湖区社会组织培育中心的单位。社工站依托专业的社会工作者为南湖区家庭及妇女儿童提供项目化、专业化、社会化的综合服务，坚持以“以人为本、助人自助”的服务理念，帮助南湖区有需要的妇女及家庭解决问题，发挥潜能，构建社会互助互爱的支持网络，营造健康和谐的家庭环境。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>社工站略影</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%B8%A9%E9%A6%A8%E5%AE%B6%E5%9B%AD.jpg" />
                        <br></br>
                        <br></br>
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%B8%A9%E9%A6%A8%E5%AE%B6%E5%9B%AD2.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default wenxinjiayuan;
