"use strict";

/**
 * monthly-capital-flows-large-single-statistics 盈利预告近一月资金流向大单统计
 * xgqfrms
 * creadted 2017.10.17
 * @param {* String} url 
 * @param {* DOM Element} uid
 * @param {* Boolean} debug 
 */

// todo

// monthly-capital-flows-large-single-statistics MCFLSStatistics

const MCFLSStatistics = (url = ``, debug = false, uid = `default_dom_uid`) => {
    // profitForecast
    console.log(`uid = `, uid);
    // debug = true;
    let datas = {};
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            let arr = json;// Array
            // async
            if (debug) {
                console.log(`data = \n`, json);
            }
            let strs = json.map(
                (obj) => {
                    console.log(obj.sj);
                    return obj.sj;
                    //return num = parseInt(obj.sj.replace(/-/g, ``));
                }
            );
            strs = strs.sort();
            //  ["2007-04-30", "2009-10-31", "2010-02-28", "2016-10-31", "2017-09-30"]
            arr = strs.map(
                (date) => {
                    // "2007-04-30"
                    for (var i = 0; i < strs.length; i++) {
                        if(date === arr[i].sj){
                            return arr[i];
                        }
                    }
                    // return arr[i];
                }
            );
            /* 
                [
                    {
                        "sj": "2017-10-27",
                        "bl": -522.69,
                        "gj": 52.12
                    },
                ]
            */
            // Array.isArray(arr);
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
            console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
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
                        console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                        counter ++;
                    }
                }
            );
            console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
            datas = Object.assign(datas, arr_obj);
            MCFLSSdrawHS(datas, uid);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    return datas;
};



/**
 * @author xgqfrms
 * 
 * @param {* Object} datas 
 * @param {* String} container_uid 
 * @param {* DOM Element} container_div 
 * @param {* Boolean} debug
 */

const MCFLSSdrawHS = (datas = {}, container_uid = `container`, debug = false) => {
    let titles = {
        title1: `title 1`,
        title2: `title 2`
    };
    // let {time, purchase_amount, closing_price, average, keep} = {...datas};
    // babel ??? ES5 
    let time = datas.time,
        purchase_amount = datas.purchase_amount,
        closing_price = datas.closing_price;
    console.log(`time = \n`, time);
    console.log(`purchase_amount = \n`, purchase_amount);
    console.log(`closing_price = \n`, closing_price);
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
    const {color, colors, optioncolor, gridColor, legendColor, yAxisColor} = {...chart_css};
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
            height: (9 / 16 * 100) + '%',
            // 16:9 ratio
        },
        title: {
            text: '',
            // text: 'Stacked column chart'
        },
        xAxis: {
            // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
            categories: time,
            min: 0,
            max: 8
            // xAxis datas
        },
        credits: {
            enabled: true,// enabled: false,
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
                min: -6000,// in case auto change range, fixed range
                max: 12000,// in case auto change range, fixed range
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
            align: 'right',// left, center and right. (Defaults to center.)
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
                <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
            `,
            // 总数/总共/总量/总额/共有/总数
            // {${point.stackTotal ? point.stackTotal : point.y}} ???
            // {point.stackTotal || point.y}
            // {point.stackTotal ? point.stackTotal : point.y}
        },
        // 情节/绘图选项
        plotOptions: {
            // (series) type = column (chart)
            column: {
                stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                // stacking: 'null',
                // stacking: 'percent',// 百分比堆叠柱形图
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [
            {
                name: '大单净买入额',// type = column (chart)
                data: purchase_amount,
            },
            {
                type:'spline',
                yAxis: 1,
                color:"skyblue",
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


// call fetch json datas
setTimeout(() => {
    // async & await
    const sf_num= `stockfast09`;
    const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
    let uid = `monthly_capital_flows_large_single_statistics_hs_container`;
    let hs_datas = MCFLSStatistics(url, true, uid);
    console.log(`hs_datas = \n`, JSON.stringify(hs_datas, null, 4));
}, 0);

