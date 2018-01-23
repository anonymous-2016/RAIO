
Statistics on changes in institutional shareholding
机构持股变动统计

institutional-shareholding-change-statistics


stock/turnover Volume Trading volume
股价/成交量

stock-price-turnover

Top Ten shareholders
前十大股东

top-ten-shareholders

Agency Research Statistics
机构调研统计

agency-research-statistics


Research Report
研究报告

research-report

Investor Relations
投资者关系

investor-relations

Company News
公司新闻
company-news

Company Announcements
公司公告
company-announcements

The trend of financing balance and margin balance

融资余额与融券余额差值走势

Financing balance and margin balance

Difference trend

financing-and-margin-balance-difference-trend


Capital flows to large single statistics in recent January
近一月资金流向大单统计

Nearly one months of capital flows to large single statistics
近一个月资金流向大单统计

monthly-capital-flows-large-single-statistics


Equity pledge
股权质押
equity-pledge

Holdings participation
控股参股情况
Holding status / Participation situation

holdings-participation-situation


Changes in the shareholding of executives
Changes in executive stock ownership
高管持股变动情况

changes-shareholding-executives

变动日期变动人姓名变动方向变动股份数量(股)成交均价(元)变动比例(‰)与董监高关系

③


机构调研统计





news:新闻，
bulletin:公告，// <del>bulletion:公告，</del>
research:研报，

"stockfast01": "重要信息",
"stockfast02": "近期重要事项 / 近期中重要事项",
"stockfast03": "盈利预告 / 盈利预测",
"stockfast04": "每股指标",
"stockfast05": 机构评级
"stockfast06": 股价/成交量
"stockfast07": 前十大股东
"stockfast08": 融资余额与融券余额差值走势
"stockfast09": 近一月资金流向大单统计
"stockfast10": 股权质押
"stockfast11": 控股或参股公司
"stockfast12": 高管持股变动情况(取10条)
"stockfast13": 机构持股变动统计(机构投资者(主表明细数据))




投资者关系 ??? template hidden

# no-data.png 暂无数据



每股指标:
// CSS (元)
{
    "syjb": "每股收益-基本",
    "syxs": "每股收益-稀释",
    "sykcjb": "每股收益-扣除／基本",
    "sykcxs": "每股收益-扣除／稀释",
    "jzc": "每股净资产",
    "jycsxjllje": "每股经营活动产生的现金流量净额",
    "jyjs": "聚源计算",
    "qbtb": "每股收益-期末股本摊薄",
    "kcqbtb": "每股收益-扣除/期末股本摊薄",
    "yyzsr": "每股营业总收入",
    "yysr": "每股营业收入",
    "sqlr": "每股息税前利润",
    "zbgj": "每股资本公积",
    "yygj": "每股盈余公积",
    "wfplr": "每股未分配利润",
    "lcsy": "每股留存收益",
    "xjllje": "每股现金流量净额",
    "qyzyxjll": "每股企业自由现金流量",
    "gdzyxjll": "每股股东自由现金流量",
    "bgq": "报告期",
    "ssqh": "上市前后",
    "bbgs": "报表格式",
    "bblx": "报表类型",
    "fbrq": "发布日期"
}

let obj = {};
copy(obj);
paste obj to url ???




