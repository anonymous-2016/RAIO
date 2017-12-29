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

STOCK_F9_FV.Modules.companyAnnouncements = STOCK_F9_FV.Modules.companyAnnouncements || (
    (url = ``, uid = `id`, ip = `http://10.1.5.202`, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;// Array
                // async
                if (debug) {
                    console.log(`data = \n`, data);
                }
                if (Array.isArray(data) && data.length > 0) {
                    let html_string = ``,
                        arr = data;
                    arr.map(
                        (obj, i) => {
                            let publishDate = (arr[i].gsggsj !== undefined) ? arr[i].gsggsj : `暂无 公告日期`,
                                title = `${(arr[i].gsggtitle !== undefined) ? arr[i].gsggtitle : `暂无 公告标题`}`,
                                uid = `${(arr[i].id !== undefined) ? arr[i].id : `暂无数据`}`,
                                type = `${(arr[i].fileType !== undefined) ? arr[i].fileType : `暂无数据`}`;
                            title = title.replace(/(：：)/ig, "：");
                            if (i < 5) {
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
                            }else{
                                // only show 5 items
                            }
                        }
                    );
                    let td_id = document.querySelector(uid);
                    td_id.innerHTML = html_string;
                    setTimeout((debug = false) => {
                        // const host = window.location.host ? window.location.host : `10.1.5.202`;
                        // const host = `http://10.1.5.202`;
                        let host = ip;
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
                                    console.log(`%c download_pdf = \n`, `color: #f0f; font-size: 23px;`, download_pdf);
                                    // http://10.1.5.202/queryservice/bulletin/attachment563999772286.pdf
                                    ChromeExternal.Execute("OpenFile", download_pdf);
                                } catch (err) {
                                    window.open(`${host}/queryservice/bulletin/attachment/company/${id}`);
                                    console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, err);
                                }
                            });
                        }
                    }, 0);
                }else{
                    let table_uid = document.querySelector(`.fv-company-announcements-table`),
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
    }
);



STOCK_F9_FV.Modules.companyAnnouncements.init = STOCK_F9_FV.Modules.companyAnnouncements.init || (
    (
        {
            ip,
            path,
            gilcode,
            skin
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/bulletion/`,
            gilcode: `600570.SH`,
            skin: `white`
        }
    ) => {
        // console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `#fv-company-announcements-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.companyAnnouncements(url, uid, ip, false);
        // STOCK_F9_FV.Modules.companyAnnouncements(url, uid, ip, true);
    }
);

var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.companyAnnouncements.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/bulletion/`,
    gilcode: STOCK_SecCode,
    skin: STOCK_Skin,
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/bulletion/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/bulletion/600570.SH`;


/*

let link_more = document.querySelector(`[data-more="company-announcements-title"]`);
let link_html = `
    <span id="company_announcements_link_more">
        <a href="#" title="company-announcements" data-uid="company_announcements_link_more">更多 >></a>
    </span>
`;
link_more.insertAdjacentHTML('beforeend', link_html);
let more = document.querySelector(`#company_announcements_link_more`);
more.classList.add("link-more");

*/

