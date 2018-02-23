"use strict";

/**
 * @namespace OTC_TS_FV : OTC Thematic Statistics
 * @name listing-situation 挂牌情况
 * @createed 2017.11.21
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";

// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};


OTC_TS_FV.Modules.listingSituation = OTC_TS_FV.Modules.listingSituation || ((url = ``, debug = false, uid = `default_dom_uid`) => {
    let result_obj = {};
    // no data
    let new_time = document.querySelector(`[data-time="otc-listing-situation-time"]`),
        no_data_dom = document.querySelector(`.otc-listing-situation-title-box`),
        // hs_container = document.querySelector(`#newly_added_listing_hs_container`),
        table_container = document.querySelector(`[data-table="otc-listing-situation-table-box"]`);
    // no data
    let no_data_p = `
        <div data-margin="no-data-margin-top">
            <p data-none="no-data-p">
                <span data-none="no-data-span"></span>
            </p>
        </div>
    `;
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            // global function
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
            try {
                if (emptyChecker(json) && Object.keys(json).length > 0) {
                    if (debug) {
                        console.log(`json = \n`, json);
                    }
                    let data = json || [];
                    const new_obj = {};
                    // fixed order!
                    const keys = ["total", "market", "protocol"];// ui order
                    // const keys = ["total", "protocol", "market"];
                    let listed_number = [],
                        new_add_listed_number = [],
                        waiting_number = [],
                        reporting_number = [];
                    data.map(
                        (obj, i) => {
                            let temp_obj = {},
                                key = obj["bz"];
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
                    }
                    // keys order bug!
                    keys.map(
                        (key, i) => {
                            listed_number.push(new_obj[key]["gpjs"]);
                            // listed_number.push(new_obj["total"]["gpjs"]);
                            new_add_listed_number.push(new_obj[key]["xzjs"]);
                            waiting_number.push(new_obj[key]["dgpjs"]);
                            reporting_number.push(new_obj[key]["sbjs"]);
                        }
                    );
                    result_obj = {
                        listed_number,
                        new_add_listed_number,
                        waiting_number,
                        reporting_number
                    };
                    // array
                    OTC_TS_FV.Modules.listingSituation.showTable(result_obj, uid, false);
                } else {
                    // no data
                    // hs_container.style.display = "none";// OK
                    table_container.style.display = "none";
                    no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                }
            } catch (err) {
                try {
                    let message = `handle json error!`,
                        fileName = `listing-situation.js`,
                        lineNumber = 29;
                    throw new UserException(message, fileName, lineNumber)
                } catch (error) {
                    let url =`file:///E:/otc-ts/modules/listing-situation.js`;
                    // ConsoleError(err, url);
                    ConsoleError(error, url);
                }
                // no data & fallback
                table_container.style.display = "none";
                no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                // no need anymore!
            }
        }
    )
    .catch(error => {
        console.log(`error = \n`, error);
        // no data
        table_container.style.display = "none";
        no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
    });
    // return result_obj;
    // more
    setTimeout((debug = false) => {
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-listing-situation"]`);
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


OTC_TS_FV.Modules.listingSituation.showTable = OTC_TS_FV.Modules.listingSituation.showTable || (
    (datas = {}, uid = ``, debug = false) => {
        if (debug) {
            console.log(`datas = \n`, JSON.stringify(datas, null, 4));
        }
        const {
            listed_number,
            new_add_listed_number,
            waiting_number,
            reporting_number
        } = {...datas};
        let order_arr = [listed_number, new_add_listed_number, waiting_number, reporting_number];
        let trs = document.querySelectorAll(`[data-table-tbody-tr="otc-table-tbody-tr-listing-situation"]`);
        /*
            // data-table-tr & data-table-tbody-tr ??? can not duplication ??? data-*-name
            let trs = document.querySelectorAll(`[data-table-tr="otc-table-tbody-tr-listing-situation"]`);
            // []
            let trs = document.querySelectorAll(`[data-table-tbody-tr="otc-table-tbody-tr-listing-situation"]`);
            // (3) [tr, tr, tr]
        */
        for (let i = 0; i < trs.length; i++) {
            // const tr1_tds = trs[i].children;
            let tds = ``;
            tds = trs[i].querySelectorAll(`[data-td-value="otc-td-value-LS"]`);
            for (let ii = 0; ii < tds.length; ii++) {
                tds[ii].innerHTML = order_arr[i][ii];
            }
        }
    }
);



OTC_TS_FV.Modules.listingSituation.init = OTC_TS_FV.Modules.listingSituation.init || (
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
            socket: `/otcfast08`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `${ip}${path}${socket}?${skin}`,// http://10.1.5.202/otc/ts/json/02.json?skin=white
        // let url = `http://10.1.5.202/otc/ts/json/01.json`,// no data?
        // let url = `http://10.1.5.202/otc/ts/json/new-01.json`,// no data?
            uid = `newly_added_listing_hs_container`;
        OTC_TS_FV.Modules.listingSituation(url, false, uid);
    }
);

// OTC_SKIN ???

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

// console.log(`research & OTC_GILCODE`, OTC_GILCODE);

OTC_TS_FV.Modules.listingSituation.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast08`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});




































/*

const data = [
    {
        "gpjs": 11713,
        "xzjs": 3,
        "dgpjs": 85,
        "sbjs": 476,
        "bz": "合计"
    },
    {
        "gpjs": 10268,
        "xzjs": 3,
        "dgpjs": 0,
        "sbjs": 0,
        "bz": "协议"
    },
    {
        "gpjs": 1383,
        "xzjs": 0,
        "dgpjs": 0,
        "sbjs": 0,
        "bz": "做市"
    }
];


const new_obj = {
   "total": {
       "gpjs": 11713,
       "xzjs": 3,
       "dgpjs": 85,
       "sbjs": 476,
       "bz": "合计"
   },
   "protocol": {
       "gpjs": 10268,
       "xzjs": 3,
       "dgpjs": 0,
       "sbjs": 0,
       "bz": "协议"
   },
   "market": {
       "gpjs": 1383,
       "xzjs": 0,
       "dgpjs": 0,
       "sbjs": 0,
       "bz": "做市"
   }
};




let keys = Object.keys(new_obj),
    values = Object.values(new_obj);
let listed_number = [],
    new_add_listed_number = [],
    waiting_number = [],
    reporting_number = [];
for (let i = 0; i < keys.length; i++) {
    listed_number.push(new_obj[keys[i]]["gpjs"]);
    // listed_number.push(new_obj["total"]["gpjs"]);
    // listed_number.push(new_obj["protocol"]["gpjs"]);
    // listed_number.push(new_obj["market"]["gpjs"]);
    new_add_listed_number.push(new_obj[keys[i]]["xzjs"]);
    waiting_number.push(new_obj[keys[i]]["dgpjs"]);
    reporting_number.push(new_obj[keys[i]]["sbjs"]);
}
// sort ??? key order ???


*/

