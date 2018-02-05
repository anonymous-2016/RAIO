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



Ctrl + Alt + P 复制节点 URL

http://222.73.146.143/stock/f9/fastview/index.html?gilcode=600000.SH&skin=black



222.73.146.143/stock/f9/fastview/index.html?gilcode=600000.SH&skin=white




Compare：--比较日标志
"0:前一交易日",
"1:上周",
"2:自定义"
CompareDate：--比较日，（比较日标志=2时有效，不为2的时候可传可不传）


http://10.1.5.202/webservice/fastview/bond/rate?{}
// {}

http://10.1.5.202/webservice/fastview/bond/rate?{"modelid":"bondratefast01"}
// {}




http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01"}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01", "CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"","CompareDate":""}


http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"0","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"1","CompareDate":""}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"2","CompareDate":"2018-01-25"}







# emmet


```sh

div.0$*16

$touch 01.json 02.json 03.json 04.json 05.json 06.json 07.json 08.json 09.json
$touch 10.json 11.json 12.json 13.json 14.json 15.json 16.json



$touch repurchase-interest-rates.js repurchase-interest-rates.html repurchase-interest-rates.css
$touch treasury-bonds-profitability.html treasury-bonds-profitability.css treasury-bonds-profitability.js


$touch corporate-debt-aaa-profitability.html corporate-debt-aaa-profitability.css corporate-debt-aaa-profitability.js
$touch national-policy-driven-financial-debt-profitability.html national-policy-driven-financial-debt-profitability.css national-policy-driven-financial-debt-profitability.js
$touch commercial-banks-aaa-profitability.html commercial-banks-aaa-profitability.css commercial-banks-aaa-profitability.js
$touch medium-short-term-bills-aaa-profitability.html medium-short-term-bills-aaa-profitability.css medium-short-term-bills-aaa-profitability.js
$touch city-investment-debt-aaa-profitability.html city-investment-debt-aaa-profitability.css city-investment-debt-aaa-profitability.js


$touch local-governments-debt-aaa-profitability.html local-governments-debt-aaa-profitability.css local-governments-debt-aaa-profitability.js
$touch central-bills-profitability.html central-bills-profitability.css central-bills-profitability.js


$touch cs-interbank-dismantle-borrowing-interest-rates.html cs-interbank-dismantle-borrowing-interest-rates.css cs-interbank-dismantle-borrowing-interest-rates.js


$touch dcm-pricing-central-hub.html dcm-pricing-central-hub.css dcm-pricing-central-hub.js
$touch shibor-interbank-dismantle-borrowing-interest-rates.html shibor-interbank-dismantle-borrowing-interest-rates.css shibor-interbank-dismantle-borrowing-interest-rates.js

$touch central-bank-benchmark-interest-rates.html central-bank-benchmark-interest-rates.css central-bank-benchmark-interest-rates.js
$touch repurchase-set-interest-rates.html repurchase-set-interest-rates.css repurchase-set-interest-rates.js
$touch seven-days-repurchase-moving-average-interest-rates.html seven-days-repurchase-moving-average-interest-rates.css seven-days-repurchase-moving-average-interest-rates.js
$touch bills-directly-indirect-subsidy-interest-rates.html bills-directly-indirect-subsidy-interest-rates.css bills-directly-indirect-subsidy-interest-rates.js


$touch .html .css .js
$touch .html .css .js




```

# API

```js

// import {getFullTodayDate as fullToday} from "./full-today";

var OTC_IP = window.OTC_IP || `http://10.1.5.202`,
    OTC_PATH = window.OTC_PATH || `/webservice/fastview/bond/rate`,
    OTC_COMPARE = window.OTC_COMPARE || ``,
    OTC_DATE = window.OTC_DATE || ``,
    // OTC_DATE = window.OTC_DATE || fullToday(),// default today!
    OTC_SKIN = window.OTC_SKIN || `white`;
    // OTC_SKIN = window.OTC_SKIN || `black`;

```


key
border: 1px solid #4a4c4f;
background-color: #31373d;


value
border-right: 1px solid #4a4c4f;
background-color: #25292e;

color
color: #bbc1c7;




legend_item_color = (OTC_SKIN === "black") ? `#bbc1c7` : `#0b1016`,

