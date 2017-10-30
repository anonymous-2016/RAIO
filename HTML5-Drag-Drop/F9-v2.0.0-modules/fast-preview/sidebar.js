// h5-dnd-nav-box

let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`);
let divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);

const debug = false;

// tabs
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener(`click`, (e) => {
        if (debug) {
            let e_classes = e.target.classList;
            let e_datas = e.target.dataset;
            console.log(`e = `, e);
            console.log(`typeof e = `, typeof e);
            console.log(`e classes= `, e_classes);
            console.log(`e datas= `, e_datas);
            console.log(`divs[i] = `, divs[i]);
            console.log(`divs[i].classList = `, divs[i].classList);
            console.log(`i = `, i);
            console.log(`show ${divs[i].classList.contains(`h5-dnd-nav-box-hidden`)}`);
        }
        // lis.h5-dnd-nav-li-active
        if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
            // lis[i].classList.add("h5-dnd-nav-li-active");
            // lis[i].classList.remove("h5-dnd-nav-li-hidden");
            // lis[i].classList.add("no-bottom-margin");
        }else{
            lis[i].classList.add("h5-dnd-nav-li-active");
            lis[i].classList.remove("h5-dnd-nav-li-hidden");
            lis[i].classList.remove("add-bottom-margin");
            lis[i].classList.add("no-bottom-margin");
            let arr = [0,1,2];
            // arr remove i ??? arr.shift();
            arr.map(
                (item, index) =>{
                    if (debug) {
                        console.log(`item = ${item}`);
                        console.log(`index = ${index}`);
                    }
                    if(item !== i){
                        if (lis[item].classList.contains(`h5-dnd-nav-li-active`)) {
                            lis[item].classList.remove("no-bottom-margin");
                            lis[item].classList.add("add-bottom-margin");
                            lis[item].classList.remove("h5-dnd-nav-li-active");
                            lis[item].classList.add("h5-dnd-nav-li-hidden");
                        }
                    }
                }
            );
        };
        if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
            // divs[i].classList.add("h5-dnd-nav-box-hidden");
            // divs[i].classList.remove("h5-dnd-nav-box-active");
        }else{
            divs[i].classList.add("h5-dnd-nav-box-active");
            divs[i].classList.remove("h5-dnd-nav-box-hidden");
            let arr = [0,1,2];
            // arr remove i ??? arr.shift();
            arr.map(
                (item, index) =>{
                    if (debug) {
                        console.log(`item = ${item}`);
                        console.log(`index = ${index}`);
                    }
                    if(item !== i){
                        if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                            divs[item].classList.remove("h5-dnd-nav-box-active");
                            divs[item].classList.add("h5-dnd-nav-box-hidden");
                        }
                    }
                }
            );
        };
    });
}

// btns
let btn = document.querySelector(`[data-nav-btn="nav-btn"]`),
    small_btn = document.querySelector(`[data-nav-small-btn="nav-small-btn"]`),
    container = document.querySelector(`[data-nav-container="nav-container"]`),
    small_container = document.querySelector(`[data-nav-small-container="nav-small-container"]`),
    body_container = document.querySelector(`[data-body-container="data-body-container"]`);

btn.onclick = () => {
    // console.log(`btn = ${container.classList.contains("h5-dnd-nav-container-normal")}`);
    if (container.classList.contains("h5-dnd-nav-container-normal")) {
        container.classList.add("h5-dnd-nav-container-small");
        container.classList.remove("h5-dnd-nav-container-normal");
    }else{
        container.classList.remove("h5-dnd-nav-container-small");
        container.classList.add("h5-dnd-nav-container-normal");
        // toggle() ???
    }
    if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
        small_container.classList.add("h5-dnd-nav-small-btn-show");
        small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
    }else{
        small_container.classList.add("h5-dnd-nav-small-btn-hidden");
        small_container.classList.remove("h5-dnd-nav-small-btn-show");
    }
    if (body_container.classList.contains("h5-dnd-body-container-small")) {
        body_container.classList.remove("h5-dnd-body-container-small");
        body_container.classList.add("h5-dnd-body-container-big");
    }
};

small_btn.onclick = () => {
    if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
        small_container.classList.add("h5-dnd-nav-small-btn-show");
        small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
    }else{
        small_container.classList.add("h5-dnd-nav-small-btn-hidden");
        small_container.classList.remove("h5-dnd-nav-small-btn-show");
    }
    if (container.classList.contains("h5-dnd-nav-container-normal")) {
        container.classList.add("h5-dnd-nav-container-small");
        container.classList.remove("h5-dnd-nav-container-normal");
    }else{
        container.classList.remove("h5-dnd-nav-container-small");
        container.classList.add("h5-dnd-nav-container-normal");
        // toggle() ???
    }
    if (body_container.classList.contains("h5-dnd-body-container-big")) {
        body_container.classList.remove("h5-dnd-body-container-big");
        body_container.classList.add("h5-dnd-body-container-small");
    }
};


// init ???

window.onload = () => {
    let btn_universal = document.querySelector(`[data-uid="universal"]`),
        btn_customize = document.querySelector(`[data-uid="customize"]`),
        btn_module_setting = document.querySelector(`[data-uid="module-setting"]`);
    let a_modules = document.querySelector(`[data-uid="modules-a-link"]`);
    btn_universal.onclick = (e) => {
        // data-title="通用"
        alert(`e.target.dataset.title = ${e.target.dataset.title} \n this click will call loadAllModules()!`);
        // ??? reset modules
        a_modules.click();
        // load all modules & default layout ???
        loadAllModules();
        // moduleTest.loadAllModules();
    }
    btn_customize.onclick = (e) => {
        // data-title="自定义"
        // alert(`e.target.dataset.title = ${e.target.dataset.title}`);
        // data-uid="modules-a-link"
        a_modules.click();
        // H5 DnD modules
    }
    /* event pop ???  */
    btn_module_setting.addEventListener(`click`, (e) => {
        // data-title="模块设置"
        const title = `Sorry for that, it still in developing!`;
        // alert(`e.target.dataset.title = ${e.target.dataset.title} \n\n\n\n\n\n\n ${title} \n\n\n\n\n\n\n Coming soon ...`);
        alert(`😃😃😃Coming soon ... 😧😒😟`);
    });
    btn_module_setting.addEventListener(`click`, (e) => {
        let debug = true;
        if (debug) {
            console.log(`e.target.dataset = ${e.target.dataset}`);
            console.log(`e.target.dataset.title = ${e.target.dataset.title}`);
        }
    });
};


// const url = `http://10.1.5.202/webservice/fastview/stock/stockfast02/600570.SH`;
// recent-important-events

