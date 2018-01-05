"use strict";

/**
 * @name company-bulletin 公司公告
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


OTC_F9_FV.Modules.companyBulletin = OTC_F9_FV.Modules.companyBulletin || (
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
                                let title = (datas[i].gsggtitle !== undefined) ? datas[i].gsggtitle.replace(/(：：)/ig, "：") : `暂无数据`,
                                    time = (datas[i].gsggsj !== undefined && datas[i].gsggsj !== null) ? datas[i].gsggsj : `暂无数据`,
                                    type = (datas[i].bulletinType !== undefined && datas[i].bulletinType !== null) ? datas[i].bulletinType : `暂无数据`, // "bulletinType": "定期报告"
                                    fileType = (datas[i].fileType !== undefined && datas[i].fileType !== null) ? datas[i].fileType : `暂无数据`,// "fileType": "pdf",
                                    id = (datas[i].id !== undefined) ? datas[i].id : `暂无数据`;
                                let html = ``;
                                // href="#${id}"
                                // target="_blank"
                                // href="http://10.1.5.202/queryservice/bulletin/attachment/otc/${id}"
                                // download="${title}.pdf"
                                html = `
                                    <a
                                        href="#${id}"
                                        title="${title}"
                                        data-title="${title}"
                                        data-link="otc-company-bulletin-link"
                                        data-disabled="${id !== "null" ? false : true}"
                                        data-link-detail="company-bulletin-link-detail-module"
                                        data-uid="${id}"
                                        data-type="${fileType}">
                                        ${title}
                                    </a>
                                `;
                                // td_keys[i].insertAdjacentHTML(`beforeend`, html);
                                // tds[2*i].innerText = time;
                                // tds[2*i+1].innerText = type;
                                if (i < 5) {
                                    tbody += `
                                        <tr class="otc-company-bulletin-table-tr">
                                            <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB">${html}</td>
                                            <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB">${time}</td>
                                        </tr>
                                    `;
                                    // <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB">${type}</td>
                                }else{
                                    // only show 5 items
                                }
                            }
                        }else{
                            let thead = document.querySelector(`.otc-company-bulletin-table-thead`);
                            thead.style.display = "none";
                            tbody = `
                                <tr class="otc-company-bulletin-table-tr">
                                    <td colspan="3">
                                        <p data-none="no-data-p">
                                            <span data-none="no-data-span"></span>
                                        </p>
                                    </td>
                                </tr>
                            `;
                        }
                        tbody_dom.insertAdjacentHTML(`beforeend`, tbody);
                        setTimeout((debug = false) => {
                            // const host = `http://10.1.5.202`;
                            // window.location.origin.includes(`http`);
                            const host = (window.OTC_IP !== undefined && window.OTC_IP.includes("http")) ? window.OTC_IP : `http://10.1.5.202`;
                            // let host = ip;
                            // absolute url ip
                            let links = document.querySelectorAll(`[data-link-detail="company-bulletin-link-detail-module"]`);
                            if (debug) {
                                console.log(`links = \n`, links);
                            }
                            for (let i = 0; i < links.length; i++) {
                                links[i].addEventListener(`click`, (e) => {
                                    // e.preventDefault();
                                    let id = e.target.dataset.uid,
                                        type = e.target.dataset.type,
                                        title = e.target.dataset.title;
                                    try {
                                        let download_pdf = `${host}/queryservice/bulletin/attachment/otc/${id}.${type}\\${title}.${type}`;
                                        // let download_pdf = `${host}/queryservice/bulletin/attachment/company/${id}.${type}\\${title}.${type}`;
                                        // console.log(`%c download_pdf = \n`, `color: #f0f; font-size: 23px;`, download_pdf);
                                        // http://10.1.5.202/queryservice/bulletin/attachment563999772286.pdf
                                        ChromeExternal.Execute("OpenFile", download_pdf);
                                    } catch (err) {
                                        // window.open(`${host}/queryservice/bulletin/attachment/otc/${id}.${type}\\${title}.${type}`);
                                        window.open(`${host}/queryservice/bulletin/attachment/otc/${id}.${type}`);
                                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, err);
                                    }
                                });
                            }
                        }, 0);
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-bulletin.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/company-bulletin.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.companyBulletin.init = OTC_F9_FV.Modules.companyBulletin.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/bulletin/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tbody_dom = document.querySelector(`[data-tbody="otc-company-bulletin-table-tbody"]`),
            // td_keys = document.querySelectorAll(`[data-key="data-otc-CB"]`),
            // tds = document.querySelectorAll(`[data-value="data-otc-CB"]`),
            more = document.querySelector(`[data-more="otc-company-bulletin-link-more"]`);
        // OTC_F9_FV.Modules.companyBulletin(url, td_keys, tds, more, false);
        OTC_F9_FV.Modules.companyBulletin(url, tbody_dom, more, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.companyBulletin.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/bulletin/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.companyBulletin.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/bulletin/430002.OC`;
