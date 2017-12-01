# 公司简介、所属板块及指数



主板F9下面的概况(公司简介、所属板块及指数)，

财务数据(财务摘要(报告期))


浙商银行
Web能力
周一

# gqgid

http://www.trirand.com/blog/

https://github.com/tonytomov/jqGrid


https://plugins.jquery.com/jqGrid/

> jqGrid is an Ajax-enabled JavaScript control that provides solutions for representing and manipulating tabular data on the web.


https://guriddo.net/
https://www.guriddo.net/demo/guriddojs/
http://www.guriddo.net/demo/pivotgridjs/

https://www.guriddo.net/demo/treegridjs/
https://www.guriddo.net/demo/bootstrap/


http://www.trirand.com/jqgridwiki/doku.php?id=wiki:retrieving_data
http://www.trirand.com/blog/jqgrid/jqgrid.html


https://www.guriddo.net/demo/guriddojs/
https://www.guriddo.net/documentation/guriddo/javascript/user-guide/exporting/




# datatables

https://datatables.net/

https://datatables.net/examples/index

https://github.com/DataTables/DataTables

https://datatables.net/blog/2014-12-18



https://www.granneman.com/webdev/coding/css/sorting-tables/

http://tablesorter.com/docs/
http://tablesorter.com/docs/#Download



# highcharts

https://api.highcharts.com/highstock/navigator.opposite



/usr/local/apache2/webapps/otc/ts
/usr/local/apache2/webapps/otc/f9

/usr/local/apache2/webapps/stock/f9/fastview



H:\GFT\users\xiagq@gildata.com



# shit IE!

![image](https://user-images.githubusercontent.com/18028768/33377546-cc0f4272-d54c-11e7-90bf-f1fbbe1521a9.png)






# codes snippets ???

> vs code


中文名称,英文名称,省份,城市,注册地址,办公地址,成立日期,工商登记号,注册资本,所属证监会行业,所属聚源行业,所属中信行业,所属申万行业,法人代表 总经理,董事会秘书,证劵事务代表,信息披露人,员工人数,公司网站,传真,邮编,电话,电子邮件,审计机构,经办会计师,法律顾问,经办律师,主营产品,公司简介,所属概念板块,组织机构代码,统一社会信用代码



中文名称,
英文名称,
省份,
城市,
注册地址,
办公地址,
成立日期,
工商登记号,
注册资本,
所属证监会行业,
所属聚源行业,
所属中信行业,
所属申万行业,
法人代表 总经理,
董事会秘书,
证劵事务代表,
信息披露人,
员工人数,
公司网站,
传真,
邮编,
电话,
电子邮件,
审计机构,
经办会计师,
法律顾问,
经办律师,
主营产品,
公司简介,
所属概念板块,
组织机构代码,
统一社会信用代码



变更时间 变更内容 变更前 变更后 详情 变更前详情 变更后详情

交易时间 绑定线 提示信息 图形类别

交易时间 股价







1. search

2. Ctrl + Alt + P

> clipboard


## Terminal URL:

> 数据请求&通讯测试

10.1.5.31:8080/http/report/query + {}

{'SecuCode':'600000','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2015-12-31"}]}

## Browser URL:

> Chrome & Fetch

10.1.5.31:8080/http/report/query?{'SecuCode':'600000','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2015-12-31"}]}


> ,"WriteType":"json"

http://10.1.5.31:8080/http/report/query?{'SecuCode':'600000','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2015-12-31"}],"WriteType":"json"}

> "Value":"2015-12-31" ???


10.1.5.31:8080/http/report/query?{'Sorts':[{'Field':'A0','Sort':'desc'}],'FastDateFilterType':'Latest5Year','BeginDate':'2017-01-01','EndDate':'2017-01-01','SecuCode':'600570','ApiName':'JYManagerAnalyse'}

10.1.5.31:8080/http/report/query?{'SecuCode':'600570','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2017-03-31"}]}

10.1.5.31:8080/http/report/query?{'SecuCode':'600570','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2013-04-26"}]}

10.1.5.31:8080/http/report/query?{'SecuCode':'600570','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2009-08-31"}]}

10.1.5.31:8080/http/report/query?{'SecuCode':'600570','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2005-10-31"}]}

10.1.5.31:8080/http/report/query?{'SecuCode':'600570','ApiName':'JYCompanyIntroduction',"Filters":[{"FilterType":"equal","Field":"PointRow.a0","Value":"2005-08-31"}]}




# gcode (only param) ???


> 600570










> LineRow, JYCompanyChangeNameRow, PointRow, YCompanyIntroductionRow

### LineRow & PointRow


```js
    {
        "name": "LineRow",
        "attributes": {
            "schema": "LineRow",
            "numfound": "216",
            "master": "0"
        },
        "columnmeta": {
            "a0": "DATE",
            "a1": "DOUBLE"
        },
        "rows": [
            [
                "1999-11-30",
                26.4
            ],
            [
                "1999-12-30",
                24.75
            ],
            [
                "2000-01-28",
                25.04
            ],
            [
                "2000-02-29",
                25.17
            ],
            [
                "2017-09-29",
                12.87
            ],
            [
                "2017-10-31",
                12.61
            ]
        ]
    },
    {
        "name": "PointRow",
        "attributes": {
            "schema": "PointRow",
            "numfound": "1",
            "master": "0"
        },
        "columnmeta": {
            "a0": "DATE",
            "a1": "STRING",
            "a2": "STRING",
            "a3": "INT"
        },
        "rows": [
            [
                "2015-12-31",
                "a1",
                "2015/12/30行业经营范围变更",
                1
            ]
        ]
    },
```




http://10.1.5.203/http-report/query?{"ApiName":"JYCompanyIntroduction","SecuCode":"000002","WriteType":"json","Page":{"PageNo":1,"PageSize":100},"Compress":"true"}


http://localhost:3000/webtool/apitool/JYCompanyIntroduction





## Ctrl + Alt + O

> XML 配置文件

H:\GFT\temp\F9AndTopic\1630

1. Request === api

2. SheetItem === tab

3. tablename fieldname





??? 股票速览
























