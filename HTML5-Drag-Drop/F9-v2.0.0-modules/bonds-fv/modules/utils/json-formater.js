// IIFE
const json = ((debug = false) => {
    let body, str = text = "", beforeend = "beforeend", objs = {};
    body = document.querySelector(`body`);
    str = body.innerText;
    let o = str.lastIndexOf("}"),
        a = str.lastIndexOf("]");
    if (o > a) {
        str = str.substr(0, str.lastIndexOf("}")+1);
    }else{
        str = str.substr(0, str.lastIndexOf("]")+1);
    }
    html = body.innerHTML;
    objs = JSON.parse(str);
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    // copy(text);
    let obj = objs;
    let keys = [];
    const getKeys = (obj) => {
        let keys = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
                let keys_str = JSON.stringify(getKeys(obj[key][0]));
                keys.push(`${key}: ${keys_str}`);
            }else{
                keys.push(key);
            }
        }
        return keys;
    }
    keys = getKeys(obj);
    const result = {
        "keys": keys,
        "objs": objs
    };
    copy(result)
    return result;
})();
