"use strict";

/**
 * xgqfrms
 * created 2017/10/13
 * @param {* Array} arr 
 * @param {* Number} howMany 
 */

var slasher = function slasher() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var howMany = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var result = [];
    var al = arr.length;
    if (al < howMany) {
        // result = arr.splice(howMany);
        // result = [];
    } else {
        result = arr.splice(howMany);
    }
    console.log("result = ", result);
    return result;
};

slasher([1, 2, 3], 2);
// hould return [3].
slasher([1, 2, 3], 0);
// hould return [1, 2, 3].
slasher([1, 2, 3], 9);
// hould return [].
slasher([1, 2, 3], 4);
// hould return [].