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
            // open news modal
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
                        // let id = e.target.dataset.newsid;
                        let id = e.target.dataset.newsid,
                            title = e.target.dataset.title;
                        try {
                            let open_link = `${host}/queryservice/news/content/${id}`;
                            if (!debug) {
                                console.log(`id = ${id} \ntitle = ${title}`);
                                // no need title
                            }
                            // fetch news summary data
                            let data = {};
                            fetch(open_link)
                            .then(res => res.json())
                            .then(
                                (json) => {
                                    if (debug) {
                                        console.log(`json = \n`, JSON.stringify(json, null, 4));
                                    }
                                    // shape data ???
                                    data = json;
                                    // BouncedModal
                                    const UDP_wh = UDP.getClientWidthHeight;
                                    if (debug) {
                                        console.log(`UDP_wh = \n`, JSON.stringify(UDP_wh, null, 4));
                                    }
                                    let UDP_width = UDP_wh.w - 60,
                                        UDP_height = UDP_wh.h - 60;
                                    const modal = new BouncedModal({
                                        // bouncedclass: "layerContianer2",//存放页面的容器类名
                                        width: UDP_width,
                                        height: UDP_height,
                                        title: "公司新闻",
                                        setOverflow: "overflow-y:none",
                                        //设置滚动的属性(overflow-y: 竖向  overflow-x: 横向)
                                        // str: html.join(''),// array to string
                                        // str: html_template,
                                        datas: Object.assign({}, data)
                                    });
                                    modal.init();
                                    // return json;
                                }
                            )
                            .catch(err => console.log(`error infos = \n`, err));
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

