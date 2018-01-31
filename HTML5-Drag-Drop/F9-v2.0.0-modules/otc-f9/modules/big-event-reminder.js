"use strict";

/**
 * @name big-event-reminder 大事提醒
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* Array} tds
 * @param {* String} tbd
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.bigEventReminder = OTC_F9_FV.Modules.bigEventReminder || (
    (url = ``, tbd = ``, debug = false) => {
        let datas = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (Object.keys(datas).length > 0) {
                        if (Array.isArray(datas) && datas.length > 0) {
                            if (Object.keys(datas[0]).length > 0 && typeof(datas[0]) === "object") {
                                let tbody = ``;
                                for (let i = 0; i < datas.length; i++) {
                                    let key = (datas[i] !== undefined && datas[i]["k"] !== undefined) ? datas[i]["k"] : `--`,
                                        value = (datas[i] !== undefined && datas[i]["v"] !== undefined)
                                        ?
                                        (datas[i]["v"] !== "" ? datas[i]["v"].replace(/【/ig, "[ ").replace(/】/ig, " ] ") : `--`)
                                        :
                                        `--`;
                                    // switch (i) {
                                    //     case 0:
                                    //     case 1:
                                    //     case 2:
                                    //     case 3:
                                    //         tds[i].innerText = value;
                                    //         tds[i].setAttribute(`title`, value);
                                    //         break;
                                    //     default:
                                    //         tds[i].innerText = value;
                                    //         tds[i].setAttribute(`title`, value);
                                    //         break;
                                    // }
                                    tbody += `
                                        <tr class="otc-big-event-reminder-table-tr">
                                            <td class="otc-big-event-reminder-table-td-key" data-alias="${key}">
                                                ${key}
                                            </td>
                                            <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER" title="${value}">
                                                ${value}
                                            </td>
                                        </tr>
                                    `;
                                }
                                tbd.insertAdjacentHTML(`beforeend`, tbody);
                            }else{
                                let no_data = `
                                    <p data-none="no-data-p">
                                        <span data-none="no-data-span"></span>
                                    </p>
                                `;
                                tbd.insertAdjacentHTML(`beforeend`, no_data);
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `big-event-reminder.js`,
                                lineNumber = 29;
                            throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let no_data = `
                            <p data-none="no-data-p">
                                <span data-none="no-data-span"></span>
                            </p>
                        `;
                        tbd.insertAdjacentHTML(`beforeend`, no_data);
                    }
                } catch (err) {
                    let url =`file:///E:/**/otc-f9/modules/big-event-reminder.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-big-event-reminder-data"]`);
            if (debug) {
                console.log(`turn_to_uids = \n`, turn_to_uids);
            }
            if (turn_to_uids.length > 0) {
                for (let i = 0; i < turn_to_uids.length; i++) {
                    turn_to_uids[i].addEventListener(`click`, (e) => {
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
                }
            }else{
                throw new Error(`turn_to_uids is `, turn_to_uids);
            }
        }, 0);
    }
);


OTC_F9_FV.Modules.bigEventReminder.init = OTC_F9_FV.Modules.bigEventReminder.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast02/`,
            gilcode: `430002.OC`
        }
    ) => {
        // let url = `http://10.1.5.202/JSON/otc-f9/2.json`,
        let url = `${ip}${path}${socket}${gilcode}`,
            tbd = document.querySelector(`[data-tbody="otc-big-event-reminder-table-tbody"]`);
            // tds = document.querySelectorAll(`[data-value="data-otc-BER"]`);
        OTC_F9_FV.Modules.bigEventReminder(url, tbd, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.bigEventReminder.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast02/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.bigEventReminder.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast02/430002.OC`;

