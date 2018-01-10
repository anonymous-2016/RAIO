"use strict";

/**
 * @name company-performance-market 公司表现-市场表现
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* String} hst_uid
 * @param {* String} hst_uid2
 * @param {* Array} hst_uids (hst_uid, hst_uid2)
 * @param {* String} hsc_uid
 * @param {* String} hsc_uid2
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.companyPerformanceMarket = OTC_F9_FV.Modules.companyPerformanceMarket || (
    (url = ``, hst_uids = ``, hsc_uid = ``, hsc_uid2 = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                let hst_doms = document.querySelectorAll(hst_uids);
                // console.log(`hst_doms`, hst_doms[0]);
                // console.log(`hst_doms`, hst_doms[1]);
                // import utils
                const emptyChecker = (key = ``) => {
                    // arr.map() ???
                    let result = true;
                    switch (key) {
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        // case "--":
                        //     result = false;
                        //     break;
                        default:
                            break;
                    }
                    return result;
                };
                try {
                    if (typeof(datas) === "object") {
                        // no data
                        if (Object.keys(datas).length > 0) {
                            if (datas.zdf !== undefined && Array.isArray(datas.zdf)) {
                                // console.log(`datas.zdf`, datas.zdf);
                                if (datas.zdf.length > 0) {
                                    // backend & sort time
                                    let arr = datas.zdf,
                                        keys = Object.keys(arr[0]);
                                    // ["rq", "index", "stock"]
                                    const arr_obj = {};
                                    keys.forEach(
                                        (key, index) => {
                                            let new_key = ``;
                                            switch (key) {
                                                case "rq":
                                                    new_key = `time`;
                                                    break;
                                                case "index":
                                                    new_key = `otc_index`;
                                                    break;
                                                case "stock":
                                                    new_key = `up_down_amplitude`;
                                                    break;
                                                default:
                                                    new_key = `暂无数据`;// null
                                                    break;
                                            }
                                            arr_obj[new_key] = [];
                                        }
                                    );
                                    if (debug) {
                                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                    }
                                    arr.map(
                                        (obj, i) => {
                                            let time = ``,
                                                otc_index = ``,
                                                up_down_amplitude = ``;
                                            time = (obj.rq !== undefined) ? obj.rq : null;
                                            otc_index = (obj.index !== undefined) ? parseFloat(obj.index) : null;
                                            up_down_amplitude = (obj.stock !== undefined) ? parseFloat(obj.stock) : null;
                                            arr_obj.time.push(time);
                                            arr_obj.otc_index.push(otc_index);
                                            arr_obj.up_down_amplitude.push(up_down_amplitude);
                                        }
                                    );
                                    if (debug) {
                                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                    }
                                    OTC_F9_FV.Modules.companyPerformanceMarket.drawHS(arr_obj, hsc_uid);
                                }else{
                                    // `暂无数据` & no data!
                                    console.log(`json is empty! = \n`, json);
                                    const arr_obj = {};
                                    arr_obj.time = [];
                                    arr_obj.otc_index = [];
                                    arr_obj.up_down_amplitude = [];
                                    OTC_F9_FV.Modules.companyPerformanceMarket.drawHS(arr_obj, hsc_uid);
                                }
                            }
                            // typeof null & "object"
                            const shitAPI = () => {
                                // `暂无数据` & no data!
                                console.log(`json is empty! = \n`, json);
                                const arr_obj = {};
                                arr_obj.industry_average = [];
                                arr_obj.market_average = [];
                                arr_obj.code = [];
                                arr_obj.change_rate = [];
                                OTC_F9_FV.Modules.companyPerformanceMarket.drawHS2(arr_obj, hsc_uid2);
                            };
                            // no data
                            let html1 = ``, html2 = ``;
                            html1 = html2 = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            if (emptyChecker(datas.hsl)) {
                                if (Array.isArray(datas.hsl.datas) && datas.hsl.datas.length > 0) {
                                    // backend & sort time
                                    let arr = datas.hsl.datas,
                                        keys = Object.keys(arr[0]);
                                    const arr_obj = {};
                                    // arr_obj["industry_average"] = 888.8;
                                    // array bug & one data also need aray!
                                    arr_obj["industry_average"] = [parseFloat(datas.hsl.hyrjhsl)];
                                    arr_obj["market_average"] = [parseFloat(datas.hsl.scrjhsl)];
                                    // repeat 5x ??? [parseFloat(datas.hsl.scrjhsl)] : plotLines
                                    keys.forEach(
                                        (key, index) => {
                                            let new_key = ``;
                                            switch (key) {
                                                case "secuCode":
                                                    new_key = `code`;
                                                    break;
                                                case "hsl":
                                                    new_key = `change_rate`;
                                                    break;
                                                default:
                                                    new_key = `暂无数据`;// null
                                                    break;
                                            }
                                            arr_obj[new_key] = [];
                                        }
                                    );
                                    if (debug) {
                                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                    }
                                    arr.map(
                                        (obj, i) => {
                                            let code = ``,
                                                change_rate = ``;
                                            code = (obj.secuCode !== undefined) ? obj.secuCode : null;
                                            change_rate = (obj.hsl !== undefined) ? parseFloat(obj.hsl) : null;
                                            arr_obj.code.push(code);
                                            arr_obj.change_rate.push(change_rate);
                                        }
                                    );
                                    if (debug) {
                                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                    }
                                    OTC_F9_FV.Modules.companyPerformanceMarket.drawHS2(arr_obj, hsc_uid2);
                                }else{
                                    shitAPI();
                                }
                                if (emptyChecker(datas.hsl.hsl) && emptyChecker(datas.hsl.secuName)&& emptyChecker(datas.hsl.hslpm)) {
                                    let a = parseFloat(datas.hsl.hsl),
                                        b = parseFloat(datas.hsl.scrjhsl);
                                    let compare =  (a === b) ? `等于` : ((a > b) ? `高于` : `低于`);
                                    // console.log(`a`, a, `b` , b, `a > b`, a > b);
                                    // 等于 equals
                                    html2 = `
                                        <p data-p="company-performance-market-p">
                                            <span data-span="company-performance-market-span">${datas.hsl.secuName}</span> 近一个月平均换手率为
                                            <span data-span="company-performance-market-span">${datas.hsl.hsl}</span> %,
                                            <span data-span="company-performance-market-span">${compare}</span>市场平均值, 市场排名
                                            <span data-span="company-performance-market-span">${datas.hsl.hslpm}</span>.
                                        </p>
                                    `;
                                } else {
                                    // no data
                                }
                            }else{
                                shitAPI();
                            }
                            if (emptyChecker(datas.zdfpm) && emptyChecker(datas.zdfbj) && emptyChecker(datas.secuName)) {
                                html1 = `
                                    <p data-p="company-performance-market-p">
                                        <span data-span="company-performance-market-span">${datas.secuName}</span>近一个年涨跌幅市场排名
                                        <span data-span="company-performance-market-span">${datas.zdfpm}</span> 名,
                                        <span data-span="company-performance-market-span">${datas.zdfbj}</span>三板成指.
                                    </p>
                                `;
                            }else{
                                // no data
                            }
                            hst_doms[0].insertAdjacentHTML(`beforeend`, html1);
                            hst_doms[1].insertAdjacentHTML(`beforeend`, html2);
                        } else {
                            // no data ??? set module container & no data!
                            let html = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            hst_doms[0].insertAdjacentHTML(`beforeend`, html);
                            // hst_doms[1].insertAdjacentHTML(`beforeend`, html);
                            hst_doms[1].setAttribute(`no-data-hs-container`, `no-data-company-performance-market-container-uid`);
                            // `暂无数据` & no data!
                            let hc_dom = document.querySelector(`#${hsc_uid}`),
                                hc_dom2 = document.querySelector(`#${hsc_uid2}`);
                            hc_dom.setAttribute(`no-data-hs-container`, `no-data-company-performance-market-container-uid`);
                            hc_dom2.setAttribute(`no-data-hs-container`, `no-data-company-performance-market-container-uid`);
                            // hsc_uid2
                        }
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-performance-market.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/company-performance-market.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);



/**
 * @author xgqfrms
 *
 * @param {* Object} datas
 * @param {* String} container_uid
 * @param {* Boolean} debug
 */


