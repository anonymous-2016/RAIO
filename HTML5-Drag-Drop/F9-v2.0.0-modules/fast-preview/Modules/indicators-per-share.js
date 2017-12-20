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
                if (typeof(data) === "object" && Object.keys(json).length > 0) {
                    let tds = document.querySelectorAll(uid);
                    for (let i = 0; i < tds.length; i++) {
                        let key = ui_arr[i],
                            value = data[key] ? data[key] : `--`;
                        if (Number.isNaN(parseFloat(value)) === true) {
                            // isNaN(NaN); // true
                            tds[i].innerText = value;
                        }else{
                            if (value !== `--` && value[0] === "-") {
                                tds[i].dataset.color = "red";
                                // tds[i].innerText = value;
                            }else{
                                // tds[i].dataset.color = "green";
                                // tds[i].innerText = `+${value}`;
                            }
                            tds[i].innerText = value;
                        }
                    }
                }else{
                    let table_uid = document.querySelector(`.fv-indicators-per-share-table`),
                        // table_parent = table_uid.parentNode,
                        table_prev_dom = table_uid.previousElementSibling,
                        no_data_html = `
                            <div>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            </div>
                        `;
                    // remove self
                    table_uid.remove();
                    // add no-data
                    table_prev_dom.insertAdjacentHTML(`afterend`, no_data_html);
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
    // gilcode: `600570.SH`,
    // gilcode: `000003.SZ`,
});

// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast04/600570.SH`;

