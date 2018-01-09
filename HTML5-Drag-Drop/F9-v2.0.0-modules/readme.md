# Stock F9 速览

```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!

$ browser-sync start --server --files "./fast-preview/*.*"

http://localhost:3000/fast-preview/index.html

# http://localhost:3000/fast-preview/sidebar.html#模块选择

# HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/common/absolute-center.html

```

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://jira.gildata.com:8888/secure/RapidBoard.jspa?rapidView=29&projectKey=GFT&view=planning&selectedIssue=GFT-1494&quickFilter=57




# bug


```js


let time = [];

json.details.map(
    (obj, i) => {
        // console.log(`obj = `, obj);
        // console.log(`obj = `, obj.sjz);
        time.push(obj.sjz);
        return i;
    }
);

time = time.sort();

let datas = [];

for (let i = 0; i < time.length; i++) {
    for (let ii = 0; ii < json.details.length; ii++) {
        if(time[i] === json.details[ii].sjz){
            datas.push(json.details[ii]);
            break;
        }
    }
}

// for (let i = 0; i < json.details.length; i++) {
//     if(i === 0){
//         console.log(`i = `, i);
//         break;
//     }else{
//         console.log(`obj i = `, i);
//     }
// }

// copy(datas);
// copy(datas);

http://10.1.5.202/stock/f9/fastview/datas/6.json
http://10.1.5.202/stock/f9/fastview/datas/sort6.json


const time = [
  "2016-10-14",
  "2016-10-17",
  "2016-10-18",
  "2016-10-19",
  "2016-10-20",
  "2016-10-21",
  "2016-10-24",
  "2016-10-25",
  "2016-10-26",
  "2016-10-27",
  "2016-10-28",
  "2016-10-31",
  "2016-11-01",
  "2016-11-02",
  "2016-11-03",
  "2016-11-04",
  "2016-11-07",
  "2016-11-08",
  "2016-11-09",
  "2016-11-10",
  "2016-11-11",
  "2016-11-14",
  "2016-11-15",
  "2016-11-16",
  "2016-11-17",
  "2016-11-18",
  "2016-11-21",
  "2016-11-22",
  "2016-11-23",
  "2016-11-24",
  "2016-11-25",
  "2016-11-28",
  "2016-11-29",
  "2016-11-30",
  "2016-12-01",
  "2016-12-02",
  "2016-12-05",
  "2016-12-06",
  "2016-12-07",
  "2016-12-08",
  "2016-12-09",
  "2016-12-12",
  "2016-12-13",
  "2016-12-14",
  "2016-12-15",
  "2016-12-16",
  "2016-12-19",
  "2016-12-20",
  "2016-12-21",
  "2016-12-22",
  "2016-12-23",
  "2016-12-26",
  "2016-12-27",
  "2016-12-28",
  "2016-12-29",
  "2016-12-30",
  "2017-01-03",
  "2017-01-04",
  "2017-01-05",
  "2017-01-06",
  "2017-01-09",
  "2017-01-10",
  "2017-01-11",
  "2017-01-12",
  "2017-01-13",
  "2017-01-16",
  "2017-01-17",
  "2017-01-18",
  "2017-01-19",
  "2017-01-20",
  "2017-01-23",
  "2017-01-24",
  "2017-01-25",
  "2017-01-26",
  "2017-02-03",
  "2017-02-06",
  "2017-02-07",
  "2017-02-08",
  "2017-02-09",
  "2017-02-10",
  "2017-02-13",
  "2017-02-14",
  "2017-02-15",
  "2017-02-16",
  "2017-02-17",
  "2017-02-20",
  "2017-02-21",
  "2017-02-22",
  "2017-02-23",
  "2017-02-24",
  "2017-02-27",
  "2017-02-28",
  "2017-03-01",
  "2017-03-02",
  "2017-03-03",
  "2017-03-06",
  "2017-03-07",
  "2017-03-08",
  "2017-03-09",
  "2017-03-10",
  "2017-03-13",
  "2017-03-14",
  "2017-03-15",
  "2017-03-16",
  "2017-03-17",
  "2017-03-20",
  "2017-03-21",
  "2017-03-22",
  "2017-03-23",
  "2017-03-24",
  "2017-03-27",
  "2017-03-28",
  "2017-03-29",
  "2017-03-30",
  "2017-03-31",
  "2017-04-05",
  "2017-04-06",
  "2017-04-07",
  "2017-04-10",
  "2017-04-11",
  "2017-04-12",
  "2017-04-13",
  "2017-04-14",
  "2017-04-17",
  "2017-04-18",
  "2017-04-19",
  "2017-04-20",
  "2017-04-21",
  "2017-04-24",
  "2017-04-25",
  "2017-04-26",
  "2017-04-27",
  "2017-04-28",
  "2017-05-02",
  "2017-05-03",
  "2017-05-04",
  "2017-05-05",
  "2017-05-08",
  "2017-05-09",
  "2017-05-10",
  "2017-05-11",
  "2017-05-12",
  "2017-05-15",
  "2017-05-16",
  "2017-05-17",
  "2017-05-18",
  "2017-05-19",
  "2017-05-22",
  "2017-05-23",
  "2017-05-24",
  "2017-05-25",
  "2017-05-26",
  "2017-05-31",
  "2017-06-01",
  "2017-06-02",
  "2017-06-05",
  "2017-06-06",
  "2017-06-07",
  "2017-06-08",
  "2017-06-09",
  "2017-06-12",
  "2017-06-13",
  "2017-06-14",
  "2017-06-15",
  "2017-06-16",
  "2017-06-19",
  "2017-06-20",
  "2017-06-21",
  "2017-06-22",
  "2017-06-23",
  "2017-06-26",
  "2017-06-27",
  "2017-06-28",
  "2017-06-29",
  "2017-06-30",
  "2017-07-03",
  "2017-07-04",
  "2017-07-05",
  "2017-07-06",
  "2017-07-07",
  "2017-07-10",
  "2017-07-11",
  "2017-07-12",
  "2017-07-13",
  "2017-07-14",
  "2017-07-17",
  "2017-07-18",
  "2017-07-19",
  "2017-07-20",
  "2017-07-21",
  "2017-07-24",
  "2017-07-25",
  "2017-07-26",
  "2017-07-27",
  "2017-07-28",
  "2017-07-31",
  "2017-08-01",
  "2017-08-02",
  "2017-08-03",
  "2017-08-04",
  "2017-08-07",
  "2017-08-08",
  "2017-08-09",
  "2017-08-10",
  "2017-08-11",
  "2017-08-14",
  "2017-08-15",
  "2017-08-16",
  "2017-08-17",
  "2017-08-18",
  "2017-08-21",
  "2017-08-22",
  "2017-08-23",
  "2017-08-24",
  "2017-08-25",
  "2017-08-28",
  "2017-08-29",
  "2017-08-30",
  "2017-08-31",
  "2017-09-01",
  "2017-09-04",
  "2017-09-05",
  "2017-09-06",
  "2017-09-07",
  "2017-09-08",
  "2017-09-11",
  "2017-09-12",
  "2017-09-13",
  "2017-09-14",
  "2017-09-15",
  "2017-09-18",
  "2017-09-19",
  "2017-09-20",
  "2017-09-21",
  "2017-09-22",
  "2017-09-25",
  "2017-09-26",
  "2017-09-27",
  "2017-09-28",
  "2017-09-29",
  "2017-10-09",
  "2017-10-10",
  "2017-10-11",
  "2017-10-12",
  "2017-10-13"
]



var STOCK_IP = window.STOCK_IP || `http://10.1.5.202`,
    STOCK_Paths = window.STOCK_Paths || `/webservice/fastview/stock`,
    STOCK_SecCode = window.STOCK_SecCode || `600570.SH`,
    STOCK_Skin = window.STOCK_Skin || `white`;

