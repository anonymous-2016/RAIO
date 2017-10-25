"use strict";

/**
 * profit-forecast 盈利预告
 * xgqfrms
 * creadted 2017.10.17
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

// todo


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
        /* rangeSelector: {
            selected: 4
        }, */
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
            categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
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
                // min: 0,
                title: {
                    text: 'yAxis title 1',
                    // text: 'Total fruit consumption'
                },
                stackLabels: {
                    // enabled: true,// counter all cols values
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            // yAxis 2
            {
                // x: -50,
                // y: -50,
                // min: 0,// bug ???
                title: {
                    text: 'yAxis title 2',
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
            align: 'right',// left, center and right. (Defaults to center.)
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
                {series.name}: {point.y}
                <br/>
                总数/总共/总量/总额/共有/总数 : 
                {point.stackTotal}
            `,
            // {${point.stackTotal ? point.stackTotal : point.y}} ???
            // {point.stackTotal || point.y}
            // {point.stackTotal ? point.stackTotal : point.y}
        },
        // 情节/绘图选项
        plotOptions: {
            // (series) type = column (chart)
            column: {
                stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                // stacking: 'null',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [
            {
                name: '上调',// type = column (chart)
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
                type:'spline',
                yAxis: 1,
                color:"skyblue",
                name: '平均',
                data: [3, 4, 4, 2, 5]
            }
        ]
    });
});


const profitForecast = (url = ``, debug = false) => {
    // profitForecast
        // debug = true;
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            //shaped data 
            (json) => {
                // json
                let arr = json;// Array
                // async
                if (debug) {
                    console.log(`data = \n`, json);
                }
                /* 
                    [
                        {
                            "rq": "2017-10-25",
                            "pj": 0.66,
                            "st": 0,
                            "wc": 1,
                            "xt": 0
                        },
                        {
                            "rq": "2017-09-30",
                            "pj": 0.71,
                            "st": 3,
                            "wc": 2,
                            "xt": 2
                        }
                    ]
                */
                let keys = Object.keys(arr[0]);
                // (5) ["rq", "pj", "st", "wc", "xt"]
                // 5 array
                keys.map(k => console.log(typeof k));// string
                // ["rq", "pj", "st", "wc", "xt"].map(k => console.log(k));
                arr.map(
                    (obj, i) => {
                        let date = `${(arr[i].rq !== undefined) ? arr[i].rq : `😟 暂无数据`}`;
                        
                    }
                );
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // return null;
        // return data;
};



// call fetch json datas
setTimeout(() => {
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
    let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
    const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
    profitForecast(url, tds, ui_arr);
    // profitForecast(url, tds, ui_arr, true);
}, 0);
