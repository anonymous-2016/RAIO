"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name transactions-leaderboard 交易排行榜-做市 & 交易排行榜-协议
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* Boolean} debug
 */

// namespaces
var NSB_TS_FV = NSB_TS_FV || {};

// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};
// transactionsLeaderboard
NSB_TS_FV.Modules.transactionsLeaderboard = NSB_TS_FV.Modules.transactionsLeaderboard || (() => {});

// Utils
NSB_TS_FV.Modules.Utils = NSB_TS_FV.Modules.Utils || {};
// sub Utils
NSB_TS_FV.Modules.transactionsLeaderboard.Utils = NSB_TS_FV.Modules.transactionsLeaderboard.Utils || {};

// Utils & reusable dataHandler
NSB_TS_FV.Modules.transactionsLeaderboard.Utils.dataHandler = NSB_TS_FV.Modules.transactionsLeaderboard.Utils.dataHandler || (
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



/*

// Utils
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.Utils = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.Utils || {};
// Utils & reusable dataHandler
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.Utils.dataHandler = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.Utils.dataHandler || (
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


/*



// turnoverTrendProtocolDiagram.showTable
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable || (
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
        let trs = xyz_tbody.querySelectorAll(`[data-table-tbody-tr="ntb-table-tbody-tr-turnover-trend-protocol-diagram"]`);
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

*/
