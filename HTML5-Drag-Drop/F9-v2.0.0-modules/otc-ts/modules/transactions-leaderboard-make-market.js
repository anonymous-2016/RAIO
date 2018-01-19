"use strict";

/**
 * @namespace OTC_TS_FV : OTC Thematic Statistics
 * @name transactions-leaderboard-make-market 交易排行榜-做市
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

// transactionsLeaderboardMakeMarket
OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket = OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket || ((url = ``, uid = ``, debug = false) => {
    let result_obj = {};
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
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    console.log(`keys = \n`, Object.keys(json));
                }
                let data_market = json["zs"] || [],
                    data_protocol = json["xy"] || [];
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
                let obj_market = dataHandler(data_market) || {},
                    obj_protocol = dataHandler(data_protocol) || {};
                if (debug) {
                    console.log(`obj_market = \n`, obj_market);
                    console.log(`obj_protocol = \n`, obj_protocol);
                    // console.log(`obj_market = \n`, JSON.stringify(obj_market, null, 4));
                    // console.log(`obj_protocol = \n`, JSON.stringify(obj_protocol, null, 4));
                }
                Object.assign(result_obj, {obj_market, obj_protocol});
                if (debug) {
                    console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                }
                /*
                    const uids = {
                        "market_uid": `[data-table-market="ntb-table-body-transactions-leaderboard"]`,
                        "protocol_uid": `[data-table-protocol="ntb-table-body-transactions-leaderboard"]`
                    };
                    let market_tbody = document.querySelector(uids.market_uid);
                    let protocol_tbody = document.querySelector(uids.protocol_uid);
                    let xxx_tbody = document.querySelector(uids.xxx_uid);
                */
                // ??? this.uids ???
                let market_uid = uids.market_uid,
                    protocol_uid = uids.protocol_uid;
                // result_obj ??? no need
                OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.showTable(obj_market, market_uid, false);
                OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.showTable(obj_protocol, protocol_uid, false);
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});

// transactionsLeaderboardMakeMarket.showTable
OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.showTable = OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.showTable || (
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
        // re-order
        let order_arr = [
            ranking_code,
            ranking_brief,
            ranking_amplitude,
            ranking_amount
        ];
        let trs = xyz_tbody.querySelectorAll(`[data-table-tbody-tr="ntb-table-tbody-tr-transactions-leaderboard"]`);
        if (debug) {
            console.log(`trs = \n`, trs);
            console.log(`trs[0] = \n`, trs[0]);
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = trs[i].querySelectorAll(`[data-td-value="ntb-td-value"]`);
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
        }
    }
);



// init
OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.init = OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.init || (
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
            socket: `/otcfast13`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `http://10.1.5.202/otc/ts/json/13.json`,// no data?
        // let url = `http://10.1.5.202/otc/ts/json/03-old.json`,
            uid = `[data-table-market="ntb-table-body-transactions-leaderboard"]`;
        // url = `http://10.1.5.202/webservice/fastview/otc/otcfast13/`;
        OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket(url, uid, false);
        // 备注：在涨跌幅和成交额做个可以自动排序的功能。
        // 排行榜做市 otcfast13
    }
);

// OTC_SKIN ???
var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

OTC_TS_FV.Modules.transactionsLeaderboardMakeMarket.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast13`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});
