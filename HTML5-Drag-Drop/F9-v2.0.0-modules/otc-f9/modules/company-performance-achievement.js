"use strict";

/**
 * @name company-performance-achievement 公司表现-公司业绩
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* Array} hst_uids
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


OTC_F9_FV.Modules.companyPerformanceAchievement = OTC_F9_FV.Modules.companyPerformanceAchievement || (
    (url = ``, hst_uids = ``, hsc_uid = ``, hsc_uid2 = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                let hst_doms = document.querySelectorAll(hst_uids);
                if (debug) {
                    console.log(`data = \n`, json);
                    console.log(`hst_doms = \n`, hst_doms);
                    // console.log(`hsc_dom = \n`, hsc_dom);
                }
                try {
                    if (typeof(datas) === "object" && Object.keys(datas).length > 0) {
                        if (datas.top5 !== undefined && Array.isArray(datas.top5)) {
                            // console.log(`datas.top5`, datas.top5);
                            if (datas.top5.length > 0) {
                                // backend & sort time
                                let arr = datas.top5,
                                    keys = Object.keys(arr[0]);
                                // ["zqdm", "mgsy", "pm", "ttm"]
                                const arr_obj = {};
                                if (datas.mgsypj !== undefined && datas.sylpj !== undefined) {
                                    arr_obj.share_earnings_average = [parseFloat(datas.mgsypj)];
                                    arr_obj.ttm_average = [parseFloat(datas.sylpj)];
                                }
                                keys.forEach(
                                    (key, index) => {
                                        let new_key = ``;
                                        switch (key) {
                                            case "zqdm":
                                                new_key = `code`;
                                                break;
                                            case "mgsy":
                                                new_key = `share_earnings`;
                                                break;
                                            case "pm":
                                                new_key = `ranks`;
                                                break;
                                            case "ttm":
                                                new_key = `ttm`;
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
                                            share_earnings = ``,
                                            ranks = ``,
                                            ttm = ``;
                                        code = (obj.zqdm !== undefined) ? obj.zqdm : null;
                                        share_earnings = (obj.mgsy !== undefined) ? parseFloat(obj.mgsy) : null;
                                        // ranks = (obj.pm !== undefined) ? parseFloat(obj.pm) : null;
                                        ttm = (obj.ttm !== undefined) ? parseFloat(obj.ttm) : null;
                                        arr_obj.code.push(code);
                                        arr_obj.share_earnings.push(share_earnings);
                                        arr_obj.ttm.push(ttm);
                                        // arr_obj.ranks.push(ranks);
                                    }
                                );
                                if (debug) {
                                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                }
                                OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS(arr_obj, hsc_uid);
                                OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS2(arr_obj, hsc_uid2);
                            }else{
                                // `暂无数据` & no data!
                                // console.log(`json is empty! = \n`, json);
                                const arr_obj = {};
                                arr_obj.code = [];// shared xAxis
                                arr_obj.share_earnings = [];
                                arr_obj.ttm = [];
                                // arr_obj.ranks = [];
                                arr_obj.share_earnings_average = [];
                                arr_obj.ttm_average = [];
                                OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS(arr_obj, hsc_uid);
                                OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS2(arr_obj, hsc_uid2);
                            }
                        }
                        // no data
                        let html = ``;
                        if (datas.stock !== undefined && typeof(datas.stock) === "object") {
                            let text = (parseFloat(datas.stock.mgsy) - parseFloat(datas.mgsypj) > 0) ? "高于" : "低于";
                            // 高于 ? 低于
                            html = `
                                <p data-p="company-performance-achievement-p">
                                    <span data-span="company-performance-achievement-span">${datas.stock.zqdm}</span> 每股收益(TTM)为
                                    <span data-span="company-performance-achievement-span">${datas.stock.mgsy}</span>,
                                    <span data-span="company-performance-achievement-span">${text}</span>行业均值, 行业排名第
                                    <span data-span="company-performance-achievement-span">${datas.stock.pm}</span> 位。
                                </p>
                            `;
                        }else{
                            // no data
                            html = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        hst_doms[0].insertAdjacentHTML(`beforeend`, html);
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-performance-achievement.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/company-performance-achievement.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS = OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        let {code, share_earnings, share_earnings_average} = {...datas};
        // console.log(`share_earnings = \n`, share_earnings);
        // console.log(`time = \n`, time);
        // let max_time = (time.length-10);
        let v1 = share_earnings_average[0]
        for (let i = 0; i < 4; i++) {
            share_earnings_average.push(v1);
        }
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
                // type: 'column',
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
                // text: '近一个月涨跌幅',
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
                    step: 1, // step:  2
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
                    min: 0,
                    // floor: 0,
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
                        text: ``,
                    },
                    labels: {
                        format: '{value}',// 百分比
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
                    type:'column',
                    name: '每股收益(TTM)',
                    // color: "#f04949",
                    color: '#41aae2',
                    data: share_earnings,
                    zIndex: 1,
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} </b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                },
                {
                    type: 'spline',
                    // yAxis: 1,
                    color: "#ff5757",
                    // color: "lawngreen",
                    name: '行业均值',
                    data:  share_earnings_average,
                    zIndex: 2,
                    marker : {
                        enabled : true,
                        radius : 0,
                        symbol: 'square'
                    },
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
                            {series.name}: <b>{point.y}</b><br/>
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

OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS2 = OTC_F9_FV.Modules.companyPerformanceAchievement.drawHS2 || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        let {code, ttm, ttm_average} = {...datas};
        // console.log(`ttm = \n`, ttm);
        let v1 = ttm_average[0]
        for (let i = 0; i < 4; i++) {
            ttm_average.push(v1);
        }
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
                // type: 'column',
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
                // text: '近一个月涨跌幅',
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
                // labels: {
                //     autoRotation: [0],// autoRotation:'false',
                //     step: 1, // 1
                // }
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
                        text: ``,
                    },
                    labels: {
                        format: '{value}',// 百分比
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
                    type:'column',
                    name: '市盈率(TTM)',
                    // color: "#f04949",
                    color: '#41aae2',
                    data: ttm,
                    zIndex: 1,
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} </b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                },
                {
                    type: 'spline',
                    // yAxis: 1,
                    color: "#ff5757",
                    // color: "lawngreen",
                    name: '行业均值',
                    data:   ttm_average,
                    zIndex: 2,
                    marker : {
                        enabled : true,
                        radius : 0,
                        symbol: 'square'
                    },
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
                            {series.name}: <b>{point.y}</b><br/>
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


OTC_F9_FV.Modules.companyPerformanceAchievement.init = OTC_F9_FV.Modules.companyPerformanceAchievement.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast07/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            hst_uids = `[data-hs-title="data-company-performance-achievement-title-uid"]`,
            hsc_uid = `company_performance_achievement_hs_container`,
            hsc_uid2 = `company_performance_achievement_hs_container2`;
        // copy(Object.keys(json));
        OTC_F9_FV.Modules.companyPerformanceAchievement(url, hst_uids, hsc_uid, hsc_uid2, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.companyPerformanceAchievement.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast07/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.companyPerformanceAchievement.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast07/430002.OC`;

