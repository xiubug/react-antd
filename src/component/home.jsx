import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { Router, Route, IndexRoute, browserHistory, History, Link } from 'react-router';
import { connect } from 'react-redux';
import { renderData } from './common/mixin';
import { config } from '../config/config';

import styles from '../style/login.less';

import { Spin, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, message } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

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
		<ul>
            {
                this.state.data.length > 0 ? this.state.data.map((item, index) => {
                        return <ListItem key={index} {...item} index={index}/>
                    }) : null
            }      
        </ul>
		);
	}
}

Main.contextTypes = {
    
};

export default renderData({
    id: 'home',  //应用关联使用的redux
    component: Main, //接收数据的组件入口
    url: '/test/queryAll' //服务器请求的地址
});