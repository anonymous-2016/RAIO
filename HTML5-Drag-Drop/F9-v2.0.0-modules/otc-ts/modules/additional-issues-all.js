"use strict";

/**
 * @name additional-issues-all 今日定增
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* Array} tds
 * @param {* String} title
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */


/**
 * @author xgqfrms
 * @license MIT
 *
 * @param {* String} link_uid
 * @param {* String} div_uid
 * @param {* Boolean} debug
 */

const ShowTabs = (link_uid = `[data-tab="tab-link-AI"]`, div_uid = `[data-tab="tab-container-AI"]`, debug = false) => {
    let tabs = document.querySelectorAll(link_uid),// uid ???
        divs = document.querySelectorAll(div_uid);// uid ???
    if (debug) {
        console.log(`tabs = \n`, tabs);
        console.log(`divs = \n`, divs);
    }
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener(`click`, (e) => {
            let uid = parseInt(e.target.dataset.tabUid);
            if (debug) {
                // console.log(`e = \n`, e);
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.classList = \n`, e.target.classList);
                console.log(`uid = `, uid, typeof(uid));
            }
            if (e.target.classList.contains("hover-link-color")) {
                //
            }else{
                e.target.classList.add("hover-link-color");
                e.target.classList.remove("default-link-color");
                // i = 1 & bug
                divs[uid].classList.add("active-display-block");
                divs[uid].classList.remove("default-display-block");
            }
            let arr = [];
            for (let ii = 0; ii < tabs.length; ii++) {
                arr.push(ii);
                // 0, 1
            }
            arr.map(
                (item) =>{
                    if(item !== uid){
                        if (tabs[item].classList.contains("hover-link-color")) {
                            // item
                            tabs[item].classList.add("default-link-color");
                            tabs[item].classList.remove("hover-link-color");
                            divs[item].classList.remove("active-display-block");
                            divs[item].classList.add("default-display-block");
                        }else{
                            //
                        }
                    }
                }
            );
        });
    }
};

/*

insert all

*/



// IIFE & Closure
setTimeout(() => {
    ShowTabs();
    let scripts_container = document.querySelector(`[data-scripts="all-scripts-additional-issues-all"]`);
    const arr = [
        "../build/js/additional-issues-preplan.min.js",
        "../build/js/additional-issues-implementation.min.js",
        // "./build/js/additional-issues-preplan.min.js",
        // "./build/js/additional-issues-implementation.min.js",
    ];
    // console.log(`arr = \n`, arr);
    arr.map(
        (item, i) => {
            let script = document.createElement('script');
            script.src = arr[i];
            scripts_container.insertAdjacentElement(`beforeend`, script);
        }
    );
    // var OTC_GILCODE = window.OTC_GILCODE || `430003.OC`;
    var OTC_SKIN = window.OTC_SKIN || `white`;
    // more
    setTimeout((debug = false) => {
        let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-additional-issues-all"]`);
        if (debug) {
            console.log(`turn_to_uid dom = \n`, turn_to_uid);
        }
        if (turn_to_uid !== null) {
            turn_to_uid.addEventListener(`click`, (e) => {
                    let uid = e.target.dataset.uid,
                        topic_category  = e.target.dataset.topicCategory,// 专题分类名称常量
                        node_path = `13\\${topic_category}\\${uid}`;
                    try {
                        if (uid !== undefined && topic_category !== undefined) {
                            ChromeExternal.Execute("ExecuteCommand", node_path);
                            // ChromeExternal.Execute("ExecuteCommand", `13\\${topic_category}\\${uid}`);
                        }else{
                            console.log(`ChromeExternal \nuid === ${uid} & topic_category === ${topic_category}`);
                        }
                    } catch (error) {
                        console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
                        console.log(`node uid = `, uid);
                        console.log(`node topic_category = `, topic_category);
                        console.log(`node node_path = `, node_path);
                    }
                });
        }else{
            // null
            throw new Error(`turn_to_uid dom is `, turn_to_uid);
        }
    }, 0);
}, 0);



