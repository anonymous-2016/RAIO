// import {DOM_queryAll, DOM_query} from "./utils/DOM";

// const xyz_debug = window.xyz_debug ? window.xyz_debug : false;
// var debug = false;

// namespaces
var OTC_TS_FV = OTC_TS_FV || {};
// sub namespaces
OTC_TS_FV.Utils = OTC_TS_FV.Utils || {};

OTC_TS_FV.Utils.getParam = OTC_TS_FV.Utils.getParam || ((key, debug = false) => {
    let search = decodeURIComponent(window.location.search),
        start = search.indexOf("?") + 1,
        value = ``;
    if (start < 1) {
        return;
    }else{
        let queryString = search.substr(start),
            paraNames = queryString.split("&");// Array
        for (let i = 0; i < paraNames.length; i++) {
            let begin = paraNames[i].indexOf("=");
            if (begin > 0) {
                let pname = paraNames[i].substring(0, begin),
                    pvalue = paraNames[i].substring(begin + 1);
                if (key === pname) {
                    value = pvalue;
                    break;
                }
            }
        }
        return value;
    }
});

OTC_TS_FV.Utils.DOM_queryAll = OTC_TS_FV.Utils.DOM_queryAll || ((str = `[data-sortable-box*="sortable-box"]`, debug = false) => {
    let results = document.querySelectorAll(str);
    if (debug) {
        if (results) {
            console.log(`result = `, results);
        }else{
            console.log(`Error: result = `, results);
            // []
        }
    }
    return results ? results : ``;
});

OTC_TS_FV.Utils.DOM_query = OTC_TS_FV.Utils.DOM_query || ((str = `[data-sortable-box*="sortable-box"]`, debug = false) => {
    let result = document.querySelector(str);
    if (debug) {
        if (result) {
            console.log(`result = `, result);
        }else{
            console.log(`Error: result = `, result);
            // []
        }
    }
    return result ? result : ``;
});

// global variable
var OTC_IP = OTC_IP || ``;
var OTC_PATH = OTC_PATH || ``;
// var OTC_SOCKET = OTC_SOCKET || ``;
var OTC_GILCODE = OTC_GILCODE || ``;
var OTC_SKIN = OTC_SKIN || ``;


// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};

