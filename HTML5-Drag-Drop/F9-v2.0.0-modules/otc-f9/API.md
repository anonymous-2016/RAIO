# API


最新交易数据
公司简介

大事提醒
公司新闻
研究报告
公司公告

最新财务数据

    业绩预告（报告期2015-12-31，披露日期2016-02-22）
    业绩快报（报告期2015-12-31，披露日期2016-02-22）
    财务数据摘要（报告期2015-06-30）

公司表现（所属三板管理型行业二级：） 同业数据

市场表现 公司规模 公司业绩 公司估值

主营业务（截止2015-06-30）

按产品 按项目

产品及服务营业收入(元)营业成本(元)营业收入占比(%)


管理层概况与持股(截止2015-06-30)

高管离职信息

股本结构

股本股东

限售解禁安排

十大股东（截止2015-06-30）


股东户数（截止2015-06-30）


# 新三板 F9 速览 (证券速览)


# OTC

> OTC（Over-The-Counter）场外交易市场


## .SZ & .SH

http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=000001.SZ&market=4609&sid=hs
http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=600570.SH&market=4609&sid=hs


新三板 F9 - 速览

http://10.1.5.202/webservice/fastview/otcper/参数/聚源代码

http://10.1.5.202/webservice/fastview/otcper/otcperfast01/430002.OC


# stackLabels

http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/column-stacked/


```js

    stackLabels: {
        enabled: true,
        style: {
            fontWeight: 'bold',
            color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
    }


```



# Screenshots

https://screenshots.firefox.com/#tour


```js
//  e.target.classList & e.target.dataset

console.log(`e.target.dataset = \n`, e.target.dataset);
console.log(`uid `, uid);


window.onload = () => {
    initTabs();
    initSider();
    // OTC_IP = `${window.parent.location.protocol}//${window.parent.location.host}`;
    OTC_IP = `${window.parent.location.origin}`;
    OTC_PATH = `/webservice/fastview/otcper`;
    OTC_GILCODE = OTC_F9_FV.Utils.getParam(`gilcode`) ? OTC_F9_FV.Utils.getParam(`gilcode`) : `430002.OC`;
    // OTC_SOCKET = ``;
    console.log(`OTC_GILCODE `, OTC_GILCODE, typeof OTC_GILCODE);
    // OTC_GILCODE = OTC_F9_FV.Utils.getParam(`gilcode`);
    // OTC_IP = `http://${window.parent.location.host}`;
    // OTC_Paths = `/webservice/fastview/otcper`;
};

var OTC_IP = OTC_IP || ``;
var OTC_PATH = OTC_PATH || ``;
var OTC_SOCKET = OTC_SOCKET || ``;
var OTC_GILCODE = OTC_GILCODE || ``;

const OTC_GILCODE_URL = {
    ip: `http://10.1.5.202`,
    path: `webservice/fastview/otcper`,
    socket: `otcperfast11`,
    gilcode: `430002.OC`
};
// window.location.host: "10.1.5.202"
// window.location.origin: "http://10.1.5.202"

let otc_demo_url = `${OTC_GILCODE_URL.ip}/${OTC_GILCODE_URL.path}/${OTC_GILCODE_URL.socket}/${OTC_GILCODE_URL.gilcode}`;


// STOCK_IP = window.parent.location.origin;
// STOCK_PATH = window.parent.location.pathname;
// STOCK_GILCODE = OTC_F9_FV.Utils.getParam(`gilcode`);

    var OTC_IP = OTC_IP || ``;
    var OTC_PATH = OTC_PATH || ``;
    var OTC_PARAM = OTC_PARAM = ``;
    var OTC_GILCODE = OTC_GILCODE || ``;

    OTC_GILCODE =  OTC_F9_FV.Utils.getParam(`gilcode`);
    // OTC_IP = `http://${window.parent.location.host}`;
    // OTC_PATH = `/webservice/fastview/otcper`;
    console.log(`OTC_GILCODE `, OTC_GILCODE, typeof OTC_GILCODE);

    OTC_GILCODE =  OTC_F9_FV.Utils.getParam(`gilcode`);
    OTC_IP = `${window.parent.location.protocol}//${window.parent.location.host}`;
    OTC_PATH = `/webservice/fastview/otcper`;
