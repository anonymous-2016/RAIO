Highcharts.stockChart(container_uid, {
    noData: {// all defualt value
        attr: undefined,
        position: {
            align: `center`,
            verticalAlign: `middle`,
            x: 0,
            y: 0,
        },
        style: {
            color: `#666666`,
            fontSize: `12px`,
            fontWeight: `bold`
        },
        useHTML: false,
    },
    rangeSelector: {
        selected: 4
    },
    chart: {
        type: 'column',
        // backgroundColor: chart_css.color
        // backgroundColor: color
        // height: (9 / 16 * 100) + '%',
        // 16:9 ratio
    },
    title: {
        text: '',
        // text: 'Stacked column chart'
    },
    xAxis: {
        // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
        categories: time,
        min: 0,
        max: 8
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
    yAxis: [
        // yAxis 1
        {
            // x: -50,
            // y: -50,
            min: 0,
            max: 100,
            title: {
                text: '',
                // text: 'Total fruit consumption'
            },
            labels: {
                format: '{value}%',// 百分比
                style: {
                    // color: `#0f0`,// 
                    color: Highcharts.getOptions().colors[1]
                }
            }
           /*  stackLabels: {
                // enabled: true,// counter all cols values
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            } */
        },
        // yAxis 2
        {
            // x: -50,
            // y: -50,
            // min: 0,// bug ???
            title: {
                text: '',
                // text: 'Total fruit consumption'
            },
            stackLabels: {
                // enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            },
            opposite: true,
            gridLineColor: '#2D3039'
        }
    ],
    legend: {
        align: 'center',// left, center and right. (Defaults to center.)
        backgroundColor: `#ff00ff`, //Color,
        /*
            x: 0,
            y: 340,
            verticalAlign: 'top',
        */
        x: 0,
        y: 0,
        verticalAlign: "bottom",
        // floating: true,
        floating: false,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    // tooltip ??? array
    tooltip: {
        headerFormat: `
            <strong>
                {point.x}
            </strong>
            <br/>
        `,
        pointFormat: `
            <span style="color:{point.color}">\u25CF</span>
            {series.name}: {point.y}<br/>
        `,
        // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
        // 总数/总共/总量/总额/共有/总数
        // {${point.stackTotal ? point.stackTotal : point.y}} ???
        // {point.stackTotal || point.y}
        // {point.stackTotal ? point.stackTotal : point.y}
    },
    // 情节/绘图选项
    plotOptions: {
        // (series) type = column (chart)
        column: {
            // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
            // stacking: 'null',
            // stacking: 'percent',// 百分比堆叠柱形图
            dataLabels: {
                // enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        },
        spline: {
            // stacking: 'normal',
            dataLabels: {
                // enabled: true,
                color: "#434348"
            }
        }
    },
    series: [
        {
            name: '机构持股比例',// type = column (chart)
            // data: [5, 3, 4, 7, 2],
            data: shares,
            color:"#1a75bc",
        },
        {
            type:'spline',
            yAxis: 1,
            color:"#fbb728",
            name: '股价',
            // data: [3, 4, 4, 2, 5],
            data: stock_price,
            connectNulls: true,// OK
            tooltip: {
                headerFormat: `
                    <strong>
                        {point.x}
                    </strong>
                    <br/>
                `,
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: <b>{point.y}</b><br/>
                `,
                // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
            },
        }
    ],
    scrollbar: {
        enabled: true
    }
});
// svg style
// let svg_legend = document.querySelector(`.highcharts-legend-item`);
// svg_legend;
// svg_legend.lastChild;
// svg_legend.lastChild.setAttribute(`x`, 0);
// svg_legend.lastChild.setAttribute(`y`, 5);
// svg_legend.lastChild.setAttribute(`width`, 17);
// svg_legend.lastChild.setAttribute(`height`, 10);
// svg_legend.lastChild.setAttribute(`rx`, 0);
// svg_legend.lastChild.setAttribute(`ry`, 0);