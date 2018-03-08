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
import "whatwg-fetch";

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
                    /// bug & ui_arr = [];
                    // let ui_arr = [];
                    for (let i = 0; i < tds.length; i++) {
                        let key = ui_arr[i],
                            value = data[key] ? data[key] : `--`;
                        if (Number.isNaN(parseFloat(value)) === true) {
                            // isNaN(NaN); // true
                            tds[i].innerText = value;
                            // console.log(`value = \n`, value);
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
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-indicators-per-share-data"]`);
            if (debug) {
                console.log(`turn_to_uid = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        gilcode = STOCK_SecCode ? STOCK_SecCode : window.STOCK_SecCode,
                        node_path = `12\\${gilcode}\\${uid}`;
                    try {
                        if (uid !== "null") {
                            ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal & ${uid} === null\n`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                    }
                });
            }else{
                throw new Error(`turn_to_uid is `, turn_to_uid);
                // throw `turn_to_uid is ${turn_to_uid}`;
            }
        }, 0);
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
        // fixed table order
        // const ui_arr = ["bgq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll"];
        const UI_Array = ["bgq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jyjs", "qbtb", "kcqbtb", "mgeps", "mgjzc", "jycsxjllje", "mgjyhdttm", "yyzsr", "yysr", "mgyysrttm", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "mgxjllttm", "qyzyxjll", "gdzyxjll"]
        STOCK_F9_FV.Modules.indicatorsPerShare(url, uid, UI_Array, false);
        // STOCK_F9_FV.Modules.indicatorsPerShare(url, uid, ui_arr, true);
    }
);


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;


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



/*

{
    "mgeps": "每股收益EPS(TTM)",
    "mgjzc": "每股净资产(最新股本摊薄)",
    "mgjyhdttm": "每股经营活动产生的现金流量净额(TTM)",
    "mgyysrttm": "每股营业收入(TTM)",
    "mgxjllttm": "每股现金流量净额(TTM)",
}

const UI_Array = ["bgq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jyjs", "qbtb", "kcqbtb", "mgeps", "mgjzc", "jycsxjllje", "mgjyhdttm", "yyzsr", "yysr", "mgyysrttm", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "mgxjllttm", "qyzyxjll", "gdzyxjll"]

*/
