"use strict";

/**
 * @name latest-transaction-data 最新交易数据
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


OTC_F9_FV.Modules.latestTransactionData = OTC_F9_FV.Modules.latestTransactionData || (
    (url = ``, tds = [], title = ``, ui_arr = [], debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (typeof(datas) === "object") {
                        if (Object.keys(datas).length > 0) {
                            for (let i = 0; i < tds.length - 1; i++) {
                                let key = ui_arr[i],
                                    value = (datas[key] !== `--` ? datas[key] : 0);
                                tds[i].innerText = value;
                                tds[i].setAttribute(`title`, value);
                            }
                            let title_key = ui_arr[tds.length - 1],
                                title_value = (datas[title_key] !== `--` ? datas[title_key] : 0);
                            title.innerText = title_value || `暂无数据`;
                        } else {
                            // no data
                            // ??? table, no value => no key!
                            // http://10.1.5.202/webservice/fastview/otcper/otcperfast01/834380.OC
                        }
                    }else{
                        let message = `handle json error!`,
                            fileName = `latest-transaction-data.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/**/otc-f9/modules/latest-transaction-data.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // turn to node
        setTimeout((debug = false) => {
            let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-latest-transaction-data"]`);
            // let turn_to_uids = document.querySelectorAll(`a[node-uid-latest-transaction-data]`);
            if (debug) {
                console.log(`turn_to_uid = \n`, turn_to_uid);
            }
            // console.log(`turn_to_uid = \n`, turn_to_uid);
            turn_to_uid.addEventListener(`click`, (e) => {
                let uid = e.target.dataset.uid,
                    gilcode = OTC_GILCODE,
                    node_path = `12\\${gilcode}\\${uid}`;
                // console.log(`node path`, node_path);
                // 跳转 otc f9 深度资料的命令：
                // ChromeExternal.Execute("ExecuteCommand", "命令ID\\证券代码\\节点ID");
                // \ 反斜线要转义！
                try {
                    if (uid !== "null") {
                        ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                        // ChromeExternal.Execute("ExecuteCommand", `12\\${window.OTC_GILCODE}\\${uid}`);
                        // ChromeExternal.Execute("ExecuteCommand", `12\\600570.SH\\${uid}`);
                    }else{
                        console.log(`ChromeExternal & ${uid} === null\n`);
                    }
                    // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
                    // \ 反斜线要转义！
                } catch (error) {
                    console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                }
            });
        }, 0);
        return datas;
    }
);


OTC_F9_FV.Modules.latestTransactionData.init = OTC_F9_FV.Modules.latestTransactionData.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast01/`,
            gilcode: `430002.OC`
        }
    ) => {
        // let url = `http://10.1.5.202/JSON/otc-f9/1.json`,
        let url = `${ip}${path}${socket}${gilcode}`,
            tds = document.querySelectorAll(`[data-value="data-otc-LTD"]`),
            title = document.querySelector(`[data-text="otc-latest-transaction-data-text"]`);
        // copy(Object.keys(json));
        const ui_arr = ["spj", "zsz", "zdf", "ltsz", "cjl", "sylttm", "hsl", "syllyr", "cje", "sjllyr", "rq"];
        OTC_F9_FV.Modules.latestTransactionData(url, tds, title, ui_arr, false);
    }
);

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;


OTC_F9_FV.Modules.latestTransactionData.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast01/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.latestTransactionData.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast01/430002.OC`;