OTC_F9_FV.Modules.companyPerformanceMarket.drawHS = OTC_F9_FV.Modules.companyPerformanceMarket.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        let {time, otc_index, up_down_amplitude} = datas;
        // let {time, otc_index, up_down_amplitude} = {...datas};
        // console.log(`container_uid = \n`, container_uid);
        // console.log(`time = \n`, time);
        // console.log(`otc_index = \n`, otc_index);
        // console.log(`up_down_amplitude = \n`, up_down_amplitude);
        let max_time = (time.length-10);
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            index_color: `#2196f3`,
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor, index_color} = {...chart_css};
        // Highcharts.chart
        Highcharts.setOptions({
            lang: {
                // noData: '暂无数据',
                noData:  `
                    <p data-none="no-data-hc">
                        <span data-none="no-data-span"></span>
                    </p>
                `,
                // loading: `Loading....`,
            }
        });
        Highcharts.chart(container_uid, {
            noData: {
                useHTML: true,
            },
            chart: {
                // type: 'column',
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                // height: 272,// 275px;
                // 16:9 ratio
                // marginTop: 30,
                // marginBottom: 65,
                // plotBorderWidth: 1,
                // marginLeft: 80
            },
            title: {
                // text: '近一年涨跌幅',
                text: '',
                align: "left",
                x: 70,
                y: 10,
            },
            xAxis: {
                categories: time,
                // min: max_time,
                // min: 0,
                // max: 8,
                // xAxis datas
                labels: {
                    // autoRotation: [0],// autoRotation:'false',
                    // step: 100,
                    // step: 2,
                }
            },
            credits: {
                enabled: false,// enabled: true,
                href: `https://www.gildata.com`,
                text: `gildata`,
            },
            colors: ['#ff1919', '#ffff66', '#92d050'],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    // min: 0,
                    floor: 1000,
                    // ceiling: 100,
                    // max: 100,
                    title: {
                        // text: '三板成指',
                        text: ``,
                    },
                    labels: {
                        format: '{value}',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    // stackLabels: {// stackLabels
                    //     enabled: true,
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // }
                }, // yAxis 2
                {
                    // x: -50,
                    // y: -50,
                    // min: 0,
                    // max: 100, // 0-100 ???
                    // ceiling: 100,
                    // step: 10,
                    title: {
                        // text: '涨跌幅',
                        // text: `股票价格`,
                        text: ``,
                    },
                    labels: {
                        format: '{value}',// 百分比
                        // format: '{value} %',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    // stackLabels: {// stackLabels
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
                symbolRadius: 0,
                // rectangle
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
                // pointFormat: `
                //     <span style="color:{point.color}">\u25CF</span>
                //     {series.name}: {point.y} <br/>
                //     <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                // `,
                shared: true
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                // column: {
                //     // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                //     // stacking: 'null',
                //     // stacking: 'percent',// 百分比堆叠柱形图
                //     dataLabels: {
                //         enabled: true,
                //         // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                //         color: "#434348"
                //     }
                // },
                // spline: {
                //     stacking: 'normal',
                //     dataLabels: {
                //         enabled: true,
                //         color: "#434348"
                //     }
                // }
            },
            series: [
                {
                    type:'spline',
                    name: '三板成指',
                    // color: "#f04949",
                    color: '#ff00ff',
                    data: otc_index,
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} 点</b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                },
                {
                    type: 'spline',
                    yAxis: 1,
                    color: "skyblue",
                    // color: "lawngreen",
                    // name: '股价',
                    name: '股票价格',
                    // name: '涨跌幅',
                    data: up_down_amplitude,
                    connectNulls: true,// OK
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //     时间/ 日期 {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} 元</b><br/>
                        `,
                        // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                }
            ],
            // scrollbar: {
            //     enabled: true,
            //     minWidth: 23,
            // }
        });
    }
);

OTC_F9_FV.Modules.companyPerformanceMarket.drawHS2 = OTC_F9_FV.Modules.companyPerformanceMarket.drawHS2 || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        let {code, change_rate, industry_average, market_average} = datas;
        // console.log(`drawHS2 datas = `, JSON.stringify(datas, null, 4));
        let v1 = market_average[0],
            v2 = industry_average[0],
            len = code.length !== undefined ? (code.length - 1) : (6 - 1);
        for (let i = 0; i < len; i++) {
            market_average.push(v1);
            industry_average.push(v2);
        }
        // let max_time = (time.length-10);
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            index_color: `#2196f3`,
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        // console.log(`industry_average = \n`, industry_average, typeof(industry_average));
        // console.log(`market_average = \n`, market_average);
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor, index_color} = {...chart_css};
        // Highcharts.chart
        Highcharts.setOptions({
            lang: {
                // noData: '暂无数据',
                noData:  `
                    <p data-none="no-data-hc">
                        <span data-none="no-data-span"></span>
                    </p>
                `,
                loading: `Loading....`,
            }
        });
        Highcharts.chart(container_uid, {
            noData: {
                useHTML: true,
            },
            chart: {
                type: 'column',
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                // height: 272,// 275px;
                // 16:9 ratio
                // marginTop: 30,
                // marginBottom: 65,
                plotBorderWidth: 1,
                // marginLeft: 80
            },
            title: {
                // text: '月平均换手率',
                text: '',
                align: "left",
                x: 70,
                y: 10,
            },
            xAxis: {
                categories: code,
                // min: max_time,
                // min: 0,
                // max: 8,
                // xAxis datas
                labels: {
                    autoRotation: [0],// autoRotation:'false',
                    step: 1
                },
                // plotLines: [{
                //     color: 'black',
                //     dashStyle: 'dot',
                //     width: 2,
                //     value: 1,//
                //     label: {
                //         rotation: 0,
                //         y: 15,
                //         style: {
                //             fontStyle: 'italic'
                //         },
                //         text: 'Safe fat intake 65g/day'
                //     },
                //     zIndex: 3
                // }]
            },
            credits: {
                enabled: false,// enabled: true,
                href: `https://www.gildata.com`,
                text: `gildata`,
            },
            colors: ['#ff1919', '#ffff66', '#92d050'],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100,
                    title: {
                        // text: '换手率',
                        text: '',
                    },
                    labels: {
                        format: '{value}',// 百分比  %
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    // stackLabels: {// stackLabels
                    //     enabled: true,
                    //     style: {
                    //         fontWeight: 'bold',
                    //         color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    //     }
                    // }
                    // plotLines: [
                    //     {
                    //         color: '#ff0000',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         // value: 1,
                    //         value: market_average,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `市场平均 ${market_average} %`,
                    //         },
                    //         zIndex: 3
                    //     },
                    //     {
                    //         color: '#00ff00',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         value: 1,
                    //         // value: industry_average,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `行业平均 ${(industry_average)} %`,
                    //         },
                    //         zIndex: 3
                    //     }
                    // ],
                }
            ],
            legend: {
                symbolRadius: 0,
                // rectangle
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
                // pointFormat: `
                //     <span style="color:{point.color}">\u25CF</span>
                //     {series.name}: {point.y} <br/>
                //     <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                // `,
                shared: true
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                // column: {
                //     // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                //     // stacking: 'null',
                //     // stacking: 'percent',// 百分比堆叠柱形图
                //     dataLabels: {
                //         enabled: true,
                //         // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                //         color: "#434348"
                //     }
                // },
                // spline: {
                //     stacking: 'normal',
                //     dataLabels: {
                //         enabled: true,
                //         color: "#434348"
                //     }
                // }
            },
            series: [
                {
                    type:'spline',
                    name: '市场平均',
                    // color: "#f04949",
                    color: '#00ff00',
                    data: market_average,
                    lineWidth: 2,
                    zIndex: 3,
                    marker : {
                        enabled : true,
                        radius : 0,
                        symbol: 'square'
                    },
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} %</b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                },
                {
                    type:'spline',
                    name: '行业平均',
                    // color: "#f04949",
                    color: '#ff00ff',
                    data: industry_average,
                    lineWidth: 2,
                    zIndex: 2,
                    marker : {
                        enabled : true,
                        radius : 0,
                        symbol: 'square'
                    },
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} %</b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                },
                {
                    // type: 'spline',
                    // yAxis: 1, // 0 ???
                    color: "skyblue",
                    name: '月平均换手率',
                    data: change_rate,
                    zIndex: 1,
                    connectNulls: true,// OK
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //     时间/ 日期 {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} %</b><br/>
                        `,
                        // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                }
            ],
            // scrollbar: {
            //     enabled: true
            // }
        });
    }
);

OTC_F9_FV.Modules.companyPerformanceMarket.init = OTC_F9_FV.Modules.companyPerformanceMarket.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast05/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            // hst_uid = `[data-hs-title="data-company-performance-market-title-uid"]`,
            // hst_uid2 = `[data-hs-title="data-company-performance-market-title-uid"]`,
            hst_uids = `[data-hs-title="data-company-performance-market-title-uid"]`,
            hsc_uid = `company_performance_market_hs_container`,
            hsc_uid2 = `company_performance_market_hs_container2`;
            // hsc_uid = `[data-hs-container="data-company-performance-market-container-uid"]`;
        // copy(Object.keys(json));
        OTC_F9_FV.Modules.companyPerformanceMarket(url, hst_uids, hsc_uid, hsc_uid2, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    // OTC_GILCODE = window.OTC_GILCODE || `430007.OC`;// no data
    // OTC_GILCODE = window.OTC_GILCODE || `430003.OC`;
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.companyPerformanceMarket.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast05/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.companyPerformanceMarket.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast05/430002.OC`;




