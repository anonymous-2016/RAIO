"use strict";

/**
 * @name bills-directly-indirect-subsidy-interest-rates Shibor
 * @author xgqfrms
 * creadted 2018.01.23
 * @param {* String} url
 * @param {* Array} ui_arr
 * @param {* String} table_uid
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

// shiborInterbankDismantleBIR
OTC_F9_FV.Modules.shiborInterbankDismantleBIR = OTC_F9_FV.Modules.shiborInterbankDismantleBIR || (
    (url = ``, ui_arr = ``, table_uid = ``, debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`fetched json =\n`, json);
                }
                try {
                    // ignore Array/Object
                    if (Object.keys(json).length > 0) {
                        // Array
                        if (Array.isArray(json)) {
                            // Object
                            if (Object.keys(json[0]).length > 0) {
                                let tds = document.querySelectorAll(`[data-value="data-otc-BDISIR"]`),
                                    date = document.querySelector(`[data-time="otc-bills-directly-indirect-subsidy-interest-rates-time"]`),
                                    time = (json[0].rq !== undefined) ? json[0].rq : `--`,
                                    values = [];
                                ui_arr.map(
                                    (key) => {
                                        for (let i = 0; i < json.length; i++) {
                                            let llmc = (json[i].llmc !== undefined) ? json[i].llmc : `--`,
                                                ll = (json[i].ll !== undefined) ? json[i].ll : `--`;
                                            // by order
                                            // values.push(llmc);
                                            if (key === llmc) {
                                                values.push(ll);
                                            }
                                        }
                                    }
                                );
                                date.insertAdjacentHTML(`beforeend`, time);
                                for (let i = 0; i < tds.length; i++) {
                                    tds[i].insertAdjacentHTML(`beforeend`, values[i]);
                                }
                            }else{
                                // no data
                                let uid = `[data-none-uid="otc-bills-directly-indirect-subsidy-interest-rates"]`;
                                const none_div = document.querySelector(uid);
                                // const none_div = document.querySelector(`[data-none-uid="otc-bills-directly-indirect-subsidy-interest-rates"]`);
                                none_div.dataset.none = "no-data-div-visible";
                                // table
                                // const table = document.querySelector(`.otc-bills-directly-indirect-subsidy-interest-rates-table`);
                                // table.dataset.none = "no-data-div-hidden";
                                // const tbody = document.querySelector(`.otc-bills-directly-indirect-subsidy-interest-rates-table-tbody`);
                                const tbody = document.querySelector(tbody_uid);
                                tbody.dataset.none = "no-data-div-hidden";
                            }
                        }else{
                            let message = `handle json error!`,
                                fileName = `bills-directly-indirect-subsidy-interest-rates.js`,
                                lineNumber = 29;
                            // throw new UserException(message, fileName, lineNumber);
                        }
                    } else {
                        // no data
                        let uid = `[data-none-uid="otc-bills-directly-indirect-subsidy-interest-rates"]`;
                        const none_div = document.querySelector(uid);
                        none_div.dataset.none = "no-data-div-visible";
                        // no data
                        const table_div = document.querySelector(table_uid);
                        table_div.dataset.none = "no-data-div-hidden";
                    }
                } catch (err) {
                    let url =`file:///E:/**/bonds-fv/modules/bills-directly-indirect-subsidy-interest-rates.js`;
                    // ConsoleError(err, url);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        // return datas;
        // more
        /*
        setTimeout((debug = false) => {
            let turn_to_uids = document.querySelectorAll(`[data-turn-to-uid="node-uid-bills-directly-indirect-subsidy-interest-rates-data"]`);
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



OTC_F9_FV.Modules.shiborInterbankDismantleBIR.init = OTC_F9_FV.Modules.shiborInterbankDismantleBIR.init || (
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
            uid: `bondratefast16`,
            compare: OTC_COMPARE,
            date: OTC_DATE,
            skin: OTC_SKIN,
        }
    ) => {
        // let url = `http://10.1.5.202/json/bonds/12.json`,
        let url = `${ip}${path}?{"ModelId":"${uid}","Compare":"${compare}","CompareDate":"${date}"}`,
            table_uid = `.otc-bills-directly-indirect-subsidy-interest-rates-table`,
            ui_arr = ["不限", "珠三角", "长三角", "中西部", "环渤海"];
            // fixed_ui_arr = ["转贴-6M", "珠三角6M", "长三角6M", "中西部6M", "环渤海6M"];
        OTC_F9_FV.Modules.shiborInterbankDismantleBIR(url, ui_arr, table_uid, false);
    }
);


var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || ``,
    OTC_DATE = window.OTC_DATE || ``,
    // OTC_DATE = window.OTC_DATE || fullToday(),// default today!
    OTC_SKIN = window.OTC_SKIN || `white`;
    // OTC_SKIN = window.OTC_SKIN || `black`;

OTC_F9_FV.Modules.shiborInterbankDismantleBIR.init({
    ip: OTC_IP,
    path: OTC_PATH,
    uid: `bondratefast16`,
    compare: OTC_COMPARE,
    date: OTC_DATE,
    skin: OTC_SKIN,
});

// OTC_F9_FV.Modules.shiborInterbankDismantleBIR.init();
// const url = `http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast16","Compare":"","CompareDate":""}`;