let uids_arr = document.querySelectorAll(`[data-icon-*="stockfast01"]`);
// uids_arr = document.querySelectorAll(`[data-icon-uid*="stockfast"]`);

for (let i = 0; i < uids_arr.length; i++) {
    let icon = uids_arr[i];
    if (!debug) {
        console.log(`icon = \n ${icon}`);
    }
}


/**
 * loadAllModules 
 * @description initial all modules
 * @argument dom_container_uid 
 */

const loadAllModules = (debug = false) => {
    // ??? uids
    // data-icon-uid="module-data-stockfast01"
    let uids = document.querySelectorAll(`[data-icon-uid*="module-data"]`);
    for (let i = 0; i <uids.length; i++) {
        let uid = uids[i].dataset.iconUid.substr(12);
        console.log(`icon uid = ${uid}`);
        // insert DOM
        // add addEventListener
    }
    alert(`loading  All Modules!`);
    return {
        dragstart: function(e) {
            // console.log(`e = \n`, e);
            // console.log(`e.target = \n`, e.target);
            // console.log(`e.target.dataset = \n`, e.target.dataset);
            console.log(`e.target.dataset.iconUid = %c ${e.target.dataset.iconUid}\n`, console_css);
            // iconUid 
            let uid = e.target.dataset.iconUid.substr(12);
            e.effectAllowed = `move`;
            e.dataTransfer.setData("text/plain", uid);
            // e.dataTransfer.setData("xyz", uid);
            // event.originalEvent.dataTransfer.setData('text/plain', uid);
            console.log(`%c dragstart & e.dataTransfer = \n`, console_css3, e.dataTransfer);
        },
        drop: function(e) {
            // isExistCheck();
            // e.dropEffect = `copy`;
            console.log(`drop & e.dataTransfer = \n`, e.dataTransfer);
            let uid = e.dataTransfer.getData("text/plain");
            // let data = e.dataTransfer.getData("xyz");
            console.log(`drop & uid = %c ${uid}\n`, console_css1);
            // console.log(`drop & data = %c ${data}\n`, console_css3);
            // fetch data / module
            // load js ??? show hide
            // 
            // insertAdjacentHTML ??? display none 
            // insertAdjacentHTML() parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. 
            let div = document.createElement(`div`),
                sub_div = document.createElement(`div`);
            sub_div.dataset.deleteModuleUid = `delete-module-${uid}`;
            sub_div.style.background = `#777`;
            sub_div.insertAdjacentHTML(`beforeend`, `<span>☠️⚠️🚨⚡😷${data}🎃 👻 🌙</span>`);
            // data-div-module-uid="delete-module-stockfast01"
            sub_div.firstChild.dataset.deleteModuleUid = `delete-module-${uid}`;
            sub_div.firstChild.addEventListener(`click`, (e) => {
                console.log(`this`, this);
                // dom
                console.log(`e`, e);
                // MouseEvent
                console.log(`delete-module`, e.target.dataset.deleteModuleUid);
                // undefined
                let uid = e.target.dataset.deleteModuleUid;
                // span ??? 
                // let uid = this.target.dataset.deleteModuleUid;
                console.log(`uid`, uid);
                // delete-module-stockfast01
                moduleTest.deleteModule(uid);
                // moduleTest.deleteModule(this.target.dataset.deleteModuleUid);/
                // Uncaught TypeError: Cannot read property 'dataset' of undefined
            });
            // icons ??? sub div ???
            div.dataset.divModuleUid = `div-module-${uid}`;
            div.appendChild(sub_div);
            div.insertAdjacentHTML(`beforeend`, `<h1>${data}</h1>`);
            let module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`);
            // null
            // module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-stockfast01"]`);
            if (module_exist_checker === null) {
                module_container.insertAdjacentElement(`beforeend`, div);
                // insert script.js ??? excute time!
                // insert DOM
                // insert CSS
            }else{
                alert(`duplication & 重复!`);
            }
        },
        init: () => {
            // 
        }
    };
};



