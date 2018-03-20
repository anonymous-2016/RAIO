


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
    if (key in temp_obj) {
        result = temp_obj[key];
        console.log(`result = `, result);
    } else {
        result = null;
        console.log(`result = `, result);
    }
    return result;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

```

