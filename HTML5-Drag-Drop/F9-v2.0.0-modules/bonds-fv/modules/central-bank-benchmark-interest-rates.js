"use strict";

/**
 * @name central-bank-benchmark-interest-rates 央行基准利率
 * @author xgqfrms
 * creadted 2018.01.23
 * @param {String} url
 * @param {Array} ui_arr
 * @param {String} table_uid
 * @param {Boolean} debug
 */

// import {getFullTodayDate as fullToday} from "./full-today";

// import {UserException} from "../utils/throw_error";
// import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};

// centralBankBenchmarkIR
OTC_F9_FV.Modules.centralBankBenchmarkIR = OTC_F9_FV.Modules.centralBankBenchmarkIR || (
    (url = ``, ui_arr = [], table_uid = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`fetched json =\n`, json);
                }
                const emptyChecker = (key = ``) => {
                    let result = true;
                    switch (key) {
                        case ``:
                            result = false;
                            break;
                        case `--`:
                            result = false;
                            break;
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        default:
                            break;
                    }
                    return result;
                };
                try {
                    // ignore Array/Object
                    if (emptyChecker(json)) {
                        // Object
                        if (Object.keys(json).length > 0) {
                            // Object
                            if (emptyChecker(json)) {
                                let tds = document.querySelectorAll(`[data-value="data-otc-CBBIR"]`),
                                    date = document.querySelector(`[data-time="otc-central-bank-benchmark-interest-rates-time"]`),
                                    time = (json[0].rq !== undefined) ? json[0].rq : `--`,
                                    values = [];
                                for (let i = 0; i < json.length; i++) {
                                    let zx = (json[i].zx !== undefined) ? json[i].zx : `--`,
                                        rjz5 = (json[i].rjz5 !== undefined) ? json[i].rjz5 : `--`,
                                        rjz10 = (json[i].rjz10 !== undefined) ? json[i].rjz10 : `--`,
                                        rjz20 = (json[i].rjz20 !== undefined) ? json[i].rjz20 : `--`;
                                    // by order
                                    values.push(zx);
                                    values.push(rjz5);
                                    values.push(rjz10);
                                    values.push(rjz20);
                                }
                                date.insertAdjacentHTML(`beforeend`, `(${time})`);
                                for (let i = 0; i < tds.length; i++) {
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-central-bank-benchmark-interest-rates"]`;
                                const none_div = document.querySelector(uid);
                                none_div.dataset.none = "no-data-div-visible";
                                // tbody
                                const tbody = document.querySelector(tbody_uid);
                                tbody.dataset.none = "no-data-div-hidden";
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `central-bank-benchmark-interest-rates.js`,
                                lineNumber = 29;
                            // throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let uid = `[data-none-uid="otc-central-bank-benchmark-interest-rates"]`;
                        const none_div = document.querySelector(uid);
                        none_div.dataset.none = "no-data-div-visible";
                        // no data
                        const table_div = document.querySelector(table_uid);
                        table_div.dataset.none = "no-data-div-hidden";
                    }
                } catch (err) {
                    let url =`file:///E:/**/bonds-fv/modules/central-bank-benchmark-interest-rates.js`;
                    // ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        /*
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-central-bank-benchmark-interest-rates-data"]`);
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
        */
    }
);



OTC_F9_FV.Modules.centralBankBenchmarkIR.init = OTC_F9_FV.Modules.centralBankBenchmarkIR.init || (
    (
        {
            ip,
            path,
            uid,
            compare,
            date,
            skin,
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/bond/rate`,
            uid: `bondratefast13`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/13.json`,
        let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
            table_uid = `.otc-central-bank-benchmark-interest-rates-table`,
            ui_arr = ["hq", "y5ysG", "m3", "y5yxG", "m6", "m6yn", "y1", "m6y1", "y2", "y1y3", "y3", "y3y5", "y5", "y5ys", "ztxll", "m6Z", "d20", "y1Z", "m3Z"];
        OTC_F9_FV.Modules.centralBankBenchmarkIR(url, ui_arr, table_uid, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || ``,
    OTC_DATE = window.OTC_DATE || ``,
    // OTC_DATE = window.OTC_DATE || fullToday(),// default today!
    OTC_SKIN = window.OTC_SKIN || `white`;
    // OTC_SKIN = window.OTC_SKIN || `black`;

OTC_F9_FV.Modules.centralBankBenchmarkIR.init({
    ip: OTC_IP,
    path: OTC_PATH,
    uid: `bondratefast13`,
    compare: OTC_COMPARE,
    date: OTC_DATE,
    skin: OTC_SKIN,
});

// OTC_F9_FV.Modules.centralBankBenchmarkIR.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast13","Compare":"","CompareDate":""}`;

