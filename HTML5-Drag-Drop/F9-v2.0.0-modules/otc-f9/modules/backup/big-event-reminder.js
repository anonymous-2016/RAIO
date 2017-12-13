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
    (url = ``, dom = ``, debug = false) => {
        let datas = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                datas = json;
                try {
                    if (Array.isArray(datas) && datas.length > 0) {
                        let html = ``;
                        datas.map(
                            (data, i) => {
                                let key = data["k"] ? data["k"] : `--`,
                                    value = data["v"] ? data["v"] : `--`;
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
                // let tds = document.querySelectorAll(`[data-value="data-otc-BER"]`);
                // for (let i = 0; i < tds.length - 1; i++) {
                //     let key = ui_arr[i],
                //         value = (data[key] ? data[key] : `--`);
                //     if (i < 2) {
                //         tds[i].innerText = value;
                //         // tds[i].setAttribute(`title`, value);
                //         // title
                //     }else{
                //         tds[i].innerText = value;
                //     }
                // }
                // let title_key = ui_arr[tds.length - 1],
                //     title_value = (data[title_key] !== `--` ? data[title_key] : 0);
                // title.innerText = title_value || `暂无数据`;
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
            dom = document.querySelector(`[data-tbody="otc-big-event-reminder-table-tbody"]`);
        OTC_F9_FV.Modules.bigEventReminder(url, dom, false);
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

