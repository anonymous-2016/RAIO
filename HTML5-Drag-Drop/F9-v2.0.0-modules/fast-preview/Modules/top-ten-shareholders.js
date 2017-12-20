"use strict";
/**
 * top-ten-shareholders 前十大股东
 * xgqfrms
 * creadted 2017.10.31
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.topTenShareholders = STOCK_F9_FV.Modules.topTenShareholders || (
    (url = ``, uid = `id`, debug = false) => {
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            // json = {};
            data = json;
            if (debug) {
                console.log(`data = \n`, data);
            }
            if (typeof(json) === "object"  && Object.keys(json).length > 0) {
                let html_string = ``;
                let arr = data;
                arr.map(
                    (obj, i) => {
                        let time, name, amount, percentage , property;
                        time = (arr[i].sj !== undefined) ? arr[i].sj : `暂无数据`;
                        name = (arr[i].mc !== undefined) ? arr[i].mc : `暂无数据`;
                        amount = (arr[i].sl !== undefined) ? arr[i].sl : `暂无数据`;
                        percentage = (arr[i].bl !== undefined) ? arr[i].bl : `暂无数据`;
                        property = (arr[i].xz !== undefined) ? arr[i].xz : `暂无数据`;
                        html_string += `
                            <tr class="fv-top-ten-shareholders-table-tr" data-value="fv-top-ten-shareholders-table-tr">
                                <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">
                                    ${time}
                                </td>
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
        let uid = `#fv-top-ten-shareholders-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.topTenShareholders(url, uid, false);
        // STOCK_F9_FV.Modules.topTenShareholders(url, uid, true);
    }
);


STOCK_F9_FV.Modules.topTenShareholders.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast07/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast07/`,
    // gilcode: `600570.SH`
});