// sidebar
const initSidebar = () => {
    let lis = OTC_TS_FV.Utils.DOM_queryAll(`[data-nav-li="nav-li"]`);
    let divs = OTC_TS_FV.Utils.DOM_queryAll(`[data-nav-box="nav-box"]`);
    // let arr = [0,1,2];
    let arr = [];
    for (let ii = 0; ii < lis.length; ii++) {
        arr.push(ii);
    }
    console.log(`arr = `, arr);
    // [0, 1, 2]
    for (let i = 0; i < lis.length; i++) {
        console.log(`i = `, i);
        // console.log(`lis[i] = `, lis[i]);
        lis[i].addEventListener(`click`, (e) => {
            console.log(`e.target = `, e.target);// li ? li : a
            // console.log(`e.target.parent = `, e.target.parent);// undefined
            // console.log(`e.target.parentNode = `, e.target.parentNode);// li
            console.log(`lis[i] = `, lis[i], i);// 2 ???
            if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
                // do nothing
            }else{
                lis[i].classList.add("h5-dnd-nav-li-active");
                lis[i].classList.remove("h5-dnd-nav-li-hidden");
                lis[i].classList.add("no-bottom-margin");
                lis[i].classList.remove("add-bottom-margin");
                // let arr = [0,1,2];
                arr.map(
                    (item, index) =>{
                        console.log(`item = `, item);
                        console.log(`index = `, index);
                        if(item !== i){
                            if (lis[item].classList.contains(`h5-dnd-nav-li-active`)) {
                                lis[item].classList.add("add-bottom-margin");
                                lis[item].classList.remove("no-bottom-margin");
                                lis[item].classList.add("h5-dnd-nav-li-hidden");
                                lis[item].classList.remove("h5-dnd-nav-li-active");
                            }
                        }
                    }
                );
            };
            if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                // do nothing
            }else{
                divs[i].classList.add("h5-dnd-nav-box-active");
                divs[i].classList.remove("h5-dnd-nav-box-hidden");
                // let arr = [0,1,2];
                arr.map(
                    (item, index) =>{
                        if(item !== i){
                            if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                                divs[item].classList.remove("h5-dnd-nav-box-active");
                                divs[item].classList.add("h5-dnd-nav-box-hidden");
                            }
                        }
                    }
                );
            };
        });
    }
    // btns & containers
    let btn = OTC_TS_FV.Utils.DOM_query(`[data-nav-btn="nav-btn"]`),
        small_btn = OTC_TS_FV.Utils.DOM_query(`[data-nav-small-btn="nav-small-btn"]`),
        container = OTC_TS_FV.Utils.DOM_query(`[data-nav-container="nav-container"]`),
        small_container = OTC_TS_FV.Utils.DOM_query(`[data-nav-small-container="nav-small-container"]`),
        body_container = OTC_TS_FV.Utils.DOM_query(`[data-body-container="data-body-container"]`);

    btn.onclick = () => {
        // container
        if (container.classList.contains("h5-dnd-nav-container-normal")) {
            container.classList.add("h5-dnd-nav-container-small");
            container.classList.remove("h5-dnd-nav-container-normal");
        }else{
            container.classList.remove("h5-dnd-nav-container-small");
            container.classList.add("h5-dnd-nav-container-normal");
        }
        // small_container
        if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
            small_container.classList.add("h5-dnd-nav-small-btn-show");
            small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
        }else{
            small_container.classList.add("h5-dnd-nav-small-btn-hidden");
            small_container.classList.remove("h5-dnd-nav-small-btn-show");
        }
        // body_container
        if (body_container.classList.contains("h5-dnd-body-container-small")) {
            body_container.classList.remove("h5-dnd-body-container-small");
            body_container.classList.add("h5-dnd-body-container-big");
        }
    };
    small_btn.onclick = () => {
        if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
            small_container.classList.add("h5-dnd-nav-small-btn-show");
            small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
        }else{
            small_container.classList.add("h5-dnd-nav-small-btn-hidden");
            small_container.classList.remove("h5-dnd-nav-small-btn-show");
        }
        if (container.classList.contains("h5-dnd-nav-container-normal")) {
            container.classList.add("h5-dnd-nav-container-small");
            container.classList.remove("h5-dnd-nav-container-normal");
        }else{
            container.classList.remove("h5-dnd-nav-container-small");
            container.classList.add("h5-dnd-nav-container-normal");
        }
        if (body_container.classList.contains("h5-dnd-body-container-big")) {
            body_container.classList.remove("h5-dnd-body-container-big");
            body_container.classList.add("h5-dnd-body-container-small");
        }
    };
};



// tabs
const initTabs = () => {
    let btn_universal = document.querySelector(`[data-uid="universal"]`),
        btn_customize = document.querySelector(`[data-uid="customize"]`);
        // btn_module_setting = document.querySelector(`[data-uid="module-setting"]`);
    let a_modules = document.querySelector(`[data-uid="modules-a-link"]`);
    const sortable_module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);
    btn_universal.onclick = (e) => {
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        // 最新交易数据 latest-transaction-data
        let left_uids = ["news", "research"];
        let right_uids = ["bulletin", "otcperfast06", "otcperfast10"];
        OTC_TS_FV.Modules.loadAllModules.init(sortable_module_containers[0], left_uids);
        OTC_TS_FV.Modules.loadAllModules.init(sortable_module_containers[1], right_uids);
    }
    btn_customize.onclick = (e) => {
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        a_modules.click();
    }
    // btn_module_setting.addEventListener(`click`, (e) => {
    //     const title = `Sorry for that, it still in developing!`;
    //     alert(`😃😃😃Coming soon ... 😧😒😟\n ${title}`);
    // });
};

// http://localhost:3000/?gilcode=430002.OC&skin=black

window.onload = () => {
    initSidebar();
    initTabs();
    OTC_IP = `${window.parent.location.origin}`;
    OTC_PATH = `/webservice/fastview/otcper`;
    OTC_GILCODE = OTC_TS_FV.Utils.getParam(`gilcode`) ? OTC_TS_FV.Utils.getParam(`gilcode`) : `430002.OC`;
    OTC_SKIN = OTC_TS_FV.Utils.getParam(`gilcode`) ? OTC_TS_FV.Utils.getParam(`skin`) : `white`;
    // OTC_SOCKET = ``;
    console.log(`OTC_GILCODE `, OTC_GILCODE, typeof OTC_GILCODE);
    console.log(`OTC_SKIN `, OTC_SKIN, typeof OTC_SKIN);
};


/**
 * @author xgqfrms
 * @description load Module (2017.11.01)
 * @param {* String} module_uid_name
 * @param {* Boolean} isTable
 */

