"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name turnover-trend-make-market-diagram 成交走势-做市
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* Boolean} debug
 */

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};
// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};

/*

turnoverTrendDiagrams

*/
// turnoverTrendMakeMarketDiagram
NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram = NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram || ((url = ``, uid = ``, debug = false) => {
    let result_obj = {};
    // urls ???
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    // array
                    // console.log(`json = \n`, json.slice(0, 3));
                }
                let arr = json || [],
                    temp_sort_arr = [];
                for (let i = 0; i < arr.length; i++) {
                    temp_sort_arr.push(arr[i]["rq"]);
                }
                temp_sort_arr = temp_sort_arr.sort();
                if (debug) {
                    // console.log(`temp_sort_arr = \n`, temp_sort_arr);
                    console.log(`temp_sort_arr = \n`, temp_sort_arr.slice(0, 4));
                }
                const sortArrayObjectsHandler = (objs_arr = [], sort_arr = [], debug = false) => {
                    if (debug) {
                        console.log(`arr = \n`, objs_arr);
                        console.log(`sort_arr = \n`, sort_arr);
                        // console.log(`arr keys = \n`, Object.keys(arr[0]));
                    }
                    let turnover_time = [],
                        turnover_number = [],
                        turnover_amount = [];
                    for (let i = 0; i < sort_arr.length; i++) {
                        objs_arr.map(
                            (obj, ii) => {
                                if (obj["rq"] === temp_sort_arr[i]) {
                                    if (debug && ii === 0) {
                                        console.log(`obj["rq"] = \n`, obj["rq"], ii);
                                        console.log(`temp_sort_arr[i] = \n`, temp_sort_arr[i], i);
                                    }
                                    turnover_time.push(obj["rq"]);
                                    turnover_number.push(parseFloat(obj["cjl"]));
                                    turnover_amount.push(parseFloat(obj["cje"]));
                                }else{
                                    // break
                                }
                            }
                        );
                        if (debug  && i === 3) {
                            console.log(`turnover_time = \n`, turnover_time);
                            console.log(`turnover_number = \n`, turnover_number);
                            console.log(`turnover_amount = \n`, turnover_amount);
                        }
                    }
                    const new_obj = {
                        turnover_time,
                        turnover_number,
                        turnover_amount
                    };
                    if (debug) {
                        console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                    }
                    return new_obj;
                };
                // let obj_market = sortArrayObjectsHandler(arr, temp_sort_arr) || {},
                //     obj_protocol = dsortArrayObjectsHandler(arr, temp_sort_arr) || {};
                let obj_market = sortArrayObjectsHandler(arr, temp_sort_arr) || {};
                // let obj_protocol = sortArrayObjectsHandler(arr, temp_sort_arr) || {};
                if (debug) {
                    console.log(`obj_market = \n`, obj_market);
                    // console.log(`obj_protocol = \n`, obj_protocol);
                    // console.log(`obj_market = \n`, JSON.stringify(obj_market, null, 4));
                    // console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                }
                // Object.assign(result_obj, {obj_market, obj_protocol});
                // if (debug) {
                //     console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                // }
                let market_uid = uid;
                if (debug) {
                    console.log(`uid = \n`, uid);
                }
                // let market_uid = uids.market_uid,
                //     protocol_uid = uids.protocol_uid;
                // result_obj ??? no need
                NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.drawHC(obj_market, market_uid, false);
                // NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC(obj_protocol, protocol_uid, false);
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});



// NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram(`http://10.1.5.202/webservice/fastview/otc/otcfast10`, `#turnover_trend_make_market_diagram_hs_container`, false);



/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name turnover-trend-protocol-diagram 成交走势-协议
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* Boolean} debug
 */

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};
// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};

