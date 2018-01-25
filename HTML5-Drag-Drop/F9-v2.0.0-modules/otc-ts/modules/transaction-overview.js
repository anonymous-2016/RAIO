"use strict";

/**
 * @namespace OTC_TS_FV : New San Ban Thematic Statistics
 * @name transaction-overview 成交概况
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
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};
// transactionOverview
OTC_TS_FV.Modules.transactionOverview = OTC_TS_FV.Modules.transactionOverview || ((url = ``, debug = false) => {
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
            let date_title = document.querySelector(`[data-text="otc-transactions-leaderboard-all-text"]`);
            if (emptyChecker(json) & Object.keys(json).length > 0) {
                // ok
                // sj ???
                if (emptyChecker(json[0].sj)) {
                    date_title.innerHTML = `${json[0].sj}`;
                }else {
                    // no data
                    date_title.innerHTML = `--`;
                }
            } else {
                // no data
                date_title.innerHTML = `--`;
            }
            if (emptyChecker(json) & Object.keys(json).length > 0) {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                let data = json || [];
                const new_obj = {};
                // fixed order!
                const keys = ["total", "market", "protocol"];
                // let keys = Object.keys(data);
                // let transactions_number, rising_number, fell_number, trading_volume, turnover_volume, deals_number = [],
                let transactions_number = [],
                    rising_number = [],
                    fell_number = [],
                    trading_volume = [],
                    turnover_volume = [],
                    deals_number = [];
                // string bug ???
                // console.log(`data`, JSON.stringify(data, null, 4));
                data.map(
                    (obj, i) => {
                        let temp_obj = {};
                        let key = obj["mc"];
                        switch (key) {
                            case "合计":
                                temp_obj = obj;
                                Object.assign(new_obj, {"total": temp_obj});
                                break;
                            case "协议":
                                temp_obj = obj;
                                Object.assign(new_obj, {"protocol": temp_obj});
                                break;
                            case "做市":
                                temp_obj = obj;
                                Object.assign(new_obj, {"market": temp_obj});
                                break;
                            default:
                                break;
                        }
                        if (debug) {
                            console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                        }
                    }
                );
                if (debug) {
                    console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                    console.log(`keys`, JSON.stringify(keys, null, 4));
                }
                keys.map(
                    (key, i) => {
                        if (debug) {
                            console.log(`key, i =`, key, i);
                        }
                        // key in data ??? undefined
                        if (new_obj[key] !== undefined) {
                            (new_obj[key]["cjjs"] !== undefined) ? transactions_number.push(new_obj[key]["cjjs"]) : transactions_number.push(`--`);
                            (new_obj[key]["szjs"] !== undefined) ? rising_number.push(new_obj[key]["szjs"]) : rising_number.push(`--`);
                            (new_obj[key]["xdjs"] !== undefined) ? fell_number.push(new_obj[key]["xdjs"]) : fell_number.push(`--`);
                            (new_obj[key]["cjl"] !== undefined) ? trading_volume.push(new_obj[key]["cjl"]) : trading_volume.push(`--`);
                            (new_obj[key]["cje"] !== undefined) ? turnover_volume.push(new_obj[key]["cje"]) : turnover_volume.push(`--`);
                            (new_obj[key]["cjbs"] !== undefined) ? deals_number.push(new_obj[key]["cjbs"]) : deals_number.push(`--`);
                        } else {
                            transactions_number.push(`--`);
                            rising_number.push(`--`);
                            fell_number.push(`--`);
                            trading_volume.push(`--`);
                            turnover_volume.push(`--`);
                            deals_number.push(`--`);
                        }
                    }
                );
                result_obj = {
                    transactions_number,
                    rising_number,
                    fell_number,
                    trading_volume,
                    turnover_volume,
                    deals_number
                };
                if (debug) {
                    console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                }
            }else{
                // no data
            }
            // array
            OTC_TS_FV.Modules.transactionOverview.showTable(result_obj, false);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
    // more
    setTimeout((debug = false) => {
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-transaction-overview"]`);
        if (debug) {
            console.log(`turn_to_uid dom = \n`, turn_to_uid);
        }
        if (turn_to_uid !== null) {
            turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        topic_category  = e.target.dataset.topicCategory,// 专题分类名称常量
                        node_path = `13\\${topic_category}\\${uid}`;
                    try {
                        if (uid !== undefined && topic_category !== undefined) {
                            ChromeExternal.Execute("ExecuteCommand", node_path);
                            // ChromeExternal.Execute("ExecuteCommand", `13\\${topic_category}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal \nuid === ${uid} & topic_category === ${topic_category}`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                        console.log(`node uid = `, uid);
                        console.log(`node topic_category = `, topic_category);
                        console.log(`node node_path = `, node_path);
                    }
                });
        }else{
            // null
            throw new Error(`turn_to_uid dom is `, turn_to_uid);
        }
    }, 0);
});

// transactionOverview.showTable
OTC_TS_FV.Modules.transactionOverview.showTable = OTC_TS_FV.Modules.transactionOverview.showTable || (
    (datas = {}, debug = false) => {
        if (debug) {
            console.log(`datas = \n`, JSON.stringify(datas, null, 4));
        }
        const {
            transactions_number,
            rising_number,
            fell_number,
            trading_volume,
            turnover_volume,
            deals_number
        } = datas;
        // re-order
        let order_arr = [
            transactions_number,
            rising_number,
            fell_number,
            trading_volume,
            turnover_volume,
            deals_number
        ];
        let trs = document.querySelectorAll(`[data-table-tbody-tr="otc-table-tbody-tr-transaction-overview"]`);
        if (debug) {
            console.log(`trs = \n`, trs);
            console.log(`trs[0] = \n`, trs[0]);
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = ``;
            tds = trs[i].querySelectorAll(`[data-td-value="otc-td-value-TO"]`);
            for (let ii = 0; ii < tds.length; ii++) {
                tds[ii].innerHTML = order_arr[i][ii];
            }
        }
    }
);



OTC_TS_FV.Modules.transactionOverview.init = OTC_TS_FV.Modules.transactionOverview.init || (
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
            socket: `/otcfast09`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `${ip}${path}${socket}?${skin}`,
        // let url = `http://10.1.5.202/otc/ts/json/09.json`,// no data?
            uid = `newly_added_listing_hs_container`;
        // OTC_TS_FV.Modules.transactionOverview(url, false, uid);
        OTC_TS_FV.Modules.transactionOverview(url, false);
    }
);

// OTC_SKIN ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

// console.log(`research & OTC_GILCODE`, OTC_GILCODE);

OTC_TS_FV.Modules.transactionOverview.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast09`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});


