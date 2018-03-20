


/usr/local/webapps/localStorage

browser-sync start --server --files './localStorage/*.*'


http://10.1.5.202:3000/localStorage/index.html
http://10.1.5.202:3000/localStorage/test.html




// test

http://10.1.5.202/stock/f9/fastview/index.html?gilcode=600570.SH&skin=black
http://10.1.5.202/otc/ts/test.html?skin=white



// test & cookie & OR

http://10.1.5.202/stock/f9/fastview/index.html?gilcode=600570.SH&skin=black
http://10.1.5.202/stock/f9/fastview/test.html?skin=white


expires= ????

document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 UTC;";
document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 GMT;";


```js

// 写 cookie
function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getsec(str) {
    var str1 = str.substr(1, str.length) * 1;
    var str2 = str.substr(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}
// s20是代表20秒
// h是指小时，如12小时则是：h12
// d是天数，30天则：d30


// https://regexper.com/#%2F%28%5E%7C%20%29xyz%3D%28%5B%5E%3B%5D*%29%28%3B%7C%24%29%2F
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape
// decodeURI && decodeURIComponent


// Chrome === encodeURI(url);
// http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#%E6%A8%A1%E5%9D%97%E9%80%89%E6%8B%A9

// decodeURIComponent will decode `URI special markers` such as `&, ?, #,` etc, decodeURI will not.

url = `http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#模块选择`;
encodeURI(url);
// "http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#%25E6%25A8%25A1%25E5%259D%2597%25E9%2580%2589%25E6%258B%25A9"
url = `http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#%E6%A8%A1%E5%9D%97%E9%80%89%E6%8B%A9`;
decodeURI(url);
// "http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#模块选择"

url = `http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#模块选择`;
encodeURIComponent(url);
// "http%3A%2F%2F10.1.5.202%2Fotc%2Ff9%2Findex.html%3Fgilcode%3D430003.OC%26skin%3Dblack%23%E6%A8%A1%E5%9D%97%E9%80%89%E6%8B%A9"
url = `http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#%E6%A8%A1%E5%9D%97%E9%80%89%E6%8B%A9`;
decodeURIComponent(url);
// "http://10.1.5.202/otc/f9/index.html?gilcode=430003.OC&skin=black#模块选择"



//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    // "(^| )xyz=([^;]*)(;|$)"
    // /(^| )xyz=([^;]*)(;|$)/
    console.log(`arr =`, arr);
    // undefined
    console.log(`document.cookie.match(reg) =`, document.cookie.match(reg));
    // str.match(regexp)
    // If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses.
    // If there were no matches, null is returned.
    if (arr = document.cookie.match(reg)) {
        console.log(`arr =`, arr);
        // ["_ga=GA1.2.649273537.1505177835;", "", "GA1.2.649273537.1505177835", ";", index: 0, input: "_ga=GA1.2.649273537.1505177835; csrftoken=4pBkJSwC…hW6BG5chU6g5SwQg35i; dwf_sg_task_completion=False", groups: undefined]
        console.log(`arr[2] =`, arr[2]);
        // GA1.2.649273537.1505177835
        console.log(`unescape(arr[2]) =`, unescape(arr[2]));
        // GA1.2.649273537.1505177835
        return unescape(arr[2]);
        // escape('äöü');
        // "%E4%F6%FC"
        // unescape("%E4%F6%FC");
        // "äöü"
    } else {
        return null;
    }
}

// 删除cookies ??? all cookies
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

// setCookie("name", "xyz", "d30 ");
console.log(getCookie("xyz"));

var arr = [],
    bool = false;
if (arr = bool) {
    console.log(getCookie("xyz"));
}else{
    console.log(`holy shit!`);
    // holy shit!
}

var arr = [],
    bool = false;
if (arr !== bool) {
    console.log(`pretty cool!`);
    // pretty cool!
}else{
    console.log(`holy shit!`);
}


const getCookies = (key_name = ``) => {
    let arr = [],
        temp_arr = [],
        temp_obj = {},
        result = ``;
    // document.cookie;
    // "_ga=GA1.2.649273537.1505177835; csrftoken=4pBkJSwCVkMM3hW6BG5chU6g5SwQg35i; dwf_sg_task_completion=False"
    document.cookie = `test=6 6 6;`;
    // "test=6 6 6; _ga=GA1.2.649273537.1505177835; csrftoken=4pBkJSwCVkMM3hW6BG5chU6g5SwQg35i; dwf_sg_task_completion=False"
    arr = document.cookie.split(`;`);
    // ["test=6 6 6", " _ga=GA1.2.649273537.1505177835", " csrftoken=4pBkJSwCVkMM3hW6BG5chU6g5SwQg35i", " dwf_sg_task_completion=False"]
    temp_arr = arr.map(
        (item, i) => {
            // console.log(`item = `, item, i);
            return item.trim();
        }
    );
    // ["test=6 6 6", "_ga=GA1.2.649273537.1505177835", "csrftoken=4pBkJSwCVkMM3hW6BG5chU6g5SwQg35i", "dwf_sg_task_completion=False"]
    temp_arr.map(
        (item, i) => {
            // console.log(`item = `, item, i);
            let key = ``,
                value = ``;
            key = item.split(`=`)[0];
            value = item.split(`=`)[1];
            temp_obj[key] = value;
            return {
                [key]: value
            };
        }
    );
    console.log(`temp_obj = `, temp_obj);
    if (key_name in temp_obj) {
        result = temp_obj[key_name];
        console.log(`result = `, result);
    } else {
        result = null;
        console.log(`result = `, result);
    }
    return result;
};


