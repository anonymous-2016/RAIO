"use strict";

/**
 * @namespace NSB_TS: New San Ban Thematic Statistics
 * @description Ajax_Fetch_JSON_Data
 *
 * @createed 2017.11.23
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* Boolean} debug
 *
 * @example NSB_TS.Utils.AFJD(`https://cdn.xgqfrms.xyz/json/data.json`);
 * @example NSB_TS.Utils.AFJD(`https://cdn.xgqfrms.xyz/json/data.json`, true);
 *
 */

// namespaces
var NSB_TS = NSB_TS || {};
// sub namespaces
NSB_TS.Utils = NSB_TS.Utils || {};


// Ajax_Fetch_JSON_Data
NSB_TS.Utils.AFJD = NSB_TS.Utils.AFJD || ((url = ``, debug = false) => {
    // return obj
    let temp_obj = {};
    // url & regex checker ??? http:// || https://(abc|www).(\w+).(xyz|com|org) || ip ....
    if (url !== undefined && typeof(url) === `string` && url.length > 27) {
        fetch(url)
        .then(res => res.json)
        .then((json) => {
            // json
            if (json !== undefined && typeof(url) === `object`) {
                // temp_obj = json;
                if (Array.isArray(json)) {
                    temp_obj.concat(json);
                    if (debug) {
                        // alert(`Oh, shit! You just passed a bad url!`);
                        console.log(`json is an Array!\n`, json);
                    }
                }else{
                    Object.assign(temp_obj, json);
                    if (debug) {
                        // alert(`Oh, shit! You just passed a bad url!`);
                        console.log(`json is an Object!\n`, json);
                    }
                }
            }else{
                if (debug) {
                    // alert(`Oh, shit! You just passed a bad url!`);
                    console.log(`Oh, shit! You just passed a bad url!\nPlease, check it again!\n`, url);
                }
            }
        })
        .catch(err => console.log(`fetch error = \n`, err));
    }
    setTimeout(() => {
        return temp_obj;
    }, 0);
});


/**
 * @example AFJD_OP({url: `https://cdn.xgqfrms.xyz/json/data.json`});
 */

// object params
NSB_TS.Utils.AFJD_OP = NSB_TS.Utils.AFJD_OP || (({
    url,
    debug
}) => {
    // default value
    let fetch_url = (url !== undefined) ? url : `https://cdn.xgqfrms.xyz/json/data.json`,
        fetch_debug = (debug !== undefined) ? debug : false;
    if (fetch_debug) {
        console.log(`url = \n`, url);
        console.log(`debug = \n`, debug);
    }else{
        // shaped values
        console.log(`fetch_url = \n`, fetch_url);
        console.log(`fetch_debug = \n`, fetch_debug);
    }
    // return obj
    if (url !== undefined && typeof(url) === `string` && url.length > 27) {
        if (!debug) {
            // alert(`Oh, shit! You just passed a bad url!`);
            console.log(`Hooray! You just passed a right url!\nHere, it is!\n`, url);
        }
    }else{
        if (!debug) {
            // alert(`Oh, shit! You just passed a bad url!`);
            console.log(`url = \n`, url);
            console.log(`debug = \n`, debug);
            console.log(`Oh, shit! You just passed a bad url!\nPlease, check it again!\n`, url);
        }
    }
});

NSB_TS.Utils.AFJD_OP({url: `https://cdn.xgqfrms.xyz/json/data.json`});
// NSB_TS.Utils.AFJD_OP({url: ``, debug: true});
// NSB_TS.Utils.AFJD_OP({url: ``, debug: false});


/*


`https://cdn.xgqfrms.xyz/json/data.json`.length;
`104.28.3.230/json/data.json`.length;

*/

const Ajax_Fetch_JSON_Data = {
    init: NSB_TS.Utils.AFJD(),
    init_op: NSB_TS.Utils.AFJD_OP()
};


try {
    if ("export" in window) {
        export {Ajax_Fetch_JSON_Data as AFJD};
        export default Ajax_Fetch_JSON_Data;
        // [eslint] Parsing error: 'import' and 'export' may only appear at the top level
    }
} catch (err) {
    console.log(`error infos = \n`, err);
}
