"use strict";

/**
 * @name company-performance-all 公司表现
 * @author xgqfrms
 * creadted 2017.12.21
 * @param {* String} url
 * @param {* Array} tds
 * @param {* String} title
 * @param {* Array} ui_arr
 * @param {Boolean} debug
 */

/*

import all modules

*/

/**
 * @author xgqfrms
 * @license MIT
 *
 * @param {* String} link_uid
 * @param {* String} div_uid
 * @param {* Boolean} debug
 */

const ShowTabs = (link_uid = `[data-tab="tab-link"]`, div_uid = `[data-tab="tab-container"]`, debug = false) => {
    let tabs = document.querySelectorAll(link_uid),
        divs = document.querySelectorAll(div_uid);
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener(`click`, (e) => {
            if (debug) {
                console.log(`e = \n`, e);
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.classList = \n`, e.target.classList);
                // div.classList.toggle("visible", i < 10);
                // replace(oldClass, newClass)
                // toggle(String [, force])
                // add(String [, String])
                // remove(String [, String])
                // contains(String)
                // item(Number)
                let uid = parseInt(e.target.dataset.tabUid);
                console.log(`uid = `, uid, typeof(uid));
            }
            if (e.target.classList.contains("hover-link-color")) {
                //
            }else{
                e.target.classList.add("hover-link-color");
                e.target.classList.remove("default-link-color");
                divs[i].classList.add("active-display-block");
                divs[i].classList.remove("default-display-block");
            }
            let arr = [];
            for (let ii = 0; ii < tabs.length; ii++) {
                arr.push(ii);
            }
            arr.map(
                (item, index) =>{
                    if(item !== i){
                        if (tabs[index].classList.contains("hover-link-color")) {
                            tabs[index].classList.add("default-link-color");
                            tabs[index].classList.remove("hover-link-color");
                            divs[index].classList.remove("active-display-block");
                            divs[index].classList.add("default-display-block");
                        }else{
                            //
                        }
                        // divs[index].style.display = "none";
                    }
                }
            );
        });
    }
};


/*

insert all

*/
document.addEventListener(`DOMContentLoaded`, () => {
    ShowTabs();
    setTimeout(() => {
        let scripts_container = document.querySelector(`[data-scripts="all-scripts"]`);
        const arr = [
            // "../../module/tabs/tabs.js",
            "../build/js/company-performance-market.min.js",
            "../build/js/company-performance-scale.min.js",
            "../build/js/company-performance-achievement.min.js",
            "../build/js/company-performance-valuation.min.js",
            // "./company-performance-market.js",
            // "./company-performance-scale.js",
            // "./company-performance-achievement.js",
            // "./company-performance-valuation.js",
        ];
        console.log(`arr = \n`, arr);
        arr.map(
            (item, i) => {
                let script = document.createElement('script');
                script.src = arr[i];
                scripts_container.insertAdjacentElement(`beforeend`, script);
            }
        );
    }, 0);
});
