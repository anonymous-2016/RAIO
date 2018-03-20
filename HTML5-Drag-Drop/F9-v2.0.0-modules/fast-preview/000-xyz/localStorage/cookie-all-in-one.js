"use strict";

/**
 * @description setCookie
 * @author xgqfrms 2018.03.20
 * @license MIT
 * @param {* String} cookie_name
 * @param {* String | Object | Array} cookie_value
 * @param {* Number} days
 * @param {* Boolean} debug
 *
 */


const setCookie = (cookie_name = `test`, cookie_value = `666`, days = 7, debug = false) => {
    let date = new Date(),
        domain = window.parent.location.host || `10.1.5.202`,// hostname / host / origin
        // path = window.parent.location.pathname.slice(0, -10) || `/`,
        path = `/`,
        now_time = date.getTime(),
        range_time = days * 147600000,
        encode_name = encodeURIComponent(cookie_name),
        // encode_name = encodeURIComponent(JSON.stringify(cookie_name)),
        encode_value = encodeURIComponent(JSON.stringify(cookie_value)),
        expires = ``,
        cookie = ``;
    if (days) {
        date.setTime(now_time + range_time);
        expires = date.toGMTString();
        // date.setTime(date.getTime()+(days*24*60*60*1000));
        // 147600000 d/ms x 7 d = 1033200000 ms
    }
    cookie = `${encode_name}=${encode_value}; expires=${expires}; domain=${domain} ; path=${path}`;
    document.cookie = cookie;
    return cookie;
};


// setCookie();
// setCookie(`abc`, {a: 123}, 1);



/*


// encodeURIComponent(JSON.stringify(`666`)),
// JSON.parse(decodeURIComponent("%22666%22"));


"/stock/f9/fastview/index.html".slice(-10);
// "index.html"

"/stock/f9/fastview/index.html".slice(0, -10);
// "/stock/f9/fastview/"

*/

/**
 * @description getCookie
 * @author xgqfrms 2018.03.20
 * @license MIT
 * @param {* String} key_name
 * @param {* Boolean} debug
 *
 */

const getCookie = (key_name = ``, debug = false) => {
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
            key = decodeURIComponent(item.split(`=`)[0]);
            value = decodeURIComponent(item.split(`=`)[1]);
            // if (key.includes(`[`) || key.includes(`{`)) {
            //     key = JSON.parse(key);
            // }
            if (value.includes(`[`) || value.includes(`{`)) {
                value = JSON.parse(value);
            }
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
// getCookie(`left`);
// getCookie(`right`);

/**
 * @description getCookies
 * @author xgqfrms 2018.03.20
 * @license MIT
 * @param {* Boolean} debug
 *
 */

const getCookies = (debug = false) => {
    let arr = [],
        temp_arr = [],
        result_obj = {};
    arr = document.cookie.split(`;`);
    temp_arr = arr.map((item, i) => item.trim());
    temp_arr.map(
        (item, i) => {
            let key = ``,
                value = ``;
            key = decodeURIComponent(item.split(`=`)[0]);
            value = decodeURIComponent(item.split(`=`)[1]);
            // if (key.includes(`[`) || key.includes(`{`)) {
            //     key = JSON.parse(key);
            // }
            if (value.includes(`[`) || value.includes(`{`)) {
                value = JSON.parse(value);
            }
            result_obj[key] = value;
        }
    );
    if (debug) {
        console.log(`all cookies =`, result_obj);
    }
    return result_obj;
};

// let left = getCookies().left;
// let right = getCookies().right;


/**
 * @description deleteCookie
 * @author xgqfrms 2018.03.20
 * @license MIT
 * @param {* String} key_name
 * @param {* Boolean} debug
 *
 */

const deleteCookie = (key_name = ``, debug = false) => {
    // expires = today - 1
    setCookie(key_name, ``, -1);
};

// setCookie(`abc`, `game over`, -1);
// setCookie(`left`, `game over`, -1);
