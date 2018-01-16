"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name turnover-trend-protocol-diagram 成交走势-协议
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
// turnoverTrendProtocolDiagram
NSB_TS_FV.Modules.turnoverTrendProtocolDiagram = NSB_TS_FV.Modules.turnoverTrendProtocolDiagram || ((url = ``, uids = {}, debug = false) => {
    let result_obj = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
                if (debug) {
                    console.log(`json = \n`, json);
                    console.log(`keys = \n`, Object.keys(json));
                }
                let data_market = json[ "zs"] || [],
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
                        "market_uid": `[data-table-market="ntb-table-body-turnover-trend-protocol-diagram"]`,
                        "protocol_uid": `[data-table-protocol="ntb-table-body-turnover-trend-protocol-diagram"]`
                    };
                    let market_tbody = document.querySelector(uids.market_uid);
                    let protocol_tbody = document.querySelector(uids.protocol_uid);
                    let xxx_tbody = document.querySelector(uids.xxx_uid);
                */
                // ??? this.uids ???
                let market_uid = uids.market_uid,
                    protocol_uid = uids.protocol_uid;
                // result_obj ??? no need
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable(obj_market, market_uid, false);
                NSB_TS_FV.Modules.turnoverTrendProtocolDiagram.showTable(obj_protocol, protocol_uid, false);
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});
