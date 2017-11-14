"use strict";
/**
 * changes-shareholding-executives 高管持股变动情况
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
STOCK_F9_FV.Modules.changesShareholdingExecutives = STOCK_F9_FV.Modules.changesShareholdingExecutives || ((url = ``, td_id = `id`, debug = false) => {
    // debug = true;
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            data = json;// Array
            // async
            if (debug) {
                console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    // undefined // "bdr", "mc", "fx", "sl", "glgg", "jyjj"
                    let date = (arr[i].bdr !== undefined) ? arr[i].bdr : `暂无数据`;
                    let name = (arr[i].mc !== undefined) ? arr[i].mc : `暂无数据`;
                    let direction = (arr[i].fx !== undefined) ? arr[i].fx : `暂无数据`;
                    let share_nums = (arr[i].sl !== undefined) ? arr[i].sl : `暂无数据`;
                    let average_price = `${(arr[i].jyjj !== undefined) ? arr[i].jyjj : `暂无数据`}`;
                    let relationship = (arr[i].glgg !== undefined) ? arr[i].glgg : `暂无数据`;
                    let proportion = (arr[i].xxx !== undefined) ? arr[i].xxx : `暂无数据`;
                    // only show 5 items
                    if (i < 5) {
                        html_string += `
                            <tr class="fv-changes-shareholding-executives-table-tr">
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${date}
                                </td>
                                <td
                                    title="${name}"
                                    class="fv-changes-shareholding-executives-table-td-value"
                                    data-value="data-fv-changes-shareholding-executives">
                                    ${name}
                                </td>
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${direction}
                                </td>
                                <td
                                    title="${share_nums}"
                                    class="fv-changes-shareholding-executives-table-td-value"
                                    data-value="data-fv-changes-shareholding-executives">
                                    ${share_nums}
                                </td>
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${average_price}
                                </td>
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${relationship}
                                </td>
                            </tr>
                        `;
                    } else {
                        if (debug) {
                            console.log(`Sorry, we only show 5 items, now!`);
                        }
                    }
                    /* 
                        <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                            ${proportion}
                        </td>
                    */
                }
            );
            td_id.innerHTML = html_string;
        }
    )
    .catch(error => console.log(`error = \n`, error));
});



STOCK_F9_FV.Modules.changesShareholdingExecutives.init = STOCK_F9_FV.Modules.changesShareholdingExecutives.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/5.json`) => {
        let td_id = document.querySelector('#fv-changes-shareholding-executives-tbody');
        // STOCK_F9_FV.Modules.changesShareholdingExecutives(url, td_id, true);
        STOCK_F9_FV.Modules.changesShareholdingExecutives(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.changesShareholdingExecutives.init(`http://10.1.5.202/webservice/fastview/stock/stockfast12/600570.SH`);
// url





