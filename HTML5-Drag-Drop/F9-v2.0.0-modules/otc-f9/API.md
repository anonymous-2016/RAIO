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
    otcperfast01	最新交易数据
    otcperfast02	大事提醒
    otcperfast03	公司简介
    otcperfast04	最新财务数据
    otcperfast05	公司表现-市场表现
    otcperfast06	公司表现-公司规模
    otcperfast07	公司表现-公司业绩
    otcperfast08	公司表现-公司估值
    otcperfast09	主营业务
    otcperfast10	股本股东
    otcperfast11	管理层概况
        news	        新闻
        bulletin	公告
        research        研报
其中：
otcperfast01：
    @JsonPropertyDescription("截止日期")
    private String rq ;

    @JsonPropertyDescription("收盘价")
    private String spj ;

    @JsonPropertyDescription("涨跌幅")
    private String zdf ;

    @JsonPropertyDescription("成交量")
    private String cjl ;

    @JsonPropertyDescription("成交额")
    private String cje ;

    @JsonPropertyDescription("换手率")
    private String hsl ;

    @JsonPropertyDescription("总市值")
    private String zsz ;

    @JsonPropertyDescription("流通市值")
    private String ltsz ;

    @JsonPropertyDescription("市盈率_TTM")
    private String sylttm ;

    @JsonPropertyDescription("市盈率_LYR")
    private String syllyr ;

    @JsonPropertyDescription("市净率_LYR")
    private String sjllyr ;

otcperfast02:
    k是第一列，v是第二列;

otcperfast03:
    /**
         * 公司名称
     */
    private String gsmc;
    /**
     * 公司成立时间
     */
    private String gsclsj;
    /**
     * 公司挂牌时间
     */
    private String gsgpsj;
    /**
     * 所属证监会行业
     */
    private String zjhhy;
    /**
     * 总经理
     */
    private String zjl;
    /**
     * [公司注册资本(万元)]
     */
    private String zczb;
    /**
     * 法人代表
     */
    private String frdb;
    /**
     * 注册地址
     */
    private String zcdz;
    /**
     * 联系电话
     */
    private String lxdh;
    /**
     * 网址
     */
    private String wz;
    /**
     * 公司介绍
     */
    private String gsjs;

otcperfast04:
        yjyg:业绩预告；
        yjkb:业绩快报；
        cwzy:财务数据摘要；
