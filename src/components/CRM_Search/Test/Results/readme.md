# example



multi-examples.json

commandexample.json


## test & output any 动态表头

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22}

http://localhost:3000/api/sc/JYTopic.StockSecondaryMarket.StockMarketPeform


http://10.1.5.203/http-report/query?%7B%22Page%22:%7B%22PageNo%22:%221%22,%22PageSize%22:%221%22%7D,%22EndDate%22:%222011-03-11%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:%5B%22RBX%22,%22JYZBX%22%5D,%22SecuType%22:%22All%22,%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22WriteType%22:%22json%22%7D

```js

output_data = [];

// test.results = [{},{}]

attributes

query?dynamic_obj_url

// 调用父组件的方法，设置 output_datas

let cols = JSON.parse(test.results[i].attributes.columns).cols;
// string to array

// shape table data (key, desc, name, type ???)
JSON.stringify(cols, null, 4);




this.setState({
    output_datas: cols
});

if(this.props.output_datas.length > 0){
    <SCT output={this.props.output_datas}  />
}esle{
    <SCT output={this.state.output_datas}  />
}


/*

    ??? Array in Array (recursive)
    // https://stackoverflow.com/questions/9362446/how-can-i-recursively-create-a-ul-lis-from-json-data-multiple-layers-deep

    // let cols = JSON.parse(col).cols;
    // JSON.stringify(cols, null, 4);
    [
        {
            "name": "交易日期",
            "value": "a0"
        },
        {
            "name": "证券代码",
            "value": "a1"
        },
        {
            "name": "证券简称",
            "value": "a2"
        },
        {
            "name": "总市值(亿元)",
            "value": "a3"
        },
        {
            "name": "流通市值(亿元)",
            "value": "a4"
        },
        {
            "name": "市盈率",
            "value": "a5"
        },
        {
            "name": "市净率",
            "value": "a6"
        },
        {
            "name": "日表现",
            "cols": [
                {
                    "name": "收盘价",
                    "value": "ClosePrice"
                },
                {
                    "name": "涨跌幅(%)",
                    "value": "ChangePCT"
                },
                {
                    "name": "振幅(%)",
                    "value": "RangePCT"
                },
                {
                    "name": "换手率(%)",
                    "value": "TurnoverRate"
                },
                {
                    "name": "成交量(万股)",
                    "value": "TurnoverVolume"
                },
                {
                    "name": "成交额(万元)",
                    "value": "TurnoverValue"
                },
                {
                    "name": "前收盘价",
                    "value": "PrevClosePrice"
                },
                {
                    "name": "开盘价",
                    "value": "OpenPrice"
                },
                {
                    "name": "最高价",
                    "value": "HighPrice"
                },
                {
                    "name": "最低价",
                    "value": "LowPrice"
                },
                {
                    "name": "均价",
                    "value": "AvgPrice"
                }
            ]
        },
        {
            "name": "近一周表现",
            "cols": [
                {
                    "name": "涨跌幅(%)",
                    "value": "ChangePCTRW"
                },
                {
                    "name": "振幅(%)",
                    "value": "RangePCTRW"
                },
                {
                    "name": "换手率(%)",
                    "value": "TurnoverRateRW"
                },
                {
                    "name": "日均换手率(%)",
                    "value": "TurnoverRatePerDayRW"
                },
                {
                    "name": "成交量(万股)",
                    "value": "TurnoverVolumeRW"
                },
                {
                    "name": "成交额(万元)",
                    "value": "TurnoverValueRW"
                },
                {
                    "name": "日均成交额(万元)",
                    "value": "TurnoverValuePerDayRW"
                },
                {
                    "name": "最高价",
                    "value": "HighPriceRW"
                },
                {
                    "name": "最低价",
                    "value": "LowPriceRW"
                },
                {
                    "name": "收盘最高价",
                    "value": "HighestClosePriceRW"
                },
                {
                    "name": "收盘最低价",
                    "value": "LowestClosePriceRW"
                },
                {
                    "name": "均价",
                    "value": "AvgPriceRW"
                }
            ]
        },
        {
            "name": "证监会行业",
            "value": "a8"
        },
        {
            "name": "申万行业",
            "value": "a7"
        }
    ]

*/

```


## normal test

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManagerMent%22,%22SecuCode%22:%22000001%22,%22WriteType%22:%22json%22}

> no columns ???



## multi tables 

000011 阳琨 fund.f9.fund_profile.FundManager.BasicInformations

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22,%22SecuCode%22:%22000011%22,%22Names%22:%22%E9%98%B3%E7%90%A8%22,%22WriteType%22:%22json%22}


