"use strict";

/**
 * stock-price-turnover 股价/成交量
 * xgqfrms
 * creadted 2017.10.29
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */
import "whatwg-fetch";

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.SPTurnover = STOCK_F9_FV.Modules.SPTurnover || (
    (url = ``, uid = `default_dom_uid`, debug = false) => {
        let datas = {};
        // fetch(`http://10.1.5.202/json/stock-f9/6.json`)
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                let arr = [];
                // let arr = json;
                if (debug) {
                    console.log(`json = \n`, json);
                }
                if (typeof(json) === "object"  && Object.keys(json).length > 0) {
                    let {
                        zd: up_drop,
                        zdf: up_drop_amplitude,
                        jnzdf: since_amplitude,
                        zdf3: quarter_amplitude,
                        zdf12: year_amplitude,
                        beta: year_beta,
                        gj: stcok_price,
                    } = json;
                    // let stcok_price = `88.8`;// only for test!
                    if (debug) {
                        console.log(`up_drop = \n`, up_drop);
                        console.log(`up_drop_amplitude = \n`, up_drop_amplitude);
                        console.log(`stcok_price = \n`, stcok_price);
                        console.log(`since_amplitude = \n`, since_amplitude);
                        console.log(`year_amplitude = \n`, year_amplitude);
                        console.log(`up_drop = \n`, up_drop);
                        console.log(`year_beta = \n`, year_beta);
                    }
                    let big_values = [stcok_price, up_drop, up_drop_amplitude],
                        small_values = [since_amplitude, quarter_amplitude, year_amplitude, year_beta];
                    if (debug) {
                        console.log(`big_values = \n`, big_values);
                        console.log(`small_values = \n`, small_values);
                    }
                    const isUpTest = (str_num = ``) => {
                        return str_num.includes(`-`);
                    };
                    const showStockTitles = (big_arr = [],  small_arr= []) => {
                        let big_spans = document.querySelectorAll(`[data-title-span="big-span"]`),
                            small_spans = document.querySelectorAll(`[data-title-span="small-span"]`),
                            big_span_icon = document.querySelector(`[data-status="big-span"]`);
                        if (debug) {
                            console.log(`big_spans = \n`, big_spans);
                            console.log(`small_spans = \n`, small_spans);
                        }
                        // window.getComputedStyle(big_spans[0], null).getPropertyValue("background-image");
                        let isBigDown = false,
                            isBigDefault = false;
                        if (isUpTest(big_arr[1]) || isUpTest(big_arr[2])) {
                            isBigDown = true;
                        }
                        if (big_arr[1] === "0.00" && big_arr[2] === "0.00") {
                            isBigDefault = true;
                        }
                        for (let i = 0; i < big_spans.length; i++) {
                            // big_spans[i].classList.toggle("big-span-green");
                            big_spans[i].innerHTML = big_arr[i];
                            if (isBigDown === true) {
                                big_spans[i].classList.add(`big-span-green`);
                                if (i === 0) {
                                    big_span_icon.setAttribute("data-status", `big-span-down`);
                                }
                            }else{
                                if (isBigDefault === true) {
                                    // default
                                    big_spans[i].classList.add(`big-span-default`);
                                    if (i === 0) {
                                        big_span_icon.setAttribute("data-status", `big-span-default`);
                                        // data-status="big-span*"
                                        // data-status="big-span-up"
                                        // data-status="big-span-down"
                                        // data-status="big-span-default"
                                    }
                                }else{
                                    big_spans[i].classList.add(`big-span-red`);
                                    if (i === 0) {
                                        big_span_icon.setAttribute("data-status", `big-span-up`);
                                    }
                                }
                            }
                        }
                        // not show & 52周Beta
                        // for (let i = 0; i < small_spans.length -1; i++) {
                        for (let i = 0; i < small_spans.length; i++) {
                            if (isUpTest(small_arr[i]) === true) {
                                small_spans[i].innerHTML = small_arr[i];
                                small_spans[i].classList.add(`small-span-green`);
                            }else{
                                small_spans[i].innerHTML = `+${small_arr[i]}`;
                                small_spans[i].classList.add(`small-span-red`);
                            }
                        }
                    };
                    showStockTitles(big_values, small_values);
                    let strs = json.details.map(
                        (obj, i) => {
                            if (debug) {
                                if(debug && obj.sjz === "2016-12-26"){
                                    // console.log(`obj =`, obj, i);
                                }
                                console.log(`obj =`, obj, i);
                            }
                            return obj.sjz;
                        }
                    );
                    strs = strs.sort();
                    arr = strs.map(
                        (date) => {
                            for (var i = 0; i < strs.length; i++) {
                                if(date === json.details[i].sjz){
                                    // arr.details[i].sjz = new Date(arr.details[i].sjz).getTime();
                                    /*
                                        x = "2017-10-25";
                                        // "2017-10-25"
                                        new Date(x);
                                        // Wed Oct 25 2017 08:00:00 GMT+0800 (中国标准时间)
                                        new Date(x).getTime();
                                        // 1508889600000
                                    */
                                    return json.details[i];
                                    // break;
                                }
                            }
                        }
                    );
                    let keys = Object.keys(arr[0]);
                    const arr_obj = {};
                    keys.forEach(
                        (key, index) => {
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
                                    new_key = `暂无数据`;
                                    break;
                            }
                            arr_obj[new_key] = [];
                        }
                    );
                    let counter = 1;
                    arr.map(
                        (obj, i) => {
                            let time = ``,
                                turn_over = ``,
                                stock_price = ``,
                                SH_Index = ``;
                            // `暂无数据` === null
                            time = (obj.sjz !== undefined) ? obj.sjz : null;
                            // no string, just keep number!
                            turn_over = (obj.cjl !== undefined) ? parseFloat(obj.cjl) : null;
                            stock_price = (obj.gj !== undefined) ? parseFloat(obj.gj) : null;
                            SH_Index = (obj.szzs !== undefined) ? ((obj.szzs !== "--") ? parseFloat(obj.szzs) : null ) : null;
                            arr_obj.time.push(time);
                            arr_obj.stock_price.push(stock_price);
                            arr_obj.turn_over.push(turn_over);
                            arr_obj.SH_Index.push(SH_Index);
                            if (debug && counter === 1) {
                                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                counter ++;
                            }
                        }
                    );
                    datas = Object.assign(datas, arr_obj);
                    STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS(datas, uid);
                    setTimeout(() => {
                        // HS no input
                        let hs_inputs = document.querySelectorAll(`input.highcharts-range-selector`);
                        if(hs_inputs.length > 0){
                            for (let i = 0; i < hs_inputs.length; i++) {
                                let old_style = hs_inputs[i].getAttribute(`style`),
                                    new_style = `display: none; cursor: not-allowed; readonly`,
                                    style = `${old_style} ${new_style}`;
                                hs_inputs[i].setAttribute(`style`, style);
                            }
                            console.log(`disable hs_inputs OK!`);
                        }else{
                            // no input
                            console.log(`disable hs_inputs error!`);
                        }
                    }, 0);
                }else{
                    // console.log(`json is empty! = \n`, json);
                    // alert(`暂无数据!`);
                    datas.time = [];
                    datas.SH_Index = [];
                    datas.turn_over  = [];
                    datas.stock_price = [];
                    STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS(datas, uid);
                }
                // else{
                //     let hc_uid = document.querySelector(`[data-uid="stock-price-turnover"]`),
                //         // hc_parent = hc_uid.parentNode,
                //         hc_prev_dom = hc_uid.previousElementSibling,
                //         no_data_html = `
                //             <div>
                //                 <p data-none="no-data-p">
                //                     <span data-none="no-data-span"></span>
                //                 </p>
                //             </div>
                //         `;
                //     // remove self
                //     hc_uid.remove();
                //     // add no-data
                //     hc_prev_dom.insertAdjacentHTML(`afterend`, no_data_html);
                // }
            }
        )
        .catch(err => {
            console.log(`fetch error = \n`, err);
            // no data
        });
        // return datas;
    }
);



