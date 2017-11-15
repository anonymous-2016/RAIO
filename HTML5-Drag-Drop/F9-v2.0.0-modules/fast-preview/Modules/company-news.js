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
                    let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `暂无数据`,
                        title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `暂无数据`}`,
                        id = `${(arr[i].newid !== undefined) ? arr[i].newid : `暂无数据`}`;
                        // news no type!
                    title = title.replace(/(：：)/ig, "：");
                    html_string += `
                        <tr class="fv-company-news-table-tr">
                            <td class="fv-company-news-table-td-key" data-value="data-fv-company-news">
                                ${publishDate}
                            </td>
                            <td class="fv-company-news-table-td-value" data-value="data-fv-company-news">
                                <a
                                    href="#${id}"
                                    title="${title}"
                                    data-title="${title}"
                                    data-link="fv-company-news-link"
                                    data-disabled="${id !== "null" ? false : true}"
                                    data-link-detail="company-news-link-detail-module"
                                    data-newsId="${id}">
                                    ${title}
                                </a>
                            </td>
                        </tr>
                    `;
                    // no target="_blank"
                }
            );
            td_id.innerHTML = html_string;
            // http://10.1.5.202/queryservice/news/content/558091641955
            // download & open pdf
            setTimeout(() => {
                // const host = window.location.host ? window.location.host : `10.1.5.202`;
                const host = `http://10.1.5.202`;
                // absolute url ip
                let links = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
                if (debug) {
                    console.log(`links = \n`, links);
                }
                for (let i = 0; i < links.length; i++) {
                    links[i].addEventListener(`click`, (e) => {
                        // e.preventDefault();
                        // #hash ???
                        if (debug) {
                            console.log(`e.target.dataset = \n`, e.target.dataset);
                        }
                        if (debug) {
                            console.log(`e.target.dataset = \n`, e.target.dataset);
                            console.log(`e.target.dataset.newsid = \n`, e.target.dataset.newsid);
                            console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
                        }
                        // console.log(`e.target.dataset = \n`, e.target.dataset);
                        // newsid !== newsId
                        // let id = e.target.dataset.newsId
                        let id = e.target.dataset.newsid,
                            title = e.target.dataset.title;
                        try {
                            // let open_link = `${host}/queryservice/news/content/${id}`;
                            // ChromeExternal.Execute("OpenFile", open_link);
                            // no need ChromeExternal any more!
                            // open features ???
                            // console.log(`e.target.dataset.title = \n`, e.target.dataset.title);
                            const windows = {
                                // url: `${host}/queryservice/news/content/${id}`,
                                url: `https://cdn.xgqfrms.xyz/`,
                                title: `${title}`,
                                // options: "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                                options: {
                                    menubar: `yes`,
                                    location: `yes`,
                                    resizable: `yes`,
                                    scrollbars: `yes`,
                                    status: `yes`//,
                                }
                            };
                            // window.open({...windows});
                            // window.open(`${host}/queryservice/news/content/${id}`);
                            // window.open(windows.url, windows.title, windows.options);
                            let wo = window.open();
                                wo.document.head.innerHTML = `<title>公司新闻</title>`;
                                wo.document.body.innerHTML = `<p>Your content here</p>`;
                            let w =window.open();
                                w.document.open().write('content');
                            setTimeout(() => {
                                wo.close();
                                w.close();
                            }, 30000);
                        } catch (err) {
                            console.log(`${host}/queryservice/news/content/${id}: Error infos = \n`, err);
                            // window.open(`${host}/queryservice/news/content/${id}`);
                        }
                    });
                }
            }, 0);
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