// turnoverTrendProtocolDiagram
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram || ((url = ``, uid = ``, debug = false) => {
    let result_obj = {};
    // urls ???
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    // array
                    // console.log(`json = \n`, json.slice(0, 3));
                }
                let arr = json || [],
                    temp_sort_arr = [];
                for (let i = 0; i < arr.length; i++) {
                    temp_sort_arr.push(arr[i]["rq"]);
                }
                temp_sort_arr = temp_sort_arr.sort();
                if (debug) {
                    // console.log(`temp_sort_arr = \n`, temp_sort_arr);
                    console.log(`temp_sort_arr = \n`, temp_sort_arr.slice(0, 4));
                }
                const sortArrayObjectsHandler = (objs_arr = [], sort_arr = [], debug = false) => {
                    if (debug) {
                        console.log(`arr = \n`, objs_arr);
                        console.log(`sort_arr = \n`, sort_arr);
                        // console.log(`arr keys = \n`, Object.keys(arr[0]));
                    }
                    let turnover_time = [],
                        turnover_number = [],
                        turnover_amount = [];
                    for (let i = 0; i < sort_arr.length; i++) {
                        objs_arr.map(
                            (obj, ii) => {
                                if (obj["rq"] === temp_sort_arr[i]) {
                                    if (debug && ii === 0) {
                                        console.log(`obj["rq"] = \n`, obj["rq"], ii);
                                        console.log(`temp_sort_arr[i] = \n`, temp_sort_arr[i], i);
                                    }
                                    turnover_time.push(obj["rq"]);
                                    turnover_number.push(parseFloat(obj["cjl"]));
                                    turnover_amount.push(parseFloat(obj["cje"]));
                                }else{
                                    // break
                                }
                            }
                        );
                        if (debug  && i === 3) {
                            console.log(`turnover_time = \n`, turnover_time);
                            console.log(`turnover_number = \n`, turnover_number);
                            console.log(`turnover_amount = \n`, turnover_amount);
                        }
                    }
                    const new_obj = {
                        turnover_time,
                        turnover_number,
                        turnover_amount
                    };
                    if (debug) {
                        console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                    }
                    return new_obj;
                };
                let obj_protocol = sortArrayObjectsHandler(arr, temp_sort_arr) || {};
                if (debug) {
                    console.log(`obj_protocol = \n`, obj_protocol);
                    // console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                }
                let protocol_uid = uid;
                // result_obj ??? no need
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC(obj_protocol, protocol_uid, false);
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});


// NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(`http://10.1.5.202/webservice/fastview/otc/otcfast11`, `#turnover_trend_protocol_diagram_hs_container`, false);



NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.drawHC = NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.drawHC || (
    (obj = {}, uid = ``, debug = false) => {
        if (debug) {
            console.log(`HC obj = \n`, obj);
            // console.log(`HC obj = \n`, JSON.stringify(obj, null, 4));
            console.log(`HC uid = \n`, uid);
            console.log(`HC debug = \n`, debug);
        }
        const datas = obj;
        let titles = {
            title1: `title 1`,
            title2: `title 2`
        }
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        // css_obj ???
        // babel & ES8 => ES5
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
        // let color = chart_css.color,
        //     colors = chart_css.colors,
        //     optioncolor = chart_css.optioncolor,
        //     gridColor = chart_css.gridColor,
        //     legendColor = chart_css.legendColor,
        //     yAxisColor = chart_css.yAxisColor;
        // babel & ES8 => ES5
        let {
            turnover_time,
            turnover_number,
            turnover_amount
        } = {...datas};
        // let turnover_time = datas.turnover_time,
        //     turnover_number = datas.turnover_number,
        //     turnover_amount = datas.turnover_amount;
        if (debug) {
            console.log(`HC turnover_time = \n`, turnover_time);
            console.log(`HC turnover_number = \n`, turnover_number);
            console.log(`HC turnover_amount = \n`, turnover_amount);
        }
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
                noData: `
                    <p data-none="no-data-hc">
                        <span data-none="no-data-span"></span>
                    </p>
                `,
                // noData: "没有数据显示!",
                numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
                printChart: "打印图表",
                resetZoom: '重置缩放比例',
                resetZoomTitle: '重置为原始大小',
                shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                thousandsSep: ',',
                shortWeekdays: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdays: ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
        });
        // Highcharts.chart
        Highcharts.chart(uid, {
            noData: {// all defualt value
                // attr: undefined,
                // position: {
                //     align: `center`,
                //     verticalAlign: `middle`,
                //     x: 0,
                //     y: 0,
                // },
                // style: {
                //     color: `#666666`,
                //     fontSize: `12px`,
                //     fontWeight: `bold`
                // },
                useHTML: true,
            },
            // rangeSelector: {
            //     selected: 4
            // },
            chart: {
                type: 'column',
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                height: 272,// 275px;
                // 16:9 ratio
            },
            title: {
                text: '做市',// 协议
                // text: 'Stacked column chart'
                style: {
                    "color": "#000",
                    "fontSize": "13px",
                    "fontWeight": "bold"
                }
            },
            xAxis: {
                // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
                categories: turnover_time,
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
                // yAxis 0
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100, // 0-100 ???
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    labels: {
                        // format: '{value}%',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    }
                    // stackLabels: {
                    //     // enabled: true,// counter all cols values
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // }
                },
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    min: 0,
                    // max: 100, // 0-100 ???
                    // ceiling: 100,
                    // step: 10,
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    // labels: {
                    //     format: '{value}',
                    //     style: {
                    //         color: Highcharts.getOptions().colors[1]
                    //     }
                    // },
                    // stackLabels: {
                    //     // enabled: true,
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // },
                    opposite: true,
                    gridLineColor: '#2D3039'
                }
            ],
            legend: {
                align: 'center',// left, center and right. (Defaults to center.)
                backgroundColor: `#ff00ff`, //Color,
                // x: 0,
                // y: 340,
                // verticalAlign: 'top',
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
                shared: true,// share all datas in one tolltip!
                headerFormat: `
                    <strong>
                        {point.x}
                    </strong>
                    <br/>
                `,
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: {point.y}<br/>
                    <span style="color:{point.color}">\u25CF</span>
                `,
                // 百分比 :{point.percentage:.0f}%
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                // column: {
                //     // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                //     // stacking: 'null',
                //     stacking: 'percent',// 百分比堆叠柱形图
                //     dataLabels: {
                //         // enabled: true,
                //         color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                //     }
                // },
                // spline: {
                //     stacking: 'normal',
                // }
            },
            series: [
                {
                    type: "area",//column
                    yAxis: 0,
                    // color: "red",//lawngreen
                    name: "成交额(亿元)",
                    data: turnover_amount,
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
                },
                {
                    type: "area",//"spline"
                    yAxis: 1,
                    // color: "grey",
                    color: "#777",
                    name: "成交量(亿股)",
                    data: turnover_number,
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
    }
);



NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC || (
    (obj = {}, uid = ``, debug = false) => {
        if (debug) {
            console.log(`HC obj = \n`, obj);
            // console.log(`HC obj = \n`, JSON.stringify(obj, null, 4));
            console.log(`HC uid = \n`, uid);
            console.log(`HC debug = \n`, debug);
        }
        const datas = obj;
        let titles = {
            title1: `title 1`,
            title2: `title 2`
        }
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        // css_obj ???
        // babel & ES8 => ES5
        // const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
        let color = chart_css.color,
            colors = chart_css.colors,
            optioncolor = chart_css.optioncolor,
            gridColor = chart_css.gridColor,
            legendColor = chart_css.legendColor,
            yAxisColor = chart_css.yAxisColor;
        // babel & ES8 => ES5
        // let {
        //     turnover_time,
        //     turnover_number,
        //     turnover_amount
        // } = {...datas};
        let turnover_time = datas.turnover_time,
            turnover_number = datas.turnover_number,
            turnover_amount = datas.turnover_amount;
        if (debug) {
            console.log(`HC turnover_time = \n`, turnover_time);
            console.log(`HC turnover_number = \n`, turnover_number);
            console.log(`HC turnover_amount = \n`, turnover_amount);
        }
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
                noData: `
                    <p data-none="no-data-hc">
                        <span data-none="no-data-span"></span>
                    </p>
                `,
                // noData: "没有数据显示!",
                numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
                printChart: "打印图表",
                resetZoom: '重置缩放比例',
                resetZoomTitle: '重置为原始大小',
                shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
                thousandsSep: ',',
                shortWeekdays: ['周天', '周一', '周二', '周三', '周四', '周五', '周六'],
                weekdays: ['星期天','星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            },
        });
        // Highcharts.chart
        Highcharts.chart(uid, {
            noData: {// all defualt value
                // attr: undefined,
                // position: {
                //     align: `center`,
                //     verticalAlign: `middle`,
                //     x: 0,
                //     y: 0,
                // },
                // style: {
                //     color: `#666666`,
                //     fontSize: `12px`,
                //     fontWeight: `bold`
                // },
                useHTML: true,
            },
            // rangeSelector: {
            //     selected: 4
            // },
            chart: {
                type: "column",
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                height: 272,// 275px;
                // 16:9 ratio
            },
            title: {
                text: "协议",
                style: {
                    "color": "#000",
                    "fontSize": "13px",
                    "fontWeight": "bold"
                }
            },
            xAxis: {
                // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
                categories: turnover_time,
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
                // yAxis 0
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100, // 0-100 ???
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    labels: {
                        // format: '{value}%',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    }
                    // stackLabels: {
                    //     // enabled: true,// counter all cols values
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // }
                },
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    min: 0,
                    // max: 100, // 0-100 ???
                    // ceiling: 100,
                    // step: 10,
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    // labels: {
                    //     format: '{value}',
                    //     style: {
                    //         color: Highcharts.getOptions().colors[1]
                    //     }
                    // },
                    // stackLabels: {
                    //     // enabled: true,
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // },
                    opposite: true,
                    gridLineColor: '#2D3039'
                }
            ],
            legend: {
                align: 'center',// left, center and right. (Defaults to center.)
                backgroundColor: `#ff00ff`, //Color,
                // x: 0,
                // y: 340,
                // verticalAlign: 'top',
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
                shared: true,// share all datas in one tolltip!
                headerFormat: `
                    <strong>
                        {point.x}
                    </strong>
                    <br/>
                `,
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: {point.y}<br/>
                    <span style="color:{point.color}">\u25CF</span>
                `,
                // 百分比 :{point.percentage:.0f}%
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                // column: {
                //     // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                //     // stacking: 'null',
                //     stacking: 'percent',// 百分比堆叠柱形图
                //     dataLabels: {
                //         // enabled: true,
                //         color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                //     }
                // },
                // spline: {
                //     stacking: 'normal',
                // }
            },
            series: [
                {
                    type: "area",//line/spline
                    yAxis: 0,
                    // color: "red",//lawngreen
                    name: "成交额(亿元)",
                    data: turnover_amount,
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
                },
                {
                    type: "area",
                    yAxis: 1,
                    // color: "grey",//skyblue
                    color: "#777",
                    name: "成交量(亿股)",
                    data: turnover_number,
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
    }
);









// init
NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.init = NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.init || (
    (url = `http://10.1.5.202/webservice/fastview/otc/otcfast10`) => {
        // const url = `http://10.1.5.202/webservice/fastview/otc/otcfast10`;
        const uid = `turnover_trend_make_market_diagram_hs_container`;
        // HC, no need #
        NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram(url, uid, false);
        // let hs_datas = NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram(url, uid, false);
    }
);


// init
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init || (
    (url = `http://10.1.5.202/webservice/fastview/otc/otcfast11`) => {
        // const url = `http://10.1.5.202/webservice/fastview/otc/otcfast11`;
        const uid = `turnover_trend_protocol_diagram_hs_container`;
        NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, uid, false);
        // HC, no need #
        // let hs_datas = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, uid, false);
    }
);

// call init
NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.init();
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init();


// HC & no scrollbar & one year data
// http://10.1.5.202/otc/f9/index.html?gilcode=430009.OC&skin=white#1
