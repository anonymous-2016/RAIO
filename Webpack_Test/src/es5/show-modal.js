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
    (url = `http://10.1.5.202/queryservice/news/content/`, uid = `563619275318`, debug = false) => {
        const datas = {};
        // const datas = []; // ??? Object & Array ???
        let new_url = `${url}${uid}`;
        if (debug) {
            console.log(`News Summary url = \n`, url);
            console.log(`News Summary uid = \n`, uid);
            console.log(`News Summary new_url = \n`, new_url);
        }
        fetch(new_url)
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
                    const shaped_json = {
                        a,
                        b,
                        c
                    };
                    // rename object's key!
                    // import & export ??? old_name as new_name 
                */
                /* 
                    "use strict";
                    var _extends = Object.assign || function (target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i];
                            for (var key in source) { 
                                if (Object.prototype.hasOwnProperty.call(source, key)) {
                                    target[key] = source[key];
                                }
                            }
                        }
                        return target;
                    };
                    var json = { A: "1", B: "22", C: "333" };
                    var _json = _extends({}, json),
                        a = _json.A,
                        b = _json.B,
                        c = _json.C;
                    var shaped_json = {
                        a: a,
                        b: b,
                        c: c
                    };
                */
                // Object.assign(datas, json);
                Object.assign(datas, shaped_json);
                // Object.assign(datas, json);// ??? Object & Array ???
                if (debug) {
                    console.log(`News Summary shaped datas = \n`, JSON.stringify(datas, null, 4));
                }
                // return shaped_json;
                // return datas; // outer promise variable!
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
        return datas;
        // return only work out Promise!
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


// STOCK_F9_FV.Utils.FetchNewsSummary(`http://10.1.5.202/queryservice/news/content/`, `564082789530`, true);


STOCK_F9_FV.Utils.xyz_ShowNewsSummaryModal = STOCK_F9_FV.Utils.xyz_ShowNewsSummaryModal || (
    (args = {
        url: ``,
        module_id: ``,
    }, debug = false) => {
        const host = window.location.host || `10.1.5.202`;
        // "10.1.5.202"
        // http || https ??? `http://10.1.5.202/queryservice/news/content/`;
        const url = `/queryservice/news/content/`;
        const datas = STOCK_F9_FV.Utils.FetchNewsSummary(uid) || {};
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
        // shape data ???
        let url_link = BAD_URLs.includes(data.Url) === true ? `` : `
            <a style="margin-left:10px;color:#5389d2;" class="gotext" id="linkyuanwen" value="${data.Url}">
                查看原文
                <i class="icon-external-link"></i>
            </a>
        `;
        const html_template = `
            <div>
                <div class="modal-title">
                    <h3 style="margin-left: 15px;">${name}</h3>
                </div>
                <div class="zxdtData">
                    <div class="fontSize" id="fontsize">
                        <span>字体：</span>
                        <span class="fontBtn">
                            <a id="big">大</a>
                        </span>
                        <span class="fontBtn">
                            <a id="middle">中</a>
                        </span>
                        <span class="fontBtn active">
                            <a id="small">小</a>
                        </span>
                    </div>
                    <div class="model-Info">
                        <span>
                            来源：
                            <span id="zxdtlaiyuan" class="">
                                ${data.Infosource}
                            </span>
                            &nbsp;
                        </span>
                        <span id="zxdtPubDate" class="">${data.PublishDate}</span>&nbsp;
                        ${url_link}
                    </div>
                    <div class="clr"></div>
                </div>
                <div class="modal-body" style="overflow: auto;text-align: left;">
                    <div id="zxdtContent">
                        ${data.Content}
                    </div>
                </div>
            </div>
        `;
        // var bounced = new Bounced({
        //     bouncedclass: "layerContianer2",//存放页面的容器类名
        //     width: getClientWidth()-60,
        //     height: getClientHeight()-80,
        //     alerttit: "公司新闻",
        //     setOverflow: "overflow-y:none",//设置滚动的属性 overflow-y：设置竖向  overflow-x:设置横向
        //     // str: html.join(''),// array to string
        //     str: html_template,
        //     callback:function(){
        //         // no need ???
        //     }
        // });
    }
);


STOCK_F9_FV.Utils.ShowNewsSummaryModal = STOCK_F9_FV.Utils.ShowNewsSummaryModal || (
    (json = {}) => {
        // alert(`this is a modal!`);
        console.log(`ShowNewsSummaryModal json = \n`, JSON.stringify(json, null, 4));
    }
);

const FetchNewsSummary = STOCK_F9_FV.Utils.FetchNewsSummary;
const ShowNewsSummaryModal = STOCK_F9_FV.Utils.ShowNewsSummaryModal;

export {
    FetchNewsSummary,
    ShowNewsSummaryModal
};



