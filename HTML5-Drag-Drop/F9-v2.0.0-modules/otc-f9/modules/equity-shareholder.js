"use strict";

/**
 * @name equity-shareholder 股本股东
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* String} time_uid
 * @param {* Array} hst_uids
 * @param {* String} hsc_uid
 * @param {* String} tbody_uid
 * @param {* Array} tbody_uids
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.equityShareholder = OTC_F9_FV.Modules.equityShareholder || (
    (url = ``, links_uid = ``, hst_uids = ``, hsc_uid = ``, tbody_uids = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                let links_dom = document.querySelectorAll(links_uid),
                    hsts_dom = document.querySelectorAll(hst_uids),
                    tbodys_dom = document.querySelectorAll(tbody_uids);
                if (debug) {
                    console.log(`data = \n`, json);
                    // console.log(`data = \n`, hsts_dom[0]);
                }
                // console.log(`tbodys_dom = \n`, tbodys_dom);
                const emptyChecker = (key = ``) => {
                    let result = true;
                    switch (key) {
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        case "--":
                            result = false;
                            break;
                        default:
                            break;
                    }
                    return result;
                };
                try {
                    if (emptyChecker(json)) {
                        let tr = ``,
                            trs = ``,
                            tr2 = ``;
                        let objects = {
                            limite: "",
                            unlimite: "",
                            limited: [],// Array
                            unlimited: [],// Array
                        };
                        // table 1
                        if (emptyChecker(json.gbjg) && Object.keys(json.gbjg).length > 0) {
                            const hc_data = json.gbjg;
                            tr = `
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key" data-alias="截止日期">截止日期</td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">${hc_data.jzrq}</td>
                                </tr>
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key" data-alias="总股本(股)">总股本(股)</td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">${hc_data.zgb}</td>
                                </tr>
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key" data-alias="无限售股份总数(股)">无限售股份总数(股)</td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">${hc_data.yxsg}</td>
                                </tr>
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key" data-alias="有限售股份总数(股)">有限售股份总数(股)</td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">${hc_data.wxsg}</td>
                                </tr>
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key" data-alias="变动原因说明(股)">变动原因说明(股)</td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">${hc_data.bdyy}</td>
                                </tr>
                            `;
                            // HC
                            objects.limite = (hc_data.yxszb !== undefined) ? parseFloat(hc_data.yxszb) : 0;
                            objects.unlimite = (hc_data.wxszb !== undefined) ? parseFloat(hc_data.wxszb) : 0;
                            // ??? `--` / 0.00
                            // parseFloat(0.00) === parseFloat(0);
                            let arr = [];
                            arr[0] = (hc_data.yxskzrsl !== undefined && hc_data.yxskzrsl !== `--`) ? parseFloat(hc_data.yxskzrsl) : 0;
                            arr[1] = (hc_data.yxsggsl !== undefined && hc_data.yxsggsl !== `--`) ? parseFloat(hc_data.yxsggsl) : 0;
                            arr[2] = (hc_data.yxsygsl !== undefined && hc_data.yxsygsl !== `--`) ? parseFloat(hc_data.yxsygsl) : 0;
                            arr[3] = (hc_data.yxsqtsl !== undefined && hc_data.yxsqtsl !== `--`) ? parseFloat(hc_data.yxsqtsl) : 0;
                            // console.log(`arr =\n`, arr);
                            // Number.prototype.toFixed()
                            let limite_total = (arr[0]*100 + arr[1]*100 + arr[2]*100 + arr[3]*100)/100;
                            // (0.10*100 + 0.20*100)/100; // === 0.3
                            // 0.1 + 0.2; // === 0.30000000000000004
                            for (let i = 0; i < 4; i++) {
                                let key = ``,
                                    value = (arr[i]/limite_total)*100;
                                // .toFixed(2) && string
                                // 100/0; // === Infinity
                                switch (i) {
                                    case 0:
                                    key = '控股股东和实际制人数量占比';
                                        break;
                                    case 1:
                                    key = '董事监事高管数量占比';
                                        break;
                                    case 2:
                                    key = '核心员工数量占比';
                                        break;
                                    case 3:
                                    key = '其它有限售数量占比';
                                        break;
                                    default:
                                        break;
                                }
                                if (arr[i] !== 0) {
                                    // no avlue, no key
                                    objects.limited.push([key, value]);
                                }else{
                                    continue;
                                }
                            }
                            let unarr = [];
                            unarr[0] = (hc_data.wxskzrsl !== undefined && hc_data.wxskzrsl !== `--`) ? parseFloat(hc_data.wxskzrsl) : 0;
                            unarr[1] = (hc_data.wxsggsl !== undefined && hc_data.wxsggsl !== `--`) ? parseFloat(hc_data.wxsggsl) : 0;
                            unarr[2] = (hc_data.wxshxygsl !== undefined && hc_data.wxshxygsl !== `--`) ? parseFloat(hc_data.wxshxygsl) : 0;
                            // console.log(`unarr =\n`, unarr);
                            let unlimite_total = (unarr[0]*100 + unarr[1]*100 + unarr[2]*100)/100;
                            for (let i = 0; i < 3; i++) {
                                // console.log(`unarr[i] =\n`, i, unarr[i], typeof unarr[i]);
                                let key = ``,
                                    value = (unarr[i]/unlimite_total)*100;
                                switch (i) {
                                    case 0:
                                    key = '控股股东和实际制人数量占比';
                                        break;
                                    case 1:
                                    key = '董事监事高管数量占比';
                                        break;
                                    case 2:
                                    key = '核心员工数量占比';
                                        break;
                                    default:
                                        break;
                                }
                                if (unarr[i] !== 0) {
                                    // no avlue, no key
                                    objects.unlimited.push([key, value]);
                                }else{
                                    continue;
                                }
                            }
                            OTC_F9_FV.Modules.equityShareholder.drawHS(objects, hsc_uid);
                        }else{
                            // no data
                            tr = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            // OTC_F9_FV.Modules.equityShareholder.drawHS(objects, hsc_uid);
                        }
                        tbodys_dom[0].insertAdjacentHTML(`beforeend`, tr);
                        // table 2
                        if (emptyChecker(json.sdgd) && Object.keys(json.sdgd).length > 0) {
                            if (emptyChecker(json.sdgd.datas)) {
                                let arr = json.sdgd.datas || [];
                                    // total_cgs = 0,
                                    // total_zb = 0,
                                    // total_zjbd = 0,
                                    // total_jglx = 0;
                                for (let i = 0; i < arr.length; i++) {
                                    // total_cgs += arr[i].cgs;
                                    // total_zb += arr[i].zb;
                                    // total_zjbd += arr[i].zjbd;
                                    // total_jglx += arr[i].jglx;
                                    trs += `
                                        <tr class="otc-equity-shareholder-table-tr">
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES" title="${arr[i].gdmc}">
                                                ${arr[i].gdmc}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                                ${arr[i].cgs}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                                ${arr[i].zb}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                                ${arr[i].zjbd}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                                ${arr[i].jglx}
                                            </td>
                                        </tr>
                                    `;
                                }
                                tbodys_dom[1].insertAdjacentHTML(`beforeend`, trs);
                            }else{
                                tbodys_dom[1].parentElement.setAttribute(`data-hide-table`, `no-data-hide-table`);
                            }
                            let title1 = ``;
                            if (Object.keys(json.sdgd).length === 5) {
                                //  data-span="data-otc-ES-title"
                                title1 = `
                                    <p>
                                        十大股东 (<span>${json.sdgd.sj}</span>)
                                    </p>
                                    <p data-p="data-otc-ES-title">
                                        报告期内十大股东合计持股
                                        <span>${json.sdgd.hj}</span> 万股,
                                        <span>${json.sdgd.bh}</span>
                                        ${
                                            (json.sdgd.gds !== 0 && json.sdgd.gds !== undefined)
                                            ?
                                            `,报告期内有<span>${json.sdgd.gds}</span> 位股东有减持行为`
                                            :
                                            `<span></span>`
                                        }.
                                    </p>
                                `;
                                // 万股
                                // 报告期内十大股东，合计持股77894821股，减少455315股，报告期内有2位股东有减持行为。
                            }else{
                                // no data
                                title1 = `
                                    <p data-p="no-data-p"><span data-title="sub-title">十大股东</span></p>
                                    <p data-none="no-data-p">
                                        <span data-none="no-data-span"></span>
                                    </p>
                                `;
                                hsts_dom[0].setAttribute(`data-titles`, `no-data-otc-ES-title`);
                            }
                            hsts_dom[0].insertAdjacentHTML(`beforeend`, title1);
                        }else{
                            // console.log(`no data =`, json.sdgd, tbodys_dom[1]);
                            // no data
                            trs = `
                                <p data-p="no-data-p"><span data-title="sub-title">十大股东</span></p>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            hsts_dom[0].insertAdjacentHTML(`beforeend`, trs);
                            hsts_dom[0].setAttribute(`data-titles`, `no-data-otc-ES-title`);
                            tbodys_dom[1].parentElement.setAttribute(`data-hide-table`, `no-data-hide-table`);
                        }
                        // tbodys_dom[1].insertAdjacentHTML(`beforeend`, trs);
                        // table 3
                        if (emptyChecker(json.gdhs) && Object.keys(json.gdhs).length > 0) {
                            // json.gdhs.sj && json.gdhs.hsjsq &&  json.gdhs.hjjsq ???
                            let times = ``,
                                holders = ``,
                                shares = ``;
                            json.gdhs.map(
                                (obj, i) => {
                                    times += `
                                        <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                            ${obj.sj}
                                        </td>
                                    `;
                                    holders += `
                                        <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                            ${obj.zhs}
                                        </td>
                                    `;
                                    shares += `
                                        <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                            ${obj.hjcgs}
                                        </td>
                                    `;
                                }
                            );
                            tr2 += `
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key">日期</td>
                                    ${times}
                                </tr>
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key">总户数</td>
                                    ${holders}
                                </tr>
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-key">户均持股数</td>
                                    ${shares}
                                </tr>
                            `;
                            let title2 = ``;
                            // 简述: 报告期内公司股东比上期(增加/减少) hsjsq 户，增长/负数 zhszz %，户均持股hjcgs股，增长/减少 hjzz%
                            if (Object.keys(json.gdhs[0]).length === 7) {
                                // data-span="data-otc-ES-title"
                                title2 = `
                                    <p>
                                        股东户数 (<span>${json.gdhs[0].sj}</span>)
                                    </p>
                                    <p data-p="data-otc-ES-title">
                                        报告期内公司股东比上期
                                        ${json.gdhs[0].hsjsq.includes(`-`) ? "减少" : "增加"}
                                        <span>
                                            ${emptyChecker(json.gdhs[0].hsjsq) ? json.gdhs[0].hsjsq.replace(/-/ig, ``) : "--"}
                                        </span>户,
                                        ${json.gdhs[0].zhszz.includes(`-`) ? "减少" : "增加"}
                                        <span>
                                            ${emptyChecker(json.gdhs[0].zhszz) ? json.gdhs[0].zhszz.replace(/-/ig, ``) : "--"}
                                        </span>%, 户均持股数
                                        <span>
                                            ${emptyChecker(json.gdhs[0].hjcgs) ? json.gdhs[0].hjcgs : "--"}
                                        </span>股,
                                        ${json.gdhs[0].hjzz.includes(`-`) ? "减少" : "增加"}
                                        <span>
                                            ${emptyChecker(json.gdhs[0].hjzz) ? json.gdhs[0].hjzz.replace(/-/ig, ``) : "--"}
                                        </span>%.
                                    </p>
                                `;
                            }else{
                                // no data
                                title2 = `
                                    <p data-p="no-data-p"><span data-title="sub-title">股东户数</span></p>
                                    <p data-none="no-data-p">
                                        <span data-none="no-data-span"></span>
                                    </p>
                                `;
                                hsts_dom[1].setAttribute(`data-titles`, `no-data-otc-ES-title`);
                            }
                            hsts_dom[1].insertAdjacentHTML(`beforeend`, title2);
                            tbodys_dom[2].insertAdjacentHTML(`beforeend`, tr2);
                            // tbodys_dom[2].parentElement.setAttribute(`data-hide-table`, `no-data-hide-table`);
                        }else{
                            // no data
                            tr2 = `
                                <p data-p="no-data-p"><span data-title="sub-title">股东户数</span></p>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            hsts_dom[1].insertAdjacentHTML(`beforeend`, tr2);
                            hsts_dom[1].setAttribute(`data-titles`, `no-data-otc-ES-title`);
                            tbodys_dom[2].parentElement.setAttribute(`data-hide-table`, `no-data-hide-table`);
                        }
                    } else{
                        let message = `handle json error!`,
                            fileName = `equity-shareholder.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/equity-shareholder.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-equity-shareholder-data"]`);
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
    }
);


OTC_F9_FV.Modules.equityShareholder.drawHS = OTC_F9_FV.Modules.equityShareholder.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        let {
            limite,
            unlimite,
            limited,// Array
            unlimited// Array
        } = datas;
        // console.log(`HC objects = \n`, datas);
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
            legend_item_color = (OTC_SKIN === "black") ? `#fff` : `#0b1016`,
            legend_item_hover_color = (OTC_SKIN === "black") ? `#f79530` : `#000`,
            legend_bg_color = (OTC_SKIN === "black") ? `#0b1016` : `#ff00ff`,
            data_color1 = (OTC_SKIN === "black") ? `#fff` : `#0b1016`,
            data_color2 = (OTC_SKIN === "black") ? `#0b1016` : `#ff00ff`;
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
                drillUpText: '<span style="color: #ff00ff">< 返回到: </span>{series.name}',
            }
        });
        Highcharts.chart(container_uid, {
            noData: {
                useHTML: true,
            },
            chart: {
                type: 'pie',
                backgroundColor: skin_color,
                // plotBorderWidth: 1,
                // borderWidth: 1,
                width: 540,
                // width: 530,
                height: 300,
                className: "css-class-hc-ES",
            },
            title: {
                // text: '股本结构',
                // text: '<h3>股本结构</h3>',
                text: '',
                align: "left",
                x: 10,
                y: 10,
            },
            credits: {
                enabled: false,// enabled: true,
                href: `https://www.gildata.com`,
                text: `gildata`,
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        // color: '#0f0',// level 1 color
                        style: {
                            textShadow: false,
                            textOutline: false,
                            color: '#f0f',// level 2 color
                        },
                        format: '{point.name}: {point.y:.2f}%',// .2f
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}占比</span>: <b>{point.y:.2f}%</b><br/>'
            },
            series: [{
                name: '股本结构比例',
                colorByPoint: true,
                data: [{
                    name: '有限售股份总数',
                    // y: 7.91,
                    y: limite,// Array
                    drilldown: 'Limited',
                    color: "#9bbb59",
                    // color: "#0f0"
                }, {
                    name: '无限售股份总数',
                    // y: 92.09,
                    y: unlimite,
                    drilldown: 'Unlimited',
                    color: "#4f81bd",
                    // color: "#f00"
                }]
            }],
            drilldown: {
                activeAxisLabelStyle: {
                    textDecoration: 'none',
                    fontStyle: 'italic',
                    color: `#f0f`
                },
                activeDataLabelStyle: {
                    textDecoration: 'none',
                    fontStyle: 'italic',
                    color: `#0f0`
                },
                series: [{
                    name: '有限售股份',
                    id: 'Limited',
                    data: limited,
                    // data: [
                    //     ['控股股东和实际制人数量占比', 3.00],
                    //     ['董事监事高管数量占比', 10],
                    //     ['核心员工数量占比', 60],
                    //     ['其它有限售数量占比', 27]
                    // ]
                }, {
                    name: '无限售股份',
                    id: 'Unlimited',
                    data: unlimited,
                    // data: [
                    //     ['控股股东和实际制人数量占比', 30.00],
                    //     ['董事监事高管数量占比', 50],
                    //     ['核心员工数量占比', 20],
                    // ]
                }]
            },
            // labels: {
            //     items: [
            //         {
            //             style: {
            //                 left: '10px',
            //                 top: '10px'
            //             },
            //             // html: ``,
            //         }
            //     ],
            //     style: {
            //         color: `#ccc`,
            //         position: `absolute`
            //     }
            // },
            // legend: {
            //     symbolRadius: 0,
            //     // rectangle
            //     align: 'center',// left, center and right. (Defaults to center.)
            //     itemStyle: {
            //         color: legend_item_color,
            //         // fontWeight: 'bold'
            //     },
            //     itemHoverStyle: {
            //         color: legend_item_hover_color,
            //     },
            //     /*
            //         x: 0,
            //         y: 340,
            //         verticalAlign: 'top',
            //     */
            //     x: 0,
            //     y: 0,
            //     verticalAlign: "bottom",
            //     // floating: true,
            //     floating: false,
            //     // backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            //     // borderColor: '#CCC',
            //     // borderWidth: 1,
            //     shadow: false
            // },
        });
    }
);


