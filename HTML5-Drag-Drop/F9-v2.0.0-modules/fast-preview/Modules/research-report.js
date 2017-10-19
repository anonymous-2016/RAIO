"use strict";
/**
 * research-report 研究报告
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

/* 

    import {urls} from "../utils/urls-ip";
    // Uncaught SyntaxError: Unexpected token import

    import {debug} from "../utils/debug";
    const debug = true;

    var _urlsIp = require("../utils/urls-ip");
    // Uncaught ReferenceError: require is not defined

    if (debug) {
        console.log(`urls = `, JSON.stringify(urls, null, 4));
    }

*/

/* 

    "use strict";

    var _urlsIp = require("../utils/urls-ip");

    // import {debug} from "../utils/debug";
    var debug = true;

    if (debug) {
        console.log("urls = ", JSON.stringify(_urlsIp.urls, null, 4));
    }


*/

const researchReport = (url = ``, td_id = `id`, debug = false) => {
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
                    let publishDate = (arr[i].publishDate !== undefined) ? arr[i].publishDate : `😟 暂无数据`;
                    let title = `${(arr[i].title !== undefined) ? arr[i].title : `😟 暂无数据`}`;
                    let id = `${(arr[i].researchId !== undefined) ? arr[i].researchId : `😟 暂无数据`}`;
                    html_string += `
                        <tr class="fv-research-report-table-tr">
                            <td class="fv-research-report-table-td-value" data-value="data-fv-research-report">
                                ${publishDate}
                            </td>
                            <td class="fv-research-report-table-td-value" data-value="data-fv-research-report">
                                <a href="#${id}" data-link="fv-research-report-link" data-link-detail="research-report-link-detail-module" data-researchId="${id}">${title}</a>
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
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/research/600570.SH`;
    let link_more = document.querySelector(`[data-more="research-report-title"]`);
    let link_html = `
        <span id="research_report_link_more">
            <a href="#" title="research-report" data-uid="research_report_link_more">更多 >></a>
        </span>
    `;
    link_more.insertAdjacentHTML('beforeend', link_html);
    let more = document.querySelector(`#research_report_link_more`);
    // more.style.marginLeft = "370px";
    more.classList.add("link-more");
    // more
    let td_id = document.querySelector('#fv-research-report-tbody');
    researchReport(url, td_id, true);
    // const debug = true;
    // researchReport(url, td_id, debug);
    let a_links = document.querySelectorAll(`a[data-link-detail="research-report-link-detail-module"]`);
    for (var i = 0; i < a_links.length; i++) {
        let id = a_links[i].innerText;
        a_links[i].addEventListener(`click`,
            (id) => {
                console.log(`id = ${id}`)
            }
        );
    }
    // only once ???
}, 0);// 2000 ??? refresh bink

const clickLinkOpenModuleHandler = (uid = `600570`, debug = false) => {
    // 600570.SH
    alert(`uid = `, uid);
    // fetch data
    // show module
    // cache ?
};
setTimeout(function() {
    let a_links = document.querySelectorAll(`a[data-link-detail="research-report-link-detail-module"]`);
    for (var i = 0; i < a_links.length; i++) {
        // let uid = a_links[i].innerText;
        let uid = parseInt(a_links[i].dataset.researchid);
        console.log(`id = ${uid}`);
        a_links[i].addEventListener(`click`,
            (uid) => {
                console.log(`id = ${uid}`);
                clickLinkOpenModuleHandler(uid);
            }
        );
    }
    // only once ???
}, 1000);

/* 
// dataset & dataa-*

a_links[0];
// <a href=​"#561043398497" data-link=​"fv-research-report-link" data-link-detail=​"research-report-link-detail-module" data-researchid=​"561043398497">​恒生电子(600570)点评：抱拥金融科技大趋势​</a>​

typeof a_links[0];
// "object"

a_links[0].innerText;
// "恒生电子(600570)点评：抱拥金融科技大趋势"

a_links[0].dataset.researchid;
// "561043398497"

parseInt(a_links[0].dataset.researchid);
// 561043398497


*/
