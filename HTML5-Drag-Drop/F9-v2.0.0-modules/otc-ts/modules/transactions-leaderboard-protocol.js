"use strict";

/**
 * @namespace OTC_TS_FV : OTC Thematic Statistics
 * @name transactions-leaderboard-protocol 交易排行榜-协议
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* String} uid
 * @param {* Boolean} debug
 */


import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";


// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};

// transactionsLeaderboardProtocol
OTC_TS_FV.Modules.transactionsLeaderboardProtocol = OTC_TS_FV.Modules.transactionsLeaderboardProtocol || ((url = ``, uid = ``, debug = false) => {
    let result = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            // emptyChecker
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
            if (debug) {
                console.log(`json = \n`, json);
                console.log(`keys = \n`, Object.keys(json));
            }
            try {
                if (emptyChecker(json) & Object.keys(json).length > 0) {
                    let data_protocol = json || [];
                    // reusable dataHandler
                    const dataHandler = (arr = []) => {
                        if (debug) {
                            console.log(`arr = \n`, arr);
                            console.log(`arr keys = \n`, Object.keys(arr[0]));
                        }
                        let ranking_code = [],
                            ranking_brief = [],
                            ranking_amplitude = [],
                            ranking_amount = [];
                        // sort ???
                        arr.map(
                            (obj, i) => {
                                if (debug && (i === 0)) {
                                    console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                                }
                                // ["zqdm", "zqjc", "zdf", "cje"]
                                ranking_code.push(obj["zqdm"]);
                                ranking_brief.push(obj["zqjc"]);
                                ranking_amplitude.push(obj["zdf"]);
                                ranking_amount.push(obj["cje"]);
                            }
                        );
                        const new_obj = {
                            ranking_code,
                            ranking_brief,
                            ranking_amplitude,
                            ranking_amount
                        };
                        if (debug) {
                            console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                        }
                        return new_obj;
                    };
                    let obj_protocol = dataHandler(data_protocol) || {};
                    if (debug) {
                        // console.log(`obj_protocol = \n`, obj_protocol);
                        console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                    }
                    // Object.assign(result, obj_protocol);
                    // if (debug) {
                    //     console.log(`result_obj = \n`, JSON.stringify(result, null, 4));
                    // }
                    OTC_TS_FV.Modules.transactionsLeaderboardProtocol.showTable(obj_protocol, uid, false);
                }else{
                    // no data
                }
            } catch (error) {
                console.log(`json error = \n`, error);
            }
        }
    )
    .catch(error => console.log(`fetch error = \n`, error));
    // return result_obj;
});

// transactionsLeaderboardProtocol.showTable
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.showTable = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.showTable || (
    (datas = {}, uid = ``, debug = false) => {
        if (debug) {
            console.log(`datas = \n`, JSON.stringify(datas, null, 4));
            console.log(`uid = \n`, uid);
        }
        let xyz_tbody = document.querySelector(uid);
        const {
            ranking_code,
            ranking_brief,
            ranking_amplitude,
            ranking_amount
        } = datas;
        // re-order & sort ???
        let order_arr = [
            ranking_code,
            ranking_brief,
            ranking_amplitude,
            ranking_amount
        ];
        let trs = xyz_tbody.querySelectorAll(`[data-table-tbody-tr="otc-table-tbody-tr-transactions-leaderboard-protocol"]`);
        if (debug) {
            console.log(`trs = \n`, trs);
            console.log(`trs[0] = \n`, trs[0]);
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = trs[i].querySelectorAll(`[data-td-value="otc-td-value"]`);
            if (debug) {
                console.log(`tds = \n`, tds);
                console.log(`tds[0] = \n`, tds[0]);
                console.log(`tds[1] = \n`, tds[1]);
                console.log(`tds[2] = \n`, tds[2]);
                console.log(`tds[3] = \n`, tds[3]);
            }
            tds[0].innerHTML = order_arr[0][i];
            tds[1].innerHTML = order_arr[1][i];
            tds[2].innerHTML = order_arr[2][i];
            tds[3].innerHTML = order_arr[3][i];
            // tds[x].insertAdjacentElemenHTML(`beforeend`, `html string`);
        }
    }
);

// init
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init || (
    (
        {
            ip,
            path,
            socket,
            skin,
            // gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/otcfast03`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        // let url = `${ip}${path}${socket}`,
        let url = `http://10.1.5.202/otc/ts/json/03.json`,// no data?
        // let url = `http://10.1.5.202/otc/ts/json/03-old.json`,
            uid = `[data-table-protocol="otc-table-body-transactions-leaderboard-protocol"]`;
        // url = `http://10.1.5.202/webservice/fastview/otc/otcfast03/`;
        OTC_TS_FV.Modules.transactionsLeaderboardProtocol(url, uid, false);
        // 备注：在涨跌幅和成交额做个可以自动排序的功能。
        // 排行榜协议 otcfast03
    }
);

// OTC_SKIN ???
var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast03`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});


// 13

/*

// Utils
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.Utils = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.Utils || {};
// Utils & reusable dataHandler
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.Utils.dataHandler = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.Utils.dataHandler || (
    (arr = []) => {
        if (debug) {
            console.log(`arr = \n`, arr);
            console.log(`arr keys = \n`, Object.keys(arr[0]));
        }
        let ranking_code = [],
            ranking_brief = [],
            ranking_amplitude = [],
            ranking_amount = [];
        arr.map(
            (obj, i) => {
                if (debug && (i === 0)) {
                    console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                }
                // ["zqdm", "zqjc", "zdf", "cje"]
                ranking_code.push(obj["zqdm"]);
                ranking_brief.push(obj["zqjc"]);
                ranking_amplitude.push(obj["zdf"]);
                ranking_amount.push(obj["cje"]);
            }
        );
        const new_obj = {
            ranking_code,
            ranking_brief,
            ranking_amplitude,
            ranking_amount
        };
        if (debug) {
            console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
        }
        return new_obj;
    }
);


*/


// 备注：在涨跌幅和成交额做个可以自动排序的功能。
