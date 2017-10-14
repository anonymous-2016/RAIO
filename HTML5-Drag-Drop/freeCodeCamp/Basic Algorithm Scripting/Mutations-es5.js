"use strict";

var Mutations = function Mutations() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    // debug = true;
    var result = true;
    var al_first = arr[0].length,
        al_second = arr[1].length,
        // enum all value
    arr_first = arr[0].toLowerCase(),
        // ignore Capital Case
    arr_second = arr[1].toLowerCase(); // ? regex /()/ig
    for (var i = 0; i < al_second; i++) {
        var value = arr_first.indexOf(arr_second[i]);
        // `===` is much better than `!==`, in this case / situation
        if (value === -1) {
            result = false;
            if (debug) {
                console.log("value = -1 \n", i, arr_second[i]);
            }
            break;
        } else {
            // do nothing!
        }
    }
    if (debug) {
        console.log("result = ", result);
    }
    copy(result);
    return result;
};



/* 




function mutation(arr) {
    // debug = true;
    var result = true;
    var al_first = arr[0].length,
        al_second = arr[1].length,
        arr_first = arr[0].toLowerCase(),
        arr_second = arr[1].toLowerCase(); 
    for (var i = 0; i < al_second; i++) {
        var value = arr_first.indexOf(arr_second[i]);
        if (value === -1) {
            result = false;
            break;
        } else {
            // do nothing!
        }
    }
    return result;
}

mutation(["hello", "hey"]);





*/