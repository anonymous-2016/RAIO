# Stock F9 速览


key #31373d

value odd #212529
value even #25292e

color #bbc1c7

# turn to node



turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-company-announcements-data"]`)

## highstock crosshairs


> highstock 十字准星线


http://stepday.com/topic/?633


```js

    tooltip: {
        crosshairs:[
            {
                enabled:true,//是否显示X轴标线
                width:3,//标线宽度
                color:'red' //标线颜色值
            },
            {
                enabled:true,//是否显示Y轴标线
                width:3,//标线宽度
                color:'green' //标线颜色值
            }
        ],
        style:{
            display:'none' //通过样式表控制不显示tooltip数据提示框
        }
    },

```


# tooltip.crosshairs

> Since 4.1, the crosshair definitions are moved to the Axis object in order for a better separation from the tooltip.

xAxis.crosshair

yAxis.crosshair

https://api.highcharts.com/highstock/tooltip.crosshairs

https://api.highcharts.com/highstock/xAxis.crosshair
https://api.highcharts.com/highstock/yAxis.crosshair


http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/stock/xaxis/crosshairs-xy/
http://jsfiddle.net/fzjtx63p/


http://jsfiddle.net/r7fdh/
http://jsfiddle.net/qnTp2/




```html

<link rel="stylesheet" data-css="data-css-uid" href="../common/more.css">


<span data-link="fv-important-infos-data-link">
    <a href="#more" data-uid="2172" data-turn-to-uid="node-uid-important-infos-data">更多</a>
</span>
<span data-link="fv-indicators-per-share-data-link">
    <a href="#more" data-uid="2846" data-turn-to-uid="node-uid-indicators-per-share-data">更多</a>
</span>
<span data-link="fv-profit-forecast-data-link">
    <a href="#more" data-uid="2908" data-turn-to-uid="node-uid-profit-forecast-data">更多</a>
</span>
<span data-link="fv-agency-rating-data-link">
    <a href="#more" data-uid="2910" data-turn-to-uid="node-uid-agency-rating-data">更多</a>
</span>
<span data-link="fv-top-ten-shareholders-data-link">
    <a href="#more" data-uid="2681" data-turn-to-uid="node-uid-top-ten-shareholders-data">更多</a>
</span>
<span data-link="fv-company-news-data-link">
    <a href="#more" data-uid="2906" data-turn-to-uid="node-uid-company-news-data">更多</a>
</span>
<span data-link="fv-company-announcements-data-link">
    <a href="#more" data-uid="2898" data-turn-to-uid="node-uid-company-announcements-data">更多</a>
</span>
<span data-link="fv-research-report-data-link">
    <a href="#more" data-uid="2904" data-turn-to-uid="node-uid-research-report-data">更多</a>
</span>
<span data-link="fv-equity-pledge-data-link">
    <a href="#more" data-uid="2741" data-turn-to-uid="node-uid-equity-pledge-data">更多</a>
</span>
<span data-link="fv-changes-shareholding-executives-data-link">
    <a href="#more" data-uid="62283" data-turn-to-uid="node-uid-changes-shareholding-executives-data">更多</a>
</span>
<span data-link="fv-financing-and-margin-balance-difference-trend-data-link">
    <a href="#more" data-uid="2876" data-turn-to-uid="node-uid-financing-and-margin-balance-difference-trend-data">更多</a>
</span>
<span data-link="fv-institutional-shareholding-change-statistics-data-link">
    <a href="#more" data-uid="2685" data-turn-to-uid="node-uid-institutional-shareholding-change-statistics-data">更多</a>
</span>
<span data-link="fv-monthly-capital-flows-large-single-statistics-data-link">
    <a href="#more" data-uid="2872" data-turn-to-uid="node-uid-monthly-capital-flows-large-single-statistics-data">更多</a>
</span>
<span data-link="fv-holdings-participation-situation-data-link">
    <a href="#more" data-uid="2705" data-turn-to-uid="node-uid-holdings-participation-situation-data">更多</a>
</span>


// 近期重要事项
// 股价/成交量

<span data-link="fv-recent-important-events-data-link">
    <a href="#more" data-uid="2705" data-turn-to-uid="node-uid-recent-important-events-data">更多</a>
</span>
<span data-link="fv-stock-price-turnover-data-link">
    <a href="#more" data-uid="2705" data-turn-to-uid="node-uid-stock-price-turnover-data">更多</a>
</span>




<link rel="stylesheet" data-css="data-css-uid" href="../common/more.css">


// bug
<div class="fv-h5dnd-modules-title-box">
    <p class="fv-h5dnd-modules-title" data-title="fv-stock-price-turnover-title">股价/成交量</p>
</div>

```

