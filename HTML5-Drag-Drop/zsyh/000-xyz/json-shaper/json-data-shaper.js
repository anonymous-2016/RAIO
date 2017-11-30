/**
 * @description JSON Data Shaper (JSONDS)
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright xgqfrms 2017-present
 *
 * @argument {String} url (fetch)
 *
 * @param {Object} json
 * @param {Boolean} debug
 */

// global namespace
var window = window || {};

window.JSONDS = window.JSONDS || ((json = {}, debug = false) => {
    let keys = Object.keys(json.data[0].columnmeta);
    // ["a0", "a1", "a2"]
    let arrs = json.data[0].rows;
    // [["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"]]
    if(debug){
        console.log(`json =\n`, json);
        console.log(`debug =\n`, debug);
    }
    let rows = [];
    arrs.map(
        (arr, i) => {
            let obj = {};
            for (let ii = 0; ii < keys.length; ii++) {
                if(typeof arr[ii] === "number"){
                    obj[keys[ii]] = arr[ii] > 0 ? arr[ii] : "--";
                    // -1.7976931348623157e+308 & invalid value
                }else{
                    // string
                    obj[keys[ii]] = arr[ii];
                }
                if(debug && i === 0 && ii === 0){
                    console.log(`arr[ii] =\n`, arr[ii], typeof arr[ii]);
                }
            }
            obj["level"] = 2,
            obj["isLeaf"] = true,
            obj["expanded"] = false,
            obj["parent"] = "2",
            rows.push(obj);
        }
    );
    if(debug){
        console.log(`rows =\n`, rows);
    }
    let result = {
        rows,
        // rows: rows
    };
    if(debug){
        console.log(`result =\n`, result);
    }
    return result;
});

// IIFE

// let test = JSONDS(json, true);
let test = JSONDS(json["objs"], true);




