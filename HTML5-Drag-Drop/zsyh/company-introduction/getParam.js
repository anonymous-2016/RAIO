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
        let queryString = search.substring(start),
            // "secucode=000001&market=4609&sid=hs"
            paraNames = queryString.split("&");// Array
            // ["secucode=000001", "market=4609", "sid=hs"]
        for (let i = 0; i < paraNames.length; i++) {
            let begin = paraNames[i].indexOf("=");
            if (begin > 0) {
                let pname = paraNames[i].substring(0, begin),
                    pvalue = paraNames[i].substring(begin + 1);
                    if (debug) {
                        console.log(`pname`, pname);
                        // pname secucode
                        console.log(`pvalue`, pvalue);
                        // value 000001
                    }
                if (key === pname) {
                    value = pvalue;
                    break;
                }
            }
        }
        if (debug) {
            console.log(`return value`, value);
            // "000001"
        }
        return value;
    }
});

// STOCK_F9_FV.Utils.getParam(`secucode`);

var STOCK_SecCode = STOCK_SecCode || ``;


window.onload = function () {
    STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`secucode`);
};







/*

queryString.replace(/=/g, ":");
// "secucode:000001&market:4609&sid:hs"


queryString.replace(/=/g, ":").replace(/&/g, ",");
// "secucode:000001,market:4609,sid:hs"

JSON.parse(eval("({"+"secucode:000001,market:4609,sid:hs"+"})"));
// Uncaught ReferenceError: hs is not defined at eval

*/









function getParam(name) {
    var str = decodeURIComponent(window.location.search);
    var start = str.indexOf("?") + 1;
    if (start == 0) {
        return "";
    }
    var value = "";
    var queryString = str.substring(start);
    var paraNames = queryString.split("&");
    for (var i = 0; i < paraNames.length; i++) {
        var eindex = paraNames[i].indexOf("=");
        if (eindex > 0) {
            pname = paraNames[i].substring(0, eindex);
            pvalue = paraNames[i].substring(eindex + 1);
            if (name == pname) {
                return pvalue;
            }
        }
    }
    return value;
}

// getParam("secucode");
// "000001"
// getParam(`SecuCode`);
// ""

/*

// Ok

https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs



// BAD

https://cdn.xgqfrms.xyz/?{'SecuCode':'600570','IndexCode':'147487','ImageType':'1','FastDateFilterType':'Customer','BeginDate':'2017-10-17','EndDate':'2017-12-03','ApiName': 'JYPlateIndexIndustryImage' }



*/


