"use strict";

/**
 * @name thematic-statistics-news 新三板专题统计 新闻
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* String} tbody_dom
 * @param {* String} more
 * @param {Boolean} debug
 */
import 'whatwg-fetch';

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};



OTC_TS_FV.Modules.thematicStatisticsNews = OTC_TS_FV.Modules.thematicStatisticsNews || (
    (url = ``, tbody_dom = ``, more = ``, debug = false) => {
        let datas = {};
        // let new_add = document.querySelector(`[data-text="otc-thematic-statistics-news-text"]`),
        // no_data_dom = document.querySelector(`.otc-thematic-statistics-news-title-box`),
        // hs_container = document.querySelector(`#thematic_statistics_news_hs_container`),
        // table_body = document.querySelector(`[data-table-body="otc-table-body-thematic-statistics-news"]`),
        // table_container = document.querySelector(`[data-table="otc-thematic-statistics-news-table"]`);
        // no data
        let no_data_p = `
            <div data-margin="no-data-margin-top">
                <p data-none="no-data-p">
                    <span data-none="no-data-span"></span>
                </p>
            </div>
        `;
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
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
                        // case "--":
                        //     result = false;
                        //     break;
                        default:
                            break;
                    }
                    return result;
                };
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
                                        data-link="otc-thematic-statistics-news-link"
                                        data-disabled="${id !== "null" ? false : true}"
                                        data-link-detail="thematic-statistics-news-link-detail-module"
                                        data-newsId="${id}">
                                        ${title}
                                    </a>
                                `;
                                // if (i < 5) {
                                if (i < datas.length) {
                                    tbody += `
                                        <tr class="otc-thematic-statistics-news-table-tr">
                                            <td class="otc-thematic-statistics-news-table-td-key" data-key="data-otc-TSN">${html}</td>
                                            <td class="otc-thematic-statistics-news-table-td-value" data-value="data-otc-TSN">${time}</td>
                                        </tr>
                                    `;
                                    // <td class="otc-thematic-statistics-news-table-td-value" data-value="data-otc-CN">${type}</td>
                                }else{
                                    // only show 5 items
                                }
                            }
                        }else{
                            // no data
                            let thead = document.querySelector(`.otc-thematic-statistics-news-table-thead`);
                            thead.style.display = "none";
                            // tbody = `
                            //     <tr class="otc-thematic-statistics-news-table-tr">
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
                            const newsLinks = document.querySelectorAll(`[data-link="otc-thematic-statistics-news-link"]`);
                            // links number bug! no span
                            // let i = 0; i < newsLinks.length; i++
                            for (let i = 1; i < newsLinks.length; i++) {
                                newsLinks[i].addEventListener("click", (e) => {
                                    // fetch data & insert data to DOM
                                    const uid = e.target.dataset.newsid;
                                    // const uid = newsLinks[i].dataset.newsid;
                                    // http://10.1.5.202/queryservice/news/content/573297152893
                                    const ORIGIN = window.parent.location.origin;
                                    // window.OTC_IP
                                    const IP =  (ORIGIN.includes(`file://`) || ORIGIN.includes(`http://localhost`)) ? `http://10.1.5.202` : ORIGIN;
                                    const PATH = `/queryservice/news/content/`;
                                    const url = `${IP}${PATH}${uid}`;
                                    if (debug) {
                                        console.log(`uid =`, uid);
                                        console.log(`e.target.dataset.newsid =`, e.target.dataset.newsid);
                                        // uid bug
                                        // console.log(`newsLinks[${i}].dataset.newsid=`, newsLinks[i].dataset.newsid);
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
                            fileName = `thematic-statistics-news.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                        // no data
                        // hs_container.style.display = "none";
                        // table_container.style.display = "none";
                        // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                    }
                } catch (err) {
                    let url =`otc-ts/modules/thematic-statistics-news.js`;
                    ConsoleError(err, url);
                    // no data
                    // hs_container.style.display = "none";
                    // table_container.style.display = "none";
                    // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                }
            }
        )
        .catch(err => {
            console.log(`fetch error = \n`, err);
            // no data
            // hs_container.style.display = "none";
            // table_container.style.display = "none";
            // no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
        });
        // return datas;
        // <a href="#更多" data-uid="xxxxxx" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-thematic-statistics-news>更多</a>
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-thematic-statistics-news"]`);
            if (debug) {
                console.log(`turn_to_uid dom = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                        // 今日新增挂牌公司	More 13	NQTOPIC	342064
                        // more.dataset.moreUid = `${table_obj.zqdm}.OC`;
                        let uid = e.target.dataset.uid,
                            topic_category  = e.target.dataset.topicCategory,// 专题分类名称常量
                            node_path = `13\\${topic_category}\\${uid}`;
                        try {
                            if (uid !== undefined && topic_category !== undefined) {
                                ChromeExternal.Execute("ExecuteCommand", node_path);
                                // ChromeExternal.Execute("ExecuteCommand", `13\\${topic_category}\\${uid}`);
                            }else{
                                console.log(`ChromeExternal \nuid === ${uid} & topic_category === ${topic_category}`);
                            }
                        } catch (error) {
                            console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                            console.log(`node uid = `, uid);
                            console.log(`node topic_category = `, topic_category);
                            console.log(`node node_path = `, node_path);
                        }
                    });
            }else{
                // null
                throw new Error(`turn_to_uid dom is null!\n`, turn_to_uid);
            }
        }, 0);
    }
);


OTC_TS_FV.Modules.thematicStatisticsNews.init = OTC_TS_FV.Modules.thematicStatisticsNews.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/news/`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `${ip}${path}${socket}${gilcode}`,
            tbody_dom = document.querySelector(`[data-tbody="otc-thematic-statistics-news-table-tbody"]`),
            more = document.querySelector(`[data-turn-to-uid="node-uid-thematic-statistics-news"]`);
        OTC_TS_FV.Modules.thematicStatisticsNews(url, tbody_dom, more, false);
    }
);

// OTC_SKIN ??? no need ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`;


OTC_TS_FV.Modules.thematicStatisticsNews.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/news`,
    // socket: `/news/`,
    // gilcode: OTC_GILCODE,
});

// OTC_TS_FV.Modules.thematicStatisticsNews.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/news/430002.OC`;

