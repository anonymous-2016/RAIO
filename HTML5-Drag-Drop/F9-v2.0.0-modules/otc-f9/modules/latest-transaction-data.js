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
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;
                for (let i = 0; i < tds.length - 1; i++) {
                    let key = ui_arr[i],
                        value = (data[key] !== `--` ? data[key] : 0);
                    if (i < 2) {
                        tds[i].innerText = value;
                        // tds[i].setAttribute(`title`, value);
                        // title
                    }else{
                        tds[i].innerText = value;
                    }
                }
                let title_key = ui_arr[tds.length - 1],
                    title_value = (data[title_key] !== `--` ? data[title_key] : 0);
                title.innerText = title_value || `暂无数据`;
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return data;
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
            tds = document.querySelectorAll('[data-value="data-otc-LTD"]'),
            title = document.querySelector('[data-text="otc-latest-transaction-data-text"]');
        // copy(Object.keys(json));
        const ui_arr = ["spj", "zsz", "zdf", "ltsz", "cjl", "sylttm", "hsl", "syllyr", "cje", "sjllyr", "rq"];
        OTC_F9_FV.Modules.latestTransactionData(url, tds, title, ui_arr, false);
    }
);


const OTC_IP = `http://10.1.5.202`,
    OTC_PATH = `/webservice/fastview/otcper`,
    OTC_GILCODE = `430002.OC`;

OTC_F9_FV.Modules.latestTransactionData.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast01/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.latestTransactionData.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast01/430002.OC`;

