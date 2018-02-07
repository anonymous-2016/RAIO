"use strict";
/**
 * @description export table to excel with HTML5 Bolb!
 * @author xgqfrms 2018.02.05
 * @param {String} type
 * @param {String} uid
 * @param {String} title
 * @param {Boolean} debug
 */
const exportExcel = (
    uid = `data-table`,
    title = `excel-title`,
    type = `xlsx`,
    debug = false
) => {
    if (debug) {
        console.log(`uid= `, uid);
        console.log(`type = `, type);
        console.log(`title = `, title);
    }
    let result = ``;
    try {
        let elt = document.querySelector(uid),
            wb = XLSX.utils.table_to_book(
                elt,
                {
                    // sheet: "Sheet JS",// excel sheet name
                    sheet: title,
                }
            );
        if (debug) {
            console.log(`document.querySelector(uid) = `, elt);
        }
        result = XLSX.writeFile(
            wb,
            `${title}.${type}`,
        );
        return result;
    } catch (error) {
        console.log(`error = `, error);
    }
};

export default exportExcel;

export {exportExcel};

// import {exportExcel as exportExcelPlugin} from "./export-excel";

/*


<span data-excel="otc-repurchase-interest-rates-excel">
    <a href="#" data-excel="otc-repurchase-interest-rates-table" data-title="回购利率">导出</a>
</span>

import {exportExcel as exportExcelPlugin} from "./export-excel";



// export excel
setTimeout((debug = false) => {
    let export_excel_a = document.querySelector(`[data-excel="otc-repurchase-interest-rates-excel"]>a`);
    if (export_excel_a !==null) {
        export_excel_a.addEventListener(`click`, () => {
            let table_uid = export_excel_a.dataset.excel,
                table_title = export_excel_a.dataset.title;
            if (debug) {
                console.log(`excel uid =`, table_uid);
                console.log(`excel title =`, table_title);
            }
            try {
                exportExcelPlugin(`.${table_uid}`, `${table_title}`);
            } catch (error) {
                console.log(`excel error =`, error);
            }
        });
    } else {
        console.log(`excel table, addEventListener target is null!`);
    }
}, 0);




// demo
setTimeout((debug = false) => {
    let btn = document.querySelector(`[data-btn="export-excel"]`);
    btn.addEventListener(`click`, () => {
        if (!debug) {
            console.log(`btn.dataset.title =`, btn.dataset.title);
        }
        let title = btn.dataset.title;
        exportExcel(`#test-table`, `${title}`);
        // exportExcel(`#test-table`, `导出Table为Excel`);
    });
}, 0);


*/


