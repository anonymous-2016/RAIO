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
        keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(keys[i]) || typeof keys[i] === "object") {
            isRecursive = true;
        }else{
            isRecursive = false;
        }
        if (isRecursive) {
            let sub_obj = obj[keys[i]];
            console.log(`%cformat object.name = \n`, CSS.css1, JSON.stringify(sub_obj, null, 4));
        }
    }
    return `Console Format JSON Finished!`;
};

export default ConsoleFormatJSON;
export {ConsoleFormatJSON};
