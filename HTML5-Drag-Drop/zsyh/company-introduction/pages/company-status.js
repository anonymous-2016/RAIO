"use strict";

// import {fetch} from "../utils/fetch";

/**
 * @description 概况 公司现状
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @namespace STOCK_F9
 * @sub_namespaces STOCK_F9.Summary
 *
 *
 */

// namespaces
var STOCK_F9 = STOCK_F9 || {};
// sub namespaces
STOCK_F9.Summary = STOCK_F9.Summary || {};

/**
 * @description company-status 公司现状
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @param {String} url
 * @param {String || Number} gcode
 * @param {Array} td_keys
 * @param {Array} td_values
 * @param {Boolean} debug
 */
// http://10.1.5.202/stock/f9/mock-datas/intro-status.json
// http://10.1.5.202/stock/f9/mock-datas/intro-status.json?{gcode:600570}
// http://10.1.5.202/stock/f9/mock-datas/intro-status.json?{gcode:"600570"}
// http://10.1.5.202/stock/f9/mock-datas/intro-status.json?{gcode:%22600570%22}

STOCK_F9.Summary.companyStatus = STOCK_F9.Summary.companyStatus || (
    (
        {
            url,
            gcode,
            // td_keys,
            // td_values,
            uid,
            debug
        } = {
            url: `https://cdn.xgqfrms.xyz/`,
            gcode: `600570`,
            // td_keys: [],
            // td_values: [],
            uid: ``,
            debug: false
        }
    ) => {
        if (debug) {
            console.log(`url = `, url, typeof url);
            console.log(`gcode = `, gcode, typeof gcode);
            console.log(`uid = `, uid, typeof uid);
            // console.log(`td_keys = `, td_keys, typeof td_keys);
            // console.log(`td_values = `, td_values, typeof td_values);
            console.log(`debug = `, debug, typeof debug);
        }
        let tbody_uid = document.querySelector(uid);
        let new_url = `${url}?{gcode: ${gcode}}`;
        if (debug) {
            console.log(`new_url = `, new_url, typeof new_url);
        }
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                let keys = Object.keys(json.columnmeta);
                // ["chiname", "engname", "state", "citycode"]
                // let values = Object.values(json.rows[0]);
                let values = json.rows;
                // let arrs = json.data[0].rows;
                // [[["万科企业股份有限公司", "China Vanke Co.,Ltd.", "广东", "深圳市", "深圳市盐田区大梅沙环梅路33号万科中心"]]
                let html = ``;
                keys.map(
                    (key, i) => {
                        if (debug) {
                            console.log(`key, i =`, key, i);
                        }
                        let name = json.columnmeta[key].description ? json.columnmeta[key].description : `暂无数据`,
                            value = values[i] ? values[i] : `暂无数据`;;
                        if (key === "Website" || key === "Email") {
                            html += `
                                <tr data-tr="tr-company-status">
                                    <td data-td-key="td-key-company-status">
                                        ${name}
                                    </td>
                                    <td data-td-value="td-vaule-company-status">
                                        ${
                                            key === "Email"
                                            ?
                                            `<a href="mailto:${value}">${value}</a>`
                                            :
                                            `<a href="${value}">${value}</a>`
                                        }
                                    </td>
                                </tr>
                            `;
                        }else{
                            html += `
                                <tr data-tr="tr-company-status">
                                    <td data-td-key="td-key-company-status">
                                        ${name}
                                    </td>
                                    <td data-td-value="td-vaule-company-status">
                                        ${value}
                                    </td>
                                </tr>
                            `;
                        }
                    }
                );
                if (debug) {
                    console.log(`html = `, html);
                }
                tbody_uid.insertAdjacentHTML("afterbegin", html);
                datas = html;
                // datas = Object.assign(datas, arr_obj);
                // STOCK_F9_FV.Modules.agencyRating.drawHS(datas, uid);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // return only work out Promise!
        return datas;
        // let obj = {
        //     url,
        //     gcode,
        //     td_keys,
        //     td_values,
        //     debug
        // };
        // return obj;
    }
);



STOCK_F9.Summary.companyStatus.init = STOCK_F9.Summary.companyStatus.init || (
    (debug = false) => {
        // let tbody_uid = document.querySelector(`[data-tbody="tbody-company-status"]`);
        // data-tbody="tbody-company-status"
        let obj = {
            url: `http://10.1.5.202/stock/f9/mock-datas/intro-status.json`,
            gcode: `600570`,
            uid: `[data-tbody="tbody-company-status"]`,
            // td_keys: [],
            // td_values: [],
            debug: debug
            // debug: true
        };
        STOCK_F9.Summary.companyStatus(obj);
        // let html = STOCK_F9.Summary.companyStatus(obj);
        if (debug) {
            // console.log(`result html = `, html);
        }
        setTimeout(() => {
            // tbody_uid.insertAdjacentHTML("afterbegin", `<h1>${html}</h1>`);
        }, 0);
    }
);

STOCK_F9.Summary.companyStatus.init(false);
// STOCK_F9.Summary.init(true);
// STOCK_F9.Summary.init(`http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`);




/*

    let result = STOCK_F9.Summary.companyStatus();
    copy(result);
    {
        "url": "https://cdn.xgqfrms.xyz/",
        "gcode": "600570",
        "td_keys": [],
        "td_values": [],
        "debug": false
    }


*/