其中：
  yjyg结构:
    @JsonPropertyDescription("报告期")
    private String bgq ;

    @JsonPropertyDescription("定报预约_实际披露日期")
    private String plrq ;

    @JsonPropertyDescription("公告日期")
    private String ggrq ;

    @JsonPropertyDescription("预告原文")
    private String ygyw;
  yjkb结构:
    @JsonPropertyDescription("报告期")
    private String bgq ;

    @JsonPropertyDescription("定报预约_实际披露日期")
    private String plrq ;

    @JsonPropertyDescription("营业收入")
    private String yysr ;

    @JsonPropertyDescription("营业利润")
    private String yylr ;

    @JsonPropertyDescription("利润总额")
    private String lrze ;

    @JsonPropertyDescription("归属挂牌公司股东的净利润")
    private String jlr ;

    @JsonPropertyDescription("营业收入同比增长")
    private String yysrzz ;

    @JsonPropertyDescription("基本每股收益")
    private String jbmgsy ;

    @JsonPropertyDescription("净资产收益率_加权")
    private String jzcsyljq ;

    @JsonPropertyDescription("归属挂牌公司股东的净利润同比增长")
    private String jlrtbzz ;

    @JsonPropertyDescription("资产总计")
    private String zczj ;

    @JsonPropertyDescription("归属于挂牌公司股东的净资产")
    private String jzc ;

    @JsonPropertyDescription("每股净资产")
    private String mgjzc ;

    @JsonPropertyDescription("经营活动产生的现金流量净额")
    private String xjllje ;
  cwzy结构:
    @JsonPropertyDescription("报告期")
    private String bgq ;

    @JsonPropertyDescription("基本每股收益")
    private String jbmgsy;

    @JsonPropertyDescription("营业收入")
    private String yysr;

    @JsonPropertyDescription("资产总计")
    private String zczj;

    @JsonPropertyDescription("稀释每股收益")
    private String xsmgsy;

    @JsonPropertyDescription("营业利润")
    private String yylr;

    @JsonPropertyDescription("负债总计")
    private String fzzj;

    @JsonPropertyDescription("利润总额")
    private String lrze;

    @JsonPropertyDescription("归属于挂牌公司股东的每股净资产")
    private String mgjzc;

    @JsonPropertyDescription("归属于挂牌公司股东的净资产")
    private String jzc;

    @JsonPropertyDescription("归属挂牌公司股东的净利润")
    private String jlr;

    @JsonPropertyDescription("经营活动产生的现金流量净额")
    private String llje;

    @JsonPropertyDescription("每股经营活动产生的现金流量净额")
    private String mgllje;

    @JsonPropertyDescription("归属挂牌公司股东的净利润_扣除")
    private String jlrkc;

    @JsonPropertyDescription("总资产同比增长")
    private String zzctbzz;

    @JsonPropertyDescription("净资产收益率_加权")
    private String jzcsyljq;

    @JsonPropertyDescription("营业收入同比增长")
    private String yysrtbzz;

    @JsonPropertyDescription("销售毛利率")
    private String xsmll;

    @JsonPropertyDescription("净资产收益率_扣除加权")
    private String kcjq;

    @JsonPropertyDescription("净利润同比增长")
    private String jlrtbzz;

    @JsonPropertyDescription("资产负债率")
    private String zcfzl;

otcperfast05:
        /**
     * 涨跌幅
     */
    private List<MarketPerformance> zdf;
    /**
     * 换手率
     */
    private TurnoverRate hsl;
  其中换手率hsl结构:
    /**
     * "行业日均换手率"
     */
    private double hyrjhsl;

    /**
     * "市场日军换手率"
     */
    private double scrjhsl;
    datas:数据
    其中hsl里的数据datas里面结构：
        /**
     * 证券代码
     */
    private String secuCode;
    /**
     * 换手率
     */
    private double hsl;
otcperfast06:
    /**
     * "行业总市值"
     */
    private double hyzsz;

   /**
    * "行业流通市值"
    */
    private double hyltsz;
    /**
     * 标的市值（即当前公司的数据）
     */
    private TotalShareRank data;
    private List<TotalShareRank> datas;（前五名公司的数据）
其中data和datas结构：

    @JsonPropertyDescription("证券代码")
    private String zqdm;

    @JsonPropertyDescription("总市值")
    private double zsz ;

    @JsonPropertyDescription("流通市值")
    private double ltsz ;

    @JsonPropertyDescription("排名")
    private int pm ;

otcperfast07:
        stock：当前股票的数据
        top5：排名前5的数据
 共用一个结构：
    @JsonPropertyDescription("SecuCode")
    private String zqdm;

    @JsonPropertyDescription("每股收益")
    private double mgsy ;

    @JsonPropertyDescription("排名")
    private int pm ;

    @JsonPropertyDescription("市盈率TTM")
    private double ttm ;

otcperfast08:
     和otcperfast07一样；

otcperfast09:
        /**
     * 主营业务增长
     */
    private String zz;

    /**
     * 占营业总收入
     */
    private String zb;

  其中datas结构：
    @JsonPropertyDescription("项目")
    private String xm;

    @JsonPropertyDescription("营业收入(万元)")
    private double yysr;

    @JsonPropertyDescription("营业成本(万元)")
    private double yycb;

    @JsonPropertyDescription("营业收入占比(%)")
    private String yysrzb;

    @JsonPropertyDescription("毛利(万元)")
    private double ml;

