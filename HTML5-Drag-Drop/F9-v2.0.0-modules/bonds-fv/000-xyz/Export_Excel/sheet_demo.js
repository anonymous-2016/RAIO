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






/*

    <section>
        <div id="container"></div>
        <p>XLSX Excel 2007+ XML</p>
        <input type="submit" value="Export to XLSX!" onclick="exportExcel('xlsx');">
    </section>

    // initial table
    const showTable = (id = `container`) => {
        const aoa = [
            ["This", "is", "a", "Test"],
            ["வணக்கம்", "สวัสดี", "你好", "가지마"],
            [1, 2, 3, 4],
            ["Click", "to", "edit", "cells"]
        ];
        let ws = XLSX.utils.aoa_to_sheet(aoa),
            html_string = XLSX.utils.sheet_to_html(
                ws,
                {
                    id: "data-table",
                    // editable: true,
                    editable: false,
                }
            );
        // insert table
        document.querySelector(`#${id}`).innerHTML = html_string;
    };
    showTable();

*/




/*

    // fallback & only for shit IE!
    function tableau(pid, iid, fmt, ofile) {
        if (typeof Downloadify !== 'undefined') {
            Downloadify.create(pid, {
                swf: 'downloadify.swf',
                downloadImage: 'download.png',
                width: 100,
                height: 30,
                filename: ofile,
                data: function() {
                    return doit(fmt, ofile, true);
                },
                transparent: false,
                append: false,
                dataType: 'base64',
                onComplete: function() {
                    alert('Your File Has Been Saved!');
                },
                onCancel: function() {
                    alert('You have cancelled the saving of this file.');
                },
                onError: function() {
                    alert('You must put something in the File Contents or there will be nothing to save!');
                }
            });
        }
        else{
            document.getElementById(pid).innerHTML = "";
        }
    }
    tableau('biff8btn', 'xportbiff8', 'biff8', 'test.xls');
    tableau('odsbtn', 'xportods', 'ods', 'test.ods');
    tableau('fodsbtn', 'xportfods', 'fods', 'test.fods');
    tableau('xlsbbtn', 'xportxlsb', 'xlsb', 'test.xlsb');
    tableau('xlsxbtn', 'xportxlsx', 'xlsx', 'test.xlsx');


*/
