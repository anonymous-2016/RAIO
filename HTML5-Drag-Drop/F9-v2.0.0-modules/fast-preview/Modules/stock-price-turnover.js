"use strict";

/**
 * stock-price-turnover 股价/成交量
 * xgqfrms
 * creadted 2017.10.29
 * @param {* String} url 
 * @param {* DOM Element} uid
 * @param {* Boolean} debug 
 */

// todo

// stock-price-turnover SPTurnover

const SPTurnover = (url = ``, debug = false, uid = `default_dom_uid`) => {
    // profitForecast
    console.log(`uid = `, uid);
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
                console.log(`json = \n`, json);
            }
            // 今年以来涨跌幅：+1.52% 三个月涨跌幅：+1.52%52 周涨跌幅：+1.52% 52周Beta：+1.52%
            // "zd": "涨跌", "zdf": "涨跌幅(%)", 
            // [json.zd, json.zdf, json.jnzdf, json.zdf3, json.zdf12, json.beta]
            // "sjz": "时间轴", "gj": "股价", "cjl": "成交量", "szzs": "上证指数"
            // ["sjz", "gj", "cjl", "szzs"]
            // sort 时间轴
            let strs = json.details.map(
                (obj) => {
                    console.log(obj.sjz);
                    return obj.sjz;
                }
            );
            strs = strs.sort();
            //  ["2007-04-30", "2009-10-31", "2010-02-28", "2016-10-31", "2017-09-30"]
            arr = strs.map(
                (date) => {
                    // "2007-04-30"
                    for (var i = 0; i < strs.length; i++) {
                        if(date === arr.details[i].sjz){
                            return arr.details[i];
                        }
                    }
                }
            );
            // Array.isArray(arr);
            let keys = Object.keys(arr[0]);
            // ["sjz", "gj", "cjl", "szzs"]
            const arr_obj = {};
            keys.forEach(
                (key, index) => {
                    // "sjz": "时间轴", "gj": "股价", "cjl": "成交量", "szzs": "上证指数"
                    let new_key = ``;
                    switch (key) {
                        case "sjz":
                            new_key = `time`;
                            break;
                        case "gj":
                            new_key = `stock_price`;
                            break;
                        case "cjl":
                            new_key = `turn_over`;
                            break;
                        case "szzs":
                            new_key = `SH_Index`;
                            break;
                        default:
                            new_key = `😟 暂无数据`;
                            break;
                    }
                    arr_obj[new_key] = [];
                }
            );
            console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
            let counter = 1;
            arr.map(
                (obj, i) => {
                    // console.log(`obj = `, JSON.stringify(obj, null, 4));
                    let time = ``, turn_over = ``, stock_price = ``, SH_Index = ``;
                    time = (obj.sjz !== undefined) ? obj.sjz : `😟 暂无数据`;
                    // no string, just keep number!
                    turn_over = (obj.cjl !== undefined) ? obj.cjl : `😟 暂无数据`;
                    stock_price = (obj.gj !== undefined) ? obj.gj : `😟 暂无数据`;
                    SH_Index = (obj.szzs !== undefined) ? obj.szzs : `😟 暂无数据`;
                    // average = -1.7976931348623157e+308;
                    // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : null) : `😟 暂无数据`;
                    arr_obj.time.push(time);
                    arr_obj.stock_price.push(stock_price);
                    arr_obj.turn_over.push(turn_over);
                    arr_obj.SH_Index.push(SH_Index);
                    // return arr_obj;
                    if (counter === 1) {
                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                        counter ++;
                    }
                }
            );
            console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
            datas = Object.assign(datas, arr_obj);
            SPTdrawHS(datas, uid);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    return datas;
};



/**
 * @author xgqfrms
 * 
 * @param {* Object} datas 
 * @param {* String} container_uid 
 * @param {* Boolean} debug
 */