fund.f9.fund_profile.FundManager.BasicInformations



```js
// todo


```

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22}


##  show small data & PageSize & any

> `"Page":{"PageNo":1,"PageSize":10}`

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:10},%22Compress%22:%22true%22}


> `"Page":{"PageNo":1,"PageSize":2}`

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}





## toUpperCase()

> `"a0".toUpperCase() === "A0"`

1. 将获取的 output 所有字段名 `"a0".toUpperCase(); => A0`

`"TurnOverRate".toUpperCase(); => "TURNOVERRATE"`

2. 同时，将获取的 test result 所有字段名 `""a0".toUpperCase(); => A0`

`"turnoverrate".toUpperCase(); => "TURNOVERRATE"`

```js

"turnoverrate".toUpperCase();
// TURNOVERRATE"

"TurnOverRate".toUpperCase();
// "TURNOVERRATE"

```


## SCT 

> line 177

###  再多给一个字段，一个用于 output 展示（大小写不变），一个用于 test 匹配（统一转成大写）


```js

    objs[key].name = key;
    objs[key].test_name = key.toUpperCase();
    // 再多给一个字段，一个用于展示（大小写不变），一个用于比较（统一转成大写）
    // toUpperCase() ??? move to test children component shape data ???

```

## 已经有值了，无需 overwrite ！

```js


    for (let key in objs) {
        if(!objs.hasOwnProperty(key)) continue;
        if (objs.hasOwnProperty(key)) {
            // A0 === name
            // objs[key].name = key;
            objs[key].name = key;
            objs[key].test_name = key.toUpperCase();
            // 再多给一个字段，一个用于展示（大小写不变），一个用于比较（统一转成大写）
            // toUpperCase() ??? move to test children component shape data ???
            if(objs[key].Description){
                // objs[key].name =  key;
                // objs[key].Description = "注释"; ???
                // 已经有值了，无需 overwrite ！
            }else{
                // TestProtocol 暂无注释
                objs[key].Description = `☹️ ${key} 暂无注释`;
                // 没有值了，需要 overwrite === ☹️ 暂无注释！
                if (!debug) {
                    console.log(`%c objs[key].Description === "emoji ☹️ 暂无注释" `, color.color_css2, objs[key].Description);
                }
            }
            objs[key].key = ("k000" + i++);
        }
    }

```






## 暂时防止 multi tables overflow ??? 


基金->F9


```js

    style={{
        // width: "calc(100% - 300px)",
        // width: "100%",
        maxWidth: 850,
        // 暂时防止 multi tables overflow ??? 
        margin: 10,
        padding: 10,
        boxSizing: "border-box",
        overflowX: "hidden"
    }}>


```






## Tabs table & test_name ???

> RT


"name": "A0",

"test_name": "A0",


```js

"B7_count".toUpperCase();
// "B7_COUNT"

```

"name": "B7_count",

"test_name": "B7_COUNT",


??? Topic.GilDataMarketSizeSta 打不开 ？？？






```js

    {
        "title": "基金经理详细信息(折线图同类平均)",
        "tablenamle": "lineChartRows",
        "datas": [
            {
                "type": "string",
                "Description": "时间",
                "Format": "date-time",
                "name": "A0",
                "key": "k0000"
            },
            {
                "type": "number",
                "Description": "基金值",
                "name": "A1",
                "key": "k0001"
            },
            {
                "type": "number",
                "Description": "同类平均",
                "name": "A2",
                "key": "k0002"
            },
            {
                "type": "number",
                "Description": "沪深300",
                "name": "A3",
                "key": "k0003"
            }
        ]
    }

```

## table ???

> datas => cols ???

`"key": "k0000" => "test_name": "A0"`


## ant table

```js

const columns = [
    {
        title: 'Name',
        // Description
        dataIndex: 'name',
        key: 'name',
    }, 
];
// "name": "A0",  => "key": "A0", ???

//  ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "CLOSEPRICE", "CHANGEPCT", "RANGEPCT", "TURNOVERRATE", "TURNOVERVOLUME", "TURNOVERVALUE", "PREVCLOSEPRICE", "OPENPRICE", "HIGHPRICE", "LOWPRICE", "AVGPRICE", "CHANGEPCTRW", "RANGEPCTRW", "TURNOVERRATERW", "TURNOVERRATEPERDAYRW", "TURNOVERVOLUMERW", "TURNOVERVALUERW", "TURNOVERVALUEPERDAYRW", "HIGHPRICERW", "LOWPRICERW", "HIGHESTCLOSEPRICERW", "LOWESTCLOSEPRICERW", "AVGPRICERW"]


const dataSource = [
    {
        key: '1', 
        // unique id
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
];

// "name": "A0",

// add key 
// "key": "key_10002",
// "key": `key_1000${}`,

datas = [
    {
        "key": "key_10001",
        "A0": "2011-03-11", 
        "A1": "000001.SZ", 
        "A2": "平安银行",
    },
    {
        "key": "key_10002",
        "A0": "2011-03-11", 
        "A1": "000002.SZ", 
        "A2": "万 科Ａ",
    }
];


```






