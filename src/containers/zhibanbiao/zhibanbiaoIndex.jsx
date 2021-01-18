import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import {Card,Row, Col,} from 'antd';
import { Table, Tag, Space } from 'antd';

import styles from './style/zhibanbiao.less';

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '时间',
        dataIndex: 'time',
    },
    {
        title: '联系人',
        dataIndex: 'contact',
    },
    {
        title: '电话',
        dataIndex: 'phone',
    },
];

const data = [
    {
        key: '1',
        name: '成长驿站社会组织服务中心',
        time: '每周一上午',
        contact: '刘丹青',
        phone: '13736850673',
    },
    {
        key: '2',
        name: '文星社区连心社会组织服务中心',
        time: '每周一下午',
        contact: '赵珊',
        phone: '13857351125',
    },
    {
        key: '3',
        name: '南湖社工服务社',
        time: '每周二',
        contact: '周林英',
        phone: '18268347430',
    },
    {
        key: '4',
        name: '乐心社会组织服务中心',
        time: '每周三上午',
        contact: '刘美琴',
        phone: '13516732202',
    },
    {
        key: '5',
        name: '民北社区雷锋角',
        time: '每周三下午',
        contact: '朱颖',
        phone: '18875872300',
    },
    {
        key: '6',
        name: '绿菱烟雨人社会服务工作室',
        time: '每周四',
        contact: '李炀',
        phone: '13732562879',
    },
    {
        key: '7',
        name: '温馨家园社工站',
        time: '每周五上午',
        contact: '冯毓',
        phone: '15858332937',
    },
    {
        key: '8',
        name: '“南湖家苑”失独家庭互助中心',
        time: '每周五下午',
        contact: '杨丽燕',
        phone: '13736421010',
    },
    {
        key: '9',
        name: '南湖街道老娘舅团队',
        time: '正常工作日',
        contact: '刘秀莲',
        phone: '18006730280',
    }
];

/* 以类的方式创建一个组件 */
class zhibanbiao extends Component {
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
				<Col span={20} className="mg-top20">
                    <img height="2719" width="1667" src="http://pontt9qvy.bkt.clouddn.com/%E8%BD%AE%E5%80%BC%E8%A1%A8-new.jpg"></img>
                </Col>
            </Row>
		</div>
		);
	}
}

export default zhibanbiao;
