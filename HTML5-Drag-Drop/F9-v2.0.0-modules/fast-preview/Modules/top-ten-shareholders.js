"use strict";
/**
 * top-ten-shareholders 前十大股东
 * xgqfrms
 * creadted 2017.10.31
 * @param {* String} url
 * @param {* String} time_uid
 * @param {* String} id
 * @param {Boolean} debug
 */
import "whatwg-fetch";

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.topTenShareholders = STOCK_F9_FV.Modules.topTenShareholders || (
    (url = ``, time_uid = ``, uid = ``, debug = false) => {
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            // json = {};
            data = json;
            let time_dom = document.querySelector(time_uid);
            if (debug) {
                console.log(`data = \n`, data);
            }
            if (typeof(json) === "object"  && Object.keys(json).length > 0) {
                let html_string = ``;
                let arr = data;
                arr.map(
                    (obj, i) => {
                        let name, amount, percentage , property;
                        if (i === 0) {
                            let time = (arr[i].sj !== undefined) ? arr[i].sj : `暂无数据`;
                            time_dom.insertAdjacentHTML(`beforeend`, time);
                        }
                        name = (arr[i].mc !== undefined) ? arr[i].mc : `暂无数据`;
                        amount = (arr[i].sl !== undefined) ? arr[i].sl : `暂无数据`;
                        percentage = (arr[i].bl !== undefined) ? arr[i].bl : `暂无数据`;
                        property = (arr[i].xz !== undefined) ? arr[i].xz : `暂无数据`;
                        html_string += `
                            <tr class="fv-top-ten-shareholders-table-tr" data-value="fv-top-ten-shareholders-table-tr">
                                <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders" title="${name}">
                                    ${name}
                                </td>
                                <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">
                                    ${amount}
                                </td>
                                <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">
                                    ${percentage}
                                </td>
                                <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">
                                    ${property}
                                </td>
                            </tr>
                        `;
                        // <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">${time}</td>
                    }
                );
                let td_id = document.querySelector(uid);
                td_id.innerHTML = html_string;
            }else{
                let table_uid = document.querySelector(`.fv-top-ten-shareholders-table`),
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
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-top-ten-shareholders-data"]`);
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
        }
    }, 0);
});


STOCK_F9_FV.Modules.topTenShareholders.init = STOCK_F9_FV.Modules.topTenShareholders.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast07/`,
            gilcode: `600570.SH`
        }
    ) => {
        // let url = `http://10.1.5.202/JSON/stock-f9/7.json`,
        let url = `${ip}${path}${gilcode}`,
            // time_uid = `[data-time="otc-main-management-business-time"]`,
            time_uid = `[data-text="fv-top-ten-shareholders-data-text"]`,
            uid = `#fv-top-ten-shareholders-tbody`;
        STOCK_F9_FV.Modules.topTenShareholders(url, time_uid, uid, false);
        // STOCK_F9_FV.Modules.topTenShareholders(url, uid, true);
    }
);


// http://10.1.5.202/JSON/stock-f9/7.json


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;



STOCK_F9_FV.Modules.topTenShareholders.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast07/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast07/`,
    // gilcode: `600570.SH`
});