```js

let publishDate = (arr[i].xwsj !== undefined) ? arr[i].xwsj : `😟暂无 新闻日期`;
let title = `${(arr[i].xwtitle !== undefined) ? arr[i].xwtitle : `🤓暂无 新闻标题`}`;


{

    "news": {
        name: "新闻",
        "xwtitle": "新闻标题",
        "xwnr": "新闻正文",
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
    "stockfast01": {
        name: "重要信息",
        sjgn: "涉及概念",
        zyyw: "主营业务",
        bdl: "52周波动率",
        cjl: "日均成交量(3个月)",
        jzc: "净资产",
        zgb: "总股本",
        ltgb: "流通股本",
        gxl: "股息率",
        cgzb: " 前十大机构持有 / 机构持股占比(%)",
        mbjg: "目标价格",
        zhpj: "综合评级"
    },
    "stockfast02": {
        name: "近期重要事项 / 近期中重要事项",
        rq: "日期",
        sj: "事件",
        nr: "内容"// 更多>> ???
    },
    "stockfast03": {
        name: "盈利预告 / 盈利预测",
        rq: "日期（前端只显示年月）",// x-Axis
        pj: "EPS平均",// series 平均
        st: "上调家数",// series 上调
        wc: "维持家数",// series 维持
        xt: "下调家数"// series 下调
    },
    "stockfast04": {
        name: "每股指标",// name
        syjb:"每股收益-基本",
        syxs:"每股收益-稀释",
        sykcjb:"每股收益-扣除／基本",
        sykcxs:"每股收益-扣除／稀释",
        jzc:"每股净资产",
        jycsxjllje:"每股经营活动产生的现金流量净额",
        jyjs:"聚源计算",
        qbtb:"每股收益-期末股本摊薄",
        kcqbtb:"每股收益-扣除/期末股本摊薄",
        yyzsr:"每股营业总收入",
        yysr:"每股营业收入",
        sqlr:"每股息税前利润",
        zbgj:"每股资本公积",
        yygj:"每股盈余公积",
        wfplr:"每股未分配利润",
        lcsy:"每股留存收益",
        xjllje:"每股现金流量净额",
        qyzyxjll:"每股企业自由现金流量",
        gdzyxjll:"每股股东自由现金流量",
        bbgs:"报表格式",
        bblx:"报表类型",
        bgq:"报告期",
        ssqh:"上市前后",
        fbrq:"发布日期",// fixed UI ???
    },
    "stockfast05": {
        name: "机构评级",
        "sj": "横轴时间",
        "st": "上调个数",
        "wc": "维持个数",
        "xt": "下调个数",
        "gj": "股价"
    },
    "stockfast06": {
        name: "股价/成交量",
        //  "gj": "股价",
        "zd": "涨跌",
        "zdf": "涨跌幅(%)",
        "jnzdf": "今年以来涨跌幅(%)",
        "zdf3": "3个月涨跌幅(%)",
        "zdf12": "12个月涨跌幅(%)",// 52周涨跌幅
        "beta": "12个月Beta(相对沪深300)",// 52周Beta
        "details": {
            name: "明细",
            "sjz": "时间轴",
            "gj": "股价",
            "cjl": "成交量",
            "szzs": "上证指数"
        }
    },
    "stockfast07": {
        name: "前十大股东",
        "sj": "时间",
        "bl": "占流通股比例(%)",
        "mc": "机构或基金名称",
        "sl": "持有数量(万股)",
        "xz": "股本性质"
    },
    "stockfast08": {
        name: "融资余额与融券余额差值走势",
        "sj": "时间",
        "bl": "融资余额与融券余额差值",// 净利润
        "gj": "每股收益"// 市价 ???
    },
    "stockfast09": {
        name: "近一月资金流向大单统计",
        "sj": "时间",
        "bl": "大单净买入额",// 大单净流入
        "gj": "最新收盘价"// 市价 ???
    },
    "stockfast10": {
        name: "股权质押",
        "ggrq": "公告日期",// 质押公告日期
        "czr": "出质人",
        "zqr": "质权人",
        "zygs": "质押股数",// 质押股数(万股)
        "zybl": "质押比例",// 占流通A股比例
        "qsrq": "起始日期",// 质押起始日期
        "jzrq": "截止日期"// 质押结束日期,
    },
    "stockfast11": {
        name: "控股参股情况",
        "gs": "被参控公司",
        "gx": "参控关系",
        "bl": "参控比例",// 参控比例（%）
        "jlr": "被参控股公司净利润",
        "yw": "被参控股公司主营业务"
    },
    "stockfast12": {
        name: "高管持股变动情况",
        "bdr": "变动截止日",// 变动日期
        "mc": "股东名称",// 变动人姓名
        "fx": "方向",// 变动方向
        "sl": "变动数量",// 变动股份数量(股)
        "glgg": "关联高管",// 成交均价(元)
        "jyjj": "交易均价"
        // 变动比例(‰)
    },
    "stockfast13": {
        name: "机构持股变动统计",
        "sj": "时间",
        "bl": "比例",
        "gj": "股价"
    }
}

```


