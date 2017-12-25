// newly-added-listing

"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
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

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};

// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};


/* 

NSB_TS_FV.Modules.newlyAddedListing = NSB_TS_FV.Modules.newlyAddedListing || (() => console.log(`module testing!`));
// () => console.log(`module testing!`)

typeof NSB_TS_FV.Modules.newlyAddedListing
// "function"

NSB_TS_FV.Modules.newlyAddedListing();
// module testing!

*/





NSB_TS_FV.Modules.newlyAddedListing = NSB_TS_FV.Modules.newlyAddedListing || ((url = ``, debug = false, uid = `default_dom_uid`, ui_arr = ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]) => {
    // debug = true;
    let datas = {};
    const ui_keys = ui_arr;
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            let json_keys = [],
                json_values = [];
            if (json !== undefined && typeof json === "object") {
                json_keys = Object.keys(json);
                json_values = Object.values(json);
            }
            // async
            if (debug) {
                console.log(`json = \n`, json);
                console.log(`json.keys = \n`, json_keys);
                console.log(`json.values = \n`, json_values);
            }
            // sort json
            let new_json_values =[];
            json_keys = json_keys.sort();
            json_keys.map(
                (key, i) => {
                    const {
                        mgsy: x,
                        mgjzc: y,
                        zgb: z,
                        zqjc: name,
                        zqdm: code
                    } = {...json[key]};
                    const new_obj = Object.assign(
                        {},
                        {
                            x,
                            y,
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
            /* 
                let objs_arr = json_values.map(
                    (obj, index) => {
                        // { x: 95, y: 95, z: 13.8, name: 'BE', country: '比利时' },
                        // mgsy: "每股收益", mgjzc: "每股净资产", zgb: "总股本",
                        // 
                        let temp_obj = {};
                        // shape array 
                        ui_keys.map(
                            (k, i) => {
                                temp_obj[k] = obj[k];
                            }
                        );
                        if (debug) {
                            // console.log(`temp_obj = \n`, temp_obj);
                        }
                        return temp_obj;
                    }
                );
                if (debug) {
                    console.log(`objs_arr = \n`, objs_arr);
                }
            */
            // sort 时间轴
            // ["id872275", "id872341", "id872303", "id872315", "id872339", "id872329", "id872295", "id872296"].sort();
            // ["id872275", "id872295", "id872296", "id872303", "id872315", "id872329", "id872339", "id872341"]
            // ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]
            // ["挂牌家数", "证券代码", "证券简称", "所属行业", "主板券商", "每股收益", "每股净资产", "净利润同比增长", "净资产收益率", "总股本", "流通股本"]
            /* 
                const arr_objs = {};
                const keys_arr = [];
                ui_keys.forEach(
                    (key, index) => {
                        // 
                        let new_key = ``;
                        switch (key) {
                            case "zqjc":
                                new_key = `securities_abbreviation`;
                                break;
                            case "zqdm":
                                new_key = `securities_code`;
                                break;
                            case "mgsy":
                                new_key = `share_earnings`;
                                break;
                            case "mgjzc":
                                new_key = `share_net_assets`;
                                break;
                            case "jlrtbzz":
                                new_key = `net_profit_growth`;
                                break;
                            case "jzcsyl":
                                new_key = `net_profit_income_rate`;
                                break;
                            case "zgb":
                                new_key = `total_share_capital`;
                                break;
                            case "ltgb":
                                new_key = `circulating_shares_capital`;
                                break;
                            default:
                                // new_key = `😟 暂无数据`;
                                break;
                        }
                        if (new_key.length > 0) {
                            arr_objs[new_key] = {};
                            keys_arr.push(new_key);
                        }
                    }
                );
                if (debug) {
                    console.log(`arr_objs = `, JSON.stringify(arr_objs, null, 4));
                    console.log(`keys_arr = `, JSON.stringify(keys_arr, null, 4));
                }
            */
            /* 
                let counter = 1;
                let objs_arr_copy = objs_arr;
                objs_arr_copy.map(
                    (obj, i) => {
                        let securities_code = ``,
                            securities_abbreviation = ``,
                            share_earnings = ``,
                            share_net_assets = ``,
                            net_profit_growth = ``,
                            net_profit_income_rate = ``,
                            total_share_capital = ``,
                            circulating_shares_capital = ``;
                        securities_code = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        securities_abbreviation = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        share_earnings = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        share_net_assets = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        net_profit_growth = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        net_profit_income_rate = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        total_share_capital = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        circulating_shares_capital = (obj.zqjc !== undefined) ? obj.zqjc : `😟 暂无数据`;
                        // arr_objs.time.push(time);
                        if (counter === 1 && debug) {
                            console.log(`objs_arr_copy = `, JSON.stringify(objs_arr_copy, null, 4));
                            counter ++;
                        }
                    }
                );
            */
            // console.log(`arr_objs = `, JSON.stringify(arr_objs, null, 4));
            // datas = Object.assign(datas, arr_objs);
            // datas = objs_arr;
            // console.log(`datas = `, JSON.stringify(datas, null, 4));
            // NSB_TS_FV.Modules.newlyAddedListingHC(datas, uid);
            datas = [].concat(new_json_values);
            // array
            NSB_TS_FV.Modules.newlyAddedListingHC(datas, uid);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    return datas;
});

/**
 * @author xgqfrms
 * 
 * @param {* Array} datas 
 * @param {* String} container_uid 
 * @param {* Boolean} debug
 */

NSB_TS_FV.Modules.newlyAddedListingHC = NSB_TS_FV.Modules.newlyAddedListingHC || ((datas = [], container_uid = `container`, debug = false) => {
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
    console.log(`Highcharts datas =\n`, datas);
    console.log(`%c Highcharts container_uid =`, `color: #f0f; font-size: 23px;`, container_uid);
    /* 
        Highcharts lang 配置是全局配置
        针对所有图表有效，所有不能单独设置在某个图表中在，
        只能在图表初始化之前通过 Highcharts.setOptions 来设置生效。
    */
    /* 
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
                noData: "没有数据",
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
    */
    // This error happens when you are setting chart.type or series.type to a series type that isn't defined in Highcharts.
    // https://www.highcharts.com/errors/17
    // https://code.highcharts.com/highcharts-more.js
    Highcharts.chart(container_uid, {
        noData: {
            attr: undefined,
            position: {
                align: "center",
                verticalAlign: "middle",
                x: 0,
                y: 0
            },
            style: { "fontSize": "12px", "fontWeight": "bold", "color": "#777" },
            useHTML: false
        },
        credits: {
            enabled: true,// enabled: false,
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
            enabled: false
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
                text: '每天脂肪摄入量'
            },
            labels: {
                format: '{value} gr'
            },
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 65,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常脂肪摄入量65g/天'
                    },
                    zIndex: 3
                },
                // x line 2 
            ]
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: '每天糖的摄入量'
            },
            labels: {
                format: '{value} gr'
            },
            maxPadding: 0.2,
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 50,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常糖的摄入量 50g/天',
                        x: -10
                    },
                    zIndex: 3
                },
                // y line no
            ]
        },
        // <th colspan="2"><h3>{${JSON.stringify(point, null, 4)}}</h3></th>
        // point,
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
                    <th>脂肪摄取量:</th>
                    <td>{point.x}g</td>
                </tr>
                <tr>
                    <th>糖摄取量:</th>
                    <td>{point.y}g</td>
                </tr>
                <tr>
                    <th>肥胖 (成年人):</th>
                    <td>{point.z}%</td>
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
                        alert(
                            this.name + ' clicked\n' +
                            'Alt: ' + event.altKey + '\n' +
                            'Control: ' + event.ctrlKey + '\n' +
                            'Meta: ' + event.metaKey + '\n' +
                            'Shift: ' + event.shiftKey +
                            "\nX: "+ event.point.x + 
                            "\nY: "+event.point.y + 
                            "\nZ: "+event.point.z
                        );
                        console.log(`event = \n`, event);
                    }
                },
                point: {
                    events: {
                        click: function (event) {
                            alert('event.point: ' + event.point);
                            // event.point: [object Object]
                            console.log(`event.point = \n ${event.point}`);
                            // console.log(`event.point = \n ${JSON.stringify(event.point, null, 4)}`);
                            // Uncaught TypeError: Converting circular structure to JSON
                        }
                    }
                }
            },
        },// ponit data
        series: [
            {
                data: [
                    ...datas
                    // { x: 95, y: 95, z: 13.8, name: 'BE', country: '比利时' },// name, country
                    // { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: '德国' },
                    // { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: '芬兰' },
                    // { x: 80.4, y: 102.5, z: 12, name: 'NL', country: '荷兰' },
                    // { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: '瑞典' },
                    // { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: '西班牙' },
                    // { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: '法国' },
                    // { x: 73.5, y: 83.1, z: 10, name: 'NO', country: '挪威' },
                    // { x: 71, y: 93.2, z: 24.7, name: 'UK', country: '英国' },
                    // { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: '意大利' },
                    // { x: 68.6, y: 20, z: 16, name: 'RU', country: '俄罗斯' },
                    // { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: '美国' },
                    // { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: '匈牙利' },
                    // { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: '葡萄牙' },
                    // { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: '新西兰' },
                    // {
                    //     type: 'line',// 样条 "spline"
                    //     name: '股价',
                    //     color: 'green',
                    //     lineColor: 'green',
                    //     upColor: 'red',
                    //     upLineColor: 'red',
                    //     tooltip: {
                    //         formatter: () => {
                    //             return `
                    //                 <b> ${this.series.name} </b><br/>
                    //             `;
                    //         },
                    //         valueSuffix: ' 元'
                    //     },
                    //     tooltip: {
                    //         formatter: () => {
                    //             return `
                    //             <b> ${this.series.name} </b><br/>
                    //             ${Highcharts.dateFormat('%Y年%m月%e日', this.x)}:
                    //             ${this.y} m
                    //             `;
                    //         }
                    //     },
                    //     navigatorOptions: {
                    //         color: Highcharts.getOptions().colors[0]
                    //     },
                    //     data: [1,2,3,4,5,6,7,8,9],// data atrributes
                    //     dataGrouping: {
                    //         // units: groupingUnits
                    //     },
                    //     yAxis: 0,
                    //     compare: 'percent',
                    //     showInNavigator: true
                    // },
                ],// datas
                // 3D xyz ????
                // 
            }
        ],
    });
});





