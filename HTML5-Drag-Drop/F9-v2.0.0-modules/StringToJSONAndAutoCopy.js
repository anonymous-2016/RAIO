/**
 * String To JSON & AutoCopy
 * xgqfrms
 * created 2017.10.12
 * @param {Boolean} debug 
 */

const StringToJSONAndAutoCopy = (debug = false) => {
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
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
};

/* test */
StringToJSONAndAutoCopy();
StringToJSONAndAutoCopy(true);


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
    if (debug) {
        console.log(`body`, body);
        console.log(`body.innerHTML`, html);
        console.log(`body.innerText`, str);
        console.log(`objs`, objs);
    }
    text = JSON.stringify(objs, null, 4);
    body.innerHTML = "<div></div>";
    body.firstChild.insertAdjacentHTML(beforeend, `<pre data-uid="string-to-json">${text}</pre>`);
    copy(text);
    return text;
})();

typeof json;
// "string"

