const test = (url = `https://cdn.xgqfrms.xyz/json/dd.json`, debug = false) => {
    if (debug) {
        console.log(`News Summary url = \n`, url);
    }
    let datas = {};
    // const datas = []; // ??? Object & Array ???
    console.log(`11111111`);
    fetch(url)
    .then(res => res.json())
    .then(
        (json) => {
            console.log(`2222222222`);
            if (debug) {
                console.log(`News Summary json = \n`, JSON.stringify(json, null, 4));
            }
            // shape shit json name!
            let keys = Object.keys(json);
            if (debug) {
                console.log(`News Summary keys = \n`, JSON.stringify(keys, null, 4));
            }
            Object.assign(datas, json);
            // Object.assign(datas, json);// ??? Object & Array ???
            if (debug) {
                console.log(`News Summary shaped datas = \n`, JSON.stringify(datas, null, 4));
            }
            // return datas;
        }
    )
    .catch(err => console.log(`News Summary Error Infos: \n`, err));
    console.log(`333333333`);
    return datas;
};


window.document.addEventListener(`DOMContentLoaded`,() => {
    alert(`testing ...`);
    var result = test(`https://cdn.xgqfrms.xyz/json/dd.json`, true);
    console.log(`result = `, result);
});