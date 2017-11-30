# jqGrid

> shape data


http://10.1.64.125/stock/f9/stock/index.html?innercode=600570

http://10.1.5.203/http-report/query?{"ApiName":"JYFinanceSummary","SecuCode":"000002","WriteType":"json","Page":{"PageNo":1,"PageSize":100},"Compress":"true"}




每股收益-扣除/稀释(元),
每股收益-基本(元),
每股收益-稀释(元),
每股收益-扣除/基本(元),
每股收益-期末股本摊薄(元),
每股净资产BPS(元),
每股营业收入(元),
每股经营活动产生的现金流量净额(元),
每股现金流量净额(元),
净资产收益率(摊薄)(%),
净资产收益率(摊薄-扣除)(%),
净资产收益率(加权)(%),
净资产收益率(加权-扣除)(%),
总资产净利率(%),
投入资本回报率ROIC(%),
销售毛利率(%),
销售净利率(%),
总资产报酬率(%),
EBITDAMargin(%),
资产负债率(%),
总资产周转率(次),
销售商品、提供劳务收到的现金/营业收入(%),
营业收入同比增长率(%),
营业利润同比增长率(%),
归属母公司股东的净利润同比增长率(%),
营业总收入(元),
营业总成本(元),
营业收入(元,
营业利润(元),
利润总额(元),
净利润(元),
归属母公司股东的净利润(元),
非经常性损益(元),
扣除非经常性损益后的净利润(元),
研发费用(元),
息税前利润EBIT(计算)(元),
息税折旧摊销前利润EBITDA(计算)(元),
流动资产(元),
固定资产(元),
长期股权投资(元),
资产总计(元),
流动负债(元),
非流动负债(元),
负债合计(元),
资本公积(元),
盈余公积(元),
未分配利润(元,
股东权益(元),
归属母公司股东的权益(元),
销售商品、提供劳务收到的现金(元),
经营活动产生的现金流量(元),
购建固定资产、无形资产和其他长期资产支付的现金(元),
投资支付的现金(元),
投资活动产生的现金流量(元),
吸收投资收到的现金(元),
取得借款收到的现金(元),
筹资活动产生的现金流量(元),
现金及现金等价物净增加(元),
期末现金及现金等价物余额(元),
折旧与摊销(元),
报告期,
上市前后,
报表类型





## JSON Data Shaper (JSONDS)


> datas

```json

{
    "sucess": "1",
    "data": [{
        "columnmeta": {
            "a0": "DOUBLE",
            "a1": "DOUBLE",
            "a2": "DOUBLE"
        },
        "rows": [
            [
                "0.4832", // a0
                "0.6832", // a1
                "0.7832" // a2
            ],
            [
                "0.4832",
                "0.6832",
                "0.7832"
            ],
            [
                "0.4832",
                "0.6832",
                "0.7832"
            ]
        ]
    }]
}

```



> result

```json

{
    "rows": [
        {
            "level": 1,
            "isLeaf": false,
            "expanded": true,
            "parent": "1",
        },
        {
            "level": 2,
            "isLeaf": true,
            "expanded": false,
            "parent": "2",
            "a0": "4",// "a0"
            "a1": "6",// "a1"
            "a2": "8"// "a2"
        }
    ]
}

```

> OK

```js


const shapeJSON = (json = {}, debug = false) => {
    let keys = Object.keys(json.data[0].columnmeta);
    // ["a0", "a1", "a2"]
    let arrs = json.data[0].rows;
    // [["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"]]
    if(debug){
        console.log(`json =\n`, json);
        console.log(`debug =\n`, debug);
    }
    let rows = [];
    arrs.map(
        (arr, i) => {
            let obj = {};
            for (let ii = 0; ii < keys.length; ii++) {
                if(typeof arr[ii] === "number"){
                    obj[keys[ii]] = arr[ii] > 0 ? arr[ii] : "--";
                    // -1.7976931348623157e+308 & invalid value
                }else{
                    // string
                    obj[keys[ii]] = arr[ii];
                }
                if(debug && i === 0 && ii === 0){
                    console.log(`arr[ii] =\n`, arr[ii], typeof arr[ii]);
                }
            }
            obj["level"] = 2,
            obj["isLeaf"] = true,
            obj["expanded"] = false,
            obj["parent"] = "2",
            rows.push(obj);
        }
    );
    if(debug){
        console.log(`rows =\n`, rows);
    }
    let result = {
        rows,
        // rows: rows
    };
    if(debug){
        console.log(`result =\n`, result);
    }
    return result;
};

// IIFE

// let test = shapeJSON(json, true);
let test = shapeJSON(json["objs"], true);


```

