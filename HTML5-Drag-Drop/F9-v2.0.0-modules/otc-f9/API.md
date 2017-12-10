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

```js

    // const OTC_IP = ``;
    // const OTC_PATH = ``;
    // const OTC_PARAM = ``;
    // const OTC_GILCODE = ``;

    var OTC_IP = OTC_IP || ``;
    var OTC_PATH = OTC_PATH || ``;
    var OTC_PARAM = OTC_PARAM = ``;
    var OTC_GILCODE = OTC_GILCODE || ``;

    OTC_GILCODE =  OTC_F9_FV.Utils.getParam(`gilcode`);
    // OTC_GILCODE =  OTC_F9_FV.Utils.getParam(`secucode`);
    // OTC_IP = `http://${window.parent.location.host}`;
    // OTC_PATH = `/webservice/fastview/stock`;
    console.log(`OTC_GILCODE `, OTC_GILCODE, typeof OTC_GILCODE);

    OTC_GILCODE =  OTC_F9_FV.Utils.getParam(`gilcode`);
    OTC_IP = `${window.parent.location.protocol}//${window.parent.location.host}`;
    OTC_PATH = `/webservice/fastview/stock`;

    // ip: `http://10.1.5.202`,
    // path: `/webservice/fastview/stock/stockfast07/`, // => `/webservice/fastview/stock`
    // gilcode: `600570.SH`

    // IP = window.parent.location.host;
    // PATH = window.parent.location.pathname;
    // console.log(`btn = ${container.classList.contains("h5-dnd-nav-container-normal")}`);


```







# 聚源代码 430002.OC


参数：
    otcperfast01    最新交易数据
    otcperfast02    大事提醒
    otcperfast03    公司简介
    otcperfast04    最新财务数据
    otcperfast05    公司表现-市场表现
    otcperfast06    公司表现-公司规模
    otcperfast07    公司表现-公司业绩
    otcperfast08    公司表现-公司估值
    otcperfast09    主营业务
    otcperfast10    股本股东
    otcperfast11    管理层概况
    news            新闻
    bulletin        公告
    research        研报
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


```js

let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `😟暂无 新闻日期`;
let title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `🤓暂无 新闻标题`}`;


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
            "yylr": "营业利润(元)",
            "lrze": "利润总额(元)",
            "jlr": "归属挂牌公司股东的净利润(元)",
            "yysrzz": "营业收入同比增长(%)",// 2
            "jbmgsy": "基本每股收益(%)",
            "jzcsyljq": "ROE(%)",// 净资产收益率_加权
            "jlrtbzz": "归属挂牌公司股东的净利润同比增长(%)",
            "zczj": "总资产(元)",// 3
            "jzc": "净资产(元)",
            "mgjzc": "每股净资产(元)",
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
        "zdf": "涨跌幅",
        "hsl": {//换手率
            "hyrjhsl": "行业日均换手率",
            "scrjhsl": "市场日均换手率"
        },
        "datas": {// 数据
            "secuCode": "证券代码",
            "hsl": "换手率"
        }// ???
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
        }// 当前股票的数据
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
            "yxsqtzb": "有限售_其它有限售数量占比",
            "wxskzrsl": "无限售_控股股东和实际制人数量",
            "wxsggsl": "无限售_董事监事高管数量",
            "wxshxygsl": "无限售_核心员工数量",
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
            // "": "",// 核心员工 ???
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
                "xm": "姓名在任其他职务",
                "zw": "职务",
                "beginDate": "任职起始日期",
                "endDate": "离职日期",// 任职终止日期
                "rz": "在任其他职务"// 是否还在公司担任职务
            }
        ]// 高管离职
    },
    "otcperfast0?": {
        name: "",
        "": ""
    },
}
```



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