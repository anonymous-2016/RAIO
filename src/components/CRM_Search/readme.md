# query all


{'Admin':'report','Action':'GetSchema','WriteType':'json'}:


# click link 

> ReportName

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'TestProtocol'}








查看全部报表Schema：

// {"Admin":"report","Action":"GetAllLoad","WriteType":"json"}  

 // {""} error!


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetAllLoad","WriteType":"json"}

查看指定报表Schema（通过关键字模糊查询）：
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","KeyWord":"开户情况","WriteType":"json"}

查看指定报表Schema（通过ReportName精确查找）：
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","ReportName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}

查看指定报表RowSchema（通过ReportName精确查找）：
http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","ReportName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}

测试命令：
http://10.1.5.31:8080/http/report/query?{"BeginDate":"2015-08-07","EndDate":"2017-08-07","LX":"6","ApiName":"JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics","WriteType":"json"}




http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27,%27KeyWord%27:%27%E5%9F%BA%E9%87%91-%3EF9%27}87833


# KeyWord

http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'基金->F9'}



# input

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetRowSchema%27,%27WriteType%27:%27json%27,%27ReportName%27:%27fund.f9.fund_profile.FundManager.BasicInformations%27}?ran=0.8659173158329834


http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}?ran:0.8659173158329834

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager.BasicInformations'}?ran:0.8659173158329834



{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'TestProtocol'}







# output (fetch {'ReportName': data.name})

> output-tables

// ReportName === name

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'fund.f9.fund_profile.FundManager'}?ran:0.038250282539534775




```js
const json = 
{
    "Success": true,
    "Info": {
        "schema": {
            "type": "object",
            "Properties": {
                "ByteV": {
                    "type": "integer"
                },
                "BooleanV": {
                    "type": "boolean"
                },
                "DoubleV": {
                    "type": "number"
                },
                "FloatV": {
                    "type": "number"
                },
            }
        },
        "name": "TestProtocol"
    }
};

let objs = json.Info.schema.Properties;

for (let key in objs) {
    if(!objs.hasOwnProperty(key)) continue;
    if(objs.hasOwnProperty(key)) {
        console.log(`key = `, key);
        console.log(`objs[key] =`, objs[key]);
        console.log(`objs[key].type =`, objs[key].type);
    }
    let props = objs[key];
    console.log(`***************************************`);
    for (let prop in props ) {
        if(!props.hasOwnProperty(prop)) continue;
        if(props.hasOwnProperty(prop)) {
            console.log(`prop = `, prop);
            console.log(`props[prop] = `, props[prop]);
        }
    }
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
}


// `for of` , can not be used for `object`, `array` is OK
for (let key of objs) {
    console.log(`key = `, key);
    console.log(`objs[key] =`, objs[key]);
    console.log(`objs[key].type =`, objs[key].type);
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    console.log(`key = `, key);
    console.log(`objs.key = `, objs.key);
    console.log(`key.type =`, key.type);
}

```


# object > array



```js

const json = 
{
    "Success": true,
    "Info": {
        "schema": {
            "type": "object",
            "Properties": {
                "ByteV": {
                    "type": "integer"
                },
                "BooleanV": {
                    "type": "boolean"
                },
                "DoubleV": {
                    "type": "number"
                },
                "FloatV": {
                    "type": "number"
                },
            }
        },
        "name": "TestProtocol"
    }
};

let objs = json.Info.schema.Properties;

// let arr = [];
// arr.push(objs);
// let data = arr[0];

// arr[0].ByteV === Object {type: "integer"}
// arr[0].ByteV.type === "integer"


let arr = [];

for (let key in objs) {
    // if(!objs.hasOwnProperty(key)) continue;
    if(objs.hasOwnProperty(key)) {
        console.log(`key = `, key);
        console.log(`objs[key] =`, objs[key]);
        console.log(`objs[key].type =`, objs[key].type);
        // arr.push(objs[key]);
        // arr.push({key: objs[key]});
        let obj = {
            num: key,
            type: objs[key].type
        };
        console.log(`arr[obj]=`, obj);
        arr.push(obj);
    }
    console.log(`***************************************`, arr);
}

console.log(`arr = `, arr);

```



# object => JOSN

