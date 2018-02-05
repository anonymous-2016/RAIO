// import {DOM_queryAll, DOM_query} from "./utils/DOM";

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

// global variable
window.OTC_IP = window.OTC_IP || ``;
window.OTC_PATH = window.OTC_PATH || ``;
window.OTC_GILCODE = window.OTC_GILCODE || ``;
window.OTC_SKIN = window.OTC_SKIN || ``;



// set params before DOM ready!
window.OTC_GILCODE = OTC_F9_FV.Utils.getParam(`gilcode`);
window.OTC_SKIN = OTC_F9_FV.Utils.getParam(`skin`) || `white`;
window.OTC_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
window.OTC_PATH = `/webservice/fastview/bond/rate`;
// http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast07","Compare":"","CompareDate":""}



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
    btn.onclick();
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
        let left_uids = ["bondratefast01", "bondratefast03", "bondratefast04", "bondratefast05", "bondratefast06", "bondratefast07", "bondratefast08", "bondratefast09", "bondratefast10"];
        let right_uids = ["bondratefast02", "bondratefast12", "bondratefast13", "bondratefast14", "bondratefast15", "bondratefast16", "bondratefast11"];
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
        case "bondratefast01":
            delete_uid = `repurchase-interest-rates`;
            loadModule(uid, `repurchase-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-repurchase-interest-rates-title">
                            回购利率
                            <span data-time="otc-repurchase-interest-rates-time">
                                <!-- (2018-01-01) -->
                            </span>
                            <!-- <span data-link="otc-repurchase-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-repurchase-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-repurchase-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-repurchase-interest-rates-table">
                        <thead class="otc-repurchase-interest-rates-table-thead">
                            <!-- <tr class="otc-repurchase-interest-rates-table-tr">
                                <th class="otc-repurchase-interest-rates-table-th-title" colspan="3">回购利率</th>
                                <th class="otc-repurchase-interest-rates-table-th-value" colspan="4" data-time="data-otc-RIR"></th>
                            </tr> -->
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR">品种</td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR">加权/收盘</td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR">比较日</td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR">BP</td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR">成交量(亿)</td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-alias="#RIR">量增</td>
                            </tr>
                        </thead>
                        <tbody class="otc-repurchase-interest-rates-table-tbody" data-tbody="otc-repurchase-interest-rates-table-tbody">
                            <!-- 银质押 -->
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-title" data-alias="银质押" rowspan="8">
                                    <div class="vertical-text">银</div>
                                    <div class="vertical-text">质</div>
                                    <div class="vertical-text">押</div>
                                </td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">1D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">7D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">14D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">21D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">1M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">2M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">3M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">6M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <!-- 沪质押 -->
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-title" data-alias="沪质押" rowspan="9">
                                    <div class="vertical-text">沪</div>
                                    <div class="vertical-text">质</div>
                                    <div class="vertical-text">押</div>
                                </td>
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">1D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">2D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">3D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">4D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">7D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">14D</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">1M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">3M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-key" data-key="data-otc-RIR">6M</td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-repurchase-interest-rates-table-tfoot">
                            <tr class="otc-repurchase-interest-rates-table-tr">
                                <td class="otc-repurchase-interest-rates-table-td-value" data-value="data-otc-RIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="repurchase-interest-rates-hs-container1" data-hs-container="data-repurchase-interest-rates-container-uid" class="otc-repurchase-interest-rates-hs otc-repurchase-interest-rates-hs-container"></div>
                    <div id="repurchase-interest-rates-hs-container2" data-hs-container="data-repurchase-interest-rates-container-uid" class="otc-repurchase-interest-rates-hs otc-repurchase-interest-rates-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-repurchase-interest-rates">
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast02":
            delete_uid = `cs-interbank-dismantle-borrowing-interest-rates`;
            loadModule(uid, `cs-interbank-dismantle-borrowing-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-cs-interbank-dismantle-borrowing-interest-rates-title">
                            拆借利率(Chibor & Shibor)
                            <span data-time="otc-cs-interbank-dismantle-borrowing-interest-rates-time">
                                <!-- (2018-01-01) -->
                            </span>
                            <!-- <span data-link="otc-cs-interbank-dismantle-borrowing-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-cs-interbank-dismantle-borrowing-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-cs-interbank-dismantle-borrowing-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-cs-interbank-dismantle-borrowing-interest-rates-table">
                        <thead class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-thead">
                            <!-- <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <th class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-th-title" colspan="3">拆借利率(Chibor & Shibor)</th>
                                <th class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-th-value" colspan="4" data-time="data-otc-CSIDBIR"></th>
                            </tr> -->
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR">品种</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR">加权/收盘</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR">比较日</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR">BP</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR">成交量(亿)</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="#CSIDBIR">量增</td>
                            </tr>
                        </thead>
                        <tbody class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tbody" data-tbody="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tbody">
                            <!-- 中拆借 -->
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="中拆借" rowspan="8">
                                    <div class="vertical-text">中</div>
                                    <div class="vertical-text">拆</div>
                                    <div class="vertical-text">借</div>
                                </td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">1D</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">7D</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">14D</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">21D</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">1M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">2M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">3M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">4M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <!-- 沪拆借 -->
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="沪拆借" rowspan="9">
                                    <div class="vertical-text">沪</div>
                                    <div class="vertical-text">拆</div>
                                    <div class="vertical-text">借</div>
                                </td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">1D</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">1W</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">2W</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">1M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">3M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">6M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">9M</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-key" data-key="data-otc-CSIDBIR">1Y</td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tfoot">
                            <tr class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-cs-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-CSIDBIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="cs-interbank-dismantle-borrowing-interest-rates-hs-container1" data-hs-container="data-cs-interbank-dismantle-borrowing-interest-rates-container-uid" class="otc-cs-interbank-dismantle-borrowing-interest-rates-hs otc-cs-interbank-dismantle-borrowing-interest-rates-hs-container"></div>
                    <div id="cs-interbank-dismantle-borrowing-interest-rates-hs-container2" data-hs-container="data-cs-interbank-dismantle-borrowing-interest-rates-container-uid" class="otc-cs-interbank-dismantle-borrowing-interest-rates-hs otc-cs-interbank-dismantle-borrowing-interest-rates-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-cs-interbank-dismantle-borrowing-interest-rates">
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast03":
            delete_uid = `treasury-bonds-profitability`;
            loadModule(uid, `treasury-bonds-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-treasury-bonds-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-treasury-bonds-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-treasury-bonds-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-treasury-bonds-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-treasury-bonds-profitability-table">
                        <thead class="otc-treasury-bonds-profitability-table-thead">
                            <tr class="otc-treasury-bonds-profitability-table-tr">
                                <th class="otc-treasury-bonds-profitability-table-th-title" colspan="3">国债收益率(中债)</th>
                                <th class="otc-treasury-bonds-profitability-table-th-value" colspan="3" data-time="data-otc-TBP"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-treasury-bonds-profitability-table-tbody" data-tbody="otc-treasury-bonds-profitability-table-tbody">
                            <tr class="otc-treasury-bonds-profitability-table-tr">
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="#TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="#TBP">1Y</td>
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="#TBP">3Y</td>
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="#TBP">5Y</td>
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="#TBP">7Y</td>
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="#TBP">10Y</td>
                            </tr>
                            <tr class="otc-treasury-bonds-profitability-table-tr">
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                            </tr>
                            <tr class="otc-treasury-bonds-profitability-table-tr">
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                            </tr>
                            <tr class="otc-treasury-bonds-profitability-table-tr">
                                <td class="otc-treasury-bonds-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-treasury-bonds-profitability-table-tfoot">
                            <tr class="otc-treasury-bonds-profitability-table-tr">
                                <td class="otc-treasury-bonds-profitability-table-td-value" data-value="data-otc-TBP"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="treasury-bonds-profitability-hs-container" data-hs-container="data-treasury-bonds-profitability-container-uid" class="otc-treasury-bonds-profitability-hs otc-treasury-bonds-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-treasury-bonds-profitability">
                        <!-- <p data-none="no-data-p">国债收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast04":
            delete_uid = `corporate-debt-aaa-profitability`;
            loadModule(uid, `corporate-debt-aaa-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-corporate-debt-aaa-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-corporate-debt-aaa-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-corporate-debt-aaa-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-corporate-debt-aaa-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-corporate-debt-aaa-profitability-table">
                        <thead class="otc-corporate-debt-aaa-profitability-table-thead">
                            <tr class="otc-corporate-debt-aaa-profitability-table-tr">
                                <th class="otc-corporate-debt-aaa-profitability-table-th-title" colspan="3">企债AAA收益率(中债)</th>
                                <th class="otc-corporate-debt-aaa-profitability-table-th-value" colspan="3" data-time="data-otc-CDA3P"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-corporate-debt-aaa-profitability-table-tbody" data-tbody="otc-corporate-debt-aaa-profitability-table-tbody">
                            <tr class="otc-corporate-debt-aaa-profitability-table-tr">
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="#CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="#CDA3P">1Y</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="#CDA3P">3Y</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="#CDA3P">5Y</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="#CDA3P">7Y</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="#CDA3P">10Y</td>
                            </tr>
                            <tr class="otc-corporate-debt-aaa-profitability-table-tr">
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                            </tr>
                            <tr class="otc-corporate-debt-aaa-profitability-table-tr">
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                            </tr>
                            <tr class="otc-corporate-debt-aaa-profitability-table-tr">
                                <td class="otc-corporate-debt-aaa-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-corporate-debt-aaa-profitability-table-tfoot">
                            <tr class="otc-corporate-debt-aaa-profitability-table-tr">
                                <td class="otc-corporate-debt-aaa-profitability-table-td-value" data-value="data-otc-CDA3P"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="corporate-debt-aaa-profitability-hs-container" data-hs-container="data-corporate-debt-aaa-profitability-container-uid" class="otc-corporate-debt-aaa-profitability-hs otc-corporate-debt-aaa-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-corporate-debt-aaa-profitability">
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast05":
            delete_uid = `national-policy-driven-financial-debt-profitability`;
            loadModule(uid, `national-policy-driven-financial-debt-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-national-policy-driven-financial-debt-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-national-policy-driven-financial-debt-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-national-policy-driven-financial-debt-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-national-policy-driven-financial-debt-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-national-policy-driven-financial-debt-profitability-table">
                        <thead class="otc-national-policy-driven-financial-debt-profitability-table-thead">
                            <tr class="otc-national-policy-driven-financial-debt-profitability-table-tr">
                                <th class="otc-national-policy-driven-financial-debt-profitability-table-th-title" colspan="3">国开政策性金融债收益率(中债)</th>
                                <th class="otc-national-policy-driven-financial-debt-profitability-table-th-value" colspan="3" data-time="data-otc-NPDFDP"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-national-policy-driven-financial-debt-profitability-table-tbody" data-tbody="otc-national-policy-driven-financial-debt-profitability-table-tbody">
                            <tr class="otc-national-policy-driven-financial-debt-profitability-table-tr">
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="#NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="#NPDFDP">1Y</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="#NPDFDP">3Y</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="#NPDFDP">5Y</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="#NPDFDP">7Y</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="#NPDFDP">10Y</td>
                            </tr>
                            <tr class="otc-national-policy-driven-financial-debt-profitability-table-tr">
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                            </tr>
                            <tr class="otc-national-policy-driven-financial-debt-profitability-table-tr">
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                            </tr>
                            <tr class="otc-national-policy-driven-financial-debt-profitability-table-tr">
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-national-policy-driven-financial-debt-profitability-table-tfoot">
                            <tr class="otc-national-policy-driven-financial-debt-profitability-table-tr">
                                <td class="otc-national-policy-driven-financial-debt-profitability-table-td-value" data-value="data-otc-NPDFDP"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="national-policy-driven-financial-debt-profitability-hs-container" data-hs-container="data-national-policy-driven-financial-debt-profitability-container-uid" class="otc-national-policy-driven-financial-debt-profitability-hs otc-national-policy-driven-financial-debt-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-national-policy-driven-financial-debt-profitability">
                        <!-- <p data-none="no-data-p">国开政策性金融债收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast06":
            delete_uid = `commercial-banks-aaa-profitability`;
            loadModule(uid, `commercial-banks-aaa-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-commercial-banks-aaa-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-commercial-banks-aaa-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-commercial-banks-aaa-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-commercial-banks-aaa-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-commercial-banks-aaa-profitability-table">
                        <thead class="otc-commercial-banks-aaa-profitability-table-thead">
                            <tr class="otc-commercial-banks-aaa-profitability-table-tr">
                                <th class="otc-commercial-banks-aaa-profitability-table-th-title" colspan="3">商业银行AAA收益率(中债)</th>
                                <th class="otc-commercial-banks-aaa-profitability-table-th-value" colspan="3" data-time="data-otc-CB3AP"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-commercial-banks-aaa-profitability-table-tbody" data-tbody="otc-commercial-banks-aaa-profitability-table-tbody">
                            <tr class="otc-commercial-banks-aaa-profitability-table-tr">
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="#CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="#CB3AP">1Y</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="#CB3AP">3Y</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="#CB3AP">5Y</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="#CB3AP">7Y</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="#CB3AP">10Y</td>
                            </tr>
                            <tr class="otc-commercial-banks-aaa-profitability-table-tr">
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                            </tr>
                            <tr class="otc-commercial-banks-aaa-profitability-table-tr">
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                            </tr>
                            <tr class="otc-commercial-banks-aaa-profitability-table-tr">
                                <td class="otc-commercial-banks-aaa-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-commercial-banks-aaa-profitability-table-tfoot">
                            <tr class="otc-commercial-banks-aaa-profitability-table-tr">
                                <td class="otc-commercial-banks-aaa-profitability-table-td-value" data-value="data-otc-CB3AP"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="commercial-banks-aaa-profitability-hs-container" data-hs-container="data-commercial-banks-aaa-profitability-container-uid" class="otc-commercial-banks-aaa-profitability-hs otc-commercial-banks-aaa-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-commercial-banks-aaa-profitability">
                        <!-- <p data-none="no-data-p">商业银行AAA收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast07":
            delete_uid = `city-investment-debt-aaa-profitability`;
            loadModule(uid, `city-investment-debt-aaa-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-city-investment-debt-aaa-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-city-investment-debt-aaa-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-city-investment-debt-aaa-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-city-investment-debt-aaa-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-city-investment-debt-aaa-profitability-table">
                        <thead class="otc-city-investment-debt-aaa-profitability-table-thead">
                            <tr class="otc-city-investment-debt-aaa-profitability-table-tr">
                                <th class="otc-city-investment-debt-aaa-profitability-table-th-title" colspan="3">城投债AAA收益率(中债)</th>
                                <th class="otc-city-investment-debt-aaa-profitability-table-th-value" colspan="3" data-time="data-otc-CIDA3P"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-city-investment-debt-aaa-profitability-table-tbody" data-tbody="otc-city-investment-debt-aaa-profitability-table-tbody">
                            <tr class="otc-city-investment-debt-aaa-profitability-table-tr">
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="#CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="#CIDA3P">1Y</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="#CIDA3P">3Y</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="#CIDA3P">5Y</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="#CIDA3P">7Y</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="#CIDA3P">10Y</td>
                            </tr>
                            <tr class="otc-city-investment-debt-aaa-profitability-table-tr">
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                            </tr>
                            <tr class="otc-city-investment-debt-aaa-profitability-table-tr">
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                            </tr>
                            <tr class="otc-city-investment-debt-aaa-profitability-table-tr">
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-city-investment-debt-aaa-profitability-table-tfoot">
                            <tr class="otc-city-investment-debt-aaa-profitability-table-tr">
                                <td class="otc-city-investment-debt-aaa-profitability-table-td-value" data-value="data-otc-CIDA3P"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="city-investment-debt-aaa-profitability-hs-container" data-hs-container="data-city-investment-debt-aaa-profitability-container-uid" class="otc-city-investment-debt-aaa-profitability-hs otc-city-investment-debt-aaa-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-city-investment-debt-aaa-profitability">
                        <!-- <p data-none="no-data-p">城投债AAA收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast08":
            delete_uid = `local-governments-debt-aaa-profitability`;
            loadModule(uid, `local-governments-debt-aaa-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-local-governments-debt-aaa-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-local-governments-debt-aaa-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-local-governments-debt-aaa-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-local-governments-debt-aaa-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-local-governments-debt-aaa-profitability-table">
                        <thead class="otc-local-governments-debt-aaa-profitability-table-thead">
                            <tr class="otc-local-governments-debt-aaa-profitability-table-tr">
                                <th class="otc-local-governments-debt-aaa-profitability-table-th-title" colspan="3">地方政府债AAA收益率(中债)</th>
                                <th class="otc-local-governments-debt-aaa-profitability-table-th-value" colspan="3" data-time="data-otc-LGD3AP"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-local-governments-debt-aaa-profitability-table-tbody" data-tbody="otc-local-governments-debt-aaa-profitability-table-tbody">
                            <tr class="otc-local-governments-debt-aaa-profitability-table-tr">
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="#LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="#LGD3AP">1Y</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="#LGD3AP">3Y</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="#LGD3AP">5Y</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="#LGD3AP">7Y</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="#LGD3AP">10Y</td>
                            </tr>
                            <tr class="otc-local-governments-debt-aaa-profitability-table-tr">
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                            </tr>
                            <tr class="otc-local-governments-debt-aaa-profitability-table-tr">
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                            </tr>
                            <tr class="otc-local-governments-debt-aaa-profitability-table-tr">
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-local-governments-debt-aaa-profitability-table-tfoot">
                            <tr class="otc-local-governments-debt-aaa-profitability-table-tr">
                                <td class="otc-local-governments-debt-aaa-profitability-table-td-value" data-value="data-otc-LGD3AP"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="local-governments-debt-aaa-profitability-hs-container" data-hs-container="data-local-governments-debt-aaa-profitability-container-uid" class="otc-local-governments-debt-aaa-profitability-hs otc-local-governments-debt-aaa-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-local-governments-debt-aaa-profitability">
                        <!-- <p data-none="no-data-p">地方政府债AAA收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast09":
            delete_uid = `medium-short-term-bills-aaa-profitability`;
            loadModule(uid, `medium-short-term-bills-aaa-profitability`, true);// false
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-medium-short-term-bills-aaa-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-medium-short-term-bills-aaa-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-medium-short-term-bills-aaa-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-medium-short-term-bills-aaa-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-medium-short-term-bills-aaa-profitability-table">
                        <thead class="otc-medium-short-term-bills-aaa-profitability-table-thead">
                            <tr class="otc-medium-short-term-bills-aaa-profitability-table-tr">
                                <th class="otc-medium-short-term-bills-aaa-profitability-table-th-title" colspan="3">中短期票据AAA收益率(中债)</th>
                                <th class="otc-medium-short-term-bills-aaa-profitability-table-th-value" colspan="4" data-time="data-otc-MSTB3AP"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-medium-short-term-bills-aaa-profitability-table-tbody" data-tbody="otc-medium-short-term-bills-aaa-profitability-table-tbody">
                            <tr class="otc-medium-short-term-bills-aaa-profitability-table-tr">
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">3M</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">6M</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">1Y</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">3Y</td>
                                <!-- <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">2Y</td> -->
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">5Y</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="#MSTB3AP">7Y</td>
                            </tr>
                            <tr class="otc-medium-short-term-bills-aaa-profitability-table-tr">
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                            </tr>
                            <tr class="otc-medium-short-term-bills-aaa-profitability-table-tr">
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                            </tr>
                            <tr class="otc-medium-short-term-bills-aaa-profitability-table-tr">
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-medium-short-term-bills-aaa-profitability-table-tfoot">
                            <tr class="otc-medium-short-term-bills-aaa-profitability-table-tr">
                                <td class="otc-medium-short-term-bills-aaa-profitability-table-td-value" data-value="data-otc-MSTB3AP"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc -->
                    <div id="medium-short-term-bills-aaa-profitability-hc-container" data-hs-container="data-medium-short-term-bills-aaa-profitability-container-uid" class="otc-medium-short-term-bills-aaa-profitability-hs otc-medium-short-term-bills-aaa-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-medium-short-term-bills-aaa-profitability">
                        <!-- <p data-none="no-data-p">中短期票据AAA收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast10":
            delete_uid = `central-bills-profitability`;
            loadModule(uid, `central-bills-profitability`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-central-bills-profitability-title">
                            主要品种的关键年期利率 (到期)
                            <!-- <span data-link="otc-central-bills-profitability-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-central-bills-profitability-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-central-bills-profitability-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-central-bills-profitability-table">
                        <thead class="otc-central-bills-profitability-table-thead">
                            <tr class="otc-central-bills-profitability-table-tr">
                                <th class="otc-central-bills-profitability-table-th-title" colspan="3">央票收益率(中债)</th>
                                <th class="otc-central-bills-profitability-table-th-value" colspan="4" data-time="data-otc-CBP"></th>
                            </tr>
                        </thead>
                        <tbody class="otc-central-bills-profitability-table-tbody" data-tbody="otc-central-bills-profitability-table-tbody">
                            <tr class="otc-central-bills-profitability-table-tr">
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">3M</td>
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">6M</td>
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">1Y</td>
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">3Y</td>
                                <!-- <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">2Y</td> -->
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">5Y</td>
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="#CBP">7Y</td>
                            </tr>
                            <tr class="otc-central-bills-profitability-table-tr">
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="收益率">收益率</td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                            </tr>
                            <tr class="otc-central-bills-profitability-table-tr">
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="比较日">比较日</td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                            </tr>
                            <tr class="otc-central-bills-profitability-table-tr">
                                <td class="otc-central-bills-profitability-table-td-key" data-alias="BP差值">BP差值</td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-central-bills-profitability-table-tfoot">
                            <tr class="otc-central-bills-profitability-table-tr">
                                <td class="otc-central-bills-profitability-table-td-value" data-value="data-otc-CBP"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- hc & id="central_bills_profitability_hs_container" -->
                    <div id="central-bills-profitability-hc-container" data-hs-container="data-central-bills-profitability-container-uid" class="otc-central-bills-profitability-hs otc-central-bills-profitability-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-central-bills-profitability">
                        <!-- <p data-none="no-data-p">央票收益率(中债)</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast11":
            delete_uid = `dcm-pricing-central-hub`;
            loadModule(uid, `dcm-pricing-central-hub`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-dcm-pricing-central-hub-title">
                            DCM 定价中枢
                            <span data-time="otc-dcm-pricing-central-hub-time">最新日:</span>
                            <span data-time="otc-dcm-pricing-central-hub-time">比较日:</span>
                            <!-- <span data-link="otc-dcm-pricing-central-hub-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-dcm-pricing-central-hub-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-dcm-pricing-central-hub-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <section data-scrollbar="section-scrollbar-dcm-table-container">
                        <table class="otc-dcm-pricing-central-hub-table">
                            <thead class="otc-dcm-pricing-central-hub-table-thead">
                                <!-- <tr class="otc-dcm-pricing-central-hub-table-tr">
                                            <th class="otc-dcm-pricing-central-hub-table-th-title" colspan="3">DCM 定价中枢</th>
                                            <th class="otc-dcm-pricing-central-hub-table-th-value" colspan="4" data-time="data-otc-DPCH"></th>
                                        </tr> -->
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH" rowspan="2"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH" colspan="3">1Y</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH" colspan="3">3Y</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH" colspan="3">5Y</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH" colspan="3">7Y</td>
                                </tr>
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">最新</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">比较日</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">涨跌</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">最新</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">比较日</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">涨跌</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">最新</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">比较日</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">涨跌</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">最新</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">比较日</td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-alias="#DPCH">涨跌</td>
                                </tr>
                            </thead>
                            <tbody class="otc-dcm-pricing-central-hub-table-tbody" data-tbody="otc-dcm-pricing-central-hub-table-tbody">
                                <!-- rowspan="3" & colspan="3" -->
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-key="data-otc-DPCH">
                                        <a href="#" data-button="dcm-link" data-uid="hc-focus-3a" title="点击切换到重点AAA">重点AAA</a>
                                    </td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                </tr>
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-key="data-otc-DPCH">
                                        <a href="#" data-button="dcm-link" data-uid="hc-3a" title="点击切换到AAA">AAA</a>
                                    </td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                </tr>
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-key="data-otc-DPCH">
                                        <a href="#" data-button="dcm-link" data-uid="hc-2a+" title="点击切换到AA+">AA+</a>
                                    </td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                </tr>
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-key="data-otc-DPCH">
                                        <a href="#" data-button="dcm-link" data-uid="hc-2a" title="点击切换到AA">AA</a>
                                    </td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                </tr>
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-key" data-key="data-otc-DPCH">
                                        <a href="#" data-button="dcm-link" data-uid="hc-2a-" title="点击切换到AA-">AA-</a>
                                    </td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                </tr>
                            </tbody>
                            <tfoot class="otc-dcm-pricing-central-hub-table-tfoot">
                                <tr class="otc-dcm-pricing-central-hub-table-tr">
                                    <td class="otc-dcm-pricing-central-hub-table-td-value" data-value="data-otc-DPCH"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </section>
                    <!-- hc -->
                    <div id="dcm-pricing-central-hub-hs-container" data-hs-container="data-dcm-pricing-central-hub-container-uid" class="otc-dcm-pricing-central-hub-hs otc-dcm-pricing-central-hub-hs-container"></div>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-dcm-pricing-central-hub">
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast12":
            delete_uid = `shibor-interbank-dismantle-borrowing-interest-rates`;
            loadModule(uid, `shibor-interbank-dismantle-borrowing-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-shibor-interbank-dismantle-borrowing-interest-rates-title">
                            Shibor
                            <span data-time="otc-shibor-interbank-dismantle-borrowing-interest-rates-time"></span>
                            <!-- <span data-link="otc-shibor-interbank-dismantle-borrowing-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-shibor-interbank-dismantle-borrowing-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-shibor-interbank-dismantle-borrowing-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table">
                        <thead class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-thead">
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="#SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="#SIDBIR">最新</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="#SIDBIR">5日均值</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="#SIDBIR">10日均值</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-title" data-alias="#SIDBIR">20日均值</td>
                            </tr>
                        </thead>
                        <tbody class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tbody" data-tbody="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tbody">
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">O/N</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">1W</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">2W</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">1M</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">3M</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">6M</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">9M</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-key" data-alias="O/N1W2W1M3M6M9M1Y">1Y</td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tfoot">
                            <tr class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-tr">
                                <td class="otc-shibor-interbank-dismantle-borrowing-interest-rates-table-td-value" data-value="data-otc-SIDBIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-shibor-interbank-dismantle-borrowing-interest-rates">
                        <!-- <p data-none="no-data-p">Shibor</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast13":
            delete_uid = `central-bank-benchmark-interest-rates`;
            loadModule(uid, `central-bank-benchmark-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-central-bank-benchmark-interest-rates-title">
                            央行基准利率
                            <span data-time="otc-central-bank-benchmark-interest-rates-time"></span>
                            <!-- <span data-link="otc-central-bank-benchmark-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-central-bank-benchmark-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-central-bank-benchmark-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-central-bank-benchmark-interest-rates-table">
                        <thead class="otc-central-bank-benchmark-interest-rates-table-thead">
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-title" data-alias="#CBBIR" colspan="2">存款利率</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-title" data-alias="#CBBIR" colspan="2">贷款利率</td>
                            </tr>
                        </thead>
                        <tbody class="otc-central-bank-benchmark-interest-rates-table-tbody" data-tbody="otc-central-bank-benchmark-interest-rates-table-tbody">
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">活期</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">5Y以上(公积金)</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">3M</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">5Y以下(公积金)</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">6M</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">6M以内</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">1Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">6M-1Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">2Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">1Y-3Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">3Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">3Y-5Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">5Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">5Y以上</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#CBBIR" colspan="4">再贷款利率</td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">再贴现利率</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">6M</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">20D</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">1Y</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-alias="#">3M</td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-key" data-no-alias="#"></td>
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-no-value="data-otc-CBBIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-central-bank-benchmark-interest-rates-table-tfoot">
                            <tr class="otc-central-bank-benchmark-interest-rates-table-tr">
                                <td class="otc-central-bank-benchmark-interest-rates-table-td-value" data-value="data-otc-CBBIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-central-bank-benchmark-interest-rates">
                        <!-- <p data-none="no-data-p">央行基准利率</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast14":
            delete_uid = `repurchase-set-interest-rates`;
            loadModule(uid, `repurchase-set-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-repurchase-set-interest-rates-title">
                            回购定盘利率
                            <span data-time="otc-repurchase-set-interest-rates-time"></span>
                            <!-- <span data-link="otc-repurchase-set-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-repurchase-set-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-repurchase-set-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-repurchase-set-interest-rates-table">
                        <thead class="otc-repurchase-set-interest-rates-table-thead">
                            <!-- <tr class="otc-repurchase-set-interest-rates-table-tr">
                                <td class="otc-repurchase-set-interest-rates-table-td-title" data-alias="#RSIR" colspan="2"></td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-alias="#RSIR" colspan="2"></td>
                            </tr> -->
                        </thead>
                        <tbody class="otc-repurchase-set-interest-rates-table-tbody" data-tbody="otc-repurchase-set-interest-rates-table-tbody">
                            <tr class="otc-repurchase-set-interest-rates-table-tr">
                                <td class="otc-repurchase-set-interest-rates-table-td-key" data-alias="#">FR001</td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                                <td class="otc-repurchase-set-interest-rates-table-td-key" data-alias="#">FDR001</td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                            </tr>
                            <tr class="otc-repurchase-set-interest-rates-table-tr">
                                <td class="otc-repurchase-set-interest-rates-table-td-key" data-alias="#">FR007</td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                                <td class="otc-repurchase-set-interest-rates-table-td-key" data-alias="#">FDR007</td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                            </tr>
                            <tr class="otc-repurchase-set-interest-rates-table-tr">
                                <td class="otc-repurchase-set-interest-rates-table-td-key" data-alias="#">FR014</td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                                <td class="otc-repurchase-set-interest-rates-table-td-key" data-alias="#">FDR014</td>
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-repurchase-set-interest-rates-table-tfoot">
                            <tr class="otc-repurchase-set-interest-rates-table-tr">
                                <td class="otc-repurchase-set-interest-rates-table-td-value" data-value="data-otc-RSIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-repurchase-set-interest-rates">
                        <!-- <p data-none="no-data-p">回购定盘利率</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast15":
            delete_uid = `seven-days-repurchase-moving-average-interest-rates`;
            loadModule(uid, `seven-days-repurchase-moving-average-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-seven-days-repurchase-moving-average-interest-rates-title">
                            七日回购移动平均利率
                            <span data-time="otc-seven-days-repurchase-moving-average-interest-rates-time"></span>
                            <!-- <span data-link="otc-seven-days-repurchase-moving-average-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-seven-days-repurchase-moving-average-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-seven-days-repurchase-moving-average-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-seven-days-repurchase-moving-average-interest-rates-table">
                        <thead class="otc-seven-days-repurchase-moving-average-interest-rates-table-thead">
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-title" data-alias="#SDRMAIR" colspan="2">B0</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR" colspan="2"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-title" data-alias="#SDRMAIR" colspan="2">指数平均值</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-title" data-alias="#SDRMAIR" colspan="2">算数平均值</td>
                            </tr>
                        </thead>
                        <tbody class="otc-seven-days-repurchase-moving-average-interest-rates-table-tbody" data-tbody="otc-seven-days-repurchase-moving-average-interest-rates-table-tbody">
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B1W</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_1W</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B2W</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_2W</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B3W</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_3W</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B1M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_1M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B2M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_2M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B3M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_3M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B4M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_4M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B5M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_5M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B6M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_6M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B7M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_7M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B8M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_8M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B9M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_9M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B10M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_10M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B11M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_11M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B12M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-key" data-alias="#">B_12M</td>
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-seven-days-repurchase-moving-average-interest-rates-table-tfoot">
                            <tr class="otc-seven-days-repurchase-moving-average-interest-rates-table-tr">
                                <td class="otc-seven-days-repurchase-moving-average-interest-rates-table-td-value" data-value="data-otc-SDRMAIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-seven-days-repurchase-moving-average-interest-rates">
                        <!-- <p data-none="no-data-p">七日回购移动平均利率</p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
                </section>
            `;
            break;
        case "bondratefast16":
            delete_uid = `bills-directly-indirect-subsidy-interest-rates`;
            loadModule(uid, `bills-directly-indirect-subsidy-interest-rates`, true);
            htmlstr += `
                <section class="otc-module-box-5">
                    <div class="otc-h5dnd-modules-title-box">
                        <p class="otc-h5dnd-modules-title" data-title="otc-bills-directly-indirect-subsidy-interest-rates-title">
                            票据直贴/转贴利率
                            <span data-time="otc-bills-directly-indirect-subsidy-interest-rates-time"></span>
                            <!-- <span data-link="otc-bills-directly-indirect-subsidy-interest-rates-link">
                                <a href="#more" data-uid="1112" data-turn-to-uid="node-uid-bills-directly-indirect-subsidy-interest-rates-data">more</a>
                                <a href="#more" data-uid="1085" data-turn-to-uid="node-uid-bills-directly-indirect-subsidy-interest-rates-data">more</a>
                            </span> -->
                        </p>
                    </div>
                    <!-- table -->
                    <table class="otc-bills-directly-indirect-subsidy-interest-rates-table">
                        <thead class="otc-bills-directly-indirect-subsidy-interest-rates-table-thead">
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-title" data-alias="#BDISIR">利率名称</td>
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-title" data-alias="#BDISIR">利率(月息)(‰)</td>
                            </tr>
                        </thead>
                        <tbody class="otc-bills-directly-indirect-subsidy-interest-rates-table-tbody" data-tbody="otc-bills-directly-indirect-subsidy-interest-rates-table-tbody">
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-key" data-alias="转贴-6M珠三角6M长三角6M中西部6M">转贴-6M</td>
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-value" data-value="data-otc-BDISIR"></td>
                            </tr>
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-key" data-alias="转贴-6M珠三角6M长三角6M中西部6M">珠三角6M</td>
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-value" data-value="data-otc-BDISIR"></td>
                            </tr>
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-key" data-alias="转贴-6M珠三角6M长三角6M中西部6M">长三角6M</td>
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-value" data-value="data-otc-BDISIR"></td>
                            </tr>
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-key" data-alias="转贴-6M珠三角6M长三角6M中西部6M">中西部6M</td>
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-value" data-value="data-otc-BDISIR"></td>
                            </tr>
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-key" data-alias="转贴-6M珠三角6M长三角6M中西部6M">环渤海6M</td>
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-value" data-value="data-otc-BDISIR"></td>
                            </tr>
                        </tbody>
                        <tfoot class="otc-bills-directly-indirect-subsidy-interest-rates-table-tfoot">
                            <tr class="otc-bills-directly-indirect-subsidy-interest-rates-table-tr">
                                <td class="otc-bills-directly-indirect-subsidy-interest-rates-table-td-value" data-value="data-otc-BDISIR"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <!-- no data -->
                    <div data-none="no-data-div-hidden" data-none-uid="otc-bills-directly-indirect-subsidy-interest-rates">
                        <!-- <p data-none="no-data-p">票据直贴/转贴利率 </p> -->
                        <p data-none="no-data-p">
                            <span data-none="no-data-span"></span>
                        </p>
                    </div>
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
        case "bondratefast01":
        case "bondratefast02":
        case "bondratefast03":
        case "bondratefast04":
        case "bondratefast05":
        case "bondratefast06":
        case "bondratefast07":
        case "bondratefast08":
        case "bondratefast09":
        case "bondratefast10":
        case "bondratefast11":
        case "bondratefast12":
        case "bondratefast13":
        case "bondratefast14":
        case "bondratefast15":
        case "bondratefast16":
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
                    // "bondratefast-all" ???
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
                let iconUid = e.target.dataset.iconUid.substr(12),// data-icon-uid="module-data-bondratefast01"
                    droppedUid = e.target.dataset.droppedUid ? e.target.dataset.droppedUid.substr(12) : ``;
                let uid = iconUid ? iconUid : droppedUid;
                if (debug) {
                    console.log(`iconUid = `, uid);
                    console.log(`droppedUid = `, uid);
                    console.log(`uid = `, uid);
                }
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
                if (typeof(uid) === "string" && uid.length < 15) {
                    // "bondratefast13".length; // 14 => 15
                    module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`);
                    // data-div-module-uid="div-module-bondratefast01"
                }
                // console.log(`module_exist_checker =`, module_exist_checker);
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


