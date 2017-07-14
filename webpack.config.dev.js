var path = require('path'); // node内置path模块
var webpack = require('webpack'); // webpack打包工具
<<<<<<< HEAD
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var os = require('os');
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length});
// var bundleConfig = require("./antd/dist/bundle-config.json");

// 定义地址
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '/antd/dist'); // 发布文件所存放的目录
=======
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html

var ROOT_PATH = path.resolve(__dirname); // 项目根路径
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目的src目录路径
var APP_FILE = path.resolve(APP_PATH, 'App'); // 项目的入口文件（即src/App.jsx）
var BUILD_PATH = path.resolve(ROOT_PATH, '/antd/dist'); //规定打包好的文件存放到此目录下(开发模式中，我们一般配置为最终生成1个bundle.js)
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            APP_FILE
        ]
    },
    output: {
        publicPath: '/antd/dist/', //编译好的文件，在服务器的路径,这是静态资源引用路径
        path: BUILD_PATH, //发布文件地址
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js'
    },
    module: {
        rules: [{
<<<<<<< HEAD
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=js'],
            include: [APP_PATH]
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=css'],
=======
            test: /\.js$/, // 解析.js,用babel解析器，webpack会自动加载我们配置的.babelrc文件
            exclude: function(path) {
                // 路径中含有 node_modules 的就不去解析。
                var isNpmModule = !!path.match(/node_modules/);
                return isNpmModule;
            },
            use: ['babel-loader'],
            include: [APP_PATH]
        }, {
            test: /\.css$/, // 解析.css,先执行css-loader,再执行style-loader
            exclude: function(path) {
                // 路径中含有 node_modules 的就不去解析。
                var isNpmModule = !!path.match(/node_modules/);
                return isNpmModule;
            },
            use: ExtractTextPlugin.extract({
                fallback:'style-loader', 
                use:['css-loader', 'postcss-loader']
            }),
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
            include: [APP_PATH]
        }, {
            test: /\.less$/, // 去掉exclude: /^node_modules$/和include: [APP_PATH]是为了babel-plugin-import按需加载antd资源
<<<<<<< HEAD
            use: ['happypack/loader?id=less']
=======
            use: ExtractTextPlugin.extract({
                fallback:'style-loader', 
                use:['css-loader', 'postcss-loader', 'less-loader']
            })
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
<<<<<<< HEAD
            exclude: /node_modules/,
=======
            exclude: function(path) {
                // 路径中含有 node_modules 的就不去解析。
                var isNpmModule = !!path.match(/node_modules/);
                return isNpmModule;
            },
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
            use: ['file-loader?name=[name].[ext]'],
            include: [APP_PATH]
        }, {
            test: /\.(png|jpg|gif)$/,
<<<<<<< HEAD
            exclude: /node_modules/,
=======
            exclude: function(path) {
                // 路径中含有 node_modules 的就不去解析。
                var isNpmModule = !!path.match(/node_modules/);
                return isNpmModule;
            },
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
            use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]'],
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            include: [APP_PATH]
        }, {
<<<<<<< HEAD
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: ['happypack/loader?id=jsx'],
            include: [APP_PATH]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境。 process.argv：当前进程的命令行参数数组。process.env：指向当前shell的环境变量，比如process.env.HOME。
=======
            test: /\.jsx$/, // 解析.jsx,用babel解析器，webpack会自动加载我们配置的.babelrc文件
            exclude: function(path) {
                // 路径中含有 node_modules 的就不去解析。
                var isNpmModule = !!path.match(/node_modules/);
                return isNpmModule;
            },
            use: ['jsx-loader', 'babel-loader'],
            include: [APP_PATH]
        }]
    },
    // postcss: [
    //     autoprefixer({
    //         browsers: [
    //             "> 1%",
    //             "not ie <= 8",
    //             "Chrome >= 45",
    //             "Firefox >= 20"
    //         ]
    //     })
    // ],
    /* 配置一些额外的webpack插件 */
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV) //定义环境
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于 path
<<<<<<< HEAD
            template: './src/template/index.html', //html模板路径
            // bundleName: bundleConfig.bundle.js,
=======
            template: './src/Template/index.html',
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
            favicon: './favicon.ico',
            hash: false,
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new webpack.NoEmitOnErrorsPlugin(), // 即使有错误也不中断运行
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            // verboseWhenProfiling:true,
            verbose: process.env.HAPPY_VERBOSE === '1',
            loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'],
            // debug:true
        }),
        new HappyPack({
            id: 'jsx',
            threadPool: happyThreadPool,
            // verboseWhenProfiling:true,
            verbose: process.env.HAPPY_VERBOSE === '1',
            loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader?cacheDirectory'],
            // debug:true
        }),
        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            // verboseWhenProfiling:true,
            verbose: process.env.HAPPY_VERBOSE === '1',
            loaders: ['style-loader', 'css-loader', 'postcss-loader'],
            // debug:true
        }),
        new HappyPack({
            id: 'less',
            threadPool: happyThreadPool,
            // verboseWhenProfiling:true,
            verbose: process.env.HAPPY_VERBOSE === '1',
            loaders: [ 'style-loader', 'css-loader', 'postcss-loader', 'less-loader' ],
            // debug:true
        }),
        // new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: require('./antd/dist/bundle.manifest.json')
        // })
    ],
    resolve: {
<<<<<<< HEAD
        extensions: ['.js', '.jsx', '.less', '.css'], //后缀名自动补全
=======
        modules: [
            APP_PATH,
            "node_modules"
        ],
        extensions: ['.js', '.jsx', '.less', '.css'] //在webpack打包时，自动匹配这些后缀名的文件
>>>>>>> ef46436ddacb7e0522f2cc0cab095a38d0a2e503
    }
};