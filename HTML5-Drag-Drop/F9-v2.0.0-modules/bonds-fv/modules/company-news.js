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
                        setTimeout(() => {
                            const host = (window.OTC_IP !== undefined && window.OTC_IP.includes("http")) ? window.OTC_IP : `http://10.1.5.202`;
                            // const host = ip;
                            // absolute url ip
                            let links = document.querySelectorAll(`[data-link="otc-company-news-link"]`);
                            if (debug) {
                                console.log(`links = \n`, links);
                            }
                            for (let i = 0; i < links.length; i++) {
                                links[i].addEventListener(`click`, (e) => {
                                    e.preventDefault();
                                    // #hash
                                    let id = e.target.dataset.newsid,
                                        title = e.target.dataset.title;
                                    try {
                                        let open_link = `${host}/queryservice/news/content/${id}`;
                                        // #567721125719
                                        if (debug) {
                                            console.log(`id = ${id} \ntitle = ${title}`);
                                            // no need title
                                        }
                                        // fetch news summary data
                                        let data = {};
                                        fetch(open_link)
                                        .then(res => res.json())
                                        .then(
                                            (json) => {
                                                if (debug) {
                                                    console.log(`json = \n`, JSON.stringify(json, null, 4));
                                                }
                                                data = json;
                                                // BouncedModal
                                                const UDP_wh = UDP.getClientWidthHeight;
                                                if (debug) {
                                                    console.log(`UDP_wh = \n`, JSON.stringify(UDP_wh, null, 4));
                                                }
                                                let UDP_width = UDP_wh.w - 60,
                                                    UDP_height = UDP_wh.h - 60;
                                                // STOCK_F9_FV.Modal.BouncedModal
                                                const modal = new BouncedModal({
                                                // const modal = new UDP.BouncedModal({
                                                    // bouncedclass: "layerContianer2",//存放页面的容器类名
                                                    width: UDP_width,
                                                    height: UDP_height,
                                                    title: "公司新闻",
                                                    setOverflow: "overflow-y:none",
                                                    //设置滚动的属性(overflow-y: 竖向  overflow-x: 横向)
                                                    // str: html.join(''),// array to string
                                                    // str: html_template,
                                                    datas: Object.assign({}, data)
                                                });
                                                modal.init();
                                                // return json;
                                            }
                                        )
                                        .catch(err => console.log(`error infos = \n`, err));
                                    } catch (err) {
                                        console.log(`${host}/queryservice/news/content/${id}: Error infos = \n`, err);
                                        // window.open(`${host}/queryservice/news/content/${id}`);
                                    }
                                });
                            }
                        }, 0);
                    }else{
                        let message = `handle json error!`,
                            fileName = `company-news.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/company-news.js`;
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
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.companyNews.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/news/`,
    gilcode: OTC_GILCODE,
});

// OTC_F9_FV.Modules.companyNews.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/news/430002.OC`;

