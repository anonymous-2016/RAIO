// "use strict";

/* IIFE */
(
    () => {
        console.log(`ES6 & IIFE`);
    }
)();

/**
 * 
 * @param {*} url 
 */

const importantInfos = (url) => {
    // important-infos
    let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
    /* array.forEach(function(element) {
        // 
    }, this); */
    for (let i = 0; i < tds.length; i++) {
        var element = array[i];
        tds[i].innerText = "xxxxxxxxxxx";
        // 
    }
};

arr = [];

for(let key in obj){
    arr.push(key);
}

// (11) ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"]

// shit api
// UI-Array
const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];



let keys = arr.map(
    obj => obj.key
);

// ["涉及概念", "概念"]

// "sjgn": "涉及概念"
// "bdl": "52周波动率"



let ui = ["概念", "涉及概念"];
let table = [];
ui.map(
    (k, i) => {
        arr.map(
            (obj) => {
                if(k === obj.key){
                    table.push(obj.value);
                }
            }
        );
    }
);

























