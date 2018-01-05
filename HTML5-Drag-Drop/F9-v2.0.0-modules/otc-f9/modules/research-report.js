"use strict";

/**
 * @name research-report 研究报告
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* String} tbody_dom
 * @param {* String} more
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.researchReport = OTC_F9_FV.Modules.researchReport || (
    (url = ``, tbody_dom = ``, more = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (Array.isArray(datas)) {
                        let tbody = ``;
                        if (datas.length > 0) {
                            for (let i = 0; i < datas.length; i++) {
                                let title = (datas[i].title !== undefined  && datas[i].title !== null) ? datas[i].title.replace(/(：：)/ig, ": ") : `暂无数据`,
                                    time = (datas[i].publishDate !== undefined && datas[i].publishDate !== null) ? datas[i].publishDate : `暂无数据`,
                                    source = (datas[i].infoSource !== undefined && datas[i].infoSource !== null) ? datas[i].infoSource : `暂无数据`,
                                    // type = (datas[i].researchType !== undefined && datas[i].researchType !== null) ? datas[i].researchType : `暂无数据`,
                                    type = (datas[i].fileType !== undefined && datas[i].fileType !== null) ? datas[i].fileType : `暂无数据`,
                                    id = (datas[i].researchId !== undefined  && datas[i].researchId !== null) ? datas[i].researchId : `暂无数据`;
                                let html = ``;
                                html = `
                                    <a
                                        href="#${id}"
                                        title="${title}"
                                        data-title="${title}"
                                        data-link="otc-research-report-link"
                                        data-disabled="${id !== "null" ? false : true}"
                                        data-link-detail="research-report-link-detail-module"
                                        data-uid="${id}"
                                        data-type="${type}">
                                        ${title}
                                    </a>
                                `;
                                if (i < 5) {
                                    tbody += `
                                        <tr class="otc-research-report-table-tr">
                                            <td class="otc-research-report-table-td-value" data-value="data-otc-RR">${html}</td>
                                            <td class="otc-research-report-table-td-value" data-value="data-otc-RR">${time}</td>
                                            <td class="otc-research-report-table-td-value" data-value="data-otc-RR">${source}</td>
                                        </tr>
                                    `;
                                    // <td class="otc-research-report-table-td-value" data-value="data-otc-RR">${type}</td>
                                }else{
                                    // only show 5 items
                                }
                            }
                        }else{
                            // no data
                            let thead = document.querySelector(`.otc-research-report-table-thead`);
                            thead.style.display = "none";
                            tbody = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        tbody_dom.insertAdjacentHTML(`beforeend`, tbody);
                        // download & open pdf
                        setTimeout((debug = false) => {
                            const host = (window.OTC_IP !== undefined && window.OTC_IP.includes("http")) ? window.OTC_IP : `http://10.1.5.202`;
                            // const host = ip;
                            // absolute url ip
                            let links = document.querySelectorAll(`[data-link-detail="research-report-link-detail-module"]`);
                            for (let i = 0; i < links.length; i++) {
                                links[i].addEventListener(`click`, (e) => {
                                    // e.preventDefault();
                                    // researchid: "551173471225"
                                    let id = e.target.dataset.uid,
                                        type = e.target.dataset.type,
                                        title = e.target.dataset.title;
                                    try {
                                        let download_pdf = `${host}/queryservice/research/attachment/${id}.${type}\\${title}.${type}`;
                                        // 10.1.5.202/queryservice/research/attachment/551173471225.pdf
                                        ChromeExternal.Execute("OpenFile", download_pdf);
                                    } catch (err) {
                                        window.open(`${host}/queryservice/research/attachment/${id}.${type}`);
                                        // window.open(`${host}/queryservice/research/attachment/${id}`);
                                        // http:10.1.5.202/queryservice/research/attachment/551173471225
                                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, err);
                                    }
                                });
                            }
                        }, 0);
                    }else{
                        let message = `handle json error!`,
                            fileName = `research-report.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/research-report.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.researchReport.init = OTC_F9_FV.Modules.researchReport.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/research/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tbody_dom = document.querySelector(`[data-tbody="otc-research-report-table-tbody"]`),
            more = document.querySelector(`[data-more="otc-research-report-link-more"]`);
        OTC_F9_FV.Modules.researchReport(url, tbody_dom, more, false);
    }
);

// OTC_SKIN ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

// console.log(`research & OTC_GILCODE`, OTC_GILCODE);

OTC_F9_FV.Modules.researchReport.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/research/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.researchReport.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/research/430002.OC`;
