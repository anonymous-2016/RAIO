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
import "whatwg-fetch";

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};
// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.agencyResearchStatistics = STOCK_F9_FV.Modules.agencyResearchStatistics || (
    (url = ``, td_id = `id`, debug = false) => {
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
    }
);


STOCK_F9_FV.Modules.agencyResearchStatistics.init = STOCK_F9_FV.Modules.agencyResearchStatistics.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast???/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `agency_research_report_hs_container`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.agencyResearchStatistics(url, uid, false);
        // STOCK_F9_FV.Modules.agencyResearchStatistics(url, uid, true);
    }
);


var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`;
    STOCK_Skin = window.STOCK_Skin || `white`;


STOCK_F9_FV.Modules.agencyResearchStatistics.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast???/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast???/`,
    // gilcode: `600570.SH`
});

// STOCK_F9_FV.Modules.agencyResearchStatistics.init(`http://10.1.5.202/webservice/fastview/stock/xxx/600570.SH`);
