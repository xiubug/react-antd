# react-antd(新版后台很快就与大家见面了)
[![React Native](https://img.shields.io/badge/react-^15.3.2-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Redux](https://img.shields.io/badge/redux-^4.4.5-yellowgreen.svg?style=flat-square)](https://github.com/reactjs/redux)
[![Redux Immutablejs](https://img.shields.io/badge/immutablejs-^0.0.8-orange.svg?style=flat-square)](https://github.com/indexiatech/redux-immutablejs)
[![Ant Design](https://img.shields.io/badge/ant--design-^2.7.2-yellowgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)

[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## 相关推荐
[Redux源码解析-Redux的架构](https://github.com/sosout/redux-source-analyse)

[Immutable源码解析-Immutable的架构](https://github.com/sosout/immutable-source-analyse)


## 最新更新
>  webpack版本升级2，同时引入Yarn缓存下载的每个包以及happypack利用了多进程，同时还利用缓存来使得rebuild 更快等

>  Redux使用调整

> 路由模式更改为浏览器模式

## 前言
>  本工程主要基于react + redux + immutable + less + ES6/7 + webpack2.0 + fetch + react-router + antd(1.x)实现的SPA后台管理系统模板。

>  如果觉得不错的话，请star一下吧 😊

>  编码时间：8:00——9:30, 下班时间——24:00，其他时间要工作。代码未优化，处女座代码必须要优化。由于代码延后，先向大家说声抱歉。您有什么问题可以私信我segmentfault。

[线上demo](http://antd.sosout.com/)

## 关于我自己

>  使用技术： react + redux + immutable + less + ES6/7 + webpack2.0 + fetch + react-router + antd(1.x)

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

// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules
yarn install
```
### 运行
```bush
yarn run dev （开发版本，用于开发使用，热加载）
  
yarn run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）
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

  	2. webpack版本升级(webpack2.0)，并加上yarn，happypack等(最新迭代)；

  	3. 登录退出;

  	4. 整体布局;

  	5. 菜单映射路由(路由模式更改为浏览器模式);
    
# 性能优化

## 如何正确地在React中处理事件

[参考官网](https://facebook.github.io/react/docs/handling-events.html)

#### 1、构造器内绑定this
```javascript
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
        <div>
            <div>{this.state.count}</div>
            <button onClick={this.handleClick}>Click</button>
        </div>
        );
    }
}
```
这种方式的好处是每次render，不会重新创建一个回调函数，没有额外的性能损失。需要注意的是，使用这种方式要在构造函数中为事件回调函数绑定this:  this.handleClick = this.handleClick.bind(this)，否则handleClick中的this是undefined。这是因为ES6 语法的缘故，ES6 的 Class 构造出来的对象上的方法默认不绑定到 this 上，需要我们手动绑定。

#### 2、属性初始化
使用ES7的 property initializers，代码可以这样写：
```javascript
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = () => {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
        <div>
            <div>{this.state.count}</div>
            <button onClick={this.handleClick}>Click</button>
        </div>
        );
    }
}
```
这种方式就不需要手动绑定this了。但是你需要知道，这个特性还处于试验阶段，默认是不支持的。如果你是使用官方脚手架Create React App 创建的应用，那么这个特性是默认支持的。你也可以自行在项目中引入babel的transform-class-properties插件获取这个特性支持。

#### 3、箭头函数
```javascript
class MyComponent extends React.Component {
    render() {
        return (
        <button onClick={()=>{console.log('button clicked');}}>
            Click
        </button>
        );
    }
}
```
当事件响应逻辑比较复杂时，如果再把所有的逻辑直接写在onClick的大括号内，就会导致render函数变得臃肿，不容易直观地看出组件render出的元素结构。这时，可以把逻辑封装成组件的一个方法，然后在箭头函数中调用这个方法。如下所示：
```javascript
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
    render() {
        return (
        <div>
            <div>{this.state.number}</div>
            <button onClick={()=>{this.handleClick();}}>Click</button>
        </div>
        );
    }
}
```
这种方式最大的问题是，每次render调用时，都会重新创建一个事件的回调函数，带来额外的性能开销，当组件的层级越低时，这种开销就越大，因为任何一个上层组件的变化都可能会触发这个组件的render方法。当然，在大多数情况下，这点性能损失是可以不必在意的。这种方式也有一个好处，就是不需要考虑this的指向问题，因为这种写法保证箭头函数中的this指向的总是当前组件。

#### 4、函数传递参数
事件的回调函数默认是会被传入一个事件对象Event作为参数的。如果我想传入其他参数给回调函数应该怎么办呢？

使用第一种方式（构造器内绑定this）的话，可以把绑定this的操作延迟到render中，在绑定this的同时，绑定额外的参数：
```javascript
// 代码6
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        list: [1,2,3,4],
        current: 1
        };
    }

    handleClick(item) {
        this.setState({
            current: item
        });
    }

    render() {
        return (
        <ul>
            {this.state.list.map(
                (item)=>(
                <li className={this.state.current === item ? 'current':''} 
                onClick={this.handleClick.bind(this, item)}>{item}
                </li>
                )
            )}
        </ul>
        );
    }
}
```
使用第二种方式（属性初始化），解决方案和第一种基本一致：
```javascript
// 代码7
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1,2,3,4],
            current: 1
        };
    }

    handleClick = (item) =>  {
        this.setState({
            current: item
        });
    }

    render() {
        return (
        <ul>
            {this.state.list.map(
                (item)=>(
                <li className={this.state.current === item ? 'current':''} 
                onClick={this.handleClick.bind(undefined, item)}>{item}
                </li>
                )
            )}
        </ul>
        );
    }
}
```
不过这种方式就有点鸡肋了，因为虽然你不需要通过bind函数绑定this，但仍然要使用bind函数来绑定其他参数。

使用第三种方式（函数传递参数）的话很简单，直接传就可以了：
```javascript
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1,2,3,4],
            current: 1
        };
    }

    handleClick(item,event) {
        this.setState({
            current: item
        });
    }

    render() {
        return (
        <ul>
            {this.state.list.map(
                (item)=>(
                <li className={this.state.current === item ? 'current':''} 
                onClick={(event) => this.handleClick(item, event)}>{item}
                </li>
                )
            )}
        </ul>
        );
    }
}
```

关于事件响应的回调函数，还有一个地方需要注意。不管你在回调函数中有没有显式的声明事件参数Event，React都会把事件Event作为参数传递给回调函数，且参数Event的位置总是在其他自定义参数的后面。例如，在代码6和代码7中，handleClick的参数中虽然没有声明Event参数，但你依然可以通过arguments[1]获取到事件Event对象。

总结一下，三种绑定事件回调的方式，第一种有额外的性能损失；第二种需要手动绑定this，代码量增多；第三种用到了ES7的特性，目前并非默认支持，需要Babel插件的支持，但是写法最为简洁，也不需要手动绑定this。推荐使用第二种和第三种方式。

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
