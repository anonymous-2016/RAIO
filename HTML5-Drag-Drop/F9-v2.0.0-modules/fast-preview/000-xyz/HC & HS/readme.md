# numericSymbols



https://api.highcharts.com/highcharts/lang.numericSymbols



```js

    Highcharts.setOptions({
        lang: {
            rangeSelectorZoom: '缩放',// 放大
            rangeSelectorFrom: '从',
            rangeSelectorTo: '到',
            contextButtonTitle: '图表导出菜单',
            decimalPoint: '.',
            downloadJPEG: "下载JPEG图片",
            downloadPDF: "下载PDF文件",
            downloadPNG: "下载PNG文件",
            downloadSVG: "下载SVG文件",
            drillUpText: "返回 {series.name}",
            loading: '加载中...',
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            // noData: '暂无数据',
            // noData: "没有数据显示!",
            noData:  `
                <p data-none="no-data-hc">
                    <span data-none="no-data-span"></span>
                </p>
            `,
            // numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
            numericSymbols: ['千', '百万', '十亿', '兆', '千兆', '百万兆'],
            printChart: "打印图表",
            resetZoom: '重置缩放比例',
            resetZoomTitle: '重置为原始大小',
            shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
            thousandsSep: ',',
            shortWeekdays: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
            weekdays: ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
    });

```

http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/lang/numericsymbols/

```js


Highcharts.setOptions({
    lang: {
        numericSymbols: [',000', ',000,000', ',000,000,000']
       // numericSymbols: ['千', '百万', '十亿', '兆', '千兆', '百万兆'],
    }
});

Highcharts.chart('container', {
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
       //  type: 'logarithmic'
    },

    series: [{
        data: [1029, 73, 116, 1292, 14400, 1, 1234567890, 1480, 10216, 1194, 956, 541114]
    }]
});

```





















