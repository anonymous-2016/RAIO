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

// const
var topTenShareholders = (url = ``, td_id = `id`, debug = false) => {
    // debug = true;
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            data = json;
            if (debug) {
                console.log(`data = \n`, data);
            }
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    let time, name, amount, percentage , property;
                    time = (arr[i].sj !== undefined) ? arr[i].sj : `😟 暂无数据`;
                    name = (arr[i].mc !== undefined) ? arr[i].mc : `😟 暂无数据`;
                    amount = (arr[i].sl !== undefined) ? arr[i].sl : `😟 暂无数据`;
                    percentage = (arr[i].bl !== undefined) ? arr[i].bl : `😟 暂无数据`;
                    property = (arr[i].xz !== undefined) ? arr[i].xz : `😟 暂无数据`;
                    html_string += `
                        <tr class="fv-top-ten-shareholders-table-tr" data-value="fv-top-ten-shareholders-table-tr">
                            <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">
                                ${time}
                            </td>
                            <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">
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
            td_id.innerHTML = html_string;
        }
    )
    .catch(error => console.log(`error = \n`, error));
};


// call fetch json datas
setTimeout(() => {
    let uid = `07`;
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast${uid}/600570.SH`;
    let td_id = document.querySelector('#fv-top-ten-shareholders-tbody');
    topTenShareholders(url, td_id, true);
}, 0);