skin: `white`

skin

skin: STOCK_Skin,

```

#000 box bg


#4a4c4f border
#25292e bg
#bbc1c7 font-color





股权质押 matrix & data regex

Modal & component

控股参股情况



/usr/local/apache2/webapps/stock/f9/fastview/Modules




一个保存用户自定义的 modules 的 API 接口！


```js
// get
const status = {
    // modules_name
    "stockfast01": {
        "index": 1,
        "show": true,
    },
    "news": {
        "index": 2,
        "show": false,
    }
};


// post

// localstorage

??? online/offline


https://www.sitepoint.com/offline-web-application-tutorial/
https://github.com/craigbuckler
http://blogs.sitepointstatic.com/examples/tech/offline/offline-example.zip


https://stackoverflow.com/questions/3181080/how-to-detect-online-offline-event-cross-browser

https://developer.mozilla.org/en-US/docs/Online_and_offline_events


navigator.onLine;
// true

https://developer.mozilla.org/en-US/docs/Web/Events/offline
https://developer.mozilla.org/en-US/docs/Web/Events/online

https://html.spec.whatwg.org/#event-offline


// standard event listeners
window.addEventListener("online", function() { ... });
window.addEventListener("offline", function() { ... });


window.localStorage & window.sessionStorage

// set a session value
window.sessionStorage.setItem("key", "my data");

