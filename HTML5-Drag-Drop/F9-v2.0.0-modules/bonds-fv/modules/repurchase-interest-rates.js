"use strict";

/**
 * @name repurchase-interest-rates 回购利率
 * @author xgqfrms
 * creadted 2018.01.23
 * @param {* String} url
 * @param {* String} tbody_uid
 * @param {* Object} hc_uids
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

// import {getFullTodayDate as fullToday} from "./full-today";

// import {UserException} from "../utils/throw_error";
// import {UserConsoleError as ConsoleError} from "../utils/console_error";

import {exportExcel as exportExcelPlugin} from "./export-excel";


// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};

// repurchaseInterestRates
OTC_F9_FV.Modules.repurchaseInterestRates = OTC_F9_FV.Modules.repurchaseInterestRates || (
    (url = ``, tbody_uid = ``, hc_uids = {}, debug = false) => {
        let datas = {};
        let {
            hc_uid1,
            hc_uid2,
        } = hc_uids;
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`fetched json =\n`, json);
                }
                const emptyChecker = (key = ``) => {
                    let result = true;
                    switch (key) {
                        case ``:
                            result = false;
                            break;
                        case `--`:
                            result = false;
                            break;
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        default:
                            break;
                    }
                    return result;
                };
                try {
                    // ignore Array/Object
                    if (Object.keys(json).length > 0) {
                        const yzy = json.yzy;
                        const hzy = json.hzy;
                        const time_title = document.querySelector(`[data-time="otc-repurchase-interest-rates-time"]`);
                        if (emptyChecker(json.date)) {
                            // (2018-01-01)
                            time_title.innerHTML = "";
                            time_title.insertAdjacentHTML(`beforeend`, `(${json.date})`);
                        } else {
                            time_title.insertAdjacentHTML(`beforeend`, ``);
                        }
                        const code1 = ["1D", "7D", "14D", "21D", "1M", "2M", "3M", "6M"],
                            code2 = ["1D", "2D", "3D", "4D", "7D", "14D", "1M", "3M", "6M"],
                            hc_obj1 = {},
                            hc_obj2 = {};
                        // Array
                        if (Array.isArray(hzy) && Array.isArray(yzy)) {
                            // Object
                            if (Object.keys(yzy).length > 0 && Object.keys(hzy).length > 0 ) {
                                // excel undefined bug & tfoot
                                let tds = document.querySelectorAll(`[data-value="data-otc-RIR"]`),
                                    values = [];
                                let weighting_closing1 = [],
                                    weighting_closing2 = [],
                                    compare1 = [],
                                    compare2 = [],
                                    bp_difference1 = [],
                                    bp_difference2 = [];
                                    // turnover = [],
                                    // increase = [];
                                for (let i = 0; i < yzy.length; i++) {
                                    let jqsp = (yzy[i].jqsp !== undefined) ? yzy[i].jqsp : `--`,
                                        bjr = (yzy[i].bjr !== undefined) ? yzy[i].bjr : `--`,
                                        bp = (yzy[i].bp !== undefined) ? yzy[i].bp : `--`,
                                        cjl = (yzy[i].cjl !== undefined) ? yzy[i].cjl : `--`,
                                        lz = (yzy[i].lz !== undefined) ? yzy[i].lz : `--`;
                                    values.push(jqsp);
                                    values.push(bjr);
                                    values.push(bp);
                                    values.push(cjl);
                                    values.push(lz);
                                    // "加权/收盘"
                                    weighting_closing1.push(jqsp !== `--` ? parseFloat(jqsp) : null);
                                    // "比较日"
                                    compare1.push(bjr !== `--` ? parseFloat(bjr) : null);
                                    // "BP"
                                    bp_difference1.push(bp !== `--` ? parseFloat(bp) : null);
                                }
                                for (let i = 0; i < hzy.length; i++) {
                                    let jqsp = (hzy[i].jqsp !== undefined) ? hzy[i].jqsp : `--`,
                                        bjr = (hzy[i].bjr !== undefined) ? hzy[i].bjr : `--`,
                                        bp = (hzy[i].bp !== undefined) ? hzy[i].bp : `--`,
                                        cjl = (hzy[i].cjl !== undefined) ? hzy[i].cjl : `--`,
                                        lz = (hzy[i].lz !== undefined) ? hzy[i].lz : `--`;
                                    values.push(jqsp);
                                    values.push(bjr);
                                    values.push(bp);
                                    values.push(cjl);
                                    values.push(lz);
                                    weighting_closing2.push(jqsp !== `--` ? parseFloat(jqsp) : null);
                                    compare2.push(bjr !== `--` ? parseFloat(bjr) : null);
                                    bp_difference2.push(bp !== `--` ? parseFloat(bp) : null);
                                }
                                // excel undefined bug & tfoot & tds.length - 1
                                for (let i = 0; i < (tds.length - 1); i++) {
                                    // empty
                                    tds[i].innerHTML = "";
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                    // tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                                // export excel ??? extract to init module
                                setTimeout((debug = false) => {
                                    let export_excel_a = document.querySelector(`[data-excel="otc-repurchase-interest-rates-excel"]>a`);
                                    if (export_excel_a !==null) {
                                        // how to in case of add same event many times!
                                        // let isAddClikc = (typeof(export_excel_a.click) === "function") ? true : false;
                                        // console.log(`excel error =`, error);
                                        // element.removeEventListener(event, function_name, useCapture)
                                        const printExcel = (debug = false) => {
                                            let table_uid = export_excel_a.dataset.excel,
                                                table_title = export_excel_a.dataset.title;
                                            if (debug) {
                                                console.log(`excel uid =`, table_uid);
                                                console.log(`excel title =`, table_title);
                                            }
                                            try {
                                                exportExcelPlugin(`.${table_uid}`, `${table_title}`);
                                            } catch (error) {
                                                console.log(`excel error =`, error);
                                            }
                                        };
                                        // remove before add & removeEventListener & named function
                                        // export_excel_a.removeEventListener(`click`, printExcel);
                                        // console.log(`removeEventListener \n`, printExcel);
                                        let hasAddClick = (export_excel_a.dataset.click === "true")? true : false;
                                        const options = {
                                            // capture: true,
                                            // once: true,// only can click once!
                                            // passive: true,
                                        };
                                        // console.log(`hasAddClick \n`, hasAddClick);
                                        // html5 data flag
                                        if (!hasAddClick) {
                                            export_excel_a.addEventListener(`click`, printExcel);
                                            // export_excel_a.addEventListener(`click`, printExcel, options);
                                            // console.log(`before add click \n`, export_excel_a.dataset.click);
                                            export_excel_a.dataset.click = "true";
                                            // console.log(`after add click \n`, export_excel_a.dataset.click);
                                        } else {
                                            // console.log(`excel addEventListener error =`, `\n no need addEventListener any more!`);
                                        }
                                    } else {
                                        console.log(`%c excel table\n`, `color: red;`, `addEventListener target is null!`);
                                    }
                                }, 0);
                                // drawHC & rename
                                // ES6 polyfill ???
                                Object.assign(hc_obj1, {code: code1, weighting_closing: weighting_closing1, compare: compare1, bp_difference: bp_difference1});
                                Object.assign(hc_obj2, {code: code2, weighting_closing: weighting_closing2, compare: compare2, bp_difference: bp_difference2});
                                OTC_F9_FV.Modules.repurchaseInterestRates.drawHS(hc_obj1, hc_uid1, false);
                                OTC_F9_FV.Modules.repurchaseInterestRates.drawHS(hc_obj2, hc_uid2, false);
                                // OTC_F9_FV.Modules.repurchaseInterestRates.drawHS2(datas, hc_uid2, false);
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-repurchase-interest-rates"]`;
                                const none_div = document.querySelector(uid);
                                // const none_div = document.querySelector(`[data-none-uid="otc-repurchase-interest-rates"]`);
                                none_div.dataset.none = "no-data-div-visible";
                                // table
                                // const table = document.querySelector(`.otc-repurchase-interest-rates-table`);
                                // table.dataset.none = "no-data-div-hidden";
                                // const tbody = document.querySelector(`.otc-repurchase-interest-rates-table-tbody`);
                                const tbody = document.querySelector(tbody_uid);
                                tbody.dataset.none = "no-data-div-hidden";
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `repurchase-interest-rates.js`,
                                lineNumber = 29;
                            // throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let uid = `[data-none-uid="otc-repurchase-interest-rates"]`;
                        const none_div = document.querySelector(uid);
                        none_div.dataset.none = "no-data-div-visible";
                        // no data
                        const tbody_div = document.querySelector(tbody_uid);
                        tbody_div.dataset.none = "no-data-div-hidden";
                        const hc_div = document.querySelector(`#${hc_uid}`);// id
                        hc_div.dataset.none = "no-data-div-hidden";
                    }
                } catch (err) {
                    let url =`file:///E:/**/bonds-fv/modules/repurchase-interest-rates.js`;
                    // ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        /*
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-repurchase-interest-rates-data"]`);
            if (debug) {
                console.log(`turn_to_uids = \n`, turn_to_uids);
            }
            if (turn_to_uids.length > 0) {
                for (let i = 0; i < turn_to_uids.length; i++) {
                    turn_to_uids[i].addEventListener(`click`, (e) => {
                        let uid = e.target.dataset.uid,
                            gilcode = OTC_GILCODE ? OTC_GILCODE : window.OTC_GILCODE,
                            node_path = `12\\${gilcode}\\${uid}`;
                        try {
                            if (uid !== "null") {
                                ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                            }else{
                                console.log(`ChromeExternal & ${uid} === null\n`);
                            }
                        } catch (error) {
                            console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                            console.log(`node uid = `, uid);
                        }
                    });
                }
            }else{
                throw new Error(`turn_to_uids is `, turn_to_uids);
            }
        }, 0);
        */
    }
);


