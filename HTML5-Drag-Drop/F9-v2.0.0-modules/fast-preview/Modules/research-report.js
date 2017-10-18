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
                    let publishDate = (arr[i].publishDate !== undefined) ? arr[i].publishDate : `😟暂无 发布时间`;
                    let title = `${(arr[i].title !== undefined) ? arr[i].title : `🤓暂无 标题`}`;
                    html_string += `
                        <tr class="fv-research-report-table-tr">
                            <td class="fv-research-report-table-td-key" data-value="data-fv-research-report">
                                ${publishDate}
                            </td>
                            <td class="fv-research-report-table-td-value" data-value="data-fv-research-report">
                                ${title}
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
}, 0);
