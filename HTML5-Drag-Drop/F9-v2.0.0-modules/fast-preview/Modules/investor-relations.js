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
// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.investorRelations = STOCK_F9_FV.Modules.investorRelations || ((url = ``, td_id = `id`, debug = false) => {
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
                    // undefined
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
            td_id.innerHTML = html_string;
        }
    )
    .catch(error => console.log(`error = \n`, error));
});


STOCK_F9_FV.Modules.investorRelations.init = STOCK_F9_FV.Modules.investorRelations.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/x.json`) => {
        // let link_more = document.querySelector(`[data-more="investor-relations-title"]`);
        // let link_html = `
        //     <span id="investor_relations_link_more">
        //         <a href="#" title="investor-relations" data-uid="investor_relations_link_more">更多 >></a>
        //     </span>
        // `;
        // link_more.insertAdjacentHTML('beforeend', link_html);
        // let more = document.querySelector(`#investor_relations_link_more`);
        // more.classList.add("link-more");
        // more
        let td_id = document.querySelector('#fv-investor-relations-tbody');
        // STOCK_F9_FV.Modules.investorRelations(url, td_id, true);
        STOCK_F9_FV.Modules.investorRelations(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.investorRelations.init(`http://10.1.5.202/webservice/fastview/stock/x/600570.SH`);
// url



