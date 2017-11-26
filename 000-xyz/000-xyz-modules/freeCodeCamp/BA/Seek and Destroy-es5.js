"use strict";

/**
 * SeekDestroy
 * xgqfrms
 * created 2017.10.14
 * 
 * @param {Array} [arr=[]] 
 * @param {Boolean} [debug=false] 
 * @param {any} args 
 * @returns {Array} [result=[]] 
 */

"use strict";

var SeekDestroy = function SeekDestroy() {
    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
    }

    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var result = [];
    var nums = [];
    if (Array.isArray(arr) && arr.length > 0) {
        nums = arr;
    }
    // arguments ???
    // ES2015
    var args = Array.from(params).slice(2);
    var new_arr = [];
    result = nums.filter(function(num, i) {
        // let finded = args.find((num) => num);
        // find === first_value / undefined
        // let finded = args.indexOf(num);
        // finded === index / -1
        var finded = args.includes(num);
        // true / false
        if (debug) {
            console.log("num = ", num);
            console.log("args[" + i + "] = ", args[i]);
        }
        /*
            finded === undefined
            finded === -1
            finded === false
        */
        if (!finded) {
            // num not in args
            new_arr.push(num);
            return num;
        } else {}
        // num in args
        // return;
        // return null;

        // return new_arr;
    });
    return result;
};


