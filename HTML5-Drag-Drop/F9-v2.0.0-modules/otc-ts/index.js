// import {DOM_queryAll, DOM_query} from "./utils/DOM";

// namespaces & global variable
window.OTC_TS_FV = window.OTC_TS_FV || {};

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
        if (!debug) {
            console.log(`value =`, value);
        } else {

        }
        return value;
    }
});
// getParam(`gilcode`);
// "430003.OC"

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
window.OTC_IP = window.OTC_IP || ``;
window.OTC_PATH = window.OTC_PATH || ``;
window.OTC_GILCODE = window.OTC_GILCODE || ``;
window.OTC_SKIN = window.OTC_SKIN || ``;



// set params before DOM ready!
window.OTC_GILCODE = OTC_TS_FV.Utils.getParam(`gilcode`);
window.OTC_SKIN = OTC_TS_FV.Utils.getParam(`skin`) || `white`;
let UIP =  window.parent.location.origin,
    UHTTP = UIP.includes("http"),
    ULOCALHOST = window.parent.location.origin.includes("http://localhost");
window.OTC_IP = (UHTTP && !ULOCALHOST) ? UIP : `http://10.1.5.202`;
// IP only for prod & not for http://localhost:3000/
// window.OTC_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
window.OTC_PATH = `/webservice/fastview/otc`;



// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};