// get a session value - returns "my data"
window.sessionStorage.getItem("key");


https://html.spec.whatwg.org/#mime-types-2


http://github.hubspot.com/offline/docs/welcome/
https://github.com/HubSpot/offline


https://www.html5rocks.com/en/mobile/workingoffthegrid/
https://www.html5rocks.com/en/tutorials/appcache/beginner/

https://www.html5rocks.com/zh/tutorials/webcomponents/imports/
https://www.html5rocks.com/en/tutorials/webcomponents/imports/

'import' in document.createElement('link');
// true

https://www.html5rocks.com/en/tutorials/webcomponents/template/
'content' in document.createElement('template');
// true



```




## fast-preview & path

http://localhost:3000/fast-preview/sidebar.html#模块选择

```js

const url = `http://10.1.5.202/webservice/fastview/stock/stockfast01/600570.SH`;
const url = `http://localhost:3000/fast-preview/json/datas/1.json`;


let title = `${(arr[i].title !== undefined) ? arr[i].title : `暂无数据`}`;
// title.replace(/: :/, "");
title = title.replace(/(：：)/ig, "：");// shit Chinese encoding
// ：： ？？？ shit data


我想要的其实就是这些 URLs 呀.

// research report
http://10.1.5.202/queryservice/research/attachment/551173471225
http://10.1.5.202/queryservice/research/attachment/551173471225.pdf

// 研报 摘要
http://10.1.5.202/webservice/researchreport/research/zy/551173471225





// news 详细
http://10.1.5.202/queryservice/news/content/558091641955
http://10.1.5.202/queryservice/news/content/558091641955



// bulletin
http://10.1.5.202/queryservice/bulletin/attachment/company/563999772286
http://10.1.5.202/queryservice/bulletin/attachment/company/563999772286.pdf



// sourcename = company & 主板的都是 company


近期重要事项: turn to node




// modal

http://10.1.5.202/information/newsinfo/




```

# namespaces

```js


"use strict";

/**
 * @author xgqfrms
 * @created 2017.11.16
 * @copyright Gildata 2017-present
 * @private
 * @license MIT
 *
 * @namespace STOCK_F9_FV
 * @sub_namespaces Utils
 *
 * @description Customize FontSise
 * @param {Object} args
 * @param {Bollean} debug
 *
 * @example // NameSpace Template Example , STOCK_F9_FV.Utils.CustomizeFontSise(obj);
 *
 */


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Utils = STOCK_F9_FV.Utils || {};
// IIFE === Closure!
STOCK_F9_FV.Utils.CustomizeFontSise = STOCK_F9_FV.Utils.CustomizeFontSise || ((args = {}, debug = false) => {
    //
});


// namespaces
var STOCK_F9_FV = STOCK_F9_FV || {};
// sub namespaces
STOCK_F9_FV.Modules = STOCK_F9_FV.Modules || {};
// Modules && IIFE === Closure!
STOCK_F9_FV.Modules.importantInfos = STOCK_F9_FV.Modules.importantInfos || (() => {});

STOCK_F9_FV.Modules.agencyRating.init = STOCK_F9_FV.Modules.agencyRating.init || (
    (url= `http://localhost:3000/fast-preview/json/datas/5.json`) => {
        let uid = `agency_rating_hs_container`;
        STOCK_F9_FV.Modules.agencyRating(url, true, uid);
    }
);

STOCK_F9_FV.Modules.agencyRating.init();// url


border: 1px solid rgba(229, 229, 229, 1);
height: 272,// 275px;


