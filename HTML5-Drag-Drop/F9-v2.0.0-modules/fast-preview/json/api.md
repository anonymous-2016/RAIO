news:新闻，
bulletion:公告，
research:研报，


"stockfast05";//机构评级
"stockfast06";//股价/成交量
"stockfast07";//前十大股东
"stockfast08";//融资余额与融券余额差值走势
"stockfast09";//近一月资金流向大单统计
"stockfast10";//股权质押
"stockfast11";//控股或参股公司
"stockfast12";//高管持股变动情况(取10条)
stockfast13：机构持股变动统计(机构投资者(主表明细数据))

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








"stockfast05";//机构评级
"stockfast06";//股价/成交量
"stockfast07";//前十大股东
"stockfast08";//融资余额与融券余额差值走势
"stockfast09";//近一月资金流向大单统计
"stockfast10";//股权质押
"stockfast11";//控股或参股公司
"stockfast12";//高管持股变动情况(取10条)
stockfast13：机构持股变动统计(机构投资者(主表明细数据))


```js


{
    
    "news": {
        name: "新闻",
    },
    "bulletion": {
        name: "公告",
    },
    "research": {
        name: "研报/研究报告",
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
        nr: "内容",
        // 更多>> ???
    },
    "stockfast03": {
        name: "盈利预告 / 盈利预测",
        rq: "日期（前端只显示年月）"
        pj: "EPS平均"
        st: "上调家数"
        wc: "维持家数"
        xt: "下调家数"
    },
    "stockfast04": {
        name: "每股指标",
        // 上市公司公告
        syjb: "每股收益-基本",
        syxs: "每股收益-稀释",
        sykcjb: "每股收益-扣除／基本",
        sykcxs: "每股收益-扣除／稀释",
        jzc: "每股净资产",
        jycsxjllje: "每股经营活动产生的现金流量净额",
        // 聚源计算...
    },
    "stockfast05": {
        //机构评级
    }
    "stockfast06": {
        //股价/成交量
    }
}

```




每股指标：

    /**
     * 每股收益-期末股本摊薄
     */
    private String qbtb;
    /**
     * 每股收益-扣除/期末股本摊薄
     */
    private String kcqbtb;
    /**
     * 每股营业总收入
     */
    private String yyzsr;
    /**
     * 每股营业收入
     */
    private String yysr;
    /**
     * 每股息税前利润
     */
    private String sqlr;
    /**
     * 每股资本公积
     */
    private String zbgj;
    /**
     * 每股盈余公积
     */
    private String yygj;
    /**
     * 每股未分配利润
     */
    private String wfplr;
    /**
     * 每股留存收益
     */
    private String lcsy;
    /**
     * 每股现金流量净额
     */
    private String xjllje;
    /**
     * 每股企业自由现金流量
     */
    private String qyzyxjll;
    /**
     * 每股股东自由现金流量
     */
    private String gdzyxjll;
    /**
     * 报告期
     */
    private String bgq;
    /**
     * 上市前后
     */
    private String ssqh;
    /**
     * 报表格式
     */
    private String bbgs;
    /**
     * 报表类型
     */
    private String bblx;
    /**
     * 发布日期
     */
    private String fbrq;
    /**
     * 聚源计算
     */
    private String jyjs;
机构评级：
    /**
     * 日期（前端只显示年月）
     */
    private String rq;
    /**
     * EPS平均
     */
    private double pj;
    /**
     * 上调家数
     */
    private int st;
    /**
     * 维持家数
     */
    private int wc;
    /**
     * 下调家数
     */
    private int xt;
股价/成交量：
        /**
     * 涨跌
     */
    private String zd;
    /**
     * 涨跌幅(%)
     */
    private String zdf;
    /**
     * 今年以来涨跌幅(%)
     */
    private String jnzdf;
    /**
     * 3个月涨跌幅(%)
     */
    private String zdf3;
    /**
     * 12个月涨跌幅(%)
     */
    private String zdf12;
    /**
     * 12个月Beta(相对沪深300)
     */
    private String beta;
    /**
     * 明细
     */
    private List<StockPrice> details;
其中明细：

    /**
     * 时间轴
     */
    private String sjz;
    /**
     * 股价
     */
    private double gj;
    /**
     * 成交量
     */
    private double cjl;
    /**
     * 上证指数
     */
    private double szzs;

十大股东：

    /**
     * 时间
     */
    private String sj;
    /**
     * 机构持股比例
     */
    private String bl;
    /**
     * 名称
     */
    private String mc;
    /**
     * 持有数量
     */
    private String sl;
    /**
     * 股本性质
     */
    private String xz;
融资融券：

    /**
     * 时间
     */
    private String sj;
    /**
     * 融资余额与融券余额差值
     */
    private double bl;
    /**
     * 每股收益
     */
    private double gj;
近一月资金流向大单统计：

    /**
     * 时间
     */
    private String sj;
    /**
     * 大单净买入额
     */
    private double bl;
    /**
     * 最新收盘价
     */
    private double gj;
股权质押：

    /**
     * 公告日期
     */
    private String ggrq;
    /**
     * 出质人
     */
    private String czr;
    /**
     * 质权人
     */
    private String zqr;
    /**
     * 质押股数
     */
    private String zygs;
    /**
     * 质押比例
     */
    private String zybl;
    /**
     * 起始日期
     */
    private String qsrq;
    /**
     * 截止日期
     */
    private String jzrq;
控股参股：
    /**
     * 被参控公司
     */
    private String gs;
    /**
     * 参控关系
     */
    private String gx;
    /**
     * 参控比例
     */
    private String bl;
    /**
     * 被参控股公司净利润
     */
    private String jlr;
    /**
     * 被参控股公司主营业务
     */
    private String yw;
高管持股变动：

    /**
     * 变动截止日
     */
    private String bdr;
    /**
     * 股东名称
     */
    private String mc;
    /**
     * 方向
     */
    private String fx;
    /**
     * 变动数量
     */
    private String sl;
    /**
     * 关联高管
     */
    private String glgg;
    /**
     * 交易均价
     */
    private String jyjj;





// HTML
    "html.format.extraLiners": "",
    "html.format.enable": false


