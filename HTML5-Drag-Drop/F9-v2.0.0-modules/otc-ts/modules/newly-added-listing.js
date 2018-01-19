"use strict";

/**
 * @namespace OTC_TS_FV : OTC Thematic Statistics
 * @name newly-added-listing 新增挂牌
 * @createed 2017.11.07
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// require("babel-polyfill");
// import "babel-polyfill";

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};


OTC_TS_FV.Modules.newlyAddedListing = OTC_TS_FV.Modules.newlyAddedListing || ((url = ``, debug = false, uid = `default_dom_uid`) => {
    // debug = true;
    let datas = {};
    // , ui_arr = ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
    // const ui_keys = ui_arr;
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            // global function
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
            if (debug) {
                console.log(`json = \n`, json);
            }
            try {
                let json_keys = [],
                    json_values = [];
                // show new add num
                let new_add = document.querySelector(`[data-text="otc-newly-added-listing-text"]`),
                    no_data_dom = document.querySelector(`.otc-newly-added-listing-title-box`),
                    hs_container = document.querySelector(`#newly_added_listing_hs_container`),
                    // table_body = document.querySelector(`[data-table-body="otc-table-body-newly-added-listing"]`),
                    table_container = document.querySelector(`[data-table="otc-newly-added-listing-table"]`);
                // no data
                let no_data_p = `
                    <div data-margin="no-data-margin-top">
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                `;
                // alert("json test");
                if (emptyChecker(json) && Object.keys(json).length > 0) {
                    // auto sort
                    json_keys = Object.keys(json).sort();
                    // json_keys = Object.keys(json);
                    json_values = Object.values(json);
                    // alert("json test");// ES6 & polyfill
                    if (emptyChecker(json[json_keys[0]].gpjs)) {
                        // all same & no need sort
                        // new_add.innerHTML = json[json_keys[0]]["gpjs"];
                        // new_add.innerHTML = json_values[0].gpjs;
                        new_add.insertAdjacentHTML(`beforeend`, `今日新增挂牌公司${json_values[0].gpjs}家`);
                        // new_add.innerHTML = json_values[0]["gpjs"];
                        // init table & mini gilcode
                        let init_uid = json_keys[0].replace(/(id)/i, ``);
                        if (debug) {
                            console.log(`init_uid = \n`, init_uid);
                            // "id872356" => "872356"
                        }
                        // let jd = JSON.stringify(json, null, 4);
                        // alert("json =" + jd);
                        // alert(`json = ${jd}`);
                        // alert(`json`, json);
                        OTC_TS_FV.Modules.newlyAddedListing.showTable(init_uid, json);// isNoData
                    }else{
                        // no data
                        // new_add.innerHTML = ``;
                        // new_add.innerHTML = `0`;
                        // no need do anything / do nothing & default ``
                    }
                    // sort json
                    let new_json_values =[];
                    // json_keys = json_keys.sort();
                    json_keys.map(
                        (key, i) => {
                            let {
                                mgsy: x,
                                mgjzc: y,
                                zgb: z,
                                zqjc: name,
                                zqdm: code
                            } = {...json[key]};
                            // "--" & null
                            x = parseFloat(x);
                            y = parseFloat(y);
                            z = parseFloat(z);
                            const new_obj = Object.assign(
                                {},
                                {
                                    x,
                                    y,
                                    //z: 6,// 气泡的大小
                                    z,
                                    name,
                                    code
                                }
                            );
                            if (debug) {
                                // console.log(`key = \n`, key);
                                console.log(`json[key] = \n`, json[key]);
                                // {gpjs: 12, zqdm: "872352", zqjc: "开元新材", sshy: "非金属矿物制品业", zbqs: "长江证券", …}
                                console.log(`new_obj =\n`, new_obj);
                                // {x: -0.21, y: 0.87, z: 20000000, name: "思源软件", code: "872343"}
                            }
                            new_json_values.push(new_obj);
                        }
                    );
                    if (debug) {
                        console.log(`json_keys = \n`, json_keys);
                        console.log(`new_json_values = \n`, new_json_values);
                    }
                    // HC & datas
                    datas = [].concat(new_json_values);
                    // array
                    // OTC_TS_FV.Modules.newlyAddedListing.drawHC(datas, uid, json, false);
                    if (datas.length > 0) {
                        // ok
                        OTC_TS_FV.Modules.newlyAddedListing.drawHC(datas, uid, json, false);
                    } else {
                        // no data
                    }
                } else {
                    // no data
                    hs_container.style.display = "none";// OK
                    // "none" !== "none;" && string value
                    // hs_container.style.display = "none;";// BAD
                    table_container.style.display = "none";
                    no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                }
            } catch (err) {
                let url =`file:///E:/otc-ts/modules/newly-added-listing.js`;
                ConsoleError(err, url);
                // no data & fallback
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return datas;
    // <a href="#更多" data-uid="342064" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-newly-added-listing">更多</a>
    // <a href="#更多" data-uid="342066" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-newly-added-protocol">更多</a>
    // 今日新增挂牌公司 More 13 NQTOPIC 342064
    // more
    setTimeout((debug = false) => {
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-newly-added-listing"]`);
        if (debug) {
            console.log(`turn_to_uid dom = \n`, turn_to_uid);
        }
        if (turn_to_uid !== null) {
            turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        topic_category  = e.target.dataset.topicCategory,// 专题分类名称常量
                        node_path = `13\\${topic_category}\\${uid}`;
                    try {
                        if (uid !== undefined && topic_category !== undefined) {
                            ChromeExternal.Execute("ExecuteCommand", node_path);
                            // ChromeExternal.Execute("ExecuteCommand", `13\\${topic_category}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal \nuid === ${uid} & topic_category === ${topic_category}`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                        console.log(`node uid = `, uid);
                        console.log(`node topic_category = `, topic_category);
                        console.log(`node node_path = `, node_path);
                    }
                });
        }else{
            // null
            throw new Error(`turn_to_uid dom is `, turn_to_uid);
        }
    }, 0);
});




/**
 * @author xgqfrms
 *
 * @param {* Array} datas
 * @param {* String} container_uid
 * @param {* Boolean} debug
 */