```js


// more
setTimeout((debug = false) => {
    let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-important-infos-data"]`);
    if (debug) {
        console.log(`turn_to_uid = \n`, turn_to_uid);
    }
    if (turn_to_uid !== null) {
        turn_to_uid.addEventListener(`click`, (e) => {
            let uid = e.target.dataset.uid,
                gilcode = STOCK_SecCode ? STOCK_SecCode : window.STOCK_SecCode,
                node_path = `12\\${gilcode}\\${uid}`;
            try {
                if (uid !== "null") {
                    ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                }else{
                    console.log(`ChromeExternal & ${uid} === null\n`);
                }
            } catch (error) {
                console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
            }
        });
    }else{
        throw new Error(`turn_to_uid is `, turn_to_uid);
    }
}, 0);



// turn to node
setTimeout((debug = false) => {
    let turn_to_uid = document.querySelector(`[data-turn-to-uid="node-uid-latest-transaction-data"]`);
    // let turn_to_uids = document.querySelectorAll(`a[node-uid-latest-transaction-data]`);
    if (debug) {
        console.log(`turn_to_uid = \n`, turn_to_uid);
    }
    turn_to_uid.addEventListener(`click`, (e) => {
        let uid = e.target.dataset.uid,
            gilcode = OTC_GILCODE,
            node_path = `12\\${gilcode}\\${uid}`;
        // console.log(`node path`, node_path);
        // 跳转 otc f9 深度资料的命令：
        // ChromeExternal.Execute("ExecuteCommand", "命令ID\\证券代码\\节点ID");
        // \ 反斜线要转义！
        try {
            if (uid !== "null") {
                ChromeExternal.Execute("ExecuteCommand", `12\\${gilcode}\\${uid}`);
                // ChromeExternal.Execute("ExecuteCommand", `12\\${window.OTC_GILCODE}\\${uid}`);
                // ChromeExternal.Execute("ExecuteCommand", `12\\600570.SH\\${uid}`);
            }else{
                console.log(`ChromeExternal & ${uid} === null\n`);
            }
            // Uncaught SyntaxError: Octal escape sequences are not allowed in strict mode.
            // \ 反斜线要转义！
        } catch (error) {
            console.log(`%c ChromeExternal & caught error = \n`, `color: red; font-size: 23px;`, error);
        }
    });
}, 0);

```


# Highchart & scrollbar bug!



1. lib: highstock.js

2. method: Highcharts.chart()

http://10.1.5.202/stock/f9/fastview/build/js/holdings-participation-situation.min.js

http://10.1.5.202/stock/f9/f9-fastview/build/js/indicators-per-share.min.js

# no Data


http://cdn.hcharts.cn/highcharts/modules/no-data-to-display.js

https://api.highcharts.com/highcharts/noData

```js

    Highcharts.setOptions({
        lang: {
            noData: '暂无数据'
        }
    });


```b



f9-fastview & fastview

```js

    // init
    STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
    // STOCK_IP = `http://${window.parent.location.host}`;
    // STOCK_SecCode = `000001.SZ`;
    STOCK_IP = `http://10.1.5.202`;
    STOCK_Paths = `/webservice/fastview/stock`;
    console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);

    // http:// !== http:://
    STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`gilcode`);
    // STOCK_SecCode = STOCK_F9_FV.Utils.getParam(`secucode`);
    STOCK_IP = `${window.parent.location.protocol}//${window.parent.location.host}`;
    // STOCK_IP = `${window.parent.location.protocol}://${window.parent.location.host}`;
    STOCK_IP = `http://${window.parent.location.host}`;
    STOCK_Paths = `/webservice/fastview/stock`;
    console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);

    // console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
    let URL = `${STOCK_IP}${STOCK_Paths}${STOCK_SecCode}`;
    console.log(`URL`, URL);

