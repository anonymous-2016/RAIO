

# Tabs cols & datas OK


## Table cols 😃

https://github.com/gildata/RAIO/issues/129

```js

const ts = window.json.Info;

let cols = [];

if(ts.schema !== undefined && ts.schema.Properties !== undefined){
    // single table cols
    let temp_obj = {
        col_name: "",
        col_datas: ""
    };
    temp_obj.col_name = ts.name;
    let objs = ts.schema.Properties;
    let keys = Object.keys(objs);
    temp_obj.col_datas = keys.map(
        (key, index) => {
            let obj = {};
            obj.title = objs[key].Description;
            obj.key = key;
            obj.dataIndex = key;
            return obj;
        }
    );
    cols.push(temp_obj);
    console.log(`single table cols = \n`, JSON.stringify(cols, null, 4));
}else if(ts.schema !== undefined && ts.schema.Properties === undefined){
    // multi tables cols
    let tabs_obj = ts.schema;
    let tabs_keys = Object.keys(tabs_obj);
    tabs_keys.map(
        (key, index) => {
            let temp_obj = {
                col_name: "",
                col_datas: "",
                col_tab_title: ""
            };
            temp_obj.col_name = key;
            temp_obj.col_tab_title = tabs_obj[key].desc;
            let p_objs = tabs_obj[key].Properties;
            let p_keys = Object.keys(p_objs);
            temp_obj.col_datas = p_keys.map(
                (p_key, p_index) => {
                    let obj = {};
                    obj.title = p_objs[p_key].Description;
                    obj.key = p_key;
                    obj.dataIndex = p_key;
                    return obj;
                }
            );
            cols.push(temp_obj);
        }
    );
    console.log(`multi tables cols = \n`, JSON.stringify(cols, null, 4));
}else{
    // ts.schema === undefined
    // any === single table ???
    let temp_obj = {
        col_name: "",
        col_datas: ""
    };
    cols.push(temp_obj);
    console.log(`any cols = \n`, JSON.stringify(cols, null, 4));
}


```

## any test 😃

https://cdn.xgqfrms.xyz/json/crm/any-test.json

```js

let ts = {
    "Success": true,
    "Info": {
        any: "",
        message: "dynamic table cols/ tables cols ???"
    }
};


```





## Table datas 😃

https://github.com/gildata/RAIO/issues/128

```js

// test results

const tra = window.json;

let tabs = [];

tra.map(
    (tab, index) => {
        let RT_obj = {};
        let RT_temp_arr = [];
        // "name": "AnyManagedFundsRow",
        RT_obj.tab_name = tab.name;
        // console.log(`%c RT_obj.name = ${tab.name} \n`, `color: #f0f; font-size: 23px`);
        let temp_obj = {};
        // keys
        // console.log(`#@$ tab.columnMeta = \n`, JSON.stringify(tab.columnMeta, null, 4));
        let temp_keys = Object.keys(tab.columnMeta);
        // values
        // console.log(`#@$ tab.rows = \n`, JSON.stringify(tab.rows, null, 4));
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let obj = {};
            // shaped values
            temp_keys.map(
                (key, ii) => {
                    let k = key.toUpperCase();
                    obj["key"] = `RT_key 0000${i+1}`;
                    if(arr[ii] instanceof Object){
                        // obj[k] = JSON.stringify(arr[ii], null, 4);
                        obj[k] = JSON.stringify(arr[ii]);
                    }else{
                        // null.toString()
                        // Uncaught TypeError: Cannot read property 'toString' of null
                        if(arr[ii] === null){
                            obj[k] = "";
                        }else{
                           // obj[k] = arr[ii].toString();
                           obj[k] = arr[ii];
                        }
                    }
                }
            );
            // console.log(`cols obj = \n`, JSON.stringify(obj, null, 4));
            RT_temp_arr.push(obj);
        }
        RT_obj.tab_datas= RT_temp_arr;
        tabs.push(RT_obj);
    }
);

console.log(`tabs = \n`, JSON.stringify(tabs, null, 4));

```


# cols & datas 😃

https://github.com/gildata/RAIO/issues/125

> match  OK 😃

```js

// test cols

