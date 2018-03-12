// import {DOM_queryAll, DOM_query} from "./utils/DOM";

// import "babel-polyfill";

// import "whatwg-fetch";

// const xyz_debug = window.xyz_debug ? window.xyz_debug : false;
// var debug = false;

// namespaces
var OTC_F9_FV = OTC_F9_FV || {};
// sub namespaces
OTC_F9_FV.Utils = OTC_F9_FV.Utils || {};

OTC_F9_FV.Utils.getParam = OTC_F9_FV.Utils.getParam || ((key, debug = false) => {
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
        if (!debug) {
            console.log(`value =`, value);
        } else {
            //
        }
        return value;
    }
});
// getParam(`gilcode`);
// "430003.OC"

OTC_F9_FV.Utils.DOM_queryAll = OTC_F9_FV.Utils.DOM_queryAll || ((str = `[data-sortable-box*="sortable-box"]`, debug = false) => {
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

OTC_F9_FV.Utils.DOM_query = OTC_F9_FV.Utils.DOM_query || ((str = `[data-sortable-box*="sortable-box"]`, debug = false) => {
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
/*
// global variable
window.OTC_IP = window.OTC_IP || ``;
window.OTC_PATH = window.OTC_PATH || ``;
window.OTC_GILCODE = window.OTC_GILCODE || ``;
window.OTC_SKIN = window.OTC_SKIN || ``;



// set params before DOM ready!
window.OTC_GILCODE = OTC_F9_FV.Utils.getParam(`gilcode`);
window.OTC_SKIN = OTC_F9_FV.Utils.getParam(`skin`) || `white`;
window.OTC_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
window.OTC_PATH = `/webservice/fastview/otcper`;

 */

// sub namespaces
OTC_F9_FV.Modules = OTC_F9_FV.Modules || {};

// sidebar
const initSidebar = () => {
    let lis = OTC_F9_FV.Utils.DOM_queryAll(`[data-nav-li="nav-li"]`);
    let divs = OTC_F9_FV.Utils.DOM_queryAll(`[data-nav-box="nav-box"]`);
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener(`click`, (e) => {
            if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
            }else{
                lis[i].classList.add("h5-dnd-nav-li-active");
                lis[i].classList.remove("h5-dnd-nav-li-hidden");
                lis[i].classList.remove("add-bottom-margin");
                lis[i].classList.add("no-bottom-margin");
                let arr = [0,1,2];
                arr.map(
                    (item, index) =>{
                        if(item !== i){
                            if (lis[item].classList.contains(`h5-dnd-nav-li-active`)) {
                                lis[item].classList.remove("no-bottom-margin");
                                lis[item].classList.add("add-bottom-margin");
                                lis[item].classList.remove("h5-dnd-nav-li-active");
                                lis[item].classList.add("h5-dnd-nav-li-hidden");
                            }
                        }
                    }
                );
            };
            if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
            }else{
                divs[i].classList.add("h5-dnd-nav-box-active");
                divs[i].classList.remove("h5-dnd-nav-box-hidden");
                let arr = [0,1,2];
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
    // btns
    let btn = OTC_F9_FV.Utils.DOM_query(`[data-nav-btn="nav-btn"]`),
        small_btn = OTC_F9_FV.Utils.DOM_query(`[data-nav-small-btn="nav-small-btn"]`),
        // ???
        container = OTC_F9_FV.Utils.DOM_query(`[data-nav-container="nav-container"]`),
        small_container = OTC_F9_FV.Utils.DOM_query(`[data-nav-small-container="nav-small-container"]`),
        body_container = OTC_F9_FV.Utils.DOM_query(`[data-body-container="data-body-container"]`);

    btn.onclick = () => {
        if (container.classList.contains("h5-dnd-nav-container-normal")) {
            container.classList.add("h5-dnd-nav-container-small");
            container.classList.remove("h5-dnd-nav-container-normal");
        }else{
            container.classList.remove("h5-dnd-nav-container-small");
            container.classList.add("h5-dnd-nav-container-normal");
        }
        if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
            small_container.classList.add("h5-dnd-nav-small-btn-show");
            small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
        }else{
            small_container.classList.add("h5-dnd-nav-small-btn-hidden");
            small_container.classList.remove("h5-dnd-nav-small-btn-show");
        }
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
    // init
    // btn.onclick();
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
        // init modules
        let left_uids = ["otcperfast01", "otcperfast02", "news", "bulletin", "research", "company-all", "otcperfast10"];
        let right_uids = ["otcperfast03", "otcperfast04", "otcperfast09", "otcperfast11"];
        // let left_uids = ["otcperfast01", "otcperfast02", "news", "research", "company-all", "otcperfast09", "otcperfast11"];
        // let right_uids = ["otcperfast03", "bulletin", "otcperfast04", "otcperfast10"];
        OTC_F9_FV.Modules.loadAllModules.init(sortable_module_containers[0], left_uids);
        OTC_F9_FV.Modules.loadAllModules.init(sortable_module_containers[1], right_uids);
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
    // btn_module_setting.addEventListener(`click`, (e) => {
    //     // let debug = true;
    // });
    btn_universal.onclick();
};

// webpack ignore ??? bug


// change skin & dynamic insert css link ??? replace css link (blink bug?)
// css var ???
/* document.addEventListener(`DOMContentLoaded`, (e) => {
    // console.log("2, (DOMContentLoaded)DOM fully loaded and parsed");
    // load css
    const css_arr = ["index.css", "tabs.css", "common/module.css", "common/modal.css", "common/no-data.css"];
    const css_skins = ["black-skin", "white-skin"];
    const css_links = document.querySelectorAll(`[data-css="data-css-uid"]`);
    let css_dom = document.querySelector(`head`);
    if (window.OTC_SKIN === "black") {
        // console.log(`window.OTC_SKIN = `, window.OTC_SKIN, typeof(window.OTC_SKIN));
        //white-skin => black-skin
        if (css_links[0].href.includes(`white-skin`)) {
            for (let i = 0; i < css_links.length; i++) {
                let href= `./css/${css_skins[0]}/${css_arr[i]}`;
                css_links[i].setAttribute(`href`, href);
            }
        }else{
            // use default
        }
    }else{
        // black-skin => white-skin
        if (window.OTC_SKIN === "white" && css_links[0].href.includes(`black-skin`)){
            for (let i = 0; i < css_links.length; i++) {
                let href= `./css/${css_skins[1]}/${css_arr[i]}`;
                css_links[i].setAttribute(`href`, href);
            }
        }else{
            // use default
        }
    }
}); */

window.onload = () => {
    // console.log("3, window has been loaded!");
    // console.log(`OTC_GILCODE `, OTC_GILCODE);
    // console.log("OTC_SKIN = ", window.OTC_SKIN);
    initTabs();
    initSidebar();
    // init
    // btn.onclick();
    // btn_universal.onclick();
    // let print_btn = document.querySelector(`[data-print="print-title"`);
    // print_btn.addEventListener(`click`, () => {
    //     btn.onclick();
    //     // not show sidebar
    //     window.print();
    //     setTimeout(() => {
    //         // show sidebar
    //         small_btn.onclick();
    //     }, 0);
    // });
};


/**
 * @author xgqfrms
 * @description load Module (2017.11.01)
 * @param {* String} module_uid_name
 * @param {* Boolean} isTable
 */

const loadModule = (uid =``, module_uid_name=``, isTable=`false`, debug = false) => {
    // console.log(`loadModule & uid = `, uid);
    // setTimeout & IIFE & Closure
    setTimeout(() => {
        ((module_uid_name, isTable) => {
            let box = (isTable === true)
                ? document.querySelector(`.otc-${module_uid_name}-table`)
                : document.querySelector(`.otc-${module_uid_name}-container`),
                link_css = document.createElement(`link`),
                script_dom = document.createElement(`script`);
            // console.log(`box = `, box);
            // box =  null
            link_css.setAttribute(`rel`, `stylesheet`);
            // link_css.setAttribute(`href`, `./build/css/${module_uid_name}.min.css`);
            let css_module_skin = `white-skin`;
            if (window.OTC_SKIN === "black") {
                css_module_skin = "black-skin";
            }else{
                // do nothing
            }
            link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
            link_css.setAttribute(`href`, `./css/${css_module_skin}/modules/${module_uid_name}.css`);
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
                                    (日期: <span data-text="otc-latest-transaction-data-text"></span>)
                            </span>
                            <span data-link="otc-latest-transaction-data-link">
                                <a href="#每日交易数据" data-uid="1106" data-turn-to-uid="node-uid-latest-transaction-data">每日交易数据</a>
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
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="总市值">总市值(万元)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-latest-transaction-data-table-tr">
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="涨跌幅">涨跌幅(%)</td>
                                <td class="otc-latest-transaction-data-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="流通市值">流通市值(万元)</td>
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
                                <td class="otc-latest-transaction-data-table-td-key" data-alias="成交金额">成交额(万元)</td>
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
                                <a href="#分红数据" data-uid="1085" data-turn-to-uid="node-uid-big-event-reminder-data">分红数据</a>
                                <a href="#增发数据" data-uid="1112" data-turn-to-uid="node-uid-big-event-reminder-data">增发数据</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-big-event-reminder-table">
                        <thead class="otc-big-event-reminder-table-thead">
                            <tr class="otc-big-event-reminder-table-tr">
                                <td class="otc-big-event-reminder-table-td-title">大事提醒</td>
                            </tr>
                        </thead>
                        <tbody class="otc-big-event-reminder-table-tbody" data-tbody="otc-big-event-reminder-table-tbody"></tbody>
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
            loadModule(uid, `company-brief-introduction`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-company-brief-introduction-title">
                            公司简介
                        </p>
                    </div>
                    <table class="otc-company-brief-introduction-table" data-float="float-table">
                        <thead class="otc-company-brief-introduction-table-thead">
                            <tr class="otc-company-brief-introduction-table-tr">
                                <td class="otc-company-brief-introduction-table-td-title">公司简介</td>
                            </tr>
                        </thead>
                        <tbody class="otc-company-brief-introduction-table-tbody">
                            <!-- no data -->
                        </tbody>
                        <tfoot class="otc-company-brief-introduction-table-tfoot">
                            <tr class="otc-company-brief-introduction-table-tr">
                                <td class="otc-company-brief-introduction-table-td-value" data-value="data-otc-CBI">
                                    <!-- bug -->
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <section data-float="float-section">
                        <div data-float="float-title">公司介绍:</div>
                        <div data-float="float-div" data-titles="data-otc-CBI-title">
                            <!-- no data -->
                        </div>
                    </section>
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
                                <a href="#更多财务数据" data-uid="1115" data-turn-to-uid="node-uid-latest-financial-data">更多财务数据</a>
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
                                <div data-titles="data-otc-LFD-title"></div>
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
                                <td class="otc-latest-financial-data-table-td-key" data-alias="每股经营活动产生的现金流量净额(元)">每股经营活动产生的现金流量净额(元)</td>
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
        case "company-all":
            delete_uid = `company-performance-all`;
            loadModule(uid, `company-performance-all`);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-company-performance-all-title">
                            公司表现 (所属三板管理型行业二级)
                            <span data-link="otc-company-performance-all-link">
                                <a href="#同业数据" data-uid="1094" data-turn-to-uid="node-uid-company-performance-all-data">同业数据</a>
                            </span>
                        </p>
                    </div>
                    <section data-tabs="tabs-box">
                        <div data-tab="tab-title-box">
                            <ul data-tab="tab-title-ul">
                                <li data-tab="tab-title">
                                    <a href="#1" data-tab-uid="0" data-tab="tab-link" class="hover-link-color">市场表现</a>
                                </li>
                                <li data-tab="tab-title">
                                    <a href="#2" data-tab-uid="1" data-tab="tab-link" class="default-link-color">公司规模</a>
                                </li>
                                <li data-tab="tab-title">
                                    <a href="#3" data-tab-uid="2" data-tab="tab-link" class="default-link-color">公司业绩</a>
                                </li>
                                <li data-tab="tab-title">
                                    <a href="#4" data-tab-uid="3" data-tab="tab-link" class="default-link-color">公司估值</a>
                                </li>
                            </ul>
                        </div>
                        <div data-tab="tab-container-box">
                            <div data-tab="tab-container" class="active-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-company-performance-market-container">
                                        <!-- 公司表现 -->
                                        <div data-hs-title="data-company-performance-market-title-uid"></div>
                                        <div id="company_performance_market_hs_container" data-hs-container="data-company-performance-market-container-uid" class="otc-company-performance-market-hs otc-company-performance-market-hs-container"></div>
                                        <div data-hs-title="data-company-performance-market-title-uid"></div>
                                        <div>
                                            <div id="company_performance_market_hs_container2" data-hs-container="data-company-performance-market-container-uid" class="otc-company-performance-market-hs otc-company-performance-market-hs-container"></div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div data-tab="tab-container" class="default-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-company-performance-scale-container">
                                        <!-- 公司规模 -->
                                        <div data-hs-title="data-company-performance-scale-title-uid"></div>
                                        <div id="company_performance_scale_hs_container" data-hs-container="data-company-performance-scale-container-uid" class="otc-company-performance-scale-hs otc-company-performance-scale-hs-container"></div>
                                    </div>
                                </section>
                            </div>
                            <div data-tab="tab-container" class="default-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-company-performance-achievement-container">
                                        <!-- 公司业绩 placeholder -->
                                        <div data-hs-title="data-company-performance-achievement-title-uid"></div>
                                        <div id="company_performance_achievement_hs_container" data-hs-container="data-company-performance-achievement-container-uid" class="otc-company-performance-achievement-hs otc-company-performance-achievement-hs-container"></div>
                                        <div>
                                            <div id="company_performance_achievement_hs_container2" data-hs-container="data-company-performance-achievement-container-uid" class="otc-company-performance-achievement-hs otc-company-performance-achievement-hs-container"></div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div data-tab="tab-container" class="default-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-company-performance-valuation-container">
                                        <!-- 公司估值 -->
                                        <div data-hs-title="data-company-performance-valuation-title-uid"></div>
                                        <div id="company_performance_valuation_hs_container" data-hs-container="data-company-performance-valuation-container-uid" class="otc-company-performance-valuation-hs otc-company-performance-valuation-hs-container"></div>
                                        <div>
                                            <div id="company_performance_valuation_hs_container2" data-hs-container="data-company-performance-valuation-container-uid" class="otc-company-performance-valuation-hs otc-company-performance-valuation-hs-container"></div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </section>
                <section data-scripts="all-scripts" class="otc-company-performance-all-container"></section>
            `;
            break;
        case "otcperfast09":
            delete_uid = `main-management-business`;
            loadModule(uid, `main-management-business`);// false
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-main-management-business-title">
                            主营业务
                            <span data-time="otc-main-management-business-time"></span>
                            <span data-more="otc-main-management-business-link">
                                <a href="#更多主营业务数据" data-more="otc-main-management-business-link-more" data-uid="85648" data-turn-to-uid="node-uid-main-management-business-data">更多主营业务数据</a>
                            </span>
                        </p>
                    </div>
                    <div data-div="tbody-div" data-titles="data-otc-MMB-title">
                        <!-- no data -->
                    </div>
                    <div class="otc-main-management-business-container">
                        <div id="main_managemen_business_hs_container" data-hs-container="data-main-management-business-container-uid" class="otc-main-management-business-hs otc-main-management-business-hs-container"></div>
                    </div>
                    <div class="otc-main-management-business-container">
                        <div id="main_managemen_business_hs_container2" data-hs-container="data-main-management-business-container-uid" class="otc-main-management-business-hs otc-main-management-business-hs-container"></div>
                    </div>
                    <table class="otc-main-management-business-table">
                        <thead class="otc-main-management-business-table-thead">
                            <tr class="otc-main-management-business-table-tr">
                                <td class="otc-main-management-business-table-td-title">产品及服务</td>
                                <td class="otc-main-management-business-table-td-title">营业收入(万元)</td>
                                <td class="otc-main-management-business-table-td-title">营业成本(万元)</td>
                                <td class="otc-main-management-business-table-td-title">营业收入占比(%)</td>
                            </tr>
                        </thead>
                        <tbody class="otc-main-management-business-table-tbody" data-tbody="otc-main-management-business-table-tbody"></tbody>
                        <tfoot class="otc-main-management-business-table-tfoot">
                            <tr class="otc-main-management-business-table-tr">
                                <td class="otc-main-management-business-table-td-value" data-value="data-otc-MMB"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast10":
            delete_uid = `equity-shareholder`;
            loadModule(uid, `equity-shareholder`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-equity-shareholder-title">
                            股本股东
                            <span data-more="otc-equity-shareholder-link">
                                <a href="#股东户数" data-uid="1079" data-more="otc-equity-shareholder-link-more" data-turn-to-uid="node-uid-equity-shareholder-data">股东户数</a>
                            </span>
                            <span data-more="otc-equity-shareholder-link">
                                <a href="#股东数据" data-uid="1076" data-more="otc-equity-shareholder-link-more" data-turn-to-uid="node-uid-equity-shareholder-data">股东数据</a>
                            </span>
                            <span data-more="otc-equity-shareholder-link">
                                <a href="#股本数据" data-uid="1058" data-more="otc-equity-shareholder-link-more" data-turn-to-uid="node-uid-equity-shareholder-data">股本数据</a>
                            </span>
                        </p>
                    </div>
                    <section data-group="mix-hc-table">
                        <div class="otc-equity-shareholder-container">
                            <div id="equity_shareholder_hs_container" data-hs-container="data-equity-shareholder-container-uid" class="otc-equity-shareholder-hs otc-equity-shareholder-hs-container"></div>
                        </div>
                        <table class="otc-equity-shareholder-table" data-tables="otc-equity-shareholder-table1">
                            <thead class="otc-equity-shareholder-table-thead"></thead>
                            <tbody class="otc-equity-shareholder-table-tbody" data-tbody="otc-equity-shareholder-table-tbody"></tbody>
                            <tfoot class="otc-equity-shareholder-table-tfoot">
                                <tr class="otc-equity-shareholder-table-tr">
                                    <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </section>
                    <div data-div="tbody-div" data-titles="data-otc-ES-title"></div>
                    <table class="otc-equity-shareholder-table" data-tables="otc-equity-shareholder-table2">
                        <thead class="otc-equity-shareholder-table-thead">
                            <tr class="otc-equity-shareholder-table-tr">
                                <td class="otc-equity-shareholder-table-td-title">股东名称</td>
                                <td class="otc-equity-shareholder-table-td-title">持股数(万股)</td>
                                <td class="otc-equity-shareholder-table-td-title">占比(%)</td>
                                <td class="otc-equity-shareholder-table-td-title">增减变动(万股)</td>
                                <td class="otc-equity-shareholder-table-td-title">机构类型</td>
                            </tr>
                            <!-- colspan & rowspan -->
                        </thead>
                        <tbody class="otc-equity-shareholder-table-tbody" data-tbody="otc-equity-shareholder-table-tbody"> </tbody>
                        <tfoot class="otc-equity-shareholder-table-tfoot">
                            <tr class="otc-equity-shareholder-table-tr">
                                <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div data-div="tbody-div" data-titles="data-otc-ES-title"></div>
                    <table class="otc-equity-shareholder-table" data-tables="otc-equity-shareholder-table3">
                        <thead class="otc-equity-shareholder-table-thead"></thead>
                        <tbody class="otc-equity-shareholder-table-tbody" data-tbody="otc-equity-shareholder-table-tbody"></tbody>
                        <tfoot class="otc-equity-shareholder-table-tfoot">
                            <tr class="otc-equity-shareholder-table-tr">
                                <td class="otc-equity-shareholder-table-td-value" data-value="data-otc-ES"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcperfast11":
            delete_uid = `management-layer-profiles`;
            loadModule(uid, `management-layer-profiles`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-management-layer-profiles-title">
                            管理层概况与持股
                            <span data-more="otc-management-layer-profiles-link">
                                <a href="#管理层数据" data-more="otc-management-layer-profiles-link-more" data-uid="1070" data-turn-to-uid="node-uid-management-layer-profiles-data">管理层数据</a>
                            </span>
                        </p>
                    </div>
                    <div data-div="tbody-div" data-titles="data-otc-MLP-title"></div>
                    <div data-table="otc-management-layer-profiles-table-box">
                        <table class="otc-management-layer-profiles-table" data-css3-table-bug="otc-management-layer-profiles-table1">
                            <thead class="otc-management-layer-profiles-table-thead">
                                <tr class="otc-management-layer-profiles-table-tr">
                                    <td class="otc-management-layer-profiles-table-td-title">姓名</td>
                                    <td class="otc-management-layer-profiles-table-td-title">性别</td>
                                    <td class="otc-management-layer-profiles-table-td-title">年龄</td>
                                    <td class="otc-management-layer-profiles-table-td-title">学历</td>
                                    <td class="otc-management-layer-profiles-table-td-title">职务</td>
                                    <td class="otc-management-layer-profiles-table-td-title">持股数量 (万股)</td>
                                    <td class="otc-management-layer-profiles-table-td-title">占比 (%)</td>
                                    <td class="otc-management-layer-profiles-table-td-title">增减变动 (万股)</td>
                                </tr>
                            </thead>
                            <tbody class="otc-management-layer-profiles-table-tbody" data-tbody="otc-management-layer-profiles-table-tbody"></tbody>
                            <tfoot class="otc-management-layer-profiles-table-tfoot">
                                <tr class="otc-management-layer-profiles-table-tr">
                                    <td class="otc-management-layer-profiles-table-td-value" data-value="data-otc-MLP"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </section>
            `;
            break;
        case "news":
            delete_uid = `company-news`;
            loadModule(uid, `company-news`, true);// data-link="otc-company-news-link"
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-company-news-title">
                            公司新闻
                            <span data-more="otc-company-news-link">
                                <a href="#更多新闻" data-more="otc-company-news-link-more" data-uid="82540" data-turn-to-uid="node-uid-company-news-data">更多新闻</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-company-news-table">
                        <thead class="otc-company-news-table-thead">
                            <tr class="otc-company-news-table-tr">
                                <td class="otc-company-news-table-td-title">新闻标题</td>
                                <td class="otc-company-news-table-td-title">新闻日期</td>
                            </tr>
                        </thead>
                        <tbody class="otc-company-news-table-tbody" data-tbody="otc-company-news-table-tbody"></tbody>
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
                                <a href="#更多公告" data-more="otc-company-bulletin-link-more" data-uid="82542" data-turn-to-uid="node-uid-company-bulletin-data">更多公告</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-company-bulletin-table">
                        <thead class="otc-company-bulletin-table-thead">
                            <tr class="otc-company-bulletin-table-tr">
                                <td class="otc-company-bulletin-table-td-title">公告标题</td>
                                <td class="otc-company-bulletin-table-td-title">公告日期</td>
                            </tr>
                        </thead>
                        <tbody class="otc-company-bulletin-table-tbody" data-tbody="otc-company-bulletin-table-tbody"></tbody>
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
                                <a href="#更多研报" data-more="otc-research-report-link-more" data-uid="82546" data-turn-to-uid="node-uid-research-report-data">更多研报</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-research-report-table">
                        <thead class="otc-research-report-table-thead">
                            <tr class="otc-research-report-table-tr">
                                <td class="otc-research-report-table-td-title">研报标题</td>
                                <td class="otc-research-report-table-td-title">披露日期</td>
                                <td class="otc-research-report-table-td-title">发布机构</td>
                            </tr>
                        </thead>
                        <tbody class="otc-research-report-table-tbody" data-tbody="otc-research-report-table-tbody"></tbody>
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
        case "company-all":
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

OTC_F9_FV.Modules.loadAllModules = OTC_F9_FV.Modules.loadAllModules || (
    (sortable_container = `sortable_container`,debug = false) => {
        /**
         *
         * @param {* DOM} container
         * @param {* Array} uids
         */
        const dropAll = (container, uids) => {
            // module_container
            // console.log(`uids =\n`, uids);
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
                        OTC_F9_FV.Modules.modulesLoader.deleteModule(uid);
                        // call delete
                    });
                    div.dataset.divModuleUid = `div-module-${uid}`;
                    div.dataset.droppedUid=`module-data-${uid}`;
                    layoutCSS(uid, div);
                    // "otcperfast-all" ???
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
// IIFE



/**
 * CutomizeModulesLoader
 * @description load each module once & check is exist before drop it
 * @author xgqfrms
 * @argument module_uid's
 *
 */


// IIFE === Closure!
OTC_F9_FV.Modules.modulesLoader = OTC_F9_FV.Modules.modulesLoader ||(
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
                        ok: {
                            text: "确定",
                            value: "ok",
                            // value: true,
                            visible: true,
                            className: "",
                            closeModal: true
                        },
                        cancel: {
                            text: "取消",
                            value: "cancel",
                            // value: false,
                            visible: true,
                            className: "",
                            // closeModal: true
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
                // console.log(`iconUid = `, uid);
                // console.log(`droppedUid = `, uid);
                // console.log(`uid = `, uid);
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
                    OTC_F9_FV.Modules.modulesLoader.deleteModule(uid);
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
                    module_datas[index].addEventListener(`dragstart`, OTC_F9_FV.Modules.modulesLoader.dragstart);
                }
                for (let i = 0; i < module_containers.length; i++) {
                    module_containers[i].addEventListener(`dragenter`, OTC_F9_FV.Modules.modulesLoader.dragenter);
                    module_containers[i].addEventListener(`dragover`, OTC_F9_FV.Modules.modulesLoader.dragover);
                    module_containers[i].addEventListener(`dragleave`, OTC_F9_FV.Modules.modulesLoader.dragleave);
                    // dragleave
                    module_containers[i].addEventListener(`drop`, OTC_F9_FV.Modules.modulesLoader.drop);
                }
            }
        };
    }
)();

// init
setTimeout(() => {
    OTC_F9_FV.Modules.modulesLoader.init();
}, 0);

