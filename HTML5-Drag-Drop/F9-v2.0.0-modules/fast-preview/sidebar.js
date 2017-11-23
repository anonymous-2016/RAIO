// "use strict";
// recentImportantEvents & Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};



const debug = false;
// const debug = false;


// tabs
let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`);
let divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);

for (let i = 0; i < lis.length; i++) {
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
            let arr = [0,1,2];
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
    // console.log(`btn = ${container.classList.contains("h5-dnd-nav-container-normal")}`);
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


// init ???
window.onload = () => {
    let btn_universal = document.querySelector(`[data-uid="universal"]`),
        btn_customize = document.querySelector(`[data-uid="customize"]`),
        btn_module_setting = document.querySelector(`[data-uid="module-setting"]`);
    let a_modules = document.querySelector(`[data-uid="modules-a-link"]`);
    btn_universal.onclick = (e) => {
        // data-title="通用"
        // alert(`e.target.dataset.title = ${e.target.dataset.title} \n this click will call loadAllModules()!`);
        const sortable_module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
        // init & empty
        sortable_module_container.innerHTML = "";
        STOCK_F9_FV.Modules.loadAllModules.init();
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
        const sortable_module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
        // init & empty
        sortable_module_container.innerHTML = "";
        a_modules.click();
        // H5 DnD modules
    }
    /* event pop ???  */
    btn_module_setting.addEventListener(`click`, (e) => {
        // data-title="模块设置"
        const title = `Sorry for that, it still in developing!`;
        // alert(`e.target.dataset.title = ${e.target.dataset.title} \n\n\n\n\n\n\n ${title} \n\n\n\n\n\n\n Coming soon ...`);
        alert(`😃😃😃Coming soon ... 😧😒😟`);
    });
    btn_module_setting.addEventListener(`click`, (e) => {
        let debug = true;
        if (debug) {
            console.log(`e.target.dataset = ${e.target.dataset}`);
            console.log(`e.target.dataset.title = ${e.target.dataset.title}`);
        }
    });
};



/**
 * loadAllModules
 * @description initial all modules
 * @argument dom_container_uid
 * @param {* Array} uids
 * @param {* Boolean} debug
 */


STOCK_F9_FV.Modules.loadAllModules = STOCK_F9_FV.Modules.loadAllModules || ((uids = ["stockfast01","stockfast02","stockfast03","stockfast04","stockfast05","stockfast06","stockfast07","stockfast08","stockfast09","stockfast10","stockfast11","stockfast12","stockfast13","news","bulletion","research"], debug = false) => {
    // const module_container = document.querySelector(`[data-body-container="data-body-container"]`);
    const sortable_module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
    // init & empty
    // sortable_module_container.innerHTML = "";
    let datas = uids;
    if (debug) {
        console.log(`uids = `, uids);
    }
    const dropAll = (uids) => {
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
                        console.log(`uid`, uid);
                    }
                    STOCK_F9_FV.Modules.modulesLoader.deleteModule(uid);
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
                            link_css.setAttribute(`href`, `./Modules/${module_uid_name}.css`);
                            link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
                            script_dom.dataset.deleteScriptDom = `delete-script-dom-${uid}`;
                            script_dom.setAttribute(`src`, `./Modules/${module_uid_name}.js`);
                            box.insertAdjacentElement(`afterend`, link_css);
                            link_css.insertAdjacentElement(`afterend`, script_dom);
                        })(module_uid_name, isTable);
                    }, 0);
                };
                // show modules
                let htmlstr = ``;
                let delete_uid = ``;
                switch (uid) {
                    case "stockfast01":
                        delete_uid = `important-infos`;
                        loadModule(`important-infos`, true);
                        htmlstr += `
                            <section class="fv-module-box-3">
                                <!-- 重要信息 -->
                                <div class="fv-important-infos-title-box">
                                    <p class="fv-important-infos-title">重要信息</p>
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
                                <div class="fv-recent-important-events-title-box">
                                    <p class="fv-recent-important-events-title">近期重要事项</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                                <div class="fv-profit-forecast-title-box">
                                    <p class="fv-profit-forecast-title">盈利预告</p>
                                </div>
                                <div class="fv-profit-forecast-container">
                                    <!-- 盈利预告 placeholder -->
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
                                    <p class="fv-indicators-per-share-title">每股指标</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
                                </div>
                                <table class="fv-indicators-per-share-table">
                                    <thead class="fv-indicators-per-share-table-thead">
                                        <tr class="fv-indicators-per-share-table-tr">
                                            <td class="fv-indicators-per-share-table-td-title">每股指标</td>
                                        </tr>
                                    </thead>
                                    <tbody class="fv-indicators-per-share-table-tbody">
                                        <!-- 上市公司公告 -->
                                        <tr class="fv-indicators-per-share-table-tr">
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
                                        <!-- 聚源计算 -->
                                        <tr class="fv-indicators-per-share-table-tr">
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
                                <div class="fv-agency-rating-title-box">
                                    <p class="fv-agency-rating-title">机构评级</p>
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
                                <!-- <section data-uid="stock-price-turnover"></section> -->
                                <div class="fv-stock-price-turnover-title-box">
                                    <p class="fv-stock-price-turnover-title">股价/成交量</p>
                                </div>
                                <div class="fv-stock-price-turnover-container">
                                    <!-- 盈利预告 placeholder -->
                                    <div id="stock_price_turnover_hs_container" class="fv-stock-price-turnover-hs fv-stock-price-turnover-hs-container" data-hs-container="data-stock-price-turnover-container-uid"></div>
                                </div>
                            </section>
                        `;
                        break;
                    case "stockfast07":
                        delete_uid = `top-ten-shareholders`;
                        loadModule(`top-ten-shareholders`, true);// table
                        htmlstr += `
                            <section class="fv-module-box-10">
                                <div class="fv-top-ten-shareholders-title-box">
                                    <p class="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">前十大股东</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                    case "stockfast08":
                        delete_uid = `financing-and-margin-balance-difference-trend`;
                        loadModule(`financing-and-margin-balance-difference-trend`, false);// container
                        htmlstr += `
                            <section class="fv-module-box-7">
                                <!-- <section data-uid="financing-and-margin-balance-difference-trend"></section> -->
                                <div class="fv-financing-and-margin-balance-difference-trend-title-box">
                                    <p class="fv-financing-and-margin-balance-difference-trend-title">融资余额与融券余额差值走势</p>
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
                                <div class="fv-monthly-capital-flows-large-single-statistics-title-box">
                                    <p class="fv-monthly-capital-flows-large-single-statistics-title">近一月资金流向大单统计</p>
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
                            <section class="fv-module-box-10" data-class="test">
                                <div class="fv-equity-pledge-title-box">
                                    <p class="fv-equity-pledge-title" data-more="equity-pledge-title">股权质押</p>
                                </div>
                                <table class="fv-equity-pledge-table">
                                    <thead class="fv-equity-pledge-table-thead">
                                        <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                            <td class="fv-equity-pledge-table-td-title fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">质押公告日期</td>
                                            <!-- date -->
                                        </tr>
                                        <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                            <td class="fv-equity-pledge-table-td-title">出质人</td>
                                        </tr>
                                        <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                            <td class="fv-equity-pledge-table-td-title">质权人</td>
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
                                <div class="fv-holdings-participation-situation-title-box">
                                    <p class="fv-holdings-participation-situation-title" data-more="holdings-participation-situation-title">控股参股情况</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                                <div class="fv-changes-shareholding-executives-title-box">
                                    <p class="fv-changes-shareholding-executives-title" data-more="changes-shareholding-executives-title">高管持股变动情况</p>
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
                                <div class="fv-institutional-shareholding-change-statistics-title-box">
                                    <p class="fv-institutional-shareholding-change-statistics-title">机构持股变动统计</p>
                                </div>
                                <div class="fv-institutional-shareholding-change-statistics-container">
                                    <!-- 盈利预告 placeholder -->
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
                                <div class="fv-company-news-title-box">
                                    <p class="fv-company-news-title" data-more="company-news-title">公司新闻</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
                                </div>
                                <table class="fv-company-news-table">
                                    <thead class="fv-company-news-table-thead">
                                        <tr class="fv-company-news-table-tr">
                                            <td class="fv-company-news-table-td-title">日期</td>
                                            <td class="fv-company-news-table-td-title">标题</td>
                                        </tr>
                                    </thead>
                                    <tbody class="fv-company-news-table-tbody" id="fv-company-news-tbody">
                                        <!--
                                            <tr class="fv-company-news-table-tr">
                                                <td class="fv-company-news-table-td-key">涉及概念</td>
                                                <td class="fv-company-news-table-td-value" data-value="data-fv-events">
                                                    <div class="css-data-loading" data-loading="pure-css-data-loading">
                                                        CSS Loading...
                                                    </div>
                                                </td>
                                            </tr>
                                        -->
                                    </tbody>
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
                                <div class="fv-company-announcements-title-box">
                                    <p class="fv-company-announcements-title" data-more="company-announcements-title">公司公告</p>
                                </div>
                                <table class="fv-company-announcements-table">
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
                                <div class="fv-research-report-title-box">
                                    <p class="fv-research-report-title" data-more="research-report-title">研究报告</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                sortable_module_container.insertAdjacentElement(`beforeend`, div);
                setTimeout(function() {
                    let delete_box = document.querySelector(`.fv-${delete_uid}-title`);
                    delete_box.appendChild(sub_div);
                }, 0);
            }
        );
    };
    return {
        init: (uids = datas) => {
            if (debug) {
                console.log(`init uids = `, uids);
            }
            dropAll(uids);
        },
        // dropAll: dropAll(uids)
    };
})();

// const uids = ["stockfast01","stockfast02","stockfast03","stockfast04","stockfast05","stockfast06","stockfast07","stockfast08","stockfast09","stockfast10","stockfast11","stockfast12","stockfast13","news","bulletion","research"];
// STOCK_F9_FV.Modules.loadAllModules.init(uids);


/**
 * CutomizeModulesLoader
 * @description load each module once & check is exist before drop it
 * @author xgqfrms
 * @argument module_uid's
 *
 */


// IIFE === Closure!
STOCK_F9_FV.Modules.modulesLoader = STOCK_F9_FV.Modules.modulesLoader ||
(() => {
    const debug = false;
    // const this_name = STOCK_F9_FV.Modules.modulesLoader;
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
    // let module_container = document.querySelector(`[data-body-container="data-body-container"]`);
    let module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`);
    // let droppedUid_datas = document.querySelectorAll(`[data-droppe-uid*="module-data"]`);
    // ??? sortable.js
    let sortable_container = document.querySelector(`#section-sortable-container`);
    // let sortable = Sortable.create(sortable_container);
    Sortable.create(sortable_container);
    // return obj
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
            let result = window.confirm(`你确定要删除此模块?`);
            // true
            if(result){
                // window.open("exit.html", "Thanks for Visiting!");
                // alert(`just remove this module!`);
                // remove DOM node ???
                // [data-delete-script-dom="delete-script-dom-stockfast01"]
                module_container.removeChild(tdu);
            }else{
                alert(`已取消删除此模块!`);
            }
        },
        // api: `https://developer.mozilla.org/API`,
        dragstart: function(e) {
            // e.preventDefault();
            // console.log(`e = \n`, e);
            // console.log(`e.target = \n`, e.target);
            // console.log(`e.target.dataset = \n`, e.target.dataset);
            // console.log(`e.target.dataset.iconUid = %c ${e.target.dataset.iconUid}\n`, console_css);
            // console.log(`e.target.dataset.droppedUid = %c ${e.target.dataset.iconUid}\n`, console_css);
            // iconUid
            let iconUid = e.target.dataset.iconUid.substr(12),
                droppedUid = e.target.dataset.droppedUid ? e.target.dataset.droppedUid.substr(12) : ``;
            let uid = iconUid ? iconUid : droppedUid;
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
            // console.log(`%c dragEnter = `, console_css1, e.target.id);
            e.preventDefault();
            return true;
        },
        dragover: (e) => {
            // console.log(`%c dragOver = `, console_css1, e.target.id);
            // e.target.style.backgroundColor = "#f0f";
            if (drop_counter === 0) {
                let info_div = document.createElement(`div`);
                info_div.innerHTML = "请将模块拖拽到灰色区域内!";
                info_div.setAttribute(`id`, `drop_info_div`);
                module_container.insertAdjacentElement(`afterbegin`, info_div);
                drop_counter++
            }
            module_container.classList.add(`absolute-center-placeholder`);
            // background
            e.preventDefault();
            return true;
        },
        dragleave: (e) => {
            e.preventDefault();
            // console.log(`%c dragLeave = `, console_css1, e.target.id);
            // e.target.style.backgroundColor = "#fff";
            // module_container.innerHTML = "";
            // if (drop_counter === 1) {
            //     let drop_info_div = document.querySelector(`#drop_info_div`);
            //     // module_container.removeChild(`drop_info_div`);
            //     module_container.removeChild(module_container.childNodes[0]);
            //     drop_counter = 0;
            // }
            // module_container.classList.remove(`absolute-center-placeholder`);
            return true;
        },
        drop: function(e) {
            e.preventDefault();
            // module_container.innerHTML = ""; ??? leave bug ??? no drop
            if (drop_counter === 1) {
                let drop_info_div = document.querySelector(`#drop_info_div`);
                // module_container.removeChild(`drop_info_div`);
                module_container.removeChild(module_container.childNodes[0]);
                drop_counter = 0;
            }
            module_container.classList.remove(`absolute-center-placeholder`);
            let uid = e.dataTransfer.getData("text/plain");
            // let data = e.dataTransfer.getData("xyz");
            if (debug) {
                console.log(`drop & uid = %c ${uid}\n`, console_css1);
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
                    console.log(`uid`, uid);
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
            let module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`);
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
                // setTimeout & IIFE & Closure ???
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
                        link_css.setAttribute(`href`, `./Modules/${module_uid_name}.css`);
                        link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
                        script_dom.dataset.deleteScriptDom = `delete-script-dom-${uid}`;
                        script_dom.setAttribute(`src`, `./Modules/${module_uid_name}.js`);
                        box.insertAdjacentElement(`afterend`, link_css);
                        link_css.insertAdjacentElement(`afterend`, script_dom);
                    })(module_uid_name, isTable);
                }, 0);
            };
            // module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-stockfast01"]`);
            if (module_exist_checker === null) {
                // div.appendChild(sub_div);
                let htmlstr = ``;
                let delete_uid = ``;
                switch (uid) {
                    case "stockfast01":
                        delete_uid = `important-infos`;
                        loadModule(`important-infos`, true);
                        htmlstr += `
                            <section class="fv-module-box-3">
                                <!-- 重要信息 -->
                                <div class="fv-important-infos-title-box">
                                    <p class="fv-important-infos-title">重要信息</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                                <div class="fv-recent-important-events-title-box">
                                    <p class="fv-recent-important-events-title">近期重要事项</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                                <div class="fv-profit-forecast-title-box">
                                    <p class="fv-profit-forecast-title">盈利预告</p>
                                </div>
                                <div class="fv-profit-forecast-container">
                                    <!-- 盈利预告 placeholder -->
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
                                    <p class="fv-indicators-per-share-title">每股指标</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
                                </div>
                                <table class="fv-indicators-per-share-table">
                                    <thead class="fv-indicators-per-share-table-thead">
                                        <tr class="fv-indicators-per-share-table-tr">
                                            <td class="fv-indicators-per-share-table-td-title">每股指标</td>
                                        </tr>
                                    </thead>
                                    <tbody class="fv-indicators-per-share-table-tbody">
                                        <!-- 上市公司公告 -->
                                        <tr class="fv-indicators-per-share-table-tr">
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
                                        <!-- 聚源计算 -->
                                        <tr class="fv-indicators-per-share-table-tr">
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
                                <div class="fv-agency-rating-title-box">
                                    <p class="fv-agency-rating-title">机构评级</p>
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
                                <!-- <section data-uid="stock-price-turnover"></section> -->
                                <div class="fv-stock-price-turnover-title-box">
                                    <p class="fv-stock-price-turnover-title">股价/成交量</p>
                                </div>
                                <div class="fv-stock-price-turnover-container">
                                    <!-- 盈利预告 placeholder -->
                                    <div id="stock_price_turnover_hs_container" class="fv-stock-price-turnover-hs fv-stock-price-turnover-hs-container" data-hs-container="data-stock-price-turnover-container-uid"></div>
                                </div>
                            </section>
                        `;
                        break;
                    case "stockfast07":
                        delete_uid = `top-ten-shareholders`;
                        loadModule(`top-ten-shareholders`, true);// table
                        htmlstr += `
                            <section class="fv-module-box-10">
                                <div class="fv-top-ten-shareholders-title-box">
                                    <p class="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">前十大股东</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                    case "stockfast08":
                        delete_uid = `financing-and-margin-balance-difference-trend`;
                        loadModule(`financing-and-margin-balance-difference-trend`, false);// container
                        htmlstr += `
                            <section class="fv-module-box-7">
                                <!-- <section data-uid="financing-and-margin-balance-difference-trend"></section> -->
                                <div class="fv-financing-and-margin-balance-difference-trend-title-box">
                                    <p class="fv-financing-and-margin-balance-difference-trend-title">融资余额与融券余额差值走势</p>
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
                                <div class="fv-monthly-capital-flows-large-single-statistics-title-box">
                                    <p class="fv-monthly-capital-flows-large-single-statistics-title">近一月资金流向大单统计</p>
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
                            <section class="fv-module-box-10" data-class="test">
                                <div class="fv-equity-pledge-title-box">
                                    <p class="fv-equity-pledge-title" data-more="equity-pledge-title">股权质押</p>
                                </div>
                                <table class="fv-equity-pledge-table">
                                    <thead class="fv-equity-pledge-table-thead">
                                        <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                            <td class="fv-equity-pledge-table-td-title fv-changes-shareholding-executives-table-td-value" data-value="data-fv-changes-shareholding-executives">质押公告日期</td>
                                            <!-- date -->
                                        </tr>
                                        <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                            <td class="fv-equity-pledge-table-td-title">出质人</td>
                                        </tr>
                                        <tr class="fv-equity-pledge-table-tr" data-tr="matrix-tr">
                                            <td class="fv-equity-pledge-table-td-title">质权人</td>
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
                                <div class="fv-holdings-participation-situation-title-box">
                                    <p class="fv-holdings-participation-situation-title" data-more="holdings-participation-situation-title">控股参股情况</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                                <div class="fv-changes-shareholding-executives-title-box">
                                    <p class="fv-changes-shareholding-executives-title" data-more="changes-shareholding-executives-title">高管持股变动情况</p>
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
                                <div class="fv-institutional-shareholding-change-statistics-title-box">
                                    <p class="fv-institutional-shareholding-change-statistics-title">机构持股变动统计</p>
                                </div>
                                <div class="fv-institutional-shareholding-change-statistics-container">
                                    <!-- 盈利预告 placeholder -->
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
                                <div class="fv-company-news-title-box">
                                    <p class="fv-company-news-title" data-more="company-news-title">公司新闻</p>
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
                                <div class="fv-company-announcements-title-box">
                                    <p class="fv-company-announcements-title" data-more="company-announcements-title">公司公告</p>
                                </div>
                                <table class="fv-company-announcements-table">
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
                                <div class="fv-research-report-title-box">
                                    <p class="fv-research-report-title" data-more="research-report-title">研究报告</p>
                                    <!-- <fieldset disabled="disabled"></fieldset> -->
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
                module_container.insertAdjacentElement(`beforeend`, div);
                // insert script.js ??? execute timeline!
                // insert DOM
                // insert CSS
                setTimeout(function() {
                    // let delete_box = document.querySelector(`.fv-${delete_uid}-title-box`);
                    // :: after ??? fv-important-infos-title
                    let delete_box = document.querySelector(`.fv-${delete_uid}-title`);
                    delete_box.appendChild(sub_div);
                }, 0);
            }else{
                if (debug) {
                    try {
                        console.log(`module_exist_checker = `, module_exist_checker);
                    } catch (error) {
                        // console.log(`error = \n`, error);
                        console.log(`%c Sorry, some errors occurred!`, `color: #f0f`);
                    }
                }
                alert(`duplication & 重复!`);
            }
        },
        init: function() {
            if (debug) {
                console.log(`module_datas = `, module_datas, Array.isArray(module_datas));// false
            }
            for (let index = 0; index < module_datas.length; index++) {
                module_datas[index].addEventListener(`dragstart`, STOCK_F9_FV.Modules.modulesLoader.dragstart);
                // ???
            }
            // console.log(`module_container`, module_container);
            module_container.addEventListener(`dragenter`, STOCK_F9_FV.Modules.modulesLoader.dragenter);
            module_container.addEventListener(`dragover`, STOCK_F9_FV.Modules.modulesLoader.dragover);
            module_container.addEventListener(`dragleave`, STOCK_F9_FV.Modules.modulesLoader.dragleave);
            // dragleave
            module_container.addEventListener(`drop`, STOCK_F9_FV.Modules.modulesLoader.drop);
            // module_container.addEventListener(`dragenter`, modulesLoader.dragenter);
            // module_container.addEventListener(`dragover`, modulesLoader.dragover);
            // module_container.addEventListener(`drop`, modulesLoader.drop);
        }
    };
})();

// setTimeout === Closure!
setTimeout(function() {
    STOCK_F9_FV.Modules.modulesLoader.init();
    // auto call
}, 0);


/**
 * @description todo & enhancement
 * localStorage
 * application cache
 * webSQL (sqlite)
 * MongoDB
 */

/*

    const saveToLocalStorage = () => {
        // write
    };

    const readFromLocalStorage = () => {
        // read
    };


*/








