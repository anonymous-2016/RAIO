/**
 * @author xgqfrms
 * @license MIT
 * @description ES6 String Duplicate
 * @param {Array} arr
 */

// ES6_String_Duplicate


let arr = [1, 2, 3, 4, 5];
const ES6_String_Duplicate = arr => `${arr.toString()},`.repeat(2).slice(0, -1).split(`,`).map(item => parseInt(item));
ES6_String_Duplicate(arr);
// (10) [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

/**
 * @author xgqfrms
 * @license MIT
 * @description ES6 String Duplicate
 * @param {Array} arr
 */

function duplicate(arr= [], debug = false) {
    return arr.concat(arr);
}


