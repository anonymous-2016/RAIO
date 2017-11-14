"use strict";

/**
 * indicators-per-share 每股指标
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};
// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.indicatorsPerShare = STOCK_F9_FV.Modules.indicatorsPerShare || ((url = ``, tds = [], ui_arr = [], debug = false) => {
    // important-infos
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            if (debug) {
                console.log(`json = \n`, json);
            }
            data = json;
            // fbrq 发布日期
            // ui_arr = ["fbrq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll"];
            for (let i = 0; i < tds.length; i++) {
                let key = ui_arr[i];
                let value = data[key];// ??? (key in data) ? data[key] : ""
                tds[i].innerText = value;
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
});



STOCK_F9_FV.Modules.indicatorsPerShare.init = STOCK_F9_FV.Modules.indicatorsPerShare.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/5.json`) => {
        let tds = document.querySelectorAll('[data-value="data-fv-indicators-per-share"]');
        // fbrq 发布日期
        const ui_arr = ["fbrq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll"];
        // indicatorsPerShare(url, tds, ui_arr);
        // STOCK_F9_FV.Modules.indicatorsPerShare(url, tds, ui_arr, true);
        STOCK_F9_FV.Modules.indicatorsPerShare(url, tds, ui_arr, false);
    }
);

STOCK_F9_FV.Modules.indicatorsPerShare.init(`http://10.1.5.202/webservice/fastview/stock/stockfast04/600570.SH`);
// url

