// RGB to Hex & RGBA to Hex.js



/**
 * RGB to Hex & RGBA to Hex & AutoCopy
 * xgqfrms
 * created 2017.10.23
 * @param {* uid} id
 * @param {Boolean} debug
 */

const RGB2Hex_RGBA2Hex = (str = ``) => {
    let hex = `#`;
    const isRGB = (str = ``) => {
        let result = false;
        if (str.includes(`rgb(`) && (str.indexOf(`(`) === 3)) {
            result = true;
        }
        return result;
    };
    // because default RGB, so just need to tell whether is RGBA!
    const isRGBA = (str = ``) => {
        let result = false;
        if (str.includes(`rgba(`) && (str.indexOf(`(`) === 4)) {
            result = true;
        }
        return result;
    };
    if (isRGBA(str)) {
        // string to array ???
        // 0~255 => 0~F & 16 ??? Math.round()
        // #9c27b0 => rgba(156, 39, 176, 1); => hsl(291, 64%, 42%); & not need calc alpha value
    }else{
        //
    }
    return hex;
};



/** all rgbToHex **/


function componentToHex(c) {
    var hex = c.toString(16);
    // 16 & hex
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// console.log(rgbToHex(0, 51, 255));
// #0033ff


const rgbToHex = (r, g, b) => {
    let result = `#`;
    result += [r, g, b].map(x => {
        const hex = x.toString(16);
        // ES8 & String.padStart(2, '0')
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    // Array.join('') & array to string
    return result;
};

console.log(rgbToHex(0, 51, 255)); // '#0033ff'


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

console.log(rgbToHex(0, 51, 255)); // '#0033ff'

const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16))


console.log(hexToRgb("#0033ff")) // [0, 51, 255]
console.log(hexToRgb("#03f")) // [0, 51, 255]


/*

'abc'.padStart(10); // " abc"
'abc'.padStart(10, "foo"); // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"


https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66

https://ponyfoo.com/articles/ecmascript-string-padding

https://codeburst.io/learn-javascript-es-2017-string-padding-padstart-padend-88e90783e7de

https://github.com/es-shims/String.prototype.padStart
https://github.com/tc39/proposal-string-pad-start-end




*/



function rgbToHex(r,g,b) {
    return "#"+("00000"+(r<<16|g<<8|b).toString(16)).slice(-6);
}


function pad(number, length) {
    var str = '' + number;
    while (str.length < length) str = '0' + str;
    return str;
}

function toRGBHex(r,g,b) {
    return pad(r.toString(16),2) + pad(g.toString(16),2) + pad(b.toString(16),2);
}


// function to generate the hex code
function getHex(dec){
    var hexArray = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var code1 = Math.floor(dec / 16);
    var code2 = dec - code1 * 16;
    var decToHex = hexArray[code2];
    return (decToHex);
}


/*

number.toString(radix);

only number variable is OK!

let num = 255;
255.toString(16);
// Error & Uncaught SyntaxError: Invalid or unexpected token
num.toString(16);
// "ff"
// "ff" => "FF"
num.toString(16).toUpperCase();
// "FF"



*/


function hexColour(c) {
    if (c < 256) {
        // Math.abs() & toString(16)
        return Math.abs(c).toString(16);
    }
    return 0;
}

console.log(hexColour(233));
// expected output: "e9"

console.log(hexColour('11'));
// expected output: "b"
