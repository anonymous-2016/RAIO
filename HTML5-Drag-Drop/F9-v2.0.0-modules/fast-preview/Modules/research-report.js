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
                    let publishDate = (arr[i].publishDate !== undefined) ? arr[i].publishDate : `暂无数据`;
                    let title = `${(arr[i].title !== undefined) ? arr[i].title : `暂无数据`}`;
                    let id = `${(arr[i].researchId !== undefined) ? arr[i].researchId : `暂无数据`}`;
                    // "fileType": "pdf",
                    let type = `${(arr[i].fileType !== undefined) ? arr[i].fileType : `暂无数据`}`;
                    html_string += `
                        <tr class="fv-research-report-table-tr">
                            <td
                                class="fv-research-report-table-td-value"
                                data-value="data-fv-research-report">
                                ${publishDate}
                            </td>
                            <td
                                class="fv-research-report-table-td-value"
                                data-value="data-fv-research-report">
                                <a
                                    href="#${id}" 
                                    data-fileType="${type}"
                                    data-title="${title}"
                                    data-link="fv-research-report-link"
                                    title="${title}"
                                    data-link-detail="research-report-link-detail-module"
                                    data-researchId="${id}">
                                    ${title}
                                </a>
                            </td>
                        </tr>
                    `;
                }
            );
            td_id.innerHTML = html_string;
            // download & open pdf
            setTimeout(() => {
                // const host = window.location.host ? window.location.host : `10.1.5.202`;
                const host = `10.1.5.202`;
                let links = document.querySelectorAll(`[data-link="fv-research-report-link"]`);
                console.log(`links = \n`, links);
                for (let i = 0; i < links.length; i++) {
                    links[i].addEventListener(`click`, (e) => {
                        // let uid = e.target.dataset.uid;
                        console.log(`e.target.dataset = \n`, e.target.dataset);
                        // researchid: "551173471225"
                        if (debug) {
                            console.log(`e.target.dataset = \n`, e.target.dataset);
                            console.log(`e.target.dataset.uid = \n`, e.target.dataset.uid);
                            console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
                        }
                        let id = e.target.dataset.researchid,
                            type = e.target.dataset.filetype,
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
    }
);

STOCK_F9_FV.Modules.researchReport.init(`http://10.1.5.202/webservice/fastview/stock/research/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/research/600570.SH`;



