"use strict";

/**
 * @name company-news 公司新闻
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* String} tbody_dom
 * @param {* String} more
 * @param {Boolean} debug
 */
import "whatwg-fetch";

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.companyNews = OTC_F9_FV.Modules.companyNews || (
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
                        // no data
                        // if (datas.length < 0) {
                        if (datas.length > 0) {
                            for (let i = 0; i < datas.length; i++) {
                                let title = (datas[i].xwtitle !== undefined) ? datas[i].xwtitle.replace(/(：：)/ig, ": ") : `暂无数据`,
                                    time = (datas[i].xwsj !== undefined && datas[i].xwsj !== null) ? datas[i].xwsj : `暂无数据`,
                                    type = (datas[i].newsType !== undefined && datas[i].newsType !== null) ? datas[i].newsType : `暂无数据`,
                                    id = (datas[i].newid !== undefined) ? datas[i].newid : `暂无数据`;
                                let html = `
                                    <a
                                        href="#${id}"
                                        title="${title}"
                                        data-title="${title}"
                                        data-link="otc-company-news-link"
                                        data-disabled="${id !== "null" ? false : true}"
                                        data-link-detail="company-news-link-detail-module"
                                        data-newsId="${id}">
                                        ${title}
                                    </a>
                                `;
                                if (i < 5) {
                                    tbody += `
                                        <tr class="otc-company-news-table-tr">
                                            <td class="otc-company-news-table-td-key" data-key="data-otc-CN">${html}</td>
                                            <td class="otc-company-news-table-td-value" data-value="data-otc-CN">${time}</td>
                                        </tr>
                                    `;
                                    // <td class="otc-company-news-table-td-value" data-value="data-otc-CN">${type}</td>
                                }else{
                                    // only show 5 items
                                }
                            }
                        }else{
                            // no data
                            let thead = document.querySelector(`.otc-company-news-table-thead`);
                            thead.style.display = "none";
                            // tbody = `
                            //     <tr class="otc-company-news-table-tr">
                            //         <td colspan="3">
                            //             <p data-none="no-data-p">
                            //                 <span data-none="no-data-span"></span>
                            //             </p>
                            //         </td>
                            //     </tr>
                            // `;
                            tbody = `
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        tbody_dom.insertAdjacentHTML(`beforeend`, tbody);
                        // open news modal
                        const showModalData = (debug = false) => {
                            const newsLinks = document.querySelectorAll(`[data-link="otc-company-news-link"]`);
                            for (let i = 0; i < newsLinks.length; i++) {
                                newsLinks[i].addEventListener("click", () => {
                                    // fetch data & insert data to DOM
                                    const uid = newsLinks[i].dataset.newsid;
                                    // http://10.1.5.202/queryservice/news/content/573297152893
                                    const ORIGIN = window.parent.location.origin;
                                    // window.OTC_IP
                                    const IP =  (ORIGIN.includes(`file://`) || ORIGIN.includes(`http://localhost`)) ? `http://10.1.5.202` : ORIGIN;
                                    const PATH = `/queryservice/news/content/`;
                                    const url = `${IP}${PATH}${uid}`;
                                    if (debug) {
                                        console.log(`fetch url =`, url);
                                    }
                                    let html = ``;
                                    fetch(url)
                                    .then(res => res.json())
                                    .then(json => {
                                        // global function
                                        const emptyChecker = (key = ``) => {
                                            // arr.map() ???
                                            let result = true;
                                            switch (key) {
                                                case undefined:
                                                    result = false;
                                                    break;
                                                case null:
                                                    result = false;
                                                    break;
                                                case "--":
                                                    result = false;
                                                    // maybe no need, for string no data!
                                                    break;
                                                default:
                                                    break;
                                            }
                                            result ? ((Object.keys(key).length > 0) ? `` : (result = false)) : ``;
                                            return result;
                                        };
                                        if (debug) {
                                            console.log(`json =`, JSON.stringify(json, null, 4));
                                        }
                                        // show modal
                                        if (emptyChecker(json)) {
                                            let title = ``,
                                                source = ``,
                                                time = ``,
                                                content = ``,
                                                url = ``;
                                            // data
                                            title = json.Title;
                                            source = json.Infosource;
                                            time = json.PublishDate.substr(0, 10);
                                            url = json.Url;
                                            content = json.Content;
                                            // <span>字体: </span>
                                            html = `
                                                <div>
                                                    <div data-modal="modal-title">
                                                        <h1>公司新闻</h1>
                                                    </div>
                                                    <div data-modal="title-box">
                                                        <div data-modal="title">
                                                            <h3>${title}</h3>
                                                        </div>
                                                        <div data-modal="modal-font" class="fontSize">
                                                            字体:
                                                            <span class="fontBtn">
                                                                <a data-modal-font="data-font-big" data-modal-uid="0">大</a>
                                                            </span>
                                                            <span class="fontBtn">
                                                                <a data-modal-font="data-font-middle" data-modal-uid="1">中</a>
                                                            </span>
                                                            <span class="fontBtn active">
                                                                <a data-modal-font="data-font-small" data-modal-uid="2">小</a>
                                                            </span>
                                                        </div>
                                                        <div data-modal="info">
                                                            <p>
                                                                来源: <span data-info="info-source">${source}</span>
                                                                日期: <span data-info="info-time">${time}</span>
                                                                <a data-info="info-link" target="_blank" href="${url}">
                                                                    查看原文
                                                                    <i class="icon-external-link"></i>
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div data-modal="content">
                                                        <div>${content}</div>
                                                    </div>
                                                </div>
                                            `;
                                            // instance
                                            const options = {
                                                content: html,
                                                // others
                                            };
                                            let newsModal = new Modal(options);
                                            newsModal.open();
                                        } else {
                                            // no data!
                                        }
                                    })
                                    .catch(
                                        err => {
                                            console.log(`fetch json error!\n`, err);
                                            // no data!
                                        }
                                    );
                                });
                            }
                        };
                        setTimeout(() => {
                            showModalData();
                        }, 0);
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-news.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/**/otc-f9/modules/company-news.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-company-news-data"]`);
            if (debug) {
                console.log(`turn_to_uids = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        gilcode = OTC_GILCODE ? OTC_GILCODE : window.OTC_GILCODE,
                        node_path = `12\\${gilcode}\\${uid}`;
                    try {
                        if (uid !== "null") {
                            ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal & ${uid} === null\n`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                        console.log(`node uid = `, uid);
                    }
                });
            }else{
                throw new Error(`turn_to_uid is `, turn_to_uid);
            }
        }, 0);
    }
);


OTC_F9_FV.Modules.companyNews.init = OTC_F9_FV.Modules.companyNews.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/news/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tbody_dom = document.querySelector(`[data-tbody="otc-company-news-table-tbody"]`),
            more = document.querySelector(`[data-more="otc-company-news-link-more"]`);
        OTC_F9_FV.Modules.companyNews(url, tbody_dom, more, false);
    }
);

// OTC_SKIN ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    // OTC_GILCODE = window.OTC_GILCODE || `430007.OC`;
    OTC_GILCODE = window.OTC_GILCODE || `839032.OC`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.companyNews.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/news/`,
    gilcode: OTC_GILCODE,
});

// OTC_F9_FV.Modules.companyNews.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/news/430002.OC`;

