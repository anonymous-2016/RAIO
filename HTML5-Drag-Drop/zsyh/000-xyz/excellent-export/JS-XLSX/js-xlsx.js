function s2ab(s) {
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
}

function export_table_to_excel(id, type, filename) {
    // id & type & filename
    let dom = document.getElementById(id);
    var wb = XLSX.utils.table_to_book(dom, {
        sheet: "Sheet JS"
    });
    var wbout = XLSX.write(wb, {
        bookType: type,
        bookSST: true,
        type: 'binary'
    });
    var excel_name = filename || 'excel_filename.' + type;// default filename
    try {
        saveAs(new Blob([s2ab(wbout)], {
            type: "application/octet-stream"
        }), excel_name);
    } catch (e) {
        if (typeof console != 'undefined') console.log(e, wbout);
    }
    return wbout;
}

function doit(type, filename) {
    // type & filename
    return export_table_to_excel('table', type || 'xlsx', filename);
}


// call

// doit('xlsx');
// doit('biff8', 'test.xls');



function init(id, data){
    // worksheet
    var ws = XLSX.utils.aoa_to_sheet(data);
    let table_id = "table";
    // not need!
    // console.log(`sheet_to_html = \n`, XLSX.utils.sheet_to_html(ws));
    // console.log(`sheet_to_html & editable: true = \n`, XLSX.utils.sheet_to_html(ws, {editable: true}));
    // console.log(`sheet_to_html & editable: false = \n`, XLSX.utils.sheet_to_html(ws, {editable: false}));
    `<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head>`.length;
    // 83
    `</body></html>`.length;
    // 14
    let table_string = XLSX.utils.sheet_to_html(ws);
    let tl = table_string.length;
    // console.log(`table_string.length \n`, table_string.length);
    // console.log(`table_string.slice(83, tl-(83+14)) = \n`, table_string.substr(83, tl-(83+14)));
    // table_string.substr(83, tl-(83+14));
    document.getElementById(id).innerHTML = table_string.replace("<table>", `<table id=${table_id}>`);
    // virtual_DOM ???
    // document.getElementById(id).innerHTML = XLSX.utils.sheet_to_html(ws, {
    //     editable: true
    // }).replace("<table>", `<table id=${table_id} border="1">`);
    // id="table"
}


// data
const data = [
    ["This", "is", "a", "Test"],
    ["\u0BEE", "\u2603", "你好", "아침글"],
    [1, 2, 3, 4],
    ["Click", "to", "edit", "cells"]
];

init("container", data);










/*

# Shadow_DOM

https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM

```html

<html>
    <head></head>
    <body>
        <p id="hostElement"></p>
        <script>
            // create shadow DOM on the <p> element above
            var shadow = document.querySelector('#hostElement').attachShadow({mode: 'open'});
        </script>
    </body>
</html>

```

*/
