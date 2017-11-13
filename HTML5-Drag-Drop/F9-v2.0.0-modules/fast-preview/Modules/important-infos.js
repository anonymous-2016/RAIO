"use strict";

/**
 * important infos 重要信息
 * xgqfrms
 * creadted 2017.10.12
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};
// IIFE === Closure!
STOCK_F9_FV.Modules.importantInfos = STOCK_F9_FV.Modules.importantInfos || ((url = ``, tds = [], ui_arr = [], debug = false) => {
    // important-infos
    let data = [];
    fetch(
        url,
        /* {
            method: 'GET',
            mode: 'no-cors'
        } */
    )
    .then(
        (res) => {
            if (debug) {
                console.log(`response json = \n`, res);
            }
            return res.json();
        }
    )
    // .then(res => res.json())
    // SyntaxError: Unexpected end of input ??? CORS
    .then(
        //shaped data 
        (json) => {
            // json
            if (debug) {
                console.log(`json = \n`, json);
            }
            data = json;
            // async
            if (debug) {
                console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            let arr = [];
            // get Object keys
            for(let key in data){
                arr.push(key);
            }
            
            // shit api, can I trust you?
            // arr === (11) ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"]
            // dead & hard code
            // const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
            for (let i = 0; i < tds.length; i++) {
                let key = ui_arr[i];
                let value = data[key];
                if (i < 2) {
                    tds[i].innerText = value;
                    tds[i].setAttribute(`title`, value);
                    // title
                }else{
                    tds[i].innerText = value;
                }
                // HTML in JS ???
                // let tds = document.querySelectorAll('[data-fv-td-show-title="fv-td-show-title"]');
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return null;
    // return data;
});


STOCK_F9_FV.Modules.importantInfos.init = STOCK_F9_FV.Modules.importantInfos.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/1.json`) => {
        let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
        const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
        STOCK_F9_FV.Modules.importantInfos(url, tds, ui_arr);
    }
);

STOCK_F9_FV.Modules.importantInfos.init(`http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`);
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;

var url = ((obj) => {
    // STOCK_F9_FV.Utils.getURL(obj = {})
    const {protocol, ip, gil_path, gil_uid, gil_code} = {
        protocol: "http",
        ip: "10.1.5.202",
        gil_path: "webservice/fastview/stock",
        gil_uid: "stockfast01",
        gil_code: "600570.SH"
    };
    const gil_obj = {
        protocol,
        ip,
        gil_path,
        gil_uid,
        gil_code
    };
    // const url = STOCK_F9_FV.Utils.getURL(gil_obj, true);
    // const url = STOCK_F9_FV.Utils.getURL({protocol, ip, gil_path, gil_uid, gil_code});
    if (typeof obj === "object") {
        // const url = STOCK_F9_FV.Utils.getURL((obj ? obj : gil_obj), true);
        const url = (obj ? JSON.stringify(obj) : JSON.stringify(gil_obj));
        console.log(`url`, url);
        return url;
    } else {
        const url = (obj ? JSON.stringify(obj) : JSON.stringify(gil_obj));
        console.log(`param is not an Object`, url);
        // return "";
    }
})({
    protocol: "http",
    ip: "10.1.5.202",
    gil_path: "webservice/fastview/stock",
    gil_uid: "stockfast01",
    gil_code: "600570.SH"
});

// STOCK_F9_FV.Modules.importantInfos.init(url);

// call fetch json datas
setTimeout(() => {
    // async & await
    // const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
    /* 
        const url = `http://localhost:3000/fast-preview/json/datas/1.json`;
        let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
        const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
        STOCK_F9_FV.Modules.importantInfos(url, tds, ui_arr);
    */
    // const debug = true;
    // importantInfos(url, tds, ui_arr, debug);
    // importantInfos(url, tds, ui_arr, true);
}, 0);