// OTC_TS_FV.Modules.newlyAddedListing.drawHC = OTC_TS_FV.Modules.newlyAddedListing.drawHC

OTC_TS_FV.Modules.newlyAddedListing.drawHC = OTC_TS_FV.Modules.newlyAddedListing.drawHC || ((datas = [], container_uid = `container`, json = {}, debug = false) => {
    let dataLength = datas.length;
    // datas
    const chart_css = {
        color: `#0B1016`,
        colors: ['#ff1919', '#ffff66', '#92d050'],
        optioncolor: `red`,
        gridColor: `#2D3039`,
        legendColor: `#fff`,
        yAxisColor: `#FFB400`,
    };
    const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
    // webpack / rollup
    if (debug) {
        console.log(`Highcharts datas =\n`, datas);
        // [
        //     {
        //     code : "300725",
        //     name : "Ｎ 药 石",
        //     x : 0.69 ,
        //     y : 4.62 ,
        //     z : 55000000
        //     }
        // ]
        console.log(`%c Highcharts container_uid =`, `color: #f0f; font-size: 23px;`, container_uid);
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
    Highcharts.chart(container_uid, {
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
        },
        credits: {
            enabled: true,
            // enabled: false,
            href: `https://www.gildata.com`,
            text: `gildata`,
        },
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            // ???决定用户可以通过拖动鼠标来缩放的尺寸。可以是x，y或xy中的一个。
            // Can be one of x, y or xy. Defaults to undefined.
        },
        legend: {
            // enabled: false,
            enabled: true,
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: '每股收益'
            },
            labels: {
                format: '{value}'
            },
            // plotLines: [
            //     {
            //         color: 'black',
            //         dashStyle: 'dot',
            //         width: 2,
            //         value: 65,
            //         label: {
            //             rotation: 0,
            //             y: 15,
            //             style: {
            //                 fontStyle: 'italic'
            //             },
            //             text: '正常脂肪摄入量65g/天'
            //         },
            //         zIndex: 3
            //     },
            //     // x line 2
            // ]
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: '每股净资产'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2,
            // plotLines: [
            //     {
            //         color: 'black',
            //         dashStyle: 'dot',
            //         width: 2,
            //         value: 3,//
            //         label: {
            //             align: 'right',
            //             style: {
            //                 fontStyle: 'italic'
            //             },
            //             text: '正常 ??? 天',// 50
            //             x: -10
            //         },
            //         zIndex: 3
            //     },
            //     // y line no
            // ]
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: `
                <tr>
                    <th colspan="2">
                        <h3>{point.name}({point.code})</h3>
                    </th>
                </tr>
                <tr>
                    <th>每股收益:</th>
                    <td>{point.x}元</td>
                </tr>
                <tr>
                    <th>每股净资产:</th>
                    <td>{point.y}万元</td>
                </tr>
                <tr>
                    <th>总股本:</th>
                    <td>{point.z}万股</td>
                </tr>
            `,// point.???
            footerFormat: '</table>',
            followPointer: true
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,// counter name
                    format: '{point.name}'
                },
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        // alert(
                        //     this.name + ' clicked\n' +
                        //     "\ncode: "+ event.point.code +
                        //     "\nX: "+ event.point.x +
                        //     "\nY: "+event.point.y +
                        //     "\nZ: "+event.point.z
                        // );
                        if (debug) {
                            console.log(`event = \n`, event);
                            console.log(`event.point.code= \n`, event.point.code, typeof(event.point.code));
                        }
                        // 300725 & string
                        let code_uid = event.point.code;
                        if (debug) {
                            console.log(`code_uid = \n`, code_uid);
                            // "id872356" => "872356"
                            console.log(`json = \n`, json);
                        }
                        OTC_TS_FV.Modules.newlyAddedListing.showTable(code_uid, json);
                    }
                },
                point: {
                    events: {
                        click: function (event) {
                            if (debug) {
                                console.log(`event.point = \n ${event.point}`);
                                console.log(`event.point.code = \n ${event.point.code}`);
                                // 300725
                            }
                        }
                    }
                }
            },
        },// ponit data
        series: [
            {
                data: [...datas],
                name: `今日新增挂牌公司`,
                // color: `#f0f`,
                // data: [
                //     {
                //         name: '有限售股份总数',
                //         // y: 7.91,
                //         y: limite,// Array
                //         drilldown: 'Limited',
                //         color: "#9bbb59",
                //         // color: "#0f0"
                //     },
                //     {
                //         name: '有限售股份总数',
                //         // y: 7.91,
                //         y: limite,// Array
                //         drilldown: 'Limited',
                //         color: "#9bbb59",
                //         // color: "#0f0"
                //     },
                // ],
                // data: [
                //     {
                //         code : "300725",
                //         name : "Ｎ 药 石",
                //         x : 0.69 ,
                //         y : 4.62 ,
                //         z : 55000000,
                //         color: "#9bbb59",//new add & rainbow colors array ???
                //     },
                // ]
            }
        ],
    });
});




