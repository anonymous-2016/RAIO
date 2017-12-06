"use strict";

/**
 * @description all project configuration
 * @author xgqfrms
 * @creadted 2017.12.05
 *
 * @namespace STOCK_F9_FV.Config
 * @name Config
 *
 * @param {* Object} IPs
 * @param {* Object} URLs
 * @param {* Object} Paths
 *
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Config = STOCK_F9_FV.Config || {};


STOCK_F9_FV.Config.IPs = STOCK_F9_FV.Config.IPs || {
    stock: `http://10.1.5.202`,
    f9: `http://10.1.64.125`,
    local: `http://localhost:3000/`,
};
// STOCK_F9_FV.Config.IPs.stock;
// "http://10.1.5.202"

STOCK_F9_FV.Config.Paths = STOCK_F9_FV.Config.Paths || {
    //
};


STOCK_F9_FV.Config.URLs = STOCK_F9_FV.Config.URLs || {
    //
};





/*


# gilcode

https://cdn.xgqfrms.xyz/?gilcode=600570.SH&market=4609&sid=hs
https://cdn.xgqfrms.xyz/?gilcode=000001.SZ&market=4609&sid=hs


https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs


## .SH & .SZ

> 600570.SH

> 000001.SZ

gilcode
secucode
market
sid




console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
console.log(`gilcode `, gilcode, typeof gilcode);



STOCK_F9_FV.Modules.agencyRating.init = STOCK_F9_FV.Modules.agencyRating.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast05/`,
            gilcode: `600570.SH`
        }
    ) => {
        console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
        console.log(`gilcode `, gilcode, typeof gilcode);
        let uid = `agency_rating_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.agencyRating(url, uid, false);
        // STOCK_F9_FV.Modules.agencyRating(url, true, uid);
    }
);


STOCK_F9_FV.Modules.agencyRating.init({
    ip: `http://10.1.5.202`,
    path: `/webservice/fastview/stock/stockfast05/`,
    gilcode: STOCK_SecCode
});

// 600570.SH  ??? .SH & .SZ



*/