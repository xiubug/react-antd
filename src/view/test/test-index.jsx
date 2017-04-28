import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { Router, Route, IndexRoute, browserHistory, History, Link } from 'react-router';
import { connect } from 'react-redux';
import { RenderData } from '../../component/mixin';

import { Breadcrumb, Icon } from 'antd';

// 测试列表
class ListItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        return (
            <li>
                <span>{this.props.id}</span>&nbsp;&nbsp;&nbsp;<span>{this.props.name}</span>&nbsp;&nbsp;&nbsp; 
                <span>{this.props.age}</span>&nbsp;&nbsp;&nbsp;<span>{this.props.index}</span>&nbsp;&nbsp;&nbsp;
            </li>
        );
    }
}


/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
        this.state = {
             data: []
        };
    }
    componentWillReceiveProps(nextProps){
        let {data} = nextProps.state;
        if (data) {
            this.state.data = data || [];
        }
    }
	render() {  
		return (
        <div className="home-container">
            <Breadcrumb className="home-bread">
                <Breadcrumb.Item>
                    <Link to="/home"><Icon type="home" /><span>主页</span></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Icon type="laptop" /><span>测试</span>
                </Breadcrumb.Item>
            </Breadcrumb> 
            <ul>
                {
                    this.state.data.length > 0 ? this.state.data.map((item, index) => {
                            return <ListItem key={index} {...item} index={index}/>
                        }) : null
                }      
            </ul>   
        </div>	
		);
	}
}

Main.contextTypes = {
    
};

export default RenderData({
    id: 'test',  //应用关联使用的redux
    component: Main //接收数据的组件入口
});