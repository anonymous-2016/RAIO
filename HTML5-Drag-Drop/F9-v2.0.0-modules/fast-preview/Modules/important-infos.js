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
STOCK_F9_FV.Modules.importantInfos = STOCK_F9_FV.Modules.importantInfos || (
    (url = ``, tds = [], ui_arr = [], debug = false) => {
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
                let data = json || [];
                // async
                if (debug) {
                    console.log(`data = \n`, data);
                }
                if (typeof(data) === "object" && Object.keys(json).length > 0) {
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
                        let key = ui_arr[i],
                            value = data[key];
                        if (i < 2) {
                            tds[i].setAttribute(`title`, value);
                        }else{
                            // tds[i].innerText = value;
                        }
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
                        // HTML in JS ???
                        // let tds = document.querySelectorAll('[data-fv-td-show-title="fv-td-show-title"]');
                    }
                }else{
                    let table_uid = document.querySelector(`.fv-important-infos-table`),
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


STOCK_F9_FV.Modules.importantInfos.init = STOCK_F9_FV.Modules.importantInfos.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast01/`,
            gilcode: `600570.SH`
        }
    ) => {
        let url = `${ip}${path}${gilcode}`,
            tds = document.querySelectorAll('[data-value="data-fv-infos"]');
        const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
        STOCK_F9_FV.Modules.importantInfos(url, tds, ui_arr, false);
    }
);

STOCK_F9_FV.Modules.importantInfos.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast01/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast01/`,
    // gilcode: `600570.SH`
});
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;




