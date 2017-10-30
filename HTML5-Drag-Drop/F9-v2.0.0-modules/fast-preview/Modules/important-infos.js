"use strict";

/**
 * important infos 重要信息
 * xgqfrms
 * creadted 2017.10.12
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

 // const bug
var importantInfos = (url = ``, tds = [], ui_arr = [], debug = false) => {
    // important-infos
    let data = [];
    fetch(
        url,
        /* {
            method: 'GET',
            mode: 'no-cors'
        } */
    )
    .then(
        (res) => {
            if (debug) {
                console.log(`response json = \n`, res);
            }
            return res.json();
        }
    )
    // .then(res => res.json())
    // SyntaxError: Unexpected end of input ??? CORS
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
            // shit api, can I trust you?
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




