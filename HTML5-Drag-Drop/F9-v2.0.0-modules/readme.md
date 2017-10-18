
## 速览

Quick Overview / Quick Overview 快速预览


Fast Preview 快速预览

http://www.iciba.com/Quick%20Overview
http://fanyi.baidu.com/#zh/en/%E5%BF%AB%E9%80%9F%E9%A2%84%E8%A7%88


/projects/D2Designs/股票/F9/原型演示文件/F9%202.0(完整版)/index.html




## stockfast01

http://www.bejson.com/
http://tool.oschina.net/codeformat/json

```js

const body = document.querySelector(`body`);
// body.innerHTML === <div>json</div>
// body.innerText === json
let str = body.innerText;
// "string"
let objs = JSON.parse(str);
// JSON.parse(str,null, 4);
// copy(JSON.parse(str,null, 4));
// bad format

let objs = {};

copy(JSON.stringify(objs, null, 4));
// good format
body.innerHTML = JSON.stringify(objs, null, 4);



/**
 * String To JSON & AutoCopy
 * xgqfrms
 * created 2017.10.12
 * @param {Boolean} debug 
 */

const StringToJSONAndAutoCopy = (debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    // ??? 466 && space , 0 
    str = str.substr(0, str.lastIndexOf("}")+1);
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
};

/* test */
StringToJSONAndAutoCopy();
StringToJSONAndAutoCopy(true);


// IIFE
const json = ((debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    // ??? 466 && space , 0
    str = str.substr(0, str.lastIndexOf("}")+1);
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();

typeof json;
// "string"

{
  "sjgn": "互联网金融:蚂蚁金服概念:阿里概念:转融券标的:证金持股:区块链:电商概念:MSCI概念:互联网+:电子信息:融资融券:人工智能:沪港通",
  "zyyw": "计算机软件的技术开发、咨询、服务、成果转让；计算机系统集成；自动化控制工程设计、承包、安装；计算机及配件的销售；电子设备、通讯设备、计算机硬件及外部设备的生产、销售；自有房屋的租赁；本企业自产产品及技术的出口业务：经营本企业生产、科研所需的原辅材料、机械设备、仪器仪表、零配件及技术的进口业务（国家限定公司经营和国家禁止进出口的商品及技术除外）；经营进料加工和“三来一补”业务。经政府有关部门批准并办理工商登记手续，公司可另开设业务发展所需的投资与经营项目，扩大经营范围。",
  "bdl": "49.11",
  "cjl": "2099.27",
  "jzc": "444031.89",
  "zgb": "61780.52",
  "ltgb": "61780.52",
  "gxl": "0.00",
  "cgzb": "25.90",
  "mbjg": "63.19",
  "zhpj": "维持"
}

{
    "sjgn": "互联网金融:蚂蚁金服概念:阿里概念:转融券标的:证金持股:区块链:电商概念:MSCI概念:互联网+:电子信息:融资融券:人工智能:沪港通",
    "zyyw": "计算机软件的技术开发、咨询、服务、成果转让；计算机系统集成；自动化控制工程设计、承包、安装；计算机及配件的销售；电子设备、通讯设备、计算机硬件及外部设备的生产、销售；自有房屋的租赁；本企业自产产品及技术的出口业务：经营本企业生产、科研所需的原辅材料、机械设备、仪器仪表、零配件及技术的进口业务（国家限定公司经营和国家禁止进出口的商品及技术除外）；经营进料加工和“三来一补”业务。经政府有关部门批准并办理工商登记手续，公司可另开设业务发展所需的投资与经营项目，扩大经营范围。",
    "bdl": "49.11",
    "cjl": "2099.27",
    "jzc": "444031.89",
    "zgb": "61780.52",
    "ltgb": "61780.52",
    "gxl": "0.00",
    "cgzb": "25.90",
    "mbjg": "63.19",
    "zhpj": "维持"
}





// array ???
    // str = `${str}`;
    // ""[{"k":1},{"k":2},{"k":3}]""
    // "[{"rq":"2017-10-12","st":0,"wc":0,"xt":0},{"rq":"2017-09-30","st":3,"wc":2,"xt":2}]"
    // ??? 466 && space , 0
// check
str = document.querySelector(`body`).innerText;
typeof str;
// "string"
if (str) {
    // array
    str.lastIndexOf("]");
    // 2730
}else{
    // obj
    str.lastIndexOf("}");
    // 2729
}

// arr =[{k: 1}, {k: 2}, {k: 3}];
// obj
objs = JSON.parse(str);
// "[{"k":1},{"k":2},{"k":3}]"
str = `"[{"k":1},{"k":2},{"k":3}]"`;
// ""[{"k":1},{"k":2},{"k":3}]""
// "[{"rq":"2017-10-12","st":0,"wc":0,"xt":0},{"rq":"2017-09-30","st":3,"wc":2,"xt":2}]"


const json = ((debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    // array
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();

```


> shit pingying

news:新闻，bulletion:公告，research:研报，stockfast13：机构持股变动统计(机构投资者(主表明细数据))


重要信息 important information

