"use strict";

/**
 * @description NSSF9FV === NS_Stock_F9_FV (2017.11.02)
 * @author xgqfrms
 * @namespace NS_Stock_F9_FV
 * 
 * @license MIT
 * @copyright gildata 2017-present
 * 
 * @param {* String} url 
 * @param {* String} uid 
 * @param {* String} size
 * @param {* String} layout 
 * @param {* String} debug
 */


// NS_Stock_F9_FV

var NSSF9FV = NSSF9FV || {};

NSSF9FV.important_infos = NSSF9FV.important_infos || function(url = `url`, uid = `id`, size = `default`, layout = `default`, debug = `false`) {
    /**
     * @description important infos 重要信息
     * @author xgqfrms
     * @creadted 2017.10.12
     * @param {* String} url 
     * @param {* Array} tds 
     * @param {* Array} ui_arr 
     * @param {Boolean} debug 
    */
    // ???
    // let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
    const importantInfos = (url = ``, tds = [], ui_arr = [], debug = false) => {
        // important-infos
        let data = [];
        fetch(url)
        .then(res=> res.json())
        .then(
            //shaped data 
            (json) => {
                // json
                if (debug) {
                    console.log(`json = \n`, json);
                }
                data = json;
                // async
                if (debug) {
                    console.log(`data = \n`, data);
                }
                // copy(JSON.stringify(data, null, 4));
                let arr = [];
                // get Object keys
                for(let key in data){
                    arr.push(key);
                }
                // arr === (11) ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"]
                // dead & hard code
                // const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
                for (let i = 0; i < tds.length; i++) {
                    let key = ui_arr[i];
                    let value = data[key];
                    tds[i].innerText = value;
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
        // return null;
        // return data;
    };
    return {
        init: function(url, tds, ui_arr){
            importantInfos(url, tds, ui_arr);
        }
    }
};

// NSSF9FV.important_infos().init();

// OBject {} ???
// NSSF9FV.important_infos.init();



// call fetch json datas
setTimeout(() => {
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
    let tds = document.querySelectorAll('[data-value="data-fv-infos"]');
    const ui_arr = ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"];
    importantInfos(url, tds, ui_arr);
    // const debug = true;
    // importantInfos(url, tds, ui_arr, debug);
    // importantInfos(url, tds, ui_arr, true);
}, 0);








