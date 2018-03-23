# API

> type:表示操作类型，取值范围如下:

    1:查询
    // 2: delete ???
    3:更新
    4:添加
> pid: 表示分配给这项业务的ID,取值如下:

    10005: 主板F9速览配置
    10006: 三板F9速览配置
    10007: 三板zt速览配置

ucode: 表示用户id

## 获取配置的接口:

> type: 1 查询

http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43033

```js

fetch(`http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43033`)
.then(res => res.json())
.then(json => console.log(`fetch json =`, json))
.catch(err => console.log(`fetch error =`, err));

{
    "eid":10005,
    "items":[
        {
            "id":"18001",
            "pid":"10005",
            "name":"default",
            "value":"""",// server string bug
            "child":[]
        }
    ]
}

```


http://222.73.146.144/user/manager?type=3&id=18001&pid=10005&ucode=43033&name=default&value=test

http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43033



http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43034&name=default&value=test
http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43034&name=默认配置&value=test


返回值JSON:

```js

{
    "eid":10005,// 业务的ID === 主板F9速览配置
    "items":[
        {
            "id":"18001", // 要更新项的ID
            "pid":"10005", // 业务的ID === 主板F9速览配置
            "name":"默认配置",// "name": "default",
            "value":"",
            "child":[]
        }
    ]
}


```

> 其中eid的值是这项业务的ID，Items的值是用户在此项业务中建立了自己的分类结构，
如果速览模板只保存一个的话，只需要考虑Items的第一个元素，否则支持建立多个模板。


## 添加配置的接口:

> type: 4 添加

http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43033&name=default&value=[]

name: 表示此项名称
value: 表示此项值,用 Base64 进行编码

返回值样本

```json

{
    "flag":"true",
    "msg":"18001"
}

```

flag: 表示添加成功与否

msg: 当flag等于true时，msg表示添加配置型的的ID，如果flag等于false时，msg表示出错的原因。

## 更新配置的接口:

> type: 3 更新

http://222.73.146.144/user/manager?type=3&id=18001&pid=10005&ucode=43033&name=default&value=[]


id: 表示要更新项的ID,
pid: 表示分配给此业务的ID


返回样本

```json

{
    "flag":"true",
    "msg":"18001"
}


```

## test


```js


// modules & layout
modules = {
    left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};


let left = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];

left.map(item => window.btoa(`${item}`));

// ["c3RvY2tmYXN0MDE=", "c3RvY2tmYXN0MDQ=", "c3RvY2tmYXN0MDc=", "YnVsbGV0aW9u", "cmVzZWFyY2g=", "c3RvY2tmYXN0MDg=", "c3RvY2tmYXN0MDk=", "c3RvY2tmYXN0MTE="]

let right = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];

right.map(item => window.btoa(`${item}`));
// ["c3RvY2tmYXN0MDE=", "c3RvY2tmYXN0MDQ=", "c3RvY2tmYXN0MDc=", "YnVsbGV0aW9u", "cmVzZWFyY2g=", "c3RvY2tmYXN0MDg=", "c3RvY2tmYXN0MDk=", "c3RvY2tmYXN0MTE="]


modules = {
    left: ["c3RvY2tmYXN0MDE=", "c3RvY2tmYXN0MDQ=", "c3RvY2tmYXN0MDc=", "YnVsbGV0aW9u", "cmVzZWFyY2g=", "c3RvY2tmYXN0MDg=", "c3RvY2tmYXN0MDk=", "c3RvY2tmYXN0MTE="],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};


let modules = {
    left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};


window.btoa(`${modules}`);
// "W29iamVjdCBPYmplY3Rd"

window.atob("W29iamVjdCBPYmplY3Rd");
// "[object Object]"

// serialize / serialization 序列化

JSON.stringify(modules);
// "{"left":["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],"right":["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]}"

let serialize = encodeURIComponent(JSON.stringify(modules));
// "%7B%22left%22%3A%5B%22stockfast01%22%2C%22stockfast04%22%2C%22stockfast07%22%2C%22bulletion%22%2C%22research%22%2C%22stockfast08%22%2C%22stockfast09%22%2C%22stockfast11%22%5D%2C%22right%22%3A%5B%22stockfast01%22%2C%22stockfast04%22%2C%22stockfast07%22%2C%22bulletion%22%2C%22research%22%2C%22stockfast08%22%2C%22stockfast09%22%2C%22stockfast11%22%5D%7D"


JSON.parse(decodeURIComponent(serialize));
// {
//     left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
//     right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
// };


window.btoa(`${serialize}`);




```



