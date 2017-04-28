const Main = {
	target: process.env.NODE_ENV !== 'production' ? 'http://admin.sosout.com' : 'http://admin.sosout.com', //目标网站
    name: 'Ant Design Admin',
    prefix: 'antdAdmin',
    footerText: 'Ant Design Admin 版权所有 © 2017 由 sosout 支持',
    logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
    logoText: 'Antd Admin',
    needLogin: true,
    /**
	 * 参数格式化
	 * 
	 * @param {any} data
	 * @returns
	 */
	paramFormat(data) {
		let paramArr = [];
		let paramStr = '';
		for(let attr in data) {
			paramArr.push(attr + '=' + data[attr]);
		}
		paramStr = paramArr.join('&');
		return paramStr ? '?' + paramStr : paramStr;
	},
    /**
	 * 本地数据存储或读取
	 * 
	 * @param {any} key
	 * @param {any} value
	 * @returns
	 */
	localItem(key, value) {
		if(arguments.length == 1) {
			return localStorage.getItem(key) && localStorage.getItem(key) !== 'null' ? localStorage.getItem(key) : null;
		} else {
			return localStorage.setItem(key, value);
		}
	},
	/**
	 * 删除本地数据
	 * 
	 * @param {any} k
	 * @returns
	 */
	removeLocalItem(key) {
		if(arguments.length == 1) {
			return localStorage.removeItem(key);
		} else {
			return localStorage.clear();
		}
	}
};

export default Main;
