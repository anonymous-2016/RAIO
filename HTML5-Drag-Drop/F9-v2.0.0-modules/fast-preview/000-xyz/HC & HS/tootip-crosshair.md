## highstock crosshairs


> highstock 十字准星线


http://stepday.com/topic/?633


```js

    tooltip: {
        crosshairs:[
            {
                enabled:true,//是否显示X轴标线
                width:3,//标线宽度
                color:'red' //标线颜色值
            },
            {
                enabled:true,//是否显示Y轴标线
                width:3,//标线宽度
                color:'green' //标线颜色值
            }
        ],
        style:{
            display:'none' //通过样式表控制不显示tooltip数据提示框
        }
    },

```


# tooltip.crosshairs

> Since 4.1, the crosshair definitions are moved to the Axis object in order for a better separation from the tooltip.

xAxis.crosshair

yAxis.crosshair

https://api.highcharts.com/highstock/tooltip.crosshairs

https://api.highcharts.com/highstock/xAxis.crosshair
https://api.highcharts.com/highstock/yAxis.crosshair