http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH


http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH



"stockfast01";//重要信息
"stockfast02";//近期中重要事项
"stockfast03";//盈利预测
"stockfast04";//每股指标
"stockfast05";//机构评级
"stockfast06";//股价/成交量
"stockfast07";//前十大股东
"stockfast08";//融资余额与融券余额差值走势
"stockfast09";//近一月资金流向大单统计
"stockfast10";//股权质押
"stockfast11";//控股或参股公司
"stockfast12";//高管持股变动情况(取10条)



1366px

1100px

266/2=133px


# 去除table每行之间的空白间隙

https://www.w3schools.com/html/html_tables.asp
https://www.w3schools.com/css/css_table.asp

```css

.fv-important-infos-table {
    width: 100%;
    display: block;
    display: table;
    /* 去除table每行之间的空白间隙 */
    border-collapse: collapse;
    /* border-collapse: 0; */
    /* invalid property value */
    border-spacing: 0;
    /* https://www.w3schools.com/css/css_table.asp */
    /*
    border-spacing: 0 !important;
    */
    border-color: grey;
}


/* user agent stylesheet */

table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
}


```




```js 

// jsgn : 涉及概念

{
    "sjgn":"互联网金融:蚂蚁金服概念:阿里概念:转融券标的:证金持股:区块链:电商概念:MSCI概念:互联网+:电子信息:融资融券:人工智能:沪港通"
    "涉及概念" : "互联网金融: 蚂蚁金服概念: 阿里概念: 转融券标的: 证金持股: 区块链: 电商概念: MSCI概念: 互联网+: 电子信息: 融资融券: 人工智能: 沪港通"
}
let arr = [
    {
        key: "涉及概念", 
        value:"互联网金融: 蚂蚁金服概念: 阿里概念: 转融券标的: 证金持股: 区块链: 电商概念: MSCI概念: 互联网+: 电子信息: 融资融券: 人工智能: 沪港通"

    },
    {
        key: "概念", value:"互联网金融: 蚂蚁金服概念: 阿里概念: 转融券标的: 证金持股: 区块链: 电商概念: MSCI概念: 互联网+: 电子信息: 融资融券: 人工智能: 沪港通"

    }
];



{
    "sjgn":{
        key: "涉及概念", 
        value:"互联网金融: 蚂蚁金服概念: 阿里概念: 转融券标的: 证金持股: 区块链: 电商概念: MSCI概念: 互联网+: 电子信息: 融资融券: 人工智能: 沪港通"
    },
    "gn":{
        key: "概念",
        value:"互联网金融: 蚂蚁金服概念: 阿里概念: 转融券标的: 证金持股: 区块链: 电商概念: MSCI概念: 互联网+: 电子信息: 融资融券: 人工智能: 沪港通"

    }
}


// {"涉及概念":"sjgn","互联网金融":"hlwjr","蚂蚁金服概念":"ant"}




let keys = arr.map(
    obj => obj.key
);

// ["涉及概念", "概念"]

// "sjgn": "涉及概念"
// "bdl": "52周波动率"



let ui = ["概念", "涉及概念"];
let table = [];
ui.map(
    (k, i) => {
        arr.map(
            (obj) => {
                if(k === obj.key){
                    table.push(obj.value);
                }
            }
        );
    }
);

// 机构持股占比(%) cgzb

```



https://www.highcharts.com/
https://www.highcharts.com/download

https://code.highcharts.com/

https://www.highcharts.com/demo
https://www.highcharts.com/stock/demo

file:///C:/Users/xiagq/Downloads/Highcharts-6.0.1/index.htm

https://www.highcharts.com/demo/column-stacked-percent




```js

<script src="https://code.highcharts.com/highcharts.src.js"></script>

$ npm install highcharts --save


```

# DD HTML5 & excel

excel 2007

https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
https://developer.mozilla.org/en-US/docs/Web/API/Blob


https://stackoverflow.com/users/5934465/xgqfrms?tab=questions
https://stackoverflow.com/users/5934465/xgqfrms?tab=answers


```js

// typedArray ???

var blob = new Blob(tb, {type: 'application/vnd.ms-excel'}); 

var aBlob = new Blob( array, options );

var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob


var typedArray = GetTheTypedArraySomehow();
var blob = new Blob([typedArray], {type: 'application/octet-binary'}); // pass a useful mime type here
var url = URL.createObjectURL(blob);
// url will be something like: blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
// now you can use the url in any context that regular URLs can be used in, for example img.src, etc.



objectURL = URL.createObjectURL(object);






application/octet-stream

application/vnd.mspowerpoint, 

application/xml,

application/pdf

.xls === Microsoft Excel application/vnd.ms-excel

```

https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/type


https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

https://developer.mozilla.org/en-US/docs/Web/API/MimeType


# 完整的MIME类型列表


https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types


https://www.sitepoint.com/mime-types-complete-list/



# js no effect in Excel ???

> how Java backend create Excel with & macros

http://www.excel-easy.com/vba/create-a-macro.html

> Create a Macro in Excel - EASY Excel VBA


# create excel using js

