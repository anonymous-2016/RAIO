# Stock F9 速览


# scrollbar bug!

lib: highstock.js

method: Highcharts.chart()




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


600570.SH  ??? .SH & .SZ

000001.SZ

gilcode


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












