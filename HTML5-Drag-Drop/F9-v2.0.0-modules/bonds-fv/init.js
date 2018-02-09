"use strict";


import { repurchaseInterestRates } from "./modules/repurchase-interest-rates";
import { getFullTodayDate } from "./utils/full-today";


// console.log(`repurchaseInterestRates = \n`, repurchaseInterestRates);
// console.log(`repurchaseInterestRates.init = \n`, repurchaseInterestRates.init);

repurchaseInterestRates.init();

// uglify Sortable & global var
setTimeout(() => {
    // Multi groups
    let SortBox = document.querySelector(`#section-sortable-container`),
        SortItems = SortBox.querySelectorAll(`.div-sortable-box`);
    // container
    Sortable.create(SortBox, {
        animation: 150,
        draggable: '.div-sortable-box'
    });
    // array
    [].forEach.call(SortItems, function(el) {
        Sortable.create(el, {
            group: 'h5dnd',// group name
            animation: 150
        });
    });
}, 0);





setTimeout((debug = false) => {
    const inputs = document.querySelectorAll(`[data-input*="compare-"]`);
    for (let i = 0; i < inputs.length; i++) {
        // inputs[i].checked
        // inputs[i].addEventListener(`click`, () => {
        //     let input_uid = inputs[i].dataset.uid,
        //         input_title = inputs[i].dataset.title;
        //     if (!debug) {
        //         console.log(`input uid =`, input_uid);
        //     }
        //     try {
        //         // set type
        //         window.OTC_COMPARE = input_uid;
        //         // window.OTC_DATE
        //         // reload modules
        //         // loadAllModules();
        //     } catch (error) {
        //         console.log(`excel error =`, error);
        //     }
        // });
        inputs[i].addEventListener(`change`, () => {
            let input_uid = inputs[i].dataset.uid,// 0,1,2
                input_title = inputs[i].dataset.title;
            if (debug) {
                console.log(`\ninput uid =`, input_uid);
                console.log(`input title =`, input_title);
            }
            try {
                // set type
                if (debug) {
                    console.log(`\nwindow.OTC_COMPARE =`, window.OTC_COMPARE);
                    console.log(`window.OTC_DATE =`, window.OTC_DATE);
                }
                window.OTC_COMPARE = input_uid;
                if (input_uid === "2") {
                    // window.OTC_DATE = "2018-02-01";
                    window.OTC_DATE = getFullTodayDate();// today
                }else{
                    window.OTC_DATE = "";
                }
                if (debug) {
                    console.log(`\nafter & window.OTC_COMPARE =`, window.OTC_COMPARE, typeof(window.OTC_COMPARE));
                    console.log(`after & window.OTC_DATE =`, window.OTC_DATE, typeof(window.OTC_DATE));
                }
                // reload all modules
                reloadAllModules();
            } catch (error) {
                console.log(`excel error =`, error);
            }
        });
    }
}, 0);

const reloadAllModules = (debug = false) => {
    // import all modules
    // init
    var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
        OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
        OTC_COMPARE = window.OTC_COMPARE || ``,
        OTC_DATE = window.OTC_DATE || ``,
        // OTC_DATE = window.OTC_DATE || fullToday(),// default today!
        OTC_SKIN = window.OTC_SKIN || `white`;
    // reload all modules
    // repurchaseInterestRates.init();
    if (!debug) {
        console.log(`\nOTC_COMPARE =`, OTC_COMPARE, typeof(OTC_COMPARE));
        console.log(`OTC_DATE =`, OTC_DATE, typeof(OTC_DATE));
    }
    // test
    repurchaseInterestRates.init({
        ip: OTC_IP,
        path: OTC_PATH,
        // uid: ``,
        compare: OTC_COMPARE,
        date: OTC_DATE,
        skin: OTC_SKIN,
    });
};


/*

let day_input = document.querySelector(`[data-input="compare-previous-day"]`),
    week_input = document.querySelector(`[data-input="compare-previous-week"]`),
    customize_input = document.querySelector(`[data-input="compare-customize"]`);

day_input.checked;
// true
day_input.checked;
// false

if(day_input.checked){
    // set type
    Compare = 0;
    // reload modules
    loadAllModules();
}else if(week_input.checked){
    Compare = 1;
    loadAllModules();
}else if(week_input.checked){
    Compare = 2;
    // set UTC/GMT date
    CompareDate = "2017-02-01";
    loadAllModules();
}

*/


/*


Compare：--比较日标志
"0: 前一交易日",
"1: 上周",
"2: 自定义"
CompareDate：--比较日，（比较日标志=2时有效，不为2的时候可传可不传）
// 是你描述不清楚: 应该说清楚，比较日标志为2时，CompareDate 必传; 比较日标志不为2的时候, CompareDate可传/可不传。

// 分析日===今天

// 比较日===前一交易日
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01"}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"0"}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"0","CompareDate":""}
// 比较日===上周
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"1"}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"1","CompareDate":""}
// 比较日===用户指定的
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"2","CompareDate":"2018-01-01"}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"2","CompareDate":""}
// 如果没有指定比较日，比较日默认值是什么？
// 比较日===前一交易日 ???





*/
