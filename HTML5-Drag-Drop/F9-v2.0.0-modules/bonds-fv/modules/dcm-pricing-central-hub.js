"use strict";

/**
 * @name dcm-pricing-central-hub DCM定价中枢
 * @author xgqfrms
 * creadted 2018.01.23
 * @param {* String} url
 * @param {* String} tbody_uid
 * @param {* String} hc_uid
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
import "whatwg-fetch";

// import {getFullTodayDate as fullToday} from "./full-today";

// import {UserException} from "../utils/throw_error";
// import {UserConsoleError as ConsoleError} from "../utils/console_error";

import {exportExcel as exportExcelPlugin} from "./export-excel";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};

// dcmPricingCentralHub
OTC_F9_FV.Modules.dcmPricingCentralHub = OTC_F9_FV.Modules.dcmPricingCentralHub || (
    (url = ``, tbody_uid = ``, hc_uid = ``, debug = false) => {
        let datas = {};
        // no data
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
                        const time_titles = document.querySelectorAll(`[data-time="otc-dcm-pricing-central-hub-time"]`);
                        if (emptyChecker(json.zxr) & emptyChecker(json.bjr)) {
                            // (2018-01-01)
                            // empty & reset
                            time_titles[0].innerHTML = "";
                            time_titles[1].innerHTML = "";
                            time_titles[0].insertAdjacentHTML(`beforeend`, `(${json.zxr})`);//最新日
                            time_titles[1].insertAdjacentHTML(`beforeend`, `(${json.bjr})`);//比较日
                        } else {
                            // no data & do nothing
                            // time_titles[0].insertAdjacentHTML(`beforeend`, ``);
                            // time_titles[1].insertAdjacentHTML(`beforeend`, ``);
                        }
                        const ui_arr = ["重点AAA", "AAA", "AA+", "AA", "AA-"],// fixed_ui_array
                            code = ["1Y", "3Y", "5Y", "7Y"],
                            objs_arr = json.datas;// Array
                        if (Array.isArray(objs_arr)) {
                            // Object
                            if (Object.keys(objs_arr).length > 0) {
                                let tds = document.querySelectorAll(`[data-value="data-otc-DPCH"]`),
                                    values = [];
                                let focus_triple_a = {},
                                    triple_a = {},
                                    double_a_plus = {},
                                    double_a = {},
                                    double_a_minus = {};
                                // let focus_triple_a = [],
                                //     triple_a = [],
                                //     double_a_plus = [],
                                //     double_a = [],
                                //     double_a_minus = [];
                                ui_arr.map(
                                    (key, index) => {
                                        for (let i = 0; i < objs_arr.length; i++) {
                                            // Object.keys(json.datas[0]);
                                            let y1zx = (objs_arr[i].y1zx !== undefined) ? objs_arr[i].y1zx : `--`,
                                                y3zx = (objs_arr[i].y3zx !== undefined) ? objs_arr[i].y3zx : `--`,
                                                y5zx = (objs_arr[i].y5zx !== undefined) ? objs_arr[i].y5zx : `--`,
                                                y7zx = (objs_arr[i].y7zx !== undefined) ? objs_arr[i].y7zx : `--`,
                                                y1bjr = (objs_arr[i].y1bjr !== undefined) ? objs_arr[i].y1bjr : `--`,
                                                y3bjr = (objs_arr[i].y3bjr !== undefined) ? objs_arr[i].y3bjr : `--`,
                                                y5bjr = (objs_arr[i].y5bjr !== undefined) ? objs_arr[i].y5bjr : `--`,
                                                y7bjr = (objs_arr[i].y7bjr !== undefined) ? objs_arr[i].y7bjr : `--`,
                                                y1zd = (objs_arr[i].y1zd !== undefined) ? objs_arr[i].y1zd : `--`,
                                                y3zd = (objs_arr[i].y3zd !== undefined) ? objs_arr[i].y3zd : `--`,
                                                y5zd = (objs_arr[i].y5zd !== undefined) ? objs_arr[i].y5zd : `--`,
                                                y7zd = (objs_arr[i].y7zd !== undefined) ? objs_arr[i].y7zd : `--`;
                                            // empty & reset
                                            let test_obj = {},
                                                temp_obj = {},
                                                latest = [],
                                                compare = [],
                                                change = [],
                                                hc_title = ``;
                                            // fixed ui order
                                            if (objs_arr[i].title === key) {
                                                // order
                                                values.push(y1zx);
                                                values.push(y1bjr);
                                                values.push(y1zd);
                                                values.push(y3zx);
                                                values.push(y3bjr);
                                                values.push(y3zd);
                                                values.push(y5zx);
                                                values.push(y5bjr);
                                                values.push(y5zd);
                                                values.push(y7zx);
                                                values.push(y7bjr);
                                                values.push(y7zd);
                                                // HC
                                                latest.push(y1zx !== `--` ? parseFloat(y1zx) : null);
                                                latest.push(y3zx !== `--` ? parseFloat(y3zx) : null);
                                                latest.push(y5zx !== `--` ? parseFloat(y5zx) : null);
                                                latest.push(y7zx !== `--` ? parseFloat(y7zx) : null);
                                                compare.push(y1bjr !== `--` ? parseFloat(y1bjr) : null);
                                                compare.push(y3bjr !== `--` ? parseFloat(y3bjr) : null);
                                                compare.push(y5bjr !== `--` ? parseFloat(y5bjr) : null);
                                                compare.push(y7bjr !== `--` ? parseFloat(y7bjr) : null);
                                                change.push(y1zd !== `--` ? parseFloat(y1zd) : null);
                                                change.push(y3zd !== `--` ? parseFloat(y3zd) : null);
                                                change.push(y5zd !== `--` ? parseFloat(y5zd) : null);
                                                change.push(y7zd !== `--` ? parseFloat(y7zd) : null);
                                                // new obj
                                                hc_title = key;
                                                temp_obj = {latest, compare, change, hc_title, code};
                                                switch (key) {
                                                    case "重点AAA":
                                                        // focus_triple_a = [].concat(latest, compare, change);
                                                        // Object.assign(focus_triple_a, temp_obj);
                                                        test_obj = Object.assign(focus_triple_a, temp_obj);
                                                        break;
                                                    case "AAA":
                                                        test_obj = Object.assign(triple_a, temp_obj);
                                                        break;
                                                    case "AA+":
                                                        test_obj = Object.assign(double_a_plus, temp_obj);
                                                        break;
                                                    case "AA":
                                                        test_obj = Object.assign(double_a, temp_obj);
                                                        break;
                                                    case "AA-":
                                                        test_obj = Object.assign(double_a_minus, temp_obj);
                                                        break;
                                                    default:
                                                        break;
                                                }
                                                // console.log(`${key}\ntest_obj =\n`, test_obj);
                                            } else {
                                                // do nothing
                                                // no data
                                            }
                                        }
                                    }
                                );
                                // show table cells data
                                for (let i = 0; i < (tds.length - 1); i++) {
                                    // empty & reset
                                    tds[i].innerHTML = "";
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                                // export excel ??? extract to init module
                                setTimeout((debug = false) => {
                                    let export_excel_a = document.querySelector(`[data-excel="otc-dcm-pricing-central-hub-excel"]>a`);
                                    if (export_excel_a !==null) {
                                        const printExcel = (debug = false) => {
                                            let table_uid = export_excel_a.dataset.excel,
                                                table_title = export_excel_a.dataset.title;
                                            try {
                                                exportExcelPlugin(`.${table_uid}`, `${table_title}`);
                                            } catch (error) {
                                                console.log(`excel error =`, error);
                                            }
                                        };
                                        let hasAddClick = (export_excel_a.dataset.click === "true")? true : false;
                                        // once & bug
                                        if (!hasAddClick) {
                                            export_excel_a.addEventListener(`click`, printExcel);
                                            export_excel_a.dataset.click = "true";
                                        } else {
                                            // console.log(`excel addEventListener error =`, `\n no need addEventListener any more!`);
                                        }
                                    } else {
                                        console.log(`%c excel table\n`, `color: red;`, `addEventListener target is null!`);
                                    }
                                }, 0);
                                if (debug) {
                                    console.log(`values =`, values);
                                    console.log(`focus_triple_a =\n`, focus_triple_a);
                                    console.log(`triple_a =\n`, triple_a);
                                    console.log(`double_a_plus =\n`, double_a_plus);
                                    console.log(`double_a =\n`, double_a);
                                    console.log(`double_a_minus =\n`, double_a_minus);
                                }
                                // show HC
                                let btns = document.querySelectorAll(`[data-button="dcm-link"]`);
                                for (let i = 0; i < btns.length; i++) {
                                    // const uids = ["hc-focus-3a", "hc-3a", "hc-2a+", "hc-2a", "hc-2a-"];
                                    btns[i].addEventListener(`click`, (e) => {
                                        let uid = e.target.dataset.uid;// shape data ???
                                        if (debug) {
                                            console.log(`e.target.dataset.uid =`, uid);
                                            console.log(`btns[i].dataset.uid =`, btns[i].dataset.uid);
                                            // console.log(`this =`, this);// Window
                                            // console.log(`this.dataset.uid =`, this.dataset.uid);// bind this ???
                                        }
                                        let hc_obj = {};
                                        switch (uid) {
                                            case "hc-focus-3a":
                                                Object.assign(hc_obj, focus_triple_a);
                                                break;
                                            case "hc-3a":
                                                Object.assign(hc_obj, triple_a);
                                                break;
                                            case "hc-2a+":
                                                Object.assign(hc_obj, double_a_plus);
                                                break;
                                            case "hc-2a":
                                                Object.assign(hc_obj, double_a);
                                                break;
                                            case "hc-2a-":
                                                Object.assign(hc_obj, double_a_minus);
                                                break;
                                            default:
                                                break;
                                        }
                                        // ES6 polyfill ??? dynamic title
                                        // 重点AAA 最新/比较日/涨跌 => 重点AAA最新/重点AAA比较日/重点AAA涨跌
                                        // dynamic generator
                                        OTC_F9_FV.Modules.dcmPricingCentralHub.drawHS(hc_obj, hc_uid);
                                        // OTC_F9_FV.Modules.dcmPricingCentralHub.drawHS(hc_obj, hc_uid, true);
                                        // OTC_F9_FV.Modules.dcmPricingCentralHub.drawHS(hc_obj, hc_uid, false);
                                    });
                                }
                                setTimeout(() => {
                                    // drawHC & rename
                                    if (debug) {
                                        // default focus_triple_a
                                        console.log(`focus_triple_a =\n`, focus_triple_a);
                                    }
                                    btns[0].click();
                                }, 0);
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-dcm-pricing-central-hub"]`;
                                const none_div = document.querySelector(uid);
                                // const none_div = document.querySelector(`[data-none-uid="otc-dcm-pricing-central-hub"]`);
                                none_div.dataset.none = "no-data-div-visible";
                                // table
                                // const table = document.querySelector(`.otc-dcm-pricing-central-hub-table`);
                                // table.dataset.none = "no-data-div-hidden";
                                // const tbody = document.querySelector(`.otc-dcm-pricing-central-hub-table-tbody`);
                                const tbody = document.querySelector(tbody_uid);
                                tbody.dataset.none = "no-data-div-hidden";
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `dcm-pricing-central-hub.js`,
                                lineNumber = 29;
                            // throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let uid = `[data-none-uid="otc-dcm-pricing-central-hub"]`;
                        const none_div = document.querySelector(uid);
                        none_div.dataset.none = "no-data-div-visible";
                        // no data
                        const table = document.querySelector(`.otc-dcm-pricing-central-hub-table`);
                        table.dataset.none = "no-data-div-hidden";
                        // const tbody_div = document.querySelector(tbody_uid);
                        // tbody_div.dataset.none = "no-data-div-hidden";
                        const hc_div = document.querySelector(`#${hc_uid}`);// id
                        hc_div.dataset.none = "no-data-div-hidden";
                    }
                } catch (err) {
                    let url =`file:///E:/**/bonds-fv/modules/dcm-pricing-central-hub.js`;
                    // ConsoleError(err, url);
                    // no data
                }
            }
        )
        .catch(err => {
            console.log(`fetch error = \n`, err);
            // no data
            let table = document.querySelector(`.otc-dcm-pricing-central-hub-table`);
            table.dataset.none = "no-data-div-hidden";
        });
        // return datas;
        // more
        /*
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-dcm-pricing-central-hub-data"]`);
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


