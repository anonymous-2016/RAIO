# namespaces

> OTC_TS_FV

OTC_TS_FV.Modules

OTC_TS_FV.Utils

OTC_TS_FV.Helper




## ES6 bug & polyfill

### babel-polyfill

https://babeljs.io/docs/usage/polyfill/

> Because this is a polyfill (which will run before your source code),
 we need it to be a `Dependency`, not a `devDependency`.

```sh

$ npm i -S babel-polyfill


```

### whatwg-fetch

https://github.com/github/fetch#installation


```sh

$ npm i -S whatwg-fetch

# import "whatwg-fetch";

# entry: ['whatwg-fetch', ...]

```


highcharts-axis-labels highcharts-xaxis-labels

text-anchor="right"

深色标题字色: #bcc1c7


highcharts-axis-labels highcharts-yaxis-labels


#666 => #bcc1c7

white black






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


[data-tabs="tabs-box"] {
    box-sizing: border-box;
    width: 542px;
    height: 100%;
    margin: 10px auto;
    background: #fff;
    /* border: 1px solid red; */
}

[data-tab="tab-container-box"] {
    box-sizing: border-box;
    background: #fff;
    width: 540px;
    /* height: 830px; */
    /* min-height: 100px; */
    overflow: hidden;
    /* border: 1px solid #ccc; */
    border: 0;
    /* margin-top: 5px; */
}

[data-tab="tab-title-box"] {
    background: #fff;
    border: 0;
    /* border: 1px solid red; */
    border-top: 1px solid #bacadb;
    border-left: 1px solid #bacadb;
    border-right: 1px solid #bacadb;
    height: 33px;
}

[data-tab="tab-title"] {
    box-sizing: border-box;
    width: 100px;
    float: left;
    text-align: center;
    background: #e8eefa;
    border: 1px solid #bacadb;
    margin-left: 10px;
    margin-top:  3px;
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

## no data


```js

    // no data
    let no_data_dom = document.querySelector(`.otc-turnover-trend-diagram-title-box`),
        hs_container = document.querySelector(`#turnover_trend_protocol_diagram_hs_container`);
    // no data
    let no_data_p = `
        <div data-margin="no-data-margin-top">
            <p data-none="no-data-p">
                <span data-none="no-data-span"></span>
            </p>
        </div>
    `;

    // no data
    hs_container.style.display = "none";
    // table_container.style.display = "none";
    let hasNoData = no_data_dom.nextElementSibling.dataset.margin || ``;
    // "no-data-margin-top" / undefined => "no-data-margin-top" / ``
    if (hasNoData === ``) {
        if (hasNoData !== `no-data-margin-top`) {
            no_data_dom.insertAdjacentHTML(`afterend`, no_data_p);
            // console.log(`OK`);
        }else{
            // console.log(`Error`);
        }
    }else{
        // in case of duplication!
    }

```

# CSS bug

> HS & HC

```css

highcharts-axis highcharts-xaxis

highcharts-tick

highcharts-axis-line

highcharts-axis-line
highcharts-axis highcharts-xaxis highcharts-tick
highcharts-axis highcharts-xaxis highcharts-plot-background



/* black */
background: #25292e;
color: #bbc1c7;

border: 1px solid #4a4c4f;


// HS & HC

white black
#e9e9e9 #2d3039


/* black */
[data-none="no-data-hc"] {
    box-sizing: border-box;
    line-height: 23px;
    height: 32px;
    width: 100%;
    font-family: "Microsoft YaHei", sans-serif, serif;
    font-weight: normal;
    font-size: 13px;
    text-align: center;
    vertical-align: middle;
    color: #bbc1c7;
    border: 0;
    background: #25292e;
    position: relative;
}


/* white */
border: 1px solid #d7dbe0;


/*

border_color = (OTC_SKIN === "black") ? `#4a4c4f` : `#d7dbe0`,

borderColor: border_color,
borderWidth: 1,

*/

```

## english

https://writingexplained.org/anymore-vs-any-more-difference


```md

no need anymore!// OK

no need any more!// not too good!


I don’t buy shoes anymore because I don’t need any more shoes.

> any more ...

> ... anymore!

```

https://english.stackexchange.com/questions/150807/how-alive-is-the-distinction-between-not-any-more-and-not-any-longer

> grammarly

https://www.grammarly.com/grammar-check

https://www.grammarly.com/blog/category/handbook/



## DOM

https://github.com/mdn/dom-examples

https://developer.mozilla.org/en-US/docs/Glossary/DOM

https://dom.spec.whatwg.org/


https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

https://developer.mozilla.org/en-US/docs/Web/API/Node

https://developer.mozilla.org/en-US/docs/Web/API/Element


https://developer.mozilla.org/en-US/docs/Web/API/ParentNode

https://developer.mozilla.org/en-US/docs/Web/API/ChildNode

```js

// ParentNode & Properties

ParentNode.children
ParentNode.firstElementChild
ParentNode.lastElementChild
ParentNode.childElementCount

// ParentNode & Methods

ParentNode.append()
ParentNode.prepend()
ParentNode.querySelector()
ParentNode.querySelectorAll()

// ChildNode & Properties
`There are neither inherited, nor specific properties.`;

// ChildNode & Methods

ChildNode.remove()
ChildNode.before()
ChildNode.after()
ChildNode.replaceWith()



```

### Sibling

https://developer.mozilla.org/en-US/docs/Web/API/Node

https://developer.mozilla.org/en-US/docs/Web/API/Element


https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling

https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling

https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling

https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling


```js

Node.nextSibling

Node.previousSibling

NonDocumentTypeChildNode.nextElementSibling

NonDocumentTypeChildNode.previousElementSibling

```

http://mdn.beonex.com/en/DOM/element.previousElementSibling.html
http://mdn.beonex.com/en/DOM/element.nextElementSibling.html



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










