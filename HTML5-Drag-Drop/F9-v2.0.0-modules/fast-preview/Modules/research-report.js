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


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};
// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.researchReport = STOCK_F9_FV.Modules.researchReport || ((url = ``, td_id = `id`, debug = false) => {
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
                    let date = (arr[i].publishDate !== undefined) ? arr[i].publishDate : `暂无数据`,
                        title = `${(arr[i].title !== undefined) ? arr[i].title : `暂无数据`}`,
                        id = `${(arr[i].researchId !== undefined) ? arr[i].researchId : `暂无数据`}`,
                        type = `${(arr[i].fileType !== undefined) ? arr[i].fileType : `暂无数据`}`;
                    // "fileType": "pdf",
                    title = title.replace(/(：：)/ig, "：");// shit Chinese encoding
                    // title.replace(/: :/, ""); // ：： ？？？ shit data
                    // only show 5 items
                    if (i < 5) {
                        html_string += `
                            <tr class="fv-research-report-table-tr">
                                <td class="fv-research-report-table-td-key" data-value="data-fv-events">
                                    ${date}
                                </td>
                                <td class="fv-research-report-table-td-value" data-value="data-fv-events">
                                    <a 
                                        href="#${id}"
                                        data-uid="${id}"
                                        data-type="${type}"
                                        data-turn-to-uid="research-report"
                                        title="${title}"
                                        data-title="${title}"
                                        data-disabled="${ id !== "null" ? false : true}"
                                        data-link="fv-research-report-link"
                                        data-link-detail="research-report-link-detail-module">
                                        ${title}
                                    </a>
                                </td>
                            </tr>
                        `;
                        // target="_blank"
                        // ${id === "null" ? "disabled='true'" : ""}
                    } else {
                        if (debug) {
                            console.log(`Sorry, we only show 5 items, now!`);
                        }
                    }
                }
            );
            td_id.innerHTML = html_string;
            // download & open pdf
            setTimeout((debug = false) => {
                // const host = window.location.host ? window.location.host : `10.1.5.202`;
                const host = `http://10.1.5.202`;
                // absolute url ip
                let links = document.querySelectorAll(`[data-link="fv-research-report-link"]`);
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
                            let download_pdf = `${host}/queryservice/research/attachment/${id}.${type}\\${title}.${type}`;
                            // 10.1.5.202/queryservice/research/attachment/551173471225.pdf
                            ChromeExternal.Execute("OpenFile", download_pdf);
                        } catch (e) {
                            window.open(`${host}/queryservice/research/attachment/${id}`);
                            // http://localhost:3000/fast-preview/10.1.5.202/queryservice/research/attachment/551173471225
                            // 10.1.5.202/queryservice/research/attachment/551173471225
                        }
                    });
                }
            }, 0);
        }
    )
    .catch(error => console.log(`error = \n`, error));
});


STOCK_F9_FV.Modules.researchReport.init = STOCK_F9_FV.Modules.researchReport.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/research.json`) => {
        let td_id = document.querySelector('#fv-research-report-tbody');
        // STOCK_F9_FV.Modules.researchReport(url, td_id, true);
        STOCK_F9_FV.Modules.researchReport(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.researchReport.init(`http://10.1.5.202/webservice/fastview/stock/research/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/research/600570.SH`;



/* 
    // no need any more???
    const clickLinkOpenModuleHandler = (uid = `600570`, debug = false) => {
        // 600570.SH
        // alert(`uid = `, uid);
        alert(`uid = ${uid}`);// alert(`desc ${key}`) !== console.log(`desc `, key);
        // fetch data
        // show module
        // cache ?
    };
    // async await ??? promise
    setTimeout((debug = false) => {
        let a_links = document.querySelectorAll(`a[data-link-detail="research-report-link-detail-module"]`);
        for (var i = 0; i < a_links.length; i++) {
            // let uid = a_links[i].innerText;
            // let uid = parseInt(a_links[i].dataset.researchId);// dataset ignore Capital!
            let uid = parseInt(a_links[i].dataset.researchid);
            // OR, just  get it from URL hash!
            let hash_id = parseInt((this.window.location.hash).slice(1));
            if (debug) {
                console.log(`id = ${uid}`);
            }
            a_links[i].addEventListener(`click`,
                (e) => {
                    e.preventDefault();// disable defalut a link event!
                    if (debug) {
                        console.log(`id = ${uid}`);
                    }
                    let e_id = parseInt(e.target.dataset.researchid);// e.target
                    if (debug) {
                        console.log(`id = ${e_id}`);
                    }
                    clickLinkOpenModuleHandler(uid);
                }
            );
        }
    }, 1000);
    // delay
*/
