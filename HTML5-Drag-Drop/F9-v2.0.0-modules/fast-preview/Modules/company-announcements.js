"use strict";
/**
 * company-announcements 公司公告
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
STOCK_F9_FV.Modules.companyAnnouncements = STOCK_F9_FV.Modules.companyAnnouncements || ((url = ``, td_id = `id`, debug = false) => {
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
                    let publishDate = (arr[i].gsggsj !== undefined) ? arr[i].gsggsj : `暂无 公告日期`;
                    let title = `${(arr[i].gsggtitle !== undefined) ? arr[i].gsggtitle : `暂无 公告标题`}`;
                    html_string += `
                        <tr class="fv-company-announcements-table-tr">
                            <td class="fv-company-announcements-table-td-key" data-value="data-fv-company-announcements">
                                ${publishDate}
                            </td>
                            <td class="fv-company-announcements-table-td-value" data-value="data-fv-company-announcements">
                                <a
                                    href="#"
                                    title="${title}"
                                    data-link="fv-company-announcements-link">
                                    ${title}
                                </a>
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


STOCK_F9_FV.Modules.companyAnnouncements.init = STOCK_F9_FV.Modules.companyAnnouncements.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/bulletion.json`) => {
        // let link_more = document.querySelector(`[data-more="company-announcements-title"]`);
        // let link_html = `
        //     <span id="company_announcements_link_more">
        //         <a href="#" title="company-announcements" data-uid="company_announcements_link_more">更多 >></a>
        //     </span>
        // `;
        // link_more.insertAdjacentHTML('beforeend', link_html);
        // let more = document.querySelector(`#company_announcements_link_more`);
        // more.classList.add("link-more");
        let td_id = document.querySelector('#fv-company-announcements-tbody');
        // STOCK_F9_FV.Modules.companyAnnouncements(url, td_id, true);
        STOCK_F9_FV.Modules.companyAnnouncements(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.companyAnnouncements.init(`http://10.1.5.202/webservice/fastview/stock/bulletion/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/bulletion/600570.SH`;





