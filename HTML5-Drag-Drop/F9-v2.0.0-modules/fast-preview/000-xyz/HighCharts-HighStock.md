
# highcharts



https://api.hcharts.cn/highcharts


![](https://img.hcharts.cn/static/highcharts/images/docs/hc-anatomy.png)



```md

stcok
    title
    subtitle
    exporting(print & download)
    rangeSelector
    y-axis
    x-axis
    tooltip
    series
    legend
    credits

名词解释
    lang：语言文字对象，所有Highcharts文字相关的设置，
    chart：图表区、图形区和通用图表配置选项，
    colors：图表数据列颜色配置，是一个颜色数组，
    credits: 版权信息，Highcharts在图表的右下方放置的版权信息及链，
    drilldown：钻取，向下钻取数据，深入到其中的具体数据，
    exporting：导出模块，导出功能配置，导出即将图表下载为图片或打印图表
    legend：图例，用不同形状、颜色、文字等 标示不同数据列，通过点击标示可以显示或隐藏该数据列，
    loading：加载中，加载选项控制覆盖绘图区的加载屏的外观和文字
    navigation：导航，导出模块按钮和菜单配置选项组
    noData：没有数据，没有数据时显示的内容
    pane：分块，针对仪表图和雷达图专用的配置，主要设置弧度及背景色
    plotOptions：针对不同类型图表的配置
    series：数据列，图表上一个或多个数据系列，比如图表中的一条曲线，一个柱形，
    title：标题，包括即标题和副标题，其中副标题为非必须的，
    tooltip：数据点提示框，当鼠标滑过某点时，以框的形式提示改点的数据，比如该点的值，数据单位等，
    Axis：坐标轴，包括x轴和y轴。多个不同的数据列可共用同一个X轴或Y轴，当然，还可以有两个X轴或Y轴，分别显示在图表的上下或左右，
图表类型
    line：直线图，
    spline：曲线图，
    area：面积图，
    areaspline：曲线面积图，
    arearange：面积范围图，
    areasplinerange：曲线面积范围图，
    column：柱状图，
    columnrange：柱状范围图，
    bar：条形图，
    pie：饼图，
    scatter：散点图，
    boxplot：箱线图，
    bubble：气泡图，
    errorbar：误差线图，
    funnel：漏斗图，
    gauge：仪表图
    waterfall：瀑布图，
    polar：雷达图，
    pyramid：金字塔，

```







# highstock

https://api.hcharts.cn/highstock


![](https://img.hcharts.cn/static/highcharts/images/docs/hs_component.png)


https://www.hcharts.cn/demo/highstock/compare

https://code.hcharts.cn/highstock/hhhhvr

```md

stcok
    title
    exporting(print & download)
    rangeSelector
    crosshairs
    tooltip
    scrollbar
    navigator
    credits

名词解释
    lang：语言文字对象，所有Highstock 文字相关的设置
    chart：图表，图表区、图形区和通用图表配置选项
    colors：颜色，图表数据列颜色配置，是一个颜色数组
    credits：版权信息，Highstock 在图表的右下方放置的版权信息及链
    exporting：导出模块，导出功能配置，导出即将图表下载为图片或打印图表
    labels：标签，可以放置到图表区域内任何位置的HTML标签
    legend：图例，用不同形状、颜色、文字等 标示不同数据列，通过点击标示可以显示或隐藏该数据列
    loading：加载中，加载选项控制覆盖绘图区的加载屏的外观和文字
    navigation：导航，导出模块按钮和菜单配置选项组
    plotOptions：数据点配置，针对不同类型图表的配置。Highstock 所有图表类型请看下方 “图表类型”
    rangeSelector：范围选择器，选择查看指定时间的数据，可以是年、月为单位或全部数据，也可以是输入具体的时间范围查看
    scrollbar：滚动条，图表底部的滚动条，大数据量时可以方便查看局部数据
    series：数据列，图表上一个或多个数据系列，比如图表中的一条曲线，一个柱形
    title：标题，包括即标题和副标题，其中副标题为非必须的
    tooltip：数据点提示框，当鼠标滑过某点时，以框的形式提示改点的数据，比如该点的值，数据单位等
    Axis：坐标轴，包括x轴和y轴。多个不同的数据列可共用同一个X轴或Y轴，当然，还可以有两个X轴或Y轴，分别显示在图表的上下或左右。
图表类型
    line：直线图
    spline：曲线图
    area：面积图
    areaspline：曲线面积图
    arearange：面积范围图
    areasplinerange：曲线面积范围图
    column：柱状图
    columnrange：柱状范围图
    flags：柱状范围图
    ohlc：K线图
    candlestick：阴阳烛图
    scatter：散点图

```


https://api.hcharts.cn/highstock#plotOptions


```md

数据列的配置有三个级别：

1. 配置在 plotOptions.series，针对所有图表类型有效
2. 配置在 plotOptions.<数据列类型>，针对某种数据列有效
3. 配置在 series，针对某个数据列有效

上述三个级别的配置精准度越来越高，也就是越精准的配置会覆盖前面的配置

```

```js

plotOptions: {
    series: {
        lineWidth: 2,
        // 针对所有数据列有效的配置 (优先级 1 low)
    },
    spline: {
        lineWidth: 1,
        // 针对 spline 数据列类型 有效的配置 (优先级 2 middle)
    },
}

series: [
    {
        id: 'series 1',
        type: 'spline',// type 默认值是 'line'
        data: [1, 4, 56, 69],
        lineWidth: 2, 
        // 该参数会覆盖 plotOptions.spline.lineWidth 里的配置 (优先级 3 high)
    }, 
    {
        data: [4, 5, 6],
        lineWidth: 3,
        // 该参数会覆盖 plotOptions.series.lineWidth 里的配置 (优先级 3 high)
    }, 
    {
        data: [10, 500, 199],
        // 该数据列会继承 plotOptions.series.lineWidth 里的配置 (优先级 1 low)
    }
]

```


https://api.hcharts.cn/highstock#plotOptions.column


http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/stock/plotoptions/stacking/






