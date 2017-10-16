// Sorry! 'Document This' wasn't able to produce documentation at the current caret position.

/**
 * @author xgqfrms
 * @description
 * @private
 * @param {*} arr_or_obj 
 * @param {*} debug 
 */

const getAllKeys = (arr_or_obj = {}, debug = false) => {
    // getAllKeys
    let any = (typeof arr_or_obj === "object") ? arr_or_obj : {};
    // typeof {}; // "object"
    // typeof []; // "object"
    // typeof {} === "object"; // true
    // typeof [] === "object"; // true
    // Array.isArray({}); // false
    // Array.isArray([]); // true
    let keys = [];
    if (Array.isArray(any)) {
        keys = Object.keys(any[0]);
    }else{
        keys = Object.keys(any);
    }
    if (debug) {
        console.log(`arr_or_obj = `, arr_or_obj);
        console.log(`any = `, any);
        console.log(`keys = `, keys);
    }
    // CCAC: Chrome Console Auto Copy
    copy(keys);
    return keys;
};


// test
getAllKeys(obj);
getAllKeys(obj, true);
getAllKeys(arr);


//IIFE
const keys = (() => {
    const getAllKeys = (arr_or_obj = {}, debug = false) => {
        // getAllKeys
        let any = (typeof arr_or_obj === "object") ? arr_or_obj : {};
        // typeof {}; // "object"
        // typeof []; // "object"
        // typeof {} === "object"; // true
        // typeof [] === "object"; // true
        // Array.isArray({}); // false
        // Array.isArray([]); // true
        let keys = [];
        if (Array.isArray(any)) {
            keys = Object.keys(any[0]);
        }else{
            keys = Object.keys(any);
        }
        if (debug) {
            console.log(`arr_or_obj = `, arr_or_obj);
            console.log(`any = `, any);
            console.log(`keys = `, keys);
        }
        // CCAC: Chrome Console Auto Copy
        copy(keys);
        return keys;
    };
    let body = document.querySelector(`body`),
        str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    objs = JSON.parse(str);
    let keys = getAllKeys(objs);
    // let keys = getAllKeys(objs, true);
    text = JSON.stringify(keys, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(`beforeend`, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();


// test 
/* 


let obj = {
    "key1": 1,
    "key2": 2,
    "key3": 3
};

let arr = [
    {
        key: 111,
        name: `xgqfrms`,
        age: 23
    },
    {
        key: 333,
        name: `webgeeker`,
        age: 23
    }
];




*/