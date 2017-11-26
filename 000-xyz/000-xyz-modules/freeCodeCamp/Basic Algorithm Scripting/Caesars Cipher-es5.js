"use strict";

/**
 * rot13
 * xgqfrms
 * created 2017/10/13
 * 
 * @param {* String} str 
 * @param {* Boolean} debug 
 */

var rot13 = function rot13() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "xgqfrms";
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var Input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var Output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    var result = "";
    var sl = str.length;
    var regex = /\w/i;
    for (var i = 0; i < sl; i++) {
        // str[i] !== " "
        if (regex.test(str[i]) === true) {
            var index = Input.indexOf(str[i]);
            var value = Output[index];
            if (debug) {
                console.log("str[i] = ", str[i]);
                console.log("index = ", index);
                console.log("value  = ", value);
            }
            result += value;
        } else {
            var _value = str[i];
            if (debug) {
                console.log("str[i] = ", str[i]);
                console.log("value  = ", _value);
            }
            result += _value;
        }
        if (debug) {
            console.log("result  = \n", result);
        }
    }
    copy(result);
    return result;
};

// test
rot13();
rot13("SERR PBQR PNZC");
rot13("SERR PBQR PNZC", true);

rot13("SERR PBQR PNZC");
// should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!");
// should decode to "FREE PIZZA!"
rot13("SERR YBIR?");
// should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

