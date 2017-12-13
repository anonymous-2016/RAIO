"use strict";

/**
 * big-event-reminder 大事提醒
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


OTC_F9_FV.Modules.bigEventReminder = OTC_F9_FV.Modules.bigEventReminder || (
    (url = ``, tds = [], dom = ``, debug = false) => {
        let datas = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                console.log(`datas[0]["k"]= \n`, datas[0]["v"], typeof datas[0]["v"]);
                try {
                    if (Array.isArray(datas) && datas.length > 0) {
                        for (let i = 0; i < tds.length - 1; i++) {
                            let key = (datas[i] !== undefined && datas[i]["k"] !== undefined) ? datas[i]["k"] : `--`,
                                value = (datas[i] !== undefined && datas[i]["v"] !== undefined) ? datas[i]["v"].replace(/【/ig, "[ ").replace(/】/ig, " ] ") : `--`;
                            switch (i) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                    tds[i].innerText = value;console.log(`value = \n`, value);
                                    tds[i].setAttribute(`title`, value);
                                    break;
                                default:
                                    tds[i].innerText = value;
                                    tds[i].setAttribute(`title`, value);
                                    break;
                            }
                        }
                        let html = ``;
                        datas.map(
                            (data, i) => {
                                let key = datas[i]["k"] ? datas[i]["k"] : `--`,
                                    value = datas[i]["v"] ? datas[i]["v"] : `--`;
                                html += `
                                    <tr class="otc-big-event-reminder-table-tr">
                                        <td class="otc-big-event-reminder-table-td-key" data-alias="${key}">${key}</td>
                                        <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER">${value}</td>
                                    </tr>
                                `;
                            }
                        );
                        dom.insertAdjacentHTML(`beforeend`, html);
                    }
                } catch (err) {
                    console.log(`json error = \n`, err);
                }
            }
        )
        .catch(error => console.log(`error = \n`, error));
        return datas;
    }
);


OTC_F9_FV.Modules.bigEventReminder.init = OTC_F9_FV.Modules.bigEventReminder.init || (
    (
        {
            ip,
            path,
            socket,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otcper`,
            socket: `/otcperfast02/`,
            gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}${gilcode}`,
            dom = document.querySelector(`[data-tbody="otc-big-event-reminder-table-tbody"]`),
            tds = document.querySelectorAll(`[data-value="data-otc-BER"]`);
        // const ui_arr = ["spj", "zsz", "zdf", "ltsz", "cjl", "sylttm", "hsl", "syllyr", "cje", "sjllyr", "rq"];
        OTC_F9_FV.Modules.bigEventReminder(url, tds, dom, false);
    }
);


var OTC_IP = OTC_IP || `http://10.1.5.202`,
    OTC_PATH = OTC_PATH || `/webservice/fastview/otcper`,
    OTC_GILCODE = OTC_GILCODE || `430002.OC`;

OTC_F9_FV.Modules.bigEventReminder.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcperfast02/`,
    gilcode: OTC_GILCODE
});

// OTC_F9_FV.Modules.bigEventReminder.init();
// const url = `http://10.1.5.202/webservice/fastview/otcper/otcperfast02/430002.OC`;

