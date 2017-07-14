import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
// 标题插件
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';



/* 以类的方式创建一个组件 */
class Linechart extends Component {
    constructor(props) {
    	super(props);
        this.state = {
            myChart: null,
            symbolSize: 20
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    componentDidMount() {
        this.initLine();
    }
    initLine() {
        const that = this;
        const { data } = that.props //外部传入的data数据
        const { symbolSize } = that.state;
        let myChart = echarts.init(that.lineChart) //初始化echarts
        that.setState({
            myChart: myChart
        });
        //我们要定义一个setPieOption函数将data传入option里面
        let options = that.setPieOption(data);
        let updatePosition = that.updatePosition;
        //设置options
        myChart.setOption(options);
        setTimeout(function () {
            // Add shadow circles (which is not visible) to enable drag.
            myChart.setOption({
                graphic: echarts.util.map(data, function (item, dataIndex) {
                    return {
                        type: 'circle',
                        position: myChart.convertToPixel('grid', item),
                        shape: {
                            cx: 0,
                            cy: 0,
                            r: symbolSize / 2
                        },
                        invisible: true,
                        draggable: true,
                        ondrag: echarts.util.curry(that.onPointDragging, dataIndex, data, myChart),
                        onmousemove: echarts.util.curry(that.showTooltip, dataIndex),
                        onmouseout: echarts.util.curry(that.hideTooltip, dataIndex),
                        z: 100
                    };
                })
            });
        }, 0);
        window.addEventListener('resize', function() {
            that.updatePosition;
        });
        myChart.on('dataZoom', function() {
            that.updatePosition;
        });
    }
    //一个基本的echarts图表配置函数
    setPieOption = (data) => {
        const { symbolSize } = this.state;
        return {
            title: {
                text: '尝试拖动这些点'
            },
            tooltip: {
                triggerOn: 'none',
                formatter: function (params) {
                    return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
                }
            },
            grid: {},
            xAxis: {
                min: -100,
                max: 80,
                type: 'value',
                axisLine: {onZero: false}
            },
            yAxis: {
                min: -30,
                max: 60,
                type: 'value',
                axisLine: {onZero: false}
            },
            dataZoom: [{
                type: 'slider',
                xAxisIndex: 0,
                filterMode: 'empty'
            }, {
                type: 'slider',
                yAxisIndex: 0,
                filterMode: 'empty'
            }, {
                type: 'inside',
                xAxisIndex: 0,
                filterMode: 'empty'
            }, {
                type: 'inside',
                yAxisIndex: 0,
                filterMode: 'empty'
            }],
            series: [{
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }]
        }
    }
    updatePosition = () => {
        const { data } = this.props //外部传入的data数据
        const { myChart } = this.state;
        myChart.setOption({
            graphic: echarts.util.map(data, function (item, dataIndex) {
                return {
                    position: myChart.convertToPixel('grid', item)
                };
            })
        });
    }
    onPointDragging(dataIndex, data, myChart) {
        data[dataIndex] = myChart.convertFromPixel('grid', this.position);
        // Update data
        myChart.setOption({
            series: [{
                id: 'a',
                data: data
            }]
        });
    }
    hideTooltip = (dataIndex) => {
        const { myChart } = this.state;
        myChart.dispatchAction({
            type: 'hideTip'
        });
    }
    showTooltip = (dataIndex) => {
        const { myChart } = this.state;
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: dataIndex
        });
    }
	render() {
		return (	
            <div ref={ref=>{this.lineChart=ref}} style={{width: "100%", height: "500px"}}></div>
		);
	}
}

export default Linechart;
