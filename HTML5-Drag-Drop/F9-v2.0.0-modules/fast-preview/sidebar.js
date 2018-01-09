// "use strict";
// recentImportantEvents & Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};

STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};

STOCK_F9_FV.Utils.getParam = STOCK_F9_FV.Utils.getParam || ((key, debug = false) => {
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
        console.log(`value = `, value);
        return value;
    }
});

// tabs
let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`);
let divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);

for (let i = 0; i < lis.length - 1; i++) {
    lis[i].addEventListener(`click`, (e) => {
        if (debug) {
            let e_classes = e.target.classList;
            let e_datas = e.target.dataset;
            console.log(`e = `, e);
            console.log(`typeof e = `, typeof e);
            console.log(`e classes= `, e_classes);
            console.log(`e datas= `, e_datas);
            console.log(`divs[i] = `, divs[i]);
            console.log(`divs[i].classList = `, divs[i].classList);
            console.log(`i = `, i);
            console.log(`show ${divs[i].classList.contains(`h5-dnd-nav-box-hidden`)}`);
        }
        // lis.h5-dnd-nav-li-active
        if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
            // lis[i].classList.add("h5-dnd-nav-li-active");
            // lis[i].classList.remove("h5-dnd-nav-li-hidden");
            // lis[i].classList.add("no-bottom-margin");
        }else{
            lis[i].classList.add("h5-dnd-nav-li-active");
            lis[i].classList.remove("h5-dnd-nav-li-hidden");
            lis[i].classList.remove("add-bottom-margin");
            lis[i].classList.add("no-bottom-margin");
            // let arr = [0,1];
            let arr = [0,1,2];
            // arr remove i ??? arr.shift();
            arr.map(
                (item, index) =>{
                    if (debug) {
                        console.log(`item = ${item}`);
                        console.log(`index = ${index}`);
                    }
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
            // divs[i].classList.add("h5-dnd-nav-box-hidden");
            // divs[i].classList.remove("h5-dnd-nav-box-active");
        }else{
            divs[i].classList.add("h5-dnd-nav-box-active");
            divs[i].classList.remove("h5-dnd-nav-box-hidden");
            let arr = [0,1];
            // let arr = [0,1,2];
            // arr remove i ??? arr.shift();
            arr.map(
                (item, index) =>{
                    if (debug) {
                        console.log(`item = ${item}`);
                        console.log(`index = ${index}`);
                    }
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
let btn = document.querySelector(`[data-nav-btn="nav-btn"]`),
    small_btn = document.querySelector(`[data-nav-small-btn="nav-small-btn"]`),
    container = document.querySelector(`[data-nav-container="nav-container"]`),
    small_container = document.querySelector(`[data-nav-small-container="nav-small-container"]`),
    body_container = document.querySelector(`[data-body-container="data-body-container"]`);

btn.onclick = () => {
    if (container.classList.contains("h5-dnd-nav-container-normal")) {
        container.classList.add("h5-dnd-nav-container-small");
        container.classList.remove("h5-dnd-nav-container-normal");
    }else{
        container.classList.remove("h5-dnd-nav-container-small");
        container.classList.add("h5-dnd-nav-container-normal");
        // toggle() ???
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
        // toggle() ???
    }
    if (body_container.classList.contains("h5-dnd-body-container-big")) {
        body_container.classList.remove("h5-dnd-body-container-big");
        body_container.classList.add("h5-dnd-body-container-small");
    }
};

const debug = false;


window.STOCK_IP = window.STOCK_IP || ``;
window.STOCK_Paths = window.STOCK_Paths || ``;
window.STOCK_SecCode = window.STOCK_SecCode || ``;
window.STOCK_Skin = window.STOCK_Skin || ``;
// console.log("0, window.STOCK_Skin = ", window.STOCK_Skin);

// set params before DOM ready!
window.STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
window.STOCK_Skin = STOCK_F9_FV.Utils.getParam(`skin`) || `white`;
window.STOCK_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
window.STOCK_Paths = `/webservice/fastview/stock`;
// console.log("1, window.STOCK_Skin = ", window.STOCK_Skin);

// const css_arr = ["/sidebar.css", "common/module.css", "common/modal.css"];
// // "modules/agency-rating.css" ... & with path!
// let css_dom = document.querySelector(`head`);
// if (window.STOCK_Skin === "black") {
//     console.log(`window.STOCK_Skin = `, window.STOCK_Skin, typeof(window.STOCK_Skin));
//     for (let i = 0; i < css_arr.length; i++) {
//         let css_link = document.createElement(`link`);
//         css_link.setAttribute(`href`,`./css/black-skin/${css_arr[i]}`);
//         css_link.setAttribute(`data-css`,`data-css-uid`);
//         css_dom.insertAdjacentElement(`beforeend`, css_link);
//         console.log(`css_link = \n`, css_link);
//     }
// }else{
//     for (let i = 0; i < css_arr.length; i++) {
//         let css_link = document.createElement(`link`);
//         css_link.setAttribute(`href`,`./css/white-skin/${css_arr[i]}`);
//         css_link.setAttribute(`data-css`,`data-css-uid`);
//         css_dom.insertAdjacentElement(`beforeend`, css_link);
//         console.log(`css_link = \n`, css_link);
//     }
// }

// change skin & dynamic insert css link ??? replace css link (blink bug?)
document.addEventListener(`DOMContentLoaded`, (e) => {
    // console.log("2, (DOMContentLoaded)DOM fully loaded and parsed");
    // load css
    const css_arr = ["sidebar.css", "common/module.css", "common/modal.css", "common/more.css"];
    const css_skins = ["black-skin", "white-skin"];
    const css_links = document.querySelectorAll(`[data-css="data-css-uid"]`);
    let css_dom = document.querySelector(`head`);
    if (window.STOCK_Skin === "black") {
        // console.log(`window.STOCK_Skin = `, window.STOCK_Skin, typeof(window.STOCK_Skin));
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
        if (window.STOCK_Skin === "white" && css_links[0].href.includes(`black-skin`)){
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
    // init
    let btn_universal = document.querySelector(`[data-uid="universal"]`),
        btn_customize = document.querySelector(`[data-uid="customize"]`);
    let a_modules = document.querySelector(`[data-uid="modules-a-link"]`);
    const sortable_module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);
    btn_universal.onclick = (e) => {
        // data-title="通用"
        // alert(`e.target.dataset.title = ${e.target.dataset.title} \n this click will call loadAllModules()!`);
        // const sortable_module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
        // const sortable_module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);
        // // init & empty
        // // sortable_module_container.innerHTML = "";
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        // uids = ["stockfast01","stockfast02","stockfast03","stockfast04","stockfast05","stockfast06","stockfast07","stockfast08","stockfast09","stockfast10","stockfast11","stockfast12","stockfast13","news","bulletion","research"]
        let left_uids = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];
        let right_uids = ["stockfast02","stockfast03","stockfast05","stockfast06", "stockfast10","stockfast12","stockfast13", "news"];
        STOCK_F9_FV.Modules.loadAllModules.init(sortable_module_containers[0], left_uids);
        STOCK_F9_FV.Modules.loadAllModules.init(sortable_module_containers[1], right_uids);
        // ??? reset modules
        // a_modules.click();
        // load all modules & default layout ???
        // loadAllModules();
        // modulesLoader.loadAllModules();
    }
    btn_customize.onclick = (e) => {
        // data-title="自定义"
        // alert(`e.target.dataset.title = ${e.target.dataset.title}`);
        // data-uid="modules-a-link"
        // const sortable_module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
        // init & empty
        // sortable_module_container.innerHTML = "";
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        a_modules.click();
        // <a href="#模块选择" data-uid="modules-a-link">模块选择</a>
        // H5 DnD modules
    }
    btn.onclick();
    btn_universal.onclick();
    let print_btn = document.querySelector(`[data-print="print-title"`);
    print_btn.addEventListener(`click`, () => {
        window.print();
    });
};




/**
 * loadAllModules
 * @description initial all modules
 * @argument {* String | Object}dom_container_uid
 * @param {* Array} uids
 * @param {* Boolean} debug
 */

STOCK_F9_FV.Modules.loadAllModules = STOCK_F9_FV.Modules.loadAllModules || (
    (sortable_container = `sortable_container`,debug = false) => {
        /**
         *
         * @param {* DOM} container
         * @param {* Array} uids
         */
        const dropAll = (container, uids) => {
            if (debug) {
                console.log(`dropAll uids = `, uids);
            }
            // module_container
            uids.forEach(
                (uid, i) => {
                    if (debug) {
                        console.log(`drop & uid = %c ${uid}\n`, `color: red;`);
                    }
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
                        if (debug) {
                            console.log(`e.target.dataset `, e.target.dataset);
                            console.log(`e.target.dataset.deleteModuleUid `, e.target.dataset.deleteModuleUid);
                            console.log(`uid`, uid);
                        }
                        // OK
                        STOCK_F9_FV.Modules.modulesLoader.deleteModule(uid);
                        // call delete
                    });
                    div.dataset.divModuleUid = `div-module-${uid}`;
                    div.dataset.droppedUid=`module-data-${uid}`;
                    switch (uid) {
                        case "stockfast01":
                            div.classList.add(`fv-left-box`);
                            break;
                        case "stockfast02":
                            div.classList.add(`fv-right-box`);
                            break;
                        case "stockfast03":
                            div.classList.add(`fv-right-box`);
                            break;
                        case "stockfast04":
                            div.classList.add(`fv-left-box`);
                            break;
                        case "stockfast05":
                            div.classList.add(`fv-right-box`);
                            break;
                        case "stockfast06":
                            div.classList.add(`fv-right-box`);
                            break;
                        case "stockfast07":
                            div.classList.add(`fv-all-box`);
                            break;
                        case "stockfast08":
                            div.classList.add(`fv-center-box`);
                            break;
                        case "stockfast09":
                            div.classList.add(`fv-center-box`);
                            break;
                        case "stockfast10":
                            div.classList.add(`fv-all-box`);
                            break;
                        case "stockfast11":
                            div.classList.add(`fv-center-box`);
                            break;
                        case "stockfast12":
                            div.classList.add(`fv-center-box`);
                            break;
                        case "stockfast13":
                            div.classList.add(`fv-right-box`);
                            break;
                        case "news":
                            div.classList.add(`fv-center-box`);
                            break;
                        case "bulletion":
                            div.classList.add(`fv-center-box`);
                            break;
                        case "research":
                            div.classList.add(`fv-center-box`);
                            break;
                        default:
                            break;
                    }
                    // no need check ???
                    // ??? empty container
                    const loadModule = (module_uid_name=``, isTable=`false`) => {
                        if (debug) {
                            console.log(`module_uid_name = \n`, module_uid_name);
                            console.log(`isTable = \n`, isTable);
                            if (isTable === true) {
                                console.log(`document.querySelector('.fv-${module_uid_name}-table')`);
                            }else{
                                console.log(`document.querySelector('.fv-${module_uid_name}-container')`);
                            }
                        }
                        // setTimeout & IIFE & Closure
                        /* skin & ./css/black-skin/modules/agency-rating.black.css */
                        let skin_css = ``;
                        setTimeout(() => {
                            ((module_uid_name, isTable) => {
                                let box = (isTable === true)
                                    ? document.querySelector(`.fv-${module_uid_name}-table`)
                                    : document.querySelector(`.fv-${module_uid_name}-container`),
                                    // box = document.querySelector(`.fv-top-ten-shareholders-table`),
                                    link_css = document.createElement(`link`),
                                    script_dom = document.createElement(`script`);
                                link_css.setAttribute(`rel`, `stylesheet`);
                                // link_css.setAttribute(`href`, `./build/css/${module_uid_name}.min.css`);
                                let css_module_skin = `white-skin`;
                                if (window.STOCK_Skin === "black") {
                                    css_module_skin = "black-skin";
                                }else{
                                    // do nothing
                                }
                                link_css.setAttribute(`href`, `./css/${css_module_skin}/modules/${module_uid_name}.css`);
                                link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
                                script_dom.dataset.deleteScriptDom = `delete-script-dom-${uid}`;
                                // script_dom.setAttribute(`src`, `./Modules/${module_uid_name}.js`);
                                script_dom.setAttribute(`src`, `./build/js/${module_uid_name}.min.js`);
                                if (debug) {
                                    console.log(`box = \n`, box);
                                }
                                box.insertAdjacentElement(`afterend`, link_css);
                                link_css.insertAdjacentElement(`afterend`, script_dom);
                            })(module_uid_name, isTable);
                        }, 0);
                    };
                    // show modules
                    let htmlstr = ``;
                    let delete_uid = ``;
                    // class="fv-h5dnd-modules-title" data-title=
                    switch (uid) {
                        case "stockfast01":
                            delete_uid = `important-infos`;
                            loadModule(`important-infos`, true);
                            htmlstr += `
                                <section class="fv-module-box-3">
                                    <!-- 重要信息 -->
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-important-infos-title">
                                            重要信息
                                            <span data-link="fv-important-infos-data-link">
                                                <a href="#more" data-uid="2172" data-turn-to-uid="node-uid-important-infos-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-important-infos-table">
                                        <thead class="fv-important-infos-table-thead">
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-title">重要信息</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-important-infos-table-tbody">
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">涉及概念</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">主营业务</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key" data-alias="52周波动率">3个月波动率(%)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key" data-alias="日均成交量(3个月)">近90天日均成交量(万股)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-important-infos-table-tr">
                                                    <td class="fv-important-infos-table-td-key">总市值</td>
                                                    <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                                </tr>
                                            -->
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">净资产(万元)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">总股本(万股)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">流通股本(万股)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">股息率(%)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-important-infos-table-tr">
                                                    <td class="fv-important-infos-table-td-key">机构家数</td>
                                                    <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                                </tr>
                                            -->
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key" data-alias="前十大机构持有">机构持股占比(%)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-important-infos-table-tr">
                                                    <td class="fv-important-infos-table-td-key">分析师关注度</td>
                                                    <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                                </tr>
                                            -->
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">目标价格</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">综合评级</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="fv-important-infos-table-tfoot">
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast02":
                            delete_uid = `recent-important-events`;
                            loadModule(`recent-important-events`, true);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-recent-important-events-title">
                                            近期重要事项
                                        </p>
                                    </div>
                                    <table class="fv-recent-important-events-table">
                                        <thead class="fv-recent-important-events-table-thead">
                                            <tr class="fv-recent-important-events-table-tr">
                                                <td class="fv-recent-important-events-table-td-title">重要信息</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-recent-important-events-table-tbody" id="fv-recent-important-tbody">
                                            <!--
                                                <tr class="fv-recent-important-events-table-tr">
                                                    <td class="fv-recent-important-events-table-td-key">涉及概念</td>
                                                    <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
                                                        <div class="css-data-loading" data-loading="pure-css-data-loading">
                                                            CSS Loading...
                                                        </div>
                                                    </td>
                                                </tr>
                                            -->
                                        </tbody>
                                        <tfoot class="fv-recent-important-events-table-tfoot">
                                            <tr class="fv-recent-important-events-table-tr">
                                                <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast03":
                            delete_uid = `profit-forecast`;
                            loadModule(`profit-forecast`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-profit-forecast-title">
                                            盈利预测
                                            <span data-link="fv-profit-forecast-data-link">
                                                <a href="#more" data-uid="2908" data-turn-to-uid="node-uid-profit-forecast-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-profit-forecast-container">
                                        <div id="profit_forecast_hs_container" class="fv-profit-forecast-hs fv-profit-forecast-hs-container" data-hs-container="data-profit-forecast-container-uid">
                                            <!--  -->
                                        </div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast04":
                            delete_uid = `indicators-per-share`;
                            loadModule(`indicators-per-share`, true);
                            htmlstr += `
                                <section class="fv-module-box-3">
                                    <div class="fv-indicators-per-share-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-indicators-per-share-title">
                                            每股指标
                                            <span data-link="fv-indicators-per-share-data-link">
                                                <a href="#more" data-uid="2846" data-turn-to-uid="node-uid-indicators-per-share-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-indicators-per-share-table">
                                        <thead class="fv-indicators-per-share-table-thead">
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-title">每股指标</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-indicators-per-share-table-tbody">
                                            <!-- 上市公司公告 -->
                                            <tr class="fv-indicators-per-share-table-tr" data-tr="tr-background">
                                                <td class="fv-indicators-per-share-table-td-key" title="fbrq 发布日期">上市公司公告</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-基本(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-稀释(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-扣除／基本(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key" data-alias="每股收益-扣除／稀释(元)">每股收益-扣除／稀释(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key" data-alias="每股净资产(元)">每股净资产(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股经营活动产生的现金流量净额(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <!-- class="fv-indicators-per-share-table-tr-spaces"  -->
                                            <tr data-tr="tr-spaces">
                                                <!-- <td></td>
                                                <td></td> -->
                                            </tr>
                                            <!-- 聚源计算 -->
                                            <tr class="fv-indicators-per-share-table-tr" data-tr="tr-background">
                                                <td class="fv-indicators-per-share-table-td-key">聚源计算</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-期末股本摊薄(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-扣除/期末股本摊薄(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股营业总收入(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股营业收入(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股息税前利润(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key" data-alias="每股资本公积">每股资本公积(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股盈余公积(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股未分配利润(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股留存收益(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股现金流量净额(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股企业自由现金流量(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股股东自由现金流量(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-indicators-per-share-table-tr">
                                                    <td class="fv-indicators-per-share-table-td-key">
                                                        ["每股指标", "报表格式", "报表类型", "报告期", "发布日期", "上市前后" ]
                                                    </td>
                                                    <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                                </tr>
                                            -->
                                        </tbody>
                                        <tfoot class="fv-indicators-per-share-table-tfoot">
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast05":
                            delete_uid = `agency-rating`;
                            loadModule(`agency-rating`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-agency-rating-title">
                                            机构评级
                                            <span data-link="fv-agency-rating-data-link">
                                                <a href="#more" data-uid="2910" data-turn-to-uid="node-uid-agency-rating-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-agency-rating-container">
                                        <!-- 机构评级 placeholder -->
                                        <div id="agency_rating_hs_container" class="fv-agency-rating-hs fv-agency-rating-hs-container" data-hs-container="data-agency-rating-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast06":
                            delete_uid = `stock-price-turnover`;
                            loadModule(`stock-price-turnover`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-stock-price-turnover-title">股价/成交量</p>
                                    </div>
                                    <section data-uid="stock-price-turnover">
                                        <div class="fv-stock-price-turnover-container">
                                            <div data-title-box="stock-title">
                                                <p data-title="big-title">
                                                    <span data-title-span="big-span" data-status="big-span"></span>
                                                    <span data-title-span="big-span"></span>
                                                    <span data-title-span="big-span"></span>
                                                </p>
                                                <p data-title="small-title">
                                                    今年以来涨跌幅
                                                    <span data-title-span="small-span"></span> 3个月涨跌幅
                                                    <span data-title-span="small-span"></span>
                                                    <br> 52周涨跌幅
                                                    <span data-title-span="small-span"></span> 52周Beta
                                                    <span data-title-span="small-span"></span>
                                                </p>
                                            </div>
                                            <!-- 股价/成交量 -->
                                            <div id="stock_price_turnover_hs_container" class="fv-stock-price-turnover-hs fv-stock-price-turnover-hs-container" data-hs-container="data-stock-price-turnover-container-uid"></div>
                                        </div>
                                    </section>
                                </section>
                            `;
                            break;
                        case "stockfast07":
                            delete_uid = `top-ten-shareholders`;
                            loadModule(`top-ten-shareholders`, true);// table
                            htmlstr += `
                                <section class="fv-module-box-10">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">
                                            前十大股东
                                            <span data-title-text="fv-top-ten-shareholders-data-title-text">
                                                (日期: <span data-text="fv-top-ten-shareholders-data-text"></span>)
                                            </span>
                                            <span data-link="fv-top-ten-shareholders-data-link">
                                                <a href="#more" data-uid="2681" data-turn-to-uid="node-uid-top-ten-shareholders-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-top-ten-shareholders-table">
                                        <thead class="fv-top-ten-shareholders-table-thead">
                                            <tr class="fv-top-ten-shareholders-table-tr">
                                                <td class="fv-top-ten-shareholders-table-td-title">机构或基金名称</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">持有数量(股)</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">占流通股比例(%)</td>
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
                        case "stockfast08":
                            delete_uid = `financing-and-margin-balance-difference-trend`;
                            loadModule(`financing-and-margin-balance-difference-trend`, false);// container
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-financing-and-margin-balance-difference-trend-title">
                                            融资余额与融券余额差值走势
                                            <span data-link="fv-financing-and-margin-balance-difference-trend-data-link">
                                                <a href="#more" data-uid="2876" data-turn-to-uid="node-uid-financing-and-margin-balance-difference-trend-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-financing-and-margin-balance-difference-trend-container">
                                        <!-- 融资余额与融券余额差值走势 placeholder -->
                                        <div id="financing_and_margin_balance_difference_trend_hs_container" class="fv-financing-and-margin-balance-difference-trend-hs fv-financing-and-margin-balance-difference-trend-hs-container" data-hs-container="data-financing-and-margin-balance-difference-trend-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast09":
                            delete_uid = `monthly-capital-flows-large-single-statistics`;
                            loadModule(`monthly-capital-flows-large-single-statistics`);// false
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-monthly-capital-flows-large-single-statistics-title">
                                            近一月资金流向大单统计
                                            <span data-link="fv-monthly-capital-flows-large-single-statistics-data-link">
                                                <a href="#more" data-uid="2872" data-turn-to-uid="node-uid-monthly-capital-flows-large-single-statistics-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-monthly-capital-flows-large-single-statistics-container">
                                        <!-- 近一月资金流向大单统计 placeholder -->
                                        <div id="monthly_capital_flows_large_single_statistics_hs_container" class="fv-monthly-capital-flows-large-single-statistics-hs fv-monthly-capital-flows-large-single-statistics-hs-container" data-hs-container="data-monthly-capital-flows-large-single-statistics-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast10":
                            delete_uid = `equity-pledge`;
                            loadModule(`equity-pledge`, true);
                            htmlstr += `
                                <section class="fv-module-box-10">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-equity-pledge-title" data-more="equity-pledge-title">
                                            股权质押
                                            <span data-link="fv-equity-pledge-data-link">
                                                <a href="#more" data-uid="2741" data-turn-to-uid="node-uid-equity-pledge-data">更多</a>
                                            </span>
                                        </p>
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
                        case "stockfast11":
                            delete_uid = `holdings-participation-situation`;
                            loadModule(`holdings-participation-situation`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-holdings-participation-situation-title" data-more="holdings-participation-situation-title">
                                            控股参股情况
                                            <span data-link="fv-holdings-participation-situation-data-link">
                                                <a href="#more" data-uid="2705" data-turn-to-uid="node-uid-holdings-participation-situation-data">更多</a>
                                            </span>
                                        </p>
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
                        case "stockfast12":
                            delete_uid = `changes-shareholding-executives`;
                            loadModule(`changes-shareholding-executives`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-changes-shareholding-executives-title" data-more="changes-shareholding-executives-title">
                                            高管持股变动情况
                                            <span data-link="fv-changes-shareholding-executives-data-link">
                                                <a href="#more" data-uid="62283" data-turn-to-uid="node-uid-changes-shareholding-executives-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-changes-shareholding-executives-table">
                                        <thead class="fv-changes-shareholding-executives-table-thead">
                                            <tr class="fv-changes-shareholding-executives-table-tr">
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动日期</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动人姓名</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动方向</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动股份数量(股)</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">成交均价(元)</td>
                                                <!-- <td class="fv-changes-shareholding-executives-table-td-title">变动比例(‰)</td> -->
                                                <td class="fv-changes-shareholding-executives-table-td-title">与董监高关系</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-changes-shareholding-executives-table-tbody" id="fv-changes-shareholding-executives-tbody"></tbody>
                                        <tfoot class="fv-changes-shareholding-executives-table-tfoot">
                                            <tr class="fv-changes-shareholding-executives-table-tr">
                                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast13":
                            delete_uid = `institutional-shareholding-change-statistics`;
                            loadModule(`institutional-shareholding-change-statistics`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-institutional-shareholding-change-statistics-title">
                                            机构持股变动统计
                                            <span data-link="fv-institutional-shareholding-change-statistics-data-link">
                                                <a href="#more" data-uid="2685" data-turn-to-uid="node-uid-institutional-shareholding-change-statistics-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-institutional-shareholding-change-statistics-container">
                                        <div id="institutional_shareholding_change_statistics_hs_container" class="fv-institutional-shareholding-change-statistics-hs fv-institutional-shareholding-change-statistics-hs-container" data-hs-container="data-institutional-shareholding-change-statistics-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "news":
                            delete_uid = `company-news`;
                            loadModule(`company-news`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-company-news-title" data-more="company-news-title">
                                            公司新闻
                                            <span data-link="fv-company-news-data-link">
                                                <a href="#more" data-uid="2906" data-turn-to-uid="node-uid-company-news-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-company-news-table">
                                        <thead class="fv-company-news-table-thead">
                                            <tr class="fv-company-news-table-tr">
                                                <td class="fv-company-news-table-td-title">日期</td>
                                                <td class="fv-company-news-table-td-title">标题</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-company-news-table-tbody" id="fv-company-news-tbody"></tbody>
                                        <tfoot class="fv-company-news-table-tfoot">
                                            <tr class="fv-company-news-table-tr">
                                                <td class="fv-company-news-table-td-value" data-value="data-fv-company-news"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "bulletion":
                            delete_uid = `company-announcements`;
                            loadModule(`company-announcements`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-company-announcements-title" data-more="company-announcements-title">
                                            公司公告
                                            <span data-link="fv-company-announcements-data-link">
                                                <a href="#more" data-uid="2898" data-turn-to-uid="node-uid-company-announcements-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-company-announcements-table">
                                        <thead class="fv-company-announcements-table-thead">
                                            <tr class="fv-company-announcements-table-tr">
                                                <td class="fv-company-announcements-table-td-title">日期</td>
                                                <td class="fv-company-announcements-table-td-title">标题</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-company-announcements-table-tbody" id="fv-company-announcements-tbody"></tbody>
                                        <tfoot class="fv-company-announcements-table-tfoot">
                                            <tr class="fv-company-announcements-table-tr">
                                                <td class="fv-company-announcements-table-td-value" data-value="data-fv-company-announcements"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "research":
                            delete_uid = `research-report`;
                            loadModule(`research-report`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-research-report-title" data-more="research-report-title">
                                            研究报告
                                            <span data-link="fv-research-report-data-link">
                                                <a href="#more" data-uid="2904" data-turn-to-uid="node-uid-research-report-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-research-report-table">
                                        <thead class="fv-research-report-table-thead">
                                            <tr class="fv-research-report-table-tr">
                                                <td class="fv-research-report-table-td-title">日期</td>
                                                <td class="fv-research-report-table-td-title">标题</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-research-report-table-tbody" id="fv-research-report-tbody">
                                            <!--
                                                <tr class="fv-research-report-table-tr">
                                                    <td class="fv-research-report-table-td-key">涉及概念</td>
                                                    <td class="fv-research-report-table-td-value" data-value="data-fv-events">
                                                        <div class="css-data-loading" data-loading="pure-css-data-loading">
                                                            CSS Loading...
                                                        </div>
                                                    </td>
                                                </tr>
                                            -->
                                        </tbody>
                                        <tfoot class="fv-research-report-table-tfoot">
                                            <tr class="fv-research-report-table-tr">
                                                <td class="fv-research-report-table-td-value" data-value="data-fv-research-report"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        default:
                            break;
                    }
                    div.insertAdjacentHTML(`beforeend`, `${htmlstr}`);// no needs container any more!
                    // sortable_module_container.insertAdjacentElement(`beforeend`, div);
                    container.insertAdjacentElement(`beforeend`, div);
                    // sortable_module_containers[1].insertAdjacentElement(`beforeend`, div);
                    // sortable_module_containers
                    setTimeout(function() {
                        // let delete_box = document.querySelector(`.fv-${delete_uid}-title`);
                        let delete_box = document.querySelector(`[data-title="fv-${delete_uid}-title"]`);
                        if (debug) {
                            console.log(`delete_uid = `, delete_uid);
                            console.log(`delete_box = `, delete_box);
                        }
                        delete_box.appendChild(sub_div);
                        // sidebar.js:942 Uncaught TypeError: Cannot read property 'appendChild' of null
                        if (delete_box !== null) {
                            delete_box.appendChild(sub_div);
                        }
                    }, 0);
                }
            );
        };
        return {
            init: (container_uid = ``, uids = [], debug = false) => {
                if (debug) {
                    console.log(`init uids = `, uids);
                    console.log(`init container_uid = `, container_uid);
                }
                dropAll(container_uid, uids);
            }
        };
    }
)();

// cookies & localStorage & sessionStorage ??? API
// const uids = ["stockfast01","stockfast02","stockfast03","stockfast04","stockfast05","stockfast06","stockfast07","stockfast08","stockfast09","stockfast10","stockfast11","stockfast12","stockfast13","news","bulletion","research"];


/**
 * CutomizeModulesLoader
 * @description load each module once & check is exist before drop it
 * @author xgqfrms
 * @argument module_uid's
 *
 */


// IIFE === Closure!
STOCK_F9_FV.Modules.modulesLoader = STOCK_F9_FV.Modules.modulesLoader ||(
    (debug = false) => {
        // const this_name = STOCK_F9_FV.Modules.modulesLoader;
        const consoles = {
            css: `
                color: #f0f;
                font-size: 23px;
            `,
            css1: `
                color: #f00;
                font-size: 23px;
            `,
            css2: `
                color: #ff0;
                font-size: 23px;
            `,
            css3: `
                color: #0ff;
                font-size: 23px;
            `,
        };
        const console_css = `
            color: #f0f;
            font-size: 23px;
        `;
        const console_css1 = `
            color: #f00;
            font-size: 23px;
        `;
        const console_css2 = `
            color: #ff0;
            font-size: 23px;
        `;
        const console_css3 = `
            color: #0ff;
            font-size: 23px;
        `;
        let module_datas = document.querySelectorAll(`[data-icon-uid*="module-data"]`);
        let module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
        let module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);
        let drop_counter = 0;
        return {
            isExistCheck: function(uid=``){
                // isExistCheck
            },
            loadAllModules: () => {
                // loadAllModules
            },
            deleteModule: (dom_uid=``, script_uid=``) => {
                // script.js ??? excute sequence
                // remove DOM
                // remove css
                if (debug) {
                    console.log(`dom_uid = `, dom_uid);
                }
                // dom_uid = delete-module-stockfast01
                let div_uid = dom_uid.replace(`delete`, `div`);
                // let div_uid = dom_uid.substr(14);
                // let this.target.dataset.deleteModuleUid;
                let tdu = document.querySelector(`[data-div-module-uid="${div_uid}"]`);
                // tdu = document.querySelector(`[data-div-module-uid="div-module-stockfast01"]`);
                // module_container.removeChild(tdu);
                // alert(`Are sure delete this module?`);
                // conform !== confirm
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
                        },
                    }
                })
                .then((value) => {
                    let result = value || ``;
                    // let result = window.confirm(`你确定要删除此模块?`);
                    if (debug) {
                        console.log(`value = `, value)
                    }
                    // true
                    if(result === "ok"){
                        // window.open("exit.html", "Thanks for Visiting!");
                        // alert(`just remove this module!`);
                        // remove DOM node ???
                        // [data-delete-script-dom="delete-script-dom-stockfast01"]
                        // module_container.removeChild(tdu);
                        if (debug) {
                            console.log(`this = `, this);
                            // Window
                            console.log(`tdu = `, tdu);
                            console.log(`tdu.parentElement = `, tdu.parentElement);
                            console.log(`tdu.parentNode = `, tdu.parentNode);
                            console.log(`tdu.parentNode.id  = `, tdu.parentNode.id );
                        }
                        if (tdu.parentNode.id === "left-sortable-container") {
                            module_containers[0].removeChild(tdu);
                            swal({
                                title: "已删除此模块",
                                text: "1秒后自动关闭",// 1秒后自动关闭 / 自动关闭中...
                                icon: "success",
                                buttons: false,
                                timer: 1000
                                // button: {
                                //     text: "确定",
                                //     value: "ok",
                                //     // value: true,
                                //     visible: true,
                                //     className: "",
                                //     closeModal: true
                                // }
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
                                // button: {
                                //     text: "确定",
                                //     value: "ok",
                                //     // value: true,
                                //     visible: true,
                                //     className: "",
                                //     closeModal: true
                                // }
                            });
                        }else{
                            console.log(`Coming soon... `, tdu.parentNode);
                        }
                    }else{
                        // alert(`已取消删除此模块!`);
                        swal({
                            title: "已取消删除此模块!",
                            text: "1秒后自动关闭",
                            // text: "你确定要删除此模块?",
                            icon: "success",
                            buttons: false,
                            timer: 1000
                            // button: {
                            //     // text: "确定",
                            //     // value: "ok",
                            //     // value: true,
                            //     // visible: true,
                            //     // className: "",
                            //     // closeModal: true
                            // }
                        });
                    }
                    // value =  ok
                    // switch (value) {
                    //     case "cancel":
                    //         swal("已取消删除此模块!", "success");
                    //         break;
                    //     case "ok":
                    //         swal("已删除此模块?", "success");
                    //         break;
                    //     default:
                    //         swal("Got away safely!");
                    // }
                });
            },
            // api: `https://developer.mozilla.org/API`,
            dragstart: function(e) {
                // e.preventDefault();
                if (debug) {
                    console.log(`e = \n`, e);
                    console.log(`e.target = \n`, e.target);
                    console.log(`e.target.dataset = \n`, e.target.dataset);
                    console.log(`e.target.dataset.iconUid = %c ${e.target.dataset.iconUid}\n`, console_css);
                    console.log(`e.target.dataset.droppedUid = %c ${e.target.dataset.iconUid}\n`, console_css);
                }
                // iconUid
                let iconUid = e.target.dataset.iconUid.substr(12),
                    droppedUid = e.target.dataset.droppedUid ? e.target.dataset.droppedUid.substr(12) : ``;
                let uid = iconUid ? iconUid : droppedUid;
                if (debug) {
                    console.log(`uid `, uid);
                    console.log(`iconUid  `, iconUid);
                    console.log(`droppedUid `, droppedUid);
                }
                // or droppedUid="module-data-stockfast01";
                // or new dragstart function ???
                e.effectAllowed = `move`;
                e.dataTransfer.setData("text/plain", uid);
                // e.dataTransfer.setData("xyz", uid);
                // event.originalEvent.dataTransfer.setData('text/plain', uid);
                // console.log(`%c dragstart & e.dataTransfer = \n`, console_css3, e.dataTransfer);
            },
            dragend: function(e) {
                e.preventDefault();
            },
            dragenter: (e) => {
                e.preventDefault();
                return true;
            },
            dragover: (e) => {
                if (debug) {
                    console.log(`%c dragOver = `, console_css1, e.target.id);
                    console.log(`e.target = `, e.target, e);
                }
                if (drop_counter === 0) {
                    let info_div = document.createElement(`div`);
                    info_div.innerHTML = "请将模块拖拽到灰色区域内!";
                    info_div.setAttribute(`id`, `drop_info_div`);
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
                if (debug) {
                    // console.log(`drop e = %c ${e}\n`, console_css1, e);
                    console.log(`drop e.target = %c ${e.target}\n`, console_css1, e.target);
                    console.log(`drop e.target.dataset = %c ${e.target.dataset}\n`, console_css1, e.target.dataset);
                }
                // let drop_container = e.target;
                let drop_container_uid = e.target.dataset.sortableBox;
                if (drop_counter === 1) {
                    let drop_info_div = document.querySelector(`#drop_info_div`);
                    drop_counter = 0;
                }
                let uid = e.dataTransfer.getData("text/plain");
                if (debug) {
                    console.log(`drop & uid = %c${uid}\n`, console_css1);
                    // ??? bug
                }
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
                // sub img ???
                sub_div.firstChild.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.deleteModuleUid;
                    if (debug) {
                        console.log(`e.target.dataset `, e.target.dataset);
                        console.log(`e.target.dataset.deleteModuleUid `, e.target.dataset.deleteModuleUid);
                        console.log(`uid`, uid);
                        console.log(`e.target`, e.target);
                    }
                    STOCK_F9_FV.Modules.modulesLoader.deleteModule(uid);
                });
                // icons ??? sub div ???
                div.dataset.divModuleUid = `div-module-${uid}`;
                div.dataset.droppedUid=`module-data-${uid}`;
                switch (uid) {
                    case "stockfast01":
                        div.classList.add(`fv-left-box`);
                        break;
                    case "stockfast02":
                        div.classList.add(`fv-right-box`);
                        break;
                    case "stockfast03":
                        div.classList.add(`fv-right-box`);
                        break;
                    case "stockfast04":
                        div.classList.add(`fv-left-box`);
                        break;
                    case "stockfast05":
                        div.classList.add(`fv-right-box`);
                        break;
                    case "stockfast06":
                        div.classList.add(`fv-right-box`);
                        break;
                    case "stockfast07":
                        div.classList.add(`fv-all-box`);
                        break;
                    case "stockfast08":
                        div.classList.add(`fv-center-box`);
                        break;
                    case "stockfast09":
                        div.classList.add(`fv-center-box`);
                        break;
                    case "stockfast10":
                        div.classList.add(`fv-all-box`);
                        break;
                    case "stockfast11":
                        div.classList.add(`fv-center-box`);
                        break;
                    case "stockfast12":
                        div.classList.add(`fv-center-box`);
                        break;
                    case "stockfast13":
                        div.classList.add(`fv-right-box`);
                        break;
                    case "news":
                        div.classList.add(`fv-center-box`);
                        break;
                    case "bulletion":
                        div.classList.add(`fv-center-box`);
                        break;
                    case "research":
                        div.classList.add(`fv-center-box`);
                        break;
                    default:
                        break;
                }
                let module_exist_checker = ``;
                if (debug) {
                    console.log(`uid =\n`, uid, typeof uid);
                    // uid stockfast01 string
                }
                if (typeof(uid) === "string" && uid.length < 12) {
                    // "stockfast13".length;
                    // 11 => 12
                    module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`)
                }else{
                    // disable checker
                    module_exist_checker = null;
                }
                if (debug) {
                    console.log(`module_exist_checker =\n`, module_exist_checker, typeof module_exist_checker);
                }
                //
                /**
                 * @author xgqfrms
                 * @description load Module (2017.11.01)
                 * @param {* String} module_uid_name
                 * @param {* Boolean} isTable
                 */
                const loadModule = (module_uid_name=``, isTable=`false`) => {
                    if (debug) {
                        console.log(`module_uid_name = \n`, module_uid_name);
                        console.log(`isTable = \n`, isTable);
                        if (isTable === true) {
                            console.log(`document.querySelector('.fv-${module_uid_name}-table')`);
                        }else{
                            console.log(`document.querySelector('.fv-${module_uid_name}-container')`);
                        }
                    }
                    // setTimeout & IIFE & Closure
                    setTimeout(function() {
                        ((module_uid_name, isTable) => {
                            let box = (isTable === true)
                                ? document.querySelector(`.fv-${module_uid_name}-table`)
                                : document.querySelector(`.fv-${module_uid_name}-container`),
                                // box = document.querySelector(`.fv-top-ten-shareholders-table`),
                                link_css = document.createElement(`link`),
                                script_dom = document.createElement(`script`);
                            if (debug) {
                                console.log(`box = \n`, box);
                            }
                            link_css.setAttribute(`rel`, `stylesheet`);
                            // link_css.setAttribute(`href`, `./build/css/${module_uid_name}.min.css`);
                            let css_module_skin = `white-skin`;
                            if (window.STOCK_Skin === "black") {
                                css_module_skin = "black-skin";
                            }else{
                                // do nothing
                            }
                            link_css.setAttribute(`href`, `./css/${css_module_skin}/modules/${module_uid_name}.css`);
                            link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
                            script_dom.dataset.deleteScriptDom = `delete-script-dom-${uid}`;
                            // script_dom.setAttribute(`src`, `./Modules/${module_uid_name}.js`);
                            script_dom.setAttribute(`src`, `./build/js/${module_uid_name}.min.js`);
                            if (box !== null) {
                                box.insertAdjacentElement(`afterend`, link_css);
                            }
                            link_css.insertAdjacentElement(`afterend`, script_dom);
                        })(module_uid_name, isTable);
                    }, 0);
                };
                if (module_exist_checker === null) {
                    let htmlstr = ``;
                    let delete_uid = ``;
                    switch (uid) {
                        case "stockfast01":
                            delete_uid = `important-infos`;
                            loadModule(`important-infos`, true);
                            htmlstr += `
                                <section class="fv-module-box-3">
                                    <!-- 重要信息 -->
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-important-infos-title">
                                            重要信息
                                            <span data-link="fv-important-infos-data-link">
                                                <a href="#more" data-uid="2172" data-turn-to-uid="node-uid-important-infos-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-important-infos-table">
                                        <thead class="fv-important-infos-table-thead">
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-title">重要信息</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-important-infos-table-tbody">
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">涉及概念</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">主营业务</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key" data-alias="52周波动率">3个月波动率(%)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key" data-alias="日均成交量(3个月)">近90天日均成交量(万股)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-important-infos-table-tr">
                                                    <td class="fv-important-infos-table-td-key">总市值</td>
                                                    <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                                </tr>
                                            -->
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">净资产(万元)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">总股本(万股)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">流通股本(万股)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">股息率(%)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-important-infos-table-tr">
                                                    <td class="fv-important-infos-table-td-key">机构家数</td>
                                                    <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                                </tr>
                                            -->
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key" data-alias="前十大机构持有">机构持股占比(%)</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-important-infos-table-tr">
                                                    <td class="fv-important-infos-table-td-key">分析师关注度</td>
                                                    <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                                </tr>
                                            -->
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">目标价格</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-key">综合评级</td>
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="fv-important-infos-table-tfoot">
                                            <tr class="fv-important-infos-table-tr">
                                                <td class="fv-important-infos-table-td-value" data-value="data-fv-infos"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast02":
                            delete_uid = `recent-important-events`;
                            loadModule(`recent-important-events`, true);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-recent-important-events-title">
                                            近期重要事项
                                        </p>
                                    </div>
                                    <table class="fv-recent-important-events-table">
                                        <thead class="fv-recent-important-events-table-thead">
                                            <tr class="fv-recent-important-events-table-tr">
                                                <td class="fv-recent-important-events-table-td-title">重要信息</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-recent-important-events-table-tbody" id="fv-recent-important-tbody">
                                            <!--
                                                <tr class="fv-recent-important-events-table-tr">
                                                    <td class="fv-recent-important-events-table-td-key">涉及概念</td>
                                                    <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events">
                                                        <div class="css-data-loading" data-loading="pure-css-data-loading">
                                                            CSS Loading...
                                                        </div>
                                                    </td>
                                                </tr>
                                            -->
                                        </tbody>
                                        <tfoot class="fv-recent-important-events-table-tfoot">
                                            <tr class="fv-recent-important-events-table-tr">
                                                <td class="fv-recent-important-events-table-td-value" data-value="data-fv-events"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast03":
                            delete_uid = `profit-forecast`;
                            loadModule(`profit-forecast`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-profit-forecast-title">
                                            盈利预测
                                            <span data-link="fv-profit-forecast-data-link">
                                                <a href="#more" data-uid="2908" data-turn-to-uid="node-uid-profit-forecast-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-profit-forecast-container">
                                        <div id="profit_forecast_hs_container" class="fv-profit-forecast-hs fv-profit-forecast-hs-container" data-hs-container="data-profit-forecast-container-uid">
                                            <!--  -->
                                        </div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast04":
                            delete_uid = `indicators-per-share`;
                            loadModule(`indicators-per-share`, true);
                            htmlstr += `
                                <section class="fv-module-box-3">
                                    <div class="fv-indicators-per-share-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-indicators-per-share-title">
                                            每股指标
                                            <span data-link="fv-indicators-per-share-data-link">
                                                <a href="#more" data-uid="2846" data-turn-to-uid="node-uid-indicators-per-share-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-indicators-per-share-table">
                                        <thead class="fv-indicators-per-share-table-thead">
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-title">每股指标</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-indicators-per-share-table-tbody">
                                            <!-- 上市公司公告 -->
                                            <tr class="fv-indicators-per-share-table-tr" data-tr="tr-background">
                                                <td class="fv-indicators-per-share-table-td-key" title="fbrq 发布日期">上市公司公告</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-基本(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-稀释(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-扣除／基本(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key" data-alias="每股收益-扣除／稀释(元)">每股收益-扣除／稀释(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key" data-alias="每股净资产(元)">每股净资产(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股经营活动产生的现金流量净额(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <!-- class="fv-indicators-per-share-table-tr-spaces"  -->
                                            <tr data-tr="tr-spaces">
                                                <!-- <td></td>
                                                <td></td> -->
                                            </tr>
                                            <!-- 聚源计算 -->
                                            <tr class="fv-indicators-per-share-table-tr" data-tr="tr-background">
                                                <td class="fv-indicators-per-share-table-td-key">聚源计算</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-期末股本摊薄(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股收益-扣除/期末股本摊薄(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股营业总收入(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股营业收入(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股息税前利润(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key" data-alias="每股资本公积">每股资本公积(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股盈余公积(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股未分配利润(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股留存收益(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股现金流量净额(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股企业自由现金流量(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-key">每股股东自由现金流量(元)</td>
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                            <!--
                                                <tr class="fv-indicators-per-share-table-tr">
                                                    <td class="fv-indicators-per-share-table-td-key">
                                                        ["每股指标", "报表格式", "报表类型", "报告期", "发布日期", "上市前后" ]
                                                    </td>
                                                    <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                                </tr>
                                            -->
                                        </tbody>
                                        <tfoot class="fv-indicators-per-share-table-tfoot">
                                            <tr class="fv-indicators-per-share-table-tr">
                                                <td class="fv-indicators-per-share-table-td-value" data-value="data-fv-indicators-per-share"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast05":
                            delete_uid = `agency-rating`;
                            loadModule(`agency-rating`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-agency-rating-title">
                                            机构评级
                                            <span data-link="fv-agency-rating-data-link">
                                                <a href="#more" data-uid="2910" data-turn-to-uid="node-uid-agency-rating-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-agency-rating-container">
                                        <!-- 机构评级 placeholder -->
                                        <div id="agency_rating_hs_container" class="fv-agency-rating-hs fv-agency-rating-hs-container" data-hs-container="data-agency-rating-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast06":
                            delete_uid = `stock-price-turnover`;
                            loadModule(`stock-price-turnover`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-stock-price-turnover-title">股价/成交量</p>
                                    </div>
                                    <section data-uid="stock-price-turnover">
                                        <div class="fv-stock-price-turnover-container">
                                            <div data-title-box="stock-title">
                                                <p data-title="big-title">
                                                    <span data-title-span="big-span" data-status="big-span"></span>
                                                    <span data-title-span="big-span"></span>
                                                    <span data-title-span="big-span"></span>
                                                </p>
                                                <p data-title="small-title">
                                                    今年以来涨跌幅
                                                    <span data-title-span="small-span"></span> 3个月涨跌幅
                                                    <span data-title-span="small-span"></span>
                                                    <br> 52周涨跌幅
                                                    <span data-title-span="small-span"></span> 52周Beta
                                                    <span data-title-span="small-span"></span>
                                                </p>
                                            </div>
                                            <!-- 股价/成交量 -->
                                            <div id="stock_price_turnover_hs_container" class="fv-stock-price-turnover-hs fv-stock-price-turnover-hs-container" data-hs-container="data-stock-price-turnover-container-uid"></div>
                                        </div>
                                    </section>
                                </section>
                            `;
                            break;
                        case "stockfast07":
                            delete_uid = `top-ten-shareholders`;
                            loadModule(`top-ten-shareholders`, true);// table
                            htmlstr += `
                                <section class="fv-module-box-10">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">
                                            前十大股东
                                            <span data-title-text="fv-top-ten-shareholders-data-title-text">
                                                (日期: <span data-text="fv-top-ten-shareholders-data-text"></span>)
                                            </span>
                                            <span data-link="fv-top-ten-shareholders-data-link">
                                                <a href="#more" data-uid="2681" data-turn-to-uid="node-uid-top-ten-shareholders-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-top-ten-shareholders-table">
                                        <thead class="fv-top-ten-shareholders-table-thead">
                                            <tr class="fv-top-ten-shareholders-table-tr">
                                                <td class="fv-top-ten-shareholders-table-td-title">机构或基金名称</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">持有数量(股)</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">占流通股比例(%)</td>
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
                        case "stockfast08":
                            delete_uid = `financing-and-margin-balance-difference-trend`;
                            loadModule(`financing-and-margin-balance-difference-trend`, false);// container
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-financing-and-margin-balance-difference-trend-title">
                                            融资余额与融券余额差值走势
                                            <span data-link="fv-financing-and-margin-balance-difference-trend-data-link">
                                                <a href="#more" data-uid="2876" data-turn-to-uid="node-uid-financing-and-margin-balance-difference-trend-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-financing-and-margin-balance-difference-trend-container">
                                        <!-- 融资余额与融券余额差值走势 placeholder -->
                                        <div id="financing_and_margin_balance_difference_trend_hs_container" class="fv-financing-and-margin-balance-difference-trend-hs fv-financing-and-margin-balance-difference-trend-hs-container" data-hs-container="data-financing-and-margin-balance-difference-trend-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast09":
                            delete_uid = `monthly-capital-flows-large-single-statistics`;
                            loadModule(`monthly-capital-flows-large-single-statistics`);// false
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-monthly-capital-flows-large-single-statistics-title">
                                            近一月资金流向大单统计
                                            <span data-link="fv-monthly-capital-flows-large-single-statistics-data-link">
                                                <a href="#more" data-uid="2872" data-turn-to-uid="node-uid-monthly-capital-flows-large-single-statistics-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-monthly-capital-flows-large-single-statistics-container">
                                        <!-- 近一月资金流向大单统计 placeholder -->
                                        <div id="monthly_capital_flows_large_single_statistics_hs_container" class="fv-monthly-capital-flows-large-single-statistics-hs fv-monthly-capital-flows-large-single-statistics-hs-container" data-hs-container="data-monthly-capital-flows-large-single-statistics-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "stockfast10":
                            delete_uid = `equity-pledge`;
                            loadModule(`equity-pledge`, true);
                            htmlstr += `
                                <section class="fv-module-box-10">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-equity-pledge-title" data-more="equity-pledge-title">
                                            股权质押
                                            <span data-link="fv-equity-pledge-data-link">
                                                <a href="#more" data-uid="2741" data-turn-to-uid="node-uid-equity-pledge-data">更多</a>
                                            </span>
                                        </p>
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
                        case "stockfast11":
                            delete_uid = `holdings-participation-situation`;
                            loadModule(`holdings-participation-situation`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-holdings-participation-situation-title" data-more="holdings-participation-situation-title">
                                            控股参股情况
                                            <span data-link="fv-holdings-participation-situation-data-link">
                                                <a href="#more" data-uid="2705" data-turn-to-uid="node-uid-holdings-participation-situation-data">更多</a>
                                            </span>
                                        </p>
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
                        case "stockfast12":
                            delete_uid = `changes-shareholding-executives`;
                            loadModule(`changes-shareholding-executives`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-changes-shareholding-executives-title" data-more="changes-shareholding-executives-title">
                                            高管持股变动情况
                                            <span data-link="fv-changes-shareholding-executives-data-link">
                                                <a href="#more" data-uid="62283" data-turn-to-uid="node-uid-changes-shareholding-executives-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-changes-shareholding-executives-table">
                                        <thead class="fv-changes-shareholding-executives-table-thead">
                                            <tr class="fv-changes-shareholding-executives-table-tr">
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动日期</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动人姓名</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动方向</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">变动股份数量(股)</td>
                                                <td class="fv-changes-shareholding-executives-table-td-title">成交均价(元)</td>
                                                <!-- <td class="fv-changes-shareholding-executives-table-td-title">变动比例(‰)</td> -->
                                                <td class="fv-changes-shareholding-executives-table-td-title">与董监高关系</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-changes-shareholding-executives-table-tbody" id="fv-changes-shareholding-executives-tbody"></tbody>
                                        <tfoot class="fv-changes-shareholding-executives-table-tfoot">
                                            <tr class="fv-changes-shareholding-executives-table-tr">
                                                <td class="fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "stockfast13":
                            delete_uid = `institutional-shareholding-change-statistics`;
                            loadModule(`institutional-shareholding-change-statistics`);
                            htmlstr += `
                                <section class="fv-module-box-7">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-institutional-shareholding-change-statistics-title">
                                            机构持股变动统计
                                            <span data-link="fv-institutional-shareholding-change-statistics-data-link">
                                                <a href="#more" data-uid="2685" data-turn-to-uid="node-uid-institutional-shareholding-change-statistics-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <div class="fv-institutional-shareholding-change-statistics-container">
                                        <div id="institutional_shareholding_change_statistics_hs_container" class="fv-institutional-shareholding-change-statistics-hs fv-institutional-shareholding-change-statistics-hs-container" data-hs-container="data-institutional-shareholding-change-statistics-container-uid"></div>
                                    </div>
                                </section>
                            `;
                            break;
                        case "news":
                            delete_uid = `company-news`;
                            loadModule(`company-news`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-company-news-title" data-more="company-news-title">
                                            公司新闻
                                            <span data-link="fv-company-news-data-link">
                                                <a href="#more" data-uid="2906" data-turn-to-uid="node-uid-company-news-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-company-news-table">
                                        <thead class="fv-company-news-table-thead">
                                            <tr class="fv-company-news-table-tr">
                                                <td class="fv-company-news-table-td-title">日期</td>
                                                <td class="fv-company-news-table-td-title">标题</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-company-news-table-tbody" id="fv-company-news-tbody"></tbody>
                                        <tfoot class="fv-company-news-table-tfoot">
                                            <tr class="fv-company-news-table-tr">
                                                <td class="fv-company-news-table-td-value" data-value="data-fv-company-news"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "bulletion":
                            delete_uid = `company-announcements`;
                            loadModule(`company-announcements`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-company-announcements-title" data-more="company-announcements-title">
                                            公司公告
                                            <span data-link="fv-company-announcements-data-link">
                                                <a href="#more" data-uid="2898" data-turn-to-uid="node-uid-company-announcements-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-company-announcements-table">
                                        <thead class="fv-company-announcements-table-thead">
                                            <tr class="fv-company-announcements-table-tr">
                                                <td class="fv-company-announcements-table-td-title">日期</td>
                                                <td class="fv-company-announcements-table-td-title">标题</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-company-announcements-table-tbody" id="fv-company-announcements-tbody"></tbody>
                                        <tfoot class="fv-company-announcements-table-tfoot">
                                            <tr class="fv-company-announcements-table-tr">
                                                <td class="fv-company-announcements-table-td-value" data-value="data-fv-company-announcements"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        case "research":
                            delete_uid = `research-report`;
                            loadModule(`research-report`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-research-report-title" data-more="research-report-title">
                                            研究报告
                                            <span data-link="fv-research-report-data-link">
                                                <a href="#more" data-uid="2904" data-turn-to-uid="node-uid-research-report-data">更多</a>
                                            </span>
                                        </p>
                                    </div>
                                    <table class="fv-research-report-table">
                                        <thead class="fv-research-report-table-thead">
                                            <tr class="fv-research-report-table-tr">
                                                <td class="fv-research-report-table-td-title">日期</td>
                                                <td class="fv-research-report-table-td-title">标题</td>
                                            </tr>
                                        </thead>
                                        <tbody class="fv-research-report-table-tbody" id="fv-research-report-tbody">
                                            <!--
                                                <tr class="fv-research-report-table-tr">
                                                    <td class="fv-research-report-table-td-key">涉及概念</td>
                                                    <td class="fv-research-report-table-td-value" data-value="data-fv-events">
                                                        <div class="css-data-loading" data-loading="pure-css-data-loading">
                                                            CSS Loading...
                                                        </div>
                                                    </td>
                                                </tr>
                                            -->
                                        </tbody>
                                        <tfoot class="fv-research-report-table-tfoot">
                                            <tr class="fv-research-report-table-tr">
                                                <td class="fv-research-report-table-td-value" data-value="data-fv-research-report"></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            `;
                            break;
                        default:
                            break;
                    }
                    div.insertAdjacentHTML(`beforeend`, `${htmlstr}`);// no needs container any more!
                    if (drop_container_uid === "left-sortable-box") {
                        // module_container.insertAdjacentElement(`beforeend`, div);
                        module_containers[0].insertAdjacentElement(`beforeend`, div);
                    }else if (drop_container_uid === "right-sortable-box") {
                        module_containers[1].insertAdjacentElement(`beforeend`, div);
                    }else{
                        if (debug) {
                            console.log(`Hold on, it's coming soon...`);
                        }
                    }
                    setTimeout(function() {
                        let delete_box = document.querySelector(`[data-title="fv-${delete_uid}-title"]`);
                        if (debug) {
                            console.log(`delete_uid = `, delete_uid);
                            console.log(`delete_box = `, delete_box);
                        }
                        if (delete_box !== null) {
                            delete_box.appendChild(sub_div);
                        }
                    }, 0);
                }else{
                    try {
                        swal({
                            title: "此模块已存在!",
                            // text: "1秒后自动关闭",
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
                                // value: "ok",
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
                            console.log(`%c Sorry, some errors occurred!`, `color: #f0f`);
                        }
                    }
                }
            },
            init: function() {
                if (debug) {
                    console.log(`module_datas = `, module_datas, Array.isArray(module_datas));// false
                }
                for (let i = 0; i < module_datas.length; i++) {
                    module_datas[i].addEventListener(`dragstart`, STOCK_F9_FV.Modules.modulesLoader.dragstart);
                }
                if (debug) {
                    console.log(`module_containers`, module_containers);
                }
                for (let i = 0; i < module_containers.length; i++) {
                    module_containers[i].addEventListener(`dragenter`, STOCK_F9_FV.Modules.modulesLoader.dragenter);
                    module_containers[i].addEventListener(`dragover`, STOCK_F9_FV.Modules.modulesLoader.dragover);
                    module_containers[i].addEventListener(`dragleave`, STOCK_F9_FV.Modules.modulesLoader.dragleave);
                    // dragleave
                    module_containers[i].addEventListener(`drop`, STOCK_F9_FV.Modules.modulesLoader.drop);
                }
            }
        };
    }
)();

// init
setTimeout(function() {
    STOCK_F9_FV.Modules.modulesLoader.init();
}, 0);


/**
 * @description todo & enhancement
 * localStorage
 * application cache
 * webSQL (sqlite)
 * MongoDB
 * cookies
 * sessionStorage
 *
 */

/*

const saveToLocalStorage = () => {
    // write
};

const readFromLocalStorage = () => {
    // read
};


*/