let cols = [
    {
        col_name: "AnyManagedFundsRow",
        col_datas: [
            {
                title: "管理公司",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "基金简称",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "投资类型",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    },
    {
        col_name: "BasicInformationRow",
        col_datas: [
            {
                title: "性别",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "出生日期",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "学历",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    },
    {
        col_name: "HistoricalReturnsRow",
        col_datas: [
            {
                title: "历史回报",
                key: "A0",
                dataIndex: "A0"
            },
            {
                title: "3月",
                key: "A1",
                dataIndex: "A1"
            },
            {
                title: "6月",
                key: "A2",
                dataIndex: "A2"
            }
        ]
    }
];




// test datas

let tabs = [
    {
        tab_name: "AnyManagedFundsRow",
        tab_datas: [
            {
                key:"RT_key 00001",
                A0:"华夏基金管理有限公司",
                A1:"华夏大中华企业精选灵活配置混合(QDII)",
                A2:"其他型基金"
            },
            {
                key:"RT_key 00002",
                A0:"华夏基金管理有限公司",
                A1:"华夏大盘精选混合",
                A2:"混合型基金"
            }
        ]
    },
    {
        tab_name: "BasicInformationRow",
        tab_datas: [
            {
                key:"RT_key 00001",
                A0:"男",
                A1:"1974-01-01",
                A2:"硕士"
            }
        ]
    }
];


```


# `cols & datas ` match OK 💯 

> continue 语句结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。

```js

// if(cols.length >= tabs.length) cols.map()

// if(cols.length < tabs.length)  tabs.map() ???
​
if(cols.length >= tabs.length){
    // long length
    cols.map(
        (col_obj, index) => {
            console.log(`%c ${index} col_obj.col_name = "${col_obj.col_name}"`, `background-color: #f0f`);
            let temp_data = [],
                temp_col = col_obj.col_datas;
            for(let i = 0; i < tabs.length; i++){
                if(col_obj.col_name === tabs[i].tab_name){
                    temp_data = tabs[i].tab_datas;
                    console.log(`${i} col_obj.col_name = "${col_obj.col_name}"`);
                    console.log(`${i} tabs[i].tab_name = "${tabs[i].tab_name}"`);                                                                                             continue; // 
                }else{
                    console.log(`☹️ ${i} tabs[i].tab_name  ☹️ = "${tabs[i].tab_name}"`);
                    // temp_data = [];
                }
            }
            console.log(`Table = \n`);
            console.log(`
                <Table 
                    dataSource={${JSON.stringify(temp_data)}}
                    columns={${JSON.stringify(temp_col)}} 
                />
            `);
        }
    );
}

```



![image](https://user-images.githubusercontent.com/18028768/29982501-8604ab68-8f84-11e7-9a62-c73a9c6a9051.png)


# continue

https://hacks.mozilla.org/2015/07/es6-in-depth-generators-continued/
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/continue








## any


```js

/*
    this.state = {
        test_tabs = []
    };

    const setTestCols = (cols) => {
        this.setState({
            test_tabs: cols
        });
    }
*/

if(output.cols.length > 0){
    //pass cols
    test_cols: output_shaped_cols
}else{
    this.setState({
        test_cols: test_tabs
    });
}



```



***
***


# any

https://cdn.xgqfrms.xyz/json/crm/any-table.json

https://cdn.xgqfrms.xyz/json/crm/any-test.json


## any output


http://10.1.5.203/http-manage/admin?{%22Admin%22:%22report%22,%22Action%22:%22GetRowSchema%22,%22WriteType%22:%22json%22,%20%22ReportName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22}


https://cdn.xgqfrms.xyz/json/crm/any.json


```js

{
    "Success": true,
    "Info": {
        "schema": {
            "type": "any"
        },
        "name": "JYTopic.StockSecondaryMarket.StockMarketPeform"
    }
}

```

## any test

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:%2210%22},%22Compress%22:%22true%22}

https://cdn.xgqfrms.xyz/json/crm/any-cols-datas.js

```js

[
    {
        "name": "JYTopic.StockSecondaryMarket.StockMarketPeform",
        "attributes": {
            "numfound": "3",
            "columns": "{\"cols\":[{\"name\":\"交易日期\",\"value\":\"a0\"},{\"name\":\"证券代码\",\"value\":\"a1\"},{\"name\":\"证券简称\",\"value\":\"a2\"},{\"name\":\"总市值(亿元)\",\"value\":\"a3\"},{\"name\":\"流通市值(亿元)\",\"value\":\"a4\"},{\"name\":\"市盈率\",\"value\":\"a5\"},{\"name\":\"市净率\",\"value\":\"a6\"},{\"name\":\"日表现\",\"cols\":[{\"name\":\"收盘价\",\"value\":\"ClosePrice\"},{\"name\":\"涨跌幅(%)\",\"value\":\"ChangePCT\"},{\"name\":\"振幅(%)\",\"value\":\"RangePCT\"},{\"name\":\"换手率(%)\",\"value\":\"TurnoverRate\"},{\"name\":\"成交量(万股)\",\"value\":\"TurnoverVolume\"},{\"name\":\"成交额(万元)\",\"value\":\"TurnoverValue\"},{\"name\":\"前收盘价\",\"value\":\"PrevClosePrice\"},{\"name\":\"开盘价\",\"value\":\"OpenPrice\"},{\"name\":\"最高价\",\"value\":\"HighPrice\"},{\"name\":\"最低价\",\"value\":\"LowPrice\"},{\"name\":\"均价\",\"value\":\"AvgPrice\"}]},{\"name\":\"近一周表现\",\"cols\":[{\"name\":\"涨跌幅(%)\",\"value\":\"ChangePCTRW\"},{\"name\":\"振幅(%)\",\"value\":\"RangePCTRW\"},{\"name\":\"换手率(%)\",\"value\":\"TurnoverRateRW\"},{\"name\":\"日均换手率(%)\",\"value\":\"TurnoverRatePerDayRW\"},{\"name\":\"成交量(万股)\",\"value\":\"TurnoverVolumeRW\"},{\"name\":\"成交额(万元)\",\"value\":\"TurnoverValueRW\"},{\"name\":\"日均成交额(万元)\",\"value\":\"TurnoverValuePerDayRW\"},{\"name\":\"最高价\",\"value\":\"HighPriceRW\"},{\"name\":\"最低价\",\"value\":\"LowPriceRW\"},{\"name\":\"收盘最高价\",\"value\":\"HighestClosePriceRW\"},{\"name\":\"收盘最低价\",\"value\":\"LowestClosePriceRW\"},{\"name\":\"均价\",\"value\":\"AvgPriceRW\"}]},{\"name\":\"证监会行业\",\"value\":\"a8\"},{\"name\":\"申万行业\",\"value\":\"a7\"}]}"
        },
        "columnMeta": {
            "a0": "DATE",
            "a1": "STRING",
            "a2": "STRING",
            "a3": "DOUBLE",
            "a4": "DOUBLE",
            "a5": "DOUBLE",
            "a6": "DOUBLE",
            "a7": "STRING",
            "a8": "STRING",
            "closeprice": "DOUBLE",
            "changepct": "DOUBLE",
            "rangepct": "DOUBLE",
            "turnoverrate": "DOUBLE",
            "turnovervolume": "DOUBLE",
            "turnovervalue": "DOUBLE",
            "prevcloseprice": "DOUBLE",
            "openprice": "DOUBLE",
            "highprice": "DOUBLE",
            "lowprice": "DOUBLE",
            "avgprice": "DOUBLE",
            "changepctrw": "DOUBLE",
            "rangepctrw": "DOUBLE",
            "turnoverraterw": "DOUBLE",
            "turnoverrateperdayrw": "DOUBLE",
            "turnovervolumerw": "DOUBLE",
            "turnovervaluerw": "DOUBLE",
            "turnovervalueperdayrw": "DOUBLE",
            "highpricerw": "DOUBLE",
            "lowpricerw": "DOUBLE",
            "highestclosepricerw": "DOUBLE",
            "lowestclosepricerw": "DOUBLE",
            "avgpricerw": "DOUBLE"
        },
        "rows": [
            [
                "2011-03-11",
                "000001.SZ",
                "平安银行",
                559.3447088,
                498.41004102,
                7.4214,
                1.6849,
                "货币金融服务",
                "银行",
                16.05,
                -1.24,
                1.6,
                0.7412,
                2301.6686,
                37190.1339,
                16.25,
                16.18,
                16.29,
                16.03,
                16.1579,
                -2.1341,
                5.7317,
                7.0431,
                1.1739,
                21871.4176,
                362364.3027,
                60394.0504,
                16.97,
                16.03,
                16.74,
                16.05,
                16.5679
            ],
            [
                "2011-03-11",
                "000002.SZ",
                "万  科Ａ",
                915.90101116,
                804.7521346699999,
                9.916,
                2.0706,
                "房地产业",
                "房地产开发",
                8.33,
                -2.0,
                2.35,
                0.9344,
                9026.89,
                75467.1139,
                8.5,
                8.47,
                8.48,
                8.28,
                8.3603,
                1.7094,
                5.1282,
                6.9223,
                1.1537,
                66876.4348,
                564992.8698,
                94165.4783,
                8.63,
                8.21,
                8.53,
                8.33,
                8.4483
            ],
            [
                "2011-03-11",
                "000004.SZ",
                "国农科技",
                11.546794049999999,
                11.5331128,
                55.5686,
                15.9157,
                "医药制造业",
                "生物制品",
                13.75,
                0.0,
                2.25,
                0.7521,
                63.0843,
                869.156,
                13.75,
                13.56,
                13.87,
                13.56,
                13.7777,
                -1.0079,
                5.3276,
                7.5353,
                1.2559,
                632.0453,
                8777.777,
                1462.9628,
                14.3,
                13.56,
                14.05,
                13.75,
                13.8879
            ]
        ]
    }
]

```







