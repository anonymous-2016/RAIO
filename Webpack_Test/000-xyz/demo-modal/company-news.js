"use strict";

// import { } from "./show-modal";

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
                            let open_link = `${host}/queryservice/news/content/${id}`;
                            if (!debug) {
                                console.log(`id = ${id} \ntitle = ${title}`);
                                // alert(`id = ${id} \n title = ${title}`);
                            }
                            // fetch news summary data
                            const data = {
                                "Title": "永清环保获批“战略性新兴产业科技攻关与重大科技成果转化专项”",
                                "Id": 564082251803,
                                "Content": "　　证券时报网11月15日讯 记者获悉,近日,湖南省科技厅公告了《关于2017年度省战略性新兴产业科技攻关与重大科技成果转化专项立项项目的公示》。永清环保(300187)承担的“钢铁冶金行业烧结与球团烟气新型超低排放耦合技术研发与应用”成功获得专项立项。据悉,项目将为我国钢铁行业烟气污染物深度净化提供技术及应用支撑,对推动湖南省环保事业在雾霾治理、资源节约利用、钢铁企业去产能等方面实现可持续发展具有重大意义。\n",
                                "PublishDate": "2017-11-15  17:34:07",
                                "Infosource": "证券时报网",
                                "Url": "http://kuaixun.stcn.com/2017/1115/13771940.shtml"
                            };
                            // show modal
                            const BAD_URLs = [
                                "聚源数据",
                                "WWW",
                                "qq",
                                "ww",
                                "www.",
                                "www",
                                "wwww",
                                "http://data.east",
                                "http://www.",
                                "http://www.eweb",
                                "https://wx.qq.com/"
                            ];
                            // shape data ???
                            let url_link = BAD_URLs.includes(data.Url) === true ? `` : `
                                <a
                                    style="margin-left:10px;color:#5389d2;"
                                    class="gotext"
                                    id="linkyuanwen"
                                    target="_blank"
                                    data-value="${data.Url}"
                                    href="${data.Url}">
                                    查看原文
                                    <i class="icon-external-link"></i>
                                </a>
                            `;
                            // #linkyuanwen
                            // value="${data.Url}" !== href="${data.Url}"
                            const html_template = `
                                <div>
                                    <div class="modal-title">
                                        <h3 style="margin-left: 15px;">${data.Title}</h3>
                                    </div>
                                    <div class="zxdtData">
                                        <div class="fontSize" id="fontsize">
                                            <span>字体：</span>
                                            <span class="fontBtn">
                                                <a id="big">大</a>
                                            </span>
                                            <span class="fontBtn">
                                                <a id="middle">中</a>
                                            </span>
                                            <span class="fontBtn active">
                                                <a id="small">小</a>
                                            </span>
                                        </div>
                                        <div class="model-Info">
                                            <span>
                                                来源：
                                                <span id="zxdtlaiyuan" class="">
                                                    ${data.Infosource}
                                                </span>
                                                &nbsp;
                                            </span>
                                            <span id="zxdtPubDate" class="">${data.PublishDate}</span>&nbsp;
                                            ${url_link}
                                        </div>
                                        <div class="clr"></div>
                                    </div>
                                    <div class="modal-body" style="overflow: auto;text-align: left;">
                                        <div id="zxdtContent">
                                            ${data.Content}
                                        </div>
                                    </div>
                                </div>
                            `;
                            const modal = new BouncedModal({
                                // bouncedclass: "layerContianer2",//存放页面的容器类名
                                width: getClientWidth()-60,
                                height: getClientHeight()-80,
                                title: "公司新闻",
                                setOverflow: "overflow-y:none",//设置滚动的属性 overflow-y：设置竖向  overflow-x:设置横向
                                // str: html.join(''),// array to string
                                str: html_template,
                                datas: data,
                                callback:function(){
                                    // no need ???
                                }
                            });
                            modal.init();
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
        let td_id = document.querySelector('#fv-company-news-tbody');
        // STOCK_F9_FV.Modules.companyNews(url, td_id, true);
        STOCK_F9_FV.Modules.companyNews(url, td_id, false);
    }
);

STOCK_F9_FV.Modules.companyNews.init(`http://10.1.5.202/webservice/fastview/stock/news/600570.SH`);// url
// const url = `http://10.1.5.202/webservice/fastview/stock/news/600570.SH`;



