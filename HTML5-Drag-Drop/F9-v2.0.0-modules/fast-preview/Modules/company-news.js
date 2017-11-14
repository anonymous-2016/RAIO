"use strict";
/**
 * company-news 公司新闻
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
STOCK_F9_FV.Modules.companyNews = STOCK_F9_FV.Modules.companyNews || ((url = ``, td_id = `id`, debug = false) => {
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
                    // undefined
                    let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `暂无数据`;
                    let title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `暂无数据`}`;
                    let id = `${(arr[i].newid !== undefined) ? arr[i].newid : `暂无数据`}`;
                    html_string += `
                        <tr class="fv-company-news-table-tr">
                            <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                                ${publishDate}
                            </td>
                            <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                                <a
                                    href="#${id}"
                                    title="${title}"
                                    data-link="fv-company-news-link"
                                    disabled="${id ? false : true}"
                                    data-link-detail="company-news-link-detail-module"
                                    data-newsId="${id}">
                                    ${title}
                                </a>
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


STOCK_F9_FV.Modules.companyNews.init = STOCK_F9_FV.Modules.companyNews.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/news.json`) => {
        // let link_more = document.querySelector(`[data-more="company-news-title"]`);
        // let link_html = `
        //     <span id="company_news_link_more">
        //         <a href="#" title="company-news" data-uid="company_news_link_more">更多 >></a>
        //     </span>
        // `;
        // link_more.insertAdjacentHTML('beforeend', link_html);
        // let more = document.querySelector(`#company_news_link_more`);
        // more.classList.add("link-more");
        // more
        let td_id = document.querySelector('#fv-company-news-tbody');
        // STOCK_F9_FV.Modules.companyNews(url, td_id, true);
        STOCK_F9_FV.Modules.companyNews(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.companyNews.init(`http://10.1.5.202/webservice/fastview/stock/news/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/news/600570.SH`;

