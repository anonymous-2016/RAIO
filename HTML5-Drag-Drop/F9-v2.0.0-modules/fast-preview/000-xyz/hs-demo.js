// demos


$(function() {
    // fetch data
    // chart {} insert `${vars}`
    let container = document.querySelector(`#container`);
    const chart_css = {
        color: `#0B1016`,
        colors: ['#ff1919', '#ffff66', '#92d050'],
        optioncolor: `red`,
        gridColor: `#2D3039`,
        legendColor: `#fff`,
        yAxisColor: `#FFB400`,
    };
    const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
    // 
    Highcharts.chart('container', {
        chart: {
            type: 'column',
            // backgroundColor: chart_css.color
            // backgroundColor: color
        },
        title: {
            text: '',
            // text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            // xAxis datas
        },
        credits: {
            enabled: true,// enabled: false,
            href: `https://www.gildata.com`,
            text: `gildata`,
            // position: https://api.highcharts.com/highstock/credits.style,
            // style: https://api.highcharts.com/highstock/credits.style
        },
        colors: ['#ff1919', '#ffff66', '#92d050'],
        // colors: ['#ff1919', '#ffff66', '#92d050'],
        // colors: [...colors],
        yAxis: {
            min: 0,
            title: {
                text: 'yAxis title',
                // text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        // tooltip: {
        //     formatter: () => {
        //         return `<b>${this.x}</b><br/>${this.series.name}: ${this.y}<br/>`;
        //     }
        // },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    });
});





/* 

// $(document).ready() === $(function(){}); === jQuery(function($){})


# 设置 chart 容器的`宽度`，`高度`不同，绘制出来的`折线`效果就不同(会相应的变化)

```css

.hs-test {
    width: 850px;
    height: 300px;
}

```


```js
    // Uncaught ReferenceError: jQury is not defined
    // const jQuery = $;
    jQury(function($) {
        // fetch data
    });
```


*/

$(document).ready(function() {
    // fetch data
    // let id = document.querySelector(`#id`);
    let id = `#hs-test`;
    const STOCK_SKIN = 'white';
    // STOCK_SKIN is not defined
    drawchart(id, STOCK_SKIN);
});

function drawchart(id, STOCK_SKIN){
    var color='';
    var optioncolor='';
    var gridColor='';
    var legendColor = '';
    var yAxisColor='';
    if (STOCK_SKIN === 'white') {
        color='#fff';
        optioncolor='gray';
        gridColor='#ccc';
        legendColor='#000';
        yAxisColor = "#000";
    }else {
        color='#0B1016';
        optioncolor='red';
        gridColor='#2D3039';
        legendColor='#fff';
        yAxisColor = "#FFB400";
    }
    // id
    $(id).highcharts(
    {
        chart: {
            type: 'column',
            backgroundColor:color
        },
        title: {
            text: ''
        },
        credits: {
            enabled: true,// enabled: false,
            href: `https://www.gildata.com`,
            text: `gildata`,
            // position: https://api.highcharts.com/highstock/credits.style,
            // style: https://api.highcharts.com/highstock/credits.style
        },
        xAxis: {
            categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02']
        },
        colors: ['#ff1919', '#ffff66', '#92d050'],
        yAxis: [
            { // Primary yAxis
                title: {
                    text: 'Primary yAxis',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            }, 
            { // Secondary yAxis
                title: {
                    text: 'Secondary yAxis',
                    style: {
                        color: Highcharts.getOptions().colors[2]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                        // color: "#f0f"
                    }
                },
                opposite: true,
                gridLineColor: gridColor
            }
        ],
        legend: {
            align: "right", 
            itemHoverStyle: {
                color: '#FFB400'
            },
            itemStyle: {
                color: legendColor,
                fontWeight: 'bold'
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            // shadow: false
            shadow: true
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>';
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [
            {
                name: '上调',
                data: [5, 3, 4, 7, 2]
            },
            {
                name: '维持',
                data: [2, 2, 3, 2, 1]
            },
            {
                name: '下调',
                data: [3, 4, 4, 2, 5]
            },
            {
                name: '平均',
                type:'spline',
                yAxis: 1,
                color:"skyblue",
                data: [3, 4, 4, 2, 5]
            }
        ]
    });
}