/**
 * loadCutomizeModules
 * @description load each module once & check is exist before drop it
 * @author xgqfrms
 * @argument module_uid's
 * 
 */


let moduleTest = (function() {
    const V = `this is a constant value!`;
    const console_css = `
        color: #f0f;
        font-size: 23px;
    `;
    const console_css1 = `
        color: #f00;
        font-size: 23px;
    `;
    const console_css2 = `
        color: #ff0;
        font-size: 23px;
    `;
    const console_css3 = `
        color: #0ff;
        font-size: 23px;
    `;
    let module_datas = document.querySelectorAll(`[data-icon-uid*="module-data"]`);
    let module_container = document.querySelector(`[data-body-container="data-body-container"]`);
    // return obj
    return {
        isExistCheck: function(uid=``){
            // isExistCheck
        },
        loadAllModules: () => {
            // loadAllModules
        },
        deleteModule: (dom_uid=``, script_uid=``) => {
            // script.js ??? excute sequence
            // remove DOM
            // remove css
            console.log(`dom_uid = `, dom_uid);
            // dom_uid = delete-module-stockfast01
            let div_uid = dom_uid.replace(`delete`, `div`);
            // let div_uid = dom_uid.substr(14);
            // let this.target.dataset.deleteModuleUid;
            let tdu = document.querySelector(`[data-div-module-uid="${div_uid}"]`);
            // tdu = document.querySelector(`[data-div-module-uid="div-module-stockfast01"]`);
            // module_container.removeChild(tdu);
            // alert(`Are sure delete this module?`);
            // conform !== confirm
            let result = window.confirm(`Are sure delete this module?`);
            // true
            if(result){
                // window.open("exit.html", "Thanks for Visiting!");
                // alert(`just remove this module!`);
                // remove DOM node ???
                module_container.removeChild(tdu);
            }else{
                alert(`not too bad!`);
            }
        },
        // api: `https://developer.mozilla.org/API`,
        dragstart: function(e) {
            // console.log(`e = \n`, e);
            // console.log(`e.target = \n`, e.target);
            // console.log(`e.target.dataset = \n`, e.target.dataset);
            console.log(`e.target.dataset.iconUid = %c ${e.target.dataset.iconUid}\n`, console_css);
            // iconUid 
            let uid = e.target.dataset.iconUid.substr(12);
            e.effectAllowed = `move`;
            e.dataTransfer.setData("text/plain", uid);
            // e.dataTransfer.setData("xyz", uid);
            // event.originalEvent.dataTransfer.setData('text/plain', uid);
            console.log(`%c dragstart & e.dataTransfer = \n`, console_css3, e.dataTransfer);
        },
        dragend: function(e) {
            e.preventDefault();
        },
        dragenter: (e) => {
            // console.log(`%c dragEnter = `, console_css1, e.target.id);
            e.preventDefault();
            return true;
        },
        dragover: (e) => {
            // console.log(`%c dragOver = `, console_css1, e.target.id);
            e.preventDefault();
            return true;
        },
        drop: function(e) {
            // isExistCheck();
            // e.dropEffect = `copy`;
            console.log(`drop & e.dataTransfer = \n`, e.dataTransfer);
            let uid = e.dataTransfer.getData("text/plain");
            // let data = e.dataTransfer.getData("xyz");
            console.log(`drop & uid = %c ${uid}\n`, console_css1);
            // console.log(`drop & data = %c ${data}\n`, console_css3);
            // fetch data / module
            // load js ??? show hide
            // 
            // insertAdjacentHTML ??? display none 
            // insertAdjacentHTML() parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. 
            let div = document.createElement(`div`),
                sub_div = document.createElement(`div`);
            sub_div.dataset.deleteModuleUid = `delete-module-${uid}`;
            sub_div.style.background = `#777`;
            sub_div.insertAdjacentHTML(`beforeend`, `<span>☠️⚠️🚨⚡😷${uid}🎃 👻 🌙</span>`);
            // data-div-module-uid="delete-module-stockfast01"
            sub_div.firstChild.dataset.deleteModuleUid = `delete-module-${uid}`;
            sub_div.firstChild.addEventListener(`click`, (e) => {
                console.log(`this`, this);
                // dom
                console.log(`e`, e);
                // MouseEvent
                console.log(`delete-module`, e.target.dataset.deleteModuleUid);
                // undefined
                let uid = e.target.dataset.deleteModuleUid;
                // span ??? 
                // let uid = this.target.dataset.deleteModuleUid;
                console.log(`uid`, uid);
                // delete-module-stockfast01
                moduleTest.deleteModule(uid);
                // moduleTest.deleteModule(this.target.dataset.deleteModuleUid);/
                // Uncaught TypeError: Cannot read property 'dataset' of undefined
            });
            // icons ??? sub div ???
            div.dataset.divModuleUid = `div-module-${uid}`;
            div.appendChild(sub_div);
            div.insertAdjacentHTML(`beforeend`, `<h1>${uid}</h1>`);
            let module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-${uid}"]`);
            // null
            // module_exist_checker = document.querySelector(`[data-div-module-uid="div-module-stockfast01"]`);
            if (module_exist_checker === null) {
                module_container.insertAdjacentElement(`beforeend`, div);
                // insert script.js ??? excute time!
                // insert DOM
                // insert CSS
            }else{
                alert(`duplication & 重复!`);
            }
        },
        init: function() {
            // console.log(`this obj = ,`, this);
            // {dragstart: ƒ, dragend: ƒ, drop: ƒ, init: ƒ}
            module_datas.forEach(
                (obj, index) => {
                    // console.log(`obj, index`, obj, index);
                    obj.addEventListener(`dragstart`, moduleTest.dragstart);
                }
            );
            // console.log(`module_container`, module_container);
            module_container.addEventListener(`dragenter`, moduleTest.dragenter);
            module_container.addEventListener(`dragover`, moduleTest.dragover);
            module_container.addEventListener(`drop`, moduleTest.drop);
        }
    };
})();

