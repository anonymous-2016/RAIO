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
// turnoverTrendMakeMarketDiagram
NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram = NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram || ((url = ``, uids = {}, debug = false) => {
    let result_obj = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    console.log(`keys = \n`, Object.keys(json));
                }
                let data_market = json[ "zs"] || [],
                    data_protocol = json["xy"] || [];
                // reusable dataHandler
                const dataHandler = (arr = []) => {
                    if (debug) {
                        console.log(`arr = \n`, arr);
                        console.log(`arr keys = \n`, Object.keys(arr[0]));
                    }
                    let ranking_code = [],
                        ranking_brief = [],
                        ranking_amplitude = [],
                        ranking_amount = [];
                    arr.map(
                        (obj, i) => {
                            if (debug && (i === 0)) {
                                console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                            }
                            // ["zqdm", "zqjc", "zdf", "cje"]
                            ranking_code.push(obj["zqdm"]);
                            ranking_brief.push(obj["zqjc"]);
                            ranking_amplitude.push(obj["zdf"]);
                            ranking_amount.push(obj["cje"]);
                        }
                    );
                    const new_obj = {
                        ranking_code,
                        ranking_brief,
                        ranking_amplitude,
                        ranking_amount
                    };
                    if (debug) {
                        console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                    }
                    return new_obj;
                };
                let obj_market = dataHandler(data_market) || {},
                    obj_protocol = dataHandler(data_protocol) || {};
                if (debug) {
                    console.log(`obj_market = \n`, obj_market);
                    console.log(`obj_protocol = \n`, obj_protocol);
                    // console.log(`obj_market = \n`, JSON.stringify(obj_market, null, 4));
                    // console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                }
                Object.assign(result_obj, {obj_market, obj_protocol});
                if (debug) {
                    console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                }
                let market_uid = uids.market_uid,
                    protocol_uid = uids.protocol_uid;
                // result_obj ??? no need
                NSB_TS_FV.Modules.turnoverTrendMakeMarketDiagram.showTable(obj_market, market_uid, false);
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable(obj_protocol, protocol_uid, false);
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});


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
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram || ((url = ``, uids = {}, debug = false) => {
    let result_obj = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    console.log(`keys = \n`, Object.keys(json));
                }
                let data_market = json[ "zs"] || [],
                    data_protocol = json["xy"] || [];
                // reusable dataHandler
                const dataHandler = (arr = []) => {
                    if (debug) {
                        console.log(`arr = \n`, arr);
                        console.log(`arr keys = \n`, Object.keys(arr[0]));
                    }
                    let ranking_code = [],
                        ranking_brief = [],
                        ranking_amplitude = [],
                        ranking_amount = [];
                    arr.map(
                        (obj, i) => {
                            if (debug && (i === 0)) {
                                console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                            }
                            // ["zqdm", "zqjc", "zdf", "cje"]
                            ranking_code.push(obj["zqdm"]);
                            ranking_brief.push(obj["zqjc"]);
                            ranking_amplitude.push(obj["zdf"]);
                            ranking_amount.push(obj["cje"]);
                        }
                    );
                    const new_obj = {
                        ranking_code,
                        ranking_brief,
                        ranking_amplitude,
                        ranking_amount
                    };
                    if (debug) {
                        console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                    }
                    return new_obj;
                };
                let obj_market = dataHandler(data_market) || {},
                    obj_protocol = dataHandler(data_protocol) || {};
                if (debug) {
                    console.log(`obj_market = \n`, obj_market);
                    console.log(`obj_protocol = \n`, obj_protocol);
                    // console.log(`obj_market = \n`, JSON.stringify(obj_market, null, 4));
                    // console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                }
                Object.assign(result_obj, {obj_market, obj_protocol});
                if (debug) {
                    console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                }
                /*
                    const uids = {
                        "market_uid": `[data-table-market="ntb-table-body-turnover-trend-protocol-diagram"]`,
                        "protocol_uid": `[data-table-protocol="ntb-table-body-turnover-trend-protocol-diagram"]`
                    };
                    let market_tbody = document.querySelector(uids.market_uid);
                    let protocol_tbody = document.querySelector(uids.protocol_uid);
                    let xxx_tbody = document.querySelector(uids.xxx_uid);
                */
                // ??? this.uids ???
                let market_uid = uids.market_uid,
                    protocol_uid = uids.protocol_uid;
                // result_obj ??? no need
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable(obj_market, market_uid, false);
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable(obj_protocol, protocol_uid, false);
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});

