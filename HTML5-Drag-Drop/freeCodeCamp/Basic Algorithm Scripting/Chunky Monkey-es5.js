"use strict";

/**
 * xgqfrms
 * created 2017/10/13
 * @param {* Aray} arr 
 * @param {* Number} size 
 */

var chunkArrayInGroups = function chunkArrayInGroups() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var result = [];
    var al = arr.length;
    var k = Math.ceil(al / size);
    for (var i = 0; i < k; i++) {
        var a = arr.slice(0, size);
        arr = arr.slice(size);
        console.log("a = ", a);
        console.log("arr = ", arr);
        result.push(a);
    }
    console.log("result = ", result);
    return result;
};