/*


highcharts-label
highcharts-data-label
highcharts-data-label-color-1

highcharts-drilldown-data-label"

highcharts-text-outline

*/


OTC_F9_FV.Modules.equityShareholder.init = OTC_F9_FV.Modules.equityShareholder.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast10/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            links_uid = `[data-time="otc-equity-shareholder-time"]`,
            hst_uids = `[data-titles="data-otc-ES-title"]`,
            hsc_uid = `equity_shareholder_hs_container`,
            // tbody_uid = `[data-tbody="otc-equity-shareholder-table-tbody"]`;
            tbody_uids = `[data-tbody="otc-equity-shareholder-table-tbody"]`;
        // copy(Object.keys(json));
        OTC_F9_FV.Modules.equityShareholder(url, links_uid, hst_uids, hsc_uid, tbody_uids, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    // OTC_SKIN = window.OTC_SKIN || `white`,
    OTC_SKIN = window.OTC_SKIN || `black`,
    // OTC_GILCODE = window.OTC_GILCODE || `430007.OC`;
    // OTC_GILCODE = window.OTC_GILCODE || `834380.OC`;
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.equityShareholder.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast10/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.equityShareholder.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast10/430002.OC`;

/*


// "减持661000股" => "661000"

"减持661000股".forEach(item => {
    // item.includes();
    // regex number
    // push item
});

const isNumber = (str) => {
    return parseFloat(str);
    // NaN
    // Number.isNaN(NaN);
};

*/


/*


bodys_dom = document.querySelectorAll(`[data-tbody="otc-equity-shareholder-table-tbody"]`);
// NodeList(3)

// tbodys_dom[1].style.dispaly = "none";

tbodys_dom[1].setAttribute(`data-hide-table`, `no-data-hide-table`);

[data-hide-table="no-data-hide-table"] {
    display: none;
}

*/


