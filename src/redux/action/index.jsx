import fetch from 'isomorphic-fetch'; // 基于Fetch的语法，在Node端基于http库实现的同构应用的 isomorphic-fetch。
import { Config } from '../../component/mixin';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

const target = Config.target;

// 开始获取数据
const requestPosts = path => {
	return {
		type: REQUEST_POSTS,
		path
	}
}

// 获取数据成功
const receivePosts = (path, json) => {
	return {
		type: RECEIVE_POSTS,
		path,
		json
	}
}

// 获取数据成功
const getDataSuccess = (path, json, success, name) => {
	return {
		type: GET_DATA_SUCCESS,
		path,
		json,
		success,
		name
	}
}

// 手动调用获取数据的action
export const getData = (path, postData, success, name, method='GET') => {
	let url = target + path + Config.paramFormat(postData);
	return dispatch => {
		return fetch(url, {
			method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => dispatch(getDataSuccess(path, json, success, name)))
		.catch(error => console.log(error))
	}
}

// 页面初次渲染时Get方式获取数据
export const fetchGets = (path, postData) => {
	let url = target + path + Config.paramFormat(postData);
	return dispatch => {
		dispatch(requestPosts(postData));
		return fetch(url, {
			mode: 'cors',
			'Content-Type': 'application/json'
		})
		.then(response => {
			if(response.ok) {
				response.json().then(json => dispatch(receivePosts(path, json)))
			} else {
				console.log('status', response.status);
			}
		})
		.catch(error => console.log(error));
	}
}  
