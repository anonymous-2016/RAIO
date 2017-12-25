// newly-added-protocol

"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name newly-added-protocol 新增协议
 * @createed 2017.11.11
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


NSB_TS_FV.Modules.newlyAddedProtocol = NSB_TS_FV.Modules.newlyAddedProtocol || ((url = ``, debug = false, uid = `default_dom_uid`, ui_arr = ["gpjs", "zqdm", "zqjc", "sshy", "zbqs", "mgsy", "mgjzc", "jlrtbzz", "jzcsyl", "zgb", "ltgb"]) => {
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
                // json_keys = Object.keys(json);
                json_keys = Object.keys(json).sort();
                json_values = Object.values(json);
                // show new add num
                let new_add = document.querySelector(`[data-ntb-new-add-num="ntb-new-add-num-protocol"]`);
                // new_add.innerHTML = json[json_keys[0]]["gpjs"];
                new_add.innerHTML = json_values[0]["gpjs"];
                // table
                let init_uid = json_keys[0].replace(/(id)/i, ``);
                if (debug) {
                    console.log(`init_uid = \n`, init_uid);
                    // "id872356" => "872356"
                    console.log(`json = \n`, json);
                }
                NSB_TS_FV.Modules.newlyAddedProtocol.showTable(init_uid, json);
            }
            // async
            if (debug) {
                console.log(`json = \n`, json);
                console.log(`json.keys = \n`, json_keys);
                console.log(`json.values = \n`, json_values);
            }
            // sort json
            let new_json_values =[];
            // json_keys = json_keys.sort();
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
                            z: 6,// 气泡的大小
                            name,
                            code
                        }
                    );
                    if (debug) {
                        console.log(`key = \n`, key);
                        console.log(`json[key] = \n`, json[key]);
                        console.log(`new_obj =\n`, new_obj);
                    }
                    new_json_values.push(new_obj);
                }
            );
            if (debug) {
                console.log(`json_keys = \n`, json_keys);
                console.log(`new_json_values = \n`, new_json_values);
            }
            datas = [].concat(new_json_values);
            // array
            NSB_TS_FV.Modules.newlyAddedProtocol.drawHC(datas, uid, json, false);
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

NSB_TS_FV.Modules.newlyAddedProtocol.drawHC = NSB_TS_FV.Modules.newlyAddedProtocol.drawHC || ((datas = [], container_uid = `container`, json = {}, debug = false) => {
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
    // webpack / rollup
    if (debug) {
        console.log(`Highcharts datas =\n`, datas);
        console.log(`%c Highcharts container_uid =`, `color: #f0f; font-size: 23px;`, container_uid);
    }
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
                text: '每股收益'
            },
            labels: {
                format: '{value}'
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
                text: '每股净资产'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2,
            plotLines: [
                {
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 3,// 
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: '正常 ??? 天',// 50
                        x: -10
                    },
                    zIndex: 3
                },
                // y line no
            ]
        },
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
                    <th>每股收益:</th>
                    <td>{point.x}元</td>
                </tr>
                <tr>
                    <th>每股净资产:</th>
                    <td>{point.y}万元</td>
                </tr>
                <tr>
                    <th>总股本:</th>
                    <td>{point.z}万股</td>
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
                        if (debug) {
                            console.log(`event = \n`, event);
                            console.log(`event.point.code= \n`, event.point.code, typeof(event.point.code));
                        }
                        // 300725 & string
                        let code_uid = event.point.code;
                        if (debug) {
                            console.log(`code_uid = \n`, code_uid);
                            // "id872356" => "872356"
                            console.log(`json = \n`, json);
                        }
                        NSB_TS_FV.Modules.newlyAddedProtocol.showTable(code_uid, json);
                    }
                },
                point: {
                    events: {
                        click: function (event) {
                            if (debug) {
                                console.log(`event.point = \n ${event.point}`);
                                console.log(`event.point.code = \n ${event.point.code}`);
                                // 300725
                            }
                        }
                    }
                }
            },
        },// ponit data
        series: [
            {
                data: [...datas],
            }
        ],
    });
});



/**
 * @author xgqfrms
 * 
 * @param {* String} code
 * @param {* String} table_dom_uid 
 * @param {* Boolean} debug
 * @param {* Object} data 
 */



NSB_TS_FV.Modules.newlyAddedProtocol.showTable = NSB_TS_FV.Modules.newlyAddedProtocol.showTable || ((uid = `6000570`, datas = {}, debug = false) => {
    let new_uid = `id${uid}`;
    if (debug) {
        console.log(`uid = `, uid);
        console.log(`new_uid = `, new_uid);
        console.log(`data = `, JSON.stringify(data, null, 4));
    }
    // datas["id872358"]
    let table_obj = datas[new_uid];
    if (debug) {
        console.log(`table_obj`, JSON.stringify(table_obj, null, 4));
    }
    let sa = document.querySelector(`[data-ntb-th-title="Securities-Abbreviation-protocol"]`),
        sc = document.querySelector(`[data-ntb-th-title="Securities-Code-protocol"]`),
        // new_add = document.querySelector(`[data-ntb-new-add-num="ntb-new-add-num-protocol"]`),
        tb = document.querySelector(`[data-table-body="ntb-table-body-newly-added-protocol"]`);
    // [tr, tr, tr]
    let trs = tb.children;
    let tds1 = trs[0].children,
        tds2 = trs[1].children,
        tds3 = trs[2].children;
    const {gpjs, zqdm, zqjc, sshy, zbqs, mgsy, jlrtbzz, zgb, mgjzc, jzcsyl, ltgb} = table_obj;
    // ES6 => ES5
    // header
    sa.innerHTML = `${zqjc}`;
    sc.innerHTML = `${zqdm}.OC`;
    // 博商管理(836000.OC) - 新三板
    tds1[1].innerHTML = `${sshy}`;
    tds1[3].innerHTML = `${zbqs}`;
    tds1[1].setAttribute(`title`, `${sshy}`);
    tds1[3].setAttribute(`title`, `${zbqs}`);
    // tr1
    tds2[1].innerHTML = `${mgsy}`;
    tds2[3].innerHTML = `${jlrtbzz}`;
    tds2[5].innerHTML = `${zgb}`;
    tds2[1].setAttribute(`title`, `${mgsy}`);
    tds2[3].setAttribute(`title`, `${jlrtbzz}`);
    tds2[5].setAttribute(`title`, `${zgb}`);
    // tr2
    tds3[1].innerHTML = `${mgjzc}`;
    tds3[3].innerHTML = `${jzcsyl}`;
    tds3[5].innerHTML = `${ltgb}`;
    tds3[1].setAttribute(`title`, `${mgjzc}`);
    tds3[3].setAttribute(`title`, `${jzcsyl}`);
    tds3[5].setAttribute(`title`, `${ltgb}`);
    //tr3
});




// call fetch json datas
setTimeout(() => {
    // async & await
    // const sf_num= `otcfast02`;
    const sf_num= `otcfast01`;
    const url = `http://10.1.5.202/webservice/fastview/otc/${sf_num}/`;
    let uid = `newly_added_protocol_hs_container`;
    let hs_datas = NSB_TS_FV.Modules.newlyAddedProtocol(url, false, uid);
}, 0);