```

# gilcode=600570.SH & gilcode=000001.SZ

http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=000001.SZ&market=4609&sid=hs

http://10.1.5.202/stock/f9/fastview/sidebar.html?gilcode=600570.SH&market=4609&sid=hs


# iframe

> pass .SZ/.SH



http://localhost:3000/?gilcode=000003&market=4609&sid=hs

http://localhost:3000/?gilcode=600570&market=4609&sid=hs






# uglifyjs

> --mangle-props & -m


```js

/*



// OK ???
uglifyjs -h


# BAD ???
uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props reserved=["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]



# OK
uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props reserved=["STOCK_IP"]



uglifyjs ./libs/sidebar.js -o ./build/sidebar.min.js -c --mangle-props keep_quoted



properties: {
    // mangle property options
    reserved: ["STOCK_IP", "STOCK_Paths", "STOCK_SecCode"]
},


*/

```





# 股票代码 (seccode)

SH 即表示在上海证券交易所所上市的股票,(SH即ShangHai的拼音首位),如 SH600616 即代表在上海证券交易所上市的民生银行;

SZ 即表示在深圳证券交易所所上市的股票,(SZ即ShenZhen的拼音首位)如 SZ000001 即表示在深圳证券交易所上市的深发展!


http://10.1.5.202/webservice/fastview/stock/news/000060.SZ

http://10.1.5.202/webservice/fastview/stock/news/600570.SH


http://10.1.5.203/http/manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22IndexF10IndexFund%22}


# 股票代码 查询一览表

http://quote.eastmoney.com/stocklist.html


decodeURI(`https://cdn.xgqfrms.xyz/?{%27SecuCode%27:%27600570%27,%27IndexCode%27:%27147487%27,%27ImageType%27:%271%27,%27FastDateFilterType%27:%27Customer%27,%27BeginDate%27:%272017-10-17%27,%27EndDate%27:%272017-12-03%27,%27ApiName%27:%20%27JYPlateIndexIndustryImage%27%20}`);


# getParam

## Ok

https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs

## BAD

https://cdn.xgqfrms.xyz/?{'SecuCode':'600570','IndexCode':'147487','ImageType':'1','FastDateFilterType':'Customer','BeginDate':'2017-10-17','EndDate':'2017-12-03','ApiName': 'JYPlateIndexIndustryImage' }


http://222.73.146.143/f10/view/index.html?secucode=000001&market=4609&sid=hs


# gilcode

https://cdn.xgqfrms.xyz/?gilcode=600570.SH&market=4609&sid=hs
https://cdn.xgqfrms.xyz/?gilcode=000001.SZ&market=4609&sid=hs


https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs


## .SH & .SZ

> 600570.SH

> 000001.SZ

gilcode
secucode
market
sid

```js


    var COOKIE_DOMAIN = COOKIESDIAMON = '.gearbest.com';
    var DOMAIN = 'https://www.gearbest.com',
        MAIN_DOMAIN = 'https://www.gearbest.com',
        MOBILE_URL = 'https://m.gearbest.com/',
        DOMAIN_IMG = 'https://review.gbtcdn.com';
    var JS_IMG_URL = 'https://css.gbtcdn.com/imagecache/GB3/';

    var JS_LANG = '';

    var UPLOAD_URL = 'https://uploads.reuew.com/',
        DOMAIN_CART = 'https://cart.gearbest.com',
        DOMAIN_USER = 'https://user.gearbest.com',
        HTTPS_LOGIN_DOMAIN = 'https://login.gearbest.com',
        HTTPS_ORDER_DOMAIN = 'https://order.gearbest.com';
    var WEB_CLICK_DOMAIN = 'https://webclick.appinthestore.com/click/index';

    var GOODSPRICE = 'https://s.gearbest.com/api/gearbest/v2/goods/price';


    const getUrlParamete = function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        console.log(`reg = `, reg);
        // reg =  /(^|&)debug=([^&]*)(&|$)/
        var r = window.location.search.substr(1).match(reg);
        console.log(`window.location.search = `, window.location.search);
        // "?secucode=000001&market=4609&sid=hs&debug=false"
        // match() ???
        console.log(`result = `, r);
        // ["&debug=false", "&", "false", "", index: 34, input: "secucode=000001&market=4609&sid=hs&debug=false"]
        if (r !== null){
            return decodeURI(r[2]);
        }else{
            return null;
        }
    };
    var $debugCode = getUrlParamete('debug');
    // https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs&debug=false

```



