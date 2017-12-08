"use strict";
/**
 * investor-relations 公司公告投资者关系
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

STOCK_F9_FV.Modules.investorRelations = STOCK_F9_FV.Modules.investorRelations || (
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
            // copy(JSON.stringify(data, null, 4));
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    let publishDate = (arr[i].gsggsj !== undefined) ? arr[i].gsggsj : `暂无 投资者关系日期`;
                    let title = `${(arr[i].gsggtitle !== undefined) ? arr[i].gsggtitle : `暂无 投资者关系标题`}`;
                    html_string += `
                        <tr class="fv-investor-relations-table-tr">
                            <td class="fv-investor-relations-table-td-key" data-value="data-fv-investor-relations">
                                ${publishDate}
                            </td>
                            <td class="fv-investor-relations-table-td-value" data-value="data-fv-investor-relations">
                                <a href="#" data-link="fv-investor-relations-link">${title}</a>
                            </td>
                        </tr>
                    `;
                }
            );
            let td_id = document.querySelector(uid);
            td_id.innerHTML = html_string;
        }
    )
    .catch(error => console.log(`error = \n`, error));
});


STOCK_F9_FV.Modules.investorRelations.init = STOCK_F9_FV.Modules.investorRelations.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast???/`,
            gilcode: `600570.SH`
        }
    ) => {
        // console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
        // console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `#fv-investor-relations-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.investorRelations(url, uid, false);
        // STOCK_F9_FV.Modules.investorRelations(url, uid, true);
    }
);


STOCK_F9_FV.Modules.investorRelations.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast???/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast???/`,
    // gilcode: `600570.SH`
});

