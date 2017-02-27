const target = process.env.NODE_ENV !== 'production' ? '' : 'http://dev.fe.ptdev.cn'; //目标网站

const config = {
    name: 'Ant Design Admin',
    prefix: 'antdAdmin',
    footerText: 'Ant Design Admin 版权所有 © 2016 由 zuiidea 支持',
    logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
    logoText: 'Antd Admin',
    needLogin: true
};

export {
    target,
    config
};