OTC_F9_FV.Modules.repurchaseInterestRates.drawHS = OTC_F9_FV.Modules.repurchaseInterestRates.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        if (debug) {
            console.log(`HC datas = \n`, datas);
            console.log(`HC containe uid = \n`, container_uid);
        }
        const hc_title = container_uid.includes(1) ? `银质押` : `沪质押`;
        // code1, weighting_closing1, compare1, bp_difference1
        // code2, weighting_closing2, compare2, bp_difference2
        // rename
        let {
            code,
            weighting_closing,
            compare,
            bp_difference,
        } = datas;
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
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor, index_color} = {...chart_css};
        // SKIN
        let skin_color = (OTC_SKIN === "black") ? `#0b1016` : `#fff`,
            hc_title_color = (OTC_SKIN === "black") ? `#bbc1c7` : `#333`,
            legend_item_color = (OTC_SKIN === "black") ? `#fff` : `#0b1016`,
            // legend_item_color = (OTC_SKIN === "black") ? `#bbc1c7` : `#0b1016`,
            legend_item_hover_color = (OTC_SKIN === "black") ? `#f79530` : `#000`,
            legend_bg_color = (OTC_SKIN === "black") ? `#0b1016` : `#ff00ff`;
        // console.log(`OTC_SKIN = `, OTC_SKIN);
        // console.log(`skin_color = `, skin_color);
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
                backgroundColor: skin_color,
                // height: (9 / 16 * 100) + '%',
                // height: 272,// 275px;
                // 16:9 ratio
                // marginTop: 30,
                // marginBottom: 65,
                plotBorderWidth: 1,
                // marginLeft: 80
            },
            title: {
                // text: '国债收益率 (中债)',
                text: `${hc_title}`,
                // text: '',
                align: "center",
                x: 0,
                y: 10,
                style: {
                    // color: "#f00",
                    color: hc_title_color,
                },
            },
            xAxis: {
                categories: code,
                // min: max_time,
                // min: 0,
                // max: 8,
                // xAxis datas
                labels: {
                    // autoRotation: [0],// autoRotation:'false',
                    // // step: 2,
                    // step: 1
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
                // enabled: false,
                enabled: true,
                href: `https://www.gildata.com`,
                text: `gildata`,
            },
            // colors: ['#ff1919', '#ffff66', '#92d050'],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    // min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100,
                    title: {
                        // text: '收益率',
                        // text: '百分比',
                        text: '',
                    },
                    labels: {
                        format: '{value}',
                        // format: '{value} %',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    // labels: {
                    //     formatter: function () {
                    //         return this.value + '%';
                    //     }
                    // },
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
                    //         value: industry_circulation_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `市场平均 ${industry_circulation_value} %`,
                    //         },
                    //         zIndex: 3
                    //     },
                    //     {
                    //         color: '#00ff00',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         value: 1,
                    //         // value: industry_total_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `行业平均 ${(industry_total_value)} %`,
                    //         },
                    //         zIndex: 3
                    //     }
                    // ],
                },
                {
                    // x: -50,
                    // y: -50,
                    // type: 'logarithmic',
                    // min: 0,
                    // floor: 0,
                    // ceiling: 100,
                    // max: 100,
                    title: {
                        text: 'BP',
                        // text: '',
                    },
                    opposite: true,
                    // https://api.hcharts.cn/highcharts#yAxis.opposite
                    // labels: {
                    //     formatter: function () {
                    //         return this.value + '%';
                    //     }
                    // },
                    // labels: {
                    //     format: '{value}',// 百分比
                    //     style: {
                    //         color: Highcharts.getOptions().colors[1]
                    //     }
                    // },
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
                    //         value: industry_circulation_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `市场平均 ${industry_circulation_value} %`,
                    //         },
                    //         zIndex: 3
                    //     },
                    //     {
                    //         color: '#00ff00',
                    //         // dashStyle: 'dot',
                    //         dashStyle: 'Solid',
                    //         width: 2,
                    //         value: 1,
                    //         // value: industry_total_value,
                    //         label: {
                    //             rotation: 0,
                    //             y: 15,
                    //             style: {
                    //                 fontStyle: 'italic'
                    //             },
                    //             text: `行业平均 ${(industry_total_value)} %`,
                    //         },
                    //         zIndex: 3
                    //     }
                    // ],
                }
            ],
            legend: {
                // enabled: false,
                symbolRadius: 0,
                // rectangle
                align: 'center',// left, center and right. (Defaults to center.)
                itemStyle: {
                    color: legend_item_color,
                    // fontWeight: 'bold'
                },
                itemHoverStyle: {
                    color: legend_item_hover_color,
                },
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
                // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                // borderColor: '#CCC',
                // borderWidth: 1,
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
                    type:'line',
                    // type:'spline',
                    name: '加权/收盘',
                    color: "#5523cd",
                    data: weighting_closing,
                    lineWidth: 2,
                    zIndex: 3,
                    // marker : {
                    //     enabled : true,
                    //     radius : 0,
                    //     symbol: 'square'
                    // },
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
                        // 万元
                    },
                },
                {
                    type:'line',
                    name: '比较日',
                    color: '#fd0002',
                    data: compare,
                    lineWidth: 2,
                    zIndex: 2,
                    // marker : {
                    //     enabled : true,
                    //     radius : 0,
                    //     symbol: 'square'
                    // },
                    tooltip: {
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} %</b><br/>
                        `,
                    },
                },
                {
                    type: 'column',
                    yAxis: 1,
                    // color: "#fadc9e",
                    color: "#ff9800",
                    negativeColor: '#7cb5ec',
                    name: 'BP差值',
                    data: bp_difference,
                    zIndex: 1,
                    connectNulls: true,// OK
                    tooltip: {
                        // pointFormat: `
                        //     <span style="color:{point.color}">\u25CF</span>
                        //     {series.name}: <b><span style="color: #0f0">{point.y}</span> BP</b><br/>
                        // `,// ( point.y > 0 ) `color: #0f0` : `color: #f00`;
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} BP</b><br/>
                        `,
                    },
                },
            ],
            // scrollbar: {
            //     enabled: true
            // }
        });
    }
);

OTC_F9_FV.Modules.repurchaseInterestRates.init = OTC_F9_FV.Modules.repurchaseInterestRates.init || (
    (
        {
            ip,
            path,
            // uid,
            compare,
            date,
            skin,
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/bond/rate`,
            // uid: `bondratefast01`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/04.json`,
        let url = (compare === "2") ? `${ip}${path}?{"ModelId":"bondratefast01","Compare":"${compare}","CompareDate":"${date}"}` : `${ip}${path}?{"ModelId":"bondratefast01","Compare":"${compare}"}`,
        // let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
            tbody_uid = `[data-tbody="otc-repurchase-interest-rates-table-tbody"]`,
            hc_uid1 = `repurchase-interest-rates-hs-container1`,
            hc_uid2 = `repurchase-interest-rates-hs-container2`,
            hc_uids = {hc_uid1, hc_uid2};
        // console.log(`repurchase-interest-rates & url =\n`, url);
        OTC_F9_FV.Modules.repurchaseInterestRates(url, tbody_uid, hc_uids, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || `0`,
    OTC_DATE = window.OTC_DATE || ``,
    // OTC_DATE = window.OTC_DATE || fullToday(),// default today!
    OTC_SKIN = window.OTC_SKIN || `white`;
    // OTC_SKIN = window.OTC_SKIN || `black`;

// OTC_F9_FV.Modules.repurchaseInterestRates.init({
//     ip: OTC_IP,
//     path: OTC_PATH,
//     uid: `bondratefast01`,
//     compare: OTC_COMPARE,
//     date: OTC_DATE,
//     skin: OTC_SKIN,
// });

// OTC_F9_FV.Modules.repurchaseInterestRates.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"","CompareDate":""}`;
if (OTC_COMPARE === "0") {
    OTC_F9_FV.Modules.repurchaseInterestRates.init();
}

const repurchaseInterestRates = OTC_F9_FV.Modules.repurchaseInterestRates;
export default repurchaseInterestRates;
export {repurchaseInterestRates};

/*

switch (json.yzy[i].name) {
    case "加权/收盘":
        // string to number!
        yields.push(y1 !== `--` ? parseFloat(y1) : null);
        yields.push(y3 !== `--` ? parseFloat(y3) : null);
        yields.push(y5 !== `--` ? parseFloat(y5) : null);
        yields.push(y7 !== `--` ? parseFloat(y7) : null);
        yields.push(y10 !== `--` ? parseFloat(y10) : null);
        break;
    case "比较日":
        compare.push(y1 !== `--` ? parseFloat(y1) : null);
        compare.push(y3 !== `--` ? parseFloat(y3) : null);
        compare.push(y5 !== `--` ? parseFloat(y5) : null);
        compare.push(y7 !== `--` ? parseFloat(y7) : null);
        compare.push(y10 !== `--` ? parseFloat(y10) : null);
        break;
    case "BP":
        difference.push(y1 !== `--` ? parseFloat(y1) : null);
        difference.push(y3 !== `--` ? parseFloat(y3) : null);
        difference.push(y5 !== `--` ? parseFloat(y5) : null);
        difference.push(y7 !== `--` ? parseFloat(y7) : null);
        difference.push(y10 !== `--` ? parseFloat(y10) : null);
        break;
    default:
        break;
}

*/




/*

    <span data-excel="otc-repurchase-interest-rates-excel">
        <a href="#" data-excel="otc-repurchase-interest-rates-table" data-title="回购利率" data-click="false">导出</a>
    </span>

    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters

    // export excel ??? extract to init module
    setTimeout((debug = false) => {
        let export_excel_a = document.querySelector(`[data-excel="otc-repurchase-interest-rates-excel"]>a`);
        if (export_excel_a !==null) {
            // how to in case of add same event many times!
            // let isAddClikc = (typeof(export_excel_a.click) === "function") ? true : false;
            // console.log(`excel error =`, error);
            // element.removeEventListener(event, function_name, useCapture)
            const printExcel = (debug = false) => {
                let table_uid = export_excel_a.dataset.excel,
                    table_title = export_excel_a.dataset.title;
                if (debug) {
                    console.log(`excel uid =`, table_uid);
                    console.log(`excel title =`, table_title);
                }
                try {
                    exportExcelPlugin(`.${table_uid}`, `${table_title}`);
                } catch (error) {
                    console.log(`excel error =`, error);
                }
            };
            // remove before add
            // export_excel_a.removeEventListener(`click`, printExcel);
            // console.log(`removeEventListener \n`, printExcel);
            let hasAddClick = (export_excel_a.dataset.click === "true")? true : false;
            const options = {
                // capture: true,
                // once: true,// only can click once!
                // passive: true,
            };
            console.log(`hasAddClick \n`, hasAddClick);
            if (!hasAddClick) {
                export_excel_a.addEventListener(`click`, printExcel);
                // export_excel_a.addEventListener(`click`, printExcel, options);
                console.log(`before add click \n`, export_excel_a.dataset.click);
                export_excel_a.dataset.click = "true";
                console.log(`after add click \n`, export_excel_a.dataset.click);
            } else {
                console.log(`excel addEventListener error =`, `\n no need addEventListener any more!`);
            }
        } else {
            console.log(`%c excel table\n`, `color: red;`, `addEventListener target is null!`);
        }
    }, 0);

*/
