import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store/store';

store.subscribe(() => { // 监听state变化
	console.log(store.getState());
});

render(
	<Provider store={store}>
		{route}
	</Provider>,
	document.body.appendChild(document.createElement('div'))
);