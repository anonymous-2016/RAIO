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
            url: `http://10.1.5.202/stock/f9/mock-datas/intro-status.json`,
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
                                            `<a href="mailto:${value}" data-link="color-mail">${value}</a>`
                                            :
                                            `<a href="${value}" data-link="color-website">${value}</a>`
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
        .catch(error => console.log(`fetch data error = \n`, error));
        // return only work out Promise!
        return datas;
    }
);

const getURLGcode = () => {
    // getURLGcode()
    let params = window.location.search;
    // "?{key:%20%22value%22,%20aaa:%20%22aaa%22}"
    let str = decodeURI(params);
    // "?{key: "value", aaa: "aaa"}"
    let sub_str = str.substr(1);
    // "{key: "value", aaa: "aaa"}"
    // JSON.parse(sub_str);
    // Uncaught SyntaxError: Unexpected token k in JSON at position 1 at JSON.parse
    JSON.parse(`{"key": "value", "aaa": "aaa"}`);
    // {key: "value", aaa: "aaa"}
    // let obj = JSON.parse(JSON.stringify(eval("(" + str + ")")));
    let obj = JSON.parse(JSON.stringify(eval(`(${sub_str})`)));
    // JSON.parse(JSON.stringify(`${sub_str}`));
    // JSON.parse(JSON.stringify(``+`${sub_str}`+``));
    // JSON.parse(JSON.stringify(`${"(" + sub_str + ")"}`));
};

/*

// ??? new URLSearchParams();

encodeURIComponent();

encodeURI();
decodeURI();

decodeURIComponent();




decodeURI(`http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs
`);
// "http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D平安银行%26type%3D0%26sid%3Dhs"



decodeURIComponent(`http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs`);
// "http://222.73.146.143/f10/view/stock/index.html?gilcode=000001.SZ&name=平安银行&type=0&sid=hs"









encodeURI(`https://cdn.xgqfrms.xyz?{key:"value"}`);
// "https://cdn.xgqfrms.xyz?%7Bkey:%22value%22%7D"

encodeURI(`https://cdn.xgqfrms.xyz?{key: "value"}`);
// "https://cdn.xgqfrms.xyz?%7Bkey:%20%22value%22%7D"

// "https://cdn.xgqfrms.xyz/"


decodeURI("https://cdn.xgqfrms.xyz?%7Bkey:%22value%22%7D");
// "https://cdn.xgqfrms.xyz?{key:"value"}"

decodeURI(`https://cdn.xgqfrms.xyz?%7Bkey:%20%22value%22%7D`);
// "https://cdn.xgqfrms.xyz?{key: "value"}"



*/






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
        // get URL gcode
        // let gcode = getURLGcode();
        // Object.assign(obj,  {gcode});
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



