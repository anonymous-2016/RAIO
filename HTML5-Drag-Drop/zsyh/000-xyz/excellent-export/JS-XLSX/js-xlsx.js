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
    // let vdom = Virtual_DOM.innerHTML;
    let vdom = Virtual_DOM.firstChild;
    console.log(`dom`, dom, typeof dom);// object
    console.log(`vdom`,  vdom, typeof vdom);// string
    var wb = XLSX.utils.table_to_book(vdom, {
    // var wb = XLSX.utils.table_to_book(dom, {
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

let Virtual_DOM = document.createElement(`div`);
// let Virtual_DOM = document.createDocumentFragment();
console.log(`Virtual_DOM`,  Virtual_DOM, typeof Virtual_DOM);// string



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
    console.log(`table_string.slice(83, tl-(83+14)) = \n`, table_string.substr(83, tl-(83+14)));
    table_string = table_string.substr(83, tl-(83+14));
    // let Virtual_DOM = document.createDocumentFragment();
    // Virtual_DOM.innerHTML = table_string.replace("<table>", `<table id=${table_id}>`);
    Virtual_DOM.insertAdjacentHTML("afterbegin", table_string.replace("<table>", `<table id=${table_id}>`));
    document.getElementById(id).innerHTML = table_string.replace("<table>", `<table id=${table_id}>`);
    // virtual_DOM ???
    // document.getElementById(id).innerHTML = XLSX.utils.sheet_to_html(ws, {
    //     editable: true
    // }).replace("<table>", `<table id=${table_id} border="1">`);
    // id="table"
}

/*

<table><tr><td id="sjs-A1">This</td><td id="sjs-B1">is</td><td id="sjs-C1">a</td><td id="sjs-D1">Test</td></tr><tr><td id="sjs-A2">௮</td><td id="sjs-B2">☃</td><td id="sjs-C2">你好</td><td id="sjs-D2">아침글</td></tr><tr><td id="sjs-A3">1</td><td id="sjs-B3">2</td><td id="sjs-C3">3</td><td id="sjs-D3">4</td></tr><tr><td id="sjs-A4">Click</td><td id="sjs-B4">to</td><td id="sjs-C4">edit</td><td id="sjs-D4">cells</td></tr></table>

*/


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

https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLTemplateElement

https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment


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


```html

<ul id="ul"></ul>

```

```js

// assuming it exists (ul element)
let ul = document.document.querySelector(`[data-uid="ul"]`),
    docfrag = document.createDocumentFragment();
const browserList = [
    "Internet Explorer",
    "Mozilla Firefox",
    "Safari",
    "Chrome",
    "Opera"
];
browserList.forEach((e) => {
    let li = document.createElement("li");
    li.textContent = e;
    docfrag.appendChild(li);
});
ul.appendChild(docfrag);

```

*/