```js

// Object {prefix: "keywords", searchkey: "xxxx yyyyy xxxxx"}
// Object {prefix: "reportname", searchkey: "xxxx yyyyy xxxxx"}
// object => JSON


let obj = {
    prefix: "reportname", 
    searchkey: "xxxx yyyyy xxxxx"
};

let str = JSON.stringify(obj);

let url = `https://stackoverflow.com/search?q=`;

let new_url = url + str;

// "https://stackoverflow.com/search?q={"prefix":"reportname","searchkey":"xxxx yyyyy xxxxx"}"

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27}


obj.prefix
// "reportname"

obj.searchkey
// "xxxx yyyyy xxxxx"

let key = obj.prefix,
    value = obj.searchkey;

key.toString();
// "reportname"


// ES6

let url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json",${key}:${value}}`;
// "http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json",reportname:xxxx yyyyy xxxxx}"

let url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","${key}":"${value}"}`;
// "http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","reportname":"xxxx yyyyy xxxxx"}"


if(key !== ""){
    url = `http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","${key}":"${value}"}`;
}else{
    // key === ""
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}



KeyWord
// "http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":""}"

KeyWord === keywords

ReportName === reportname

// switch case default

// ? : 

// Object {prefix: "keywords", searchkey: "xxxx yyyyy xxxxx"}
// Object {prefix: "reportname", searchkey: "xxxx yyyyy xxxxx"

// {"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":"股票--> F10"}

if(key === "reportname"){
    // 'ReportName':'fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail'
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}else if(key === "keywords"){
    // 'KeyWord':'股票 F10'
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}else{
    // key === ""
    url = `http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json'}`;
}

// all === {'Admin':'report','Action':'GetSchema','WriteType':'json'}:


// Object.assign

Object.assign();

let query_obj = {
    'Admin':'report',
    'Action':'GetSchema',
    'WriteType':'json',
    JSON.stringify(key): value
};
// key error ???
// Object {Admin: "report", Action: "GetSchema", WriteType: "json", key: "xxxx yyyyy xxxxx"}




// 'KeyWord':'股票 F10'

// 'ReportName':'fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail'

/*

{
    'Admin':'report','Action':'GetSchema','WriteType':'json',
    'KeyWord':'股票 F10'
}

{
    'Admin':'report','Action':'GetSchema','WriteType':'json',
    'ReportName':'fund.topic.performance_evaluation.fund_performance.AInvestmentValueAnalysisDetail'
}


{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'股票--> F10'}31746:

http://10.6.1.81/http-manage/admin?{%27Admin%27:%27report%27,%27Action%27:%27GetSchema%27,%27WriteType%27:%27json%27,%27KeyWord%27:%27%E8%82%A1%E7%A5%A8--%3E%20F10%27}


http://10.6.1.81/http-manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'股票--> F10'}

http://10.6.1.81/http-manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json","KeyWord":"股票--> F10"}


*/ 



const debug = true;
if(debug ? debug : true){
    console.log(`key = `, key);
    console.log(`value = `, value);
}



```



```js

    handleSubmit = (e) => {
        e.preventDefault();
        // e.stopPropagation();
        this.props.form.validateFieldsAndScroll(
            (err, values) => {
                try {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                } catch (error) {
                    throw new Error(error.message, error.name, error.fileName, error.lineNumber, error.columnNumber);
                    // new Error([message[, fileName[, lineNumber]]])
                }
                try {
                    throw new Error('Whoops!');
                } catch (e) {
                    const debug = true;
                    // debug module
                    if(debug){
                        console.log(`error.message : `, e.message);
                        console.log(`error.name : `, e.name);
                        console.log(`error.fileName : `, e.fileName);
                        console.log(`error.lineNumber : `, e.lineNumber);
                        console.log(`error.columnNumber : `, e.columnNumber);
                    }
                }
            }
        );
    }

```

# random length of array

```js

    // random length of array
    // Math.random()*10;
    const favorites = [
        {"url": "https://www.google.com"}, 
        {"url": "https://www.yahoo.com"}, 
        {"url": "https://www.news.com"}, 
        {"url": "https://www.acer.com"},
        {"url": "https://www.nasa.com"},
        {"url": "https://www.nba.com"},
        {"url": "https://www.ufo.com"}
    ];
    // let new_array = (favorites.length = parseInt(Math.random()*7) + 1);
    let new_array = favorites;
    new_array.length = parseInt(Math.random()*7 + 1);
    console.log(`new_array`, new_array);
    // json = new_array;

```



```js

