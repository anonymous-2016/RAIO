"use strict";

/**
 * indicators-per-share 每股指标
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */



/* 

    let obj = {
        // name: "每股指标",
        // bbgs:"报表格式",
        // bblx:"报表类型",
        // bgq:"报告期",
        // fbrq:"发布日期",
        // ssqh:"上市前后",// 上市公司公告 ???
        syjb:"每股收益-基本",
        syxs:"每股收益-稀释",
        sykcjb:"每股收益-扣除／基本",
        sykcxs:"每股收益-扣除／稀释",
        jzc:"每股净资产",
        jycsxjllje:"每股经营活动产生的现金流量净额",
        jyjs:"聚源计算",// 聚源计算
        qbtb:"每股收益-期末股本摊薄",
        kcqbtb:"每股收益-扣除/期末股本摊薄",
        yyzsr:"每股营业总收入",
        yysr:"每股营业收入",
        sqlr:"每股息税前利润",
        zbgj:"每股资本公积",
        yygj:"每股盈余公积",
        wfplr:"每股未分配利润",
        lcsy:"每股留存收益",
        xjllje:"每股现金流量净额",
        qyzyxjll:"每股企业自由现金流量",
        gdzyxjll:"每股股东自由现金流量",
    };
    // Object.keys(obj);
    // copy(JSON.stringify(Object.keys(obj)));
    // [ "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll" ]

*/
/// indicatorsPerShare

// const
// overwrite function
var indicatorsPerShare = (url = ``, tds = [], ui_arr = [], debug = false) => {
    // important-infos
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            if (debug) {
                console.log(`json = \n`, json);
            }
            data = json;
            // fbrq 发布日期
            // ui_arr = ["fbrq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll"];
            for (let i = 0; i < tds.length; i++) {
                let key = ui_arr[i];
                let value = data[key];// ??? (key in data) ? data[key] : ""
                tds[i].innerText = value;
            }
        }
    )
    .catch(error => console.log(`error = \n`, error));
};


// call fetch json datas
setTimeout(() => {
    // async & await
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast04/600570.SH`;
    let tds = document.querySelectorAll('[data-value="data-fv-indicators-per-share"]');
    // fbrq 发布日期
    const ui_arr = ["fbrq", "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll"];
    // indicatorsPerShare(url, tds, ui_arr);
    indicatorsPerShare(url, tds, ui_arr, true);
}, 0);
