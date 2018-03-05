// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};

STOCK_F9_FV.Utils.getParam = STOCK_F9_FV.Utils.getParam || ((key, debug = false) => {
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
        console.log(`value = `, value);
        return value;
    }
});

window.STOCK_IP = window.STOCK_IP || ``;
window.STOCK_Paths = window.STOCK_Paths || ``;
window.STOCK_SecCode = window.STOCK_SecCode || ``;
window.STOCK_Skin = window.STOCK_Skin || ``;
// console.log("0, window.STOCK_Skin = ", window.STOCK_Skin);

// set params before DOM ready!
window.STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
window.STOCK_Skin = STOCK_F9_FV.Utils.getParam(`skin`) || `white`;
// window.STOCK_IP = window.parent.location.origin.includes("http://localhost") ? `http://10.1.5.202` : window.parent.location.origin;
const url_origin = window.parent.location.origin;
window.STOCK_IP = (url_origin.includes("http://localhost") || url_origin.includes("file://")) ? `http://10.1.5.202` : url_origin;
// window.parent.location.origin; // "file://"
// window.STOCK_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
// http://localhost:3002/index.html?gilcode=600570.SH&skin=black
window.STOCK_Paths = `/webservice/fastview/stock`;



document.addEventListener(`DOMContentLoaded`, (e) => {
    // console.log("2, (DOMContentLoaded)DOM fully loaded and parsed");
    // load css
    const css_arr = ["no-body.css", "sidebar.css", "common/module.css", "common/modal.css", "common/more.css"];
    const css_skins = ["black-skin", "white-skin"];
    const css_links = document.querySelectorAll(`[data-css="data-css-uid"]`);
    let css_dom = document.querySelector(`head`);
    if (window.STOCK_Skin === "black") {
        // console.log(`window.STOCK_Skin = `, window.STOCK_Skin, typeof(window.STOCK_Skin));
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
        if (window.STOCK_Skin === "white" && css_links[0].href.includes(`black-skin`)){
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
});
