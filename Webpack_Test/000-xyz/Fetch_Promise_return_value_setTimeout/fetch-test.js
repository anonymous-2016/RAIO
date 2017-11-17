// Fetch_Promise_return_value_setTimeout




// https://cdn.xgqfrms.xyz/json/db.json
// 33k ??? 3.3k


const FetchPromiseTest = (url = `https://cdn.xgqfrms.xyz/json/db.json`, debug = true) => {
    const datas = {};
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            if (debug) {
                console.log(`json = \n`, json);
                // {swagger: "2.0", info: {…}, tags: Array(3), paths: {…}, securityDefinitions: {…}, …}
            }
            Object.assign(datas, json);
            if (debug) {
                console.log(`Object.assign(datas, json) = \n`, datas);
                // {swagger: "2.0", info: {…}, tags: Array(3), paths: {…}, securityDefinitions: {…}, …}
            }
        }
    ).catch(error => console.log(`error = \n`, error));
    if (debug) {
        console.log(`before return datas = \n`, JSON.stringify(datas, null, 4));
        // {}
    }
    return datas;
};


window.document.addEventListener(`DOMContentLoaded`, () => {
    let uid = document.querySelector(`[data-uid="fetch-uid"]`),
        pre = document.createElement(`pre`);
    pre.setAttribute(`class`, `pre-style`);
    (() => {
        let json = {};
        json = FetchPromiseTest();
        console.log(`FetchPromiseTest json = \n`, JSON.stringify(json, null, 4));
        // {}
        let json_length = Object.keys(json).length;// Array / Object
        if (json !== {} && json_length > 0) {
            // no need setTimeout()!
            console.log(`setTimeout & json = \n`, JSON.stringify(json, null, 4));
            pre.innerText = JSON.stringify(json, null, 4);
            uid.insertAdjacentElement(`beforeend`, pre);
        } else {
            setTimeout(() => {
                console.log(`setTimeout & json = \n`, JSON.stringify(json, null, 4));
                // {} OR OK ??? 0ms / 100ms / 1000ms
                // 67 ms & OK (cache)
                // 207 ms & BAD (3.3 KB)
                pre.innerText = JSON.stringify(json, null, 4);
                uid.insertAdjacentElement(`beforeend`, pre);
            }, 500);
            // 1000ms === 99.9999% ??? 可靠性!
            // 500ms === 99% ??? 可靠性!
            // 0ms ??? BAD 
        }
    })();
});




/* 

datas = FetchNewsSummary(`http://10.1.5.202/queryservice/news/content/`, `564082789530`, false);
console.log(`FetchNewsSummary datas = \n`, JSON.stringify(datas, null, 4));
// let datas = FetchNewsSummary(`http://10.1.5.202/queryservice/news/content/`, `564082789530`, true);
setTimeout(() => {
    console.log(`setTimeout && FetchNewsSummary datas = \n`, JSON.stringify(datas, null, 4));
    ShowNewsSummaryModal(datas);
}, 100);

*/
























