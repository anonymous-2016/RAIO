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
        console.log(`i = `, i);
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
                    console.log(`item = ${item}`);
                    console.log(`index = ${index}`);
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
                    console.log(`item = ${item}`);
                    console.log(`index = ${index}`);
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
    small_container = document.querySelector(`[data-nav-small-container="nav-small-container"]`);;

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
};




let url_params = decodeURIComponent(window.location.search);
// "?gilcode=600570.SH&skin=white&type=4&name=恒生电子"
let url_params = window.location.search;
// "?gilcode=600570.SH&skin=white&type=4&name=%E6%81%92%E7%94%9F%E7%94%B5%E5%AD%90"

let gilcode = url_params.substr(url_params.indexOf(`=`)+1, url_params.indexOf(`.SH`) - url_params.indexOf(`=`) -1);
// "600570"

gilcode = url_params.substr(url_params.indexOf(`=`)+1, 6);
// "600570"


gilcode = url_params.slice(url_params.indexOf(`=`)+1, url_params.indexOf(`.SH`));
// "600570"












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