```js
// keys

k = {
    "A0": "",
    "A1": "",
    "A2": "",
};

// values

v = [
    [
        "2011-03-11",
        "000001.SZ",
        "平安银行",
    ],
    [
        "2011-03-11",
        "000002.SZ",
        "万  科Ａ",
    ],
];

// (3) ["A0", "A1", "A2"]
Object.keys(k).map(
    (key, index) => {
        // key = A0
        let temp_obj = {};
        let arr = v[index];
        for(let item of arr){
            temp_obj[key] = arr[item];
        }
        console.log(`temp_obj`);
    }
);



// test OK


let result = [];

for(let i = 0; i < v.length; i++){
    let arr = v[i];
    let temp_obj = {};
    Object.keys(k).map(
        (key, index) => {
            temp_obj.key = `key_000${i+1}`;
            temp_obj[key] = arr[index];
            return temp_obj;
        }
    );
    result.push(temp_obj);
}
console.log(`result = \n`, JSON.stringify(result, null, 4));

/*

result = 
 [
    {
        "key": "key_0001",
        "A0": "2011-03-11",
        "A1": "000001.SZ",
        "A2": "平安银行"
    },
    {
        "key": "key_0002",
        "A0": "2011-03-11",
        "A1": "000002.SZ",
        "A2": "万  科Ａ"
    }
]

*/


// keys

r.map(
    // tab
    (tab) => {
        let p_obj = {};
        let c_obj = {};
        p_obj[tab.name] = [];
        // object keys length
        let key_length = Object.keys(tab.columnMeta).length;
        let keys = Object.keys(tab.columnMeta);
        //  ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]
        for (let key in tab.columnMeta) {
            // let c_obj = {};
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
            }
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
    }
);

//

// Ok new 

let result = [];
const test_result = r.map(
    // tab
    (tab) => {
        let keys = Object.keys(tab.columnMeta);
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let temp_obj = {};
            keys.map(
                (key, index) => {
                    temp_obj.key = `key_000${i+1}`;
                    temp_obj[key] = arr[index];
                    return temp_obj;
                }
            );
            result.push(temp_obj);
        }
        console.log(`result = \n`, JSON.stringify(result, null, 4));
        // return c_obj;
        return result;
    }
);

// [{A0: "", A1: "", A2: "", …}]



// Ok old

test_result = r.map(
    // tab
    (tab) => {
        let c_obj = {};
        let keys = Object.keys(tab.columnMeta);
        //  ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]
        for (let key in tab.columnMeta) {
            // let c_obj = {};
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
            }
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
        let arrs = tab.rows;
        for(let i = 0; i < arrs.length; i++){
            let arr = arrs[i];
            let temp_obj = {};
            Object.keys(c_obj).map(
                (key, index) => {
                    temp_obj.key = `key_000${i+1}`;
                    temp_obj[key] = arr[index];
                    return temp_obj;
                }
            );
            result.push(temp_obj);
        }
        console.log(`result = \n`, JSON.stringify(result, null, 4));
        // return c_obj;
        return result;
    }
);


http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}






tab.rows = [
    ["2011-03-11", "平安银行"],
    ["2011-03-12", "万  科Ａ",]
];



// josn datas

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22,%22SecuCode%22:%22000011%22,%22Names%22:%22%E9%98%B3%E7%90%A8%22,%22WriteType%22:%22json%22}

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager%22,%22SecuCode%22:%22000011%22,%22WriteType%22:%22json%22}

http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundIntroduce%22,%22SecuCode%22:%22000011%22,%22WriteType%22:%22json%22}


http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}


http://10.1.5.203/http-report/query?{%22ApiName%22:%22fund.f9.fund_profile.FundManager.BasicInformations%22,%22SecuCode%22:%22000011%22,%22Names%22:%22%E9%98%B3%E7%90%A8%22,%22WriteType%22:%22json%22}

http://10.1.5.203/http-report/query?{%22ApiName%22:%22TestProtocol%22,%22WriteType%22:%22json%22}






// bad


 ["A0", "A1", "A2"].map(
    (key, index) => {
        // key = A0
        let temp_obj = {};
        let arr = v[index];
        for(let item in arr){
            temp_obj.key = arr[item];
        }
        console.log(`temp_obj`); 
        return temp_obj;
    }
);


result = ["A0", "A1", "A2"].map(
    (key, index) => {
        // key = A0
        let temp_obj = {};
        let arr = v[index];
        for(let item in arr){
            temp_obj.key = arr[item];
        }
        console.log(`temp_obj`);
        return temp_obj;
    }
);



console.log(`result = \n`, JSON.stringify(result, null, 4));

/*


result = 
[
    {
        "key": "平安银行"
    },
    {
        "key": "万  科Ａ"
    },
    {}
]



*/















// target ???

datas = [
    {
        "key": "key_10001",
        "A0": "2011-03-11", 
        "A1": "000001.SZ", 
        "A2": "平安银行",
    },
    {
        "key": "key_10002",
        "A0": "2011-03-11", 
        "A1": "000002.SZ", 
        "A2": "万 科Ａ",
    }
];



```










