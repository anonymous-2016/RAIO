
http://10.1.5.203/http-report/query?{"ApiName":"JYCompanyIntroduction","SecuCode":"000002","WriteType":"json","Page":{"PageNo":1,"PageSize":100},"Compress":"true"}


{
    "ApiName":"JYCompanyIntroduction",
    "SecuCode":"000002",
    "WriteType":"json",
    "Page":{"PageNo":1,"PageSize":100},
    "Compress":"true"
}



"JYCompanyIntroductionRow"


// input
http://10.1.5.203/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json",%20"ReportName":"JYCompanyIntroduction"}

{
    "Action":"GetSchema",
    "Admin":"report",
    "ReportName":"JYCompanyIntroduction",
    "WriteType":"json"
}


// output
http://10.1.5.203/http-manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json",%20"ReportName":"JYCompanyIntroduction"}

{
    "Action":"GetRowSchema",
    "Admin":"report",
    "ReportName":"JYCompanyIntroduction",
    "WriteType":"json"
}



http://10.1.5.202/stock/f9/mock-datas/intro-status.json
http://10.1.5.202/stock/f9/mock-datas/change-items.json









file:///E:/github/RAIO/HTML5-Drag-Drop/zsyh/company-introduction/pages/company-status.html


file:///E:/github/RAIO/HTML5-Drag-Drop/zsyh/company-introduction/pages/changed-projects.html




# bug!!!

### 返回的 data 数据字段不可多于定义的 colModel字段!!!

### 返回的 data 数据字段不可多于定义的 colNames字段!!!

###  data  === colNames  === colModel



# markdown


https://guides.github.com/features/mastering-markdown/

# jqGrid colModel 参数

http://blog.mn886.net/jqGrid/

hidedlg boolean 是否显示或者隐藏此列false
hidden boolean 在初始化表格时是否要隐藏此列 false
index string 索引。其和后台交互的参数为sidx



# jqGrid  4.6.0






```js
// 对列进行格式化时设置的函数名或者类型
{name:’sex’,index:’sex’, align:’center’,width:60,editable:true,edittype:’select’,editoptions:

{value:’0:待定;1:男;2:女’},
formatter:function(cellvalue, options, rowObject){
    var temp = “<img src=’/jqGrid/jquery-ui-1.7.2.custom/css/img/”
    if(cellvalue==1){
        temp = temp +”user-white.png”;
    } else if(cellvalue==2){
    temp = temp +”user-white-female.png”;
    } else {
            temp = temp + “user-silhouette.png”;
    }
    temp = temp + “‘ border=’0 ′ />”
    return temp;
}},// 返回性别的图标。

```



http://10.1.5.202/stock/f9/imgs/text.png



http://10.1.5.202/stock/f9/mock-datas/hc-point.json


# full datas

> no PageSize

http://10.1.5.203/http-report/query??{"ApiName":"JYCompanyIntroduction","SecuCode":"000002","WriteType":"json","Compress":"true"}


```js


copy(json.data[0].rows);

json.points[0]
// ["2002-04-30", "a1", "2002/04/23行业经营范围变更", 1]


```


http://10.1.5.202/f10/view/libs/highcharts.js



# scrollbar bug!

lib: highstock.js

method: Highcharts.chart()



http://www.guriddo.net/documentation/guriddo/javascript/user-guide/treegrid/#methods

var record = jQuery("#grid_id").jqGrid('getRowData', rowid, true);







# layui


http://10.1.5.202/stock/f9/mock-datas/tabs.json







# json specification

> must be double quotes & ""

```js

    {
        "key": "value",
        "key2": "value2"
    }


```

https://json.org/

https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf


http://json-schema.org/documentation.html






# gcode ??? secucode


http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs


http://222.73.146.143/f10/view/index.html?secucode=000001&market=4609&sid=hs

./


```js

decodeURI(`http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs
`);

// "http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D平安银行%26type%3D0%26sid%3Dhs"



decodeURIComponent(`http://222.73.146.143/f10/view/stock/index.html?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs`);

// "http://222.73.146.143/f10/view/stock/index.html?gilcode=000001.SZ&name=平安银行&type=0&sid=hs"



params = window.location.search;
// "?gilcode%3D000001.SZ%26name%3D%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C%26type%3D0%26sid%3Dhs"

str = decodeURIComponent(params);
// "?gilcode=000001.SZ&name=平安银行&type=0&sid=hs"

"?gilcode=000001.SZ&name=平安银行&type=0&sid=hs".substr(9, 6)
// "000001"
parseInt("000001");
// 1

```


http://222.73.146.143/f10/view/index.html?secucode=000001&market=4609&sid=hs


# ??? redirect ???

secucode => gilcode



https://cdn.xgqfrms.xyz/?secucode=000001&market=4609&sid=hs



# sorttable.js

https://kryogenix.org/code/browser/sorttable/sorttable.js

https://kryogenix.org/code/browser/sorttable/

https://kryogenix.org/code/browser/

1. Download the Javascript library

2. Include the Javascript library, by putting a link to it in the HEAD of your page, like so:
    <script src="sorttable.js"></script>

3. Mark your table as a sortable one by giving it a class of "sortable":
    <table class="sortable">

Note that the library's JavaScript file is called sorttable (two Ts),
but the class you add to the table is sortable (one T).

```scss

/* Sortable tables */
table.sortable thead {
    background-color:#eee;
    color:#666666;
    font-weight: bold;
    cursor: default;
}

table.sortable th:not(.sorttable_sorted):not(.sorttable_sorted_reverse):not(.sorttable_nosort):after {
    content: " \25B4\25BE"
}

```


https://kryogenix.org/code/browser/smoothscroll/smoothscroll.js


# native js & sortable table

https://www.w3schools.com/howto/howto_js_sort_table.asp

https://www.w3schools.com/w3js/w3js_sort.asp







https://css-tricks.com/snippets/html/mailto-links/
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
https://stackoverflow.com/questions/10172499/mailto-using-javascript



{
    "columnmeta": {
        "a0": "DATE",
        "a1": "STRING",
        "a2": "STRING",
        "a3": "INT"
    },
    "rows": [
        [
            "2002-04-30",
            "a1",
            "2002/04/23行业经营范围变更",
            1
        ],
        [
            "2004-03-31",
            "a1",
            "2004/03/09行业经营范围变更",
            1
        ]
    ]
}


shaped data to

{
    "rows": [
        {
            "id": "12",
            "cell": ["12", "2007-10-06",  null]
        },
        {
            "id": "12",
            "cell": ["12", "2007-10-06",  null]
        }
    ]
}










1. Tabs


2. Object Params

```js

{
    url: ``,
    gcode: ``,
}


```



3. fetch polyfill
4. ES6 => ES5







概况 profiles,survey,overview,summary,outline









