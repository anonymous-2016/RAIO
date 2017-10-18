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

const companyNews = (url = ``, td_id = `id`, debug = false) => {
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
                    let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `😟暂无 新闻日期`;
                    let title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `🤓暂无 新闻标题`}`;
                    html_string += `
                        <tr class="fv-company-news-table-tr">
                            <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                                ${publishDate}
                            </td>
                            <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                                ${title}
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
    const url = `http://10.1.5.202/webservice/fastview/stock/news/600570.SH`;
    let link_more = document.querySelector(`[data-more="company-news-title"]`);
    let link_html = `
        <span id="company_news_link_more">
            <a href="#" title="company-news" data-uid="company_news_link_more">更多 >></a>
        </span>
    `;
    link_more.insertAdjacentHTML('beforeend', link_html);
    let more = document.querySelector(`#company_news_link_more`);
    more.classList.add("link-more");
    // more
    let td_id = document.querySelector('#fv-company-news-tbody');
    companyNews(url, td_id, true);
    // const debug = true;
    // companyNews(url, td_id, debug);
}, 0);
