"use strict";

/**
 * monthly-capital-flows-large-single-statistics 盈利预告近一月资金流向大单统计
 * xgqfrms
 * creadted 2017.10.17
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// monthly-capital-flows-large-single-statistics MCFLSStatistics

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.MCFLSStatistics = STOCK_F9_FV.Modules.MCFLSStatistics || (
    (url = ``, uid = `default_dom_uid`, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                let arr = json;// Array
                if (debug) {
                    console.log(`data = \n`, json);
                }
                let strs = json.map(
                    (obj) => {
                        if (debug) {
                            console.log(obj.sj);
                        }
                        return obj.sj;
                        //return num = parseInt(obj.sj.replace(/-/g, ``));
                    }
                );
                strs = strs.sort();
                arr = strs.map(
                    (date) => {
                        for (var i = 0; i < strs.length; i++) {
                            if(date === arr[i].sj){
                                return arr[i];
                            }
                        }
                        // return arr[i];
                    }
                );
                let keys = Object.keys(arr[0]);
                const arr_obj = {};
                keys.forEach(
                    (key, index) => {
                        // as / alias
                        let new_key = ``;
                        switch (key) {
                            case "sj":
                                new_key = `time`;
                                break;
                            case "bl":
                                new_key = `purchase_amount`;
                                break;
                            case "gj":
                                new_key = `closing_price`;
                                break;
                            default:
                                new_key = `😟 暂无数据`;
                                break;
                        }
                        arr_obj[new_key] = [];
                    }
                );
                if (debug) {
                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                }
                let counter = 1;
                arr.map(
                    (obj, i) => {
                        // console.log(`obj = `, JSON.stringify(obj, null, 4));
                        let time = ``, purchase_amount = ``, closing_price = ``;
                        time = (obj.sj !== undefined) ? obj.sj : `😟 暂无数据`;
                        // no string, just keep number!
                        purchase_amount = (obj.bl !== undefined) ? obj.bl : `😟 暂无数据`;
                        closing_price = (obj.gj !== undefined) ? obj.gj : `😟 暂无数据`;
                        // average = -1.7976931348623157e+308;
                        // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : null) : `😟 暂无数据`;
                        // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : `--`) : `😟 暂无数据`;
                        // invalid value === 展示“--”
                        // console.log(`keep = `, keep);
                        arr_obj.time.push(time);
                        arr_obj.purchase_amount.push(purchase_amount);
                        arr_obj.closing_price.push(closing_price);
                        // return arr_obj;
                        if (counter === 1) {
                            if (debug) {
                                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                            }
                            counter ++;
                        }
                    }
                );
                if (debug) {
                    console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                }
                datas = Object.assign(datas, arr_obj);
                STOCK_F9_FV.Modules.MCFLSStatistics.MCFLSSdrawHS(datas, uid);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return datas;
    }
);



/**
 * @author xgqfrms
 *
 * @param {* Object} datas
 * @param {* String} container_uid
 * @param {* DOM Element} container_div
 * @param {* Boolean} debug
 */