// http://10.1.5.202/webservice/fastview/otcper/otcperfast01/430002.OC

```



```sh

$ touch company-performance-achievement.js company-performance-achievement.css company-performance-achievement.html company-performance-valuation.js company-performance-valuation.css company-performance-valuation.html

```


# 聚源代码 430002.OC

```js

import {UserException} from "../utils/throw_error";
import {UserConsoleError as ConsoleError} from "../utils/console_error";



console.log(`json = \n`, json);
console.log(`value = \n`, value);
console.log(`datas[0]["k"]= \n`, datas[0]["v"], typeof datas[0]["v"]);
console.log(`json = \n`, json, typeof(datas), Object.keys(datas));


try {
    throw new Error('Whoops!');
} catch (e) {
    console.log(e.name + ': ' + e.message);
}

try {
    let message = `handle json error!`,
        fileName = ``,
        lineNumber = ``;
    throw new Error(message, fileName, lineNumber);
    // new Error([message[, fileName[, lineNumber]]])
    // throw `Exception: \n handle json error!`;
} catch (err) {
    console.log(`catch error = \n`, err);
    console.log(`catch error.name = \n`, err.name);
    console.log(`catch error.message = \n`, err.message);
    console.log(`catch error.fileName = \n`, err.fileName);
    console.log(`catch error.lineNumber = \n`, err.lineNumber);
}


function UserException(message = ``, fileName = ``, lineNumber = 0){
   this.message = message;
   this.fileName = fileName;
   this.lineNumber = lineNumber;
   this.name = 'UserException';
}

try {
    let message = `handle json error!`,
        fileName = `latest-transaction-data.js`,
        lineNumber = 29;
    throw new UserException(message, fileName, lineNumber);
    // new Error([message[, fileName[, lineNumber]]]);
} catch (err) {
    console.log(`catch error = \n`, err);
    console.log(`catch error.name = \n`, err.name);
    console.log(`catch error.message = \n`, err.message);
    console.log(`catch error.fileName = \n`, err.fileName);
    console.log(`catch error.lineNumber = \n`, err.lineNumber);
}


const UserException = (message = ``, fileName = ``, lineNumber = 0) => {
   this.message = message;
   this.fileName = fileName;
   this.lineNumber = lineNumber;
   this.name = 'UserException';
};
// TypeError: UserException is not a constructor

console.log(`datas = \n`, datas);


let html = `
    <a
        href="#${id}"
        title="${title}"
        data-title="${title}"
        data-link="fv-company-news-link"
        data-disabled="${id !== "null" ? false : true}"
        data-link-detail="company-news-link-detail-module"
        data-newsId="${id}">
        ${title}
    </a>
`;
dom.insertAdjacentHTML(`beforeend`, html);

https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow

*{
    overflow: hidden;
    white-space: nowrap;
    /* single line & nowrap */
}

*{
    box-sizing: border-box;
    width: 438px;
    height: 46px;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    /* multi lines & no need nowrap */
}

tbody.otc-company-news-table-tbody>tr.otc-company-news-table-tr>td:nth-of-type(1) {
    box-sizing: border-box;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    text-overflow: ellipsis;
}

// display: table-header-group;

/usr/local/apache2/webapps/otc/f9
E:\github\RAIO\HTML5-Drag-Drop\F9-v2.0.0-modules\otc-f9

参数：
    otcperfast01    最新交易数据 latest-transaction-data
    otcperfast02    大事提醒 big-event-reminder
    otcperfast03    公司简介 company-brief-introduction
    otcperfast04    最新财务数据 latest-financial-data

    otcperfast05    公司表现-市场表现 company-performance-market
    otcperfast06    公司表现-公司规模 company-performance-scale
    otcperfast07    公司表现-公司业绩 company-performance-achievement
    otcperfast08    公司表现-公司估值 company-performance-valuation

    otcperfast09    主营业务 main-management-business 主要经营业务
    otcperfast10    股本股东 equity-shareholder
    otcperfast11    管理层概况 management-layer-profiles 管理层概况与持股

    news            公司新闻 company-news 新闻来源
    bulletin        公司公告 company-bulletin
    research        研究报告 research-report