otcperfast10:
     gbjg：股本结构
     限售解禁安排暂无数据，前端去掉这个；
     sdgd：十大股东
     gdhs： 股东户数
  其中gbjg结构：
    @JsonPropertyDescription("截止日期")
    private String jzrq ;

    @JsonPropertyDescription("总股本")
    private double zgb;

    @JsonPropertyDescription("有限售股")
    private double yxsg;

    @JsonPropertyDescription("无限售股")
    private double wxsg;

    @JsonPropertyDescription("变动原因")
    private String bdyy;

    @JsonPropertyDescription("有限售占比")
    private double yxszb;

    @JsonPropertyDescription("无限售占比")
    private double wxszb;

    @JsonPropertyDescription("有限售_控股股东和实际制人数量占比")
    private double yxskzrzb;

    @JsonPropertyDescription("有限售_董事监事高管数量占比")
    private double yxsggzb;

    @JsonPropertyDescription("有限售_核心员工数量占比")
    private double yxshxygzb;

    @JsonPropertyDescription("有限售_其它有限售数量占比")
    private double yxsqtzb;

    @JsonPropertyDescription("无限售_控股股东和实际制人数量")
    private double wxskzrsl;

    @JsonPropertyDescription("无限售_董事监事高管数量")
    private double wxsggsl;

    @JsonPropertyDescription("无限售_核心员工数量")
    private double wxshxygsl;

    @JsonPropertyDescription("有限售_控股股东和实际制人数量")
    private double yxskzrsl;

    @JsonPropertyDescription("有限售_董事监事高管数量")
    private double yxsggsl;

    @JsonPropertyDescription("有限售_核心员工数量")
    private double yxsygsl;

    @JsonPropertyDescription("有限售_其它有限售数量")
    private double yxsqtsl;
  其中sdgd结构：
        /**
     * 时间
     */
    private String sj;
    /**
     * 合计
     */
    private String hj;
    /**
     * 变化
     */
    private String bh;
   sdgd里的datas的结构：
    @JsonPropertyDescription("股东名称")
    private String gdmc;

    @JsonPropertyDescription("持股数")
    private String cgs;

    @JsonPropertyDescription("占比")
    private String zb;

    @JsonPropertyDescription("增减变动")
    private String zjbd;

    @JsonPropertyDescription("机构类型")
    private String jglx;
  其中gdhs的结构：
        /**
     * 时间
     */
    private String sj;
    /**
     * 总户数
     */
    private String zhs;
    /**
     * 总户数环比增长
     */
    private String zhszz;
    /**
     * 户均持股数
     */
    private String hjcgs;
    /**
     * 户均环比增长
     */
    private String hjzz;
    /**
     * 户数较上期增加
     */
    private String hsjsq;
    /**
     * 户均持股较上期
     */
    private String hjjsq;

otcperfast11:
        ggcg：高管持股
        gglz：高管离职
其中ggcg的结构：
     /**
     * "董事会人数"
     */
    private String dsh;

    /**
     * "监事会人数"
     */
    private String jsh;

    /**
     * "高管人数"
     */
    private String gg;
    /**
     * 时间
     */
    private String sj;
    /**
     * 高管们
     */
    private List<ManagerPerSon> ggs;
   其中ggcg的ggs的结构：
    @JsonPropertyDescription("姓名")
    private String xm;

    @JsonPropertyDescription("性别")
    private String xb;

    @JsonPropertyDescription("年龄")
    private String nl ;

    @JsonPropertyDescription("学历")
    private String xl;

    @JsonPropertyDescription("职务")
    private String zw;

    @JsonPropertyDescription("期末持股数量(股)")
    private String qmcgsl;

    @JsonPropertyDescription("占比")
    private String zb;

    @JsonPropertyDescription("增减变动")
    private String zjbd;
其中gglz的结构：
        @JsonPropertyDescription("姓名")
    private String xm;

    @JsonPropertyDescription("职务")
    private String zw;

    @JsonPropertyDescription("任职起始日期")
    private String beginDate;

    @JsonPropertyDescription("任职终止日期")
    private String endDate;

    @JsonPropertyDescription("是否还在公司担任职务")
    private boolean rz;
























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
