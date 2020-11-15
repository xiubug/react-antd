import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';

/* 以类的方式创建一个组件 */
class qingniao extends Component {
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
                    <Card title="青鸟社工" className="mg-top20">
						<img height="50" width="50" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9FLOGO.png" />
						<h2>组织简介：</h2>
                        <p>青鸟社工为全国社会工作示范单位，AAAA级社会组织。下设：嘉兴市青鸟社会服务中心、嘉兴市南湖区青鸟社会服务发展中心、平湖市青扬社工服务中心、舟山市青洋社工研究发展中心。机构以长三角中心城市嘉兴为本部，辐射长三角，面向全国。</p>
						<br></br>
                        <h2>服务体系：</h2>
                        <p>一个督导体系：建立一个测评督导体系，依托强大的团队资源为各地市、街道开展社会工作督导、培训、评估，辐射浙江省及周边区域，目前督导项目150余个，测评项目100余次，培训课程覆盖社会工作领域、社区社会工作领域、养老服务领域、专项志愿服务领域。</p>
						<p>两个服务模块：长期进行长者服务和青少年服务领域，以健全长者、特殊长者、半失能长者及家庭进行专业社会工作服务，并取得2016年中央财政支持的失独家庭专业社工服务；长期进行流动儿童、留守儿童（2015年应团中央、团省委邀约为河南楼下村艾滋病儿童进行为期15天的暑期社会服务工作）、自闭症儿童及家庭的社会倡导、社会技能培训及心理介入。</p>
                        <p>三项研发领域：机构通过五年的社会工作实践及丰富的工作技巧，不断研发社会工作领域、社区社会工作领域、志愿者志愿服务领域的培训及研究发展，目前分别建立了养老社会工作理论体系建设及可视化宣传体系、青少年社会工作理论体系建设及可视化宣传体系、社区社会工作及社会创新治理层面的理论体系建设。</p>
                        <p>四个区域协作：机构常年与香港、台湾专业、自身社工及社工机构建立督导协作，积极探索及学习先进社会工作理念；与广州、深圳、佛山全国知名社工机构及资深社工建立机构协作，引领机构全面发展；与长三角各级政府、社会组织建立督导、培育、协作伙伴关系，积极推进区域化社会工作发展；与内陆地区建立督导测评、培育体系，引领其他地区行业发展。</p>
                        <p>五类专项服务：建立了拥有476人组成的强大专项志愿者团队，分别在长者服务、残障服务、自闭症服务、阅读倡导、青少年服务领域中发挥着积极作用，每类服务团队拥有明晰的组织架构、服务流程、规章制度并开始向周边城市进行复制延伸。</p>
                        <br></br>
                        <h2>组织活动：</h2>
						<p>团队风采</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E9%9D%92%E9%B8%9F%E5%9B%A2%E9%98%9F.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E9%9D%92%E9%B8%9F%E5%BF%97%E6%84%BF%E8%80%85%E9%A3%8E%E9%87%87.JPG" />
						<br></br>
						<br></br>
						<p>服务风采</p>
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E4%B8%BA%E8%80%81%E6%9C%8D%E5%8A%A1.jpg" />
						<img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E4%B8%AD%E5%A4%AE%E8%B4%A2%E6%94%BF%E6%94%AF%E6%8C%81%E9%A1%B9%E7%9B%AE%E2%80%9C%E4%B8%89%E5%8F%B6%E8%8D%89%E5%85%B3%E7%88%B1%E5%A4%B1%E7%8B%AC%E5%AE%B6%E5%BA%AD%E7%A4%BE%E4%BC%9A%E5%B7%A5%E4%BD%9C%E6%9C%8D%E5%8A%A1%E2%80%9D%E9%A1%B9%E7%9B%AE.JPG" />
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E4%BC%98%E6%8A%9A%E7%A4%BE%E4%BC%9A%E6%9C%8D%E5%8A%A1%E7%A4%BE%E5%8C%BA%E6%B4%BB%E5%8A%A8.JPG" />
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E7%89%B9%E6%AE%8A%E4%BA%BA%E7%BE%A4%E6%9C%8D%E5%8A%A1.JPG" />
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E9%9D%92%E9%B8%9F%E7%A4%BE%E5%B7%A5%E5%80%A1%E5%AF%BC%E8%87%AA%E9%97%AD%E7%97%87%E5%85%B3%E7%88%B1.JPG" />
                        <img height="300" width="400" src="http://pontt9qvy.bkt.clouddn.com/%E9%9D%92%E9%B8%9F-%E9%9D%92%E9%B8%9F%E7%A4%BE%E5%B7%A5%E5%BC%80%E5%B1%95%E4%B8%93%E4%B8%9A%E6%9C%8D%E5%8A%A1%E5%9F%B9%E8%AE%AD.jpg" />
                    </Card> 
                </Col>
            </Row>
		</div>
		);
	}
}

export default qingniao;
