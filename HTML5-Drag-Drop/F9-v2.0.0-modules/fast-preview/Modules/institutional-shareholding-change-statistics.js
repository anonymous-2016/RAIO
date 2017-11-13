"use strict";

/**
 * institutional-shareholding-change-statistics 机构持股变动统计
 * xgqfrms
 * creadted 2017.10.27
 * @param {* String} url 
 * @param {* DOM Element} uid
 * @param {* Boolean} debug 
 */

// institutional-shareholding-change-statistics ISCS

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.ISCstatistics = STOCK_F9_FV.Modules.ISCstatistics || ((url = ``, debug = false, uid = `default_dom_uid`) => {
    // profitForecast
    // console.log(`uid = `, uid);
    // debug = true;
    let datas = {};
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            let arr = json;// Array
            // async
            if (debug) {
                // console.log(`data = \n`, json);
            }
            let strs = json.map(
                (obj) => {
                    // console.log(obj.sj);
                    return obj.sj;
                    //return num = parseInt(obj.sj.replace(/-/g, ``));
                }
            );
            strs = strs.sort();
            //  ["2007-04-30", "2009-10-31", "2010-02-28", "2016-10-31", "2017-09-30"]
            arr = strs.map(
                (date) => {
                    // "2007-04-30"
                    for (var i = 0; i < strs.length; i++) {
                        if(date === arr[i].sj){
                            return arr[i];
                        }
                    }
                    // return arr[i];
                }
            );
            /* 
                [
                    {
                        "sj": "2014-12-31",
                        "bl": 44.800000000000004,
                        "gj": 54.76
                    },
                ]
            */
            // Array.isArray(arr);
            let keys = Object.keys(arr[0]);
            // (5) ["rq", "pj", "st", "wc", "xt"]
            const arr_obj = {};
            keys.forEach(
                (key, index) => {
                    // console.log(`key, index = \n`, key, index);
                    // arr_obj[key] = [];
                    // as / alias
                    let new_key = ``;
                    switch (key) {
                        case "sj":
                            new_key = `time`;
                            break;
                        case "bl":
                            new_key = `shares`;
                            break;
                        case "gj":
                            new_key = `stock_price`;
                            break;
                        default:
                            new_key = `😟 暂无数据`;
                            break;
                    }
                    arr_obj[new_key] = [];
                }
            );
            // console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
            // {"rq":[],"pj":[],"st":[],"wc":[],"xt":[]}
            // 5 array
            // keys.map(k => console.log(typeof k));// string
            // ["rq", "pj", "st", "wc", "xt"].map(k => console.log(k));
            // let time = shares = stock_price = average = keep = [];
            let counter = 1;
            arr.map(
                (obj, i) => {
                    // console.log(`obj = `, JSON.stringify(obj, null, 4));
                    let time = ``, shares = ``, stock_price = ``;
                    time = (obj.sj !== undefined) ? obj.sj : `😟 暂无数据`;
                    // no string, just keep number!
                    shares = (obj.bl !== undefined) ? obj.bl : `😟 暂无数据`;
                    stock_price = (obj.gj !== undefined) ? obj.gj : `😟 暂无数据`;
                    // average = -1.7976931348623157e+308;
                    // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : null) : `😟 暂无数据`;
                    arr_obj.time.push(time);
                    arr_obj.shares.push(shares);
                    arr_obj.stock_price.push(stock_price);
                    // return arr_obj;
                    if (counter === 1) {
                        // console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                        counter ++;
                    }
                }
            );
            // console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
            // let {...arr_obj} = {rq: [], st: [], xt: [], pj: [], wc: []};
            // Object.assign()
            // arr.forEach() just use for addEventListener() / do somthing, no return value / undefined!
            // arr.map(), return an shaped new array!
            datas = Object.assign(datas, arr_obj);
            // return Object.assign(datas, arr_obj);
            // return arr_obj;
            STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS(datas, uid);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    return datas;
});



/**
 * @author xgqfrms
 * 
 * @param {* Object} datas 
 * @param {* String} container_uid 
 * @param {* Boolean} debug
 */

STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS = STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS || ((datas = {}, container_uid = `container`, debug = false) => {
    let time = datas.time,
        shares = datas.shares,
        stock_price = datas.stock_price;
    // console.log(`time = \n`, time);
    // console.log(`shares = \n`, shares);
    // console.log(`stock_price = \n`, stock_price);
    // datas
    const chart_css = {
        color: `#0B1016`,
        colors: ['#ff1919', '#ffff66', '#92d050'],
        optioncolor: `red`,
        gridColor: `#2D3039`,
        legendColor: `#fff`,
        yAxisColor: `#FFB400`,
    };
    // css_obj ???
    const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
    Highcharts.chart(container_uid, {
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
            // height: (9 / 16 * 100) + '%',
            // 16:9 ratio
            height: 272,
        },
        title: {
            text: '',
            // text: 'Stacked column chart'
        },
        xAxis: {
            // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
            categories: time,
            min: 0,
            max: 8,
            // xAxis datas
            labels: {
                // autoRotation:'false',
                autoRotation: [0],
                step: 2
            }
        },
        credits: {
            // enabled: true,// 
            enabled: false,
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
            shared: true,
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
                    enabled: true,
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
    let svg_legend = document.querySelector(`.highcharts-legend-item`);
    svg_legend;
    svg_legend.lastChild;
    svg_legend.lastChild.setAttribute(`x`, 0);
    svg_legend.lastChild.setAttribute(`y`, 5);
    svg_legend.lastChild.setAttribute(`width`, 17);
    svg_legend.lastChild.setAttribute(`height`, 10);
    svg_legend.lastChild.setAttribute(`rx`, 0);
    svg_legend.lastChild.setAttribute(`ry`, 0);
});



STOCK_F9_FV.Modules.ISCstatistics.init = STOCK_F9_FV.Modules.ISCstatistics.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/13.json`) => {
        let uid = `institutional_shareholding_change_statistics_hs_container`;
        STOCK_F9_FV.Modules.ISCstatistics(url, true, uid);
    }
);

STOCK_F9_FV.Modules.ISCstatistics.init(`http://10.1.5.202/webservice/fastview/stock/stockfast13/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;


// call fetch json datas
setTimeout(() => {
    // async & await
    /* 
        const sf_num= `stockfast13`;
        const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
        let uid = `institutional_shareholding_change_statistics_hs_container`;
        let hs_datas = ISCstatistics(url, true, uid);
    */
    // console.log(`hs_datas = \n`, JSON.stringify(hs_datas, null, 4));
    // profitForecast(url, true, uid);
    // let hs_container_uid = document.querySelector(`[data-hs-container="data-profit-forecast-container-uid"]`);
    // setTimeout(() => {
    //     ISCSdrawHS(hs_datas, uid);
    // }, 0);
}, 0);

