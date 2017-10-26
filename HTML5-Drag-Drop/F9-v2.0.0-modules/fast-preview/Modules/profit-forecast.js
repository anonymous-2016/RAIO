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



const profitForecast = (url = ``, debug = false, uid = `default_dom_uid`) => {
    // profitForecast
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
                /* 
                    [
                        {
                            "rq": "2017-10-25",
                            "pj": 0.66,
                            "st": 0,
                            "wc": 1,
                            "xt": 0
                        },
                        {
                            "rq": "2017-09-30",
                            "pj": 0.71,
                            "st": 3,
                            "wc": 2,
                            "xt": 2
                        }
                    ]
                */
                // Array.isArray(arr);
                let keys = Object.keys(arr[0]);
                // (5) ["rq", "pj", "st", "wc", "xt"]
                const arr_obj = {};
                keys.forEach(
                    (key, index) => {
                        // console.log(`key, index = \n`, key, index);
                        // arr_obj[key] = [];
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
                                new_key = `😟 暂无数据`;
                                break;
                        }
                        arr_obj[new_key] = [];
                    }
                );
                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                // {"rq":[],"pj":[],"st":[],"wc":[],"xt":[]}
                // 5 array
                // keys.map(k => console.log(typeof k));// string
                // ["rq", "pj", "st", "wc", "xt"].map(k => console.log(k));
                // let time = up = down = average = keep = [];
                let counter = 1;
                arr.map(
                    (obj, i) => {
                        // console.log(`obj = `, JSON.stringify(obj, null, 4));
                        let time = ``, up = ``, down = ``, average = ``, keep = ``;
                        // let time = up = down = average = keep = ``;
                        // ReferenceError: keep is not defined
                        // time.push();
                        // time = `${(obj.rq !== undefined) ? obj.rq : `😟 暂无数据`}`;
                        time = (obj.rq !== undefined) ? obj.rq : `😟 暂无数据`;
                        // no string, just keep number!
                        up = (obj.st !== undefined) ? obj.st : `😟 暂无数据`;
                        down = (obj.xt !== undefined) ? obj.xt : `😟 暂无数据`;
                        // average = -1.7976931348623157e+308;
                        average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : null) : `😟 暂无数据`;
                        // average = (obj.pj !== undefined) ? (obj.pj >= 0 ? obj.pj : `--`) : `😟 暂无数据`;
                        // invalid value === 展示“--”
                        keep = (obj.wc !== undefined) ? obj.wc : `😟 暂无数据`;
                        // arr[i] ??? bug
                        // console.log(`keep = `, keep);
                        arr_obj.time.push(time);
                        arr_obj.up.push(up);
                        arr_obj.down.push(down);
                        arr_obj.average.push(average);
                        arr_obj.keep.push(keep);
                        // return arr_obj;
                        if (counter === 1) {
                            console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                            counter ++;
                        }
                    }
                );
                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                // let {...arr_obj} = {rq: [], st: [], xt: [], pj: [], wc: []};
                // Object.assign()
                // arr.forEach() just use for addEventListener() / do somthing, no return value / undefined!
                // arr.map(), return an shaped new array!
                datas = Object.assign(datas, arr_obj);
                // return Object.assign(datas, arr_obj);
                // return arr_obj;
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

const drawHS = (datas = {}, container_uid = `#container`, container_div = `dom_element`, debug = false) => {
    // let container = document.querySelector(`#container`);
    let container = document.querySelector(`${container_uid}`);
    let titles = {
        title1: `title 1`,
        title2: `title 2`
    }
    let {time, up, down, average, keep} = {...datas};
    console.log(`time = \n`, time);
    console.log(`up = \n`, up);
    console.log(`down = \n`, down);
    console.log(`average = \n`, average);
    console.log(`keep = \n`, keep);
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
    Highcharts.chart('container', {
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
        },
        title: {
            text: '',
            // text: 'Stacked column chart'
        },
        xAxis: {
            // categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02'],
            categories: time,
            min: 0,
            max: 10
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
                // min: 0,
                title: {
                    text: 'yAxis title 1',
                    // text: 'Total fruit consumption'
                },
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
                    text: 'yAxis title 2',
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
                {series.name}: {point.y}
                <br/>
                总数 : 
                {point.stackTotal}
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
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
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
                color:"skyblue",
                name: '平均',
                // data: [3, 4, 4, 2, 5],
                data: average,
                connectNulls: true,// OK
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


/* 

// jQuery onload/onready


$(function() {
    // fetch data
    // chart {} insert `${vars}`
});


*/

// call fetch json datas
setTimeout(() => {
    // async & await
    const sf_num= `stockfast03`;
    const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
    let hs_datas = profitForecast(url, true);
    console.log(`hs_datas = \n`, JSON.stringify(hs_datas, null, 4));
    // profitForecast(url, true, uid);
    // let hs_container_uid = document.querySelector('[data-hs-container="data-profit-forecast-container-uid"]');
    let uid = `#container`;
    setTimeout(() => {
        drawHS(hs_datas, uid);
    }, 0);
}, 0);

