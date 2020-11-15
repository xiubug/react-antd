import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class nanhu extends Component {
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
                    <Card title="南湖街道南湖社区自治管理服务中心" className="mg-top20">
						<h2>组织简介：</h2>
                        <p>南湖社区自治管理服务中心注册于2016年4月，以“创自治品牌，建和谐社区”为服务理念，以 “自我管理、自我教育、自我服务、自我监督”为服务宗旨，实行小区自治，发挥小区居民主人翁意识，积极行使居民群众当家作主的权利，逐步把小区建设成为环境优美、治安良好、生活便利、人际关系和谐的文明小区。南湖社区自治管理服务中心由社区牵头，做好居民自治管理工作。定期召开自治小区居民会议，商讨小区相关事项，对小区收支情况进行公示。整合社区资源，开展各种公益活动，提供社区服务。承接政府公共服务项目，推进社会综合治理。</p>
						<br></br>
						<h2>组织活动：</h2>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%A4%BE%E5%8C%BA%E8%87%AA%E6%B2%BB%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83-1.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%A4%BE%E5%8C%BA%E8%87%AA%E6%B2%BB%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83-2.jpg" />
						<br></br>
						<br></br>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%A4%BE%E5%8C%BA%E8%87%AA%E6%B2%BB%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83-3.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E7%A4%BE%E5%8C%BA%E8%87%AA%E6%B2%BB%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83-4.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default nanhu;