let color = chart_css.color,
    colors = chart_css.colors,
    optioncolor = chart_css.optioncolor,
    gridColor = chart_css.gridColor,
    legendColor = chart_css.legendColor,
    yAxisColor = chart_css.yAxisColor;


/* data-disabled="${ id === "null" ? false : true}" */

[data-disabled="true"] {
    pointer-events: none;
}

data-disabled="${ id !== "null" ? false : true}"

/*
    <a
        href="#${id}"
        title="${description}"
        data-title="${description}"
        data-uid="${id}"
        data-eventsId="${id}"
        data-turn-to-uid="recent-important-events"
        data-disabled="${ id !== "null" ? false : true}"
        data-link="fv-recent-important-events-link"
        data-link-detail="recent-important-events-link-detail-module">
        ${description}
    </a>
*/

// 跳转stock f9深度资料的命令：
ChromeExternal.Execute("ExecuteCommand", "12\600570.SH\2741");
// ChromeExternal.Execute("ExecuteCommand", "命令ID\证券代码\节点ID");

// \ 反斜线要转义！

// 跳转stock f9 深度资料的命令：
// ChromeExternal.Execute("ExecuteCommand", "命令ID\\证券代码\\节点ID");
// \ 反斜线要转义！

try {
    ChromeExternal.Execute("ExecuteCommand", "12\\600000.SH\\2741");
    // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
} catch (error) {
    console.log(`ChromeExternal error = \n`, error);
}

// 命令ID list ??? stock f9

// 节点ID list ??? 股权质押  2741


/*

    import {urls} from "../utils/urls-ip";
    // Uncaught SyntaxError: Unexpected token import

    import {debug} from "../utils/debug";
    const debug = true;

    var _urlsIp = require("../utils/urls-ip");
    // Uncaught ReferenceError: require is not defined

    if (debug) {
        console.log(`urls = `, JSON.stringify(urls, null, 4));
    }

*/

/*

    "use strict";

    var _urlsIp = require("../utils/urls-ip");

    // import {debug} from "../utils/debug";
    var debug = true;

    if (debug) {
        console.log("urls = ", JSON.stringify(_urlsIp.urls, null, 4));
    }


*/


// Utils && IIFE === Closure!
STOCK_F9_FV.Utils.getURL = STOCK_F9_FV.Utils.getURL || (() => {});

// STOCK_F9_FV.Utils.getURL(obj = {})
const {protocol, ip, gil_path, gil_uid, gil_code} = {
    protocol: "http",
    ip: "10.1.5.202",
    gil_path: "webservice/fastview/stock",
    gil_uid: "stockfast01",
    gil_code: "600570.SH"
};
const gil_obj = {
    protocol,
    ip,
    gil_path,
    gil_uid,
    gil_code
};
const url = STOCK_F9_FV.Utils.getURL(gil_obj, true);
// const url = STOCK_F9_FV.Utils.getURL({protocol, ip, gil_path, gil_uid, gil_code});




var url = ((obj) => {
    // STOCK_F9_FV.Utils.getURL(obj = {})
    const {protocol, ip, gil_path, gil_uid, gil_code} = {
        protocol: "http",
        ip: "10.1.5.202",
        gil_path: "webservice/fastview/stock",
        gil_uid: "stockfast01",
        gil_code: "600570.SH"
    };
    const gil_obj = {
        protocol,
        ip,
        gil_path,
        gil_uid,
        gil_code
    };
    // const url = STOCK_F9_FV.Utils.getURL(gil_obj, true);
    // const url = STOCK_F9_FV.Utils.getURL((obj ? obj : gil_obj), true);
        if (typeof obj === "object") {
        // const url = STOCK_F9_FV.Utils.getURL((obj ? obj : gil_obj), true);
        const url = (obj ? JSON.stringify(obj) : JSON.stringify(gil_obj));
        console.log(`url`, url);
        return url;
    } else {
        const url = (obj ? JSON.stringify(obj) : JSON.stringify(gil_obj));
        console.log(`param is not an Object`, url);
        // return "";
    }
})({
    protocol: "http",
    ip: "10.1.5.202",
    gil_path: "webservice/fastview/stock",
    gil_uid: "stockfast01",
    gil_code: "600570.SH"
});


let obj = {k1: 1, k2: 2, k3: 3};

let {k1: K1, ...restK} = {...obj}
K1;
// 1
restK;
// {k2: 2, k3: 3}

