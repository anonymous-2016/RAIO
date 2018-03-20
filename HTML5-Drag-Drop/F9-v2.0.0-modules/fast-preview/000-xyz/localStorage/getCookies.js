"use strict";

/**
 * @description getCookies
 * @author xgqfrms 2018.03.20
 * @license MIT
 * @param {* String} key_name
 *
 */

const getCookies = (key_name = ``) => {
    let arr = [],
        temp_arr = [],
        temp_obj = {},
        result = ``;
    arr = document.cookie.split(`;`);
    temp_arr = arr.map((item, i) => item.trim());
    temp_arr.map(
        (item, i) => {
            let key = ``,
                value = ``;
            key = item.split(`=`)[0];
            value = item.split(`=`)[1];
            temp_obj[key] = value;
        }
    );
    if (key_name in temp_obj) {
        result = temp_obj[key_name];
    } else {
        result = null;
    }
    return result;
};


/*

getCookies(`_hp2_id.1557708959`);
let obj = getCookies(`_hp2_id.1557708959`);
// "%7B%22userId%22%3A%220973096690871854%22%2C%22pageviewId%22%3A%220256347617340861%22%2C%22sessionId%22%3A%222302119049021178%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%223.0%22%7D"
decodeURI(obj);
// "{"userId"%3A"0973096690871854"%2C"pageviewId"%3A"0256347617340861"%2C"sessionId"%3A"2302119049021178"%2C"identity"%3Anull%2C"trackerVersion"%3A"3.0"}"
decodeURIComponent(obj);
// "{"userId":"0973096690871854","pageviewId":"0256347617340861","sessionId":"2302119049021178","identity":null,"trackerVersion":"3.0"}"

*/