/**
 * @author xgqfrms
 *
 * @param {* String} code
 * @param {* String} table_dom_uid
 * @param {* Boolean} debug
 * @param {* Object} data
 */



OTC_TS_FV.Modules.newlyAddedListing.showTable = OTC_TS_FV.Modules.newlyAddedListing.showTable || ((uid = `6000570`, datas = {}, debug = false) => {
    let new_uid = `id${uid}`;
    if (debug) {
        console.log(`uid = `, uid);
        console.log(`new_uid = `, new_uid);
        console.log(`data = `, JSON.stringify(data, null, 4));
    }
    // datas["id872358"]
    let table_obj = datas[new_uid];
    if (debug) {
        console.log(`table_obj`, JSON.stringify(table_obj, null, 4));
    }
    let sa = document.querySelector(`[data-otc-th-title="securities-abbreviation-newly-added-listing"]`),
        sc = document.querySelector(`[data-otc-th-title="securities-code-newly-added-listing"]`),
        // new_add = document.querySelector(`[data-otc-new-add-num="otc-new-add-num-listing"]`),
        tb = document.querySelector(`[data-table-body="otc-table-body-newly-added-listing"]`);
    // more
    let more = document.querySelector(`[data-more="otc-newly-added-listing-more"]`);
    if (debug) {
        console.log(`more.dataset.moreUid = `, more.dataset.moreUid);
    }
    // hash & anchor
    more.setAttribute(`href`, `#${table_obj.zqdm}.OC`);
    more.dataset.moreUid = `${table_obj.zqdm}.OC`;
    // console.log(`more.dataset.moreUid new = `, more.dataset.moreUid);
    // more
    setTimeout((debug = false) => {
        more.addEventListener(`click`, (e) => {
            let gilcode = e.target.dataset.moreUid,
                // gilcode = OTC_GILCODE ? OTC_GILCODE : window.OTC_GILCODE,
                more_node_path = `12\\${gilcode}\\${uid}`;
            if (debug) {
                // console.log(`more = \n`, more);
                console.log(`more gilcode = \n`, gilcode);
                console.log(`more_node_path = \n`, more_node_path);
            }
            try {
                if (gilcode !== null) {
                    ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\`);
                    // ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                }else{
                    console.log(`ChromeExternal & ${gilcode} === null\n`);
                }
            } catch (error) {
                console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                console.log(`more node gilcode = `, gilcode);
            }
        });
    }, 0);
    // let tr1 = tb.firstElementChild;
    // let tr3 = tb.lastElementChild;
    // [tr, tr, tr]
    let trs = tb.children;
    let tds1 = trs[0].children,
        tds2 = trs[1].children,
        tds3 = trs[2].children;
    // const {zqjc, gpjs, zqdm, zqjc, sshy, zbqs} = table_obj;
    // ES6 => ES5
    // header
    sa.innerHTML = (table_obj.zqjc !== null) ? `${table_obj.zqjc}` : `--`;// null & --
    sc.innerHTML = (table_obj.zqdm !== null) ? `${table_obj.zqdm}` : `--`;// null & --
    // sa.innerHTML = `${table_obj.zqjc}`;
    // sc.innerHTML = `${table_obj.zqdm}.OC`;
    // 博商管理(836000.OC) - 新三板
    tds1[1].innerHTML = `${table_obj.sshy}`;
    tds1[3].innerHTML = `${table_obj.zbqs}`;
    tds1[1].setAttribute(`title`, `${table_obj.sshy}`);
    tds1[3].setAttribute(`title`, `${table_obj.zbqs}`);
    // tr1
    tds2[1].innerHTML = `${table_obj.mgsy}`;
    tds2[3].innerHTML = `${table_obj.jlrtbzz}`;
    tds2[5].innerHTML = `${table_obj.zgb}`;
    tds2[1].setAttribute(`title`, `${table_obj.mgsy}`);
    tds2[3].setAttribute(`title`, `${table_obj.jlrtbzz}`);
    tds2[5].setAttribute(`title`, `${table_obj.zgb}`);
    // tr2
    tds3[1].innerHTML = `${table_obj.mgjzc}`;
    tds3[3].innerHTML = `${table_obj.jzcsyl}`;
    tds3[5].innerHTML = `${table_obj.ltgb}`;
    tds3[1].setAttribute(`title`, `${table_obj.mgjzc}`);
    tds3[3].setAttribute(`title`, `${table_obj.jzcsyl}`);
    tds3[5].setAttribute(`title`, `${table_obj.ltgb}`);
    //tr3
});


OTC_TS_FV.Modules.newlyAddedListing.init = OTC_TS_FV.Modules.newlyAddedListing.init || (
    (
        {
            ip,
            path,
            socket,
            skin,
            // gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/otcfast01`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `${ip}${path}${socket}?${skin}`,// http://10.1.5.202/otc/ts/json/02.json?skin=white
        // let url = `http://10.1.5.202/otc/ts/json/01.json`,// no data?
        // let url = `http://10.1.5.202/otc/ts/json/new-01.json`,// no data?
            uid = `newly_added_listing_hs_container`;
        OTC_TS_FV.Modules.newlyAddedListing(url, false, uid);
    }
);

// OTC_SKIN ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

// console.log(`research & OTC_GILCODE`, OTC_GILCODE);

OTC_TS_FV.Modules.newlyAddedListing.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast01`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});

// OTC_TS_FV.Modules.newlyAddedListing.init();
// const url = `http://10.1.5.202/webservice/fastview/otc/otcfast01`;

