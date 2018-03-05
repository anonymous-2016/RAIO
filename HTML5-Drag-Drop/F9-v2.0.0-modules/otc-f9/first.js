// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Utils = OTC_F9_FV.Utils || {};

OTC_F9_FV.Utils.getParam = OTC_F9_FV.Utils.getParam || ((key, debug = false) => {
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
});



// global variable
window.OTC_IP = window.OTC_IP || ``;
window.OTC_PATH = window.OTC_PATH || ``;
window.OTC_GILCODE = window.OTC_GILCODE || ``;
window.OTC_SKIN = window.OTC_SKIN || ``;



// set params before DOM ready!
window.OTC_GILCODE = OTC_F9_FV.Utils.getParam(`gilcode`);
window.OTC_SKIN = OTC_F9_FV.Utils.getParam(`skin`) || `white`;
window.OTC_IP = window.parent.location.origin.includes("http://localhost") ? `http://10.1.5.202` : window.parent.location.origin;
// window.OTC_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
// http://localhost:3004/index.html?gilcode=600570.SH&skin=black
window.OTC_PATH = `/webservice/fastview/otcper`;

// IIFE
(() => {
        // console.log("2, (DOMContentLoaded)DOM fully loaded and parsed");
    // load css
    const css_arr = ["no-body.css", "index.css", "tabs.css", "common/module.css", "common/modal.css", "common/no-data.css"];
    const css_skins = ["black-skin", "white-skin"];
    const css_links = document.querySelectorAll(`[data-css="data-css-uid"]`);
    let css_dom = document.querySelector(`head`);
    if (window.OTC_SKIN === "black") {
        // console.log(`window.OTC_SKIN = `, window.OTC_SKIN, typeof(window.OTC_SKIN));
        //white-skin => black-skin
        if (css_links[0].href.includes(`white-skin`)) {
            for (let i = 0; i < css_links.length; i++) {
                let href= `./css/${css_skins[0]}/${css_arr[i]}`;
                css_links[i].setAttribute(`href`, href);
            }
        }else{
            // use default
        }
    }else{
        // black-skin => white-skin
        if (window.OTC_SKIN === "white" && css_links[0].href.includes(`black-skin`)){
            for (let i = 0; i < css_links.length; i++) {
                let href= `./css/${css_skins[1]}/${css_arr[i]}`;
                css_links[i].setAttribute(`href`, href);
            }
        }else{
            // use default
        }
    }
    setTimeout(() => {
        // hide loading div & css
        // ???
        // show body
        const body = document.querySelector(`body[data-body="no-body"]`);
        body.dataset.body = "show-body";
    }, 300);
})();


document.addEventListener(`DOMContentLoaded`, (e) => {
    // delay, not too good!
});