OTC_F9_FV.Modules.dcmPricingCentralHub.drawHS = OTC_F9_FV.Modules.dcmPricingCentralHub.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        if (debug) {
            console.log(`HC datas = \n`, datas);
            console.log(`HC containe uid = \n`, container_uid);
        }
        // const hc_title = container_uid.includes(1) ? `银质押` : `沪质押`;
        // title ??? 重点AAA
        // 重点AAA 最新/比较日/涨跌 => 重点AAA最新/重点AAA比较日/重点AAA涨跌
        // dynamic generator
        // rename
        let {
            code,
            hc_title,
            latest,
            compare,
            change,
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
            grid_line_color = (OTC_SKIN === "black") ? `#2d3039` : `#e9e9e9`,
            hc_title_color = (OTC_SKIN === "black") ? `#bbc1c7` : `#333`,
            legend_item_color = (OTC_SKIN === "black") ? `#fff` : `#0b1016`,
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
                plotBorderWidth: 0,
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
                tickColor: grid_line_color,
                lineColor: grid_line_color,
                gridLineColor: grid_line_color,
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
                    gridLineColor: grid_line_color,
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
                    gridLineColor: grid_line_color,
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
                column: {
                    borderWidth: 0,
                    // borderColor: grid_line_color,
                },
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
                    name: '最新',
                    name: `${hc_title}最新`,
                    color: "#5523cd",
                    data: latest,
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
                    name: `${hc_title}比较日`,
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
                    name: `${hc_title}涨跌`,
                    // data: [1,2,3,4],
                    data: change,
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
                // {
                //     type: 'column',
                //     yAxis: 1,
                //     color: "#fadc9e",
                //     // color: "#ff9800",
                //     negativeColor: '#7cb5ec',
                //     name: `AA涨跌`,
                //     data: [6,8,7,9],
                //     // data: change,
                //     zIndex: 1,
                //     connectNulls: true,// OK
                //     tooltip: {
                //         // pointFormat: `
                //         //     <span style="color:{point.color}">\u25CF</span>
                //         //     {series.name}: <b><span style="color: #0f0">{point.y}</span> BP</b><br/>
                //         // `,// ( point.y > 0 ) `color: #0f0` : `color: #f00`;
                //         pointFormat: `
                //             <span style="color:{point.color}">\u25CF</span>
                //             {series.name}: <b>{point.y} BP</b><br/>
                //         `,
                //     },
                // },
            ],
            // scrollbar: {
            //     enabled: true
            // }
        });
    }
);

