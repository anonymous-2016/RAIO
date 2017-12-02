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
    fetch(url)
    .then(res => res.json())
    // SyntaxError: Unexpected end of input ??? CORS
    .then(
        //shaped data
        (json) => {
            // json
            if (debug) {
                console.log(`json = \n`, json);
            }
            let data = [];
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
                let value = data[key] !== `--` ? data[key] : 0;
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
});


STOCK_F9_FV.Modules.importantInfos.init = STOCK_F9_FV.Modules.importantInfos.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/1.json`) => {
        let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
        const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
        // STOCK_F9_FV.Modules.importantInfos(url, tds, ui_arr, true);
        setTimeout(() => {
            STOCK_F9_FV.Modules.importantInfos(url, tds, ui_arr, false);
        }, 0);
        // delay ???
    }
);

STOCK_F9_FV.Modules.importantInfos.init(`http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`);
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;







