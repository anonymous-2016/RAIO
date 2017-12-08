"use strict";

/**
 * profit-forecast 盈利预告
 * xgqfrms
 * creadted 2017.10.17
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// todo

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.profitForecast = STOCK_F9_FV.Modules.profitForecast || (
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
                            console.log(obj.rq);
                        }
                        return obj.rq;
                        //return num = parseInt(obj.rq.replace(/-/g, ``));
                    }
                );
                strs = strs.sort();
                arr = strs.map(
                    (date) => {
                        // "2007-04-30"
                        for (var i = 0; i < strs.length; i++) {
                            if(date === arr[i].rq){
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
                            case "rq":
                                new_key = `time`;
                                break;
                            case "st":
                                new_key = `up`;
                                break;
                            case "xt":
                                new_key = `down`;
                                break;
                            case "pj":
                                new_key = `average`;
                                break;
                            case "wc":
                                new_key = `keep`;
                                break;
                            default:
                                new_key = `暂无数据`;
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
                        let time = ``, up = ``, down = ``, average = ``, keep = ``;
                        // let time = up = down = average = keep = ``;
                        // ReferenceError: keep is not defined
                        // time.push();
                        // time = `${(obj.rq !== undefined) ? obj.rq : `暂无数据`}`;
                        time = (obj.rq !== undefined) ? obj.rq : `暂无数据`;
                        // no string, just keep number!
                        up = (obj.st !== undefined) ? obj.st : `暂无数据`;
                        down = (obj.xt !== undefined) ? obj.xt : `暂无数据`;
                        // average = -1.7976931348623157e+308;
                        average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : null) : `暂无数据`;
                        // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : `--`) : `暂无数据`;
                        // invalid value === 展示“--”
                        keep = (obj.wc !== undefined) ? obj.wc : `暂无数据`;
                        // arr[i] ??? bug
                        // console.log(`keep = `, keep);
                        arr_obj.time.push(time);
                        arr_obj.up.push(up);
                        arr_obj.down.push(down);
                        arr_obj.average.push(average);
                        arr_obj.keep.push(keep);
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
                // let {...arr_obj} = {rq: [], st: [], xt: [], pj: [], wc: []};
                // Object.assign()
                // arr.forEach() just use for addEventListener() / do somthing, no return value / undefined!
                // arr.map(), return an shaped new array!
                datas = Object.assign(datas, arr_obj);
                // return Object.assign(datas, arr_obj);
                // return arr_obj;
                STOCK_F9_FV.Modules.profitForecast.drawHS(datas, uid);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // return datas;
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

STOCK_F9_FV.Modules.profitForecast.drawHS = STOCK_F9_FV.Modules.profitForecast.drawHS || (
    (datas = {}, container_uid = `container`, container_div = `dom_element`, debug = false) => {
        let titles = {
            title1: `title 1`,
            title2: `title 2`
        };
        // let {time, up, down, average, keep} = {...datas};
        // babel ??? ES5
        let time = datas.time,
            up = datas.up,
            down = datas.down,
            average = datas.average,
            keep = datas.keep;
        if (debug) {
            console.log(`time = \n`, time);
            console.log(`up = \n`, up);
            console.log(`down = \n`, down);
            console.log(`average = \n`, average);
            console.log(`keep = \n`, keep);
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
        // Highcharts.setOptions({
        //     lang: {
        //         numericSymbols: ['万', '億'],
        //         numericSymbolMagnitude: 10000
        //     }
        // });
        Highcharts.setOptions({
            lang: {
                noData: '暂无数据'
            }
        });
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
                // backgroundColor: chart_css.color,
                // backgroundColor: `#13579e`,
                // height: (9 / 16 * 100) + '%',
                height: 272,
                // 16:9 ratio
                // padding: 50,
                // 数组中的数字分别表示顶部，右侧，底部和左侧。
                // Use the options marginTop, marginRight, marginBottom and marginLeft for shorthand setting of one option.
                // margin: [20, 50, 30, 50]
                marginTop: 30,
                // marginBottom: 65,
            },
            title: {
                text: '',
                // text: 'Stacked column chart'
            },
            subtitle: {
                // text: 'xxx',
            },
            xAxis: {
                // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
                categories: time,
                min: 0,
                max: 8,
                // xAxis datas
                labels: {
                    // autoRotation:'false',
                    autoRotation: [0],
                    step: 2,// dynamic step ??? width change listener ???
                    // enabled: false,
                    // format: String
                    // formatter: () => `<a href="${categoryLinks[this.value]}">${this.value}</a>`;
                    // reserveSpace: false,  // 轴标签不占用空间
                    // staggerLines: 2,
                    // rotation: -90,
                    // align: 'left',
                    // y: -5,
                    // style: {
                    //     color: '#FFFFFF',
                    //     fontSize: '12pt',
                    //     fontWeight: 'bold',
                    //     textOutline: '1px contrast'
                    // }
                },
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
                    min: 0,
                    max: 100,
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    labels: {
                        format: '{value}%',// 百分比
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
                    // min: 0,
                    // max: 4,
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
                // symbolHeight: 10,
                // symbolWidth: 17,// "17 !important" ???
                symbolRadius: 0,
                // legend symbol
                align: 'center',// left, center and right. (Defaults to center.)
                // backgroundColor: `#ff00ff`, //Color,
                /*
                    x: 0,
                    y: 340,
                    verticalAlign: 'top',
                */
                x: 0,
                y: 5,
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
                    // stacking: 'normal',// 是否将每个系列的值叠加在一起, 默认是：null
                    // stacking: 'null',
                    stacking: 'percent',// 百分比堆叠柱形图
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                spline: {
                    // stacking: 'normal',
                    dataLabels: {
                        // enabled: true,
                        color: "#7cb5ec"
                    }
                }
            },
            series: [
                {
                    name: '上调',// type = column (chart)
                    // data: [5, 3, 4, 7, 2],
                    data: up,
                },
                {
                    name: '维持',
                    // data: [2, 2, 3, 2, 1],
                    data: keep,
                },
                {
                    name: '下调',
                    // data: [3, 4, 4, 2, 5],
                    data: down,
                },
                {
                    type:'spline',
                    yAxis: 1,
                    color: "skyblue",
                    name: '平均',
                    // data: [3, 4, 4, 2, 5],
                    data: average,
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
            },
            // rangeSelector: {
            //     enabled: false,
            // },
            // navigator: {
            //     enabled: false,
            //     // adaptToUpdatedData:
            // },
        });
    }
);


STOCK_F9_FV.Modules.profitForecast.init = STOCK_F9_FV.Modules.profitForecast.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast03/`,
            gilcode: `600570.SH`
        }
    ) => {
        // console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
        // console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `profit_forecast_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.profitForecast(url, uid, false);
        // STOCK_F9_FV.Modules.profitForecast(url, uid, true);
    }
);

STOCK_F9_FV.Modules.profitForecast.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast03/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast03/`,
    // gilcode: STOCK_SecCode
});