const loadModule = (uid =``, module_uid_name=``, isTable=`false`, debug = false) => {
    // setTimeout & IIFE & Closure
    setTimeout(() => {
        ((module_uid_name, isTable) => {
            let box = (isTable === true)
                ? document.querySelector(`.otc-${module_uid_name}-table`)
                : document.querySelector(`.otc-${module_uid_name}-container`),
                link_css = document.createElement(`link`),
                script_dom = document.createElement(`script`);
            link_css.setAttribute(`rel`, `stylesheet`);
            link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
            link_css.setAttribute(`href`, `./modules/${module_uid_name}.css`);
            // link_css.setAttribute(`href`, `./build/css/${module_uid_name}.min.css`);
            script_dom.dataset.deleteScriptDom = `delete-script-dom-${uid}`;
            script_dom.setAttribute(`src`, `./build/js/${module_uid_name}.min.js`);
            box.insertAdjacentElement(`afterend`, link_css);
            link_css.insertAdjacentElement(`afterend`, script_dom);
        })(module_uid_name, isTable);
    }, 0);
};

const HTML_Template = (uid = ``, loadModule = function(){}, debug = false) => {
    let htmlstr = ``,
        delete_uid = ``;
    switch (uid) {
        case "otcperfast01":
            delete_uid = `latest-transaction-data`;
            loadModule(uid, `latest-transaction-data`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-latest-transaction-data-title">
                            最新交易数据
                            <span data-title-text="otc-latest-transaction-data-title-text">
                                    (截止日期:
                                    <span data-text="otc-latest-transaction-data-text">
                                        <!-- 2017-12-12 -->
                                    </span>)
                            </span>
                            <span data-link="otc-latest-transaction-data-link">
                                <a href="#每日交易数据">每日交易数据</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-latest-transaction-data-table">
                        <thead class="otc-latest-transaction-data-table-thead">
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-title">最新交易数据</td>
                            </tr>
                        </thead>
                        <tbody class="otc-latest-transaction-data-table-tbody">
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="收盘价">收盘价</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="总市值">总市值(元)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="涨跌幅">涨跌幅(%)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="流通市值">流通市值(元)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="成交量">成交量(股)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="市盈率(TTM)">市盈率(TTM)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="换手率">换手率(%)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="市盈率(LYR)">市盈率(LYR)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="成交额">成交额(元)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="市净率">市净率(LYR)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-latest-transaction-data-table-tfoot">
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast02":
            delete_uid = `big-event-reminder`;
            loadModule(uid, `big-event-reminder`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-big-event-reminder-title">
                            大事提醒
                            <span data-link="otc-big-event-reminder-link">
                                <a href="#分红数据">分红数据</a>
                                <a href="#增发数据">增发数据</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-big-event-reminder-table">
                        <thead class="otc-big-event-reminder-table-thead">
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-title">大事提醒</td>
                            </tr>
                        </thead>
                        <tbody class="otc-big-event-reminder-table-tbody" data-tbody="otc-big-event-reminder-table-tbody">
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-key" data-alias="最新分红预案">最新分红预案</td>
                                <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER"></td>
                            </tr>
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-key" data-alias="最新分红实施">最新分红实施</td>
                                <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER"></td>
                            </tr>
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-key" data-alias="最新增发预案">最新增发预案</td>
                                <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER"></td>
                            </tr>
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-key" data-alias="定报预约披露">定报预约披露</td>
                                <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-big-event-reminder-table-tfoot">
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-value" data-value="data-otc-BER"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast03":
            delete_uid = `company-brief-introduction`;
            loadModule(uid, `company-brief-introduction`);
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-company-brief-introduction-title">公司简介</p>
                    </div>
                    <table class="fv-company-brief-introduction-table">
                        <thead class="fv-company-brief-introduction-table-thead">
                            <tr class="fv-company-brief-introduction-table-tr">
                                <td class="fv-company-brief-introduction-table-td-title">公司简介</td>
                            </tr>
                        </thead>
                        <tbody class="fv-company-brief-introduction-table-tbody" id="fv-company-brief-introduction-tbody"></tbody>
                        <tfoot class="fv-company-brief-introduction-table-tfoot">
                            <tr class="fv-company-brief-introduction-table-tr">
                                <td class="fv-company-brief-introduction-table-td-value" data-value="data-fv-events"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast04":
            delete_uid = `latest-financial-data`;
            loadModule(uid, `latest-financial-data`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-latest-financial-data-title">
                            最新财务数据
                            <span data-link="otc-latest-financial-data-link">
                                <a href="#更多财务数据">更多财务数据</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-latest-financial-data-table">
                        <thead class="otc-latest-financial-data-table-thead">
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-title">最新财务数据</td>
                            </tr>
                        </thead>
                        <tbody class="otc-latest-financial-data-table-tbody">
                            <tr>
                                <div data-div="tbody-div" data-titles="data-otc-LFD-title"></div>
                            </tr>
                            <tr>
                                <td colspan="3" data-title="td-colspan" data-titles="data-otc-LFD-title"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="营业收入(元)">营业收入(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="营业收入同比增长(%)">营业收入同比增长(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="总资产(元)">总资产(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="营业利润(元)">营业利润(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="基本每股收益">基本每股收益</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="净资产(元)">净资产(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="利润总额(元)">利润总额(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="ROE(%)">ROE(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="每股净资产">每股净资产</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="归属挂牌公司股东的净利润(元)">归属挂牌公司股东的净利润(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="归母净利润同比增长(%)">归母净利润同比增长(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="经营活动产生的现金流量净额(元)">经营活动产生的现金流量净额(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr>
                                <td colspan="3" data-space="tr-space"></td>
                            </tr>
                            <tr>
                                <td colspan="3" data-title="td-colspan" data-titles="data-otc-LFD-title"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="基本每股收益">基本每股收益</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="营业收入(元)">营业收入(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="资产总计(元)">资产总计(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="稀释每股收益">稀释每股收益</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="营业利润(元)">营业利润(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="负债总计(元)">负债总计(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="每股收益-扣除">每股收益-扣除</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="利润总额(元)">利润总额(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="归属于挂牌公司股东的净资产(元)">归属于挂牌公司股东的净资产(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="归属于挂牌公司股东的每股净资产(元)">归属于挂牌公司股东的每股净资产(元)
                                </td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="归属挂牌公司股东的净利润(元)">归属挂牌公司股东的净利润(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="经营活动产生的现金流量净额(元)">经营活动产生的现金流量净额(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="每股经营活动产生的现金流量净额(元">每股经营活动产生的现金流量净额(元</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="归属挂牌公司股东的净利润-扣除(元)">归属挂牌公司股东的净利润-扣除(元)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="总资产同比增长(%)">总资产同比增长(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="净资产收益率-加权(%)">净资产收益率-加权(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="营业收入同比增长(%)">营业收入同比增长(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="销售毛利率(%)">销售毛利率(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="净资产收益率-扣除(%)">净资产收益率-扣除(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="净利润同比增长(%)">净利润同比增长(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-key" data-alias="资产负债率(%)">资产负债率(%)</td>
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-latest-financial-data-table-tfoot">
                            <tr class="otc-latest-financial-data-table-tr">
                                <td class="otc-latest-financial-data-table-td-value" data-value="data-otc-LFD">
                                    <!-- bug -->
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast05":
            delete_uid = `agency-rating`;
            loadModule(uid, `agency-rating`);
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-agency-rating-title">机构评级</p>
                    </div>
                    <div class="fv-agency-rating-container">
                        <!-- 机构评级 placeholder -->
                        <div id="agency_rating_hs_container" class="fv-agency-rating-hs fv-agency-rating-hs-container" data-hs-container="data-agency-rating-container-uid"></div>
                    </div>
                </section>
            `;
            break;
        case "otcperfast06":
            delete_uid = `stock-price-turnover`;
            loadModule(uid, `stock-price-turnover`);
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-stock-price-turnover-title">股价/成交量</p>
                    </div>
                    <div class="fv-stock-price-turnover-container">
                        <div id="stock_price_turnover_hs_container" class="fv-stock-price-turnover-hs fv-stock-price-turnover-hs-container" data-hs-container="data-stock-price-turnover-container-uid"></div>
                    </div>
                </section>
            `;
            break;
        case "otcperfast07":
            delete_uid = `top-ten-shareholders`;
            loadModule(uid, `top-ten-shareholders`, true);// table
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">前十大股东</p>
                    </div>
                    <table class="fv-top-ten-shareholders-table">
                        <thead class="fv-top-ten-shareholders-table-thead">
                            <tr class="fv-top-ten-shareholders-table-tr">
                                <td class="fv-top-ten-shareholders-table-td-title fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">时间</td>
                                <td class="fv-top-ten-shareholders-table-td-title">机构或基金名称</td>
                                <td class="fv-top-ten-shareholders-table-td-title">持有数量</td>
                                <td class="fv-top-ten-shareholders-table-td-title">占流通股比例(%))</td>
                                <td class="fv-top-ten-shareholders-table-td-title">股本性质</td>
                            </tr>
                        </thead>
                        <tbody class="fv-top-ten-shareholders-table-tbody" id="fv-top-ten-shareholders-tbody"></tbody>
                        <tfoot class="fv-top-ten-shareholders-table-tfoot">
                            <tr class="fv-top-ten-shareholders-table-tr">
                                <td class="fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast08":
            delete_uid = `financing-and-margin-balance-difference-trend`;
            loadModule(uid, `financing-and-margin-balance-difference-trend`, false);// container
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-financing-and-margin-balance-difference-trend-title">融资余额与融券余额差值走势</p>
                    </div>
                    <div class="fv-financing-and-margin-balance-difference-trend-container">
                        <!-- 融资余额与融券余额差值走势 placeholder -->
                        <div id="financing_and_margin_balance_difference_trend_hs_container" class="fv-financing-and-margin-balance-difference-trend-hs fv-financing-and-margin-balance-difference-trend-hs-container" data-hs-container="data-financing-and-margin-balance-difference-trend-container-uid"></div>
                    </div>
                </section>
            `;
            break;
        case "otcperfast09":
            delete_uid = `monthly-capital-flows-large-single-statistics`;
            loadModule(uid, `monthly-capital-flows-large-single-statistics`);// false
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-monthly-capital-flows-large-single-statistics-title">近一月资金流向大单统计</p>
                    </div>
                    <div class="fv-monthly-capital-flows-large-single-statistics-container">
                        <!-- 近一月资金流向大单统计 placeholder -->
                        <div id="monthly_capital_flows_large_single_statistics_hs_container" class="fv-monthly-capital-flows-large-single-statistics-hs fv-monthly-capital-flows-large-single-statistics-hs-container" data-hs-container="data-monthly-capital-flows-large-single-statistics-container-uid"></div>
                    </div>
                </section>
            `;
            break;
        case "otcperfast10":
            delete_uid = `equity-pledge`;
            loadModule(uid, `equity-pledge`, true);
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-equity-pledge-title" data-more="equity-pledge-title">股权质押</p>
                    </div>
                    <table class="fv-equity-pledge-table">
                        <thead class="fv-equity-pledge-table-thead">
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title fv-equity-pledge-table-td-value" data-value="data-fv-equity-pledge">质押公告日期</td>
                                <!-- date -->
                            </tr>
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title">出质人</td>
                                <!-- people -->
                            </tr>
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title">质权人</td>
                                <!--  -->
                            </tr>
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title">质押股数(万股)</td>
                            </tr>
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title">占流通A股比例</td>
                            </tr>
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title">质押起始日期</td>
                            </tr>
                            <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                <td class="fv-equity-pledge-table-td-title">质押结束日期</td>
                            </tr>
                        </thead>
                        <!-- <tbody class="fv-equity-pledge-table-tbody" id="fv-equity-pledge-tbody"></tbody> -->
                        <tfoot class="fv-equity-pledge-table-tfoot">
                            <tr class="fv-equity-pledge-table-tr">
                                <td class="fv-equity-pledge-table-td-value" data-value="data-fv-equity-pledge"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast11":
            delete_uid = `holdings-participation-situation`;
            loadModule(uid, `holdings-participation-situation`, true);
            htmlstr += `
                <section class="fv-module-box-5">
                    <div class="fv-h5dnd-modules-title-box">
                        <p class="fv-h5dnd-modules-title" data-title="fv-holdings-participation-situation-title" data-more="holdings-participation-situation-title">控股参股情况</p>
                    </div>
                    <table class="fv-holdings-participation-situation-table">
                        <thead class="fv-holdings-participation-situation-table-thead">
                            <tr class="fv-holdings-participation-situation-table-tr">
                                <td class="fv-holdings-participation-situation-table-td-title fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">被参控公司</td>
                                <td class="fv-holdings-participation-situation-table-td-title">参控关系</td>
                                <td class="fv-holdings-participation-situation-table-td-title">参控比例 (%)</td>
                                <td class="fv-holdings-participation-situation-table-td-title">被参控公司净利润</td>
                                <td class="fv-holdings-participation-situation-table-td-title">被参控公司主营业务</td>
                            </tr>
                        </thead>
                        <tbody class="fv-holdings-participation-situation-table-tbody" id="fv-holdings-participation-situation-tbody"></tbody>
                        <tfoot class="fv-holdings-participation-situation-table-tfoot">
                            <tr class="fv-holdings-participation-situation-table-tr">
                                <td class="fv-holdings-participation-situation-table-td-value" data-value="data-fv-holdings-participation-situation"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "news":
            delete_uid = `company-news`;
            loadModule(uid, `company-news`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-company-news-title">
                            公司新闻
                            <span data-more="otc-company-news-link">
                                <a href="#更多新闻" data-more="otc-company-news-link-more">更多新闻</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-company-news-table">
                        <thead class="otc-company-news-table-thead">
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-title">新闻标题</td>
                                <td class="otc-company-news-table-td-title">新闻日期</td>
                                <td class="otc-company-news-table-td-title">新闻来源</td>
                            </tr>
                        </thead>
                        <tbody class="otc-company-news-table-tbody" data-tbody="otc-company-news-table-tbody">
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-key" data-alias="公司新闻1" data-key="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                            </tr>
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-key" data-alias="公司新闻2" data-key="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                            </tr>
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-key" data-alias="公司新闻3" data-key="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                            </tr>
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-key" data-alias="公司新闻4" data-key="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                            </tr>
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-key" data-alias="公司新闻5" data-key="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-company-news-table-tfoot">
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-value" data-value="data-otc-CN"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "bulletin":
            delete_uid = `company-bulletin`;
            loadModule(uid, `company-bulletin`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-company-bulletin-title">
                            公司公告
                            <span data-more="otc-company-bulletin-link">
                                <a href="#更多公告" data-more="otc-company-bulletin-link-more">更多公告</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-company-bulletin-table">
                        <thead class="otc-company-bulletin-table-thead">
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-title">公告标题</td>
                                <td class="otc-company-bulletin-table-td-title">公告日期</td>
                                <td class="otc-company-bulletin-table-td-title">公告类型</td>
                            </tr>
                        </thead>
                        <tbody class="otc-company-bulletin-table-tbody" data-tbody="otc-company-bulletin-table-tbody">
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-key" data-alias="公司公告1" data-key="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                            </tr>
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-key" data-alias="公司公告2" data-key="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                            </tr>
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-key" data-alias="公司公告3" data-key="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                            </tr>
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-key" data-alias="公司公告4" data-key="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                            </tr>
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-key" data-alias="公司公告5" data-key="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-company-bulletin-table-tfoot">
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-value" data-value="data-otc-CB"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "research":
            delete_uid = `research-report`;
            loadModule(uid, `research-report`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-research-report-title">
                            研究报告
                            <span data-more="otc-research-report-link">
                                <a href="#更多研报" data-more="otc-research-report-link-more">更多研报</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-research-report-table">
                        <thead class="otc-research-report-table-thead">
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-title">研报标题</td>
                                <td class="otc-research-report-table-td-title">披露日期</td>
                                <td class="otc-research-report-table-td-title">研报类型</td>
                                <td class="otc-research-report-table-td-title">发布机构</td>
                            </tr>
                        </thead>
                        <tbody class="otc-research-report-table-tbody" data-tbody="otc-research-report-table-tbody">
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-key" data-alias="研究报告1" data-key="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                            </tr>
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-key" data-alias="研究报告2" data-key="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                            </tr>
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-key" data-alias="研究报告3" data-key="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                            </tr>
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-key" data-alias="研究报告4" data-key="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                            </tr>
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-key" data-alias="研究报告5" data-key="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-research-report-table-tfoot">
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-value" data-value="data-otc-RR"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        default:
            break;
    }
    return {
        delete_uid,
        htmlstr
    };
};

const layoutCSS = (uid = ``, div = ``) => {
    // half === 5/5
    // otc-fv-half-box
    switch (uid) {
        case "otcperfast01":
        case "otcperfast02":
        case "otcperfast03":
        case "otcperfast04":
        case "otcperfast05":
        case "otcperfast06":
        case "otcperfast07":
        case "otcperfast08":
        case "otcperfast09":
        case "otcperfast10":
        case "otcperfast11":
        case "news":
        case "bulletin":
        case "research":
            div.classList.add(`otc-center-box`);
            break;
        default:
            div.classList.add(`otc-center-box`);
            break;
    }
};

const deleteModule = () => {
    //
};

/**
 * loadAllModules
 * @description initial all modules
 * @argument {* String | Object}dom_container_uid
 * @param {* Array} uids
 * @param {* Boolean} debug
 */

OTC_TS_FV.Modules.loadAllModules = OTC_TS_FV.Modules.loadAllModules || (
    (sortable_container = `sortable_container`,debug = false) => {
        /**
         *
         * @param {* DOM} container
         * @param {* Array} uids
         */
        const dropAll = (container, uids) => {
            // module_container
            uids.forEach(
                (uid, i) => {
                    let div = document.createElement(`div`),
                        sub_div = document.createElement(`div`);
                    sub_div.dataset.deleteModuleUid = `delete-module-${uid}`;
                    sub_div.insertAdjacentHTML(
                        `beforeend`,
                        `<span
                            data-delete-span="delete-span"
                            title="Waring: 你确定要删除此模块？">
                            删除
                        </span>`
                    );
                    sub_div.firstChild.dataset.deleteModuleUid = `delete-module-${uid}`;
                    sub_div.firstChild.addEventListener(`click`, (e) => {
                        let uid = e.target.dataset.deleteModuleUid;
                        // OK
                        OTC_TS_FV.Modules.modulesLoader.deleteModule(uid);
                        // call delete
                    });
                    div.dataset.divModuleUid = `div-module-${uid}`;
                    div.dataset.droppedUid=`module-data-${uid}`;
                    layoutCSS(uid, div);
                    let {htmlstr, delete_uid} = HTML_Template(uid, loadModule);
                    div.insertAdjacentHTML(`beforeend`, `${htmlstr}`);
                    container.insertAdjacentElement(`beforeend`, div);
                    setTimeout(function() {
                        let delete_box = document.querySelector(`[data-title="otc-${delete_uid}-title"]`);
                        delete_box.appendChild(sub_div);
                        if (delete_box !== null) {
                            delete_box.appendChild(sub_div);
                        }
                    }, 0);
                }
            );
        };
        return {
            init: (container_uid = ``, uids = [], debug = false) => {
                dropAll(container_uid, uids);
            },
            // dropAll: dropAll(uids)
        };
    }
)();



/**
 * CutomizeModulesLoader
 * @description load each module once & check is exist before drop it
 * @author xgqfrms
 * @argument module_uid's
 *
 */


// IIFE === Closure!
OTC_TS_FV.Modules.modulesLoader = OTC_TS_FV.Modules.modulesLoader ||(
    (debug = false) => {
        let module_datas = document.querySelectorAll(`[data-icon-uid*="module-data"]`),
            module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`),
            module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`),
            drop_counter = 0;
        return {
            isExistCheck: function(uid=``){
                // isExistCheck
            },
            loadAllModules: () => {
                // loadAllModules
            },
            deleteModule: (dom_uid=``, script_uid=``) => {
                let div_uid = dom_uid.replace(`delete`, `div`);
                let tdu = document.querySelector(`[data-div-module-uid="${div_uid}"]`);
                // swal & Promise
                swal({
                    title: "你确定要删除此模块?",
                    // text: "你确定要删除此模块?",
                    icon: "error",
                    // icon: "warning",
                    // icon: "success",
                    buttons: {
                        cancel: {
                            text: "取消",
                            value: "cancel",
                            // value: false,
                            visible: true,
                            className: "",
                            // closeModal: true
                        },
                        ok: {
                            text: "确定",
                            value: "ok",
                            // value: true,
                            visible: true,
                            className: "",
                            closeModal: true
                        }
                    }
                })
                .then((value) => {
                    let result = value || ``;
                    // true
                    if(result === "ok"){
                        if (tdu.parentNode.id === "left-sortable-container") {
                            module_containers[0].removeChild(tdu);
                            swal({
                                title: "已删除此模块",
                                text: "1秒后自动关闭",// 1秒后自动关闭 / 自动关闭中...
                                icon: "success",
                                buttons: false,
                                timer: 1000
                            });
                        }else if (tdu.parentNode.id === "right-sortable-container") {
                            module_containers[1].removeChild(tdu);
                            swal({
                                title: "已删除此模块",
                                text: "1秒后自动关闭",
                                // text: "你确定要删除此模块?",
                                icon: "success",
                                buttons: false,
                                timer: 1000
                            });
                        }else{
                            console.log(`Coming soon... `, tdu.parentNode);
                        }
                    }else{
                        swal({
                            title: "已取消删除此模块!",
                            text: "1秒后自动关闭",
                            // text: "你确定要删除此模块?",
                            icon: "success",
                            buttons: false,
                            timer: 1000
                        });
                    }
                });
            },
            dragstart: function(e) {
                // e.preventDefault();
                // iconUid
                let iconUid = e.target.dataset.iconUid.substr(12),
                    droppedUid = e.target.dataset.droppedUid ? e.target.dataset.droppedUid.substr(12) : ``;
                let uid = iconUid ? iconUid : droppedUid;
                e.effectAllowed = `move`;
                e.dataTransfer.setData("text/plain", uid);
            },
            dragend: function(e) {
                e.preventDefault();
            },
            dragenter: (e) => {
                e.preventDefault();
                return true;
            },
            dragover: (e) => {
                if (drop_counter === 0) {
                    let info_div = document.createElement(`div`);
                    info_div.innerHTML = "请将模块拖拽到灰色区域内!";
                    info_div.setAttribute(`id`, `drop_info_div`);
                    // module_container.insertAdjacentElement(`afterbegin`, info_div);
                    drop_counter++
                }
                e.preventDefault();
                return true;
            },
            dragleave: (e) => {
                e.preventDefault();
                return true;
            },
            drop: function(e) {
                e.preventDefault();
                let drop_container_uid = e.target.dataset.sortableBox;
                if (drop_counter === 1) {
                    let drop_info_div = document.querySelector(`#drop_info_div`);
                    drop_counter = 0;
                }
                let uid = e.dataTransfer.getData("text/plain");
                let div = document.createElement(`div`),
                    sub_div = document.createElement(`div`);
                sub_div.dataset.deleteModuleUid = `delete-module-${uid}`;
                sub_div.insertAdjacentHTML(
                    `beforeend`,
                    `<span
                        data-delete-span="delete-span"
                        title="Waring: 你确定要删除此模块？">
                        删除
                    </span>`
                );
                sub_div.firstChild.dataset.deleteModuleUid = `delete-module-${uid}`;
                // sub img
                sub_div.firstChild.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.deleteModuleUid;
                    OTC_TS_FV.Modules.modulesLoader.deleteModule(uid);
                });
                // icons
                div.dataset.divModuleUid = `div-module-${uid}`;
                div.dataset.droppedUid=`module-data-${uid}`;
                layoutCSS(uid, div);
                let module_exist_checker = ``;
                if (typeof(uid) === "string" && uid.length < 13) {
                    // "otcperfast13".length; // 12 => 13
                    module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`)
                }else{
                    module_exist_checker = null;
                }
                if (module_exist_checker === null) {
                    let {htmlstr, delete_uid} = HTML_Template(uid, loadModule);
                    div.insertAdjacentHTML(`beforeend`, `${htmlstr}`);
                    if (drop_container_uid === "left-sortable-box") {
                        module_containers[0].insertAdjacentElement(`beforeend`, div);
                    }else if (drop_container_uid === "right-sortable-box") {
                        module_containers[1].insertAdjacentElement(`beforeend`, div);
                    }else{
                        if (debug) {
                            console.log(`Hold on, it's coming soon...`);
                        }
                    }
                    setTimeout(function() {
                        let delete_box = document.querySelector(`[data-title="otc-${delete_uid}-title"]`);
                        if (delete_box !== null) {
                            delete_box.appendChild(sub_div);
                        }
                    }, 0);
                }else{
                    try {
                        swal({
                            title: "此模块已存在!",
                            text: `
                                此模块已存在, 不能再次拖放!\n
                                1 秒后自动关闭.
                            `,
                            icon: "warning",
                            className: "warning-alert-style",
                            timer: 2000,
                            // buttons: false,
                            button: {
                                text: "关闭",
                                value: true,
                                visible: true,
                                // className: "warning-alert-btn-style",
                                closeModal: true
                            }
                        });
                    } catch (error) {
                        console.log(`%c Sorry, some errors occurred!`, `color: #f0f`);
                    }
                    if (debug) {
                        try {
                            console.log(`module_exist_checker = `, module_exist_checker);
                        } catch (error) {
                            console.log(`%c Sorry, some errors occurred! \n`, `color: #f0f`, error);
                        }
                    }
                }
            },
            init: function() {
                for (let index = 0; index < module_datas.length; index++) {
                    module_datas[index].addEventListener(`dragstart`, OTC_TS_FV.Modules.modulesLoader.dragstart);
                }
                for (let i = 0; i < module_containers.length; i++) {
                    module_containers[i].addEventListener(`dragenter`, OTC_TS_FV.Modules.modulesLoader.dragenter);
                    module_containers[i].addEventListener(`dragover`, OTC_TS_FV.Modules.modulesLoader.dragover);
                    module_containers[i].addEventListener(`dragleave`, OTC_TS_FV.Modules.modulesLoader.dragleave);
                    // dragleave
                    module_containers[i].addEventListener(`drop`, OTC_TS_FV.Modules.modulesLoader.drop);
                }
            }
        };
    }
)();

// init
setTimeout(function() {
    OTC_TS_FV.Modules.modulesLoader.init();
}, 0);

