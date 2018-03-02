"use strict";

/**
 * @name company-performance-scale 公司表现-公司规模
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* String} hst_uid
 * @param {* String} hsc_uid
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.companyPerformanceScale = OTC_F9_FV.Modules.companyPerformanceScale || (
    (url = ``, hst_uid = ``, hsc_uid = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                let hst_dom = document.querySelector(hst_uid);
                if (debug) {
                    console.log(`data = \n`, json);
                    console.log(`hst_dom = \n`, hst_dom);
                    // console.log(`hsc_dom = \n`, hsc_dom);
                }
                try {
                    // array ??? object
                    if (typeof(datas) === "object") {
                        if(Object.keys(datas).length > 0){
                            if (datas.data !== undefined && typeof(datas.data) === "object") {
                                if (Array.isArray(datas.datas) && datas.datas.length > 0) {
                                    // backend & sort time
                                    let arr = datas.datas,
                                        keys = Object.keys(arr[0]);
                                    const arr_obj = {};
                                    // array bug & one data also need aray!
                                    arr_obj["industry_total_value"] = [parseFloat(datas.hyzsz)];
                                    arr_obj["industry_circulation_value"] = [parseFloat(datas.hyltsz)];
                                    keys.forEach(
                                        (key, index) => {
                                            let new_key = ``;
                                            switch (key) {
                                                case "zqdm":
                                                    new_key = `code`;
                                                    break;
                                                case "zsz":
                                                    new_key = `total_value`;
                                                    break;
                                                case "ltsz":
                                                    new_key = `circulation_value`;
                                                    break;
                                                case "pm":
                                                    new_key = `ranks`;
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
                                                total_value = ``,
                                                ranks = ``,
                                                circulation_value = ``;
                                            code = (obj.zqdm !== undefined) ? obj.zqdm : null;
                                            total_value = (obj.zsz !== undefined) ? parseFloat(obj.zsz) : null;
                                            circulation_value = (obj.ltsz !== undefined) ? parseFloat(obj.ltsz) : null;
                                            ranks = (obj.pm !== undefined) ? parseFloat(obj.pm) : null;
                                            // array
                                            arr_obj.code.push(code);
                                            arr_obj.total_value.push(total_value);
                                            arr_obj.circulation_value.push(circulation_value);
                                            arr_obj.ranks.push(ranks);
                                        }
                                    );
                                    if (debug) {
                                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                    }
                                    OTC_F9_FV.Modules.companyPerformanceScale.drawHS(arr_obj, hsc_uid);
                                }else{
                                    // `暂无数据` & no data!
                                    console.log(`json is empty! = \n`, json);
                                    const arr_obj = {};
                                    arr_obj.industry_total_value = [];
                                    arr_obj.industry_circulation_value = [];
                                    arr_obj.code = [];
                                    arr_obj.change_rate = [];
                                    OTC_F9_FV.Modules.companyPerformanceScale.drawHS(arr_obj, hsc_uid);
                                }
                            }
                            let html = ``;
                            if (datas.data !== undefined && typeof(datas.data) === "object") {
                                html = `
                                    <p data-p="company-performance-scale-p">
                                        <span data-span="company-performance-scale-span">${datas.data.zqdm}</span> 总市值为
                                        <span data-span="company-performance-scale-span">${datas.data.zsz}</span> 万元, 高于行业均值, 行业排名第
                                        <span data-span="company-performance-scale-span">${datas.data.pm}</span>.
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
                            hst_dom.insertAdjacentHTML(`beforeend`, html);
                        }else{
                            // no data
                            let html = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            hst_dom.insertAdjacentHTML(`beforeend`, html);
                            // `暂无数据` & no data!
                            let hc_dom = document.querySelector(`#${hsc_uid}`);
                            hc_dom.setAttribute(`no-data-hs-container`, `no-data-company-performance-scale-container-uid`);
                            // let hc_dom = document.querySelector(`#company_performance_scale_hs_container`);
                            // hc_dom.style.display = "none !important;";
                        }
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-performance-scale.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/**/otc-f9/modules/company-performance-scale.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.companyPerformanceScale.drawHS = OTC_F9_FV.Modules.companyPerformanceScale.drawHS || (
    (
        datas = {},
        container_uid = ``,
        debug = false
    ) => {
        let {
            code,
            total_value,
            circulation_value,
            ranks,
            industry_total_value,
            industry_circulation_value
        } = datas;
        let v1 = industry_circulation_value[0],
            v2 = industry_total_value[0];
        // (code.length - 1)
        for (let i = 0; i < (code.length - 1); i++) {
            industry_circulation_value.push(v1);
            industry_total_value.push(v2);
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
        if (debug) {
            console.log(`industry_total_value = \n`, industry_total_value, typeof(industry_total_value));
            console.log(`industry_circulation_value = \n`, industry_circulation_value);
        }
        const {color, colors, optioncolor, gridColor, legendColor, yAxisColor, index_color} = {...chart_css};
        // SKIN
        let skin_color = (OTC_SKIN === "black") ? `#0b1016` : `#fff`,
            grid_line_color = (OTC_SKIN === "black") ? `#2d3039` : `#e9e9e9`,
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
                // plotBorderWidth: 1,
                plotBorderColor:  grid_line_color,
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
                    // step: 2,
                    step: 1
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
                    gridLineColor: grid_line_color,
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
                },
            ],
            legend: {
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
                    // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                    // stacking: 'null',
                    // stacking: 'percent',// 百分比堆叠柱形图
                    // dataLabels: {
                    //     enabled: true,
                    //     // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    //     color: "#434348"
                    // },
                    borderWidth: 0,
                },
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
                    name: '行业均值-总市值',
                    // color: "#f04949",
                    color: '#00ff00',
                    data: industry_total_value,
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
                            {series.name}: <b>{point.y} 万元</b><br/>
                        `,
                        // 点 <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                },
                {
                    type:'spline',
                    name: '行业均值-流通市值',
                    color: '#ff00ff',
                    data: industry_circulation_value,
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
                    // yAxis: 1, // 0 ???
                    color: "yellow",
                    name: '总市值',
                    data: total_value,
                    zIndex: 1,
                    connectNulls: true,// OK
                    tooltip: {
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} 万元</b><br/>
                        `,
                    },
                },
                {
                    // type: 'spline',
                    // yAxis: 1, // 0 ???
                    color: "skyblue",
                    name: '流通市值',
                    data: circulation_value,
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
                },
                // {
                //     // type: 'spline',
                //     color: "dark",
                //     name: '排名',
                //     data: ranks,
                //     zIndex: 1,
                //     connectNulls: true,// OK
                //     tooltip: {
                //         pointFormat: `
                //             <span style="color:{point.color}">\u25CF</span>
                //             {series.name}: <b>{point.y} %</b><br/>
                //         `,
                //     },
                // }
            ],
            // scrollbar: {
            //     enabled: true
            // }
        });
    }
);


OTC_F9_FV.Modules.companyPerformanceScale.init = OTC_F9_FV.Modules.companyPerformanceScale.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast06/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            hst_uid = `[data-hs-title="data-company-performance-scale-title-uid"]`,
            hsc_uid = `company_performance_scale_hs_container`;
        // copy(Object.keys(json));
        OTC_F9_FV.Modules.companyPerformanceScale(url, hst_uid, hsc_uid, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_SKIN = window.OTC_SKIN || `white`,
    // OTC_SKIN = window.OTC_SKIN || `black`,
    // OTC_GILCODE = window.OTC_GILCODE || `430007.OC`;// no data
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.companyPerformanceScale.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast06/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.companyPerformanceScale.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast06/430002.OC`;

