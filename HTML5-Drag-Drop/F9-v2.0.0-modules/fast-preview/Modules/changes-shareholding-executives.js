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

STOCK_F9_FV.Modules.changesShareholdingExecutives = STOCK_F9_FV.Modules.changesShareholdingExecutives || (
    (url = ``, uid = `id`, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;// Array
                if (debug) {
                    console.log(`data = \n`, data);
                }
                let html_string = ``;
                let arr = data;
                arr.map(
                    (obj, i) => {
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
                        // <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                        //     ${proportion}
                        // </td>
                    }
                );
                let td_id = document.querySelector(uid);
                td_id.innerHTML = html_string;
            }
        )
        .catch(error => console.log(`error = \n`, error));
    }
);



STOCK_F9_FV.Modules.changesShareholdingExecutives.init = STOCK_F9_FV.Modules.changesShareholdingExecutives.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast12/`,
            gilcode: `600570.SH`
        }
    ) => {
        // console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `#fv-changes-shareholding-executives-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.changesShareholdingExecutives(url, uid, false);
        // STOCK_F9_FV.Modules.changesShareholdingExecutives(url, uid, true);
    }
);

STOCK_F9_FV.Modules.changesShareholdingExecutives.init({
    ip: `http://10.1.5.202`,
    path: `/webservice/fastview/stock/stockfast12/`,
    gilcode: STOCK_SecCode
});



