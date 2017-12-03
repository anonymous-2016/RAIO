const getURLGcode = () => {
    // getURLGcode()
    let params = window.location.search;
    // "?{key:%20%22value%22,%20aaa:%20%22aaa%22}"
    let str = decodeURI(params);
    // "?{key: "value", aaa: "aaa"}"
    let sub_str = str.substr(1);
    // "{key: "value", aaa: "aaa"}"
    // JSON.parse(sub_str);
    // Uncaught SyntaxError: Unexpected token k in JSON at position 1 at JSON.parse
    JSON.parse(`{"key": "value", "aaa": "aaa"}`);
    // {key: "value", aaa: "aaa"}
    // let obj = JSON.parse(JSON.stringify(eval("(" + str + ")")));
    let obj = JSON.parse(JSON.stringify(eval(`(${sub_str})`)));
    // JSON.parse(JSON.stringify(`${sub_str}`));
    // JSON.parse(JSON.stringify(``+`${sub_str}`+``));
    // JSON.parse(JSON.stringify(`${"(" + sub_str + ")"}`));
};

const getURLSeccode = (debug = false) => {
    let params = window.location.search;
    let str = decodeURIComponent(params);
    // "?secucode=000001&market=4609&sid=hs".substr(10, 6);
    // "000001"
    let seccode = str.substr(10, 6);
    // parseInt("000001");
    // 1
    if (debug) {
        console.log(`seccode = `, seccode);
    }
    return seccode;
};


// https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs

// getURLSeccode();
getURLSeccode(true);
// "000001"


/*

let params = window.location.search;
// "?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs"

let sub_str = params.substr(11, 9);
// "000001.SZ"

encodeURIComponent(myUrl)
encodeURIComponent(value).replace(/%20/g,'+')


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// query string: ?foo=lorem&bar=&baz
var foo = getParameterByName('foo'); // "lorem"
var bar = getParameterByName('bar'); // "" (present with empty value)
var baz = getParameterByName('baz'); // "" (present with no value)
var qux = getParameterByName('qux'); // null (absent)


*/

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// query string: ?foo=lorem&bar=&baz
var foo = getParameterByName('foo'); // "lorem"
var bar = getParameterByName('bar'); // "" (present with empty value)
var baz = getParameterByName('baz'); // "" (present with no value)
var qux = getParameterByName('qux'); // null (absent)




function fixedEncodeURIComponent(str){
    return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
}


// "?gilcode=000001.SZ&name=平安银行&type=0&sid=hs"

// https://www.url-encode-decode.com/

/*


# json specification

> must be double quotes & ""

```js

    {
        "key": "value",
        "key2": "value2"
    }


```

https://json.org/

https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf


http://json-schema.org/documentation.html

*/




