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
                    sheet: "Sheet JS",// ???
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

/*


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


