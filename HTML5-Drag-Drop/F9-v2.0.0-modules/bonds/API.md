# 债券-基准利率速览 API




http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"","Compare":"","CompareDate":""}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast02","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast03","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast04","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast05","Compare":"","CompareDate":""}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast06","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast07","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast08","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast09","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast10","Compare":"","CompareDate":""}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast11","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast12","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast13","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast14","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast15","Compare":"","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast16","Compare":"","CompareDate":""}




http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast16","Compare":"0","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast16","Compare":"1","CompareDate":""}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast16","Compare":"2","CompareDate":"2018-01-08"}




Compare：--比较日标志
"0:前一交易日",
"1:上周",
"2:自定义"
CompareDate：--比较日，（比较日标志=2时有效，不为2的时候可传可不传）



# emmet

div.0$*16

$touch 01.json 02.json 03.json 04.json 05.json 06.json 07.json 08.json 09.json
$touch 10.json 11.json 12.json 13.json 14.json 15.json 16.json


其中：
  ModelId：--模块的ID
    bondratefast01  回购利率
    bondratefast02  拆借利率
    bondratefast03  国债收益率(中债)
    bondratefast04  企债AAA收益率(中债)
    bondratefast05  国开政策性金融债收益率(中债)
    bondratefast06  商业银行AAA收益率(中债)
    bondratefast07  城投债AAA收益率(中债)
    bondratefast08  地方政府债AAA收益率(中债)
    bondratefast09  中短期票据AAA收益率(中债)
    bondratefast10  央票收益率(中债)
    bondratefast11  DCM定价中枢
    bondratefast12  shibor
    bondratefast13  央行基准利率
    bondratefast14  回购定盘利率
    bondratefast15  七日回购移动平均利率
    bondratefast16  票据直贴/转贴利率

Compare：--比较日标志
"0:前一交易日",
"1:上周",
"2:自定义"
CompareDate：--比较日，（比较日标志=2时有效，不为2的时候可传可不传）


关于节点模块：->
bondratefast01：
	/**
	 * 右上角时间
	 */
	private String date;
	/**
	 * 银质押
	 */
	private List<BuyBackRateDetail> yzy;
	/**
	 * 沪质押
	 */
	private List<BuyBackRateDetail> hzy;
bondratefast01的yzy和hzy结构:
    @JsonPropertyDescription("品种")
    private String pz;

    @JsonPropertyDescription("加权收盘")
    private double jqsp ;

    @JsonPropertyDescription("比较日")
    private double bjr ;

    @JsonPropertyDescription("BP")
    private double bp ;

    @JsonPropertyDescription("成交量")
    private String cjl ;

    @JsonPropertyDescription("量增")
    private String lz ;


bondratefast02：
	/**
	 * 右上角时间
	 */
	private String date;
	/**
	 * 银质押
	 */
	private List<BuyBackRateDetail> ZCJ;
	/**
	 * 沪质押
	 */
	private List<BuyBackRateDetail> hCJ;
bondratefast02的ZCJ和hCJ结构:
    @JsonPropertyDescription("品种")
    private String pz;

    @JsonPropertyDescription("加权收盘")
    private double jqsp ;

    @JsonPropertyDescription("比较日")
    private double bjr ;

    @JsonPropertyDescription("BP")
    private double bp ;

    @JsonPropertyDescription("成交量")
    private String cjl ;

    @JsonPropertyDescription("量增")
    private String lz ;

bondratefast03：
    @JsonPropertyDescription("利率项")
    private String name;

    @JsonPropertyDescription("y1")
    private double y1 ;

    @JsonPropertyDescription("y3")
    private double y3 ;

    @JsonPropertyDescription("y5")
    private double y5 ;

    @JsonPropertyDescription("y7")
    private double y7 ;

    @JsonPropertyDescription("y10")
    private double y10 ;

    @JsonPropertyDescription("日期")
    private String rq ;

bondratefast04：
    与bondratefast03一样;


bondratefast05：
    与bondratefast03一样;


bondratefast06：
    与bondratefast03一样;


bondratefast07：
    与bondratefast03一样;


bondratefast08：
    与bondratefast03一样;

bondratefast09：
    @JsonPropertyDescription("利率项")
    private String name;

    @JsonPropertyDescription("M3")
    private double m3 ;

    @JsonPropertyDescription("M6")
    private double m6 ;

    @JsonPropertyDescription("y1")
    private double y1 ;

    @JsonPropertyDescription("y3")
    private double y3 ;

    @JsonPropertyDescription("y5")
    private double y5 ;

    @JsonPropertyDescription("y7")
    private double y7 ;

    @JsonPropertyDescription("日期")
    private String rq ;

bondratefast10：
    与bondratefast09一样;

bondratefast11：
	/**
	 * 最新日
	 */
	private String zxr;
	
	/**
	 * 比较日
	 */
	private String bjr;
	
	/**
	 * 表格数据
	 */
	private List<DCMPriceCenterData> datas;
bondratefast11的datas的结构：
    @JsonPropertyDescription("title")
    private String title;

    @JsonPropertyDescription("Y1最新")
    private double y1zx ;

    @JsonPropertyDescription("Y1比较日")
    private double y1bjr ;

    @JsonPropertyDescription("Y1涨跌")
    private double y1zd ;

    @JsonPropertyDescription("Y3最新")
    private double y3zx ;

    @JsonPropertyDescription("Y3比较日")
    private double y3bjr ;

    @JsonPropertyDescription("Y3涨跌")
    private double y3zd ;

    @JsonPropertyDescription("Y5最新")
    private double y5zx ;

    @JsonPropertyDescription("Y5比较日")
    private double y5bjr ;

    @JsonPropertyDescription("Y5涨跌")
    private double y5zd ;

    @JsonPropertyDescription("Y7最新")
    private double y7zx ;

    @JsonPropertyDescription("Y7比较日")
    private double y7bjr ;

    @JsonPropertyDescription("Y7涨跌")
    private double y7zd ;