// sidebar
const initSidebar = () => {
    let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`);
    let divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);
    // let lis = OTC_TS_FV.Utils.DOM_queryAll(`[data-nav-li="nav-li"]`);
    // let divs = OTC_TS_FV.Utils.DOM_queryAll(`[data-nav-box="nav-box"]`);
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
    let btn = OTC_TS_FV.Utils.DOM_query(`[data-nav-btn="nav-btn"]`),
        small_btn = OTC_TS_FV.Utils.DOM_query(`[data-nav-small-btn="nav-small-btn"]`),
        container = OTC_TS_FV.Utils.DOM_query(`[data-nav-container="nav-container"]`),
        small_container = OTC_TS_FV.Utils.DOM_query(`[data-nav-small-container="nav-small-container"]`),
        body_container = OTC_TS_FV.Utils.DOM_query(`[data-body-container="data-body-container"]`);

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
    btn.onclick();
};
// tabs & load all default modules
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
        let left_uids = [
            "otcfast01",
            "otcfast02",
            "otcfast03",
            "otcfast13",
            // "otcfast031",
            // "otcfast032",
            "otcfastAdditional",
            "otcfastDividends",
            "otcfast10"
        ];
        let right_uids = [
            "otcfast08",
            "otcfast09",
            "otcfastTransaction",
            "news",
            "bulletin"
        ];
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
    // btn_module_setting.addEventListener(`click`, (e) => {
    //     // let debug = true;
    // });
    btn_universal.onclick();
};

// webpack ignore ??? bug


// change skin & dynamic insert css link ??? replace css link (blink bug?)
// css var ???
document.addEventListener(`DOMContentLoaded`, (e) => {
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
});

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
        case "otcfast01":
            delete_uid = `newly-added-listing`;
            loadModule(uid, `newly-added-listing`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-newly-added-listing-title">
                            新增挂牌
                            <span data-title-text="otc-newly-added-listing-title-text">
                                今日新增挂牌公司<span data-text="otc-newly-added-listing-text">xxx</span>家
                            </span>
                            <span data-link="otc-newly-added-listing-link">
                                <a href="#更多" data-uid="1106" data-turn-to-uid="node-uid-newly-added-listing">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-newly-added-listing-table">
                        <thead class="otc-newly-added-listing-table-thead">
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-title">新增挂牌</td>
                            </tr>
                        </thead>
                        <tbody class="otc-newly-added-listing-table-tbody">
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-key" data-alias="收盘价">收盘价</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-newly-added-listing-table-td-key" data-alias="总市值">总市值(万元)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-key" data-alias="涨跌幅">涨跌幅(%)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-newly-added-listing-table-td-key" data-alias="流通市值">流通市值(万元)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-key" data-alias="成交量">成交量(股)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-newly-added-listing-table-td-key" data-alias="市盈率(TTM)">市盈率(TTM)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-key" data-alias="换手率">换手率(%)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-newly-added-listing-table-td-key" data-alias="市盈率(LYR)">市盈率(LYR)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-key" data-alias="成交金额">成交额(万元)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                                <td class="otc-newly-added-listing-table-td-key" data-alias="市净率">市净率(LYR)</td>
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-newly-added-listing-table-tfoot">
                            <tr class="otc-newly-added-listing-table-tr">
                                <td class="otc-newly-added-listing-table-td-value" data-value="data-otc-LTD"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcfast02":
            delete_uid = `newly-added-protocol`;
            loadModule(uid, `newly-added-protocol`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-newly-added-protocol-title">
                            新增协议
                            <span data-title-text="otc-newly-added-protocol-title-text">
                                今日新增协议转做市公司<span data-text="otc-newly-added-protocol-text">xxx</span>家
                            </span>
                            <span data-link="otc-newly-added-protocol-link">
                                <a href="#更多" data-uid="1106" data-turn-to-uid="node-uid-newly-added-protocol">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-newly-added-protocol-table">
                        <thead class="otc-newly-added-protocol-table-thead">
                            <tr class="otc-newly-added-protocol-table-tr">
                                <td class="otc-newly-added-protocol-table-td-title">大事提醒</td>
                            </tr>
                        </thead>
                        <tbody class="otc-newly-added-protocol-table-tbody" data-tbody="otc-newly-added-protocol-table-tbody"></tbody>
                        <tfoot class="otc-newly-added-protocol-table-tfoot">
                            <tr class="otc-newly-added-protocol-table-tr">
                                <td class="otc-newly-added-protocol-table-td-value" data-value="data-otc-BER"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcfast03-old":
            delete_uid = `transactions-leaderboard-all`;
            loadModule(uid, `transactions-leaderboard-all`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-transactions-leaderboard-all-title">
                            交易排行榜
                            <span data-title-text="otc-transactions-leaderboard-all-title-text">
                                交易排行榜-(做市/协议) (<span data-text="otc-transactions-leaderboard-all-text">201x-xx-xx</span>)
                            </span>
                            <span data-link="otc-transactions-leaderboard-all-link">
                                <a href="#更多" data-uid="1106" data-turn-to-uid="node-uid-transactions-leaderboard-all">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-transactions-leaderboard-all-table">
                        transactions-leaderboard-all
                    </table>
                </section>
            `;
            break;
        case "otcfast03":
            delete_uid = `transactions-leaderboard-make-market`;
            loadModule(uid, `transactions-leaderboard-make-market`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-transactions-leaderboard-make-market-title">
                            交易排行榜
                            <span data-title-text="otc-transactions-leaderboard-make-market-title-text">
                                交易排行榜-做市 (<span data-text="otc-transactions-leaderboard-make-market-text">201x-xx-xx</span>)
                            </span>
                            <span data-link="otc-transactions-leaderboard-make-market-link">
                                <a href="#更多" data-uid="1106" data-turn-to-uid="node-uid-transactions-leaderboard-make-market">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-transactions-leaderboard-make-market-table">
                        transactions-leaderboard-make-market
                    </table>
                </section>
            `;
            break;
        case "otcfast13":
            delete_uid = `transactions-leaderboard-protocol`;
            loadModule(uid, `transactions-leaderboard-protocol`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-transactions-leaderboard-protocol-title">
                            交易排行榜
                            <span data-title-text="otc-transactions-leaderboard-protocol-title-text">
                                交易排行榜-协议 (<span data-text="otc-transactions-leaderboard-protocol-text">201x-xx-xx</span>)
                            </span>
                            <span data-link="otc-transactions-leaderboard-protocol-link">
                                <a href="#更多" data-uid="1106" data-turn-to-uid="node-uid-transactions-leaderboard-protocol">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-transactions-leaderboard-protocol-table">
                        transactions-leaderboard-protocol
                    </table>
                </section>
            `;
            break;
        case "otcfastAdditional":
            delete_uid = `additional-issues-all`;
            loadModule(uid, `additional-issues-all`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-additional-issues-all-title">
                            增发事项
                            <span data-link="otc-additional-issues-all-link">
                                <a href="#更多" data-uid="1115" data-turn-to-uid="node-uid-additional-issues-all">更多</a>
                            </span>
                        </p>
                    </div>
                    <section data-tabs="tabs-box">
                        <div data-tab="tab-title-box">
                            <ul data-tab="tab-title-ul">
                                <li data-tab="tab-title">
                                    <a href="#1" data-tab-uid="0" data-tab="tab-link" class="hover-link-color">预案</a>
                                </li>
                                <li data-tab="tab-title">
                                    <a href="#2" data-tab-uid="1" data-tab="tab-link" class="default-link-color">实施</a>
                                </li>
                            </ul>
                        </div>
                        <div data-tab="tab-container-box">
                            <div data-tab="tab-container" class="active-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-additional-issues-preplan-container">
                                        <!-- 分红事项-预案 -->
                                        <div data-hs-title="data-additional-issues-preplan-title-uid"></div>
                                        <div id="additional_issues_preplan_hs_container" data-hs-container="data-additional-issues-preplan-container-uid" class="otc-additional-issues-preplan-hs otc-additional-issues-preplan-hs-container"></div>
                                    </div>
                                </section>
                            </div>
                            <div data-tab="tab-container" class="default-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-additional-issues-implementation-container">
                                        <!-- 分红事项-实施 -->
                                        <div data-hs-title="data-additional-issues-implementation-title-uid"></div>
                                        <div id="additional_issues_implementation_hs_container" data-hs-container="data-additional-issues-implementation-container-uid" class="otc-additional-issues-implementation-hs otc-additional-issues-implementation-hs-container"></div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </section>
                <section data-scripts="all-scripts" class="otc-additional-issues-all-container"></section>
            `;
            break;
        case "otcfastDividends":
            delete_uid = `dividend-matters-all`;
            loadModule(uid, `dividend-matters-all`);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-dividend-matters-all-title">
                            分红事项
                            <span data-link="otc-dividend-matters-all-link">
                                <a href="#更多" data-uid="1094" data-turn-to-uid="node-uid-dividend-matters-all">更多</a>
                            </span>
                        </p>
                    </div>
                    <section data-tabs="tabs-box">
                        <div data-tab="tab-title-box">
                            <ul data-tab="tab-title-ul">
                                <li data-tab="tab-title">
                                    <a href="#1" data-tab-uid="0" data-tab="tab-link" class="hover-link-color">预案</a>
                                </li>
                                <li data-tab="tab-title">
                                    <a href="#2" data-tab-uid="1" data-tab="tab-link" class="default-link-color">实施</a>
                                </li>
                            </ul>
                        </div>
                        <div data-tab="tab-container-box">
                            <div data-tab="tab-container" class="active-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-dividend-matters-preplan-container">
                                        <!-- 分红事项-预案 -->
                                        <div data-hs-title="data-dividend-matters-preplan-title-uid"></div>
                                        <div id="dividend_matters_preplan_hs_container" data-hs-container="data-dividend-matters-preplan-container-uid" class="otc-dividend-matters-preplan-hs otc-dividend-matters-preplan-hs-container"></div>
                                    </div>
                                </section>
                            </div>
                            <div data-tab="tab-container" class="default-display-block">
                                <section class="otc-module-box-5">
                                    <div class="otc-dividend-matters-implementation-container">
                                        <!-- 分红事项-实施 -->
                                        <div data-hs-title="data-dividend-matters-implementation-title-uid"></div>
                                        <div id="dividend_matters_implementation_hs_container" data-hs-container="data-dividend-matters-implementation-container-uid" class="otc-dividend-matters-implementation-hs otc-dividend-matters-implementation-hs-container"></div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>
                </section>
                <section data-scripts="all-scripts" class="otc-dividend-matters-all-container"></section>
            `;
            break;
        case "otcfast08":
            delete_uid = `listing-situation`;
            loadModule(uid, `listing-situation`);// false
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-listing-situation-title">
                            挂牌情况
                            <span data-time="otc-listing-situation-time"></span>
                            <span data-link="otc-listing-situation-link">
                                <a href="#更多" data-uid="85648" data-turn-to-uid="node-uid-listing-situation">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-listing-situation-table">
                        <thead class="otc-listing-situation-table-thead">
                            <tr class="otc-listing-situation-table-tr">
                                <td class="otc-listing-situation-table-td-title">产品及服务</td>
                                <td class="otc-listing-situation-table-td-title">营业收入(万元)</td>
                                <td class="otc-listing-situation-table-td-title">营业成本(万元)</td>
                                <td class="otc-listing-situation-table-td-title">营业收入占比(%)</td>
                            </tr>
                        </thead>
                        <tbody class="otc-listing-situation-table-tbody" data-tbody="otc-listing-situation-table-tbody"></tbody>
                        <tfoot class="otc-listing-situation-table-tfoot">
                            <tr class="otc-listing-situation-table-tr">
                                <td class="otc-listing-situation-table-td-value" data-value="data-otc-MMB"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "otcfast09":
            delete_uid = `transaction-overview`;
            loadModule(uid, `transaction-overview`);// false
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-transaction-overview-title">
                            成交概况
                            <span data-title-text="otc-transaction-overview-title-text">
                                (<span data-text="otc-transactions-leaderboard-all-text">201x-xx-xx</span>)
                            </span>
                            <span data-link="otc-transaction-overview-link">
                                <a href="#更多" data-uid="85648" data-turn-to-uid="node-uid-transaction-overview">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-transaction-overview-table">
                        transaction-overview
                    </table>
                </section>
            `;
            break;
        case "otcfastTransaction":
            delete_uid = `turnover-trend-diagram-all`;
            loadModule(uid, `turnover-trend-diagram-all`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-turnover-trend-diagram-all-title">
                            成交走势
                            <span data-link="otc-turnover-trend-diagram-all-link">
                                <a href="#更多" data-uid="1070" data-turn-to-uid="node-uid-turnover-trend-diagram-all">更多</a>
                            </span>
                        </p>
                    </div>
                    <div class="otc-turnover-trend-make-market-diagram-container">
                        <!-- 成交走势-做市图 turnover-trend-make-market-diagram -->
                        <div id="turnover_trend_make_market_diagram_hs_container" data-hs-container="data-turnover-trend-make-market-diagram-uid" class="otc-turnover-trend-make-market-diagram-hs otc-turnover-trend-make-market-diagram-hs-container"></div>
                    </div>
                    <div class="otc-turnover-trend-protocol-diagram-container">
                        <!-- 成交走势-协议图 turnover-trend-protocol-diagram -->
                        <div id="turnover_trend_protocol_diagram_hs_container2" data-hs-container="data-turnover-trend-protocol-diagram-container-uid" class="otc-turnover-trend-protocol-diagram-hs otc-turnover-trend-protocol-diagram-hs-container"></div>
                    </div>
                </section>
                <section data-scripts="all-scripts" class="otc-dividend-matters-all-container"></section>
            `;
            break;
        case "news":
            delete_uid = `thematic-statistics-news`;
            loadModule(uid, `thematic-statistics-news`, true);// data-link="otc-thematic-statistics-news-link"
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-thematic-statistics-news-title">
                            三板新闻
                            <span data-link="otc-thematic-statistics-news-link">
                                <a href="#更多" data-uid="82540" data-turn-to-uid="node-uid-thematic-statistics-news">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-thematic-statistics-news-table">
                        <thead class="otc-thematic-statistics-news-table-thead">
                            <tr class="otc-thematic-statistics-news-table-tr">
                                <td class="otc-thematic-statistics-news-table-td-title">新闻标题</td>
                                <td class="otc-thematic-statistics-news-table-td-title">新闻日期</td>
                            </tr>
                        </thead>
                        <tbody class="otc-thematic-statistics-news-table-tbody" data-tbody="otc-thematic-statistics-news-table-tbody"></tbody>
                        <tfoot class="otc-thematic-statistics-news-table-tfoot">
                            <tr class="otc-thematic-statistics-news-table-tr">
                                <td class="otc-thematic-statistics-news-table-td-value" data-value="data-otc-TSN"></td>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            `;
            break;
        case "bulletin":
            delete_uid = `thematic-statistics-bulletin`;
            loadModule(uid, `thematic-statistics-bulletin`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-thematic-statistics-bulletin-title">
                            三板公告
                            <span data-link="otc-thematic-statistics-bulletin-link">
                                <a href="#更多" data-uid="82542" data-turn-to-uid="node-uid-thematic-statistics-bulletin-data">更多</a>
                            </span>
                        </p>
                    </div>
                    <table class="otc-thematic-statistics-bulletin-table">
                        <thead class="otc-thematic-statistics-bulletin-table-thead">
                            <tr class="otc-thematic-statistics-bulletin-table-tr">
                                <td class="otc-thematic-statistics-bulletin-table-td-title">公告标题</td>
                                <td class="otc-thematic-statistics-bulletin-table-td-title">公告日期</td>
                            </tr>
                        </thead>
                        <tbody class="otc-thematic-statistics-bulletin-table-tbody" data-tbody="otc-thematic-statistics-bulletin-table-tbody"></tbody>
                        <tfoot class="otc-thematic-statistics-bulletin-table-tfoot">
                            <tr class="otc-thematic-statistics-bulletin-table-tr">
                                <td class="otc-thematic-statistics-bulletin-table-td-value" data-value="data-otc-TSB"></td>
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
    // let uids = ["otcfast01", "otcfast02", "otcfast03", "otcfastAdditional", "otcfastDividends", "otcfast08", "otcfast09", "otcfastTransaction", "news", "bulletin"];
    switch (uid) {
        case "otcfast01":
        case "otcfast02":
        case "otcfast03":
        case "otcfast031":
        case "otcfast032":
        case "otcfastAdditional":
        case "otcfastDividends":
        case "otcfast08":
        case "otcfast09":
        case "otcfastTransaction":
        case "news":
        case "bulletin":
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
                        OTC_TS_FV.Modules.modulesLoader.deleteModule(uid);
                        // call delete
                    });
                    div.dataset.divModuleUid = `div-module-${uid}`;
                    div.dataset.droppedUid=`module-data-${uid}`;
                    layoutCSS(uid, div);
                    // "otcfast-all" ???
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
                    OTC_TS_FV.Modules.modulesLoader.deleteModule(uid);
                });
                // icons
                div.dataset.divModuleUid = `div-module-${uid}`;
                div.dataset.droppedUid=`module-data-${uid}`;
                layoutCSS(uid, div);
                let module_exist_checker = ``;
                if (typeof(uid) === "string" && uid.length < 13) {
                    // "otcfast13".length; // 12 => 13
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
setTimeout(() => {
    OTC_TS_FV.Modules.modulesLoader.init();
}, 0);


