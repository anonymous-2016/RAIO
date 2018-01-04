"use strict";

/**
 * institutional-shareholding-change-statistics 机构持股变动统计
 * xgqfrms
 * creadted 2017.10.27
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// institutional-shareholding-change-statistics ISCS

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.ISCstatistics = STOCK_F9_FV.Modules.ISCstatistics || (
    (url = ``, uid = `default_dom_uid`, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                let arr = json;
                if (debug) {
                    console.log(`data = \n`, json);
                }
                if (Array.isArray(arr) && arr.length > 0) {
                    let strs = json.map(
                        (obj) => {
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
                                    new_key = `shares`;
                                    break;
                                case "gj":
                                    new_key = `stock_price`;
                                    break;
                                default:
                                    new_key = `😟 暂无数据`;
                                    break;
                            }
                            arr_obj[new_key] = [];
                        }
                    );
                    let counter = 1;
                    arr.map(
                        (obj, i) => {
                            let time = ``, shares = ``, stock_price = ``;
                            time = (obj.sj !== undefined) ? obj.sj : `😟 暂无数据`;
                            // no string, just keep number!
                            // toFixed(2) & string
                            shares = (obj.bl !== undefined) ? parseFloat((obj.bl).toFixed(2)) : `😟 暂无数据`;
                            stock_price = (obj.gj !== undefined) ? obj.gj : `😟 暂无数据`;
                            arr_obj.time.push(time);
                            arr_obj.shares.push(shares);
                            arr_obj.stock_price.push(stock_price);
                            if (debug && counter === 1) {
                                console.log(`arr_obj = `, JSON.stringify(arr_obj, null, 4));
                                counter ++;
                            }
                        }
                    );
                    datas = Object.assign(datas, arr_obj);
                    STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS(datas, uid);
                }else{
                    // console.log(`json is empty! = \n`, json);
                    // alert(`暂无数据!`);
                    datas.time = [];
                    datas.shares = [];
                    datas.stock_price = [];
                    STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS(datas, uid);
                }

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
 * @param {* Boolean} debug
 */

STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS = STOCK_F9_FV.Modules.ISCstatistics.ISCSdrawHS || (
    (datas = {}, container_uid = `container`, debug = false) => {
        let time = datas.time,
            shares = datas.shares,
            stock_price = datas.stock_price;
        if (debug) {
            console.log(`time = \n`, time);
            console.log(`shares = \n`, shares);
            console.log(`stock_price = \n`, stock_price);
        }
        let max_time = (time.length-10);// ???
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
        // let color = chart_css.color,
        //     colors = chart_css.colors,
        //     optioncolor = chart_css.optioncolor,
        //     gridColor = chart_css.gridColor,
        //     legendColor = chart_css.legendColor,
        //     yAxisColor = chart_css.yAxisColor;;
        let bg_skin = (window.STOCK_Skin === "black") ? `#0B1016` : `#ffffff`;
        let bd_skin = (window.STOCK_Skin === "black") ? `#666` : `#ccc`;
        let item_skin = (window.STOCK_Skin === "black") ? `#fff` : `#000`;
        let hover_skin = (window.STOCK_Skin === "black") ? `#f79530` : `#fff`;
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
            noData: {// all defualt value
                // attr: undefined,
                // position: {
                //     align: `center`,
                //     verticalAlign: `middle`,
                //     x: 0,
                //     y: 0,
                // },
                // style: {
                //     color: `#666666`,
                //     fontSize: `12px`,
                //     fontWeight: `bold`
                // },
                useHTML: true,
            },
            /* rangeSelector: {
                selected: 4
            }, */
            chart: {
                type: 'column',
                backgroundColor: bg_skin,
                // backgroundColor: chart_css.color
                // backgroundColor: color
                // height: (9 / 16 * 100) + '%',
                // 16:9 ratio
                height: 272,
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
                // min: 0,
                min: max_time,
                // max: 8,
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
                    min: 0,
                    max: 100,// 100%
                    title: {
                        text: '',
                        // text: 'Total fruit consumption'
                    },
                    labels: {
                        format: '{value}%',// 百分比
                        style: {
                            // color: `#0f0`,//
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
                backgroundColor: bg_skin,
                itemStyle: {
                    color: item_skin,
                },
                itemHoverStyle: {
                    color: hover_skin
                },
                // borderWidth: 1,
                shadow: false
            },
            // tooltip ??? array
            tooltip: {
                shared: true,// shared 元
                headerFormat: `
                    <strong>
                        {point.x}
                    </strong>
                    <br/>
                `,// title 万元
                pointFormat: `
                    <span style="color:{point.color}">\u25CF</span>
                    {series.name}: {point.y}%<br/>
                `,// items
                // <span style="color:{point.color}">\u25CF</span> 百分比 :{point.percentage:.0f}%
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
                    // stacking: 'percent',// 百分比堆叠柱形图
                    dataLabels: {
                        // enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                },
                spline: {
                    // stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: "#434348"
                    }
                }
            },
            series: [
                {
                    name: '机构持股比例',// type = column (chart)
                    // data: [5, 3, 4, 7, 2],
                    data: shares,
                    color:"#1a75bc",
                },
                {
                    type:'spline',
                    yAxis: 1,
                    color:"#fbb728",
                    name: '股价',
                    // data: [3, 4, 4, 2, 5],
                    data: stock_price,
                    connectNulls: true,// OK
                    tooltip: {
                        // headerFormat: `
                        //     <strong>
                        //         {point.x}
                        //     </strong>
                        //     <br/>
                        // `,
                        pointFormat: `
                            <span style="color:{point.color}">\u25CF</span>
                            {series.name}: <b>{point.y} 元</b><br/>
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


STOCK_F9_FV.Modules.ISCstatistics.init = STOCK_F9_FV.Modules.ISCstatistics.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast13/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `institutional_shareholding_change_statistics_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.ISCstatistics(url, uid, false);
        // STOCK_F9_FV.Modules.ISCstatistics(url, uid, true);
    }
);

var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.ISCstatistics.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast13/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast13/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/${sf_num}/600570.SH`;
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast13/600570.SH`;
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast13/600590.SH`;


