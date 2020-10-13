import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class lvlingyanyuren extends Component {
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
                    <Card title="绿菱烟雨人社会服务工作室" className="mg-top20">
						<h2>组织简介：</h2>
                        <p>提供服务、反映诉求、规范行为，改善社会组织发展环境，提升社会组织建设质量。配合业务主管部门建立与我社区发展水平相适应、布局合理、结构优化、功能到位、作用明显的社会组织发展体系和法制健全、行为规范、分类管理、分级负责的社会组织管理体系。运用专业化方法开展社会工作实务，努力实现新形势下化解社会矛盾，解决社会问题，维护社会稳定，促进社会和谐的工作目标。</p>
						<br></br>
						<h2>组织活动：</h2>
						<p>手工爱好都制作烟雨特色的菱形香囊作品</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E8%8F%B1%E5%BD%A2%E9%A6%99%E5%9B%8A.png"/>
						<br></br>
						<br></br>
						<p>工作室风采展示</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%A3%8E%E9%87%87%E5%B1%95%E7%A4%BA.png" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default lvlingyanyuren;
