"use strict";

/**
 * xgqfrms 2017.10.09
 * dash To camelCase
 * @param {str} String
 * @param {debug} Boolean
 */

var dashTocamelCase = function dashTocamelCase() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data-dash-to-camelCase-function";
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // CSS & RGB-A
    var red = "\n        color: red;\n        font-size: 16px;\n    ";
    var green = "\n        color: green;\n        font-size: 16px;\n    ";
    var blue = "\n        color: blue;\n        font-size: 16px;\n    ";
    // const debug = false; // true
    // force_str
    var fs = str.toString();
    var al = fs.match(/(-)/ig).length;
    if (fs.indexOf("data-") === -1) {
        // in case no `data-`
        al = fs.match(/(-)/ig).length + 1;
    }
    // fs = fs.substr(5);
    // remove `data-` & in case no `data-`
    fs = fs.replace(/(data-)/i, "");
    var result = "";
    for (var i = 0; i < al; i++) {
        if (debug) {
            console.log("fs.indexOf(\"-\") = \t", fs.indexOf("-"));
        }
        if (fs.indexOf("-") !== -1) {
            result += fs.substr(0, fs.indexOf("-"));
            if (debug) {
                console.log("result 1 = \t", result);
            }
            result += fs.substr(fs.indexOf("-"), 2).replace(/(-)/, "").toUpperCase();
            fs = fs.substr(fs.indexOf("-") + 2);
            if (debug) {
                console.log("result 2 = \t", result);
                console.log("%c fs 1 = \t", red, fs);
            }
        } else {
            result += fs;
            if (debug) {
                console.log("%c fs 2 = \t", green, fs);
                console.log("result 3 = \t", result);
            }
        }
    }
    if (debug) {
        console.log("%c fs = \t", blue, fs);
        console.log("result = \t", result);
    }
    return result;
};

dashTocamelCase();
// "dashToCamelCaseFunction"

/* test */

var str1 = "data-index-number-name";
dashTocamelCase(str1);
// "indexNumberName"
var str2 = "index-number-name";
dashTocamelCase(str2, true);
// "indexNumberName"