bondratefast12：
    @JsonPropertyDescription("品种")
    private String pz;

    @JsonPropertyDescription("日期")
    private String rq ;

    @JsonPropertyDescription("最新")
    private String zx ;

    @JsonPropertyDescription("五日均值")
    private String rjz5 ;

    @JsonPropertyDescription("十日均值")
    private String rjz10 ;

    @JsonPropertyDescription("二十日均值")
    private String rjz20 ;

bondratefast13：
    @JsonPropertyDescription("活期")
    private String hq;

    @JsonPropertyDescription("3M")
    private String m3;

    @JsonPropertyDescription("6M")
    private String m6;

    @JsonPropertyDescription("1Y")
    private String y1;

    @JsonPropertyDescription("2Y")
    private String y2;

    @JsonPropertyDescription("3Y")
    private String y3;

    @JsonPropertyDescription("5Y")
    private String y5;

    @JsonPropertyDescription("5Y以上(公积金)")
    private String y5ysG;

    @JsonPropertyDescription("5Y以下(公积金)")
    private String y5yxG;

    @JsonPropertyDescription("6M以内")
    private String m6yn;

    @JsonPropertyDescription("6M-1Y")
    private String m6y1;

    @JsonPropertyDescription("1Y-3Y")
    private String y1y3;

    @JsonPropertyDescription("3Y-5Y")
    private String y3y5;

    @JsonPropertyDescription("5Y以上")
    private String y5ys;

    @JsonPropertyDescription("再贴现利率")
    private String ztxll;

    @JsonPropertyDescription("20D")
    private String d20;

    @JsonPropertyDescription("3M1")
    private String m3Z;

    @JsonPropertyDescription("6M1")
    private String m6Z;

    @JsonPropertyDescription("1Y1")
    private String y1Z;

bondratefast14：
    @JsonPropertyDescription("日期")
    private String rq;

    @JsonPropertyDescription("FR001")
    private String fr1;

    @JsonPropertyDescription("FR007")
    private String fr7;

    @JsonPropertyDescription("FR014")
    private String fr14;

    @JsonPropertyDescription("FDR001")
    private String fdr1="--";

    @JsonPropertyDescription("FDR007")
    private String fdr7="--";

    @JsonPropertyDescription("FDR014")
    private String fdr14="--";

bondratefast15：
    @JsonPropertyDescription("日期")
    private String rq;

    @JsonPropertyDescription("B0")
    private String b0;

    @JsonPropertyDescription("指数平均值-B1W")
    private String b1w;

    @JsonPropertyDescription("指数平均值-B2W")
    private String b2w;

    @JsonPropertyDescription("指数平均值-B3W")
    private String b3w;

    @JsonPropertyDescription("指数平均值-B1M")
    private String b1m;

    @JsonPropertyDescription("指数平均值-B2M")
    private String b2m;

    @JsonPropertyDescription("指数平均值-B3M")
    private String b3m;

    @JsonPropertyDescription("指数平均值-B4M")
    private String b4m;

    @JsonPropertyDescription("指数平均值-B5M")
    private String b5m;

    @JsonPropertyDescription("指数平均值-B6M")
    private String b6m;

    @JsonPropertyDescription("指数平均值-B7M")
    private String b7m;

    @JsonPropertyDescription("指数平均值-B8M")
    private String b8m;

    @JsonPropertyDescription("指数平均值-B9M")
    private String b9m;

    @JsonPropertyDescription("指数平均值-B10M")
    private String b10m;

    @JsonPropertyDescription("指数平均值-B11M")
    private String b11m;

    @JsonPropertyDescription("指数平均值-B12M")
    private String b12m;

    @JsonPropertyDescription("算术平均值-B1W")
    private String b_1w;

    @JsonPropertyDescription("算术平均值-B2W")
    private String b_2w;

    @JsonPropertyDescription("算术平均值-B3W")
    private String b_3w;

    @JsonPropertyDescription("算术平均值-B1M")
    private String b_1m;

    @JsonPropertyDescription("算术平均值-B2M")
    private String b_2m;

    @JsonPropertyDescription("算术平均值-B3M")
    private String b_3m;

    @JsonPropertyDescription("算术平均值-B4M")
    private String b_4m;

    @JsonPropertyDescription("算术平均值-B5M")
    private String b_5m;

    @JsonPropertyDescription("算术平均值-B6M")
    private String b_6m;

    @JsonPropertyDescription("算术平均值-B7M")
    private String b_7m;

    @JsonPropertyDescription("算术平均值-B8M")
    private String b_8m;

    @JsonPropertyDescription("算术平均值-B9M")
    private String b_9m;

    @JsonPropertyDescription("算术平均值-B10M")
    private String b_10m;

    @JsonPropertyDescription("算术平均值-B11M")
    private String b_11m;

    @JsonPropertyDescription("算术平均值-B12M")
    private String b_12m;

bondratefast16：
    @JsonPropertyDescription("日期")
    private String rq ;

    @JsonPropertyDescription("利率名称")
    private String llmc;

    @JsonPropertyDescription("利率")
    private String ll;