# namespaces

> OTC_TS_FV

OTC_TS_FV.Modules

OTC_TS_FV.Utils

OTC_TS_FV.Helper


# 新三板专题统计

> namespaces


# disable table draggable

```css

table{
    pointer-events: none;
}


table {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    user-drag: none;
    -webkit-touch-callout: none;
}

```

```js

document.querySelector(`.fv-indicators-per-share-table`).ondragstart = function() {
    return false;
};


let tables = document.querySelectorAll(`[data-table*="table"]`);

for (let i = 0; i < tables.length; i++) {
    tables[i].addEventListener(`dragstart`, (e) => {
        console.log(`\ntables[i] = `, tables[i]);
        console.log(`\ne.target = `, e.target);
        e.target.setAttributes(`draggable`, `false`);
        // date_title.setAttribute(`title`, `${arr[0].sj}`);
    });
}

$("table").mousedown(function(e){
    e.preventDefault()
});




```



```js

// init
OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init = OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init || (
    (
        {
            ip,
            path,
            socket,
            skin,
            // gilcode
        } = {
            ip: `http://10.1.5.202`,
            path: `/webservice/fastview/otc`,
            socket: `/otcfast03`,
            skin: `white`,
            // gilcode: `430002.OC`
        }
    ) => {
        let url = `${ip}${path}${socket}`,
        // let url = `http://10.1.5.202/webservice/fastview/otc/otcfast13`,
        // let url = `http://10.1.5.202/otc/ts/json/03.json`,// no data?
        // let url = `http://10.1.5.202/otc/ts/json/03-old.json`,
            uid = `[data-table-protocol="otc-table-body-transactions-leaderboard-protocol"]`;
        // url = `http://10.1.5.202/webservice/fastview/otc/otcfast03/`;
        OTC_TS_FV.Modules.transactionsLeaderboardProtocol(url, uid, false);
        // 备注：在涨跌幅和成交额做个可以自动排序的功能。
        // 排行榜协议 otcfast03
    }
);

// OTC_SKIN ???
var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/otc`,
    OTC_SKIN = window.OTC_SKIN || `black`;
    // OTC_GILCODE = window.OTC_GILCODE || `430002.OC`;

OTC_TS_FV.Modules.transactionsLeaderboardProtocol.init({
    ip: OTC_IP,
    path: OTC_PATH,
    socket: `/otcfast03`,
    skin: OTC_SKIN,
    // gilcode: OTC_GILCODE
});


// OTC_TIME
// bonds


```




http://jira.gildata.com:8888/browse/GFT-430



http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/chart/colors/





```js

// newly-added-listing

"use strict";

/**
 * @namespace OTC_TS_FV : New San Ban Thematic Statistics
 * @name newly-added-listing 新增挂牌
 * @createed 2017.11.07
 * @author xgqfrms
 * @copyright Gildata, Inc 2017-present
 * @license MIT
 * @version v1.1.1
 *
 * @param {* String} url
 * @param {* DOM Element} uid
 * @param {* Boolean} debug
 */

// namespaces
var OTC_TS_FV = OTC_TS_FV || {};

// sub namespaces
OTC_TS_FV.Modules = OTC_TS_FV.Modules || {};
OTC_TS_FV.Utils = OTC_TS_FV.Utils || {};
OTC_TS_FV.Helper = OTC_TS_FV.Helper || {};

/*

OTC_TS_FV.Modules.newlyAddedListing = OTC_TS_FV.Modules.newlyAddedListing || (() => console.log(`module testing!`));
// () => console.log(`module testing!`)

typeof OTC_TS_FV.Modules.newlyAddedListing
// "function"

OTC_TS_FV.Modules.newlyAddedListing();
// module testing!

*/





```











# 速览


## fast-preview & path

http://localhost:3000/fast-preview/index.html#模块选择

```sh

# ..\F9-v2.0.0-modules\
# in case of path error, cause icons 404!

$ browser-sync start --server --files "./fast-preview/*.*"

# http://localhost:3000/fast-preview/index.html#模块选择

```



## bash


```sh


$ touch xyz.html xyz.css xyz.js


$ touch abc.html xyz.html ufo.html



$ touch new-sb-thematic-statistics-bulletin.html new-sb-thematic-statistics-bulletin.css new-sb-thematic-statistics-bulletin.js



$ touch 01.json 02.json 03.json 04.json 05.json 06.json 07.json 08.json 09.json 10.json 11.json news.json bulletion.json

$ touch 04.json 05.json 06.json 07.json 08.json 09.json 10.json 11.json news.json bulletion.json


$ touch news.json, bulletion.json
# bad
# touch bad comma.png


```


## front-end auto create template script ??? string ???

> js

> html

> css



## multi tabs & multi modules  === one API(args) & click fetch data (default tab one)

## one tab & multi modules  === one API(objects in object)





1. CSS classname translate to Hash

2. DOM in Module

3. using ProtoType to adding Utils functions










