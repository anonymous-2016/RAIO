// "use strict";

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
        return value;
    }
});

var STOCK_IP = STOCK_IP || ``;
var STOCK_Paths = STOCK_Paths || ``;
var STOCK_SecCode = STOCK_SecCode || ``;


const debug = false;

let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`),
    divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener(`click`, (e) => {
        if (debug) {
            let e_classes = e.target.classList;
            let e_datas = e.target.dataset;
        }
        if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
            //
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
            //
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


window.onload = () => {
    // init
    STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
    STOCK_IP = `${window.parent.location.protocol}//${window.parent.location.host}`;
    STOCK_Paths = `/webservice/fastview/stock`;
    console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
    console.log(`STOCK_IP`, STOCK_IP);
    let URL = `${STOCK_IP}${STOCK_Paths}${STOCK_SecCode}`;
    console.log(`URL`, URL);
    // init
    let btn_universal = document.querySelector(`[data-uid="universal"]`),
        btn_customize = document.querySelector(`[data-uid="customize"]`),
        btn_module_setting = document.querySelector(`[data-uid="module-setting"]`);
    let a_modules = document.querySelector(`[data-uid="modules-a-link"]`);
    const sortable_module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);
    btn_universal.onclick = (e) => {
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        let left_uids = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
            right_uids = ["stockfast02","stockfast03","stockfast05","stockfast06", "stockfast10","stockfast12","stockfast13", "news"];
        STOCK_F9_FV.Modules.loadAllModules.init(sortable_module_containers[0], left_uids);
        STOCK_F9_FV.Modules.loadAllModules.init(sortable_module_containers[1], right_uids);
    }
    btn_customize.onclick = (e) => {
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        a_modules.click();
    }
    btn_module_setting.addEventListener(`click`, (e) => {
        const title = `Sorry for that, it still in developing!`;
        // alert(`😃😃😃Coming soon ... 😧😒😟`);
    });
    btn_module_setting.addEventListener(`click`, (e) => {
        let debug = true;
    });
    btn.onclick();
    // small_btn.onclick();
    btn_universal.click();
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
                    const loadModule = (module_uid_name=``, isTable=`false`) => {
                        setTimeout(function() {
                            ((module_uid_name, isTable) => {
                                let box = (isTable === true)
                                    ? document.querySelector(`.fv-${module_uid_name}-table`)
                                    : document.querySelector(`.fv-${module_uid_name}-container`),
                                    link_css = document.createElement(`link`),
                                    script_dom = document.createElement(`script`);
                                link_css.setAttribute(`rel`, `stylesheet`);
                                // link_css.setAttribute(`href`, `./build/css/${module_uid_name}.min.css`);
                                link_css.setAttribute(`href`, `./Modules/${module_uid_name}.css`);
                                link_css.dataset.deleteLinkCss = `delete-link-css-${uid}`;
                                script_dom.dataset.deleteScriptDom = `delete-script-dom-${uid}`;
                                // script_dom.setAttribute(`src`, `./Modules/${module_uid_name}.js`);
                                script_dom.setAttribute(`src`, `./build/js/${module_uid_name}.min.js`);
                                box.insertAdjacentElement(`afterend`, link_css);
                                link_css.insertAdjacentElement(`afterend`, script_dom);
                            })(module_uid_name, isTable);
                        }, 0);
                    };
                    let htmlstr = ``;
                    let delete_uid = ``;
                    switch (uid) {
                        case "stockfast01":
                            delete_uid = `important-infos`;
                            loadModule(`important-infos`, true);
                            htmlstr += `
                                <section class="fv-module-box-3">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-important-infos-title">重要信息</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-recent-important-events-title">近期重要事项</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-profit-forecast-title">盈利预测</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-indicators-per-share-title">每股指标</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-agency-rating-title">机构评级</p>
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
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">前十大股东</p>
                                    </div>
                                    <table class="fv-top-ten-shareholders-table">
                                        <thead class="fv-top-ten-shareholders-table-thead">
                                            <tr class="fv-top-ten-shareholders-table-tr">
                                                <td class="fv-top-ten-shareholders-table-td-title fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">时间</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">机构或基金名称</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">持有数量(股)</td>
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
                        case "stockfast09":
                            delete_uid = `monthly-capital-flows-large-single-statistics`;
                            loadModule(`monthly-capital-flows-large-single-statistics`);// false
                            htmlstr += `
                                <section class="fv-module-box-7">
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
                        case "stockfast10":
                            delete_uid = `equity-pledge`;
                            loadModule(`equity-pledge`, true);
                            htmlstr += `
                                <section class="fv-module-box-10">
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
                        case "stockfast11":
                            delete_uid = `holdings-participation-situation`;
                            loadModule(`holdings-participation-situation`, true);
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
                        case "stockfast12":
                            delete_uid = `changes-shareholding-executives`;
                            loadModule(`changes-shareholding-executives`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-changes-shareholding-executives-title" data-more="changes-shareholding-executives-title">高管持股变动情况</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-institutional-shareholding-change-statistics-title">机构持股变动统计</p>
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
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-company-news-title" data-more="company-news-title">公司新闻</p>
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
                                        <p class="fv-company-announcements-title" data-title="fv-company-announcements-title" data-more="company-announcements-title">公司公告</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-research-report-title" data-more="research-report-title">研究报告</p>
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
                    div.insertAdjacentHTML(`beforeend`, `${htmlstr}`);
                    container.insertAdjacentElement(`beforeend`, div);
                    setTimeout(function() {
                        let delete_box = document.querySelector(`[data-title="fv-${delete_uid}-title"]`);
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
            }
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



STOCK_F9_FV.Modules.modulesLoader = STOCK_F9_FV.Modules.modulesLoader ||(
    (debug = false) => {
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
        },
        console_css = `
            color: #f0f;
            font-size: 23px;
        `,
        console_css1 = `
            color: #f00;
            font-size: 23px;
        `,
        console_css2 = `
            color: #ff0;
            font-size: 23px;
        `,
        console_css3 = `
            color: #0ff;
            font-size: 23px;
        `;
        let module_datas = document.querySelectorAll(`[data-icon-uid*="module-data"]`),
            module_container = document.querySelector(`[data-div-inner-box="data-div-inner-box"]`),
            module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`),
            drop_counter = 0;
        return {
            deleteModule: (dom_uid=``, script_uid=``) => {
                let div_uid = dom_uid.replace(`delete`, `div`);
                let tdu = document.querySelector(`[data-div-module-uid="${div_uid}"]`);
                swal({
                    title: "你确定要删除此模块?",
                    icon: "error",
                    buttons: {
                        cancel: {
                            text: "取消",
                            value: "cancel",
                            visible: true,
                            className: "",
                        },
                        ok: {
                            text: "确定",
                            value: "ok",
                            visible: true,
                            className: "",
                            closeModal: true
                        }
                    }
                })
                .then((value) => {
                    let result = value || ``;
                    if(result === "ok"){
                        if (tdu.parentNode.id === "left-sortable-container") {
                            module_containers[0].removeChild(tdu);
                            swal({
                                title: "已删除此模块",
                                text: "1秒后自动关闭",
                                icon: "success",
                                buttons: false,
                                timer: 1000
                            });
                        }else if (tdu.parentNode.id === "right-sortable-container") {
                            module_containers[1].removeChild(tdu);
                            swal({
                                title: "已删除此模块",
                                text: "1秒后自动关闭",
                                icon: "success",
                                buttons: false,
                                timer: 1000
                            });
                        }else{
                            console.log(`Coming soon... `, tdu.parentNode);
                        }
                        btn.onclick();
                    }else{
                        swal({
                            title: "已取消删除此模块!",
                            text: "1秒后自动关闭",
                            icon: "success",
                            buttons: false,
                            timer: 1000
                        });
                    }
                });
            },
            dragstart: (e) => {
                let iconUid = e.target.dataset.iconUid.substr(12),
                    droppedUid = e.target.dataset.droppedUid ? e.target.dataset.droppedUid.substr(12) : ``,
                    uid = iconUid ? iconUid : droppedUid;
                e.effectAllowed = `move`;
                e.dataTransfer.setData("text/plain", uid);
            },
            dragend: (e) => {
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
                sub_div.firstChild.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.deleteModuleUid;
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
                let module_exist_checker = ``;
                if (typeof(uid) === "string" && uid.length < 12) {
                    module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`)
                }else{
                    module_exist_checker = null;
                }
                /**
                 * @author xgqfrms
                 * @description load Module (2017.11.01)
                 * @param {* String} module_uid_name
                 * @param {* Boolean} isTable
                 */
                const loadModule = (module_uid_name=``, isTable=`false`) => {
                    setTimeout(function() {
                        ((module_uid_name, isTable) => {
                            let box = (isTable === true)
                                ? document.querySelector(`.fv-${module_uid_name}-table`)
                                : document.querySelector(`.fv-${module_uid_name}-container`),
                                link_css = document.createElement(`link`),
                                script_dom = document.createElement(`script`);
                            link_css.setAttribute(`rel`, `stylesheet`);
                            // link_css.setAttribute(`href`, `./build/css/${module_uid_name}.min.css`);
                            link_css.setAttribute(`href`, `./Modules/${module_uid_name}.css`);
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
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-important-infos-title">重要信息</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-recent-important-events-title">近期重要事项</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-profit-forecast-title">盈利预告</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-indicators-per-share-title">每股指标</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-agency-rating-title">机构评级</p>
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
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-top-ten-shareholders-title" data-more="top-ten-shareholders-title">前十大股东</p>
                                    </div>
                                    <table class="fv-top-ten-shareholders-table">
                                        <thead class="fv-top-ten-shareholders-table-thead">
                                            <tr class="fv-top-ten-shareholders-table-tr">
                                                <td class="fv-top-ten-shareholders-table-td-title fv-top-ten-shareholders-table-td-value" data-value="data-fv-top-ten-shareholders">时间</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">机构或基金名称</td>
                                                <td class="fv-top-ten-shareholders-table-td-title">持有数量(股)</td>
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
                        case "stockfast09":
                            delete_uid = `monthly-capital-flows-large-single-statistics`;
                            loadModule(`monthly-capital-flows-large-single-statistics`);// false
                            htmlstr += `
                                <section class="fv-module-box-7">
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
                        case "stockfast10":
                            delete_uid = `equity-pledge`;
                            loadModule(`equity-pledge`, true);
                            htmlstr += `
                                <section class="fv-module-box-10">
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
                        case "stockfast11":
                            delete_uid = `holdings-participation-situation`;
                            loadModule(`holdings-participation-situation`, true);
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
                        case "stockfast12":
                            delete_uid = `changes-shareholding-executives`;
                            loadModule(`changes-shareholding-executives`, true);
                            htmlstr += `
                                <section class="fv-module-box-5">
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-changes-shareholding-executives-title" data-more="changes-shareholding-executives-title">高管持股变动情况</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-institutional-shareholding-change-statistics-title">机构持股变动统计</p>
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
                                    <div class="fv-h5dnd-modules-title-box">
                                        <p class="fv-h5dnd-modules-title" data-title="fv-company-news-title" data-more="company-news-title">公司新闻</p>
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
                                        <p class="fv-company-announcements-title" data-title="fv-company-announcements-title" data-more="company-announcements-title">公司公告</p>
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
                                        <p class="fv-h5dnd-modules-title" data-title="fv-research-report-title" data-more="research-report-title">研究报告</p>
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
                        let delete_box = document.querySelector(`[data-title="fv-${delete_uid}-title"]`);
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
                            button: {
                                text: "关闭",
                                value: true,
                                visible: true,
                                closeModal: true
                            }
                        });
                    } catch (error) {
                        console.log(`%c Sorry, some errors occurred!`, `color: #f0f`);
                    }
                }
            },
            init: function() {
                for (let index = 0; index < module_datas.length; index++) {
                    module_datas[index].addEventListener(`dragstart`, STOCK_F9_FV.Modules.modulesLoader.dragstart);
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


