/**
 * String To JSON & AutoCopy
 * xgqfrms
 * created 2017.10.12
 * @param {Boolean} debug 
 */

const StringToJSONAndAutoCopy = (debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
};

/* test */
StringToJSONAndAutoCopy();
StringToJSONAndAutoCopy(true);


// IIFE
const json = ((debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();

typeof json;
// "string"




/* getAllkeysRecursive */

// IIFE
((json) => {
    // getAllkeysRecursive(obj, true);
    console.log(`json = \n`, json);
    // object
    const obj = json;// Array ???
    let keys = [];
    const getKeys = (obj) => {
        let keys = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
                let keys_arr = getKeys(obj[key][0]);
                let keys_str = JSON.stringify(getKeys(obj[key][0]));
                // keys.push(`${key}: [${keys_arr}]`);
                // ["zd", "zdf", "jnzdf", "key: ["zd","zdf","jnzdf"]"]
                // keys_str
                keys.push(`${key}: ${keys_str}`);
                // keys.push(`${key}: [${keys_str}]`);
                // ["zd", "zdf", "jnzdf", "key: [["zd","zdf","jnzdf"]]"]
            }else{
                // keys.push(obj[key]);
                keys.push(key);
            }
        }
        return keys;
    }
    keys = getKeys(obj);
    copy(keys);// CCAC: Chrome Console Auto Copy
    return keys;
})(json = JSON.parse(json));
// pass json to anonymous function
// string json ??? JSON.parse(json);

// OK
// ["zd", "zdf", "jnzdf", "zdf3", "zdf12", "beta", "details: [sjz,gj,cjl,szzs]"]




/* 

two => one

// IIFE
const json = ((debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();

typeof json;
// "string"


// IIFE
((json) => {
    // getAllkeysRecursive(obj, true);
    console.log(`json = \n`, json);
    // object
    const obj = json;// Array ???
    let keys = [];
    const getKeys = (obj) => {
        let keys = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
                let keys_arr = getKeys(obj[key][0]);
                let keys_str = JSON.stringify(getKeys(obj[key][0]));
                // keys.push(`${key}: [${keys_arr}]`);
                // ["zd", "zdf", "jnzdf", "key: ["zd","zdf","jnzdf"]"]
                // keys_str
                keys.push(`${key}: ${keys_str}`);
                // keys.push(`${key}: [${keys_str}]`);
                // ["zd", "zdf", "jnzdf", "key: [["zd","zdf","jnzdf"]]"]
            }else{
                // keys.push(obj[key]);
                keys.push(key);
            }
        }
        return keys;
    }
    keys = getKeys(obj);
    copy(keys);// CCAC: Chrome Console Auto Copy
    return keys;
})(json = JSON.parse(json));
// pass json to anonymous function
// string json ??? JSON.parse(json);

// OK
// ["zd", "zdf", "jnzdf", "zdf3", "zdf12", "beta", "details: [sjz,gj,cjl,szzs]"]


*/