// call fetch json datas
setTimeout(() => {
    // async & await
    const sf_num= `otcfast01`;
    const url = `http://10.1.5.202/webservice/fastview/otc/${sf_num}/`;
    let uid = `newly_added_listing_hs_container`;
    let hs_datas = NSB_TS_FV.Modules.newlyAddedListing(url, true, uid);
    // console.log(`hs_datas = \n`, JSON.stringify(hs_datas, null, 4));
    // profitForecast(url, true, uid);
    // let hs_container_uid = document.querySelector(`[data-hs-container="data-profit-forecast-container-uid"]`);
    // setTimeout(() => {
    //     newlyAddedListingHC(hs_datas, uid);
    // }, 0);
}, 0);


/* 

    recurve 反
    Reverse 逆序
    let a = [1,2,3,4,5,6,7,8,9],
        l = a.length;
        aa = a.map(
        (key, index) => {
            console.log(`key, index = \n`, key, index);
            let ni = l - 1 - index;
            console.log(`new index = \n`, ni);
            return a[ni];
        }
    );
    aa;
    // [9, 8, 7, 6, 5, 4, 3, 2, 1]

    // aa = a.map((k, i) => a[a.length - 1 - i]);
*/



/* 

    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function (event) {
                    alert(
                        this.name + ' 被点击了\n' +
                        '最近点：' + event.point.category + '\n' +
                        'Y点：' + event.point.y + '\n' + 
                        'X点：' + event.point.x+ '\n' + 
                        'Alt 键: ' + event.altKey + '\n' +
                        'Ctrl 键: ' + event.ctrlKey + '\n' +
                        'Meta 键（win 键）： ' + event.metaKey + '\n' +
                        'Shift 键：' + event.shiftKey
                    );
                }
            }
        }
    },

    https://api.highcharts.com/highcharts/plotOptions.bubble.events.click

    http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-events-click/


    Highcharts.chart('container', {
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        alert(
                            this.name + ' clicked\n' +
                            'Alt: ' + event.altKey + '\n' +
                            'Control: ' + event.ctrlKey + '\n' +
                            'Meta: ' + event.metaKey + '\n' +
                            'Shift: ' + event.shiftKey +
                            "\nX: "+ event.point.x + 
                            "\nY: "+event.point.y
                        );
                        console.log(`event = \n`, event);
                        console.log(`event.point = \n`, event.point);
                    }
                }
            }
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });

*/



/* 
let new_json = {},
    new_json_values =[];
json_keys = json_keys.sort();
json_keys.map(
    (key, i) => {
        if (debug) {
            // console.log(`key = \n`, key);
            console.log(`json[key] = \n`, json[key]);
            // {gpjs: 12, zqdm: "872352", zqjc: "开元新材", sshy: "非金属矿物制品业", zbqs: "长江证券", …}
            const {
                mgsy: x,
                mgjzc: y,
                zgb: z,
                zqjc: name,
                zqdm: code
            } = {...json[key]};
            const new_obj = Object.assign(
                {},
                {
                    x,
                    y,
                    z,
                    name,
                    code
                }
            );
            console.log(`new_obj =\n`, new_obj);
            // {x: -0.21, y: 0.87, z: 20000000, name: "思源软件", code: "872343"}
        }
        // new_json_values.push();
    }
);

 */




