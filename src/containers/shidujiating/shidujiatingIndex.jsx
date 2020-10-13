import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class shidujiating extends Component {
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
                    <Card title="“南湖家苑”失独家庭互助中心" className="mg-top20">
                        <img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E5%A4%B1%E7%8B%AC%E5%AE%B6%E5%BA%AD%E4%BA%92%E5%8A%A9%E4%B8%AD%E5%BF%83.jpg" />
						<h2>组织简介：</h2>
                        <p>“南湖家苑”失独家庭互助中心成立于2015年，连续三年承接市、区级公益项目六个。2018年承接南湖区公益项目《情系你我他 共筑温馨家苑》失独家庭互助项目。项目通南湖家苑“情系你我他 共筑温馨家苑”失独家庭互助服务项目能惠及南湖街道43户失独家庭，以为失独家庭建立一个自助互助的平台，在社工的协助下，由失独家庭自我管理、自我服务，自我增能，助人自助，建立长效服务机制为目的，项目将满足失独老人的情感、生活及精神寄托需求，让更多的失独家庭走出阴霾，抱团取暖。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>失独家庭志愿者为残疾人、癌症患者开展各类志愿帮扶服务及保护河道和绿道的环境保护志愿活动。</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E4%BA%92%E5%8A%A9%E4%B8%AD%E5%BF%831.jpg"/>
						<br></br>
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E4%BA%92%E5%8A%A9%E4%B8%AD%E5%BF%832.jpg"/>
						<br></br>
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E4%BA%92%E5%8A%A9%E4%B8%AD%E5%BF%833.jpg"/>
						<br></br>   
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default shidujiating;
