"use strict";

/**
 * profit-forecast 盈利预告
 * xgqfrms
 * creadted 2017.10.17
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

// todo





// call fetch json datas
setTimeout(() => {
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
    let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
    const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
    importantInfos(url, tds, ui_arr);
    // importantInfos(url, tds, ui_arr, true);
}, 0);