getCookies(`_hp2_id.1557708959`);
// "_hp2_id.1557708959=%7B%22userId%22%3A%220973096690871854%22%2C%22pageviewId%22%3A%220256347617340861%22%2C%22sessionId%22%3A%222302119049021178%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%223.0%22%7D; csrftoken=a8ace69ee6f846d6fb895028ad047bc1590bc0ed"

let obj = getCookies(`_hp2_id.1557708959`);
// "%7B%22userId%22%3A%220973096690871854%22%2C%22pageviewId%22%3A%220256347617340861%22%2C%22sessionId%22%3A%222302119049021178%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%223.0%22%7D"
decodeURI(obj);
// "{"userId"%3A"0973096690871854"%2C"pageviewId"%3A"0256347617340861"%2C"sessionId"%3A"2302119049021178"%2C"identity"%3Anull%2C"trackerVersion"%3A"3.0"}"
decodeURIComponent(obj);
// "{"userId":"0973096690871854","pageviewId":"0256347617340861","sessionId":"2302119049021178","identity":null,"trackerVersion":"3.0"}"
let obj = {},
    arr = [],
    str = ``;
obj = {"userId":"0973096690871854","pageviewId":"0256347617340861","sessionId":"2302119049021178","identity":null,"trackerVersion":"3.0"};

str = JSON.stringify(obj);
// "{"userId":"0973096690871854","pageviewId":"0256347617340861","sessionId":"2302119049021178","identity":null,"trackerVersion":"3.0"}"
obj = JSON.parse(str);
// {userId: "0973096690871854", pageviewId: "0256347617340861", sessionId: "2302119049021178", identity: null, trackerVersion: "3.0"}


arr = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];

str = JSON.stringify(arr);
// "["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]"

arr = JSON.parse(str);
// "["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]"



encodeURIComponent(obj);
// "%5Bobject%20Object%5D"
encodeURIComponent(str);
// "%7B%22userId%22%3A%220973096690871854%22%2C%22pageviewId%22%3A%220256347617340861%22%2C%22sessionId%22%3A%222302119049021178%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%223.0%22%7D"


encodeURIComponent(arr);
// "stockfast01%2Cstockfast04%2Cstockfast07%2Cbulletion%2Cresearch%2Cstockfast08%2Cstockfast09%2Cstockfast11"
encodeURIComponent(str);




decodeURIComponent(obj);
// "[object Object]"
decodeURIComponent(str);
// "{"userId":"0973096690871854","pageviewId":"0256347617340861","sessionId":"2302119049021178","identity":null,"trackerVersion":"3.0"}"

decodeURIComponent(arr);
// "stockfast01,stockfast04,stockfast07,bulletion,research,stockfast08,stockfast09,stockfast11"
decodeURIComponent(str);
// "["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]"


// modules & layout
modules = {
    left: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"],
    right: ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]
};




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

```

## GMT & UTC

https://www.timeanddate.com/time/gmt-utc-time.html

Coordinated Universal Time (UTC)
世界标准时间 UTC

协调世界时 (UTC) +0000 UTC
// Tue Mar 20 2018 13:56:08 GMT+0800 (China Standard Time)

Greenwich Mean Time (GMT)
格林尼治标准时间 (GMT)




## How cookies work

> A cookie is nothing but a small `text` file that's stored in your `browser`.
It contains some data:

* A `name-value pair` containing the actual data
* An `expiry date` after which it is no longer valid
* The `domain` and `path` of the server it should be sent to

```js

let date = new Date()
// Tue Mar 20 2018 13:56:08 GMT+0800 (China Standard Time)

date.toDateString();
// "Tue Mar 20 2018"

date.toUTCString();
// "Tue, 20 Mar 2018 05:56:16 GMT"
date.toGMTString();
// "Tue, 20 Mar 2018 05:56:16 GMT"
date.toISOString();
// "2018-03-20T05:56:16.941Z"

```

## `cookie` must set `expires` with the `key`

## `cookie` if only has `key`, the `expires`  will be set default to `1969-12-31T23:59:59.000Z`;

https://www.quirksmode.org/js/cookies.html