```js

    let obj = {
        // name: "每股指标",
        // bbgs:"报表格式",
        // bblx:"报表类型",
        // bgq:"报告期",
        // fbrq:"发布日期",
        // ssqh:"上市前后",// 上市公司公告 ???
        syjb:"每股收益-基本",
        syxs:"每股收益-稀释",
        sykcjb:"每股收益-扣除／基本",
        sykcxs:"每股收益-扣除／稀释",
        jzc:"每股净资产",
        jycsxjllje:"每股经营活动产生的现金流量净额",
        jyjs:"聚源计算",// 聚源计算
        qbtb:"每股收益-期末股本摊薄",
        kcqbtb:"每股收益-扣除/期末股本摊薄",
        yyzsr:"每股营业总收入",
        yysr:"每股营业收入",
        sqlr:"每股息税前利润",
        zbgj:"每股资本公积",
        yygj:"每股盈余公积",
        wfplr:"每股未分配利润",
        lcsy:"每股留存收益",
        xjllje:"每股现金流量净额",
        qyzyxjll:"每股企业自由现金流量",
        gdzyxjll:"每股股东自由现金流量",
    };
    // Object.keys(obj);
    // copy(JSON.stringify(Object.keys(obj)));
    // [ "syjb", "syxs", "sykcjb", "sykcxs", "jzc", "jycsxjllje", "jyjs", "qbtb", "kcqbtb", "yyzsr", "yysr", "sqlr", "zbgj", "yygj", "wfplr", "lcsy", "xjllje", "qyzyxjll", "gdzyxjll" ]


```

https://www.hcharts.cn/demo/highcharts

https://www.hcharts.cn/demo/highcharts/renderer

https://www.hcharts.cn/demo/highcharts/wordcloud


https://www.hcharts.cn/demo/highcharts/dynamic-master-detail
https://www.hcharts.cn/demo/highcharts/column-negative

https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/legend/navigation/



# SVG

> modify css style

```js

    // svg style
    let svg_legends = document.querySelectorAll(`.highcharts-legend-item`);
    // svg_legend;
    console.log(`svg_legends = `, svg_legends);
    svg_legends.forEach(
        (svg_legend, index) => {
            console.log(`svg_legend, index`, svg_legend, index);
            if (index < svg_legends.length - 1) {
                svg_legend.lastChild;
                svg_legend.lastChild.setAttribute(`x`, 0);
                svg_legend.lastChild.setAttribute(`y`, 5);
                svg_legend.lastChild.setAttribute(`width`, 17);
                svg_legend.lastChild.setAttribute(`height`, 10);
                svg_legend.lastChild.setAttribute(`rx`, 0);
                svg_legend.lastChild.setAttribute(`ry`, 0);
            }
        }
    );

    // svg style
    let svg_legend = document.querySelector(`.highcharts-legend-item`);
    svg_legend;
    svg_legend.lastChild;
    svg_legend.lastChild.setAttribute(`x`, 0);
    svg_legend.lastChild.setAttribute(`y`, 5);
    svg_legend.lastChild.setAttribute(`width`, 17);
    svg_legend.lastChild.setAttribute(`height`, 10);
    svg_legend.lastChild.setAttribute(`rx`, 0);
    svg_legend.lastChild.setAttribute(`ry`, 0);
    /*
        <rect x="2" y="4" width="17" height="12" fill="#1a75bc" rx="0" ry="0" class="highcharts-point"></rect>
        <rect x="0" y="5" width="17" height="10" fill="#1a75bc" rx="0" ry="0" class="highcharts-point"></rect>
    */

```

