"use strict";
/**
 * agency-research-statistics 机构调研统计
 * xgqfrms
 * creadted 2017.10.31
 * @param {* String} url 
 * @param {* Array} tds 
 * @param {* Array} ui_arr 
 * @param {Boolean} debug 
 */

const researchReport = (url = ``, td_id = `id`, debug = false) => {
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
            // 调研日期 机构总数量 研究报告 调研日市价
            arr.map(
                (obj, i) => {
                    let publishDate = (arr[i].publishDate !== undefined) ? arr[i].publishDate : `😟 暂无数据`;
                    let title = `${(arr[i].title !== undefined) ? arr[i].title : `😟 暂无数据`}`;
                    let id = `${(arr[i].researchId !== undefined) ? arr[i].researchId : `😟 暂无数据`}`;
                    html_string += `
                        <tr class="fv-research-report-table-tr">
                            <td class="fv-research-report-table-td-value" data-value="data-fv-research-report">
                                ${publishDate}
                            </td>
                            <td class="fv-research-report-table-td-value" data-value="data-fv-research-report">
                                <a href="#${id}" data-link="fv-research-report-link" data-link-detail="research-report-link-detail-module" data-researchId="${id}">${title}</a>
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
    let uid = `???`;
    const url = `http://10.1.5.202/webservice/fastview/stock/${uid}/600570.SH`;
    let link_more = document.querySelector(`[data-more="research-report-title"]`);
    let td_id = document.querySelector('#fv-research-report-tbody');
    researchReport(url, td_id, true);
}, 0);

