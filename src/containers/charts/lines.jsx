import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';

// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

// 引入折线图
import LineChart from '../../component/echarts/lineChart';

/* 以类的方式创建一个组件 */
class Lines extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
        const data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
		return (	
            <div className="lines-container">
                <Bcrumb title="折线图" icon="line-chart" />
                <Row>
                    <Col span={24}>
                        <Card title="尝试拖动这些点" className="mg-top20">
                            <LineChart data={data} />
                        </Card>
                    </Col>
                </Row>
            </div>
		);
	}
}

export default Lines;
