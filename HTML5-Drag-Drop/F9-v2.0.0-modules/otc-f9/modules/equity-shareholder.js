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
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.equityShareholder = OTC_F9_FV.Modules.equityShareholder || (
    (url = ``, time_uid = ``, hst_uid = ``, hsc_uid = ``, tbody_uid = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                let time_dom = document.querySelector(time_uid),
                    hst_dom = document.querySelector(hst_uid),
                    tbody_dom = document.querySelector(tbody_uid);
                if (debug) {
                    console.log(`data = \n`, json);
                }
                try {
                    if (json !== undefined && typeof(json) === "object") {
                        if (json.datas !== undefined && Array.isArray(json.datas)) {
                            if (json.datas.length > 0) {
                                // backend & sort time
                                let arr = json.datas,
                                    keys = Object.keys(arr[0]);
                                let arr_obj = {},
                                    arr_obj2 = {};
                                // array bug & one data also need aray!
                                keys.forEach(
                                    (key, index) => {
                                        let new_key = ``;
                                        switch (key) {
                                            case "xm":
                                                new_key = `products`;
                                                break;
                                            case "yysr":
                                                new_key = `income`;
                                                break;
                                            case "yycb":
                                                new_key = `cost`;
                                                break;
                                            case "ml":
                                                new_key = `gross_profit`;
                                                break;
                                            default:
                                                // new_key = `暂无数据`;// null
                                                break;
                                        }
                                        arr_obj[new_key] = [];
                                    }
                                );
                                arr.map(
                                    (obj, i) => {
                                        let products = ``,
                                            income = ``,
                                            cost = ``,
                                            gross_profit = ``;
                                        products = (obj.xm !== undefined) ? obj.xm : null;
                                        income = (obj.yysr !== undefined) ? (obj.yysr !== `--` ? parseFloat(obj.yysr) : null) : null;
                                        cost = (obj.yycb !== undefined) ? (obj.yycb !== `--` ? parseFloat(obj.yycb) : null) : null;
                                        gross_profit = (obj.ml !== undefined) ? (obj.ml !== `--` ? parseFloat(obj.ml) : null) : null;
                                        // array
                                        arr_obj.products.push(products);
                                        arr_obj.income.push(income);
                                        arr_obj.cost.push(cost);
                                        arr_obj.gross_profit.push(gross_profit);
                                    }
                                );
                                if (debug) {
                                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                }
                                // Y & column === income cost gross_profit
                                // 按项目 X === xm
                                // Y & column === xm
                                // 按产品 X === income cost gross_profit
                                OTC_F9_FV.Modules.equityShareholder.drawHS(arr_obj, hsc_uid);
                                // table
                                let trs = ``;
                                for (let i = 0; i < arr.length; i++) {
                                    trs += `
                                        <tr class="otc-equity-shareholder-table-tr">
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-MMB">
                                                ${arr[i].xm}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-MMB">
                                                ${arr[i].yysr}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-MMB">
                                                ${arr[i].yycb}
                                            </td>
                                            <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-MMB">
                                                ${arr[i].yysrzb}
                                            </td>
                                        </tr>
                                    `;
                                }
                                tbody_dom.insertAdjacentHTML(`beforeend`, trs);
                            }else{
                                // `暂无数据` & no data!
                                console.log(`json.datas is empty! = \n`, json, json.datas);
                                let arr_obj = {};
                                arr_obj.productst = [];
                                arr_obj.incomet = [];
                                arr_obj.costt = [];
                                arr_obj.gross_profit = [];
                                OTC_F9_FV.Modules.equityShareholder.drawHS(arr_obj, hsc_uid);
                            }
                        }
                        let time = ``,
                            p = ``,
                            today = new Date().toLocaleString().substr(0, 10).replace(/\//ig, `-`);
                        // "2017/12/24 下午2:15:55" => "2017-12-24"
                        (json.time !== undefined)
                        ?
                        time = `<span data-time="data-otc-MMB-time">${json.time}</span>`
                        :
                        `<span data-time="data-otc-MMB-time">${today}</span>`;
                        time_dom.insertAdjacentHTML(`beforeend`, time);
                        if (json.zz !== undefined && json.zb !== undefined) {
                            p = `
                                <p data-p="data-otc-MMB-title">
                                    本报告期公司主营业务同比增长
                                    <span data-span="data-otc-MMB-title">${json.zz}</span>%, 占营业总收入
                                    <span data-span="data-otc-MMB-title">${json.zb}</span>%。
                                </p>
                            `;
                        }else{
                            // no data
                            p = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        hst_dom.insertAdjacentHTML(`beforeend`, p);
                        // HC & one container with diff datas
                    }else{
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
            products,
            income,
            cost,
            gross_profit
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
                categories: products,
                // min: max_time,
                // min: 0,
                // max: 8,
                // xAxis datas
                labels: {
                    autoRotation: [0],// autoRotation:'false',
                    // step: 2,
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
                // yAxis 0
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
                    name: '营业收入',
                    color: '#4f81bd',
                    data: income,
                    lineWidth: 2,
                    zIndex: 3,
                    marker : {
                        enabled : true,
                        radius : 0,
                        symbol: 'square'
                    },
                    tooltip: {
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} 万元</b><br/>
                        `
                    },
                },
                {
                    name: '营业成本',
                    color: '#c0504d',
                    data: cost,
                    lineWidth: 2,
                    zIndex: 2,
                    marker : {
                        enabled : true,
                        radius : 0,
                        symbol: 'square'
                    },
                    tooltip: {
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} 万元</b><br/>
                        `,
                    },
                },
                {
                    // type: 'spline',
                    // yAxis: 0,
                    color: "#9bbb59",
                    name: '毛利',
                    data: gross_profit,
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
                            {series.name}: <b>{point.y} 万元</b><br/>
                        `,
                        // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                }
            ],
            // scrollbar:{
            //     enabled: true,
            //     minWidth: 23,
            // }
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
            hst_uid = `[data-titles="data-otc-MMB-title"]`,
            hsc_uid = `equity_shareholder_hs_container`,
            tbody_uid = `[data-tbody="otc-equity-shareholder-table-tbody"]`;
        // copy(Object.keys(json));
        OTC_F9_FV.Modules.equityShareholder(url, links_uid, hst_uid, hsc_uid, tbody_uid, false);
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










