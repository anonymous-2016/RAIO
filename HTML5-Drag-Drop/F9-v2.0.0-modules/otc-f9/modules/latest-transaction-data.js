"use strict";

/**
 * latest-transaction-data 最新交易数据
 * xgqfrms
 * creadted 2017.12.12
 * @param {* String} url
 * @param {* Array} tds
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};


OTC_F9_FV.Modules.latestTransactionData = OTC_F9_FV.Modules.latestTransactionData || (
    (url = ``, tds = [], title = ``, ui_arr = [], debug = false) => {
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (typeof(datas) === "object" && Object.keys(datas).length > 0) {
                        for (let i = 0; i < tds.length - 1; i++) {
                            let key = ui_arr[i],
                                value = (datas[key] !== `--` ? datas[key] : 0);
                            tds[i].innerText = value;
                            tds[i].setAttribute(`title`, value);
                        }
                        let title_key = ui_arr[tds.length - 1],
                            title_value = (datas[title_key] !== `--` ? datas[title_key] : 0);
                        title.innerText = title_value || `暂无数据`;
                    }else{
                        let message = `handle json error!`,
                            fileName = `latest-transaction-data.js`,
                            lineNumber = 29;
                        throw new Error(message, fileName, lineNumber);
                        // new Error([message[, fileName[, lineNumber]]]);
                    }
                } catch (err) {
                    console.log(`catch error = \n`, err);
                    console.log(`catch error.name = \n`, err.name);
                    console.log(`catch error.message = \n`, err.message);
                    console.log(`catch error.fileName = \n`, err.fileName);
                    console.log(`catch error.lineNumber = \n`, err.lineNumber);
                }
            }
        )
        .catch(err => console.log(`fetch error = \n`, err));
        return datas;
    }
);


OTC_F9_FV.Modules.latestTransactionData.init = OTC_F9_FV.Modules.latestTransactionData.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast01/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            tds = document.querySelectorAll(`[data-value="data-otc-LTD"]`),
            title = document.querySelector(`[data-text="otc-latest-transaction-data-text"]`);
        // copy(Object.keys(json));
        const ui_arr = ["spj", "zsz", "zdf", "ltsz", "cjl", "sylttm", "hsl", "syllyr", "cje", "sjllyr", "rq"];
        OTC_F9_FV.Modules.latestTransactionData(url, tds, title, ui_arr, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.latestTransactionData.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast01/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.latestTransactionData.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast01/430002.OC`;

