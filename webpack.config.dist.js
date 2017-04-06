var path = require('path'); // 为了得到项目根路径
var webpack = require('webpack'); // webpack核心
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 为了单独打包css
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //根据模板生成最终html文件

var ROOT_PATH = path.resolve(__dirname); // 项目根路径
var APP_PATH = path.resolve(ROOT_PATH, 'src'); // 项目src目录
var APP_FILE = path.resolve(APP_PATH, 'app'); // 项目的入口文件（即src/app.jsx）
var BUILD_PATH = path.resolve(ROOT_PATH, 'antd/dist'); // 发布文件所存放的目录

module.exports = {
    entry: {
        app: APP_FILE, // 需要被打包的文件，就这个入口文件
        common: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'redux-thunk',
            'immutable'
        ]
    },
    output: {
        publicPath: '/dist/', // 在生成的html中，文件的引入路径会相对于此地址，生成的css中，以及各类图片的URL都会相对于此地址
        // 因为打包后的所有文件，是要交给后台程序员，然后跟后台程序一起，组装成一个完整的项目，上线后，肯定有一个网址来访问，比如: www.test.com; 
        // 那么前端代码中所有的URL地址，都是相对于这个网址而言的，所以这里配置publicPath为‘/’,比如首页的路径就是www.test.com/home,图片test.jpg的访问路径就是www.test.com/images/test.jpg
        // 最关键的是路由跳转，我们之后要配置react路由，比如这里配置的publicPath是‘/’,那路由中route访问主页，就应该配置为：
        // <Route path="/home" component={homeContainer} />
        // 又比如publicPath配置的是'/xxx', route就应该是：
        // <Route path="/xxx/home" component={homeContainer} />
        // 一般就配置为'/',因为一个项目上线后就会有一个顶级域名指向它，但我们自己测试的时候，比如你最终打包了，然后把代码放到tomcat中运行，tomcat访问肯定就是:http://localhost:8888/myreact,这不是顶级域名，你就应该配置publicPath为‘/myreact’,路由中也相应配置为/myreact/home
        path: BUILD_PATH, // 将文件打包到此目录下
        filename: '[name].js', // 最终生成的文件名字，项目中为app.jsx,最终也会叫app.js
        chunkFilename: '[name].[chunkhash:5].min.js' // 这是配置一些非入口文件生成的最终文件名字，比如你用了代码分割，按需加载，把你的项目中某些文件单独打包了，就会用到这个。我们这里只有一个app.js,所以这个暂时用不上
    },
    module: {
        loaders: [{
            test: /\.js$/, // 解析.js
            exclude: /^node_modules$/,
            loader: 'babel'
        }, {
            test: /\.css$/, // 解析.css,注意这里要用这个插件作为loader,最后才能生成单独的css文件
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer']) // 用这种方式写的，表示此类文件单独打包成一个css文件
        }, {
            // 解析less,原理同上
            test: /\.less$/, // 去掉exclude: /^node_modules$/是为了babel-plugin-import按需加载antd资源
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/, // 解析各种非图片文件
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            // 解析图片，小于8kb的转换成base64
            // 注意配种中的name,就是生成到了images文件夹下
            test: /\.(png|jpg|gif)$/, 
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel']
        }]
    },
     /* 额外的插件 */
    plugins: [
        new webpack.DefinePlugin({ // 一定要配置这个，这个是为了告诉webpack，当前用什么模式打包代码，production生产模式，dev开发模式
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new CleanPlugin(['antd'], {
          root: ROOT_PATH,
          verbose: true,
          dry: false
        }),
        // 此插件详细教程 http://www.cnblogs.com/haogj/p/5160821.html
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: '../index.html', //生成的html存放路径，相对于（比如前面配置的BUILD_PATH是“build/dist”,即index.html会生成到build下，其他文件会打包到build/dist下）
            template: './src/template/index.html', //html模板路径
            inject: 'body', // 是否将js放在body的末尾
            hash: true, // 是否为本页面所有资源文件添加一个独特的hash值
        }),
        // 配置了这个插件，再配合上面loader中的配置，将所有样式文件打包为一个单独的css文件
        new ExtractTextPlugin('[name].css'),
        // 提取那些公共的模块、代码打包为一个单独的js文件
        // 下面这个方法第3个参数是自动去匹配，webpack遍历所有资源，发现是模块的，而且这个模块不是在src目录中的，就提取到公共js中
        // 即把所有node_modules中用到的包都单独打包到一个js中，如果有css,还会单独生成一个vendors.css文件
        new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
        // Uglify 加密压缩源代码
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // 删除代码中所有注释
            },
            compress: {
                warnings: false // 估计是不输出警告信息之类的
            }
        })
    ],
    // 配置额外的解决方案
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css'] //后缀名自动补全
    }
};
