"use strict";

/**
 * @author xgqfrms
 * @created 2017.11.16
 * @copyright Gildata 2017-present
 * @private
 * @license MIT
 * 
 * @namespace STOCK_F9_FV
 * @sub_namespaces Utils
 * 
 * @description Customize FontSise
 * @param {Object} args
 * @param {Bollean} debug
 * 
 * @example // NameSpace Template Example , STOCK_F9_FV.Utils.CustomizeFontSise(obj);
 * 
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};
// IIFE === Closure!
STOCK_F9_FV.Utils.CustomizeFontSise = STOCK_F9_FV.Utils.CustomizeFontSise || ((args = {}, debug = false) => {
    // 
});



STOCK_F9_FV.Modules.agencyRating.init = STOCK_F9_FV.Modules.agencyRating.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/5.json`) => {
        let uid = `agency_rating_hs_container`;
        STOCK_F9_FV.Modules.agencyRating(url, true, uid);
    }
);

STOCK_F9_FV.Modules.agencyRating.init();// url