// import "babel-polyfill";

import "whatwg-fetch";


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
        // console.log(`value = `, value);
        return value;
    }
};

window.STOCK_Skin = window.STOCK_Skin || ``;
// set params before DOM ready!
window.STOCK_Skin = getParam(`skin`) || `white`;


window.STOCK_IP = window.STOCK_IP || ``;
window.STOCK_PATH = window.STOCK_PATH || ``;
window.STOCK_GILCODE = window.STOCK_GILCODE || ``;

const url_origin = window.parent.location.origin;
window.STOCK_IP = (url_origin.includes("http://localhost") || url_origin.includes("file://")) ? `http://10.1.5.202` : url_origin;
window.STOCK_PATH = `/webservice/fastview/stock`;
window.STOCK_GILCODE = getParam(`gilcode`);

// const url = `http://localhost:3000/index.html?gilcode=600570.SH&skin=white`;
// const url = `http://localhost:3000/index.html?gilcode=600570.SH&skin=black`;


/*

delay todo

*/





