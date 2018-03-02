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

import {exportExcel as exportExcelPlugin} from "./export-excel";

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
                        if (!Array.isArray(json)) {
                            // Object
                            if (Object.keys(json).length > 0) {
                                let tds = document.querySelectorAll(`[data-value="data-otc-CBBIR"]`),
                                    // date = document.querySelector(`[data-time="otc-central-bank-benchmark-interest-rates-time"]`),
                                    // time = (json[0].rq !== undefined) ? json[0].rq : `--`,
                                    // date.insertAdjacentHTML(`beforeend`, `(${time})`);
                                    keys = Object.keys(json),
                                    values = [];
                                // console.log(`ui_arr =`, ui_arr);
                                // console.log(`keys =`, keys);
                                ui_arr.map(
                                    (key, index) => {
                                        for (let i = 0; i < keys.length; i++) {
                                            if (key === keys[i]) {
                                                // console.log(`obj =`, key);
                                                // console.log(`keys[i] =`, keys[i]);
                                                let value = (json[key] !== undefined) ? json[key] : `--`;
                                                // by order
                                                values.push(value);
                                            }
                                        }
                                    }
                                );
                                for (let i = 0; i < (tds.length - 1); i++) {
                                    // empty & reset
                                    tds[i].innerHTML = "";
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                                // export excel ??? extract to init module
                                setTimeout((debug = false) => {
                                    let export_excel_a = document.querySelector(`[data-excel="otc-central-bank-benchmark-interest-rates-excel"]>a`);
                                    if (export_excel_a !==null) {
                                        const printExcel = (debug = false) => {
                                            let table_uid = export_excel_a.dataset.excel,
                                                table_title = export_excel_a.dataset.title;
                                            try {
                                                exportExcelPlugin(`.${table_uid}`, `${table_title}`);
                                            } catch (error) {
                                                console.log(`excel error =`, error);
                                            }
                                        };
                                        let hasAddClick = (export_excel_a.dataset.click === "true")? true : false;
                                        // once & bug
                                        if (!hasAddClick) {
                                            export_excel_a.addEventListener(`click`, printExcel);
                                            export_excel_a.dataset.click = "true";
                                        } else {
                                            // console.log(`excel addEventListener error =`, `\n no need addEventListener any more!`);
                                        }
                                    } else {
                                        console.log(`%c excel table\n`, `color: red;`, `addEventListener target is null!`);
                                    }
                                }, 0);
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-central-bank-benchmark-interest-rates"]`;
                                const none_div = document.querySelector(uid);
                                none_div.dataset.none = "no-data-div-visible";
                                // table
                                const table = document.querySelector(table_uid);
                                table.dataset.none = "no-data-div-hidden";
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
        .catch((err) => {
            console.log(`fetch error = \n`, err);
            // no data & fetch error handler
            let uid = `[data-none-uid="otc-central-bank-benchmark-interest-rates"]`;
            const none_div = document.querySelector(uid);
            none_div.dataset.none = "no-data-div-visible";
            // no data
            const table_div = document.querySelector(table_uid);
            table_div.dataset.none = "no-data-div-hidden";
        });
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
            // uid,
            compare,
            date,
            skin,
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/bond/rate`,
            // uid: `bondratefast13`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/13.json`,
        // let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
        const uid = `bondratefast13`;
        let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}"${(compare === "2") ? `,"CompareDate":"${date}"` : ``}}`,
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
    OTC_INIT = window.OTC_INIT || true,
    OTC_SKIN = window.OTC_SKIN || `white`;
    // OTC_SKIN = window.OTC_SKIN || `black`;

// OTC_F9_FV.Modules.centralBankBenchmarkIR.init({
//     ip: OTC_IP,
//     path: OTC_PATH,
//     uid: `bondratefast13`,
//     compare: OTC_COMPARE,
//     date: OTC_DATE,
//     skin: OTC_SKIN,
// });

if (OTC_INIT === true) {
    // self init
    // OTC_COMPARE = "0";
    OTC_F9_FV.Modules.centralBankBenchmarkIR.init();
}else{
    // relaod module
}

const centralBankBenchmarkIR = OTC_F9_FV.Modules.centralBankBenchmarkIR;

export default centralBankBenchmarkIR;
export {centralBankBenchmarkIR};

// OTC_F9_FV.Modules.centralBankBenchmarkIR.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast13","Compare":"","CompareDate":""}`;

