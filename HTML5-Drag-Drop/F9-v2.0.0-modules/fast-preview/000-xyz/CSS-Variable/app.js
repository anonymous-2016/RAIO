"use strict";
/**
 * CSS & var() & calc()
 * xgqfrms
 * creadted 2017.12.29
 * @param {* String} url
 * @param {* Array} uids
 * @param {* Boolean} debug
 */

const changeColorButton = (uids = `[data-btn="change-color-btn"]`, debug = false) => {
    let doms = document.querySelectorAll(uids);
    let table = document.querySelector(`[data-table="table"]`);
    // table
    let color = `data-color="red"`;
    for (let i = 0; i < doms.length; i++) {
        doms[i].addEventListener(`click`, (e) => {
            if (debug) {
                console.log(`e = \n`, e);
                console.log(`e.target = \n`, e.target);
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.dataset.color = \n`, e.target.dataset.color, typeof e.target.dataset.color);
                console.log(`e.target.style = \n`, e.target.style);
            }
            console.log(`e.target = \n`, e.target);
            // dataset color
            let color = e.target.dataset.color;
            let background = e.target.dataset.background;
            table.style.setProperty(`--color`, `var(--${color})`);
            table.style.setProperty(`--background`, `var(--${color})`);
        });
    }
};


// params
// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};

STOCK_F9_FV.Utils.getParam = STOCK_F9_FV.Utils.getParam || ((key, debug = false) => {
    let search = decodeURIComponent(window.location.search),
        start = search.indexOf("?") + 1,
        value = ``;
    if (start < 1) {
        return;// undefined
    }else{
        let queryString = search.substr(start),
            paraNames = queryString.split("&");// Array
        for (let i = 0; i < paraNames.length; i++) {
            let begin = paraNames[i].indexOf("=");
            if (begin > 0) {
                let pname = paraNames[i].substring(0, begin),
                    pvalue = paraNames[i].substring(begin + 1);
                if (key === pname) {
                    value = pvalue;
                    break;
                }
            }
        }
        console.log(`value = `, value);
        return value;
    }
});

window.onload = () => {
    let skin = STOCK_F9_FV.Utils.getParam(`skin`) || `white`,
        table = document.querySelector(`[data-table="table"]`),// root & html/body ???
        // color = table.style.color; // only for in-line style
        color = window.getComputedStyle(table, null).getPropertyValue(`color`),
        background = window.getComputedStyle(table, null).getPropertyValue(`background`),
        background_color = window.getComputedStyle(table, null).getPropertyValue(`background-color`);
        // let style = window.getComputedStyle(element, [pseudoElt]);
    console.log(`table init color = `, color, typeof color);// RGB ? #Hex
    console.log(`table init background = `, background, typeof background);
    console.log(`table init background_color = `, background_color, typeof background_color);
    // rgba(255, 0, 255, 0.7) string
    // rgb(0, 0, 0) string
    if (skin === `black`) {
        if (color === `#fff`) {
            // css var
            table.style.setProperty(`--color`, `var(--black_color)`);
            table.style.setProperty(`--background`, `var(--black_backgroud)`);
            // js var
            // table.style.setProperty(`--color`, `var(--${black_color})`);
            // table.style.setProperty(`--background`, `var(--${black_backgroud})`);
        }else{
            // do nothing
        }
    }else{
        if (color === `#000`) {
            // css var
            table.style.setProperty(`--color`, `var(--white_color)`);
            table.style.setProperty(`--background`, `var(--white_backgroud)`);
            // js var
            // table.style.setProperty(`--color`, `var(--${white_color})`);
            // table.style.setProperty(`--background`, `var(--${white_backgroud})`);
        }else{
            // do nothing
        }
    }
    // autoChangeSkinColor();
};

const autoChangeSkinColor = () => {
    //
};


const isRGB = (str = ``) => {
    let result = false;
    if (str.includes(`rgb(`) && (str.indexOf(`(`) === 3)) {
        result = true;
    }
    return result;
};

const isRGBA = (str = ``) => {
    let result = false;
    if (str.includes(`rgba(`) && (str.indexOf(`(`) === 4)) {
        result = true;
    }
    return result;
};


// RGB/RGBA => HEX

const rgbToHex = (r, g, b) => {
    let result = `#`;
    // Array.map() & +=
    result += [r, g, b].map(x => {
        const hex = x.toString(16);
        // ES8 & String.padStart(2, '0')
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
    // Array.join('') & array to string
    return result;
};

// console.log(rgbToHex(0, 51, 255)); // '#0033ff'
