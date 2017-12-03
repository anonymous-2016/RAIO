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
            url: `https://cdn.xgqfrms.xyz/`,
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
                // STOCK_F9.Summary.changedItems.drawHS(datas, uid);
                STOCK_F9.Summary.changedItems.pageInit(datas, uid, true);
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
    const colModel = [
        {
            name : 'id',
            index : 'id',
            // width : 50,
            width : 0,
            hidden: true,
        },
        {
            name : 'a0',
            index : 'a0',
            width : 100,
            // align : "right",
            // sortable : false,
        },
        {
            name : 'a4',
            index : 'a4',
            width : 200,
            // align : "right",
            // sortable : false,
            // saveicon: true
            formatter: function (cellvalue, options, rowObject) {
                var temp = `
                    <a href="http://10.1.5.202/stock/f9/" data-link="cell-a" target="_blank">
                        ${cellvalue}
                    </a>
                `;
                return temp;
            }
        },
        {
            name : 'a1',
            index : 'a1',
            width : 100,
            // align : "right",
            // sortable : false,
        },
        {
            name : 'a2',
            index : 'a2',
            width : 100,
            // align : "right",
            // sortable : false,
        },
        {
            name : 'a3',
            index : 'a3',
            width : 100,
            // align : "right",
            // sortable : false,
        },
        {
            name : 'a5',
            index : 'a5',
            width : 50,
            // align : "right",
            // sortable : false,
            // saveicon: true
        },
        {
            name : 'a6',
            index : 'a6',
            width : 100,
            // align : "right",
            // sortable : false,
            // saveicon: true,
            formatter: function (cellvalue, options, rowObject) {
                // console.log(`cellvalue \n`, cellvalue);
                // console.log(`options \n`, options);
                // console.log(`rowObject \n`, rowObject);
                var temp = `
                    <img
                        src="http://10.1.5.202/stock/f9/imgs/text.png"
                        title="${cellvalue}"
                        data-img="cel-img"
                    />
                `;
                return temp;
                setTimeout(() => {
                    let img = document.querySelector(`[data-img="cel-img"]`);
                    console.log(`img = `, img);
                    img.addEventListener(`click`, (e) => {
                        console.log(`e = `, e);
                        alert(`e = ${e}`);
                    });
                }, 0);
                // show modal
                // showModal(data);
                // ??? parent event!
            }
        },
        // {
        //     name : 'a7',
        //     index : 'a7',
        //     width : 100,
        //     // align : "right",
        //     // sortable : false,
        // },
        // {
        //     name : 'a8',
        //     index : 'a8',
        //     width : 100,
        //     // align : "right",
        //     // sortable : false,
        // }
    ];
    if (debug) {
        console.log(`data =\n`, data);
        console.log(`data.rows =\n`, data.rows, data.rows.length);
        // console.log(`data.rows =\n`, JSON.stringify(data.rows, null, 4));
        console.log(`uid =\n`, uid);
    }
    let rows = data.rows;
    // let userData = data;
    //创建 jqGrid 组件
    jQuery("#changed_projects_table").jqGrid({
        // url : './data/data.json',//组件创建完成之后请求数据的url
        // datatype : "json",//请求数据返回的类型。可选json,xml,txt
        // userData,
        datatype : "local",
        data: rows,
        // data,
        colNames,
        colModel,
        loadonce : true,// 如果为ture则数据只从服务器端抓取一次，之后所有操作都是在客户端执行，翻页功能会被禁用
        loadui: "disable", // disable禁用ajax执行提示；enable默认，当执行ajax请求时的提示； block启用Loading提示，但是阻止其他操作
        // sortname : 'id',//初始化的时候排序的字段
        // sortorder : "desc",//排序方式,可选desc,asc
        sortorder : "asc",
        mtype : "get",//向后台请求数据的ajax的类型。可选post,get
        viewrecords : true,
        caption : "",//表格的标题名字
        // multiselect : true,
        // height: 300,
        // autowidth: true,
        onSelectRow: function(rowid,status){
            console.log(`rowid = \n`, rowid);
            //
            console.log(`status = \n`, status);
            // true
            // getRowData(rowid);
            let rowData = jQuery("#list_demo").getRowData(rowid);
            // let rowData = jQuery("#list_demo").jqGrid('getRowData', rowid);
            console.log(`rowData = \n`, JSON.stringify(rowData, null, 4));
            // let col_data = jQuery("#list_demo").jqGrid("getColProp", "a0");
            // console.log(`getColProp = \n`, JSON.stringify(col_data, null, 4));
        },
        onCellSelect: function (rowid, iCol, cellcontent, e) {
            // rowid：当前行id；iCol：当前单元格索引；cellContent：当前单元格内容；e：event对象
            console.log(`rowid = \n`, rowid);
            console.log(`iCol = \n`, iCol);// index
            console.log(`cellcontent = \n`, cellcontent);
            console.log(`e = \n`, e);
            //
        },
        jsonReader: {
            repeatitems: false,
            // id: "0"
        }
    });
    // for (var i = 0; i <= rows.length; i++){
    //     jQuery("#changed_projects_table").jqGrid('addRowData', i + 1, rows[i]);
    // }
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
