/**
 * @author xgqfrms
 *
 * @description Export HTML Table to Excel
 * @created 2017.12.05
 *
 */

// NameSpace
var NameSpace = NameSpace || {};

NameSpace.ExportTableExcel = NameSpace.ExportTableExcel || {};

NameSpace.ExportTableExcel.s2ab = NameSpace.ExportTableExcel.s2ab || ((s) => {
    if (typeof ArrayBuffer !== 'undefined') {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
});


NameSpace.ExportTableExcel.export = NameSpace.ExportTableExcel.export || (
    (type = 'xlsx', filename = "default_excel_filename") => {
        // id & type & filename
        let vdom = Virtual_DOM.firstChild;
        var wb = XLSX.utils.table_to_book(vdom, {
            sheet: "Sheet JS"
        });
        var wbout = XLSX.write(wb, {
            bookType: type,
            bookSST: true,
            type: 'binary'
        });
        var excel_name = `${filename}.${type}`;// default filename
        try {
            // FileSaver
            saveAs(
                new Blob(
                    [NameSpace.ExportTableExcel.s2ab(wbout)],
                    {
                        type: "application/octet-stream"
                    }
                ),
                excel_name
            );
        } catch (err) {
            if(typeof console != 'undefined'){
                console.log(`error`, err, wbout);
            }
        }
        return wbout;
    }
);

NameSpace.ExportTableExcel.init = NameSpace.ExportTableExcel.init || ((data) => {
    // worksheet
    var ws = XLSX.utils.aoa_to_sheet(data);
    let table_string = XLSX.utils.sheet_to_html(ws);
    let tl = table_string.length;
    table_string = table_string.substr(83, tl-(83+14));
    Virtual_DOM.insertAdjacentHTML("afterbegin", table_string);
});



// data
const data = [
    ["This", "is", "a", "Test"],
    ["\u0BEE", "\u2603", "你好", "아침글"],
    [1, 2, 3, 4],
    ["Click", "to", "edit", "cells"]
];

// global element
let Virtual_DOM = document.createElement(`div`);
NameSpace.ExportTableExcel.init(data);


