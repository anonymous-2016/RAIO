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
    if (key in temp_obj) {
        result = temp_obj[key];
    } else {
        result = null;
    }
    return result;
};
