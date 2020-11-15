import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class chunxitang extends Component {
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
                    <Card title="椿熙堂" className="mg-top20">
                        <img height="50" width="100" src="http://pontt9qvy.bkt.clouddn.com/LOGO.jpg" />
						<h2>组织简介：</h2>
                        <p>椿熙堂是专注于居家和社区“智慧养老”服务运营的专业品牌，由上海椿祺集投资管理有限公司于2014年成立。为解决中国日益严重的老龄化社会的养老服务问题，椿熙堂基于“让长者乐享生活”的价值观，以及“原居安老”中国式养老的特点，致力于用互联网、物联网的先进理念，以专业化的服务标准和规范，专注于居家和社区养老服务，向品牌化、连锁化和规模化发展，努力为老年人的乐享生活做出贡献。</p>
						<br></br>
						<h2>组织活动：</h2>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A4%BF%E7%86%99%E5%A0%82-1.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A4%BF%E7%86%99%E5%A0%82-2.jpg" />
						<br></br>
						<br></br>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A4%BF%E7%86%99%E5%A0%82-3.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A4%BF%E7%86%99%E5%A0%82-4.jpg" />
                        <br></br>
						<br></br>
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%A4%BF%E7%86%99%E5%A0%82-5.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default chunxitang;
