"use strict";
/**
 * equity-pledge 股权质押
 * xgqfrms
 * creadted 2017.10.30
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
STOCK_F9_FV.Modules.equityPledge = STOCK_F9_FV.Modules.equityPledge || ((url = ``, td_id = `id`, debug = false) => {
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
                // console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    // ["ggrq", "czr", "zqr", "zygs", "zybl", "qsrq", "jzrq"]
                    // ["公告日期", "出质人", "质权人", "质押股数", "质押比例", "起始日期", "截止日期"]
                    let announcement_date = (arr[i].ggrq !== undefined) ? arr[i].ggrq : `暂无 数据`,
                        quality_people = (arr[i].czr !== undefined) ? arr[i].czr : `暂无 数据`,
                        right_person = (arr[i].zqr !== undefined) ? arr[i].zqr : `暂无 数据`,
                        pledged_shares = `${(arr[i].zygs !== undefined) ? arr[i].zygs : `暂无 数据`}`,
                        pledge_ratio = (arr[i].zybl !== undefined) ? arr[i].zybl : `暂无 数据`,
                        start_date = (arr[i].qsrq !== undefined) ? arr[i].qsrq : `暂无 数据`,
                        deadline_date = (arr[i].jzrq !== undefined) ? arr[i].jzrq : `暂无 数据`;
                    // only show 5 items
                    if (i < 5) {
                        html_string += `
                            <tr class="fv-changes-shareholding-executives-table-tr">
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${announcement_date}
                                </td>
                                <td
                                    data-turn-to-uid="data-turn-to-uid"
                                    data-uid="666666"
                                    title="${quality_people}"
                                    class="fv-changes-shareholding-executives-table-td-value"
                                    data-value="data-fv-changes-shareholding-executives">
                                    ${quality_people}
                                </td>
                                <td
                                    title="${right_person}"
                                    class="fv-changes-shareholding-executives-table-td-value"
                                    data-value="data-fv-changes-shareholding-executives">
                                    ${right_person}
                                </td>
                                <td
                                    class="fv-changes-shareholding-executives-table-td-value"
                                    data-value="data-fv-changes-shareholding-executives">
                                    ${pledged_shares}
                                </td>
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${pledge_ratio}
                                </td>
                                    <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${start_date}
                                </td>
                                    <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                    ${deadline_date}
                                </td>
                            </tr>
                        `;
                    } else {
                        if (debug) {
                            console.log(`Sorry, we only show 5 items, now!`);
                        }
                    }
                }
            );
            td_id.innerHTML = html_string;
            setTimeout(() => {
                let turn_to_uid = document.querySelector(`[data-turn-to-uid="data-turn-to-uid"]`);
                console.log(`turn_to_uid = \n`, turn_to_uid);
                if (debug) {
                    console.log(`turn_to_uid = \n`, turn_to_uid);
                }
                turn_to_uid.addEventListener(`click`, (e) => {
                    console.log(`e.target.dataset = \n`, e.target.dataset);
                    console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
                    if (debug) {
                        console.log(`e.target.dataset = \n`, e.target.dataset);
                    }
                    // let uid = e.target.dataset.uid;
                    // data-uid="666666"
                    // 跳转stock f9深度资料的命令：
                    // ChromeExternal.Execute("ExecuteCommand", "命令ID\证券代码\节点ID");
                    try {
                        // ??? url get 600570.SH ???
                        ChromeExternal.Execute("ExecuteCommand", "12\\600570.SH\\2741");
                        // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
                        // \ 反斜线要转义！
                    } catch (error) {
                        console.log(`ChromeExternal error = \n`, error);
                    }
                });
            }, 0);
        }
    )
    .catch(error => console.log(`error = \n`, error));
});



STOCK_F9_FV.Modules.equityPledge.init = STOCK_F9_FV.Modules.equityPledge.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/10.json`) => {
        let td_id = document.querySelector('#fv-equity-pledge-tbody');
        // STOCK_F9_FV.Modules.equityPledge(url, td_id, true);
        STOCK_F9_FV.Modules.equityPledge(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.equityPledge.init(`http://10.1.5.202/webservice/fastview/stock/stockfast10/600570.SH`);
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast10/600570.SH`;





