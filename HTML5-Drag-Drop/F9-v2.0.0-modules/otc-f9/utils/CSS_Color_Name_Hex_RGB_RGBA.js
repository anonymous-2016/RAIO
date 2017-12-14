"use strict";

/**
 * @name CSS Color Codes Generator
 * @author xgqfrms 2017-12-13
 * @license MIT
 * @description CSS_Color_Name_Hex_RGB_RGBA
 *
 * @param {* String} key
 * @param {* Boolean} debug
 *
 * @link https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#colors_table
 * @link https://www.w3.org/TR/css-color-3/
 * @link https://en.wikipedia.org/wiki/Web_colors
 *
 */

// Color_Name === Keyword
const purple = `
    color: purple;
    font-size: 23px;
`;


// Color_Hex === RGB hex value
const ff0 = `
    color: #ff0;
    font-size: 23px;
`;
const ff0000 = `
    color: #ff0000;
    font-size: 23px;
`;

// Color_RGB
const rgb_ff0 = `
    color: rgb(255, 255, 0);
    font-size: 23px;
`;


// Color_RGBA
const rgba_ff01 = `
    color: rgb(255, 255, 0, 1);
    font-size: 23px;
`;

// HSL: hsl(0, 0%, 100%)
// HSV: hsv(0, 0%, 100%)
// HWB: hwb(0, 100%, 0%)
// CMYK: cmyk(0%, 0%, 0%, 0%)

// CSS Color Codes Generator
// CSSColorCodesGenerator : CCCG
const CSSColorCodesGenerator = (key = ``, debug = false) => {
    // alias
    // purple === ff0 === ff0000 === rgb_ff0 === rgba_ff01
    // purple === hashff0 === hashff0000 === rgb_ff0 === rgba_ff01
    // length ??? prefix ??? Regex
    let result = ``,
        keyword = ``;
    if (typeof key === "string") {
        // hash #
        if (key.includes(`#`)) {
            // hex
            (key.length === 4) ? keyword = `hex` : keyword = `full_hex`;
        }else{
            // name
            keyword = `name`;
        }
    }else if (Array.isArray(key) && key.length === 3) {
        // rgb
        keyword = `rgb`;
    }else if (Array.isArray(key) && key.length === 4) {
        // rgba
        keyword = `rgba`;
    }
    switch (keyword) {
        case `name`:
            result = `color: ${key};`;
            break;
        case `hex`:
            let hex = key.replace(/#/ig, ``);
            // let fullhex = `${(key[0]).toString().repeat(2)}${(key[1]).toString().repeat(2)}${(key[2]).toString().repeat(2)}`;
            // result = `color: #${key[0]}${key[1]}${key[2]};`;
            result = `color: #${hex};`;
            break;
        case `full_hex`:
            let hex_key = key.replace(/#/ig, ``);
                // fullhex = `${hex_key.slice(0,2)}${hex_key.slice(2,4)}${hex_key.slice(4)}`;
            // result = `color: #${fullhex};`;
            result = `color: #${hex_key};`;
            break;
        case `rgba`:
            result = `color: rgba(${key[0]}, ${key[1]}, ${key[2]}, ${key[3]});`;
            break;
        case `rgb`:
        default:
            result = `color: rgb(${key[0]}, ${key[1]}, ${key[2]});`;
            break;
    }
    return result;
};

export default CSSColorCodesGenerator;
export {CSSColorCodesGenerator};
// export default CCCG;
// export {CCCG};






/*


# CSS Color Codes

https://www.quackit.com/css/css_color_codes.cfm

# wiki & Web colors

https://en.wikipedia.org/wiki/Web_colors

# w3schools & colors_picker

https://www.w3schools.com/html/html_colors.asp
https://www.w3schools.com/cssref/css_colors.asp
https://www.w3schools.com/colors/colors_picker.asp?colorhex=F0F8FF
https://www.w3schools.com/colors/colors_mixer.asp?colorbottom=F0F8FF&colortop=FFFFFF



*/


/*

# Number.prototype.toString()
> bug!

// BAD
Number.toString();

// OK
(Number).toString();

// OK
let Numbe = Numbe || 666;
Numbe.toString();

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

// # , !== ;

const CSS_Colors = (key = ``, debug = false) => {
    let result = ``,
        keyword = ``;
    if (typeof key === "string") {
        if (key.includes(`#`)) {
            // hex && hash #
            (key.length === 4) ? keyword = `hex` : keyword = `full_hex`;
        }else{
            // name
            keyword = `name`;
        }
    }else if (Array.isArray(key) && key.length === 3) {
        // rgb
        keyword = `rgb`;
    }else if (Array.isArray(key) && key.length === 4) {
        // rgba
        keyword = `rgba`;
    }
    switch (keyword) {
        case `name`:
            result = `color: ${key};`;
            break;
        case `hex`:
            let hex = key.replace(/#/ig, ``);
            result = `color: #${hex};`;
            break;
        case `full_hex`:
            let hex_key = key.replace(/#/ig, ``);
            result = `color: #${hex_key};`;
            break;
        case `rgba`:
            result = `color: rgba(${key[0]}, ${key[1]}, ${key[2]}, ${key[3]});`;
            break;
        case `rgb`:
        default:
            result = `color: rgb(${key[0]}, ${key[1]}, ${key[2]});`;
            break;
    }
    return result;
};

/*

CSS_Colors(`purple`);
CSS_Colors(`#f0f`);
CSS_Colors(`#ff00ff`);
CSS_Colors([255, 0, 255]);
CSS_Colors([255, 0, 255]);

*/
