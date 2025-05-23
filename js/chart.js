// 初始化图表
var myChart = echarts.init(document.getElementById('chart-container'));

// 配置项
var option = {
    title: {
        text: 'ECharts 示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

// 使用配置项显示图表
myChart.setOption(option);