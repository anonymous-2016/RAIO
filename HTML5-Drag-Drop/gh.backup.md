# dashTocamelCase

> partly OK

```js

/**
 * xgqfrms 2017.10.09
 * dash To camelCase
 * @param {str} String 
 */

const dashTocamelCase = (str = `data-dash-to-camelCase-function`, debug = false) => {
    // CSS & RGB-A
    const red = `
        color: red;
        font-size: 16px;
    `;
    const green = `
        color: green;
        font-size: 16px;
    `;
    const blue = `
        color: blue;
        font-size: 16px;
    `;
    // const debug = false; // true
    // force_str
    let fs = str.toString();
    let al = fs.match(/(-)/ig).length;
    // fs = fs.substr(5);
    // remove `data-` & in case no `data-`
    fs = fs.replace(/(data-)/i, ``);
    let result = ``;
    for(let i =0; i < al; i++){
        if (debug) {
            console.log(`fs.indexOf("-") = \t`, fs.indexOf(`-`));
        }
        if (fs.indexOf(`-`) !== -1) {
            result += fs.substr(0, fs.indexOf(`-`));
            if (debug) {
                console.log(`result 1 = \t`, result);
            }
            result += fs.substr(fs.indexOf(`-`), 2).replace(/(-)/, ``).toUpperCase();
            fs = fs.substr(fs.indexOf(`-`) + 2);
            if (debug) {
                console.log(`result 2 = \t`, result);
                console.log(`%c fs 1 = \t`, red, fs);
            }
        }else{
            result += fs;
            if (debug) {
                console.log(`%c fs 2 = \t`, green, fs);
                console.log(`result 3 = \t`, result);
            }
        }
    }
    if (debug) {
        console.log(`%c fs = \t`, blue, fs);
        console.log(`result = \t`, result);
    }
    return result;
};

dashTocamelCase();
// "dashToCamelCaseFunction"



```

# OK

```js
/**
 * xgqfrms 2017.10.09
 * dash To camelCase
 * @param {str} String
 * @param {debug} Boolean
 */

const dashTocamelCase = (str = `data-dash-to-camelCase-function`, debug = false) => {
    // CSS & RGB-A
    const red = `
        color: red;
        font-size: 16px;
    `;
    const green = `
        color: green;
        font-size: 16px;
    `;
    const blue = `
        color: blue;
        font-size: 16px;
    `;
    // const debug = false; // true
    // force_str
    let fs = str.toString();
    let al = fs.match(/(-)/ig).length;
    if(fs.indexOf(`data-`) === -1){
        // in case no `data-`
        al = fs.match(/(-)/ig).length + 1;
    }
    // fs = fs.substr(5);
    // remove `data-` & in case no `data-`
    fs = fs.replace(/(data-)/i, ``);
    let result = ``;
    for(let i =0; i < al; i++){
        if (debug) {
            console.log(`fs.indexOf("-") = \t`, fs.indexOf(`-`));
        }
        if (fs.indexOf(`-`) !== -1) {
            result += fs.substr(0, fs.indexOf(`-`));
            if (debug) {
                console.log(`result 1 = \t`, result);
            }
            result += fs.substr(fs.indexOf(`-`), 2).replace(/(-)/, ``).toUpperCase();
            fs = fs.substr(fs.indexOf(`-`) + 2);
            if (debug) {
                console.log(`result 2 = \t`, result);
                console.log(`%c fs 1 = \t`, red, fs);
            }
        }else{
            result += fs;
            if (debug) {
                console.log(`%c fs 2 = \t`, green, fs);
                console.log(`result 3 = \t`, result);
            }
        }
    }
    if (debug) {
        console.log(`%c fs = \t`, blue, fs);
        console.log(`result = \t`, result);
    }
    return result;
};

dashTocamelCase();
// "dashToCamelCaseFunction"

/* test */

let str1 = `data-index-number-name`;
dashTocamelCase(str1);
// "indexNumberName"
let str2 = `index-number-name`;
dashTocamelCase(str2, true);
// "indexNumberName"


```
