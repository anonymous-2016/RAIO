"use strict";

// import {fetch} from "../utils/fetch";

/**
 * @description 概况 变更项目
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @namespace STOCK_F9
 * @sub_namespaces STOCK_F9.Summary
 *
 *
 */

// http://10.1.5.202/stock/f9/mock-datas/change-items.json
// http://10.1.5.202/stock/f9/mock-datas/change-items.json?{gcode:600570}
// http://10.1.5.202/stock/f9/mock-datas/change-items.json?{gcode:"600570"}
// http://10.1.5.202/stock/f9/mock-datas/change-items.json?{gcode:%22600570%22}


// namespaces
var STOCK_F9 = STOCK_F9 || {};
// sub namespaces
STOCK_F9.Summary = STOCK_F9.Summary || {};


STOCK_F9.Summary.changedItems = STOCK_F9.Summary.changedItems || (
    (
        {
            url,
            gcode,
            // td_keys,
            // td_values,
            uid,
            debug
        } = {
            url: `http://10.1.5.202/stock/f9/mock-datas/change-items.json`,
            gcode: `600570`,
            // td_keys: [],
            // td_values: [],
            uid: ``,
            debug: false
        }
    ) => {
        if (debug) {
            console.log(`url = `, url, typeof url);
            console.log(`gcode = `, gcode, typeof gcode);
            console.log(`uid = `, uid, typeof uid);
            // console.log(`td_keys = `, td_keys, typeof td_keys);
            // console.log(`td_values = `, td_values, typeof td_values);
            console.log(`debug = `, debug, typeof debug);
        }
        // let dom_uid = document.querySelector(uid);
        let new_url = `${url}?{gcode: ${gcode}}`;
        if (debug) {
            console.log(`new_url = `, new_url, typeof new_url);
        }
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                let rows = JSONDS(json, false) || [];
                // let rows = JSONDS(json, true) || [];
                if (debug) {
                    console.log(`rows = \n`, rows);
                }
                Object.assign(datas, {rows});
                // STOCK_F9.Summary.changedItems.pageInit(datas, uid, true);
                STOCK_F9.Summary.changedItems.pageInit(datas, uid, false);
                // STOCK_F9.Summary.changedItems.drawHS(datas, uid);
            }
        )
        .catch(error => console.log(`fetch data error = \n`, error));
        // return only work out Promise!
        return datas;
    }
);


STOCK_F9.Summary.changedItems.pageInit = STOCK_F9.Summary.changedItems.pageInit || ((data = {}, uid = ``, debug = false) => {
    const colNames = [
        "ID",
        "变更时间",
        "图形",
        "变更内容",
        "变更前",
        "变更后",
        "变更前详情",
        "变更后详情",
        // "a7",
        // "a8",
    ];
    // coldata = ["a0", "a1", "a2", "a3"];
    if (debug) {
        console.log(`data =\n`, data);
        console.log(`data.rows =\n`, data.rows, data.rows.length);
        // console.log(`data.rows =\n`, JSON.stringify(data.rows, null, 4));
        console.log(`uid =`, uid);
    }
    let rows = data.rows;
    let table = ``,
        thead = ``,
        tbody = ``;
    let img_text = `http://10.1.5.202/stock/f9/imgs/text.png`;// cdn url
    colNames.map(
        (col, i) => {
            thead += `
                <th
                    data-td-key="td-key-changed-projects"
                    data-title="${col}"
                    title="${col}">
                    ${col}
                </th>
            `;
        }
    );
    thead = `
        <thead>
            <tr data-tr="tr-changed-projects">
                ${thead}
            </tr>
        </thead>
    `;
    // console.log(`thead`, thead);
    rows.map(
        (row, i) => {
            const {a0, a1, a2, a3, a4, a5, a6, id} = row;
            // ???
            // const {a0, a1, a2, a3, a4, a5: img1, a6: img2, id} = {...row};
            // const {a0, a1, a2, a3, a4, a5: img1, a6: img2, id} = {...row};
            if (debug && i === 0) {
                console.log(`row & i`, row, i);
                console.log(`a0`, a0);
                console.log(`id`, id);
                // console.log(`img1`, img1);
                // console.log(`img2`, img2);
            }
            tbody += `
                <tr data-tr="tr-changed-projects">
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-title="">
                        ${a0}
                    </td>
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-title="">
                        <span data-mock-link="mock-link">${a4}</span>
                    </td>
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-title="">
                        ${a1}
                    </td>
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-title="">
                        ${a2}
                    </td>
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-title="">
                        ${a3}
                    </td>
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-td-img="td-img-changed-projects"
                        title="${a5}">
                        <img
                            src="http://10.1.5.202/stock/f9/imgs/text.png"
                            title="${a5}"
                            data-title="${a5}"
                            data-datas="${row}"
                            data-index="${i}"
                            data-img="cel-img"
                        />
                    </td>
                    <td
                        data-td-value="td-vaule-changed-projects"
                        data-uid=""
                        data-td-img="td-img-changed-projects"
                        title="${a6}">
                        <img
                            src="http://10.1.5.202/stock/f9/imgs/text.png"
                            title="${a5}"
                            data-title="${a5}"
                            data-datas="${row}"
                            data-index="${i}"
                            data-img="cel-img"
                        />
                    </td>
                </tr>
            `;
        }
    );
    tbody = `
        <tbody>
            ${tbody}
        </tbody>
    `;
    // console.log(`tbody`, tbody);
    table = `
        ${thead}
        ${tbody}
    `;
    // table = `
    //     ${tbody}
    // `;
    let table_dom = document.querySelector(uid);
    // console.log(`table`, table);
    // console.log(`table_dom`, table_dom);
    table_dom.insertAdjacentHTML(`beforeend`, table);
    // console.log(`table_dom`, table_dom);
    // let userData = data;
    //创建 jqGrid 组件
    // let dom_uid = `#changed_projects_table"`;
    // [data-table="changed-projects"]
    let js = `<script src="https://kryogenix.org/code/browser/sorttable/sorttable.js"></script>`
    document.body.insertAdjacentHTML(`beforeend`, js);
    // document.addEventListener("DOMContentLoaded", function(event) {
    //     console.log("DOM fully loaded and parsed");
    //     setTimeout(() => {
    //         let js = `<script src="https://kryogenix.org/code/browser/sorttable/sorttable.js"></script>`
    //         document.body.insertAdjacentHTML(`beforeend`, js);
    //     }, 0);
    // });
});


