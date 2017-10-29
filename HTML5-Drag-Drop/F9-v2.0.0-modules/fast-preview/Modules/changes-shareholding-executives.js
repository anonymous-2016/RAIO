"use strict";
/**
 * changes-shareholding-executives 高管持股变动情况
 * xgqfrms
 * creadted 2017.10.16
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

const changesShareholdingExecutives = (url = ``, td_id = `id`, debug = false) => {
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
                console.log(`data = \n`, data);
            }
            // copy(JSON.stringify(data, null, 4));
            let html_string = ``;
            let arr = data;
            arr.map(
                (obj, i) => {
                    // undefined // "bdr", "mc", "fx", "sl", "glgg", "jyjj"
                    let date = (arr[i].bdr !== undefined) ? arr[i].bdr : `😟 暂无数据`;
                    let name = (arr[i].mc !== undefined) ? arr[i].mc : `😟 暂无数据`;
                    let direction = (arr[i].fx !== undefined) ? arr[i].fx : `😟 暂无数据`;
                    let share_nums = (arr[i].sl !== undefined) ? arr[i].sl : `😟 暂无数据`;
                    let average_price = `${(arr[i].jyjj !== undefined) ? arr[i].jyjj : `🤓 暂无数据`}`;
                    let relationship = (arr[i].glgg !== undefined) ? arr[i].glgg : `😟 暂无数据`;
                    let proportion = (arr[i].xxx !== undefined) ? arr[i].xxx : `😟 暂无数据`;
                    html_string += `
                        <tr class="fv-changes-shareholding-executives-table-tr">
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${date}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${name}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${direction}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${share_nums}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${average_price}
                            </td>
                            <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                                ${relationship}
                            </td>
                        </tr>
                    `;
                    /* 
                        <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">
                            ${proportion}
                        </td>
                    */
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
    const url = `http://10.1.5.202/webservice/fastview/stock/stockfast12/600570.SH`;
    let link_more = document.querySelector(`[data-more="changes-shareholding-executives-title"]`);
    let link_html = `
        <span id="changes_shareholding_executives_link_more">
            <a href="#" title="changes-shareholding-executives" data-uid="changes_shareholding_executives_link_more">更多 >></a>
        </span>
    `;
    link_more.insertAdjacentHTML('beforeend', link_html);
    let more = document.querySelector(`#changes_shareholding_executives_link_more`);
    more.classList.add("link-more");
    // more
    let td_id = document.querySelector('#fv-changes-shareholding-executives-tbody');
    changesShareholdingExecutives(url, td_id, true);
    // const debug = true;
    // changesShareholdingExecutives(url, td_id, debug);
}, 0);



