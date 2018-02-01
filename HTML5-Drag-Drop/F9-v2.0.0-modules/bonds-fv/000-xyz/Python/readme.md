











```js



let cookies = document.cookie;

// "JSESSIONID=00F4962322E126A6D3597767DD0388CC; tk=Z6dx3H-MyxKeebQk8h1KITR2hUmF1syGKWGoY8hGd-kdq1110; _jc_save_wfdc_flag=dc; RAIL_EXPIRATION=1517253766666; RAIL_DEVICEID=sSUzaNPMONesNnyt4q6iNesAaMiKenJmuekiENa0dzwHOQEwXSVTRtpnMY25dSopxFpLYjQjuVC6atbg3HazuRlbNKLfd1UCauynXdTpX7ZOEilMxJXbYyZgZl14NjNnQIZPaASZCpZ0NTBvse3h9emTbq_bt-mI; route=495c805987d0f5c8c84b14f60212447d; BIGipServerotn=1608057098.64545.0000; BIGipServerpassport=904397066.50215.0000; current_captcha_type=Z; _jc_save_fromStation=%u4E0A%u6D77%u8679%u6865%2CAOH; _jc_save_toStation=%u6C38%u57CE%u5317%2CRGH; _jc_save_toDate=2018-02-01; _jc_save_fromDate=2018-02-10";


// keys & values


/* 

https://www.w3schools.com/jsref/jsref_decodeURIComponent.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent

https://stackoverflow.com/questions/747641/what-is-the-difference-between-decodeuricomponent-and-decodeuri


*/

let uri = "https://www.xgqfrms.xyz/index.html?name=xgqfrms&car=ModalX";
let uri_enc = encodeURIComponent(uri);
uri_enc;
// "https%3A%2F%2Fwww.xgqfrms.xyz%2Findex.html%3Fname%3Dxgqfrms%26car%3DModalX"
let uri_dec = decodeURIComponent(uri_enc);
uri_dec;
// "https://www.xgqfrms.xyz/index.html?name=xgqfrms&car=ModalX"


// encodeURIComponent(document.cookie);
// decodeURIComponent(document.cookie);// bug ??? 12306


// `encodeURI()` & `encodeURIComponent()`

// string to Object ??? string to Array


const getCookie = (key = ``) => {
    let arr = (key !== ``) ? key.split(`;`) : document.cookie.split(`;`),
        obj = {};
    for (let i = 0; i < arr.length; i++) {
        let temp_arr = arr[i].split(`=`);
        obj[`${temp_arr[0].trim()}`] = `${temp_arr[1].trim()}`;
    }
    console.log(`obj = `, JSON.stringify(obj, null, 4));
    return obj;
};

let cookies_obj = getCookie();

let fromStation = cookies_obj._jc_save_fromStation,
    toStation = cookies_obj._jc_save_toStation;

cookies_obj._jc_save_fromStation;
// undefined
cookies_obj["_jc_save_fromStation"];
// undefined
cookies_obj[" _jc_save_fromStation"];
// "%u6C38%u57CE%u5317%2CRGH"


cookies_obj[" _jc_save_fromStation"];
// undefined
cookies_obj["_jc_save_fromStation"];
// "%u6C38%u57CE%u5317%2CRGH"
cookies_obj._jc_save_fromStation;
// "%u6C38%u57CE%u5317%2CRGH"



/* 

obj =  {
    "JSESSIONID": "00F4962322E126A6D3597767DD0388CC",
    " tk": "Z6dx3H-MyxKeebQk8h1KITR2hUmF1syGKWGoY8hGd-kdq1110",
    " _jc_save_wfdc_flag": "dc",
    " RAIL_EXPIRATION": "1517253766666",
    " RAIL_DEVICEID": "sSUzaNPMONesNnyt4q6iNesAaMiKenJmuekiENa0dzwHOQEwXSVTRtpnMY25dSopxFpLYjQjuVC6atbg3HazuRlbNKLfd1UCauynXdTpX7ZOEilMxJXbYyZgZl14NjNnQIZPaASZCpZ0NTBvse3h9emTbq_bt-mI",
    " route": "495c805987d0f5c8c84b14f60212447d",
    " BIGipServerotn": "1608057098.64545.0000",
    " BIGipServerpassport": "904397066.50215.0000",
    " current_captcha_type": "Z",
    " _jc_save_fromStation": "%u4E0A%u6D77%u8679%u6865%2CAOH",
    " _jc_save_toStation": "%u6C38%u57CE%u5317%2CRGH",
    " _jc_save_toDate": "2018-02-01",
    " _jc_save_fromDate": "2018-02-10"
}



obj =  {
    "tk": "Z6dx3H-MyxKeebQk8h1KITR2hUmF1syGKWGoY8hGd-kdq1110",
    " JSESSIONID": "5C2AEA7A1BE3A7595D81CEE7156E0A24",
    " _jc_save_wfdc_flag": "dc",
    " RAIL_EXPIRATION": "1517253766666",
    " RAIL_DEVICEID": "sSUzaNPMONesNnyt4q6iNesAaMiKenJmuekiENa0dzwHOQEwXSVTRtpnMY25dSopxFpLYjQjuVC6atbg3HazuRlbNKLfd1UCauynXdTpX7ZOEilMxJXbYyZgZl14NjNnQIZPaASZCpZ0NTBvse3h9emTbq_bt-mI",
    " route": "495c805987d0f5c8c84b14f60212447d",
    " BIGipServerotn": "1608057098.64545.0000",
    " BIGipServerpassport": "904397066.50215.0000",
    " current_captcha_type": "Z",
    " _jc_save_toDate": "2018-02-01",
    " _jc_save_fromStation": "%u6C38%u57CE%u5317%2CRGH",
    " _jc_save_toStation": "%u4E0A%u6D77%u8679%u6865%2CAOH",
    " _jc_save_fromDate": "2018-02-22"
}

*/
// string to Object ??? string to Array

const getCookie = (key = ``) => {
    let key_name = `${key}=`,
        key_value = ``;
    let arr = document.cookie.split(`;`);
    // ["JSESSIONID=00F4962322E126A6D3597767DD0388CC", " tk=Z6dx3H-MyxKeebQk8h1KITR2hUmF1syGKWGoY8hGd-kdq1110", " _jc_save_wfdc_flag=dc", " RAIL_EXPIRATION=1517253766666", " RAIL_DEVICEID=sSUzaNPMONesNnyt4q6iNesAaMiKenJmuek…MxJXbYyZgZl14NjNnQIZPaASZCpZ0NTBvse3h9emTbq_bt-mI", " route=495c805987d0f5c8c84b14f60212447d", " BIGipServerotn=1608057098.64545.0000", " BIGipServerpassport=904397066.50215.0000", " current_captcha_type=Z", " _jc_save_fromStation=%u4E0A%u6D77%u8679%u6865%2CAOH", " _jc_save_toStation=%u6C38%u57CE%u5317%2CRGH", " _jc_save_toDate=2018-02-01", " _jc_save_fromDate=2018-02-10"]
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let temp_arr = arr[i].split(`=`);
        obj[`${temp_arr[0]}`] = `${temp_arr[1]}`;
    }
    console.log(`obj = `, JSON.stringify(null, 4, obj));
    const decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// string to Object ??? string to Array

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// getCookie(`_jc_save_toStation`);








```



# all cookies

https://www.w3schools.com/js/js_cookies.asp

```js


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}



```








