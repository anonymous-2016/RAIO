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

STOCK_F9_FV.Modules.indicatorsPerShare = STOCK_F9_FV.Modules.indicatorsPerShare || (
    (url = ``, uid = ``, ui_arr = [], debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                data = json;
                let tds = document.querySelectorAll(uid);
                for (let i = 0; i < tds.length; i++) {
                    let key = ui_arr[i];
                    let value = data[key];// ??? (key in data) ? data[key] : ""
                    tds[i].innerText = value;
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
    }
);



STOCK_F9_FV.Modules.indicatorsPerShare.init = STOCK_F9_FV.Modules.indicatorsPerShare.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast04/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `[data-value="data-fv-indicators-per-share"]`,
            url = `${ip}${path}${gilcode}`;
        const ui_arr = ["fbrq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll"];
        STOCK_F9_FV.Modules.indicatorsPerShare(url, uid, ui_arr, false);
        // STOCK_F9_FV.Modules.indicatorsPerShare(url, uid, ui_arr, true);
    }
);


STOCK_F9_FV.Modules.indicatorsPerShare.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast04/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast04/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast04/600570.SH`;

