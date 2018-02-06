"use strict";
/**
 * @description export table to excel with HTML5 Bolb!
 * @author xgqfrms 2018.02.05
 * @param {String} type
 * @param {String} uid
 * @param {String} title
 * @param {Function} fn
 * @param {Boolean} dl
 * @param {Boolean} debug
 */
const exportExcel = (
    uid = `data-table`,
    title = `excel-title`,
    type = `xlsx`,
    fn,
    // fn = (() => console.log(`fn is none!`)),
    dl = false,
    debug = false
) => {
    if (debug) {
        console.log(`type = `, type);
        console.log(`title = `, title);
    }
    let result = ``;
    try {
        let elt = document.querySelector(uid),
            wb = XLSX.utils.table_to_book(
                elt,
                {
                    sheet: "Sheet JS",// ???
                }
            );
        result = XLSX.writeFile(
                wb,
                `${title}.${type}`,
                // fn || `${title}.${type}`,
            );
        // result = dl
        //     ?
        //     XLSX.write(
        //         wb,
        //         {
        //             bookType: type,
        //             bookSST: true,
        //             type: 'base64',
        //         }
        //     )
        //     :
        //     XLSX.writeFile(
        //         wb,
        //         `${title}.${type}`,
        //         // fn || `${title}.${type}`,
        //     );
        return result;
    } catch (error) {
        console.log(`error = `, error);
    }
};

// demo
setTimeout(() => {
    let btn = document.querySelector(`[data-btn="export-excel"]`);
    btn.addEventListener(`click`, () => {
        // title = btn.dataset.title;
        console.log(`btn.dataset.title =`, btn.dataset.title);
        let title = btn.dataset.title;
        exportExcel(`[data-btn="export-excel"]`, title);
        // exportExcel(`[data-btn="export-excel"]`, `导出Table为Excel`);
    });
}, 0);
