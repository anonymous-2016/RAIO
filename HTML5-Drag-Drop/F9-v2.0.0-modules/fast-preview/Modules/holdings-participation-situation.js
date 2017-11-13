"use strict";
/**
 * holdings-participation-situation 控股参股情况
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};
// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.holdingsParticipationSituation = STOCK_F9_FV.Modules.holdingsParticipationSituation || ((url = ``, td_id = `id`, debug = false) => {
    // debug = true;
    let data = [];
    fetch(url)
    .then(res => res.json())
    .then(
        //shaped data 
        (json) => {
            // json
            data = json;// Array
            // async
            if (debug) {
                // console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    // "gs": "被参控公司", "gx": "参控关系", "bl": "参控比例",// 参控比例（%） "jlr": "被参控股公司净利润", "yw": "被参控股公司主营业务"
                    let company = (arr[i].gs !== undefined) ? arr[i].gs : `😟暂无 数据`;
                    let relationship = (arr[i].gx !== undefined) ? arr[i].gx : `😟暂无 数据`;
                    let proportion = (arr[i].bl !== undefined) ? arr[i].bl : `😟暂无 数据`;
                    let profile = `${(arr[i].jlr !== undefined) ? arr[i].jlr : `🤓暂无 数据`}`;
                    let business = (arr[i].yw !== undefined) ? arr[i].yw : `😟暂无 数据`;
                    html_string += `
                        <tr class="fv-changes-shareholding-executives-table-tr">
                            <td
                                title="${company}"
                                class="fv-changes-shareholding-executives-table-td-value"
                                data-value="data-fv-changes-shareholding-executives">
                                ${company}
                            </td>
                            <td
                                title="${relationship}"
                                class="fv-changes-shareholding-executives-table-td-value"
                                data-value="data-fv-changes-shareholding-executives">
                                ${relationship}
                            </td>
                            <td
                                class="fv-changes-shareholding-executives-table-td-value"
                                data-value="data-fv-changes-shareholding-executives">
                                ${proportion}
                            </td>
                            <td
                                class="fv-changes-shareholding-executives-table-td-value"
                                data-value="data-fv-changes-shareholding-executives">
                                ${profile}
                            </td>
                            <td
                                title="${business}"
                                class="fv-changes-shareholding-executives-table-td-value"
                                data-value="data-fv-changes-shareholding-executives">
                                ${business}
                            </td>
                        </tr>
                    `;
                }
            );
            td_id.innerHTML = html_string;
        }
    )
    .catch(error => console.log(`error = \n`, error));
});



STOCK_F9_FV.Modules.holdingsParticipationSituation.init = STOCK_F9_FV.Modules.holdingsParticipationSituation.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/5.json`) => {
        let td_id = document.querySelector('#fv-holdings-participation-situation-tbody');
        STOCK_F9_FV.Modules.holdingsParticipationSituation(url, td_id, true);
    }
);

STOCK_F9_FV.Modules.holdingsParticipationSituation.init(`http://10.1.5.202/webservice/fastview/stock/stockfast11/600570.SH`);
// url
// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast${num}/600570.SH`;



// call fetch json datas
setTimeout(() => {
    // async & await
    // let num = `11`;
    // const url = `http://10.1.5.202/webservice/fastview/stock/stockfast${num}/600570.SH`;
    // let td_id = document.querySelector('#fv-holdings-participation-situation-tbody');
    // holdingsParticipationSituation(url, td_id, true);
}, 0);