# keyghost

> 键盘精灵???

https://www.mukedaba.com/thread-561-1-1.html

## JavaScript实现按键精灵的原理分析

https://www.52jbj.com/jbdq/567653.html
http://www.jb51.net/article/106286.htm

http://www.phperz.com/article/17/0623/327424.html


https://codepen.io/strick/pen/xgNGbz

https://developer.mozilla.org/zh-CN/docs/Web/API/Event
https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent
https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/TouchEvent
https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent



> JavaScript 中的事件处理

https://www.tianmaying.com/tutorial/javascript-event
https://www.zhihu.com/question/30970837



> js在输入框屏蔽按键,只能键入数字的示例代码

https://yq.aliyun.com/wenji/169729


代码如下:

```html

<input type='text' value='1' onkeydown='return GetInput()' onkeyup='Set(this)' >


<script language="javascript">
    function GetInput(){
        //屏蔽非数字和非退格符
        var k = event.keyCode;
        //48-57是大键盘的数字键，96-105是小键盘的数字键，8是退格符←
        f ((k <= 57 && k >= 48) || (k <= 105 && k >= 96) || (k== 8)){
            return true;
        } else {
            return false;
        }
    }
    function Set(obj){
        //即时处理输入框的内容,比如进行某些运算
    }
</script>

<pre>
    技术要领：onkeydown事件先于onkeyup事件被触发.<br/>
    当 onkeydown 事件 return false; 时 onkeyup 事件将不会被触发，<br/>
    并且输入框中也不会有用户刚按下的这个字符，从而实现了屏蔽某些字符的目的。<br/>
    <hr/>
    了解了这一事件触发原理，思想上应当有所延伸(比如鼠标的几个事件也会是这样的机制)...
</pre>

```


```js


console.log(`STOCK_SecCode `, STOCK_SecCode, typeof STOCK_SecCode);
console.log(`gilcode `, gilcode, typeof gilcode);

// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast${num}/600570.SH`;

```



# webpack & uglify

> except keywords ???

https://github.com/webpack/webpack

https://webpack.js.org/concepts/loaders/

https://webpack.js.org/loaders/

https://webpack.js.org/development/how-to-write-a-loader/


```js

// except: ['$super', '$', 'exports', 'require'],//排除关键字 ???

```

https://webpack.js.org/loaders/babel-loader/
https://webpack.js.org/loaders/html-loader/

https://webpack.js.org/loaders/imports-loader/
https://webpack.js.org/loaders/exports-loader/

## plugins

https://webpack.js.org/plugins/

https://github.com/mishoo/UglifyJS2
https://github.com/alexlamsl
https://github.com/webpack-contrib/uglifyjs-webpack-plugin/blob/master/package.json

https://github.com/webpack-contrib/uglifyjs-webpack-plugin#uglifyoptions
https://github.com/webpack-contrib/uglifyjs-webpack-plugin/tree/master#uglifyoptions

https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options
https://github.com/mishoo/UglifyJS2/tree/harmony#mangle-properties-options


https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
https://www.npmjs.com/package/uglify-es

https://www.npmjs.com/package/uglifyjs-webpack-plugin

https://github.com/mishoo/UglifyJS2/tree/harmony
https://github.com/mishoo/UglifyJS2/tree/harmony#parse-options
https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options

https://github.com/mishoo/UglifyJS2/tree/harmony#mangle-options

> 处理选项

撕裂, 乱砍, 轧布; 压榨机


## keep_classnames

keep_classnames (default: false)

Pass true to prevent the compressor from discarding class names.


## keep_fnames
keep_fnames (default: false)

Pass true to prevent the compressor from discarding function names.
Useful for code relying on Function.prototype.name.


```js

// test.js
var globalVar;
function funcName(firstLongName, anotherLongName) {
    var myVariable = firstLongName +  anotherLongName;
}


var code = fs.readFileSync("test.js", "utf8");

UglifyJS.minify(code).code;
// 'function funcName(a,n){}var globalVar;'

UglifyJS.minify(code, {mangle: {reserved: ['firstLongName']}}).code;
// 'function funcName(firstLongName,a){}var globalVar;'

