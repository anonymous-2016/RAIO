"use strict";

/**
 * @name big-event-reminder 大事提醒
 * @author xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* Array} tds
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
    (url = ``, tds = [], debug = false) => {
        let datas = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (Array.isArray(datas) && datas.length > 0) {
                        for (let i = 0; i < tds.length - 1; i++) {
                            let key = (datas[i] !== undefined && datas[i]["k"] !== undefined) ? datas[i]["k"] : `--`,
                                value = (datas[i] !== undefined && datas[i]["v"] !== undefined)
                                ?
                                (datas[i]["v"] !== "" ? datas[i]["v"].replace(/【/ig, "[ ").replace(/】/ig, " ] ") : `--`)
                                :
                                `--`;
                            switch (i) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    tds[i].innerText = value;
                                    tds[i].setAttribute(`title`, value);
                                    break;
                                default:
                                    tds[i].innerText = value;
                                    tds[i].setAttribute(`title`, value);
                                    break;
                            }
                        }
                    }else{
                        let message = `handle json error!`,
                            fileName = `big-event-reminder.js`,
                            lineNumber = 29;
                        throw new UserException(message, fileName, lineNumber);
                    }
                } catch (err) {
                    let url =`file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/otc-f9/modules/big-event-reminder.js`;
                    ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
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
        let url = `${ip}${path}${socket}${gilcode}`,
            tds = document.querySelectorAll(`[data-value="data-otc-BER"]`);
        OTC_F9_FV.Modules.bigEventReminder(url, tds, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.bigEventReminder.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast02/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.bigEventReminder.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast02/430002.OC`;