/* 


GetSchema === input

// 指数--> F10--> 非股票指数--> 指数基金

description === KeyWord (只适用于 模糊 search)


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}

{'Admin':'report','Action':'GetSchema','WriteType':'json','KeyWord':'指数--> F10--> 非股票指数--> 指数基金'}:





name": "IndexF10IndexFund",
"description": "指数--> F10--> 非股票指数--> 指数基金",

"name": "IndexF10IndexQuotation",
"description": "指数--> F10--> 非股票指数--> 指数基金--> 指数行情",







name === ReportName (唯一的 query key)


GetRowSchema === output

{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexQuotation'}


http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetRowSchema','WriteType':'json','ReportName':'IndexF10IndexFund'}


http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetRowSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}




GetSchema === input

http://10.1.5.31:8081/http/manage/admin?{'Admin':'report','Action':'GetSchema','WriteType':'json',ReportName':'IndexF10IndexFund'}

http://10.1.5.31:8081/http/manage/admin?{"Admin":"report","Action":"GetSchema","WriteType":"json", "ReportName":"IndexF10IndexFund"}



*/

```



# input data

```js

fetch(`http://localhost:7777/input`)
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    console.log(`json.length = ${json.length}`);
    console.log(`json.Info`, json.Info.schema.Properties);
    // Properties
    let datas = json.Info.schema.Properties;
    let {ApiName, SecuCode} = datas;
    console.log(`ApiName = ${ApiName.Description}`);
    console.log(`SecuCode = ${SecuCode.Description}`);
    // Objects to Array
    let arr = [];
    for (let key in datas) {
        if(!datas.hasOwnProperty(key)) continue;
        if(datas.hasOwnProperty(key)) {
            // key === index
            arr.push(datas[key]);
        }
    }
    console.log(`arr result = `, arr);
    return inputs = arr;
});

```

# test

```js

http://10.1.5.31:8080/http/report/query?
{
    "OutField": [
        "a0",
        "a1",
        "a2",
        "a3"
    ],
    "FastQuarterReportType": [
        "Q1th",
        "Q2nd",
        "Q3rd",
        "Q4th"
    ],
    "FastDateFilterType": "AllYear",
    "Filters": [{
        "FilterType": "between",
        "Field": "a0",
        "MaxValue": "2017-08-04",
        "MinValue": "2012-01-01"
    }],
    "BeginDate": "2015-08-07",
    "EndDate": "2017-08-07",
    "LX": "6",
    "Sorts": [{
        "Field": "a0",
        "Sort": "desc"
    }],
    "Page": {
        "PageNo": "1",
        "PageSize": "20"
    },
    "ApiName": "JY.Topic.Market_profile.Investors_data_statistics.AccountStatistics",
    "WriteType": "json"
}

```





```js

let state = {
    loading: false,
    visible: false
};

// same key, auto get values!

const {visible, loading} = state;
visible;
// false

state = {
    loading: true,
    visible: true
};

visible;
// false (const will not change any more)

// react state auto update ???


let keys = {
    key1: 1,
    key2: 2
};

let {key1, key2} = keys;

key1;
// 1

keys = {
    key1: 11,
    key2: 22
};

key1;
// 1




// auto ...spread & ...rest

> $ npm i -D babel-plugin-transform-object-rest-spread

https://babeljs.io/docs/plugins/transform-object-rest-spread/


## Objects


let {x, y, ...rest} = {x: 1, y: 2, a: 3, b: 4};
// Uncaught SyntaxError: Unexpected token ...

rest;
// 

let spread = { x, y, ...rest };
// Uncaught SyntaxError: Unexpected token ...

spread;
// { x: 1, y: 2, a: 3, b: 4 }


## Arrays

let [x, y, ...rest] = [1, 2, 3, 4];

rest;
// [3, 4]

let spread = [x, y, ...rest];

spread;
// [1, 2, 3, 4]






```

# modal footer & form submit

```jsx


    footer={
        [
            <Button 
                key="submit" 
                type="primary" 
                size="large"
                onClick={this.testOK}
                htmlType="submit">
                测试
            </Button>,
            <Button 
                key="back" 
                size="large" 
                onClick={this.testCancel}>
                关闭
            </Button>
        ]
    }

```


Warning: setState(...): 
Cannot update during an existing state transition 
(such as within `render` or another component's constructor).
Render methods should be a pure function of props and state; 
constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.