STOCK_F9.Summary.changedItems.init = STOCK_F9.Summary.changedItems.init || (
    (debug = false) => {
        let obj = {
            url: `http://10.1.5.202/stock/f9/mock-datas/change-items.json`,
            gcode: `600570`,
            uid: `#changed_projects_table`,
            debug: debug
            // debug: true
        };
        STOCK_F9.Summary.changedItems(obj);
    }
);

STOCK_F9.Summary.changedItems.init(false);
// STOCK_F9.Summary.changedItems.init(true);






// global namespace
// var window = window || {};
// read only ??? Uncaught TypeError: Cannot assign to read only property 'window' of object '#<Window>'


// global method
window.JSONDS = window.JSONDS || ((json = {}, debug = false) => {
    let keys = Object.keys(json.columnmeta);
    // ["a0", "a1", "a2", "a3"]
    let arrs = json.rows;
    // [["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"]]
    if(debug){
        console.log(`json =\n`, json);
        console.log(`debug =\n`, debug);
    }
    let rows = [];
    arrs.map(
        (arr, i) => {
            let obj = {};
            for (let ii = 0; ii < keys.length; ii++) {
                if (keys[ii] !== "a7" && keys[ii] !== "a8") {
                    obj[keys[ii]] = arr[ii];
                }
                if(debug && i === 0 && ii === 0){
                    console.log(`arr[ii] =\n`, arr[ii], typeof arr[ii]);
                }
            }
            // obj["level"] = 2,
            // obj["isLeaf"] = true,
            // obj["expanded"] = false,
            // obj["parent"] = "2",
            obj["id"] = `00${i}`,
            rows.push(obj);
        }
    );
    if(debug){
        console.log(`rows =\n`, rows);
    }
    return rows;
});

// let test = JSONDS(json, true);

// copy(test);
// console.log(JSON.stringify(test, null, 4));
/*

    [
        {
            "a0": "2002-04-30",
            "a1": "a1",
            "a2": "2002/04/23行业经营范围变更",
            "a3": 1,
            "id": "000"
        },
        {
            "a0": "2004-03-31",
            "a1": "a1",
            "a2": "2004/03/09行业经营范围变更",
            "a3": 1,
            "id": "001"
        }
    ]

*/


/*

change-items.json

http://10.1.5.202/stock/f9/mock-datas/change-items.json




{
    "columnmeta": {
        "a0": "DATE",
        "a1": "STRING",
        "a2": "STRING",
        "a3": "INT"
    },
    "rows": [
        [
            "2002-04-30",
            "a1",
            "2002/04/23行业经营范围变更",
            1
        ],
        [
            "2004-03-31",
            "a1",
            "2004/03/09行业经营范围变更",
            1
        ]
    ]
}


// shaped data to

{
    "rows": [
        {
            "id": "12",
            "cell": ["12", "2007-10-06",  null]
        },
        {
            "id": "12",
            "cell": ["12", "2007-10-06",  null]
        }
    ]
}


[
    {
        "a0": "2002-04-30",
        "a1": "a1",
        "a2": "2002/04/23行业经营范围变更",
        "a3": 1,
        "id": "000"
    },
    {
        "a0": "2004-03-31",
        "a1": "a1",
        "a2": "2004/03/09行业经营范围变更",
        "a3": 1,
        "id": "001"
    }
]


[
    {
        "a0": "2017-03-27",
        "a1": "行业与经营范围",
        "a2": "房地产开发与经营业",
        "a3": "房地产业",
        "a4": "详情点击",
        "a5": "房地产开发；兴办实业（具体项目另行申报）；国内商业、物资供销业（不含专营、专控、专卖商品）；进出口业务（按深经发审证字第113号外贸企业审定证书规定办理）。",
        "a6": "房地产开发；兴办实业（具体项目另行申报）；国内商业、物资供销业（不含专营、专控、专卖商品）；进出口业务（按深经发审证字第113号外贸企业审定证书规定办理）。",
        "a7": 2,
        "a8": "2017-03-31",
        "id": "000"
    }
]

*/