touch equity-shareholder.css equity-shareholder.html equity-shareholder.js


touch .css .html .js
touch .css .html .js

/usr/local/apache2/webapps/otc/f9/build/js
E:\github\RAIO\HTML5-Drag-Drop\F9-v2.0.0-modules\otc-f9\build\js



/usr/local/apache2/webapps/stock/f9/fastview/build/js
E:\github\RAIO\HTML5-Drag-Drop\F9-v2.0.0-modules\fast-preview\build\js


[data-delete-span="delete-span"] {
    text-indent: 20px;
    font-size: 13px;
    width: 55px;
    height: 20px;
    line-height: 20px;
    float: right;
    display: block;
    position: absolute;
    top: 1px;
    right: -10px;
    cursor: pointer;
    background: url(../img/icons/delete-icon.png) 0px 2px #fff no-repeat;
    background: #f0f;
    box-sizing: border-box;
}

[data-link="otc-latest-transaction-data-link"]>a {
    color: #3285ff;
    text-decoration: none;
    font-size: 12px;
    font-weight: normal;
    margin-right: 54px;
    float: right;
    margin-top: 3px;
}


http://10.1.5.202/queryservice/bulletin/attachment/company/567706202818
http://10.1.5.202/queryservice/bulletin/attachment/company/1000000101286709



http://10.1.5.202/webservice/fastview/otcper/news/430002.OC
http://10.1.5.202/webservice/fastview/otcper/bulletin/430002.OC
http://10.1.5.202/webservice/fastview/otcper/research/430002.OC

http://10.1.5.202/webservice/fastview/otcper/otcperfast01/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast02/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast03/430002.OC

http://10.1.5.202/webservice/fastview/otcper/otcperfast04/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast04/400066.OC
有业绩预告
http://10.1.5.202/webservice/fastview/otcper/otcperfast04/832159.OC
有业绩快报


http://10.1.5.202/webservice/fastview/otcper/otcperfast05/430002.OC

http://10.1.5.202/webservice/fastview/otcper/otcperfast06/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast07/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast08/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast09/430002.OC

http://10.1.5.202/webservice/fastview/otcper/otcperfast10/430002.OC
http://10.1.5.202/webservice/fastview/otcper/otcperfast11/430002.OC

http://10.1.5.203/webtool/apitool/CompanyShortDesc

```

https://www.extendoffice.com/documents/excel/827-excel-save-selection-workbook-as-pdf.html

https://stackoverflow.com/questions/23540022/export-whole-html-page-to-pdf-using-jspdf-generation

https://addons.mozilla.org/en-US/firefox/addon/screenshot-capture-annotate/

https://addons.mozilla.org/en-US/firefox/addon/screengrab-fix-version/
https://addons.mozilla.org/en-US/firefox/addon/nimbus-screenshot/
https://addons.mozilla.org/en-US/firefox/addon/easyscreenshot/

https://getfireshot.com/installed-lite.php?ver=0.98.94&app=fx


# print.css & window.print()


```js

window.print();

let popupWin = window.open();
setTimeout(() => {
    console.log(`stop temporary`);
    // popupWin
    let print_btn = popupWin.document.querySelector(`.print.default`);
    print_btn.click();
}, 1000);
console.log(`no stop`);

window.close();


```

```js

//Chrome's versions > 34 is some bug who stop all javascript when is show a prints preview

let printContents = "Hello world!";

if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var popupWin = window.open();
    popupWin.window.focus();
    popupWin.document.write('<!DOCTYPE html><html><head>' +
        '<link rel="stylesheet" type="text/css" href="style.css" />' +
        '</head><body onload="window.print()"><div class="reward-body">' + printContents + '</div></html>');
    popupWin.onbeforeunload = function (event) {
        return 'Please use the cancel button on the left side of the print preview to close this window.\n';
    };
}else {
    var popupWin = window.open('', '_blank', 'width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWin.document.write('<!DOCTYPE html><html><head>' +
        '<link rel="stylesheet" type="text/css" href="style.css" />' +
        '</head><body onload="window.print()"><div class="reward-body">' + printContents + '</div>' +
        '<script>setTimeout(function(){ window.parent.focus(); window.close() }, 100)</script></html>');
}
popupWin.document.close();

