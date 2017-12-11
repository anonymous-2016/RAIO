// import {DOM_queryAll, DOM_query} from "./utils/DOM";

// ??? no needs namespace anymore!

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
            }else{
                // break;
                continue;
            }
        }
        return value;
    }
});

// OTC_F9_FV.Utils.getParam(`secucode`);

const debug = false;
// const debug = false;


var STOCK_IP = STOCK_IP || ``;
var STOCK_Paths = STOCK_Paths || ``;
var STOCK_SECUCODE = STOCK_SECUCODE || ``;
var STOCK_GILCODE = STOCK_GILCODE || ``;

// ip: `http://10.1.5.202`,
// path: `/webservice/fastview/stock/stockfast07/`, // `/webservice/fastview/stock`
// gilcode: `600570.SH`


// STOCK_IP = OTC_F9_FV.Utils.getParam(`ip`);
// STOCK_IP = window.parent.location.host;

// STOCK_Paths = OTC_F9_FV.Utils.getParam(`path`);
// STOCK_Paths = window.parent.location.pathname;

// STOCK_SECUCODE = OTC_F9_FV.Utils.getParam(`secucode`);


// console.log(`STOCK_SECUCODE `, STOCK_SECUCODE);

