"use strict";

/**
 * @author xgqfrms 2017-12-13
 * @license MIT
 * @description ConsoleFormatJSON
 *
 * @param {*Object } obj
 * @param {* Boolean} debug
 */

import * as CSS from "./console_css";

// object ??? array && JSON formater ??? {} / []
const ConsoleFormatJSON = (obj = {}, debug = false) => {
    console.log(`%cformat object = \n`, CSS.css0, JSON.stringify(obj, null, 4));
    let isRecursive = false,
        keys = Object.keys(obj),
        values = Object.values(json);
    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(values[i]) || typeof values[i] === "object") {
            isRecursive = true;
            // break;
        }else{
            isRecursive = false;
            continue;
        }
        if (isRecursive) {
            let sub_obj = obj[keys[i]];
            console.log(`%cformat object.name = \n`, CSS.css1, JSON.stringify(sub_obj, null, 4));
        }
    }
    return `Console Format JSON Finished!`;
};



const CFJ = (obj = {}, debug = false) => {
    console.log(`format object = \n`, JSON.stringify(obj, null, 4));
    let keys = Object.keys(obj),
        values = Object.values(json);
    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(values[i]) || typeof values[i] === "object") {
            console.log(`keys[${i}] && obj[keys[${i}]] = \n`, keys[i], JSON.stringify(obj[keys[i]], null, 4));
        }else{
            continue;
        }
    }
    return `Console Format JSON Finished!`;
};



export default ConsoleFormatJSON;
export {ConsoleFormatJSON, CFJ};



