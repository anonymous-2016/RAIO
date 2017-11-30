"use strict";

/**
 * @description Utils
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @namespace STOCK_F9
 * @sub_namespaces STOCK_F9.Utils
 *
 *
 */

// namespaces
var STOCK_F9 = STOCK_F9 || {};
// sub namespaces
STOCK_F9.Utils = STOCK_F9.Utils || {};



/**
 * @description Fetch
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @param {String} url
 * @param {String || Number} gcode
 * @param {Boolean} debug
 */

STOCK_F9.Utils.Fetch = STOCK_F9.Utils.Fetch || (
    (
        {
            url,
            gcode,
            debug
        } = {
            url: `https://cdn.xgqfrms.xyz/json/data.json`,
            gcode: `600570`,
            debug: false
        }
    ) => {
        if (debug) {
            console.log(`url = `, url, typeof url);
            console.log(`gcode = `, gcode, typeof gcode);
            console.log(`debug = `, debug, typeof debug);
        }
        let datas = {};
        let fetch_url = `${url}?{gcode: ${gcode}}`;
        fetch(fetch_url)
        .then(res => res.json())
        .then(
            (json) => {
                // json
                if (debug) {
                    console.log(`data = \n`, json);
                }
                datas = Object.assign(datas, json);
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return datas;
    }
);

/*

let json = STOCK_F9.Utils.Fetch();
copy(json);

{
    k: "v"
}


*/


/*


let Fetch = STOCK_F9.Utils.Fetch;

export default Fetch;
export {Fetch};
export {Fetch as fetch};


*/



