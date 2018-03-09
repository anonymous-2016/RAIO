"use strict";

/**
 * @name latest-financial-data 最新财务数据
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* Array} tds
 * @param {* String} title
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */
import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.latestFinancialData = OTC_F9_FV.Modules.latestFinancialData || (
    (url = ``, tds = [], titles = [], debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (typeof(datas) === "object" && Object.keys(datas).length > 0) {
                        // let keys = Object.keys(json);
                        let title = ``,
                            td_title1 = ``,
                            td_title2 = ``;
                        if (datas["yjyg"] !== null) {
                            title = `
                                <p data-lfd="data-otc-lfd-title">
                                    业绩预告 (报告期
                                    <span>${datas["yjyg"].bgq}</span>, 披露日期
                                    <span>${datas["yjyg"].plrq}</span>)
                                </p>
                                <p>
                                    [${datas["yjyg"].ggrq}] ${datas["yjyg"].ygyw}
                                </p>
                            `;
                        }else{
                            title = `
                                <p data-lfd="data-otc-lfd-title">业绩预告</>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                        }
                        if (datas["yjkb"] !== null) {
                            td_title1 = `
                                业绩快报 (报告期<span data-title-span="td-colspan-span">${datas["yjkb"].bgq}</span>, 披露日期<span data-title-span="td-colspan-span">${datas["yjkb"].plrq}</span>)
                            `;
                            // const ui_tds1 = Object.keys(json.yjkb);
                            const ui_tds1 = ["yysr", "yysrzz", "zczj", "yylr", "jbmgsy", "jzc", "lrze", "jzcsyljq", "mgjzc", "jlr", "jlrtbzz", "xjllje"]
                            for (let i = 0; i < 12; i++) {
                                let k = ui_tds1[i];
                                tds[i].innerText = `${datas["yjkb"][k]}`;
                            }
                        }else{
                            // td_title1 = `
                            //     <p>业绩快报-暂无数据.</p>
                            // `;
                            td_title1 = `
                                <p data-lfd="none-lfd-p">业绩快报</p>
                                <p data-none="no-data-p" data-lfd="none-lfd-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            for (let i = 0; i < 12; i++) {
                                tds[i].parentElement.setAttribute(`data-display`, "display-none");
                                // tds[0].parentElement; / tds[0].parentNode;
                            }
                        }
                        // tds & values === 0-11 & 12-34
                        if (datas["cwzy"] !== null) {
                            td_title2 = `
                                <span>财务数据摘要</span>
                                <span data-title-span="td-colspan-span">(${datas["cwzy"].bgq})</span>
                            `;
                            const ui_tds2 = ["jbmgsy", "yysr", "zczj", "xsmgsy", "yylr", "fzzj", "mgsykc", "lrze", "mgjzc", "jzc", "jlr", "llje", "mgllje", "jlrkc", "zzctbzz", "jzcsyljq", "yysrtbzz", "xsmll", "kcjq", "jlrtbzz", "zcfzl"];
                            // (tds.length - 1) && no tfoot!
                            for (let i = 12; i < tds.length - 1; i++) {
                                let k = ui_tds2[i - 12];
                                tds[i].innerText = `${datas["cwzy"][k]}`;
                            }
                        }else{
                            // no data
                            // td_title2 = `
                            //     <p>财务数据摘要-暂无数据.</p>
                            // `;
                            td_title2 = `
                                <p data-lfd="data-otc-lfd-title">财务数据</>
                                <p data-none="no-data-p">
                                    <span data-none="no-data-span"></span>
                                </p>
                            `;
                            for (let i = 12; i < tds.length; i++) {
                                tds[i].parentNode.setAttribute(`data-display`, "display-none");
                            }
                        }
                        // insert DOM
                        titles[0].insertAdjacentHTML(`beforeend`, title);
                        titles[1].insertAdjacentHTML(`beforeend`, td_title1);
                        titles[2].insertAdjacentHTML(`beforeend`, td_title2);
                    }else{
                        let message = `handle json error!`,
                            fileName = `latest-financial-data.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/**/otc-f9/modules/latest-financial-data.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-latest-financial-data"]`);
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


OTC_F9_FV.Modules.latestFinancialData.init = OTC_F9_FV.Modules.latestFinancialData.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast04/`,
            gilcode: `430002.OC`
        }
    ) => {
        // let url = `http://10.1.5.202/JSON/otc-f9/4.json`,
        let url = `${ip}${path}${socket}${gilcode}`,
            tds = document.querySelectorAll(`[data-value="data-otc-LFD"]`),
            titles = document.querySelectorAll(`[data-titles="data-otc-LFD-title"]`);
        OTC_F9_FV.Modules.latestFinancialData(url, tds, titles, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    // OTC_GILCODE = window.OTC_GILCODE || `832159.OC`;// 业绩快报
    // OTC_GILCODE = window.OTC_GILCODE || `400066.OC`;// 业绩预告
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

/*
    http://10.1.5.202/webservice/fastview/otcper/otcperfast04/400066.OC
    http://10.1.5.202/webservice/fastview/otcper/otcperfast04/832159.OC
*/

OTC_F9_FV.Modules.latestFinancialData.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast04/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.latestFinancialData.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast04/430002.OC`;



/*

<div data-div="tbody-div" data-titles="data-otc-LFD-title">
    <p data-p="data-otc-LFD-title">
        报告期内十大股东合计持股位股东有减持行为.
    </p>
</div>

div[data-titles="data-otc-LFD-title"] {
    box-sizing: border-box;
    background: #fffce9;
    border: 1px solid #d7dbe0;
    line-height: 23px;
    font-size: 12px;
    width: 100%;
    margin-bottom: 10px;
    padding-left: 0;
}

div[data-div="tbody-div"]>p:nth-of-type(1) {
    color: #616a87;
    font-size: 12px;
}


*/
