
import "babel-polyfill";

// import "whatwg-fetch";


const getParam = (key, debug = false) => {
    let search = decodeURIComponent(window.location.search),
        start = search.indexOf("?") + 1,
        value = ``;
    if (start < 1) {
        return;
    }else{
        let queryString = search.substr(start),
            paraNames = queryString.split("&");// Array
        for (let i = 0; i < paraNames.length; i++) {
            let begin = paraNames[i].indexOf("=");
            if (begin > 0) {
                let pname = paraNames[i].substring(0, begin),
                    pvalue = paraNames[i].substring(begin + 1);
                if (key === pname) {
                    value = pvalue;
                    break;
                }
            }
        }
        // console.log(`value = `, value);
        return value;
    }
};


window.STOCK_Skin = window.STOCK_Skin || ``;

// set params before DOM ready!
window.STOCK_Skin = getParam(`skin`) || `white`;

document.addEventListener(`DOMContentLoaded`, () => {
    // console.log("(DOMContentLoaded) & DOM fully loaded and parsed!");
});

// console.log(`window.STOCK_Skin = `, window.STOCK_Skin, typeof(window.STOCK_Skin));

// const cssLoader = () => {
(() => {
    // console.log("loading css...");
    const css_arr = ["sidebar.css", "common/module.css", "common/modal.css", "common/more.css"];
    // const css_arr = ["common/more.css", "common/modal.css", "common/module.css", "sidebar.css"];
    // const css_arr = ["no-body.css", "sidebar.css", "common/module.css", "common/modal.css", "common/more.css"];
    const css_skins = ["black-skin", "white-skin"];
    // const css_links = document.querySelectorAll(`[data-css="data-css-uid"]`);
    let css_dom = document.querySelector(`head`);
    // head
    // document.documentElement.firstElementChild;
    // document.documentElement.firstElementChild.children;
    // document.documentElement.firstElementChild.firstElementChild;
    if (window.STOCK_Skin === "black") {
        //white-skin => black-skin
        for (let i = 0; i < css_arr.length; i++) {
        // for (let i = (css_arr.length - 1); i > -1; i--) {
            // console.log(`i =`, i);
            let href = `./css/${css_skins[0]}/${css_arr[i]}`;
            // css_dom.insertAdjacentHTML(`afterbegin`, `<link rel="stylesheet" data-css="data-css-uid" href="${href}">`);
            document.write(`<link rel="stylesheet" data-css="data-css-uid" href="${href}">`)
            // <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/sidebar.css">
            // <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/module.css">
            // <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/modal.css">
            // <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/more.css">
            // console.log(`document.documentElement.firstElementChild.firstElementChild =`, document.documentElement.firstElementChild.firstElementChild, i);
        }
    }else{
        if (window.STOCK_Skin === "white"){
            // black-skin => white-skin
            for (let i = 0; i < css_arr.length; i++) {
            // console.log(`i =`, i);
            // for (let i = (css_arr.length - 1); i > -1; i--) {
                let href = `./css/${css_skins[1]}/${css_arr[i]}`;
                // css_dom.insertAdjacentHTML(`afterbegin`, `<link rel="stylesheet" data-css="data-css-uid" href="${href}">`);
                document.write(`<link rel="stylesheet" data-css="data-css-uid" href="${href}">`)
            }
        }
    }
})();

// cssLoader();

// ucode
window.STOCK_UCODE = window.STOCK_UCODE || ``;


window.STOCK_IP = window.STOCK_IP || ``;
window.STOCK_Paths = window.STOCK_Paths || ``;
window.STOCK_SecCode = window.STOCK_SecCode || ``;

