import "babel-polyfill";

// import "whatwg-fetch";


const getParam = (key, debug = false) => {
    let search = decodeURIComponent(window.location.search),
        start = search.indexOf("?") + 1,
        value = ``;
    if (start < 1) {
        return;
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
        if (!debug) {
            console.log(`value =`, value);
        } else {

        }
        return value;
    }
};

window.OTC_SKIN = window.OTC_SKIN || ``;

// set params before DOM ready!
window.OTC_SKIN = getParam(`skin`) || `white`;

// IIFE
(() => {
    // load css
    // const css_arr = ["no-body.css", "index.css", "tabs.css", "common/module.css", "common/modal.css", "common/no-data.css"];
    const css_arr = ["index.css", "common/module.css", "common/modal.css", "tabs.css", "common/no-data.css"];
    const css_skins = ["black-skin", "white-skin"];
    let css_dom = document.querySelector(`head`);
    if (window.OTC_SKIN === "black") {
        //white-skin => black-skin
        for (let i = 0; i < css_arr.length; i++) {
            // console.log(`i =`, i);
            let href = `./css/${css_skins[0]}/${css_arr[i]}`;
            document.write(`<link rel="stylesheet" data-css="data-css-uid" href="${href}">`)
        }
    }else{
        if (window.OTC_SKIN === "white"){
            // black-skin => white-skin
            for (let i = 0; i < css_arr.length; i++) {
                // console.log(`i =`, i);
                let href = `./css/${css_skins[1]}/${css_arr[i]}`;
                document.write(`<link rel="stylesheet" data-css="data-css-uid" href="${href}">`)
            }
        }
    }
})();


// global variable
window.OTC_IP = window.OTC_IP || ``;
window.OTC_PATH = window.OTC_PATH || ``;
window.OTC_GILCODE = window.OTC_GILCODE || ``;


const url_origin = window.parent.location.origin;
window.OTC_IP = (url_origin.includes("http://localhost") || url_origin.includes("file://")) ? `http://10.1.5.202` : url_origin;
window.OTC_GILCODE = getParam(`gilcode`);
window.OTC_PATH = `/webservice/fastview/otcper`;


