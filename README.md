# react-antd(新版后台很快就与大家见面了)
[![React Native](https://img.shields.io/badge/react-^15.3.2-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Redux](https://img.shields.io/badge/redux-^4.4.5-yellowgreen.svg?style=flat-square)](https://github.com/reactjs/redux)
[![Redux Immutablejs](https://img.shields.io/badge/immutablejs-^0.0.8-orange.svg?style=flat-square)](https://github.com/indexiatech/redux-immutablejs)
[![Ant Design](https://img.shields.io/badge/ant--design-^2.7.2-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)

[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
## 前言
>  本工程主要基于react + redux + immutable + less + ES6/7 + webpack + fetch + react-router + antd(1.x)实现的SPA后台管理系统模板。

>  如果觉得不错的话，请star一下吧 😊

>  编码时间：8:00——9:30, 下班时间——24:00，其他时间要工作。代码未优化，处女座代码必须要优化。由于代码延后，先向大家说声抱歉。您有什么问题可以私信我segmentfault。

[线上demo](http://antd.sosout.com/)

## 关于我自己

>  使用技术： react + redux + immutable + less + ES6/7 + webpack + fetch + react-router + antd(1.x)

>  项目说明： 此项目是本人空余时间搭建的。希望大家提供宝贵的意见和建议，谢谢。

>  JS/React/Vue/Angular前端群： 599399742

>  邮&emsp;&emsp;&ensp;箱： sosout@139.com

>  个人网站： http://www.sosout.com/

>  个人博客： http://blog.sosout.com/

>  个人简书： http://www.jianshu.com/users/23b9a23b8849/latest_articles

>  segmentfault：https://segmentfault.com/u/sosout

### 下载

```
# git clone

git clone https://github.com/sosout/react-antd.git

cd react-antd
```

### 安装
```bush
// 安装前请先确保已安装node和npm
// 需要提前在全局安装webpack和webpack-dev-server,如果已安装请忽略
npm install webpack -g
npm install webpack-dev-server -g

// 安装成功后,再安装依赖
npm install
```
### 运行
```bush
npm run dev （正常编译模式，注意：index.html里必须手动引用app.css，<link href="/antd/dist/app.css" rel="stylesheet" />，否则没有样式）

npm run hot （热替换编译模式，注意：热替换模式下index.html里去掉引用app.css）
  
npm run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）
```

### 访问
在浏览器地址栏输入[http://127.0.0.1:8888](http://127.0.0.1:8888)

### 目标功能
- [x] 登录页面
- [x] 全站布局
- [x] 全站路由
- [ ] 对接接口，优化代码(冗余代码，不规则写法，界面样式)
- [ ] 后台系统常用场景会逐个完善

####历史更新
  *2017.02.20*

  	1. 初始化项目目录;

  	2. webpack配置完成; 

  	3. 登录退出;

  	4. 整体布局;

  	5. 菜单映射路由;
    
# 性能优化

## Immutable 详解及 React 中实践 (https://github.com/camsong/blog/issues/3)

## react 实现pure render的时候，bind(this)隐患
```javascript
export default class Parent extends Component {
...
  render() {
    const {name,age} =this.state;
    return (
      <div>
        <Child name={name} age={age} onClick={this._handleClick.bind(this)}></Child>//bug 所在
      </div>
    )
  }
...
}
```
发现一个问题，对于Child这个子组件来说，在父组件re－render的时候，即使Child得前后两个props都没改变，它依旧会re－render。。即使用immutable.js也不好使。。。原来啊，父组件每次render，_handleClick都会执行bind(this) 这样_handleClick的引用每次都会改。。所以Child前后两次props其实是不一样的。。
那怎么办？把bind（this）去掉？不行 还必须得用。真正的答案是 让父组件每次render 不执行bind（this），直接提前在constructor执行好，修改之后
```javascript
export default class Parent extends Component {
  constructor(props){
    super(props)
    this._handleClick=this._handleClick.bind(this)//改成这样
  }
  render() {
    const {name,age} =this.state;
    return (
      <div>
        <Child name={name} age={age} onClick={this._handleClick}></Child>
      </div>
    )
  }
...
}
```
## 子组件跟随父组件re－render
想象一下这种场景，一个父组件下面一大堆子组件。然后呢，这个父组件re－render。是不是下面的子组件都得跟着re－render。可是很多子组件里面是冤枉的啊！！很多子组件的props 和 state 然而并没有改变啊！！虽然virtual dom 的diff 算法很快。。但是性能也不是这么浪费的啊！！
```javascript
class Child  extends Component {
  render() {
    console.log("我re-render了");
    const {name,age} = this.props;

      return (
        <div>
          <span>姓名:</span>
          <span>{name}</span>
          <span> age:</span>
          <span>{age}</span>
        </div>
      )
  }
}
const Person = pureRender(Child);
```
pureRender其实就是一个函数，接受一个Component。把这个Component搞一搞，返回一个Component看他pureRender的源代码就一目了然
```javascript
function shouldComponentUpdate(nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState);
}

function pureRende(component) {
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
}
module.exports = pureRender;
```
pureRender很简单，就是把传进来的component的shouldComponentUpdate给重写掉了，原来的shouldComponentUpdate，无论怎样都是return ture，现在不了，我要用shallowCompare比一比，shallowCompare代码及其简单，如下
```javascript
function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}  
```
一目了然。分别拿现在props&state和要传进来的props&state，用shallowEqual比一比，要是props&state都一样的话，就return false
