import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class shegongfuwushe extends Component {
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
                    <Card title="南湖社工服务社" className="mg-top20">
                        <img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E5%8D%97%E6%B9%96%E5%8C%BA%E5%8D%97%E6%B9%96%E7%A4%BE%E5%B7%A5%E6%9C%8D%E5%8A%A1%E7%A4%BE.jpg" />
						<h2>组织简介：</h2>
                        <p>嘉兴市南湖区南湖社工服务社成立于2011年2月，由南湖街道社会事业服务中心和嘉兴市亲情保洁服务有限公司共同发起，旨在提高社会工作者的职业素质和专业水平，整合社会资源，运用专业化方法开展社会工作实务，努力实现新形势下化解社会矛盾，解决社会问题，维护社会稳定，促进社会和谐的工作目标。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>抗击疫情——社工与你同行</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E6%8A%97%E5%87%BB%E7%96%AB%E6%83%85.jpg"/>
						<br></br>
						<br></br>
						<p>社工日的圆桌工作坊活动</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E5%9C%86%E6%A1%8C%E5%B7%A5%E4%BD%9C%E5%9D%8A%E6%B4%BB%E5%8A%A8.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default shegongfuwushe;
