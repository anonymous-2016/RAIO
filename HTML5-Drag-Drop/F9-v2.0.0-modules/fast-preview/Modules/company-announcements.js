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
                    let publishDate = (arr[i].gsggsj !== undefined) ? arr[i].gsggsj : `暂无 公告日期`,
                        title = `${(arr[i].gsggtitle !== undefined) ? arr[i].gsggtitle : `暂无 公告标题`}`,
                        uid = `${(arr[i].id !== undefined) ? arr[i].id : `暂无数据`}`,
                        type = `${(arr[i].fileType !== undefined) ? arr[i].fileType : `暂无数据`}`;
                    title = title.replace(/(：：)/ig, "：");
                    html_string += `
                        <tr class="fv-company-announcements-table-tr">
                            <td class="fv-company-announcements-table-td-key" data-value="data-fv-company-announcements">
                                ${publishDate}
                            </td>
                            <td
                                class="fv-company-announcements-table-td-value"
                                data-value="data-fv-company-announcements">
                                <a
                                    href="#${uid}"
                                    title="${title}"
                                    data-title="${title}"
                                    data-uid="${uid}"
                                    data-type="${type}"
                                    data-disabled="${uid ? false : true}"
                                    data-link="fv-company-announcements-link">
                                    ${title}
                                </a>
                            </td>
                        </tr>
                    `;
                }
            );
            td_id.innerHTML = html_string;
            setTimeout((debug = false) => {
                // const host = window.location.host ? window.location.host : `10.1.5.202`;
                const host = `http://10.1.5.202`;
                // absolute url ip
                let links = document.querySelectorAll(`a[data-link="fv-company-announcements-link"]`);
                if (debug) {
                    console.log(`links = \n`, links);
                }
                for (let i = 0; i < links.length; i++) {
                    links[i].addEventListener(`click`, (e) => {
                        // e.preventDefault();
                        // #hash ???
                        // let uid = e.target.dataset.uid;
                        if (debug) {
                            console.log(`e.target.dataset = \n`, e.target.dataset);
                        }
                        // researchid: "551173471225"
                        if (debug) {
                            console.log(`e.target.dataset = \n`, e.target.dataset);
                            console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
                            console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
                        }
                        let id = e.target.dataset.uid,
                            type = e.target.dataset.type,
                            title = e.target.dataset.title;
                        try {
                            let download_pdf = `${host}/queryservice/bulletin/attachment/company/${id}.${type}\\${title}.${type}`;
                            // http://10.1.5.202/queryservice/bulletin/attachment563999772286.pdf
                            ChromeExternal.Execute("OpenFile", download_pdf);
                        } catch (err) {
                            window.open(`${host}/queryservice/bulletin/attachment/company/${id}`);
                            console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, err);
                        }
                    });
                }
            }, 0);
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