UglifyJS.minify(code, {mangle: {toplevel: true }}).code;
// 'function n(n,a){}var a;'

```

browser-sync start --server --files "./stock/*.*"
browser-sync start --server --files "./*.*"


# https://cdn.xgqfrms.xyz/index.html?gilcode=000001.SZ&market=4609&sid=hs



```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!
$ cd ../

$ browser-sync start --server --files "./fast-preview/*.*"

# http://localhost:3000/fast-preview/sidebar.html#模块选择

# HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/common/absolute-center.html

```

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://jira.gildata.com:8888/secure/RapidBoard.jspa?rapidView=29&projectKey=GFT&view=planning&selectedIssue=GFT-1494&quickFilter=57


http://localhost:3000/stock/




# webpack

ES6 => ES5


??? path

./
../

relative path ???

absolute path ???


otc


## OCT

> OTC（Over-The-Counter）场外交易市场

https://www.douban.com/note/617482827/

http://www.xinsanban8.com/shehui/20171120/17905.html

https://otc.gf.com.cn/notice_detail/new/56039510343ca3d3060b40c1

https://www.zhihu.com/question/34737321?sort=created






# data-*

> bug ???

```js

document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);


```

title(active highlight)
#2e2f33
title()
#56575b

text
#4d4d4d

    navigator: {
        height: 20,
        margin: 10
    },
    scrollbar: {
        enabled: false,
        // no scrollbar, only using rangeSelector
    },


/* svg style */


/*
rect {
    x: 0;
    y: 5;
    width: 17;
    height: 10;
    fill: rgb(255, 25, 25);
    rx: 0;
    ry: 0;
}
*/



border: 1px solid #d7dbe0;



## web server

> Apache & Nginx

/usr/local/apache2/webapps/



http://10.1.5.203/webtool/apitool/

http://10.1.5.202/stock/f9/fastview/sidebar.html

http://10.1.5.202/xsb/ntb-zs/index.html
http://10.1.5.202/xsb/f9/index.html


/usr/local/apache2/webapps/stock/f9/fastview

/usr/local/apache2/webapps/xsb/ntb-zs
/usr/local/apache2/webapps/xsb/f9




http://jira.gildata.com:8888/secure/attachment/28925/Api1.txt

http://10.1.5.202/stock/f9/fastview/sidebar.html



http://10.1.64.125/stock/f9/sulan/sulan.html

http://10.1.5.202/stock/f9/sulan/sulan.html


file:///E:/github/RAIO/HTML5-Drag-Drop/XSB_F9/otc/otc/sulan/otcsulan.html



```js

swal("你确定要删除此模块?", {
    buttons: {
        cancel: {
            text: "确定",
            value: "cancel",
        },
        ok: {
            text: "取消",
            value: "ok",
        }
    },
})
.then((value) => {
    switch (value) {
        case "cancel":
            swal("已取消删除此模块!", "success");
            break;
        case "ok":
            swal("你确定要删除此模块?", "warning");
            break;
        default:
            swal("Got away safely!");
    }
});

```



## tips

> delete multi lines

Ctrl + X

{
    config.js,
    agency-research-statistics.js,
    agency-rating.js,
    changes-shareholding-executives.js,
    company-announcements.js,
    company-news.js,
    equity-pledge.js,
    financing-and-margin-balance-difference-trend.js,
    holdings-participation-situation.js,
    important-infos.js,
    indicators-per-share.js,
    institutional-shareholding-change-statistics.js,
    investor-relations.js,
    monthly-capital-flows-large-single-statistics.js,
    profit-forecast.js,
    recent-important-events-backup.js,
    recent-important-events.js,
    research-report.js,
    stock-price-turnover.js,
    top-ten-shareholders.js
}



有没有人知道，如何用比较简单方式来获得一组无重复的文件名？

像这样的结果：

{
    agency-research-statistics.js,
    agency-rating.js,
    changes-shareholding-executives.js,
    company-announcements.js,
    company-news.js,
    config.js,
    equity-pledge.js,
    financing-and-margin-balance-difference-trend.js
}


## how to get all the files's names in a easy way???

0. get all files's name `dir | clip`

1. multi edit `Alt+Click`
2. delete duplication `Ctrl + X`
3. format `Ctrl+K` `Ctrl+F`












