"use strict";

/**
 * @name central-bills-profitability 央票收益率(中债)
 * @author xgqfrms
 * creadted 2018.01.23
 * @param {* String} url
 * @param {* String} tbody_uid
 * @param {* String} hc_uid
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

// import {UserException} from "../utils/throw_error";
// import {UserConsoleError as ConsoleError} from "../utils/console_error";

import {exportExcel as exportExcelPlugin} from "./export-excel";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};

// centralBillsProfitability
OTC_F9_FV.Modules.centralBillsProfitability = OTC_F9_FV.Modules.centralBillsProfitability || (
    (url = ``, tbody_uid = ``, hc_uid = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`fetched json =\n`, json);
                }
                try {
                    // ignore Array/Object
                    if (Object.keys(json).length > 0) {
                        // Array
                        if (Array.isArray(json)) {
                            // Object
                            if (Object.keys(json[0]).length > 0 && typeof(json[0]) === "object") {
                                let tds = document.querySelectorAll(`[data-value="data-otc-CBP"]`),
                                    // tds1, tds2, tds3
                                    date = document.querySelector(`[data-time="data-otc-CBP"]`),
                                    time = (json[0].rq !== undefined) ? json[0].rq : `--`,
                                    values = [];
                                let code = ["3M", "6M", "1Y", "3Y", "5Y", "7Y"],
                                    yields = [],
                                    compare = [],
                                    difference = [];
                                for (let i = 0; i < json.length; i++) {
                                    let m3 = (json[i].m3 !== undefined) ? json[i].m3 : `--`,
                                        m6 = (json[i].m6 !== undefined) ? json[i].m6 : `--`,
                                        y1 = (json[i].y1 !== undefined) ? json[i].y1 : `--`,
                                        y3 = (json[i].y3 !== undefined) ? json[i].y3 : `--`,
                                        y5 = (json[i].y5 !== undefined) ? json[i].y5 : `--`,
                                        y7 = (json[i].y7 !== undefined) ? json[i].y7 : `--`;
                                    values.push(m3);
                                    values.push(m6);
                                    values.push(y1);
                                    values.push(y3);
                                    values.push(y5);
                                    values.push(y7);
                                    switch (json[i].name) {
                                        case "收益率":
                                            /* string to number! */
                                            yields.push(m3 !== `--` ? parseFloat(m3) : null);
                                            yields.push(m6 !== `--` ? parseFloat(m6) : null);
                                            yields.push(y1 !== `--` ? parseFloat(y1) : null);
                                            yields.push(y3 !== `--` ? parseFloat(y3) : null);
                                            yields.push(y5 !== `--` ? parseFloat(y5) : null);
                                            yields.push(y7 !== `--` ? parseFloat(y7) : null);
                                            break;
                                        case "比较日":
                                            compare.push(m3 !== `--` ? parseFloat(m3) : null);
                                            compare.push(m6 !== `--` ? parseFloat(m6) : null);
                                            compare.push(y1 !== `--` ? parseFloat(y1) : null);
                                            compare.push(y3 !== `--` ? parseFloat(y3) : null);
                                            compare.push(y5 !== `--` ? parseFloat(y5) : null);
                                            compare.push(y7 !== `--` ? parseFloat(y7) : null);
                                            break;
                                        case "BP":
                                            difference.push(m3 !== `--` ? parseFloat(m3) : null);
                                            difference.push(m6 !== `--` ? parseFloat(m6) : null);
                                            difference.push(y1 !== `--` ? parseFloat(y1) : null);
                                            difference.push(y3 !== `--` ? parseFloat(y3) : null);
                                            difference.push(y5 !== `--` ? parseFloat(y5) : null);
                                            difference.push(y7 !== `--` ? parseFloat(y7) : null);
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                // empty & reset
                                date.innerHTML = "";
                                date.insertAdjacentHTML(`beforeend`, time);
                                for (let i = 0; i < (tds.length - 1); i++) {
                                    // empty & reset
                                    tds[i].innerHTML = "";
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                                // export excel ??? extract to init module
                                setTimeout((debug = false) => {
                                    let export_excel_a = document.querySelector(`[data-excel="otc-central-bills-profitability-excel"]>a`);
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
                                // drawHC
                                Object.assign(datas, {code, yields, compare, difference});
                                OTC_F9_FV.Modules.centralBillsProfitability.drawHS(datas, hc_uid, false);
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-central-bills-profitability"]`;
                                const none_div = document.querySelector(uid);
                                // const none_div = document.querySelector(`[data-none-uid="otc-central-bills-profitability"]`);
                                none_div.dataset.none = "no-data-div-visible";
                                // table
                                // const table = document.querySelector(`.otc-central-bills-profitability-table`);
                                // table.dataset.none = "no-data-div-hidden";
                                // const tbody = document.querySelector(`.otc-central-bills-profitability-table-tbody`);
                                const tbody = document.querySelector(tbody_uid);
                                tbody.dataset.none = "no-data-div-hidden";
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `central-bills-profitability.js`,
                                lineNumber = 29;
                            // throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let uid = `[data-none-uid="otc-central-bills-profitability"]`;
                        const none_div = document.querySelector(uid);
                        none_div.dataset.none = "no-data-div-visible";
                        // no data
                        const tbody_div = document.querySelector(tbody_uid);
                        tbody_div.dataset.none = "no-data-div-hidden";
                        const hc_div = document.querySelector(`#${hc_uid}`);// id
                        hc_div.dataset.none = "no-data-div-hidden";
                    }
                } catch (err) {
                    let url =`file:///E:/**/bonds-fv/modules/central-bills-profitability.js`;
                    // ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        /*
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-central-bills-profitability-data"]`);
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


OTC_F9_FV.Modules.centralBillsProfitability.drawHS = OTC_F9_FV.Modules.centralBillsProfitability.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        if (debug) {
            console.log(`HC datas = \n`, datas);
            console.log(`HC containe uid = \n`, container_uid);
        }
        let {
            code,
            yields,
            compare,
            difference,
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
                text: '',
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
                enabled: false,
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
                    name: '收益率',
                    color: "#5523cd",
                    data: yields,
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
                    yAxis: 1,// BP
                    // color: "#fadc9e",
                    color: "#ff9800",
                    name: 'BP差值',
                    data: difference,
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

OTC_F9_FV.Modules.centralBillsProfitability.init = OTC_F9_FV.Modules.centralBillsProfitability.init || (
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
            // uid: `bondratefast10`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/10.json`,
        // let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
        const uid = `bondratefast10`;
        let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}"${(compare === "2") ? `,"CompareDate":"${date}"` : ``}}`,
            tbody_uid = `[data-tbody="otc-central-bills-profitability-table-tbody"]`,
            hc_uid = `central-bills-profitability-hc-container`;
            // js_uid = `#central-bills-profitability-hc-container`;
        OTC_F9_FV.Modules.centralBillsProfitability(url, tbody_uid, hc_uid, false);
    }
);

// document.querySelector(`#central-bills-profitability-hc-container`);

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || ``,
    OTC_DATE = window.OTC_DATE || ``,// default today!
    OTC_INIT = window.OTC_INIT || true,
    OTC_SKIN = window.OTC_SKIN || `white`;
    // OTC_SKIN = window.OTC_SKIN || `black`;
//
if (OTC_INIT === true) {
    // self init
    OTC_F9_FV.Modules.centralBillsProfitability.init();
}else{
    // relaod module
}

const centralBillsProfitability = OTC_F9_FV.Modules.centralBillsProfitability;
export default centralBillsProfitability;
export {centralBillsProfitability};

// OTC_F9_FV.Modules.centralBillsProfitability.init({
//     ip: OTC_IP,
//     path: OTC_PATH,
//     uid: `bondratefast10`,
//     compare: OTC_COMPARE,
//     date: OTC_DATE,
//     skin: OTC_SKIN,
// });

// OTC_F9_FV.Modules.centralBillsProfitability.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast10","Compare":"","CompareDate":""}`;