moduleTest.init();


/// todo & enhancement

/**
 * localStorage
 * application cache
 * webSQL (sqlite)
 * MongoDB
 */

const saveToLocalStorage = () => {
    // write
};

const readFromLocalStorage = () => {
    // read
};


/* 

HTML 5.1 2nd Edition
W3C Recommendation 3 October 2017

https://www.w3.org/TR/html51/

https://www.w3.org/TR/2017/REC-html51-20171003/

https://www.w3.org/TR/html/

https://w3c.github.io/html/

https://www.w3.org/TR/html5/


W3C Recommendation 28 October 2014


// data-*

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*


<img class="spaceship cruiserX3" src="shipX3.png" onclick="spaceships[this.dataset.shipId].blasted()"
    data-ship-id="324"
    data-weapons="laserI laserII"
    data-shields="72%"
    data-x="414354"
    data-y="85160"
    data-z="31940"
</img>



img = document.querySelector(`.spaceship`);


imgs = document.querySelector(`[data-*="3"]`);



// text-align: center;

css3 = document.querySelectorAll(`[text-align="center"]`);

css3 = document.querySelectorAll(`[data-css3-*="css3-attr-selector"]`);

css3 = document.querySelectorAll(`[data-css3-attr-selector="css3-attr-selector"]`);



css3 = document.querySelectorAll(`p`);

// h5-dnd-template-p
// h5-dnd-module-p
// h5-dnd-icon-p
// css3-attr-selector-test

h5 = document.querySelectorAll(`p[class*="h5"]`);

h5 = document.querySelectorAll(`p[class*="h5-dnd"]`);

h5 = document.querySelectorAll(`p[class*="h5-dnd-icon-p"]`);

h5 = document.querySelectorAll(`p[class*="icon"]`);



https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors




*/




