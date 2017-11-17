// XHR_Ajax_return_value_setTimeout


/* 
    // xhr.responseText;
    function start() {
        var xhr = new XMLHttpRequest();
        var contentDiv = document.getElementById("Content");
        xhr.open("GET", "Demo?FirstName=Nat&LastName=Dunn", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                contentDiv.innerHTML = xhr.responseText;
            }
        }
        xhr.send(null);
    }
*/
/* 
    // this == xhr
    // this.responseText;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
*/

// https://cdn.xgqfrms.xyz/json/db.json
// 33k ??? 3.3k


const XHRAjaxTest = (url = `https://cdn.xgqfrms.xyz/json/db.json`, debug = true) => {
    const datas = {};
    // ajax
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        // let json = xhr.responseText;// string ???
        // show string by each character & characteristic
        // json ??? xhr.responseText;
        let json = JSON.parse(xhr.responseText);
        // JSON.parse(json);
        if (debug) {
            console.log(`json = \n`, json, typeof(json.info));
            // OK
            // String / Object
            // {swagger: "2.0", info: {…}, tags: Array(3), paths: {…}, securityDefinitions: {…}, …} object
        }
        Object.assign(datas, json);
        if (debug) {
            console.log(`Object.assign(datas, json) = \n`, datas.info);
            // OK
        }
    };
    // catch(error => console.log(`error = \n`, error));
    xhr.open("GET", url, true);
    xhr.send();
    if (debug) {
        console.log(`before return datas = \n`, JSON.stringify(datas.info, null, 4));
        // undefined
    }
    return datas;
};


window.document.addEventListener(`DOMContentLoaded`, () => {
    let uid = document.querySelector(`[data-uid="xhr-uid"]`),
        pre = document.createElement(`pre`);
    pre.setAttribute(`class`, `pre-style`);
    (() => {
        let json = {};
        json = XHRAjaxTest();
        console.log(`XHRAjaxTest json = \n`, JSON.stringify(json.info, null, 4));
        // undefined
        let json_length = Object.keys(json).length;// Array / Object
        if (json !== {} && json_length > 0) {
            // no need setTimeout()!
            console.log(`setTimeout & json = \n`, JSON.stringify(json.info, null, 4));
            // OK
            pre.innerText = JSON.stringify(json, null, 4);
            uid.insertAdjacentElement(`beforeend`, pre);
        } else {
            setTimeout(() => {
                console.log(`setTimeout & json = \n`, JSON.stringify(json.info, null, 4));
                // not executed!
                pre.innerText = JSON.stringify(json, null, 4);
                uid.insertAdjacentElement(`beforeend`, pre);
            }, 500);
        }
    })();
});



























