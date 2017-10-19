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
                    let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `😟 暂无数据`;
                    let title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `😟 暂无数据`}`;
                    let id = `${(arr[i].newid !== undefined) ? arr[i].newid : `😟 暂无数据`}`;
                    html_string += `
                        <tr class="fv-company-news-table-tr">
                            <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                                ${publishDate}
                            </td>
                            <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                                <a href="#${id}" data-link="fv-company-news-link" data-link-detail="company-news-link-detail-module" data-newsId="${id}">${title}</a>
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

// newsId

const clickLinkOpenModuleHandler = (uid = `600570`, debug = false) => {
    // 600570.SH
    // alert(`uid = `, uid);
    alert(`uid = ${uid}`);// alert(`desc ${key}`) !== console.log(`desc `, key);
    // fetch data
    // show module
    // cache ?
};
setTimeout(function() {
    let a_links = document.querySelectorAll(`a[data-link-detail="company-news-link-detail-module"]`);
    for (var i = 0; i < a_links.length; i++) {
        // let uid = a_links[i].innerText;
        // let uid = parseInt(a_links[i].dataset.newsId);// dataset ignore Capital!
        let uid = parseInt(a_links[i].dataset.newsid);
        // OR, just  get it from URL hash!
        let hash_id = parseInt((this.window.location.hash).slice(1));
        console.log(`id = ${uid}`);
        a_links[i].addEventListener(`click`,
            (e) => {
                e.preventDefault();// disable defalut a link event!
                console.log(`id = ${uid}`);
                let e_id = parseInt(e.dataset.newsid);
                console.log(`id = ${e_id}`);
                clickLinkOpenModuleHandler(uid);
            }
        );
    }
    // only once ???
}, 1000);

/* 

this.window.location.hash;
// "#561479742849"

a_links = document.querySelectorAll(`a[data-link-detail="company-news-link-detail-module"]`);

a_links[0];

a_links[0].dataset.newsId;// dataset ignore Capital
// undefined

a_links[0].dataset.newsid;
// "561487482089"


*/