hc_title_color = (OTC_SKIN === "black") ? `#bbc1c7` : `#333`,
style: {
    // color: "#f00",
    color: hc_title_color,
},






    bondratefast01  回购利率
    bondratefast03  国债收益率(中债)
    bondratefast04  企债AAA收益率(中债)
    bondratefast05  国开政策性金融债收益率(中债)
    bondratefast06  商业银行AAA收益率(中债)

    bondratefast07  城投债AAA收益率(中债)
    bondratefast08  地方政府债AAA收益率(中债)
    bondratefast09  中短期票据AAA收益率(中债)
    bondratefast10  央票收益率(中债)



    bondratefast02  拆借利率
    bondratefast12  shibor
    bondratefast13  央行基准利率
    
    bondratefast14  回购定盘利率
    bondratefast15  七日回购移动平均利率
    bondratefast16  票据直贴/转贴利率
    bondratefast11  DCM定价中枢


回购利率 repurchase-interest-rates

拆借利率 (Chibor & Shibor)  cs-interbank-dismantle-borrowing-interest-rates

Shibor shibor-interbank-dismantle-borrowing-interest-rates

央行基准利率 central-bank-benchmark-interest-rates


回购定盘利率 repurchase-set-interest-rates

七日回购移动平均利率 seven-days-repurchase-moving-average-interest-rates

票据直贴/转贴利率 bills-directly-indirect-subsidy-interest-rates




DCM 定价中枢 dcm-pricing-central-hub

DCM debt-capital-market-pricing-central-hub




主要品种的关键年期利率 (到期) x 8


国债收益率(中债) treasury-bonds-profitability(chinese-debt)

企债AAA收益率(中债) corporate-debt-aaa-profitability(chinese-debt)


国开政策性金融债收益率(中债) national-policy-driven-financial-debt-profitability(chinese-debt)

商业银行AAA收益率(中债) commercial-banks-aaa-profitability(chinese-debt)

中短期票据AAA收益率(中债) medium-short-term-bills-aaa-profitability(chinese-debt)

城投债AAA收益率(中债) city-investment-debt-aaa-profitability(chinese-debt)


地方政府债AAA收益率(中债) local-governments-debt-aaa-profitability(chinese-debt)

央票收益率(中债) central-bills-profitability(chinese-debt)






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
"0: 前一交易日",
"1: 上周",
"2: 自定义"
CompareDate：--比较日，（比较日标志=2时有效，不为2的时候可传可不传）

// 是你描述不清楚: 应该说清楚，比较日标志为2时，CompareDate 必传; 比较日标志不为2的时候, CompareDate可传/可不传。


// 分析日===今天


// 比较日===前一交易日
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01"}
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"0","CompareDate":""}
// 比较日===上周
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"1","CompareDate":""}
// 比较日===用户指定的
http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"2","CompareDate":"2018-01-01"}

http://10.1.5.202/webservice/fastview/bond/rate?{"ModelId":"bondratefast01","Compare":"2","CompareDate":""}
// 如果没有指定比较日，比较日默认值是什么？
// 比较日===前一交易日 ???





