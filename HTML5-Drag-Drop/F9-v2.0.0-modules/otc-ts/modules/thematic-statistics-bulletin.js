"use strict";

/**
 * @name thematic-statistics-bulletin 新三板专题统计 公告
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
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};


OTC_TS_FV.Modules.thematicStatisticsBulletin = OTC_TS_FV.Modules.thematicStatisticsBulletin || (
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
                                        data-link="otc-thematic-statistics-bulletin-link"
                                        data-disabled="${id !== "null" ? false : true}"
                                        data-link-detail="thematic-statistics-bulletin-link-detail-module"
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
                                        <tr class="otc-thematic-statistics-bulletin-table-tr">
                                            <td class="otc-thematic-statistics-bulletin-table-td-value" data-value="data-otc-CB">${html}</td>
                                            <td class="otc-thematic-statistics-bulletin-table-td-value" data-value="data-otc-CB">${time}</td>
                                        </tr>
                                    `;
                                    // <td class="otc-thematic-statistics-bulletin-table-td-value" data-value="data-otc-CB">${type}</td>
                                }else{
                                    // only show 5 items
                                }
                            }
                        }else{
                            let thead = document.querySelector(`.otc-thematic-statistics-bulletin-table-thead`);
                            thead.style.display = "none";
                            // tbody = `
                            //     <tr class="otc-thematic-statistics-bulletin-table-tr">
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
                        setTimeout((debug = false) => {
                            // const host = `http://10.1.5.202`;
                            // window.location.origin.includes(`http`);
                            const host = (window.OTC_IP !== undefined && window.OTC_IP.includes("http")) ? window.OTC_IP : `http://10.1.5.202`;
                            // let host = ip;
                            // absolute url ip
                            let links = document.querySelectorAll(`[data-link-detail="thematic-statistics-bulletin-link-detail-module"]`);
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
                            fileName = `thematic-statistics-bulletin.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`otc-f9/modules/thematic-statistics-bulletin.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // a href="#更多" data-uid="xxxxxx" data-topic-category="NQTOPIC" data-turn-to-uid="node-uid-thematic-statistics-bulletin-data">更多</a>
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-thematic-statistics-bulletin-data"]`);
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
                throw new Error(`turn_to_uid dom is `, turn_to_uid);
            }
        }, 0);
    }
);


OTC_TS_FV.Modules.thematicStatisticsBulletin.init = OTC_TS_FV.Modules.thematicStatisticsBulletin.init || (
    (
        {
            ip,
            path,
            socket,
            // gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/bulletin/`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `${ip}${path}${socket}${gilcode}`,
            tbody_dom = document.querySelector(`[data-tbody="otc-thematic-statistics-bulletin-table-tbody"]`),
            // td_keys = document.querySelectorAll(`[data-key="data-otc-CB"]`),
            // tds = document.querySelectorAll(`[data-value="data-otc-CB"]`),
            more = document.querySelector(`[data-more="otc-thematic-statistics-bulletin-link-more"]`);
        // OTC_TS_FV.Modules.thematicStatisticsBulletin(url, td_keys, tds, more, false);
        OTC_TS_FV.Modules.thematicStatisticsBulletin(url, tbody_dom, more, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`;
    // OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    // OTC_GILCODE = window.OTC_GILCODE || `430007.OC`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_TS_FV.Modules.thematicStatisticsBulletin.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/bulletin/`,
    // gilcode: OTC_GILCODE
});

// OTC_TS_FV.Modules.thematicStatisticsBulletin.init();
// const url = `http://10.1.5.202/webservice/fastview/otc/bulletin`;
// http://10.1.5.202/queryservice/bulletin/attachment/otc/1000000102180858.pdf