```js


let modules = {
    left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};

// serialize / serialization 序列化

JSON.stringify(modules);
// "{"left":["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],"right":["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]}"

let serialize = encodeURIComponent(JSON.stringify(modules));
// "%7B%22left%22%3A%5B%22stockfast01%22%2C%22stockfast04%22%2C%22stockfast07%22%2C%22bulletion%22%2C%22research%22%2C%22stockfast08%22%2C%22stockfast09%22%2C%22stockfast11%22%5D%2C%22right%22%3A%5B%22stockfast01%22%2C%22stockfast04%22%2C%22stockfast07%22%2C%22bulletion%22%2C%22research%22%2C%22stockfast08%22%2C%22stockfast09%22%2C%22stockfast11%22%5D%7D"

window.btoa(`${serialize}`);
// "JTdCJTIybGVmdCUyMiUzQSU1QiUyMnN0b2NrZmFzdDAxJTIyJTJDJTIyc3RvY2tmYXN0MDQlMjIlMkMlMjJzdG9ja2Zhc3QwNyUyMiUyQyUyMmJ1bGxldGlvbiUyMiUyQyUyMnJlc2VhcmNoJTIyJTJDJTIyc3RvY2tmYXN0MDglMjIlMkMlMjJzdG9ja2Zhc3QwOSUyMiUyQyUyMnN0b2NrZmFzdDExJTIyJTVEJTJDJTIycmlnaHQlMjIlM0ElNUIlMjJzdG9ja2Zhc3QwMSUyMiUyQyUyMnN0b2NrZmFzdDA0JTIyJTJDJTIyc3RvY2tmYXN0MDclMjIlMkMlMjJidWxsZXRpb24lMjIlMkMlMjJyZXNlYXJjaCUyMiUyQyUyMnN0b2NrZmFzdDA4JTIyJTJDJTIyc3RvY2tmYXN0MDklMjIlMkMlMjJzdG9ja2Zhc3QxMSUyMiU1RCU3RA=="

// 防止 "{key: "value"}" 匹配错误!



JSON.parse(decodeURIComponent(serialize));
// {
//     left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
//     right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
// };



const base64_data = "JTdCJTIybGVmdCUyMiUzQSU1QiUyMnN0b2NrZmFzdDAxJTIyJTJDJTIyc3RvY2tmYXN0MDQlMjIlMkMlMjJzdG9ja2Zhc3QwNyUyMiUyQyUyMmJ1bGxldGlvbiUyMiUyQyUyMnJlc2VhcmNoJTIyJTJDJTIyc3RvY2tmYXN0MDglMjIlMkMlMjJzdG9ja2Zhc3QwOSUyMiUyQyUyMnN0b2NrZmFzdDExJTIyJTVEJTJDJTIycmlnaHQlMjIlM0ElNUIlMjJzdG9ja2Zhc3QwMSUyMiUyQyUyMnN0b2NrZmFzdDA0JTIyJTJDJTIyc3RvY2tmYXN0MDclMjIlMkMlMjJidWxsZXRpb24lMjIlMkMlMjJyZXNlYXJjaCUyMiUyQyUyMnN0b2NrZmFzdDA4JTIyJTJDJTIyc3RvY2tmYXN0MDklMjIlMkMlMjJzdG9ja2Zhc3QxMSUyMiU1RCU3RA==";
// 添加

let add_url = `http://222.73.146.144/user/manager?type=4&pid=10005&ucode=43033&name=default&value=${base64_data}`;


const empty_data = "";
// 更新

let update_url = `http://222.73.146.144/user/manager?type=3&id=18001&pid=10005&ucode=43033&name=default&value=${empty_data}`;


// id: 表示要更新项的ID, ???

// pid: 表示分配给此业务的ID


// 查询


let check_url = `http://222.73.146.144/user/manager?type=1&pid=10005&ucode=43033`;

// fixed ??? id=18001


// 返回值JSON:


{
    "eid":10005,// 业务的ID === 主板F9速览配置
    "items":[
        {
            "id":"18001", // 要更新项的ID
            "pid":"10005", // 业务的ID === 主板F9速览配置
            "name":"默认配置",// "name": "default",
            "value":"",
            "child":[]
        }
    ]
}




```


## Solution #1 – escaping the string before encoding it


```js

function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64EncodeUnicode('\n'); // "Cg=="



function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
b64DecodeUnicode('Cg=='); // "\n"

```

## Solution #2 – rewrite the DOMs atob() and btoa() using JavaScript's TypedArrays and UTF-8


https://github.com/beatgammit/base64-js
https://github.com/inexorabletash/text-encoding
https://github.com/coolaj86/TextEncoderLite
https://github.com/feross/buffer

https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding

```js

// <script type="text/javascript" src="base64js.min.js"/>

function Base64Encode(str, encoding = 'utf-8') {
    var bytes = new (TextEncoder || TextEncoderLite)(encoding).encode(str);
    return base64js.fromByteArray(bytes);
}

function Base64Decode(str, encoding = 'utf-8') {
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)(encoding).decode(bytes);
}

```


## window.btoa

> 用 base-64 编码一个 ASCII 字符串

https://mdn.mozillademos.org/files/15606/base64-Latin1(characters%20range).png


## window.atob

> 还原一个 ASCII 字符串，用 base-64 编码的