const SPTdrawHS = (datas = {}, container_uid = `container`, debug = false) => {
    let time = datas.time,
        SH_Index = datas.SH_Index,
        turn_over = datas.turn_over,
        stock_price = datas.stock_price;
    console.log(`time = \n`, time[0]);
    // console.log(`time = \n`, new Date(time[0]).getTime());
    // 2012-12-31 => var oldTime = (new Date("2012/12/31 20:11:11").getTime(); 
    // 得到毫秒数  
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
    Highcharts.setOptions({
        lang: {
            rangeSelectorZoom: ''
        }
    });
    // console.log(json);
    var ohlc = [],
        volume = [],
        sh_index = [],
        dataLength = datas.time.length,
        // set the allowed units for data grouping
        groupingUnits = [
            [
                'week', // unit name
                [1] // allowed multiples
            ],
            [
                'month', [1, 2, 3, 4, 6]
            ]
        ],
        i = 0;
    // datas.time = datas.time.map((k, i) => datas.time[datas.time.length - 1 - i]);
    // reverse 逆序
    console.log(`datas.time = \n`, datas.time);
    for (i; i < dataLength; i ++) {
        let new_ms_time = new Date(datas.time[i]).getTime();
        ohlc.push([
            new_ms_time, // the date ??? 1147651200000 (ms) ??? new Date(oldTime);
            datas.stock_price[i],
            datas.SH_Index[i]
        ]);
        volume.push([
            new_ms_time,
            datas.turn_over[i]
        ]);
        sh_index.push([
            new_ms_time,
            datas.SH_Index[i]
        ]);
    }
    console.log(ohlc);
    console.log(volume);
    console.log(sh_index);
    Highcharts.stockChart(container_uid, {
        rangeSelector: {
            selected: 1,
            inputDateFormat: '%Y-%m-%d'
        },
        credits: {
            enabled: true,// enabled: false,
            href: `https://www.gildata.com`,
            text: `gildata`,
            // position: https://api.highcharts.com/highstock/credits.style,
            // style: https://api.highcharts.com/highstock/credits.style
        },
        title: {
            // text: '股价/成交量'
        },
        xAxis: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%m-%d',
                week: '%m-%d',
                month: '%y-%m',
                year: '%Y'
            }
        },
        yAxis: [
            {
                labels: {
                    align: 'right',
                    x: -3,
                    // formatter: () => {
                    //     console.log(`this.value`, this.value);
                    //     // undefined
                    //     // ??? -20 / 30
                    //     return this.value > 0 ? `+${this.value}%` : `${this.value}%`;
                    // },
                },
                title: {
                    text: '股价/上证指数'//股价
                },
                height: '60%',
                lineWidth: 2,
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: '成交量'
                },
                top: '62.5%',
                height: '37.5%',
                offset: 0,
                lineWidth: 2
            },
            {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    // text: '上证指数'
                },
                height: '60%',
                offset: 0,
                lineWidth: 2
            }
        ],
        series: [
            {
                // type: 'candlestick',
                type: 'line',// 样条 "spline"
                name: '股价',
                color: 'green',
                lineColor: 'green',
                upColor: 'red',
                upLineColor: 'red',
                tooltip: {},
                navigatorOptions: {
                    color: Highcharts.getOptions().colors[0]
                },
                data: ohlc,
                dataGrouping: {
                    units: groupingUnits
                },
                // compare: 'percent',
                // showInNavigator: true
            },
            {
                type: 'column',
                name: '成交量',
                data: volume,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            },
            {
                type: 'line',
                name: '上证指数',
                data: sh_index,
                color:"#1a75bc",
                yAxis: 2,
                dataGrouping: {
                    units: groupingUnits
                }
            },
        ]
    });
    // svg style
    // let svg_ranges = document.querySelectorAll(`.highcharts-range-label`);
    // svg_ranges[0].lastChild.innerHTML = `从`;// 从到
    // svg_ranges[1].lastChild.innerHTML = `到`;// 从
}



// call fetch json datas
setTimeout(() => {
    // async & await
    const sf_num= `stockfast06`;
    const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
    let uid = `stock_price_turnover_hs_container`;
    let hs_datas = SPTurnover(url, true, uid);
    console.log(`hs_datas = \n`, JSON.stringify(hs_datas, null, 4));
    // profitForecast(url, true, uid);
    // let hs_container_uid = document.querySelector(`[data-hs-container="data-profit-forecast-container-uid"]`);
    // setTimeout(() => {
    //     SPTdrawHS(hs_datas, uid);
    // }, 0);
}, 0);


/* 




https://www.highcharts.com/stock/demo/compare
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/stock/demo/compare/

https://www.highcharts.com/stock/demo/yaxis-plotlines


¥7.06 +0.05 +0.71%




今年以来涨跌幅 1.52%
3个月涨跌幅 0.89%
52周涨跌幅 -12.74%
52周Beta 0.32

#ff2323

14px
24px






*/

/* 

    recurve 反
    Reverse 逆序
    let a = [1,2,3,4,5,6,7,8,9],
        l = a.length;
        aa = a.map(
        (key, index) => {
            console.log(`key, index = \n`, key, index);
            let ni = l - 1 - index;
            console.log(`new index = \n`, ni);
            return a[ni];
        }
    );
    aa;
    // [9, 8, 7, 6, 5, 4, 3, 2, 1]

    // aa = a.map((k, i) => a[a.length - 1 - i]);
*/