/* 


arr = [11,22,33];
// (3) [11, 22, 33]
arr.pop(22);
// 33
arr
// (2) [11, 22]
// end

arr = [11,22,33];
// (3) [11, 22, 33]
arr.shift(22);
// 11
arr
// (2) [22, 33]
// before



delete arr[1];
// true
arr
// (3) [11, empty × 1, 33]
arr.length;
// 3


obj = {a: 1, b:2, c:3};
// {a: 1, b: 2, c: 3}
delete obj.b;
// true
obj
// {a: 1, c: 3}




*/


/* 


const arr = [3,4];
// (2) [3, 4]
arr.map((i) => console.log(`i = ${i}`));
// i = 3
// i = 4



    if (divs[i].classList.contains(`show`)) {
        divs[i].classList.remove("show");
        divs[i].classList.add("hide");
    }else{
        divs[i].classList.add("show");
        divs[i].classList.remove("hide");
    }
    

divs[0].classList.contains(`show`);
// true

divs[0].classList.value;
// "h5-dnd-nav-box h5-dnd-nav-box-active show"


// 在为属性设置新值前检测该属性是否存在
var d = document.getElementById("div1"); 

if (d.hasAttribute("align")) { 
    d.setAttribute("align", "center"); 
}


if (d.hasAttribute("class")) { 
    d.setAttribute("class", "show"); 
}



*/


/* 

arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);

*/


// data-nav-li="nav-li"
// data-nav-box="nav-box"