/**
 * @author xgqfrms
 *
 * @param {* Object} datas
 * @param {* String} container_uid
 * @param {* Boolean} debug
 */

STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS = STOCK_F9_FV.Modules.SPTurnover.SPTdrawHS || (
    (datas = {}, container_uid = `container`, debug = false) => {
        let time = datas.time,
            SH_Index = datas.SH_Index,
            turn_over = datas.turn_over,
            stock_price = datas.stock_price;
        // 2012-12-31 => var oldTime = (new Date("2012/12/31 20:11:11").getTime();
        // 得到毫秒数
        let max_time = (time.length-10);// ???
        let yAxisMargin = (Object.keys(datas.time).length > 0) ? 2 : 10;
        // console.log(`yAxisMargin =`, yAxisMargin, Object.keys(datas).length, Object.keys(datas.time).length);
        // datas
        if (debug) {
            console.log(`datas = \n`, datas);
        }
        const chart_css = {
            // color: `#0B1016`,
            color: '#0B1016',
            colors: ['#ff1919', '#ffff66', '#92d050'],
            // optioncolor: `red`,
            optioncolor: 'red',
            // gridColor: `#2D3039`,
            gridColor: '#2D3039',
            legendColor: '#fff',
            // legendColor: `#fff`,
            // yAxisColor: `#FFB400`,
            yAxisColor: '#FFB400',
        };
        // const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
        let color = chart_css.color,
            colors = chart_css.colors,
            // optioncolor = chart_css.optioncolor,
            gridColor = chart_css.gridColor,
            legendColor = chart_css.legendColor,
            yAxisColor = chart_css.yAxisColor;
        let ohlc = [],
            prices = [],
            volume = [],
            sh_index = [],
            dataLength = datas.time.length,
            // set the allowed units for data grouping
            // groupingUnits = [
            //     [
            //         'week', // unit name
            //         [1] // allowed multiples
            //     ],
            //     [
            //         'month', [1, 2, 3, 4, 6]
            //     ]
            // ],
            data = [],
            i = 0;
        // datas.time = datas.time.map((k, i) => datas.time[datas.time.length - 1 - i]);
        // reverse 逆序
        // console.log(`datas.time = \n`, datas.time);
        for (i; i < dataLength; i ++) {
            let new_ms_time = new Date(datas.time[i]).getTime();
            data.push([
                new_ms_time, // the date ??? 1147651200000 (ms) ??? new Date(oldTime);
                datas.stock_price[i],
                datas.turn_over[i],
                datas.SH_Index[i]
            ]);
            // ohlc.push([
            //     new_ms_time,
            //     datas.stock_price[i],
            //     datas.SH_Index[i]
            // ]);
            prices.push([
                new_ms_time,
                datas.stock_price[i]
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
        if (debug) {
            console.log(ohlc);
            console.log(prices);
            console.log(sh_index);
            console.log(volume);
        }
        // let max_time = (time.length-10);// ???
        /*
            Highcharts lang 配置是全局配置
            针对所有图表有效，所有不能单独设置在某个图表中在，
            只能在图表初始化之前通过 Highcharts.setOptions 来设置生效。
        */
        // Highcharts.setOptions({
        //     lang: {
        //         // noData: '暂无数据',
        //         noData:  `
        //             <p data-none="no-data-hc">
        //                 <span data-none="no-data-span"></span>
        //             </p>
        //         `,
        //         loading: `Loading....`,
        //     }
        // });
        // HS & stock
        let input_skin = (window.STOCK_Skin === "black") ? `#bbc1c7` : `#333`,
            input_border_skin = (window.STOCK_Skin === "black") ? `#707070` : `#ccc`,
            input_label_skin = (window.STOCK_Skin === "black") ? `#707070` : `#ccc`;
        // colors
        let bg_skin = (window.STOCK_Skin === "black") ? `#0b1016` : `#fff`,
            bd_skin = (window.STOCK_Skin === "black") ? `#666` : `#ccc`,
            item_skin = (window.STOCK_Skin === "black") ? `#bcc1c7` : `#000`,
            hover_skin = (window.STOCK_Skin === "black") ? `#f79530` : `#f79530`,
            grid_line_color = (STOCK_Skin === "black") ? `#2d3039` : `#e9e9e9`,
            border_color = (STOCK_Skin === "black") ? `#4a4c4f` : `#d7dbe0`;
        // bd #707070
        // fc #bbc1c7
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
                // noData: "暂无数据",
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
        Highcharts.stockChart(container_uid, {
            chart: {
                // type: 'column',
                // height: 272,
                marginTop: 20,
                backgroundColor: bg_skin,
                // height: 360,
            },
            noData: {
                // attr: undefined,
                // position: {
                //     align: "center",
                //     verticalAlign: "middle",
                //     x: 0,
                //     y: 0
                // },
                // style: { "fontSize": "12px", "fontWeight": "bold", "color": "#777" },
                useHTML: true,
                // useHTML: false
            },
            credits: {
                // enabled: true,//
                enabled: false,
                href: `https://www.gildata.com`,
                text: `gildata`,
                // position: https://api.highcharts.com/highstock/credits.style,
                // style: https://api.highcharts.com/highstock/credits.style
            },
            title: {
                // text: '股价/成交量'
            },
            xAxis: {
                // categories: time,
                // min: max_time,// auto right === max x value
                // min: 0,
                // max: 8,
                // tickPixelInterval: 120
                labels: {
                    // autoRotation:'false',
                    autoRotation: [0],
                    step: 1
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    // millisecond: '%H:%M:%S.%L',
                    // second: '%H:%M:%S',
                    // minute: '%H:%M',
                    // hour: '%H:%M',
                    // day: '%m-%d',
                    // week: '%m-%d',
                    // month: '%y-%m',
                    // year: '%Y'
                    // millisecond: '%H:%M:%S.%L',
                    // second: '%H:%M:%S',
                    // minute: '%H:%M',
                    // hour: '%H:%M',
                    day: '%m月 %d日',
                    week: '%m月 %d日',
                    month: '%y年 %m月',
                    year: '%Y年'
                },
                tooltip: {
                    xDateFormat: '%Y年 %m月 %d日',
                    // valueDecimals: 3
                },
                tickColor: grid_line_color,
                lineColor: grid_line_color,
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
                        // text: '股价/上证指数',
                        text: '股价'
                    },
                    // height: '60%',
                    height: '70%',
                    // lineWidth: 2,
                    lineColor: grid_line_color,
                    lineWidth: 1,
                    plotLines: [{
                        value: 0,
                        // width: 1,
                        // width: 2,
                        // color: 'silver',
                        color: grid_line_color,
                    }],
                    // min: 0,
                    opposite: false,// default true
                    gridLineColor: grid_line_color,
                },
                {
                    // opposite: true,
                    labels: {
                        align: 'left',
                        x: 3
                    },
                    title: {
                        text: '上证指数'
                    },
                    // height: '60%',
                    height: '70%',
                    offset: 0,
                    lineWidth: 1,
                    lineColor: grid_line_color,
                    // lineWidth: 2,
                    // min: 0,
                    gridLineColor: grid_line_color,
                },
                {
                    labels: {
                        align: 'left',
                        x: 3,
                    },
                    title: {
                        text: '成交量',
                        margin: yAxisMargin,
                        // margin: 10,
                        // margin: 2,
                        // align: "low",
                        // "low", "middle" or "high".

                    },
                    // top: '62.5%',
                    // height: '37.5%',
                    top: '80%',
                    height: '20%',
                    // top: '72.5%',
                    // height: '27.5%',
                    // offset: -5,
                    offset: 0,
                    // lineWidth: 2,
                    lineWidth: 1,
                    // opposite: false,// default true,
                    lineColor: grid_line_color,
                    gridLineColor: grid_line_color,
                    // gridLineWidth: 0,
                },
                // {
                //     labels: {
                //         align: 'right',
                //         x: 3
                //     },
                //     title: {
                //         text: '成交量'
                //     },
                //     // top: '62.5%',
                //     // height: '37.5%',
                //     top: '82.5%',
                //     height: '17.5%',
                //     offset: 0,
                //     lineWidth: 2
                // }
            ],
            tooltip: {
                xDateFormat: '%Y年 %m月 %d日',
                shared: true,
                // valueDecimals: 3,
                // crosshairs:[
                //     {
                //         enabled: true,//是否显示X轴标线
                //         width: 1,//标线宽度
                //         color: 'red' //标线颜色值
                //     },
                //     {
                //         enabled: false,//是否显示Y轴标线
                //         width: 1,//标线宽度
                //         color: 'hotpink', //标线颜色值
                //     },
                // ],
                // style:{
                //     display:'none', //通过样式表控制不显示tooltip数据提示框
                // },
            },
            // plotOptions: {
            //     series: {
            //         pointStart: Date.UTC(2012, 0, 1),
            //         pointInterval: 24 * 3600 * 1000
            //     }
            // },
            series: [
                {
                    // type: 'candlestick',
                    type: 'line',// 样条 "spline"
                    name: '股价',
                    color: 'green',
                    // lineColor: 'green',
                    // upColor: 'red',
                    // upLineColor: 'red',
                    tooltip: {
                        // formatter: () => {
                        //     return `
                        //         <b> ${this.series.name} </b><br/>
                        //     `;
                        // },
                        valueSuffix: ' 元',
                        // crosshairs:[
                        //     {
                        //         enabled: true,//是否显示X轴标线
                        //         width: 1,//标线宽度
                        //         color: 'red', //标线颜色值
                        //     },
                        //     {
                        //         enabled: true,//是否显示Y轴标线
                        //         width: 1,//标线宽度
                        //         color: 'hotpink', //标线颜色值
                        //     },
                        // ],
                        // style:{
                        //     // display:'none', //通过样式表控制不显示tooltip数据提示框
                        // },
                    },
                    // tooltip: {
                    //     formatter: () => {
                    //         return `
                    //         <b> ${this.series.name} </b><br/>
                    //         ${Highcharts.dateFormat('%Y年%m月%e日', this.x)}:
                    //         ${this.y} m
                    //         `;
                    //     }
                    // },
                    // navigatorOptions: {
                    //     color: Highcharts.getOptions().colors[0]
                    // },
                    data: prices,
                    // data: ohlc,
                    // dataGrouping: {
                    //     units: groupingUnits
                    // },
                    yAxis: 0
                    // compare: 'percent',
                    // showInNavigator: true
                },
                {
                    type: 'column',
                    name: '成交量',
                    data: volume,
                    yAxis: 2,
                    // dataGrouping: {
                    //     units: groupingUnits
                    // },
                    tooltip: {
                        // formatter: () => {
                        //     return `
                        //         <b> ${this.series.name} </b><br/>
                        //     `;
                        // },
                        valueSuffix: `手`,
                        // valueSuffix: ' 万手'
                        // crosshairs:[
                        //     {
                        //         enabled: true,//是否显示X轴标线
                        //         width: 1,//标线宽度
                        //         color: 'red', //标线颜色值
                        //     },
                        //     {
                        //         enabled: false,//是否显示Y轴标线
                        //         width: 1,//标线宽度
                        //         color: 'hotpink', //标线颜色值
                        //     },
                        // ],
                        // style:{
                        //     display:'none', //通过样式表控制不显示tooltip数据提示框
                        // },
                    },
                },
                {
                    type: 'line',
                    name: '上证指数',
                    data: sh_index,
                    color: "#1a75bc",
                    yAxis: 1,
                    // dataGrouping: {
                    //     units: groupingUnits
                    // },
                    tooltip: {
                        // formatter: () => {
                        //     return `
                        //         <b> ${this.series.name} </b><br/>
                        //     `;
                        // },
                        // valueSuffix: ' 点',
                        // crosshairs:[
                        //     {
                        //         enabled: true,//是否显示X轴标线
                        //         width: 1,//标线宽度
                        //         color: 'red', //标线颜色值
                        //     },
                        //     {
                        //         enabled: false,//是否显示Y轴标线
                        //         width: 1,//标线宽度
                        //         color: 'hotpink', //标线颜色值
                        //     },
                        // ],
                        // style:{
                        //     display:'none', //通过样式表控制不显示tooltip数据提示框
                        // },
                    },
                },
            ],
            legend: {
                enabled: true,
                backgroundColor: bg_skin,
                itemStyle: {
                    color: item_skin,
                },
                itemHoverStyle: {
                    color: hover_skin
                },
                // borderWidth: 1,
            },
            navigator: {
                enabled: false,
                // enabled: true,
                height: 20,
                margin: 10,
                // categories: time,
                // min: max_time,
                handles: {
                    backgroundColor: '#fff',
                    borderColor: '#000'
                },
                baseSeries: 7,
                // adaptToUpdatedData: true,
                // maskFill: 'rgba(180, 198, 220, 0.75)',
                // series: {
                //     data: data
                // }
            },
            scrollbar: {
                // enabled: false,
                enabled: true,
                // no scrollbar, only using rangeSelector
                step: 3,
                minWidth: 23,
                liveRedraw: true,
            },
            rangeSelector: {
                inputBoxBorderColor: input_border_skin,
                inputStyle: {
                    color: input_skin,
                    // fontWeight: 'bold'
                },
                labelStyle: {
                    color: input_label_skin,
                    // fontWeight: 'bold'
                },
                // height: 10,
                // enabled: false,
                selected: 0,// button index
                // The index of the button to appear pre-selected. 默认是：undefined.
                inputDateFormat: '%Y-%m-%d',//'%Y年%m月%d日'
                // inputDateFormat: '%Y年 %m月 %d日',
                // allButtonsEnabled: true,// highcharts-range-selector-buttons ???
                allButtonsEnabled: false,
                buttons: [
                    {
                        type: 'day',
                        count: 36,
                        text: '一天',
                        dataGrouping: {
                            // forced: true,
                            units: [['day', [1]]]
                        }
                    },
                    // {
                    //     type: 'week',
                    //     count: 1,
                    //     text: '一周',
                    //     dataGrouping: {
                    //         forced: true,
                    //         units: [['week', [1]]]
                    //     }
                    // },
                    // {
                    //     type: 'month',
                    //     count: 1,
                    //     text: '一月',
                    //     dataGrouping: {
                    //         forced: true,
                    //         units: [['month', [1]]]
                    //     }
                    // },
                    // {
                    //     type: 'month',
                    //     count: 3,
                    //     text: '三月',
                    //     dataGrouping: {
                    //         forced: true,
                    //         units: [['month', [3]]]
                    //     }
                    // },
                    // {
                    //     type: 'month',
                    //     count: 6,
                    //     text: '六月',
                    //     dataGrouping: {
                    //         forced: true,
                    //         units: [['month', [6]]]
                    //     }
                    // },
                    // {
                    //     type: 'year',
                    //     count: 1,
                    //     text: '一年',
                    //     dataGrouping: {
                    //         forced: true,
                    //         units: [['year', [1]]]
                    //     }
                    // },
                    // {
                    //     type: 'all',
                    //     text: '全部',
                    //     dataGrouping: {
                    //         forced: true,
                    //         units: [['year', [1]]]
                    //     }
                    // }
                ],
                buttonTheme: {
                    // width: 30,
                    width: 0
                }
            }
        });
        setTimeout(() => {
            let no_zoom = document.querySelector(`.highcharts-range-selector-buttons`);
            no_zoom.style.display = "none";
            // delay
            if (window.STOCK_Skin === "black") {
                let inputs = document.querySelectorAll(`input.highcharts-range-selector`);
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].setAttribute(`data-hs-background`, "no-hs-bg");
                    // [data-hs-background="no-hs-bg"]{width: 1px !important; height: 1px !important; border: 0px !important;}
                    // [data-hs-background="no-hs-bg"]{background: #0b1016;}
                }
            }else{
                // delete attribute ???
            }
        }, 0);
        //
    }
);


STOCK_F9_FV.Modules.SPTurnover.init = STOCK_F9_FV.Modules.SPTurnover.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast06/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `stock_price_turnover_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.SPTurnover(url, uid, false);
        // STOCK_F9_FV.Modules.SPTurnover(url, uid, true);
    }
);


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    // STOCK_SecCode = window.STOCK_SecCode || `600590.SH`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `black`;
    // STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.SPTurnover.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast06/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast06/`,
    // gilcode: `600570.SH`,
    // gilcode: `000003.SZ`,
    // gilcode: `600580.SH`,
    // gilcode: `600590.SH`,
});

// const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast06/600570.SH`;
// http://10.1.5.31/webservice/fastview/stock/stockfast06/600570.SH
// ip: `http://10.1.5.31`,






