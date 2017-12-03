"use strict";

// import {fetch} from "../utils/fetch";

/**
 * @description 概况 管理层经营与分析
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @namespace STOCK_F9
 * @sub_namespaces STOCK_F9.Summary
 *
 *
 */

// namespaces
var STOCK_F9 = STOCK_F9 || {};
// sub namespaces
STOCK_F9.Summary = STOCK_F9.Summary || {};

/**
 * @description management-analysis 管理层经营与分析
 * @author xgqfrms
 * @license MIT
 * @creadted 2017.11.30
 * @copyright Gildata 2017-present
 *
 * @param {String} url
 * @param {String || Number} gcode
 * @param {Array} td_keys
 * @param {Array} td_values
 * @param {Boolean} debug
 */

// http://10.1.5.202/stock/f9/mock-datas/tabs.json
// http://10.1.5.202/stock/f9/mock-datas/tabs.json?{gcode:600570}
// http://10.1.5.202/stock/f9/mock-datas/tabs.json?{gcode:"600570"}
// http://10.1.5.202/stock/f9/mock-datas/tabs.json?{gcode:%22600570%22}

STOCK_F9.Summary.managementAnalysis = STOCK_F9.Summary.managementAnalysis || (
    (
        {
            url,
            gcode,
            uid,
            debug
        } = {
            url: `http://10.1.5.202/stock/f9/mock-datas/tabs.json`,
            gcode: `600570`,
            uid: ``,
            debug: false
        }
    ) => {
        if (debug) {
            console.log(`url = `, url, typeof url);
            console.log(`gcode = `, gcode, typeof gcode);
            console.log(`uid = `, uid, typeof uid);
            console.log(`debug = `, debug, typeof debug);
        }
        let tbody_uid = document.querySelector(uid);
        let new_url = `${url}?{gcode: ${gcode}}`;
        if (debug) {
            console.log(`new_url = `, new_url, typeof new_url);
        }
        let datas = {};
        fetch(url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                let tabs = Object.values(json);
                let tab_names = [],
                    tab_contents = [];
                tabs.map(
                    (tab, i) => {
                        if (debug && i === 0) {
                            console.log(`tab, i = \n`,tab, i);
                        }
                        tab_names.push(tab.name);
                        tab_contents.push(tab.content);
                    }
                );
                if (debug) {
                    console.log(`tab_names = \n`, tab_names);
                    console.log(`tab_contents = \n`, tab_contents);
                }
                let tabs_box = document.querySelector(uid);
                if (debug) {
                    console.log(`tabs_box = \n`, tabs_box);
                    console.log(`tabs_box.children = \n`, tabs_box.children);
                    console.log(`tabs_box.children[0] = \n`, tabs_box.children[0]);
                    console.log(`tabs_box.children[1] = \n`, tabs_box.children[1]);
                }
                let ul_box = tabs_box.children[0];
                let div_box = tabs_box.children[1];
                let ul = ``,
                    div = ``;
                // tab_names
                // tab_contents
                tab_names.map(
                    (key, i) => {
                        if (debug) {
                            console.log(`key, i =`, key, i);
                        }
                        let title = key,
                            text = tab_contents[i];
                        if (key === 0) {
                            ul += `
                                <li
                                    class="layui-this"
                                    data-li="li-management-analysis"
                                    data-uid="tab-uid-0${i}"
                                    data-autoclick="li-auto-click">
                                    ${title}
                                </li>
                            `;
                            div += `
                                <div
                                    class="layui-tab-item layui-show"
                                    data-div="div-management-analysis">
                                    ${text}
                                </div>
                            `;
                        }else{
                            ul += `
                                <li
                                    data-li="li-management-analysis"
                                    data-uid="tab-uid-0${i}">
                                    ${title}
                                </li>
                            `;
                            div += `
                                <div
                                    class="layui-tab-item"
                                    data-div="div-management-analysis">
                                    ${text}
                                </div>
                            `;
                        }
                    }
                );
                if (debug) {
                    console.log(`ul = `, ul);
                    console.log(`div = `, div);
                }
                ul_box.insertAdjacentHTML("afterbegin", ul);
                div_box.insertAdjacentHTML("afterbegin", div);
                // ???
                STOCK_F9.Summary.managementAnalysis.switchTabs();
                setTimeout(() => {
                    // let first_li = document.querySelector(`[data-autoclick="li-auto-click"]`);
                    let first_li = document.querySelector(`[data-uid="tab-uid-00"]`);
                    if (debug) {
                        console.log(`first_li = `, first_li);
                    }
                    first_li.click();
                }, 0);
                // datas = tabs;
            }
        )
        .catch(error => console.log(`fetch data error = \n`, error));
        // return only work out Promise!
        return datas;
    }
);

STOCK_F9.Summary.managementAnalysis.switchTabs = STOCK_F9.Summary.managementAnalysis.switchTabs || (
    (debug = false) => {
        layui.config({
            // version: '1512277623800' //为了更新 js 缓存，可忽略
        });
        layui.use(['layer', 'element'], function() {
            let element = layui.element, //元素操作
                layer = layui.layer; //弹层
            // 监听Tab切换
            element.on('tab(demo)', function(data) {
                // layer.msg('切换了：' + this.innerHTML);
                if (debug) {
                    console.log(`data = `, data);
                    console.log(`this = `, this);
                }
            });
        });
    }
);


STOCK_F9.Summary.managementAnalysis.init = STOCK_F9.Summary.managementAnalysis.init || (
    (debug = false) => {
        // let tbody_uid = document.querySelector(`[data-tbody="tbody-management-analysis"]`);
        // data-tbody="tbody-management-analysis"
        let obj = {
            url: `http://10.1.5.202/stock/f9/mock-datas/tabs.json`,
            gcode: `600570`,
            uid: `[data-tabs="tabs-management-analysis"]`,
            debug: debug
        };
        STOCK_F9.Summary.managementAnalysis(obj);
    }
);

// STOCK_F9.Summary.managementAnalysis.init(true);
STOCK_F9.Summary.managementAnalysis.init(false);




