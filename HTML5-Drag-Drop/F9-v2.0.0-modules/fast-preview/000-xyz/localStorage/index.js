"use strict";

// import "babel-polyfill";
// import "whatwg-fetch";

/*
    let left = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];
    localStorage.setItem("left", left);
    localStorage.getItem("left");
    // id="left-sortable-container"
    // id="right-sortable-container"
    // data-div-module-uid="div-module-stockfast01"
    // data-dropped-uid="module-data-stockfast01"
*/


const getItems = (uid = ``, modules = ``, length = 12, debug = false) => {
    let result = [],
        box = document.querySelector(`${uid}`),
        items = box.querySelectorAll(`${modules}`);
        // items = box.children;
    for (let i = 0; i < items.length; i++) {
        if (items[i].dataset.droppedUid !== undefined) {
            let module_uid = items[i].dataset.droppedUid.substr(length);
            if (debug) {
                console.log(`module_uid =`, module_uid);
            }
            result.push(module_uid);
        }else{
            // no data
        }
    }
    if (debug) {
        console.log(`result =`, JSON.stringify(result, null, 4));
    }
    return result;
};

var left = left || [],
    right = right || [];

// let left = left || [],
//     right = right || [];
// init flag
const initModules = () => {
    left = localStorage.getItem("left");
    right = localStorage.getItem("right");
    // call customize_init();
};

// modify
const modifyModules = (debug = false) => {
    let modules = `[data-div-module-uid*="div-module"]`,
        left_uid = `#left-sortable-container`,
        right_uid = `#right-sortable-container`,
        length = 12;
    if (localStorage.length !== 0) {
        // all clear
        // localStorage.clear();
        // clear & reset
        localStorage.removeItem("left");
        localStorage.removeItem("right");
    }
    // get
    left = getItems(left_uid, modules, length);
    right = getItems(right_uid, modules, length);
    if (debug) {
        console.log(`left =`, JSON.stringify(left, null, 4));
        console.log(`right =`, JSON.stringify(right, null, 4));
    }
    localStorage.setItem("left", left);
    localStorage.setItem("right", right);
};



// test
left = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];

// localStorage
localStorage.setItem("left", left);

// cookie
document.cookie = `left=${left}; `;
// expires= ???
// document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 UTC;";

// document.cookie = "; expires=Thu, 01 Jan 2050 00:00:00 GMT; domain=10.1.5.202; path=/;";
// IP bug ??? domain

document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 GMT; path=/;";
document.cookie = "expires=Thu, 01 Jan 2050 00:00:00 GMT; path=/stock/f9/fastview/; ";

// document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 GMT; domain=wakatime.com; path=/;";
// document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 GMT; domain=www.quirksmode.org; path=/;";
// domain=www.quirksmode.org;
getCookies(`expires`);
// "Thu, 01 Jan 2020 00:00:00 GMT"
getCookies(`path`);
// "Thu, 01 Jan 2020 00:00:00 GMT"
getCookies(`domain`);
// null
getCookies(`path`);
// null


/*

new Date().toGMTString();
"Mon, 19 Mar 2018 11:03:18 GMT"

*/
