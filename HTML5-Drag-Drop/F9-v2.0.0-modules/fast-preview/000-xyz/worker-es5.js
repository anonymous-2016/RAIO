"use strict";

/* worker 线程  */

// another namespace ??? const css
var css = "\n    color: #0ff;\n    font-size: 23px;\n";
var css_fd = "\n    color: #0f0;\n    font-size: 23px;\n";

// callback function
onmessage = function onmessage(e) {
    // let id = e.data;//通过evt.data获得发送来的数据
    console.log("%c \u4E3B\u7EBF\u7A0B e = ", css, e);
    // MessageEvent {isTrusted: true, data: "hello world", origin: "", lastEventId: "", source: null, …}
    // data: "https://cdn.xgqfrms.xyz/json/xgqfrms.json"

    // console.log(`主线程 id = `, id);
    // 主线程 id =  hello world
    // fetch data
    var datas = []; // {}
    // const url = `https://cdn.xgqfrms.xyz/json/xgqfrms.json`;
    var url = e.data;
    // decodeURI()
    console.log("%c \u4E3B\u7EBF\u7A0B url = \n", css, "\"" + url + "\"");
    fetch(url = "https://cdn.xgqfrms.xyz/json/xgqfrms.json").then(function (res) {
        return res.json();
    }) // SyntaxError: Unexpected token / in JSON at position 0 at fetch.then.res (worker.js:18)
    .then(function (json) {
        // console.log(`fetched json = \n`, JSON.stringify(json, null, 4));
        var userInfos = json.user;
        console.log("%c userInfos = \n", css_fd, JSON.stringify(userInfos, null, 4));
        datas.push(userInfos);
        postMessage(userInfos);
        // 将获取的数据发送到主线程
    }).catch(function (err) {
        return console.log("fetch error = \n", err);
    });
    // postMessage(datas);// 将获取的数据发送到主线程
    return datas;
};
/* 

??? 动态加载 js modules


*/