"use strict";

/**
 *
 * @author xgqfrms
 * @copyright MIT
 * @description 2018.02.22 & ES6 Proxy
 *
 * @param {Object} target
 * @param {String} key
 */

const test = (target, key) => {
    return (key in target) ? target[key] : `Sorry, \`${key}\` is undefined!`;
};



let target = {
    a: 1,
    b: 2,
    c: 3,
};

const handler = {
    // get
    get: (target, key) => {
        return (
            (key in target) ? target[key] : `Sorry, \`${key}\` is undefined!`
        );
    },
    // set: () => {
    //     //
    // },
};

let proxy = new Proxy(target, handler);

console.log(proxy.a);
// 1
console.log(proxy.b);
// 2
console.log(proxy.c);
// 3
console.log(proxy.xgqfrms);
// Sorry, `xgqfrms` is undefined!


// new instance
let proxy_error = new Proxy(target, handler);

console.log(proxy_error.meaningOfLife);
// Sorry, `meaningOfLife` is undefined!
