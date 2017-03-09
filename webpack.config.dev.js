var path = require('path'); // node内置path模块
var webpack = require('webpack'); // webpack打包工具
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

var ROOT_PATH = path.resolve(__dirname); // 项目根路径
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目的src目录路径
var APP_FILE = path.resolve(APP_PATH, 'app'); // 项目的入口文件（即src/app.jsx）
var BUILD_PATH = path.resolve(ROOT_PATH, '/antd/dist'); //规定打包好的文件存放到此目录下(开发模式中，我们一般配置为最终生成1个bundle.js)

module.exports = {
    devtool: 'cheap-module-eval-source-map', // 打包后，代码都被压缩了，如果报错看不出是在哪一行报的错，配置这个就是为了解决这个问题
    entry: {
        app: APP_FILE // 入口文件
    },
    output: {
        publicPath: '/antd/dist', // 这是在启动webpack-dev-server时，app.js的引用路径应该相对于此路径，即在index.html中：<script type="text/javascript" src="/antd/dist/app.js"></script>而且所有的url地址，比如css中的背景图片，html中的img的src都会自动变成：/antd/dist/*****
        path: BUILD_PATH, // 将打包好的文件放在此路径下，开发模式中只会在内存中存在，不会在此路径生成真正的文件
        filename: '[name].js', // 编译后的文件名字，对应于entry里面生成出来的文件名
        chunkFilename: '[name].[chunkhash:5].min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/, // 解析.js,用babel解析器，webpack会自动加载我们配置的.babelrc文件
            exclude: /^node_modules$/,
            loader: 'babel',
            include: [APP_PATH]
        }, {
            test: /\.css$/, // 解析.css,先执行css-loader,再执行style-loader
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer']),
            include: [APP_PATH]
        }, {
            // 解析.less,先执行css-loader,再执行style-loader
            // 注意：连node_modules中的也一并解析(因为蚂蚁金服ui框架的样式文件就存在此目录下)
            test: /\.less$/, // 去掉exclude: /^node_modules$/和include: [APP_PATH]是为了babel-plugin-import按需加载antd资源
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
        }, {
            // 其他各类文件处理，打包后会把这些文件挪到打包好的文件夹中
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
            include: [APP_PATH]
        }, {
             // 处理图片，这里配置的是，小于8192字节的图片变成base64编码，其余图片最终会生成一个images文件夹，存放其中
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            include: [APP_PATH]
        }, {
            test: /\.jsx$/, // 解析.jsx,用babel解析器，webpack会自动加载我们配置的.babelrc文件
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel'],
            include: [APP_PATH]
        }]
    },
    /* 配置一些额外的webpack插件 */
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于 path
            template: './src/template/index.html',
            hash: false
        }),
        new ExtractTextPlugin('[name].css')
    ],
    /* 配置额外的自定义方案 */
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css'] //在webpack打包时，自动匹配这些后缀名的文件
    }
};
