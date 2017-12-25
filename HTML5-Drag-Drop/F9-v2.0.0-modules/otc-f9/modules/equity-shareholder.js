"use strict";

/**
 * @name equity-shareholder 股本股东
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* String} time_uid
 * @param {* String} hst_uid
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
    (url = ``, links_uid = ``, hst_uid = ``, hsc_uid = ``, tbody_uids = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                let links_dom = document.querySelectorAll(links_uid),
                    hst_dom = document.querySelector(hst_uid),
                    tbodys_dom = document.querySelectorAll(tbody_uids);
                if (debug) {
                    console.log(`data = \n`, json);
                }
                try {
                    if (json !== undefined && typeof(json) === "object") {
                        let tr = ``,
                            trs = ``,
                            tr2 = ``;
                        let objects = {
                            limite: ``,
                            unlimite: ``,
                            limited: [],// Array
                            unlimited: [],// Array
                        };
                        // table 1
                        if (json.gbjg !== undefined && typeof(json.gbjg) === "object") {
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
                        }
                        tbodys_dom[0].insertAdjacentHTML(`beforeend`, tr);
                        // table 2
                        if (json.sdgd !== undefined && typeof(json.sdgd) === "object") {
                            if (json.sdgd.datas !== undefined && Array.isArray(json.sdgd.datas)) {
                                let arr = json.sdgd.datas || [];
                                for (let i = 0; i < arr.length; i++) {
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
                            }
                        }else{
                            // no data
                            trs = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        tbodys_dom[1].insertAdjacentHTML(`beforeend`, trs);
                        // table 3
                        if (json.gdhs !== undefined && typeof(json.gdhs) === "object") {
                            // json.gdhs.sj && json.gdhs.hsjsq &&  json.gdhs.hjjsq ???
                            tr2 = `
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                        ${json.gdhs.zhs}
                                    </td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                        ${json.gdhs.zhszz}
                                    </td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                        ${json.gdhs.hjcgs}
                                    </td>
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES">
                                        ${json.gdhs.hjzz}
                                    </td>
                                </tr>
                            `;
                        }else{
                            // no data
                            tr2 = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        tbodys_dom[2].insertAdjacentHTML(`beforeend`, tr2);
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
        return datas;
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
                // plotBorderWidth: 1,
                // borderWidth: 1,
                width: 530,
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
                    color: "#9bbb59"
                }, {
                    name: '无限售股份总数',
                    // y: 92.09,
                    y: unlimite,
                    drilldown: 'Unlimited',
                    color: "#4f81bd"
                }]
            }],
            drilldown: {
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
        });
    }
);



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
            hst_uid = `[data-titles="data-otc-ES-title"]`,
            hsc_uid = `equity_shareholder_hs_container`,
            // tbody_uid = `[data-tbody="otc-equity-shareholder-table-tbody"]`;
            tbody_uids = `[data-tbody="otc-equity-shareholder-table-tbody"]`;
        // copy(Object.keys(json));
        OTC_F9_FV.Modules.equityShareholder(url, links_uid, hst_uid, hsc_uid, tbody_uids, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.equityShareholder.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast10/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.equityShareholder.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast10/430002.OC`;