```sh

$ browser-sync start --server --files "./*.*"

```

```css

.fv-financing-and-margin-balance-difference-trend-hs-container {
    /* max-width: 544px;
    max-height: 295px; */
    box-sizing: border-box;
    /* width: 850px; */
    /* height: 275px; */
    /* overflow-x: scroll; */
    height: 100%;
    width: 100%;
    min-height: 295px;
    min-width: 544px;
}

```




https://www.hcharts.cn/demo/highstock

https://www.hcharts.cn/demo/highstock/navigator-multiple-series
https://www.hcharts.cn/demo/highstock/compare


https://www.hcharts.cn/demo/highcharts/combo-dual-axes
https://www.hcharts.cn/demo/highcharts/line-time-series


https://www.hcharts.cn/demo/highcharts/combo-meteogram
https://www.hcharts.cn/demo/highcharts/column-drilldown
https://www.hcharts.cn/demo/highcharts/column-parsed
https://www.hcharts.cn/demo/highcharts/combo-timeline



https://xueqiu.com/

https://xueqiu.com/S/HKHSI

https://raphaeljs.com/


恒生指数，香港股市价格的重要指标，指数由若干只成份股（即蓝筹股）市值计算出来的，代表了香港交易所所有上市公司的12个月平均市值涵盖率的63%，恒生指数由恒生银行下属恒生指数有限公司负责计算及按季检讨，公布成份股调整。
恒生指数，由香港恒生银行全资附属的恒生指数服务有限公司编制，是以香港股票市场中的50家上市股票为成份股样本，以其发行量为权数的加权平均股价指数，是反映香港股市价幅趋势最有影响的一种股价指数。
该指数于1969年11月24日首次公开发布，基期为1964年7月31日．基期指数定为100。




```js

const json = ((debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    html = body.innerHTML;
    objs = JSON.parse(str);
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();



const keys = (() => {
    const getAllKeys = (arr_or_obj = {}, debug = false) => {
        let any = (typeof arr_or_obj === "object") ? arr_or_obj : {};
        let keys = [];
        if (Array.isArray(any)) {
            keys = Object.keys(any[0]);
        }else{
            keys = Object.keys(any);
        }
        if (debug) {
            console.log(`arr_or_obj = `, arr_or_obj);
            console.log(`any = `, any);
            console.log(`keys = `, keys);
        }
        // CCAC: Chrome Console Auto Copy
        copy(keys);
        return keys;
    };
    let body = document.querySelector(`body`),
        str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    let objs = JSON.parse(str),
        // keys = getAllKeys(objs);
        keys = getAllKeys(objs, true);
    text = JSON.stringify(keys, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(`beforeend`, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();



const getAllKeys = () => {
    const getAllKeys = (arr_or_obj = {}, debug = false) => {
        let any = (typeof arr_or_obj === "object") ? arr_or_obj : {};
        let keys = [];
        if (Array.isArray(any)) {
            keys = Object.keys(any[0]);
        }else{
            keys = Object.keys(any);
        }
        if (debug) {
            console.log(`arr_or_obj = `, arr_or_obj);
            console.log(`any = `, any);
            console.log(`keys = `, keys);
        }
        // CCAC: Chrome Console Auto Copy
        copy(keys);
        return keys;
    };
    let body = document.querySelector(`body`),
        str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    let objs = JSON.parse(str),
        // keys = getAllKeys(objs);
        keys = getAllKeys(objs, true);
    text = JSON.stringify(keys, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(`beforeend`, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
};



window.utils = {
    // keys: getAllKeys(),
    keys: (() => getAllKeys())()
}

window.utils.keys;


```


