let {k1: k, k2: kk, k3: kkk} = obj;
k;
// 1
kk;
// 2
kkk;
// 3

```

```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!

$ browser-sync start --server --files "./fast-preview/*.*"

# http://localhost:3000/fast-preview/sidebar.html#模块选择

# HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/common/absolute-center.html

```

face, 😑 😩 🤖 🦊 😒 😧 😟 🐭 🐻 🤓 😪 🦁 🐹 😌 😢 😠 🤗 🐮 😞

https://emojipedia.org/search/?q=face


Quick Overview / Quick Overview 快速预览


Fast Preview 快速预览

http://www.iciba.com/Quick%20Overview
http://fanyi.baidu.com/#zh/en/%E5%BF%AB%E9%80%9F%E9%A2%84%E8%A7%88


/projects/D2Designs/股票/F9/原型演示文件/F9%202.0(完整版)/index.html


# HTML5 DnD

http://www.runoob.com/try/try.php?filename=jqueryui-example-sortable

https://www.w3schools.com/HTML/html5_draganddrop.asp

http://www.cnblogs.com/linxin/p/6794542.html

https://segmentfault.com/a/1190000008209715

http://www.cnblogs.com/linxin/p/6794542.html




## npm


```json
// regexp
// https://regexper.com/
// ^(?:@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*$

// String does not match the pattern of "^(?:@[a-z0-9-~][a-z0-9-._~]*/)?[a-z0-9-~][a-z0-9-._~]*$" The name of the package.

{
     "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/jspm_packages": true,
        "**/node_modules": true,
        "**/.zip": true,
        "**/.sh": true
    },
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true
    },
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/.git/subtree-cache/**": true,
        "**/node_modules/*/**": true
    },
}

```



# D2Designs/新三板/新三板F9/F9原型（2016-11-02）/index.html#g=1&p=f9栏目&c=1

http://10.1.64.125/otc/sulan/otcsulan.html

https://www.hcharts.cn/demo/user-cases



表格控件（基本表格、子母表控件、树形表格、可编辑表格）；






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

news:新闻，bulletin:公告，research:研报，stockfast13：机构持股变动统计(机构投资者(主表明细数据))


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
### Webpack

> code spiltting & dynamic imports module at runtime

https://github.com/tc39/proposal-dynamic-import

https://webpack.js.org/


### Rollup

> Tree-shaking

https://rollupjs.org/

https://rollupjs.org/repl

https://github.com/rollup/rollup

https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80#.jnypozs9n


CommonJS modules, AMD modules, and IIFE-style scripts.

https://github.com/rollup/rollup/wiki/Command-Line-Interface
https://github.com/rollup/rollup/wiki/JavaScript-API



```sh

$ npm install --global rollup

$ rollup --help

```

```sh


#For browsers:
# compile to a <script> containing a self-executing function ('iife')
$ rollup main.js --o bundle.js --f iife

# For Node.js:
# compile to a CommonJS module ('cjs')
$ rollup main.js --o bundle.js --f cjs

# For both browsers and Node.js:
# UMD format requires a bundle name
$ rollup main.js --o bundle.js -f umd --name "myBundle"

```








实例化 prototype 添加方法
测试
实例的 新方法是否可用


Dom 封装在module 的内部

3.CSS classname 使用 JS处理成 hash

处理前保存到origin对象中

node.sj 读取流，替换 css name

https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors

https://stackoverflow.com/questions/15000163/how-to-get-all-css-of-element


https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle




http://xahlee.info/js/js_get_elements.html


```js

document.getElementById(id_string)

document.getElementsByTagName(tag_name)

document.getElementsByClassName("class_values")

document.getElementsByName("name_value")

document.querySelector(css_selector)
document.querySelectorAll(css_selector)

// *

```
http://xahlee.info/js/css_selector_syntax.html



https://stackoverflow.com/questions/5315033/all-css-classes-in-page-using-js


```js

function getStyle(className) {
    var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules
    for(var x=0;x<classes.length;x++) {
        if(classes[x].selectorText==className) {
                (classes[x].cssText) ? alert(classes[x].cssText) : alert(classes[x].style.cssText);
        }
    }
}
getStyle('.test')

```
https://stackoverflow.com/questions/324486/how-do-you-read-css-rule-values-with-javascript







