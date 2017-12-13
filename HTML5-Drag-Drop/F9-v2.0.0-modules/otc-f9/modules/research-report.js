"use strict";

/**
 * research-report 研究报告
 * xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* Array} td_keys
 * @param {* Array} tds
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
    (url = ``, td_keys = [], tds = [], more = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (Array.isArray(datas) && datas.length > 0) {
                        for (let i = 0; i < td_keys.length; i++) {
                            let title = (datas[i].title !== undefined) ? datas[i].title.replace(/(：：)/ig, "：") : `暂无数据`,
                                time = (datas[i].publishDate !== undefined && datas[i].publishDate !== null) ? datas[i].publishDate : `暂无数据`,
                                source = (datas[i].infoSource !== undefined && datas[i].infoSource !== null) ? datas[i].infoSource : `暂无数据`,
                                type = (datas[i].researchType !== undefined && datas[i].researchType !== null) ? datas[i].researchType : `暂无数据`,
                                fileType = (datas[i].fileType !== undefined && datas[i].fileType !== null) ? datas[i].fileType : `暂无数据`,
                                id = (datas[i].researchId !== undefined) ? datas[i].researchId : `暂无数据`;
                            let html = ``;
                            html = `
                                <a
                                    href="#${id}"
                                    title="${title}"
                                    data-title="${title}"
                                    data-link="otc-research-report-link"
                                    data-disabled="${id !== "null" ? false : true}"
                                    data-link-detail="research-report-link-detail-module"
                                    data-newsId="${id}">
                                    ${title}
                                </a>
                            `;
                            td_keys[i].insertAdjacentHTML(`beforeend`, html);
                            tds[2*i].innerText = time;
                            tds[2*i+1].innerText = type;
                            tds[2*i+2].innerText = source;
                        }
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
            td_keys = document.querySelectorAll(`[data-key="data-otc-RR"]`),
            tds = document.querySelectorAll(`[data-value="data-otc-RR"]`),
            more = document.querySelector(`[data-more="otc-research-report-link-more"]`);
        OTC_F9_FV.Modules.researchReport(url, td_keys, tds, more, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.researchReport.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/research/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.researchReport.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/research/430002.OC`;
