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
 * @description FetchNewsSummary
 * @param {Object} args
 * @param {Bollean} debug
 * 
 * @example // NameSpace Template Example , STOCK_F9_FV.Utils.FetchNewsSummary(url);
 * 
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};
// IIFE === Closure!
STOCK_F9_FV.Utils.FetchNewsSummary = STOCK_F9_FV.Utils.FetchNewsSummary || (
    (url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = false) => {
        if (debug) {
            console.log(`News Summary url = \n`, url);
        }
        const datas = {};
        // const datas = []; // ??? Object & Array ???
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
                }
                // shape shit json name!
                let keys = Object.keys(json);
                if (debug) {
                    console.log(`News Summary keys = \n`, JSON.stringify(keys, null, 4));
                }
                const shaped_json = {};
                keys.map(
                    (key, i) => {
                        /* 
                            // let new_key = ``;
                            switch (key) {
                                case "Title":
                                    new_key = `title`;
                                    break;
                                case "Id":
                                    new_key = `id`;
                                    break;
                                case "Content":
                                    new_key = `content`;
                                    break;
                                case "PublishDate":
                                    new_key = `publishdate`;
                                    break;
                                case "Infosource":
                                    new_key = `infosource`;
                                    break;
                                case "Url":
                                    new_key = `url`;
                                    break;
                                default:
                                    new_key = `uni_key`;
                                    break;
                            }
                        */
                        // new_key = key.toLocaleLowerCase();
                        let new_key = key.toLowerCase() || `${key}_${i}`;
                        shaped_json[new_key] = json[key];
                    }
                );
                /* 
                    const json = {A: `1`, B: `22`, C: `333`};
                    const {A: a, B: b, C: c} = {...json};
                    // rename object's key!
                    // import & export ??? old_name as new_name 
                */
                // Object.assign(datas, json);
                Object.assign(datas, shaped_json);
                // Object.assign(datas, json);// ??? Object & Array ???
                if (debug) {
                    console.log(`News Summary shaped datas = \n`, JSON.stringify(datas, null, 4));
                }
                // return shaped_json;
                return datas; // outer promise variable!
                // return json;
                // undefined & Promise bug!
                // setTimeout(() => {
                //     // return datas;
                //     if (debug) {
                //         console.log(`News Summary datas = \n`, JSON.stringify(datas, null, 4));
                //     }
                // }, 3000);
            }
        )
        .catch(err => console.log(`News Summary Error Infos: \n`, err));
        /* 
            setTimeout(() => {
                if (debug) {
                    console.log(`setTimeout  & News Summary datas = \n`, JSON.stringify(datas, null, 4));
                }
                return datas;
                // setTimeout  & News Summary datas = {}
            }, 0);
        */
    }
);

// STOCK_F9_FV.Utils.FetchNewsSummary(`http://10.1.5.202/queryservice/news/content/564082789530`, true);


STOCK_F9_FV.Utils.ShowNewsSummaryModal = STOCK_F9_FV.Utils.ShowNewsSummaryModal || (
    (args = {
        url: ``,
        module_id: ``,
    }, debug = false) => {
        const datas = STOCK_F9_FV.Utils.FetchNewsSummary() || {};
        if (debug) {
            console.log(`News Summary Modal datas = \n`, JSON.stringify(datas, null, 4));
            console.log(`Modal data.Url = \n`, datas.Url, typeof (datas.Url));
        }
        const BAD_URLs = [
            "聚源数据",
            "WWW",
            "qq",
            "ww",
            "www.",
            "www",
            "wwww",
            "http://data.east",
            "http://www.",
            "http://www.eweb",
            "https://wx.qq.com/"
        ];
        // 
    }
);





const FetchNewsSummary = (url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = false) => {
    if (debug) {
        console.log(`News Summary url = \n`, url);
    }
    const datas = {};
    // const datas = []; // ??? Object & Array ???
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (debug) {
                console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
            }
            // shape shit json name!
            let keys = Object.keys(json);
            if (debug) {
                console.log(`News Summary keys = \n`, JSON.stringify(keys, null, 4));
            }
            Object.assign(datas, json);
            // Object.assign(datas, json);// ??? Object & Array ???
            if (debug) {
                console.log(`News Summary shaped datas = \n`, JSON.stringify(datas, null, 4));
            }
            // return datas;
        }
    )
    .catch(err => console.log(`News Summary Error Infos: \n`, err));
    setTimeout(() => {
        if (debug) {
            console.log(`News Summary return datas = \n`, JSON.stringify(datas, null, 4));
        }
        return datas; 
    }, 3000);
};

// FetchNewsSummary(`http://10.1.5.202/queryservice/news/content/564082789530`, true);


var result = ((url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = false) => {
    if (debug) {
        console.log(`News Summary url = \n`, url);
    }
    const datas = {};
    // const datas = []; // ??? Object & Array ???
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (debug) {
                console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
            }
            // shape shit json name!
            let keys = Object.keys(json);
            if (debug) {
                console.log(`News Summary keys = \n`, JSON.stringify(keys, null, 4));
            }
            Object.assign(datas, json);
            // Object.assign(datas, json);// ??? Object & Array ???
            if (debug) {
                console.log(`News Summary shaped datas = \n`, JSON.stringify(datas, null, 4));
            }
            return datas; 
        }
    )
    .catch(err => console.log(`News Summary Error Infos: \n`, err));
})(`http://10.1.5.202/queryservice/news/content/564082789530`, true);


const url = `http://10.1.5.202/queryservice/news/content/564082789530`, debug = true;

