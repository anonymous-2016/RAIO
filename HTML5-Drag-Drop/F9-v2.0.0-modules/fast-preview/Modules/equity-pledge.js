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

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Modules.equityPledge = STOCK_F9_FV.Modules.equityPledge || (
    (url = ``, uid = ``, debug = false) => {
        let data = [];
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                data = json;
                if (debug) {
                    console.log(`data = \n`, data);
                }
                let arr = data;
                if (Array.isArray(arr) && arr.length > 4) {
                    let html_string1 = ``,
                        html_string2 = ``,
                        html_string3 = ``,
                        html_string4 = ``,
                        html_string5 = ``,
                        html_string6 = ``,
                        html_string7 = ``;
                    arr.map(
                        (obj, i) => {
                            // ["ggrq", "czr", "zqr", "zygs", "zybl", "qsrq", "jzrq"]
                            // ["公告日期", "出质人", "质权人", "质押股数", "质押比例", "起始日期", "截止日期"]
                            let announcement_date = (arr[i].ggrq !== undefined) ? arr[i].ggrq : `暂无数据`,
                                quality_people = (arr[i].czr !== undefined) ? arr[i].czr : `暂无数据`,
                                right_person = (arr[i].zqr !== undefined) ? arr[i].zqr : `暂无数据`,
                                pledged_shares = `${(arr[i].zygs !== undefined) ? arr[i].zygs : `暂无数据`}`,
                                // 质押股数(万股)
                                pledge_ratio = (arr[i].zybl !== undefined) ? arr[i].zybl : `暂无数据`,
                                start_date = (arr[i].qsrq !== undefined) ? arr[i].qsrq : `暂无数据`,
                                deadline_date = (arr[i].jzrq !== undefined) ? arr[i].jzrq : `暂无数据`;
                            // 2012-10-18 = 2012/10/18
                            announcement_date = announcement_date.replace(/-/gi, `/`);
                            // const re = /(\d+)-(\d+)/;
                            // const re = /(\d+)-(\d+)/gi;
                            // start_date = start_date.replace(re, '$1/$2').replace(re, '$1/$2');
                            // start_date = start_date.replace(/(\d+)-(\d+)/gi, '$1/$2').replace(/(\d+)-(\d+)/, '$1/$2');
                            start_date = start_date.replace(/(\d+)-(\d+)/gi, '$1/$2').replace(/(\d+)-(\d+)/gi, '$1/$2');
                            /*
                                // -- ??? //
                                // start_date = start_date.replace(/-/gi, `/`);
                                // start_date = start_date.replace(/^(\d-\d)$/gi, '$1/$2');
                                start_date = start_date.replace(/--/gi, 'XYZ');// temp var
                                start_date = start_date.replace(/-/gi, `/`);
                                start_date = start_date.replace(/XYZ/gi, `--`);// reset temp var
                            */
                            deadline_date = deadline_date.replace(/-/gi, `/`);
                            // only show 5 items
                            if (i < 5) {
                                html_string1 += `
                                    <td
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${announcement_date}
                                    </td>
                                `;
                                html_string2 += `
                                    <td
                                        data-turn-to-uid="data-turn-to-uid"
                                        data-uid="666666"
                                        title="${quality_people}"
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${quality_people}
                                    </td>
                                `;
                                html_string3 += `
                                    <td
                                        title="${right_person}"
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${right_person}
                                    </td>
                                `;
                                html_string4 += `
                                    <td
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${pledged_shares}
                                    </td>
                                `;
                                html_string5 += `
                                    <td
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${pledge_ratio}
                                    </td>
                                `;
                                html_string6 += `
                                    <td
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${start_date}
                                    </td>
                                `;
                                html_string7 += `
                                    <td
                                        class="fv-equity-pledge-table-td-value"
                                        data-value="data-fv-equity-pledge">
                                        ${deadline_date}
                                    </td>
                                `;
                            } else {
                                if (debug) {
                                    console.log(`Sorry, we only show 5 items, now!`);
                                }
                            }
                        }
                    );
                    if (debug) {
                        console.log(`html_string1 = \n`, html_string1, typeof(html_string1));
                    }
                    const html_strings = [];
                    html_strings.push(html_string1);
                    html_strings.push(html_string2);
                    html_strings.push(html_string3);
                    html_strings.push(html_string4);
                    html_strings.push(html_string5);
                    html_strings.push(html_string6);
                    html_strings.push(html_string7);
                    if (debug) {
                        console.log(`html_strings = \n`, JSON.stringify(html_strings, null, 4));
                    }
                    let td_ids = document.querySelectorAll(uid);
                    for (let i = 0; i < td_ids.length; i++) {
                        td_ids[i].insertAdjacentHTML('beforeend', html_strings[i]);
                    }
                }else{
                    let l = 5 - arr.length;
                    for (let i = 0; i < l; i++) {
                        arr.push(
                            {
                                "ggrq": undefined,
                                "czr": undefined,
                                "zqr": undefined,
                                "zygs": undefined,
                                "zybl": undefined,
                                "qsrq": undefined,
                                "jzrq": undefined
                            }
                        );
                    }
                }

            }
        )
        .catch(error => console.log(`error = \n`, error));
    }
);



STOCK_F9_FV.Modules.equityPledge.init = STOCK_F9_FV.Modules.equityPledge.init || (
    (
        {
            ip,
            path,
            gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/stock/stockfast10/`,
            gilcode: `600570.SH`
        }
    ) => {
        let uid = `[data-tr="matrix-tr"]`,
            url = `${ip}${path}${gilcode}`;
        STOCK_F9_FV.Modules.equityPledge(url, uid, false);
        // STOCK_F9_FV.Modules.equityPledge(url, uid, true);
    }
);


STOCK_F9_FV.Modules.equityPledge.init({
    ip: STOCK_IP,
    path: `${STOCK_Paths}/stockfast10/`,
    gilcode: STOCK_SecCode
    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast10/`,
    // gilcode: `600570.SH`
});

// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast10/600570.SH`;
