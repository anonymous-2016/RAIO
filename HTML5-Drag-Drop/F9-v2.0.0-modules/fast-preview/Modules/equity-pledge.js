"use strict";
/**
 * equity-pledge 股权质押
 * xgqfrms
 * creadted 2017.10.30
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */
// const 
var equityPledge = (url = ``, td_id = `id`, debug = false) => {
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
                    // ["ggrq", "czr", "zqr", "zygs", "zybl", "qsrq", "jzrq"]
                    // ["公告日期", "出质人", "质权人", "质押股数", "质押比例", "起始日期", "截止日期"]
                    let announcement_date = (arr[i].ggrq !== undefined) ? arr[i].ggrq : `😟暂无 数据`,
                        quality_people = (arr[i].czr !== undefined) ? arr[i].czr : `😟暂无 数据`,
                        right_person = (arr[i].zqr !== undefined) ? arr[i].zqr : `😟暂无 数据`,
                        pledged_shares = `${(arr[i].zygs !== undefined) ? arr[i].zygs : `🤓暂无 数据`}`,
                        pledge_ratio = (arr[i].zybl !== undefined) ? arr[i].zybl : `😟暂无 数据`,
                        start_date = (arr[i].qsrq !== undefined) ? arr[i].qsrq : `😟暂无 数据`,
                        deadline_date = (arr[i].jzrq !== undefined) ? arr[i].jzrq : `😟暂无 数据`;
                    html_string += `
                        <tr class="fv-changes-shareholding-executives-table-tr">
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${announcement_date}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${quality_people}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${right_person}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${pledged_shares}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${pledge_ratio}
                            </td>
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${start_date}
                            </td>
                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${deadline_date}
                            </td>
                        </tr>
                    `;
                }
            );
            td_id.innerHTML = html_string;
        }
    )
    .catch(error => console.log(`error = \n`, error));
};


// call fetch json datas
setTimeout(() => {
    // async & await
    const num = `10`;
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast${num}/600570.SH`;
    let link_more = document.querySelector(`[data-more="equity-pledge-title"]`);
    let link_html = `
        <span id="holdings_participation_situation_link_more">
            <a href="#" title="equity-pledge" data-uid="equity_pledge_link_more" class="link-more">更多 >></a>
        </span>
    `;
    link_more.insertAdjacentHTML('beforeend', link_html);
    let td_id = document.querySelector('#fv-equity-pledge-tbody');
    equityPledge(url, td_id, true);
}, 0);



