"use strict";
/**
 * company-news 公司新闻
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
import "whatwg-fetch";

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.companyNews = STOCK_F9_FV.Modules.companyNews || (
    (url = ``, uid = `id`, ip = `http://10.1.5.202`, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;// Array
                if (debug) {
                    console.log(`data = \n`, data);
                }
                if (Array.isArray(data) && data.length > 0) {
                    let html_string = ``;
                    let arr = data;
                    arr.map(
                        (obj, i) => {
                            let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `暂无数据`,
                                title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `暂无数据`}`,
                                id = `${(arr[i].newid !== undefined) ? arr[i].newid : `暂无数据`}`;
                            // news no type!
                            title = title.replace(/(：：)/ig, "：");
                            if (i < 5) {
                                html_string += `
                                    <tr class="fv-company-news-table-tr">
                                        <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                                            ${publishDate}
                                        </td>
                                        <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                                            <a
                                                href="#${id}"
                                                title="${title}"
                                                data-title="${title}"
                                                data-link="fv-company-news-link"
                                                data-disabled="${id !== "null" ? false : true}"
                                                data-link-detail="company-news-link-detail-module"
                                                data-newsId="${id}">
                                                ${title}
                                            </a>
                                        </td>
                                    </tr>
                                `;
                                // no target="_blank"
                            }else{
                                // only show 5 items
                            }

                        }
                    );
                    let td_id = document.querySelector(uid);
                    td_id.innerHTML = html_string;
                    // open news modal
                    const showModalData = (debug = false) => {
                        const newsLinks = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
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
                    let table_uid = document.querySelector(`.fv-company-news-table`),
                        // table_parent = table_uid.parentNode,
                        table_prev_dom = table_uid.previousElementSibling,
                        no_data_html = `
                            <div>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            </div>
                        `;
                    // remove self
                    table_uid.remove();
                    // add no-data
                    table_prev_dom.insertAdjacentHTML(`afterend`, no_data_html);
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-company-news-data"]`);
            if (debug) {
                console.log(`turn_to_uid = \n`, turn_to_uid);
            }
            if (turn_to_uid !== null) {
                turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        gilcode = STOCK_SecCode ? STOCK_SecCode : window.STOCK_SecCode,
                        node_path = `12\\${gilcode}\\${uid}`;
                    try {
                        if (uid !== "null") {
                            ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal & ${uid} === null\n`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                    }
                });
            }else{
                throw new Error(`turn_to_uid is `, turn_to_uid);
            }
        }, 0);
    }
);



STOCK_F9_FV.Modules.companyNews.init = STOCK_F9_FV.Modules.companyNews.init || (
    (
        {
            ip,
            path,
            gilcode,
            skin
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/news/`,
            gilcode: `600570.SH`,
            skin: `white`
        }
    ) => {
        let uid = `#fv-company-news-tbody`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.companyNews(url, uid, ip, false);
        // STOCK_F9_FV.Modules.companyNews(url, uid, ip, true);
    }
);


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.companyNews.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/news/`,
    gilcode: STOCK_SecCode,
    skin: STOCK_Skin,
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/news/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/news/600570.SH`;

