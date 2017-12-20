"use strict";
/**
 * @description holdings-participation-situation 控股参股情况
 * @author xgqfrms
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

STOCK_F9_FV.Modules.holdingsParticipationSituation = STOCK_F9_FV.Modules.holdingsParticipationSituation || (
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
            if (Array.isArray(data) && data.length > 0) {
                let html_string = ``,
                    arr = data;
                arr.map(
                    (obj, i) => {
                        // "gs": "被参控公司", "gx": "参控关系", "bl": "参控比例",// 参控比例（%） "jlr": "被参控股公司净利润", "yw": "被参控股公司主营业务"
                        let company = (arr[i].gs !== undefined) ? arr[i].gs : `暂无 数据`,
                            relationship = (arr[i].gx !== undefined) ? arr[i].gx : `暂无 数据`,
                            proportion = (arr[i].bl !== undefined) ? arr[i].bl : `暂无 数据`,
                            profile = `${(arr[i].jlr !== undefined) ? arr[i].jlr : `暂无 数据`}`,
                            business = (arr[i].yw !== undefined) ? arr[i].yw : `暂无 数据`;
                        // only show 5 items
                        if (i < 5) {
                            html_string += `
                                <tr class="fv-holdings-participation-situation-table-tr">
                                    <td
                                        title="${company}"
                                        class="fv-holdings-participation-situation-table-td-value"
                                        data-value="data-fv-holdings-participation-situation">
                                        ${company}
                                    </td>
                                    <td
                                        title="${relationship}"
                                        class="fv-holdings-participation-situation-table-td-value"
                                        data-value="data-fv-holdings-participation-situation">
                                        ${relationship}
                                    </td>
                                    <td
                                        class="fv-holdings-participation-situation-table-td-value"
                                        data-value="data-fv-holdings-participation-situation">
                                        ${proportion}
                                    </td>
                                    <td
                                        class="fv-holdings-participation-situation-table-td-value"
                                        data-value="data-fv-holdings-participation-situation">
                                        ${profile}
                                    </td>
                                    <td
                                        title="${business}"
                                        class="fv-holdings-participation-situation-table-td-value"
                                        data-value="data-fv-holdings-participation-situation">
                                        ${business}
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
                let td_id = document.querySelector(uid);
                td_id.innerHTML = html_string;
            }else{
                let table_uid = document.querySelector(`.fv-holdings-participation-situation-table`),
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


STOCK_F9_FV.Modules.holdingsParticipationSituation.init = STOCK_F9_FV.Modules.holdingsParticipationSituation.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast11/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `#fv-holdings-participation-situation-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.holdingsParticipationSituation(url, uid, false);
        // STOCK_F9_FV.Modules.holdingsParticipationSituation(url, true, uid);
    }
);


STOCK_F9_FV.Modules.holdingsParticipationSituation.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast11/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast11/`,
    // gilcode: `600570.SH`
});