```




```js

let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `😟暂无 新闻日期`;
let title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `🤓暂无 新闻标题`}`;

console.log(`json = \n`, json);

{
    "news": {
        name: "公司新闻",
        "xwtitle": "新闻标题",
        "xwnr": "新闻正文",//"xwnr": null,
        "xwsj": "新闻日期",
        "newid": "新闻id"
    },
    "bulletin": {
        name: "公告",
        "gsggtitle": "公告标题",
        "gsggsj": "公告日期",
        "id": "公告id",
        "fileType": "文件类型"
    },
    "research": {
        name: "研究报告",
        "publishDate": "发布时间",
        "infoSource": "信息来源",
        "orgCode": "机构代码",
        "title": "标题",
        "pageNum": "页码",
        "researchId": "id",
        "fileType": "文件类型",
        "writeDate": "撰写时间",
        "summary": "摘要"
    },
    "otcperfast01": {
        name: "最新交易数据",
        "rq": "截止日期",
        "spj": "收盘价",
        "zdf": "涨跌幅",
        "cjl": "成交量",
        "cje": "成交额",
        "hsl": "换手率",
        "zsz": "总市值",
        "ltsz": "流通市值",
        "sylttm": "市盈率_TTM",
        "syllyr": "市盈率_LYR",
        "sjllyr": "市净率_LYR",
    },
    "otcperfast02": {
        name: "大事提醒",
        "k": "k是第一列",
        "v": "v是第二列"
    },
    "otcperfast03": {
        name: "公司简介",
        "gsmc": "公司名称",
        "gsclsj": "公司成立时间",
        "gsgpsj": "公司挂牌时间",
        "zycpyfw": "主要产品和服务项目",
        "zjhhy": "所属证监会行业(二级)",
        "ssgnbk": "所属概念板块",
        "zjl": "总经理",
        "kggd": "控股股东",
        "sjkzr": "实际控制人",
        "zczb": "公司注册资本(万元)",
        "frdb": "法人代表",
        "zcdz": "注册地址",
        "lxdh": "联系电话",//"": "联系方式",
        "wz": "网址",
        "gsjs": "公司介绍",
    },
    "otcperfast04": {
        name: "最新财务数据",
        "yjyg": {
            // 业绩预告
            "bgq": "报告期",
            "plrq": "披露日期",
            "ggrq": "公告日期",
            "ygyw": "预告原文"
        },
        "yjkb": {
            // "业绩快报
            "bgq": "报告期",
            "plrq": "披露日期",
            "yysr": "营业收入(元)",// 1
            "yysrzz": "营业收入同比增长(%)",// 2
            "zczj": "总资产(元)",// 3
            "yylr": "营业利润(元)",
            "jbmgsy": "基本每股收益(%)",
            "jzc": "净资产(元)",
            "lrze": "利润总额(元)",
            "jzcsyljq": "ROE(%)",// 净资产收益率_加权
            "mgjzc": "每股净资产(元)",
            "jlr": "归属挂牌公司股东的净利润(元)",
            "jlrtbzz": "归属挂牌公司股东的净利润同比增长(%)",
            "xjllje": "经营活动产生的现金流量净额(元)"
        },
        "cwzy": {
            // "财务数据摘要"
            "bgq": "报告期",
            "jbmgsy": "基本每股收益",
            "yysr": "营业收入(元)",
            "zczj": "资产总计(元)",
            "xsmgsy": "稀释每股收益",
            "yylr": "营业利润(元)",
            "fzzj": "负债总计(元)",
            // "": "每股收益-扣除",
            "lrze": "利润总额(元)",
            "mgjzc": "归属于挂牌公司股东的每股净资产(元)",
            "jzc": "归属于挂牌公司股东的净资产(元)",
            "jlr": "归属挂牌公司股东的净利润(元)",
            "llje": "经营活动产生的现金流量净额(元)",
            "mgllje": "每股经营活动产生的现金流量净额(元)",
            "jlrkc": "归属挂牌公司股东的净利润_扣除(元)",
            "zzctbzz": "总资产同比增长(%)",
            "jzcsyljq": "净资产收益率_加权(%)",
            "yysrtbzz": "营业收入同比增长(%)",
            "xsmll": "销售毛利率(%)",
            "kcjq": "净资产收益率_扣除(%)",
            "jlrtbzz": "净利润同比增长(%)",
            "zcfzl": "资产负债率(%)"
        }
    },
    "otcperfast05": {
        name: "公司表现-市场表现",
        // 排名 ???
        // "zdf": "涨跌幅",
        "zdf": {// "涨跌幅"
            "rq": "日期",
            "index": "三板成指",
            "stock": "涨跌幅"
        },
        "hsl": {//换手率
            "hyrjhsl": "行业平均换手率",
            "scrjhsl": "市场平均换手率",
            "datas": [
                {// 数据
                    "secuCode": "证券代码",
                    "hsl": "换手率"
                },
            ]
        }
    },
    "otcperfast06": {
        name: "公司表现-公司规模",
        "hyzsz": "行业总市值",
        "hyltsz": "行业流通市值",
        "data": {
            "zqdm": "证券代码",
            "zsz": "总市值",
            "ltsz": "流通市值",
            "pm": "排名"
        },// 标的市值（即当前公司的数据）
        "datas": [
            {
                "zqdm": "证券代码",
                "zsz": "总市值",
                "ltsz": "流通市值",
                "pm": "排名"
            }
        ]// 前五名公司的数据
    },
    "otcperfast07": {
        name: "公司表现-公司业绩",
        // "": "行业均值", ???
        "top5": [
            {
                "zqdm": "证券代码",
                "mgsy": "每股收益",
                "pm": "排名",
                "ttm": "市盈率TTM"
            }
        ],// 排名前5的数据
        "stock": {
            "zqdm": "证券代码",
            "mgsy": "每股收益",
            "pm": "排名",
            "ttm": "市盈率TTM"
        },//
        "mgsypj": "每股收益 行业均值",
        "sylpj": "TTM 行业均值" // 高于, 低于, 弱于
    },
    "otcperfast08": {
        name: "公司表现-公司估值",
        // "": "行业均值", ???
        "top5": [
            {
                "zqdm": "证券代码",
                "mgsy": "每股收益",
                "pm": "排名",
                "ttm": "市盈率TTM"
            }
        ],// 排名前5的数据
        "stock": {
            "zqdm": "证券代码",
            "mgsy": "每股收益",
            "pm": "排名",
            "ttm": "市盈率TTM"
        }// 当前股票的数据
    },
    "otcperfast09": {
        name: "主营业务",
        "zz": "主营业务增长",
        "zb": "占营业总收入(元)",
        "datas": [
            {
                "xm": "项目",// 产品及服务
                "yysr": "营业收入(万元)",
                "yycb": "营业成本(万元)",
                "yysrzb": "营业收入占比(%)",
                "ml": "毛利(万元)",
            }
        ]// ???
    },
    "otcperfast10": {
        name: "股本股东",
        "gbjg": {
            "jzrq": "截止日期",
            "zgb": "总股本",
            "yxsg": "有限售股",
            "wxsg": "无限售股",
            "bdyy": "变动原因",
            "yxszb": "有限售占比",
            "wxszb": "无限售占比",
            "yxskzrzb": "有限售_控股股东和实际制人数量占比",
            "yxsggzb": "有限售_董事监事高管数量占比",
            "yxshxygzb": "有限售_核心员工数量占比",
            "yxsqtzb": "有限售_其它有限售数量占比",//
            "wxskzrsl": "无限售_控股股东和实际制人数量",
            "wxsggsl": "无限售_董事监事高管数量",
            "wxshxygsl": "无限售_核心员工数量",//
            "yxskzrsl": "有限售_控股股东和实际制人数量",
            "yxsggsl": "有限售_董事监事高管数量",
            "yxsygsl": "有限售_核心员工数量",
            "yxsqtsl": "有限售_其它有限售数量"
        },// 股本结构
        "sdgd": {
            "datas": [
                {
                    "gdmc": "股东名称",
                    "cgs": "持股数(股)",
                    "zb": "占比(%)",
                    "zjbd": "增减变动",
                    "jglx": "机构类型"
                }
            ],
            "sj": "时间",
            "hj": "合计",
            "bh": "变化",
        },// 十大股东
        "gdhs": {
            "sj": "时间",
            "zhs": "总户数",
            "zhszz": "总户数环比增长",
            "hjcgs": "户均持股数",
            "hjzz": "户均环比增长",
            "hsjsq": "户数较上期增加",
            "hjjsq": "户均持股较上期"
        },// 股东户数
        // 限售解禁安排 ??? 前端去掉这个
    },
    "otcperfast11": {
        name: "管理层概况",
        "ggcg": {
            "dsh": "董事会人数",
            "jsh": "监事会人数",
            "gg": "高管人数",
            "hxyg": "核心员工",// new add
            "sj": "时间",
            "ggs": [
                {
                    "xm": "姓名",
                    "xb": "性别",
                    "nl": "年龄",
                    "xl": "学历",
                    "zw": "职务",
                    // "": "",// 是否在公司领薪 ???
                    "qmcgsl": "持股数量(股)",
                    "zb": "占比(%)",
                    "zjbd": "增减变动(股)"
                }
            ]
        },// 高管持股
        "gglz": [
            {
                "xm": "姓名",
                "zw": "职务",
                "beginDate": "任职起始日期",
                "endDate": "离职日期",// 任职终止日期
                "rz": "在任其他职务"// 是否还在公司担任职务
            }
        ]// 高管离职信息
    },
    "otcperfast0?": {
        name: "",
        "": ""
    },
}


<div data-div="tbody-div" data-titles="data-otc-LFD-title">
    <p>业绩预告-暂无数据.</p>
</div>

Object.keys(json);
copy(Object.keys(json));

[
    "news",
    "bulletin",
    "research",
    "otcperfast01",
    "otcperfast02",
    "otcperfast03",
    "otcperfast04",
    "otcperfast05",
    "otcperfast06",
    "otcperfast07",
    "otcperfast08",
    "otcperfast09",
    "otcperfast10",
    "otcperfast11"
]

copy(Object.values(json));

```



