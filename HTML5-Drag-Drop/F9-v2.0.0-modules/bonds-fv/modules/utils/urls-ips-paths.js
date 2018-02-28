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
    // f9: `http://10.1.64.125`,
    // local: `http://localhost:3000/`,
};
// STOCK_F9_FV.Config.IPs.stock;
// "http://10.1.5.202"

STOCK_F9_FV.Config.Paths = STOCK_F9_FV.Config.Paths || {
    path: `/webservice/fastview/stock/`,
    // PATH: `/webservice/fastview/stock/stockfast05/`,
};

STOCK_F9_FV.Config.Codes = STOCK_F9_FV.Config.Codes || {
    //gilcode: STOCK_SecCode
    // stockfast05
};

STOCK_F9_FV.Config.Params = STOCK_F9_FV.Config.Params || {
    params: `stockfast05`,
    // params: `news`,
    // params: `bulletin`,
};
// .SH
// .SZ



STOCK_F9_FV.Config.URLs = STOCK_F9_FV.Config.URLs || {
    dev: `http://10.1.5.202/webservice/devapi/`,
    prod: `http://10.1.5.202/webservice/api/`,
    test: `http://10.1.5.202/webservice/testapi/`,
};

const URLs = STOCK_F9_FV.Config.URLs;
const Params = STOCK_F9_FV.Config.Params;

export default URLs;
export {URLs, Params};

// define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';
//     //
// });



/*


STOCK_F9_FV.Modules.topTenShareholders.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast07/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast07/`,
    // gilcode: `600570.SH`
});



*/



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