> test_results_datas ???


```js

    console.log(`%c RT JSON.stringify(table.datas) = \n`, color.css2, JSON.stringify(table.datas, null, 4));
    /*
        [
            {
                "type": "string",
                "Description": "交易日期",
                "Format": "date-time",
                "name": "A0",
                "new_type": "STRING",
                "desc": "交易日期",
                "test_name": "A0",
                "key": "k0000"
            },
        ]
    */

// 



```


## test results 

> keys

http://10.1.5.203/http-report/query?{%22ApiName%22:%22JYTopic.StockSecondaryMarket.StockMarketPeform%22,%22EndDate%22:%222011-03-11%22,%22SecuType%22:%22All%22,%22MarketType%22:%22HSLS%22,%22DatePerformType%22:[%22RBX%22,%22JYZBX%22],%22WriteType%22:%22json%22,%22Page%22:{%22PageNo%22:1,%22PageSize%22:2},%22Compress%22:%22true%22}


```js

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
}

toUpperCase();

rs = [
    {},
    {},
];



rs.map(
    // tab
    (tab) => {
        let p_obj = {};
        let c_obj = {};
        p_obj[tab.name] = [];
        // object keys length
        let key_length = Object.keys(tab.columnMeta).length;
        let keys = Object.keys(tab.columnMeta);
        //  ["a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]
        for (let key in tab.columnMeta) {
            // let c_obj = {};
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
                // c_obj["type"] = tab.columnMeta[key];
                // "a0".toUpperCase(); === "A0"
            }
            // console.log(`%c ${c_obj[key]}`, "color: #f0f", c_obj);
            // console.log(`%c ${c_obj[type]}`, "color: #f0f", c_obj);
            console.log(`%c $JSON.stringify(c_obj, null, 4) = \n`, "color: #f0f", JSON.stringify(c_obj, null, 4));
            // c_obj = {"A0": ""}
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
    }
);

// datas key


 ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "CLOSEPRICE", "CHANGEPCT", "RANGEPCT", "TURNOVERRATE", "TURNOVERVOLUME", "TURNOVERVALUE", "PREVCLOSEPRICE", "OPENPRICE", "HIGHPRICE", "LOWPRICE", "AVGPRICE", "CHANGEPCTRW", "RANGEPCTRW", "TURNOVERRATERW", "TURNOVERRATEPERDAYRW", "TURNOVERVOLUMERW", "TURNOVERVALUERW", "TURNOVERVALUEPERDAYRW", "HIGHPRICERW", "LOWPRICERW", "HIGHESTCLOSEPRICERW", "LOWESTCLOSEPRICERW", "AVGPRICERW"]


```



































## SCT output_data 

> simple / simplify & enhancement


```js

{
    "type": "string",
    "Description": "性别",
    "name": "A0",
    "key": "k0000",
    "desc": "性别",
    "test_name": "A0",
    "new_type": "STRING"
}

// temp_obj

temp_obj[key] = index + 1;
temp_obj[name] = key;
temp_obj[test_name] = key.toUpperCase();
temp_obj[desc] = objs[key].Description.toUpperCase();
temp_obj[new_type] = objs[key].type.toUpperCase();

arr.push(temp_obj);

{
    "name": "A0",
    "key": "k0000",
    "desc": "性别",
    "test_name": "A0",
    "new_type": "STRING"
}



```












## javascript-development-environment

> cory house

```md

Hi, I'm xray, and I'm here to help.

I've benn building rich web applications in Javaascript for over 15 years now, 
and frankly I'm tired of starting from scratch.

So, in this course, I propose a solution.

What if your team had a powerful, rapid feedback development environment?


1. Travis CI 








```










