STOCK_F9_FV.Modules.MCFLSStatistics.MCFLSSdrawHS = STOCK_F9_FV.Modules.MCFLSStatistics.MCFLSSdrawHS || (
    (datas = {}, container_uid = `container`, debug = false) => {
        let titles = {
            title1: `title 1`,
            title2: `title 2`
        };
        // let {time, purchase_amount, closing_price, average, keep} = {...datas};
        // babel ??? ES5
        let time = datas.time,
            purchase_amount = datas.purchase_amount,
            closing_price = datas.closing_price;
        if (debug) {
            console.log(`time = \n`, time);
            console.log(`purchase_amount = \n`, purchase_amount);
            console.log(`closing_price = \n`, closing_price);
        }
        // datas
        const chart_css = {
            color: `#0B1016`,
            colors: ['#ff1919', '#ffff66', '#92d050'],
            optioncolor: `red`,
            gridColor: `#2D3039`,
            legendColor: `#fff`,
            yAxisColor: `#FFB400`,
        };
        // css_obj ???
        // const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
        let color = chart_css.color,
            colors = chart_css.colors,
            optioncolor = chart_css.optioncolor,
            gridColor = chart_css.gridColor,
            legendColor = chart_css.legendColor,
            yAxisColor = chart_css.yAxisColor;
        // container_div
        // Highcharts.stockChart
        // Highcharts.chart
        Highcharts.chart(container_uid, {
            noData: {// all defualt value
                attr: undefined,
                position: {
                    align: `center`,
                    verticalAlign: `middle`,
                    x: 0,
                    y: 0,
                },
                style: {
                    color: `#666666`,
                    fontSize: `12px`,
                    fontWeight: `bold`
                },
                useHTML: false,
            },
            /* rangeSelector: {
                selected: 4
            }, */
            chart: {
                type: 'column',
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                height: 293,// 275px;
                // 16:9 ratio
                marginTop: 30,
                // marginBottom: 65,
            },
            title: {
                text: '',
                // text: 'Stacked column chart'
            },
            xAxis: {
                // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
                categories: time,
                min: 0,
                max: 8,
                // xAxis datas
                // xAxis datas
                labels: {
                    // autoRotation:'false',
                    autoRotation: [0],
                    step: 2
                }
            },
            credits: {
                // enabled: true,//
                enabled: false,
                href: `https://www.gildata.com`,
                text: `gildata`,
                // position: https://api.highcharts.com/highstock/credits.style,
                // style: https://api.highcharts.com/highstock/credits.style
            },
            colors: ['#ff1919', '#ffff66', '#92d050'],
            // colors: ['#ff1919', '#ffff66', '#92d050'],
            // colors: [...colors],
            yAxis: [
                // yAxis 1
                {
                    // x: -50,
                    // y: -50,
                    // min: -6000,// in case auto change range, fixed range
                    // max: 12000,// in case auto change range, fixed range
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    labels: {
                        // format: '{value}%',// 百分比
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    }
                /*  stackLabels: {
                        // enabled: true,// counter all cols values
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    } */
                },
                // yAxis 2
                {
                    // x: -50,
                    // y: -50,
                    // min: 0,// bug ???
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    stackLabels: {
                        // enabled: true,
                        style: {
                            fontWeight: 'bold',
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                        }
                    },
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
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: {point.y}<br/>
                `,
                // 总数/总共/总量/总额/共有/总数
                // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
            },
            // 情节/绘图选项
            plotOptions: {
                // (series) type = column (chart)
                column: {
                    stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                    // stacking: 'null',
                    // stacking: 'percent',// 百分比堆叠柱形图
                    dataLabels: {
                        // enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                spline: {
                    // stacking: 'normal',
                    dataLabels: {
                        // enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [
                {
                    name: '大单净买入额',// type = column (chart)
                    data: purchase_amount,
                    // color: "#00ce9b",// ""
                    color: "#7cb5ec",
                    negativeColor: '#00ce9b'
                },
                {
                    type:'spline',
                    yAxis: 1,
                    color: "#434348",
                    name: '最新收盘价',
                    data: closing_price,
                    connectNulls: true,// OK
                    tooltip: {
                        headerFormat: `
                            <strong>
                                {point.x}
                            </strong>
                            <br/>
                        `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y}</b><br/>
                        `,
                        // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
                    },
                }
            ],
            scrollbar: {
                enabled: true
            }
        });
    }
);


STOCK_F9_FV.Modules.MCFLSStatistics.init = STOCK_F9_FV.Modules.MCFLSStatistics.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast09/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `monthly_capital_flows_large_single_statistics_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.MCFLSStatistics(url, uid, false);
        // STOCK_F9_FV.Modules.MCFLSStatistics(url, uid, true);
    }
);


STOCK_F9_FV.Modules.MCFLSStatistics.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast09/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast09/`,
    // gilcode: `600570.SH`
});

