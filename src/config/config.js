const config = {
	target: process.env.NODE_ENV !== 'production' ? '' : 'http://admin.sosout.com', //目标网站
    name: 'Ant Design Admin',
    prefix: 'antdAdmin',
    footerText: 'Ant Design Admin 版权所有 © 2017 由 sosout 支持',
    logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
    logoText: 'Antd Admin',
    needLogin: true
};

export { config };