```js

json = {
    "bondratefast01": {
        "name": "回购利率",
        "date": "时间",
        "yzy": {
            // "银质押"
            "pz": "品种",
            "jqsp": "加权/收盘",
            "bjr": "比较日",
            "bp": "BP",
            "cjl": "成交量(亿)",
            "lz": "量增",
        },
        "hzy": {
            // "沪质押"
            "pz": "品种",
            "jqsp": "加权/收盘",
            "bjr": "比较日",
            "bp": "BP",
            "cjl": "成交量(亿)",
            "lz": "量增",
        },
    },
    "bondratefast02": {
        "name": "拆借利率(Chibor & Shibor),
        "date": "时间",
        "yzy": {
            // "中拆借"
            "pz": "品种",
            "jqsp": "加权/收盘",
            "bjr": "比较日",
            "bp": "BP",
            "cjl": "成交量(亿)",
            "lz": "量增",
        },
        "hzy": {
            // "沪拆借"
            "pz": "品种",
            "jqsp": "加权/收盘",
            "bjr": "比较日",
            "bp": "BP",
            "cjl": "成交量(亿)",
            "lz": "量增",
        },
    },
    "bondratefast11": {
        "name": "DCM定价中枢",
        "zxr": "最新日",
        "bjr": "比较日",
        "datas": [
            {
                "title": "标题",
                "y1zx": "Y1最新",
                "y1bjr": "Y1比较日",
                "y1zd": "Y1涨跌",
                "y3zx": "Y3最新",
                "y3bjr": "Y3比较日",
                "y3zd": "Y3涨跌",
                "y5zx": "Y5最新",
                "y5bjr": "Y5比较日",
                "y5zd": "Y5涨跌",
                "y7zx": "Y7最新",
                "y7bjr": "Y7比较日",
                "y7zd": "Y7涨跌"
            }
        ],
    },
    "bondratefast12": {
        "name": "Shibor",
        // "": "日期",
        "Array": [
            {
                "pz": "品种",
                "rq": "日期",
                "zx": "最新",
                "rjz5": "5日均值",
                "rjz10": "10日均值",
                "rjz20": "20日均值"
            },
        ],
    },
    "bondratefast13": {
        "name": "央行基准利率",
        // "没有日期": "日期",
        "hq": "活期",// 存款利率
        "m3": "3M",
        "m6": "6M",
        "y1": "1Y",
        "y2": "2Y",
        "y3": "3Y",
        "y5": "5Y",
        "y5ysG": "5Y以上(公积金)",// 贷款利率
        "y5yxG": "5Y以下(公积金)",
        "m6yn": "6M以内",
        "m6y1": "6M-1Y",
        "y1y3": "1Y-3Y",
        "y3y5": "3Y-5Y",
        "y5ys": "5Y以上",
        "ztxll": "再贴现利率",// 再贷款利率
        "d20": "20D",
        "m3Z": "3M",
        "m6Z": "6M",
        "y1Z": "1Y",
    },
    "bondratefast14": {
        "name": "回购定盘利率",
        "rq": "日期",
        "fr1": "FR001",
        "fr7": "FR007",
        "fr14": "FR014",
        "fdr1": "FDR001",
        "fdr7": "FDR007",
        "fdr14": "FDR014",
    },
    "bondratefast15": {
        "name": "七日回购移动平均利率",
        "rq": "日期",
        "b0": "B0",
        "b1w": "指数平均值-B1W",// 指数平均值
        "b2w": "3.3518",
        "b3w": "3.2722",
        "b1m": "3.4107",
        "b2m": "3.4284",
        "b3m": "3.4452",
        "b4m": "3.4564",
        "b5m": "3.4660",
        "b6m": "3.4729",
        "b7m": "3.4747",
        "b8m": "3.4702",
        "b9m": "3.4484",
        "b10m": "3.4207",
        "b11m": "3.4301",
        "b12m": "3.4072",
        "b_1w": "算术平均值-B1W",// 算数平均值
        "b_2w": "3.3861",
        "b_3w": "3.2301",
        "b_1m": "3.6010",
        "b_2m": "3.4883",
        "b_3m": "3.4710",
        "b_4m": "3.4509",
        "b_5m": "3.4524",
        "b_6m": "3.4615",
        "b_7m": "3.4480",
        "b_8m": "3.4430",
        "b_9m": "3.4162",
        "b_10m": "3.4207",
        "b_11m": "3.4301",
        "b_12m": "3.4072",
    },
    "bondratefast16": {
        "name": "票据直贴/转贴利率",
        // "": "日期",
        "Array": [
            {
                "rq": "日期",
                "llmc": "利率名称",
                "ll": "利率(月息)(‰)",
            }
        ]
    },
}


```



```js


{
    "bondratefast03": {
        "name": "国债收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "y10": "10Y",
                "rq": "日期"
            },
        ],
    },
    "bondratefast04": {
        "name": "企债AAA收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "y10": "10Y",
                "rq": "日期"
            },
        ],
    },
    "bondratefast05": {
        "name": "国开政策性金融债收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "y10": "10Y",
                "rq": "日期"
            },
        ],
    },
    "bondratefast06": {
        "name": "商业银行AAA收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "y10": "10Y",
                "rq": "日期"
            },
        ],
    },
    "bondratefast07": {
        "name": "城投债AAA收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "y10": "10Y",
                "rq": "日期"
            },
        ],
    },
    "bondratefast08": {
        "name": "地方政府债AAA收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "y10": "10Y",
                "rq": "日期"
            },
        ],
    },
    "bondratefast09": {
        "name": "中短期票据AAA收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "m3": "3M",
                "m6": "6M",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "rq": "日期",
            },
        ],
    },
    "bondratefast10": {
        "name": "央票收益率",
        //  "rq": "日期",
        "Array": [
            {
                "name": "标题",
                "m3": "3M",
                "m6": "6M",
                "y1": "1Y",
                "y3": "3Y",
                "y5": "5Y",
                "y7": "7Y",
                "rq": "日期"
            },
        ],
    },
}

```




