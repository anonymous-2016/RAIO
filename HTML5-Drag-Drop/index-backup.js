let idExist = false;

function dragStart(ev) {
    console.log(`ev = \n`, ev);
    // DragEvent
    console.log(`ev.target.id = \n`, ev.target.id);
    // boxA
    let unique_name = `data-${ev.target.id}`;
    let unique_value = `${ev.target.id}001`;
    console.log(`ev.target.dataset.unique_name = \n`, unique_name);
    // data-boxA
    console.log(`ev.target.dataset.unique_value  = \n`, unique_value);
    // boxA001
    ev.target.setAttribute(unique_name, unique_value);
    // dataset & lowercase-ascii-letters
    // boxa : "boxA001"
    let low_unique_name = unique_name.substr(5).toLowerCase();
    // substr(5,);
    // toLowerCase();
    // toLocaleLowerCase();
    console.log(`ev.target.dataset.low_unique_name = \n`, ev.target.dataset.low_unique_name);
    let camel_Case_name = `data-index-number`;
    ev.target.setAttribute(camel_Case_name, 1234567);
    // data-index-number="1234567"
    // indexNumber : "1234567"
    // ??? camelCase ???
    // let camelCase_name = camel_Case_name.substr(5).toLowerCase();
    /*
        // camelCase
        let ccn = `data-index-number-name`;
        // "data-index-number-name"
        ccn.substr(5,);
        // "index-number-name"
        // replace ??? -x === X ??? $i
        ccn.substr(5,).replace();
        // toUpperCase
        // ccn.substr(5,).replace(/(-[\w])/gi, `$1.toUpperCase()`); ???
        // String to Array ??
        let new_ccn = ccn.substr(5,).map(
            (str, index) => {
                console.log(`str = \n`, str, index);
            }
        );
        typeof ccn;
        // "string"
        ccn instanceof Array;
        // false
        if(){
            // 
        }
        ccn.includes(`-`);
        // true
        ccn.match(/(-)/ig);
        // (2) ["-", "-"]
        let al = ccn.match(/(-)/ig).length;
        let result = ``;
        for(let i =0; i < al; i++){
            result += 
            // str = ccn.substr(ccn.indexOf(`-`),2).replace(/(-)/, ``).toUpperCase();
            // "N"
        }
        cnn.indexOf(`-`);
        // -1
        wihle(){
            // do
        }
    */
    // console.log(`ev.target.dataset.camelCase_name = \n`, ev.target.dataset.camelCase_name);
    // add unique key ???
    // fetch data ???
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 100, 100);
    return true;
}

