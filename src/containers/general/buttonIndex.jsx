import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { is, fromJS } from 'immutable';
import { Icon, Row, Col, Card, Button, Radio } from 'antd';
const ButtonGroup = Button.Group;

// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		loading: false,
    		iconLoading: false,
    		delayLoading: false,
    		size: 'default'
    	};
    }
    handleSizeChange = (e) => {
    	this.setState({ size: e.target.value });
    }
    enterLoading = () => {
	    this.setState({ loading: true });
	}
	enterIconLoading = () => {
	    this.setState({ iconLoading: true });
	}
	delayLoading = () => {
	    this.setState({
	      delayLoading: true,
	    });
	    setTimeout(() => this.setState({
	      delayLoading: false,
	    }), 150);
	}
	render() {
		const size = this.state.size;
		return (	
		<div className="general-container">
			<Bcrumb title="按钮" />
			<Row type="flex" justify="space-between" align="top" gutter={16}>
            	<Col span={12}>
            		<Card title="幽灵按钮" bordered={false}>
				        <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p><br/>
					    <Row type="flex" align="top" gutter={16} style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
					    	<Col><Button type="primary" ghost>Primary Ghost</Button></Col>
					    	<Col><Button ghost>Default Ghost</Button></Col>
					    	<Col><Button type="dashed" ghost>Dashed Ghost</Button></Col>
					    </Row>
				    </Card>
            	</Col>
            	<Col span={12}>
            		<Card title="按钮类型" bordered={false}>
				        <p>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</p><br/>
				        <Row type="flex" align="top" gutter={16}>
					    	<Col><Button type="primary">Primary</Button></Col>
					    	<Col><Button>Default</Button></Col>
					    	<Col><Button type="dashed">Dashed</Button></Col>
					    	<Col><Button type="danger">Danger</Button></Col>
					    </Row>
				    </Card>
            	</Col>
            </Row><br/>
            <Row type="flex" justify="space-between" align="top" gutter={16}>
            	<Col span={12}>
            		<Card title="加载中状态" bordered={false}>
				        <p>添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。</p><br/>
			            <Row type="flex" align="top" gutter={16}>
					    	<Col><Button type="primary" loading>Loading</Button></Col>
					    	<Col><Button type="primary" size="small" loading>Loading</Button></Col>
				        </Row>
					    <br/>
				        <Row type="flex" align="top" gutter={16}>
					    	<Col><Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button></Col>
					    	<Col><Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me!</Button></Col>
					    	<Col><Button type="primary" loading={this.state.delayLoading} onClick={this.delayLoading}>Won&apos;t show loading</Button></Col>
					    </Row>
				        <br/>
				        <Row type="flex" align="top" gutter={16}>
					    	<Col><Button shape="circle" loading /></Col>
					    	<Col><Button type="primary" shape="circle" loading /></Col>
				        </Row> 
				    </Card>
            	</Col>
            	<Col span={12}>
            		<Card title="图标按钮" bordered={false}>
				        <p>当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。</p><br/>
					    <Row type="flex" align="top" gutter={16}>
					    	<Col><Button type="primary" shape="circle" icon="search" /></Col>
					    	<Col><Button type="primary" icon="search">Search</Button></Col>
					    	<Col><Button shape="circle" icon="search" /></Col>
					    	<Col><Button icon="search">Search</Button></Col>
					    </Row>
					    <br/>
					    <Row type="flex" align="top" gutter={16}>
					    	<Col><Button shape="circle" icon="search" /></Col>
					    	<Col><Button icon="search">Search</Button></Col>
					    	<Col><Button type="dashed" shape="circle" icon="search" /></Col>
					    	<Col><Button type="dashed" icon="search">Search</Button></Col>
					    </Row>
				    </Card>
            	</Col>
            </Row><br/>
            <Row type="flex" justify="space-between" align="top" gutter={16}>
            	<Col span={12}>
            		<Card title="按钮组合" bordered={false}>
				        <p>可以将多个 Button 放入 Button.Group 的容器中。通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。</p><br/>
					    <h4>Basic</h4><br/>
					    <Row type="flex" align="top" gutter={16}>
					    	<Col>
						    	<ButtonGroup>
							      <Button>Cancel</Button>
							      <Button type="primary">OK</Button>
							    </ButtonGroup>
					    	</Col>
					    	<Col>
					    		<ButtonGroup>
							      <Button disabled>L</Button>
							      <Button disabled>M</Button>
							      <Button disabled>R</Button>
							    </ButtonGroup>
					    	</Col>
					    	<Col>
					    		<ButtonGroup>
							      <Button type="primary">L</Button>
							      <Button>M</Button>
							      <Button>M</Button>
							      <Button type="dashed">R</Button>
							    </ButtonGroup>
					    	</Col>
					    </Row><br/>
					    <h4>With Icon</h4><br/>
					    <Row type="flex" align="top" gutter={16}>
					    	<Col>
					    		<ButtonGroup>
							      <Button type="primary">
							        <Icon type="left" />Go back
							      </Button>
							      <Button type="primary">
							        Go forward<Icon type="right" />
							      </Button>
							    </ButtonGroup>
					    	</Col>
					    	<Col>
					    		<ButtonGroup>
							      <Button type="primary" icon="cloud" />
							      <Button type="primary" icon="cloud-download" />
							    </ButtonGroup>
					    	</Col>
					    </Row>
				    </Card>
            	</Col>
            	<Col span={12}>
            		<Card title="按钮尺寸" bordered={false}>
				        <p>按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p><br/>
				        <Radio.Group value={size} onChange={this.handleSizeChange}>
				          <Radio.Button value="large">Large</Radio.Button>
				          <Radio.Button value="default">Default</Radio.Button>
				          <Radio.Button value="small">Small</Radio.Button>
				        </Radio.Group>
				        <br/><br/>
				        <Row type="flex" align="top" gutter={16}>
					    	<Col><Button type="primary" shape="circle" icon="download" size={size} /></Col>
					    	<Col><Button type="primary" icon="download" size={size}>Download</Button></Col>
					    	<Col><Button type="primary" size={size}>Normal</Button></Col>
					    </Row>
				        <br />
				        <Button.Group size={size}>
				          <Button type="primary">
				            <Icon type="left" />Backward
				          </Button>
				          <Button type="primary">
				            Forward<Icon type="right" />
				          </Button>
				        </Button.Group>
				    </Card>
            	</Col>
            </Row>
		</div>
		);
	}
}

export default Main;