# webtool


```js

    最新交易数据
    {
    "SecuCode": "430005",
    "ApiName": "NQ.F9.QuickReference.LatestDealData",
    "FastDateFilterType": "Customer"
    }

    分红预案/分红实施
    Type: 1:分红预案;2:分红实施;
    {
    "SecuCode": "430005",
    "ApiName": "NQ.F9.QuickReference.BigNews",
    "Type":"1",
    "FastDateFilterType": "Customer"
    }

    最新增发预案
    {
    "SecuCode": "831918",
    "ApiName": "NQ.F9.QuickReference.LatestIssuePre"
    }

    定报预约披露
    {
    "SecuCode": "430074",
    "ApiName": "NQ.F9.QuickReference.PrePublish"
    }

    业绩预告
    {
    "SecuCode": "834178",
    "ApiName": "NQ.F9.QuickReference.PerformanceForecast"
    }

    业绩快报
    {
    "SecuCode": "838019",
    "ApiName": "NQ.F9.QuickReference.PerformanceQuickReportReport"
    }

    财务摘要
    {
    "SecuCode": "832002",
    "ApiName": "NQ.F9.QuickReference.FinanceAbstract"
    }

    个股行情/指数行情
    {
    "SecuCode": "430057",
    "ApiName": "NQ.F9.QuickReference.MarketPerformance"
    }

    换手率
    {
    "SecuCode": "430002",
    "ApiName": "NQ.F9.QuickReference.TurnoverRate"
    }

    公司规模
    {
    "SecuCode": "430074",
    "ApiName": "NQ.F9.QuickReference.CompanySize"
    }

    公司业绩,公司估值
    {
    "SecuCode": "430037",
    "ApiName": "NQ.F9.QuickReference.PerformanceValuation"
    }

    股本股东
    {
    "SecuCode": "430074",
    "ApiName": "NQ.F9.QuickReference.ShareStruHolder"
    }

    十大股东
    {
    "SecuCode": "430074",
    "ApiName": "NQ.F9.QuickReference.Top10Holder"
    }
    管理层概况
    {
    "SecuCode": "430074",
    "ApiName": "NQ.F9.QuickReference.Manager"
    }

```