function dragDrop(ev) {
    const id = ev.target.id || undefined;
    console.log(`\n\n\n ev.target.id = \n`, ev.target.id);
    // idBox
    let data = ev.dataTransfer.getData("Text");
    console.log(`data / id = \n`, data);
    // id === boxA
    /* if id exist, do not drop it again! */
    // boxa : "boxA001"
    // dataset & lowercase-ascii-letters
    let unique_name = `data-${ev.target.id}`;
    let low_unique_name = unique_name.substr(5).toLowerCase();
    // the attribute name after data- (note that dashes are converted to camelCase).
    // ??? camelCase ??? dashTocamelCase.js
    let idBox = document.querySelector(`#idBox`);
    // let idTest = idBox.children.dataset.low_unique_name;
    // let idTest = idBox.querySelector(`#${id}`);
    // let key = low_unique_name;
    // idbox
    // console.log(`idTest key = \n`, key);
    // idTest = idBox.querySelector(`div`).dataset[`${key}`];
    // "boxA"
    let key = data.toLowerCase();
    // 
    let hasDiv = idBox.querySelector(`div`);
    let idTest = ``;
    // null
    if (hasDiv !== null) {
        idTest = idBox.querySelector(`div`).dataset[`${key}`];
        // undefined / "boxA"
        console.log(`idTest key = \n`, key);
        // 
    }
    // idTest = idBox.querySelector(`div`).dataset;
    // DOMStringMap {boxa: "boxA"}
    // Uncaught TypeError: Cannot read property 'dataset' of null
    console.log(`idTest = \n`, idTest);
    /*
        idTest = idBox.querySelector(`div`).dataset.boxa;
        // "boxA"
        idTest = idBox.querySelector(`div`).dataset.boxX;
        // undefined
    */
    // null
    // undefined
    // console.log(`ev.target.dataset.camelCase_name = \n`, ev.target.dataset.camelCase_name);
    // console.log(`idTest = \n`, idTest);
    // get unique key!
    if(idTest !== null && idTest !== undefined && idTest !== ``){
        idExist = true;
    }else{
        idExist = false;
    }
    if (idExist) {
        // do not drop
        alert(`can not duplicate drop it again!`);
    }else{
        // drop once!
        // var data = ev.dataTransfer.getData("Text");
        // boxA
        // fetch data ??? id
        // https://cdn.xgqfrms.xyz/json/xgqfrms.json
        const url = `https://cdn.xgqfrms.xyz/json/xgqfrms.json?q=${data}`;
        // firebase
        /*
            fetch(url)
            .then(res => res.json())
            .then(
                (json) => {
                    console.log(`json datas = \n`, JSON.stringify(json, null, 4));
                    ev.target.insertAdjacentHTML(`beforeend`, '<div data-id="two">`😃 🙌 🎉 Hooray!`</div>');
                    // ev.target.insertAdjacentHTML(`beforeend`,`<pre>${JSON.stringify(json, null, 4)}</pre>`);
                }
            )
            .catch(err => console.log(`err`, err));
        */
        console.log(`data = \n`, data);
        // boxA
        let nid = data.toLowerCase();
        // ev.target.appendChild(document.getElementById(data));
        // let app = document.getElementById(data);
        ev.target.insertAdjacentHTML(`beforeend`, `<div data-${nid}="${data}">😃 🙌 🎉 Hooray!</div>`);
        // data-boxa="boxA"
        // boxa : "boxA001" & indexNumber : "1234567"
    }
    ev.stopPropagation();
    return false;
}

function dragEnter(ev) {
    event.preventDefault();
    return true;
}

function dragOver(ev) {
    event.preventDefault();
    // return true;
}



/**
 * xgqfrms 2017.10.09
 * dash To camelCase
 * @param {str} String 
 */

const dashTocamelCase = (str = `data-dash-to-camelCase-function`, debug = false) => {
    // CSS & RGB-A
    const red = `
        color: red;
        font-size: 16px;
    `;
    const green = `
        color: green;
        font-size: 16px;
    `;
    const blue = `
        color: blue;
        font-size: 16px;
    `;
    // const debug = false; // true
    // force_str
    let fs = str.toString();
    let al = fs.match(/(-)/ig).length;
    // fs = fs.substr(5);
    // remove `data-` & in case no `data-`
    fs = fs.replace(/(data-)/i, ``);
    let result = ``;
    for(let i =0; i < al; i++){
        if (debug) {
            console.log(`fs.indexOf("-") = \t`, fs.indexOf(`-`));
        }
        if (fs.indexOf(`-`) !== -1) {
            result += fs.substr(0, fs.indexOf(`-`));
            if (debug) {
                console.log(`result 1 = \t`, result);
            }
            result += fs.substr(fs.indexOf(`-`), 2).replace(/(-)/, ``).toUpperCase();
            fs = fs.substr(fs.indexOf(`-`) + 2);
            if (debug) {
                console.log(`result 2 = \t`, result);
                console.log(`%c fs 1 = \t`, red, fs);
            }
        }else{
            result += fs;
            if (debug) {
                console.log(`%c fs 2 = \t`, green, fs);
                console.log(`result 3 = \t`, result);
            }
        }
    }
    if (debug) {
        console.log(`%c fs = \t`, blue, fs);
        console.log(`result = \t`, result);
    }
    return result;
};

dashTocamelCase();
// "dashToCamelCaseFunction"