OTC_F9_FV.Modules.dcmPricingCentralHub.init = OTC_F9_FV.Modules.dcmPricingCentralHub.init || (
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
            // uid: `bondratefast11`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/04.json`,
        // let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
        const uid = `bondratefast11`;
        let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}"${(compare === "2") ? `,"CompareDate":"${date}"` : ``}}`,
            tbody_uid = `[data-tbody="otc-dcm-pricing-central-hub-table-tbody"]`,
            hc_uid = `dcm-pricing-central-hub-hs-container`;
        OTC_F9_FV.Modules.dcmPricingCentralHub(url, tbody_uid, hc_uid, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || ``,
    OTC_DATE = window.OTC_DATE || ``,
    // OTC_DATE = window.OTC_DATE || fullToday(),// default today!
    OTC_INIT = window.OTC_INIT || true,
    // OTC_SKIN = window.OTC_SKIN || `white`;
    OTC_SKIN = window.OTC_SKIN || `black`;

if (OTC_INIT === true) {
    // self init
    OTC_F9_FV.Modules.dcmPricingCentralHub.init();
}else{
    // relaod module
}
const dcmPricingCentralHub = OTC_F9_FV.Modules.dcmPricingCentralHub;
export default dcmPricingCentralHub;
export {dcmPricingCentralHub};

// OTC_F9_FV.Modules.dcmPricingCentralHub.init({
//     ip: OTC_IP,
//     path: OTC_PATH,
//     uid: `bondratefast11`,
//     compare: OTC_COMPARE,
//     date: OTC_DATE,
//     skin: OTC_SKIN,
// });

// OTC_F9_FV.Modules.dcmPricingCentralHub.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast11","Compare":"","CompareDate":""}`;

