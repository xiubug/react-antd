import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import route from './router/route'; // 路由配置

import './style/common.less';

store.subscribe(() => { // 监听state变化
	console.log(store.getState());
});

render(
	<Provider store={store}>
		{route}
	</Provider>,
	document.body.appendChild(document.createElement('div'))
);