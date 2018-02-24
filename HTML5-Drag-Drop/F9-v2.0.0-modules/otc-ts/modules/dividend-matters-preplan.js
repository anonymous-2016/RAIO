"use strict";

/**
 * @namespace NSB_TS_FV : New San Ban Thematic Statistics
 * @name dividend-matters-preplan 今日分红-预案
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

// additionalMattersPreplan
NSB_TS_FV.Modules.additionalMattersPreplan = NSB_TS_FV.Modules.additionalMattersPreplan || ((url = ``, debug = false) => {
    let result_obj = {};
    let no_data_dom = document.querySelector(`.otc-dividend-matters-all-title-box`),
        table_container = document.querySelector(`[data-table="otc-table-dividend-matters-preplan"]`);
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
                        console.log(`keys = \n`, Object.keys(json[0]));
                    }
                    let data = json || [];
                    let preplan_time = [],
                        preplan_code = [],
                        preplan_brief = [],
                        preplan_amount = [];
                    data.map(
                        (obj, i) => {
                            if (debug) {
                                console.log(`obj = \n`, JSON.stringify(obj, null, 4));
                            }
                            // ["zqdm", "zqjc", "mjje"]
                            // ["time", "zqdm", "zqjc", "mjje"] ???
                            preplan_time.push(obj["rq"] !== undefined ? obj["rq"] : `--`);
                            // preplan_time.push(`--`);
                            // preplan_time.push(obj.time);
                            preplan_code.push(obj["zqdm"]);
                            preplan_brief.push(obj["zqjc"]);
                            preplan_amount.push(obj["mjje"]);
                        }
                    );
                    const new_obj = {
                        preplan_time,
                        preplan_code,
                        preplan_brief,
                        preplan_amount
                    };
                    if (debug) {
                        console.log(`new_obj = \n`, JSON.stringify(new_obj, null, 4));
                    }
                    Object.assign(result_obj, new_obj);
                    if (debug) {
                        console.log(`result_obj = \n`, JSON.stringify(result_obj, null, 4));
                    }
                    // array
                    NSB_TS_FV.Modules.additionalMattersPreplan.showTable(result_obj, false);
                } else {
                    // no data
                    table_container.style.display = "none";
                    let hasNoData = no_data_dom.nextElementSibling.dataset.margin || ``;
                    // "no-data-margin-top" / undefined => "no-data-margin-top" / ``
                    if (hasNoData === ``) {
                        if (hasNoData !== `no-data-margin-top`) {
                            no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                        }
                    }
                }
            } catch (err) {
                let url =`file:///E:/otc-ts/modules/dividend-matters-preplan.js`;
                ConsoleError(err, url);
                // no data & fallback
                table_container.style.display = "none";
                let hasNoData = no_data_dom.nextElementSibling.dataset.margin || ``;
                // "no-data-margin-top" / undefined => "no-data-margin-top" / ``
                if (hasNoData === ``) {
                    if (hasNoData !== `no-data-margin-top`) {
                        no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                    }
                }
            }
        }
    )
    .catch(error => {
        console.log(`error = \n`, error);
        // no data
        // hs_container.style.display = "none";
        table_container.style.display = "none";
        let hasNoData = no_data_dom.nextElementSibling.dataset.margin || ``;
        // "no-data-margin-top" / undefined => "no-data-margin-top" / ``
        if (hasNoData === ``) {
            if (hasNoData !== `no-data-margin-top`) {
                no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
                // console.log(`OK`);
            }else{
                // console.log(`Error`);
            }
        }else{
            // in case of duplication!
        }
    });
    // return result_obj;
});

// additionalMattersPreplan.showTable
NSB_TS_FV.Modules.additionalMattersPreplan.showTable = NSB_TS_FV.Modules.additionalMattersPreplan.showTable || (
    (datas = {}, debug = false) => {
        if (debug) {
            console.log(`datas = \n`, JSON.stringify(datas, null, 4));
        }
        const {
            preplan_time,
            preplan_code,
            preplan_brief,
            preplan_amount
        } = datas;
        // re-order
        let order_arr = [
            preplan_time,
            preplan_code,
            preplan_brief,
            preplan_amount
        ];
        let trs = document.querySelectorAll(`[data-table-tbody-tr="otc-table-tbody-tr-dividend-matters-preplan"]`);
        if (debug) {
            console.log(`trs = \n`, trs);
            console.log(`trs[0] = \n`, trs[0]);
        }
        for (let i = 0; i < trs.length; i++) {
            let tds = trs[i].querySelectorAll(`[data-td-value="otc-td-value-DMP"]`);
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
            tds[3].setAttribute(`title`, order_arr[3][i]);
            // DOM in JS ???
            /*
                <tr data-table-tr="otc-table-tr-dividend-matters-preplan" data-table-tbody-tr="otc-table-tbody-tr-dividend-matters-preplan">
                    <td data-td-value="otc-td-value-DMP"></td>
                    <td data-td-value="otc-td-value-DMP"></td>
                    <td data-td-value="otc-td-value-DMP"></td>
                </tr>
            */
        }
    }
);

// init
NSB_TS_FV.Modules.additionalMattersPreplan.init = NSB_TS_FV.Modules.additionalMattersPreplan.init || (
    (url = `http://10.1.5.202/webservice/fastview/otc/otcfast06/`) => {
        let hs_datas = NSB_TS_FV.Modules.additionalMattersPreplan(url, false);
    }
);

// call init
NSB_TS_FV.Modules.additionalMattersPreplan.init(`http://10.1.5.202/webservice/fastview/otc/otcfast06/`);


