var webpack = require('webpack'); // 打包工具
var WebpackDevServer = require('webpack-dev-server'); // 一个小型的Node.js Express服务器
var config = require('./webpack.config.dev'); // 正常编译配置

// 代理服务器
var proxy = [{
    path: '/*/*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*代替
    target: 'http://admin.sosout.com',
    host: 'admin.sosout.com',
    secure: false
}];

/* 下面是创建一个服务对象，固定写法 */

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath, // 文件相对引用路径，就用配置文件中配置的
    progress: true,
    stats: {
        colors: true
    },
    proxy
});

// 将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// 监听8888端口
server.listen(8888, function() {
    console.log('成功开启8888端口');
});
