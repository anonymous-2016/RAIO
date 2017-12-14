
/**
 *
 * @description CSS_Color_Name_Hex_RGB_RGBA
 *
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


const CSS_Colors = (key = ``, debug = false) => {
    // alias
    // purple === ff0 === ff0000 === rgb_ff0 === rgba_ff01
    // length ??? prefix ??? Regex
    let result = ``,
        keyword = key.replace(/_/ig, `0`);
    switch (keyword) {
        case `name`:
            result = `color: ${key};`;
            break;
        case `hex`:
            result = `color: #${key[0]}${key[1]}${key[2]};`;
            break;
        case `full_hex`:
            result = `color: #${key[0]}${key[1]}${key[2]};`;
            break;
        case `rgba`:
            result = `color: rgb(${key[0]}, ${key[1]}, ${key[2]}, ${key[3]});`;
            break;
        case `rgb`:
        default:
            result = `color: rgb(${key[0]}, ${key[1]}, ${key[2]});`;
            break;
    }
    return result;
};

export default ConsoleFormatJSON;
export {ConsoleFormatJSON};







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