// init
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init || (
    (url = `http://10.1.5.202/webservice/fastview/otc/otcfast03/`) => {
        // uids
        const uids = {
            "market_uid": `[data-table-market="ntb-table-body-turnover-trend-protocol-diagram"]`,
            "protocol_uid": `[data-table-protocol="ntb-table-body-turnover-trend-protocol-diagram"]`
        };
        // let hs_datas = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, false);
        let hs_datas = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, uids, false);
    }
);

// call init
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init(`http://10.1.5.202/webservice/fastview/otc/otcfast03/`);







NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC || ((url = ``, debug = false, uid = `default_dom_uid`) => {
    // agencyRating
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
                    console.log(`data = \n`, json);
                }
                let strs = json.map(
                    (obj) => {
                        if (debug) {
                            console.log(obj.sj);
                        }
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
                            case "st":
                                new_key = `up`;
                                break;
                            case "xt":
                                new_key = `down`;
                                break;
                            case "gj":
                                new_key = `stock_price`;
                                break;
                            case "wc":
                                new_key = `keep`;
                                break;
                            default:
                                new_key = `暂无数据`;
                                break;
                        }
                        /*
                            const json = {A: `1`, B: `22`, C: `333`};
                            const {A: a, B: b, C: c} = {...json};
                            // rename object's key!
                            // import & export ??? old_name as new_name
                        */
                        arr_obj[new_key] = [];
                    }
                );
                if (debug) {
                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                }
                let counter = 1;
                arr.map(
                    (obj, i) => {
                        // console.log(`obj = `, JSON.stringify(obj, null, 4));
                        let time = ``, up = ``, down = ``, stock_price = ``, keep = ``;
                        time = (obj.sj !== undefined) ? obj.sj : `暂无数据`;
                        // no string, just keep number!
                        up = (obj.st !== undefined) ? obj.st : `暂无数据`;
                        down = (obj.xt !== undefined) ? obj.xt : `暂无数据`;
                        // 股价
                        stock_price = (obj.gj !== undefined) ? (obj.gj >= 0 ? obj.gj : null) : `暂无数据`;
                        // invalid value === 展示“--”
                        keep = (obj.wc !== undefined) ? obj.wc : `暂无数据`;
                        arr_obj.time.push(time);
                        arr_obj.up.push(up);
                        arr_obj.down.push(down);
                        arr_obj.stock_price.push(stock_price);
                        arr_obj.keep.push(keep);
                        // return arr_obj;
                        if (counter === 1) {
                            if (debug) {
                                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                            }
                            counter ++;
                        }
                    }
                );
                if (debug) {
                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                }
                datas = Object.assign(datas, arr_obj);
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHS(datas, uid);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return datas;
        // return only work out Promise!
});


NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.drawHC || ((datas = {}, container_uid = `container`, container_div = `dom_element`, debug = false) => {
    // let container = document.querySelector(`#container`);
    // let container = document.querySelector(`#${container_uid}`);
    // ???
    let titles = {
        title1: `title 1`,
        title2: `title 2`
    }
    // let {time, up, down, stock_price, keep} = {...datas};
    // babel ??? ES5
    let time = datas.time,
        up = datas.up,
        down = datas.down,
        stock_price = datas.stock_price,
        keep = datas.keep;
    if (debug) {
        console.log(`time = \n`, time);
        console.log(`up = \n`, up);
        console.log(`down = \n`, down);
        console.log(`stock_price = \n`, stock_price);
        console.log(`keep = \n`, keep);
    }
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
    // const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
    let color = chart_css.color,
        colors = chart_css.colors,
        optioncolor = chart_css.optioncolor,
        gridColor = chart_css.gridColor,
        legendColor = chart_css.legendColor,
        yAxisColor = chart_css.yAxisColor;
    // container_div
    // Highcharts.stockChart
    // Highcharts.chart
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
            height: 272,// 275px;
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
                // type: 'logarithmic',
                min: 0,
                floor: 0,
                ceiling: 100,
                max: 100, // 0-100 ???
                title: {
                    text: '',
                    // text: 'Total fruit consumption'
                },
                labels: {
                    format: '{value}%',// 百分比
                    style: {
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
                // min: 0,
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
                {series.name}: {point.y} <br/>
                <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
            `,
            // shared: true
        },
        // 情节/绘图选项
        plotOptions: {
            // (series) type = column (chart)
            column: {
                // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                // stacking: 'null',
                stacking: 'percent',// 百分比堆叠柱形图
                dataLabels: {
                    // enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            },
            spline: {
                stacking: 'normal',
            }
        },
        series: [
            {
                name: '上调',// type = column (chart)
                // data: [5, 3, 4, 7, 2],
                data: up,
            },
            {
                name: '维持',
                // data: [2, 2, 3, 2, 1],
                data: keep,
            },
            {
                name: '下调',
                // data: [3, 4, 4, 2, 5],
                data: down,
            },
            {
                type:'spline',
                yAxis: 1,
                color:"skyblue",
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
    let svg_legends = document.querySelectorAll(`.highcharts-legend-item`);
    // svg_legend;
    if (debug) {
        console.log(`svg_legends = `, svg_legends);
    }
    svg_legends.forEach(
        (svg_legend, index) => {
            if (debug) {
                console.log(`svg_legend, index`, svg_legend, index);
            }
            if (index < svg_legends.length - 1) {
                svg_legend.lastChild;
                svg_legend.lastChild.setAttribute(`x`, 0);
                svg_legend.lastChild.setAttribute(`y`, 5);
                svg_legend.lastChild.setAttribute(`width`, 17);
                svg_legend.lastChild.setAttribute(`height`, 10);
                svg_legend.lastChild.setAttribute(`rx`, 0);
                svg_legend.lastChild.setAttribute(`ry`, 0);
            }
        }
    );
});


NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/5.json`) => {
        let uid = `agency_rating_hs_container`;
        // let x = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, false, uid);
        // console.log(`x = `, x);
        // Promise return OK ??? // return only work out Promise!
        NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, false, uid);
        // NSB_TS_FV.Modules.turnoverTrendProtocolDiagram(url, true, uid);
    }
);

NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.init(`http://10.1.5.202/webservice/fastview/stock/stockfast05/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast05/600570.SH`;





/*

turnover_trend_make_market_diagram_hs_container

turnover_trend_protocol_diagram_hs_container

*/



/*




Highcharts.chart('container', {
    chart: {
    //type: 'area'
},
title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
},

subtitle: {
    text: 'Source: thesolarfoundation.com'
},

yAxis: {
    title: {
        text: 'Number of Employees'
    }
},
legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
},

plotOptions: {
    series: {
        label: {
            connectorAllowed: false
        },
        pointStart: 2010
    }
},

series: [{
    name: 'Installation',
    type: 'area',
    data: [143934, 52503, 257177, 69658, 397031, 119931, 237133, 154175]
}, {
    name: 'Manufacturing',
    type: 'spline',// type: 'line',
    data: [124916, 44064, 329742, 69851, 72490, 530282, 28121, 40434]
}],

responsive: {
    rules: [{
        condition: {
            maxWidth: 500
        },
        chartOptions: {
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            }
        }
    }]
}

});


*/