window.STOCK_SecCode = getParam(`gilcode`);
// window.STOCK_IP = window.parent.location.origin.includes("http://localhost") ? `http://10.1.5.202` : window.parent.location.origin;
const url_origin = window.parent.location.origin;
window.STOCK_IP = (url_origin.includes("http://localhost") || url_origin.includes("file://")) ? `http://10.1.5.202` : url_origin;
// window.parent.location.origin; // "file://"
// window.STOCK_IP = window.parent.location.origin.includes("http") ? window.parent.location.origin : `http://10.1.5.202`;
// http://localhost:3002/index.html?gilcode=600570.SH&skin=black
window.STOCK_Paths = `/webservice/fastview/stock`;

window.STOCK_UCODE = getParam(`ucode`);

// setTimeout(() => {
//     alert(`window.STOCK_SecCode = ${window.STOCK_SecCode}`);
//     alert(`window.STOCK_UCODE = ${window.STOCK_UCODE}`);
// }, 1000);

// setTimeout(() => {
//     // hide loading div & css
//     // show body
//     const body = document.querySelector(`body[data-body="no-body"]`);
//     body.dataset.body = "show-body";
// }, 0);






/*

    <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/sidebar.css">
    <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/module.css">
    <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/modal.css">
    <link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/more.css">

document.write(`<link rel="stylesheet" data-css="data-css-uid" href="./css/white-skin/common/no-data.css">`);


??? why `document.write` more fast ???
// block DOM


http://10.1.5.202/stock/f9/fastview/css/white-skin/common/no-data.css

*/
/*



    <script>
        function getParam(name) {
            var str = decodeURIComponent(window.location.search);
            var start = str.indexOf("?") + 1;
            if (start == 0) {
                return "";
            }
            var value = "";
            var queryString = str.substring(start);
            var paraNames = queryString.split("&");
            for (var i = 0; i < paraNames.length; i++) {
                var eindex = paraNames[i].indexOf("=");
                if (eindex > 0) {
                    pname = paraNames[i].substring(0, eindex);
                    pvalue = paraNames[i].substring(eindex + 1);
                    if (name == pname) {
                        return pvalue;
                    }
                }
            }
            return value;
        }

        var STOCK_SKIN = getParam("skin");
        var skin_url = 'upCss/';
        STOCK_SKIN == 'black' ? skin_url = 'upCss/' : skin_url = 'css/';


        function addCssByLink(url, id) {
            document.write('<link rel="stylesheet" type="text/css" id=' + id + '');
            document.write(' href="' + url + '">');
        }
        addCssByLink(skin_url + 'common.css', 'link_common');
        addCssByLink(skin_url + 'index.css', 'link_index');
    </script>

*/

// test
var left = ["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"];
localStorage.setItem("left", left);

// let value = encodeURIComponent(JSON.stringify(left));


// str = JSON.stringify(left);
// "["stockfast01","stockfast04","stockfast07","bulletion","research","stockfast08","stockfast09","stockfast11"]"

// str = encodeURIComponent(str);
// "%5B%22stockfast01%22%2C%22stockfast04%22%2C%22stockfast07%22%2C%22bulletion%22%2C%22research%22%2C%22stockfast08%22%2C%22stockfast09%22%2C%22stockfast11%22%5D"


// str = decodeURIComponent(str);
// arr = JSON.parse(str);


// document.cookie = `left=${left}`;
// document.cookie = `left=xxxxxxxxxxxxxxxxxxxxxxxxxxxx; expires=Thu, 01 Jan 2050 00:00:00 GMT;`;
// expires= ???
// document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 UTC;";
// document.cookie = "expires=Thu, 01 Jan 2020 00:00:00 GMT;";

document.cookie = `left=${left}; expires=Thu, 01 Jan 2050 00:00:00 GMT; path=/`;


// document.cookie = "expires=Thu, 01 Jan 2050 00:00:00 GMT; path=/";
// document.cookie = "expires=Thu, 01 Jan 2050 00:00:00 GMT; path=/stock/f9/fastview/";

// domain=10.1.5.202
// path=/
// document.cookie = "path=/;";


// must set `expires` with the `key`

// if only has `key`, the `expires`  will be default to `1969-12-31T23:59:59.000Z`;