https://stackoverflow.com/questions/333537/how-to-generate-excel-through-javascript#

https://stackoverflow.com/questions/17836273/export-javascript-data-to-csv-file-without-server-interaction/17836529#17836529

https://github.com/stephenliberty/excel-builder.js

https://github.com/jmaister/excellentexport
https://github.com/jmaister/excellentexport/blob/master/dist/excellentexport.js

http://jordiburgos.com/post/2014/excellentexport-javascript-export-to-excel-csv.html
http://jordiburgos.com/post/2013/javascript-export-to-excel.html


# Using the Excel Services JavaScript API to Work with Embedded Excel Workbooks


https://msdn.microsoft.com/en-us/library/office/hh315812(v=office.14).aspx

https://stackoverflow.com/questions/15567086/generate-excel-sheet-from-html-tables-using-jquery

https://stackoverflow.com/questions/5401351/javascript-to-export-html-tables-to-excel?rq=1

https://stackoverflow.com/questions/6517106/how-to-pass-html-table-values-to-excel-sheet-cells




https://github.com/gildata/node-xlsx/blob/master/src/index.js




http://downloadify.info/


https://stackoverflow.com/questions/15567086/generate-excel-sheet-from-html-tables-using-jquery


# window.btoa

> he btoa() method encodes a string in base-64.

https://www.w3schools.com/jsref/met_win_btoa.asp

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa

https://stackoverflow.com/questions/24304166/window-btoa-not-working-in-ie
https://coderanch.com/t/630782/window-btoa-supported
http://mdn.beonex.com/en/DOM/window.btoa.html


```js
var encodedData = window.btoa("Hello, world"); // encode a string
var decodedData = window.atob(encodedData); // decode the string


```


```js

var TableToExcel = (function () {
    var uri = `data:application/vnd.ms-excel;base64,`,
        template = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
                <head>
                <!--[if gte mso 9]>
                    <xml>
                        <x:ExcelWorkbook>
                            <x:ExcelWorksheets>
                                <x:ExcelWorksheet>
                                    <x:Name>
                                        {worksheet}
                                    </x:Name>
                                    <x:WorksheetOptions>
                                        <x:DisplayGridlines/>
                                    </x:WorksheetOptions>
                                </x:ExcelWorksheet>
                            </x:ExcelWorksheets>
                        </x:ExcelWorkbook>
                    </xml>
                <![endif]-->
                </head>
                <body>
                    <table cellspacing="0" rules="rows" border="1" style="color:Black;background-color:White;border-color:#CCCCCC;border-width:1px;border-style:None;width:100%;border-collapse:collapse;font-size:9pt;text-align:center;">
                        {table}
                    </table>
                </body>
            </html>
        `,
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; })
        };
    return function (table, name) {
        if (!table.nodeType){
            table = document.getElementById(table);
        }
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        };
        if (navigator.msSaveBlob) {
            var blob = new Blob(
                [format(template, ctx)],
                {
                    type: 'application/vnd.ms-excel',
                    endings: 'native'
                }
            );
            navigator.msSaveBlob(blob, 'export.xls')
        } else {
            window.location.href = uri + base64(format(template, ctx));
        }
    }
})()

```





## Object.prototype.hasOwnProperty ???


```js

let obj = { foo: "bar", baz: 42 },
    keys = Object.keys(obj);
copy(keys);
// ["foo","baz"]

typeof json
// "string"

let obj = JSON.parse(json),
    keys = Object.keys(obj);
copy(keys);


```


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

```js

Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

// ES2015
Object.keys("foo");
// ["0", "1", "2"]


```


##  `Object.keys`  & `Object.values`  & `Object.entries`

> demos

```js

let obj = { foo: "bar", baz: 42 }, 
    keys = Object.keys(obj);
// CCAC: Chrome Console Auto Copy
copy(keys); 
// ["foo","baz"]


let obj = { foo: "bar", baz: 42 }, 
    values = Object.values(obj);
// CCAC: Chrome Console Auto Copy
copy(values); 
// ["bar",42]


let obj = { foo: "bar", baz: 42 }, 
    entries = Object.entries(obj);
// CCAC: Chrome Console Auto Copy
copy(entries); 
// [["foo", "bar"],["baz", 42]]

```


# getAllKeys

```js

let keys = arr.map(// Array
    obj => obj.key
);
copy(keys);


let obj = json,// Array like Object
    arr = [];

for(let key in obj){
    arr.push(key);
}
copy(arr);

// ["sjgn", "zyyw", "bdl", "cjl", "jzc", "zgb", "ltgb", "gxl", "cgzb", "mbjg", "zhpj"]

// Object ??? 
// typeof json === "string"
let obj = json,
    keys = Object.keys(obj);
copy(keys);

typeof json
// "string"

let obj = JSON.parse(json),// "string" to Object
    keys = Object.keys(obj);
copy(keys);



```




```js

/* IIFE */
(() => {
    console.log(`ES6 & IIFE`);
})();

((json) => {
    console.log(`ES6 & IIFE`, json);
    copy(json);
    return json;
})(json);

```



