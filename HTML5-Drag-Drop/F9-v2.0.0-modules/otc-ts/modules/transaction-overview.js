"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
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
var NSB_TS_FV = NSB_TS_FV || {};
// sub namespaces
NSB_TS_FV.Modules = NSB_TS_FV.Modules || {};
// transactionOverview
NSB_TS_FV.Modules.transactionOverview = NSB_TS_FV.Modules.transactionOverview || ((url = ``, debug = false) => {
    let result_obj = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (json !== undefined && typeof(json) === "object") {
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
            }
            // array
            NSB_TS_FV.Modules.transactionOverview.showTable(result_obj, false);
        }
    )
    .catch(error => console.log(`error = \n`, error));
    // return result_obj;
});

// transactionOverview.showTable
NSB_TS_FV.Modules.transactionOverview.showTable = NSB_TS_FV.Modules.transactionOverview.showTable || (
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
        let trs = document.querySelectorAll(`[data-table-tbody-tr="ntb-table-tbody-tr-transaction-overview"]`);
        if (debug) {
            console.log(`trs = \n`, trs);
            console.log(`trs[0] = \n`, trs[0]);
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = ``;
            tds = trs[i].querySelectorAll(`[data-td-value="ntb-td-value"]`);
            for (let ii = 0; ii < tds.length; ii++) {
                tds[ii].innerHTML = order_arr[i][ii];
            }
        }
    }
);

// init
NSB_TS_FV.Modules.transactionOverview.init = NSB_TS_FV.Modules.transactionOverview.init || (
    /*
        // IIFE
        (() => {
            const sf_num= `otcfast09`;
            const url = `http://10.1.5.202/webservice/fastview/otc/${sf_num}/`;
            let hs_datas = NSB_TS_FV.Modules.transactionOverview(url, false);
        })()
    */
    (url = `http://10.1.5.202/webservice/fastview/otc/otcfast09/`) => {
        let hs_datas = NSB_TS_FV.Modules.transactionOverview(url, false);
    }
);

// call init
NSB_TS_FV.Modules.transactionOverview.init(`http://10.1.5.202/webservice/fastview/otc/otcfast09/`);




